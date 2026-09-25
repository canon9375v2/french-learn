import { useMemo, useState } from 'react';
import { essentialPhrases, simplePhrases } from '../data/phrases';
import { etreSentences } from '../data/etreVerb';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { SpeakButton } from '../components/SpeakButton';
import type { Localized } from '../types';

interface FlashcardSource {
  id: string;
  fr: string;
  meaning: Localized;
}

interface ScenarioResponse {
  title: string;
  situation: string;
  openingMessage: string;
  nextQuestion: string;
  targetPhrases: string[];
}

type Deck = 'all' | 'essential' | 'simple' | 'etre';

const phraseSets: Record<Exclude<Deck, 'all'>, FlashcardSource[]> = {
  essential: essentialPhrases,
  simple: simplePhrases,
  etre: etreSentences,
};

export function FlashcardsPage() {
  const { t, ui } = useLanguage();
  const { state, toggleFlashcard } = useProgress();
  const [deck, setDeck] = useState<Deck>('all');
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [topic, setTopic] = useState('introducing yourself');
  const [level, setLevel] = useState('A1');
  const [scenario, setScenario] = useState<ScenarioResponse | null>(null);
  const [scenarioLoading, setScenarioLoading] = useState(false);
  const [scenarioError, setScenarioError] = useState('');

  const cards = useMemo(() => {
    const source = deck === 'all' ? [...essentialPhrases, ...simplePhrases, ...etreSentences] : phraseSets[deck];
    return source.filter((phrase) => state.flashcards[phrase.id]);
  }, [deck, state.flashcards]);
  const card = cards.length ? cards[index % cards.length] : null;

  const chooseDeck = (nextDeck: Deck) => {
    setDeck(nextDeck);
    setIndex(0);
    setRevealed(false);
  };
  const nextCard = () => {
    setIndex((current) => (cards.length ? (current + 1) % cards.length : 0));
    setRevealed(false);
  };
  const removeCard = () => {
    if (!card) return;
    toggleFlashcard(card.id);
    setIndex(0);
    setRevealed(false);
  };

  const generateScenario = async () => {
    setScenarioLoading(true);
    setScenarioError('');
    try {
      const scenarioApiUrl = import.meta.env.VITE_SCENARIO_API_URL || '/api/scenario';
      const response = await fetch(scenarioApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          level,
          topic,
          cards: cards.map((flashcard) => ({ french: flashcard.fr, meaning: t(flashcard.meaning) })),
        }),
      });
      const responseText = await response.text();
      let result: ScenarioResponse | { error?: string };
      try {
        result = JSON.parse(responseText) as ScenarioResponse | { error?: string };
      } catch {
        throw new Error(responseText || ui('flashcards.aiError'));
      }
      if (!response.ok || 'error' in result) throw new Error(('error' in result && result.error) || ui('flashcards.aiError'));
      if (!('title' in result)) throw new Error(ui('flashcards.aiError'));
      setScenario(result);
    } catch (error) {
      setScenarioError(error instanceof Error ? error.message : ui('flashcards.aiError'));
    } finally {
      setScenarioLoading(false);
    }
  };

  return (
    <div className="page flashcards-page">
      <h1>{ui('flashcards.title')}</h1>
      <p className="lesson-description">{ui('flashcards.intro')}</p>

      <div className="flashcard-decks" role="group" aria-label={ui('flashcards.deckLabel')}>
        {(['all', 'essential', 'simple', 'etre'] as Deck[]).map((deckId) => (
          <button
            type="button"
            key={deckId}
            className={deck === deckId ? 'active' : ''}
            onClick={() => chooseDeck(deckId)}
          >
            {ui(`flashcards.deck.${deckId}`)}
          </button>
        ))}
      </div>

      <section className="scenario-panel" aria-labelledby="scenario-title">
        <div className="scenario-panel-heading">
          <div>
            <h2 id="scenario-title">{ui('flashcards.aiTitle')}</h2>
            <p>{ui('flashcards.aiIntro')}</p>
          </div>
          <span className="scenario-card-count">{ui('flashcards.aiCardCount', { count: cards.length })}</span>
        </div>
        <div className="scenario-controls">
          <label>
            {ui('flashcards.aiTopic')}
            <select value={topic} onChange={(event) => setTopic(event.target.value)}>
              <option value="introducing yourself">{ui('flashcards.aiTopic.introduction')}</option>
              <option value="ordering at a café">{ui('flashcards.aiTopic.cafe')}</option>
              <option value="asking for directions">{ui('flashcards.aiTopic.directions')}</option>
              <option value="a job interview">{ui('flashcards.aiTopic.interview')}</option>
            </select>
          </label>
          <label>
            {ui('flashcards.aiLevel')}
            <select value={level} onChange={(event) => setLevel(event.target.value)}>
              <option value="A1">A1</option><option value="A2">A2</option><option value="B1">B1</option><option value="B2">B2</option>
            </select>
          </label>
          <button type="button" className="scenario-generate" onClick={generateScenario} disabled={!cards.length || scenarioLoading}>
            {scenarioLoading ? ui('flashcards.aiGenerating') : ui('flashcards.aiGenerate')}
          </button>
        </div>
        {scenarioError && <p className="scenario-error" role="alert">{scenarioError}</p>}
        {scenario && (
          <article className="scenario-result">
            <span className="scenario-label">{ui('flashcards.aiScenario')}</span>
            <h3>{scenario.title}</h3>
            <p>{scenario.situation}</p>
            <blockquote>{scenario.openingMessage}</blockquote>
            <p><strong>{ui('flashcards.aiNextQuestion')}</strong> {scenario.nextQuestion}</p>
            <div className="scenario-targets">
              <strong>{ui('flashcards.aiTargetPhrases')}</strong>
              <ul>{scenario.targetPhrases.map((phrase) => <li key={phrase}>{phrase}</li>)}</ul>
            </div>
          </article>
        )}
      </section>

      {!card ? (
        <div className="flashcard-empty">
          <p>{ui('flashcards.empty')}</p>
        </div>
      ) : (
        <div className="flashcard-wrap">
          <p className="flashcard-count">{index % cards.length + 1} / {cards.length}</p>
          <article className={`flashcard${revealed ? ' revealed' : ''}`}>
            <span className="flashcard-label">{ui('flashcards.chinese')}</span>
            <p className="flashcard-meaning">{t(card.meaning)}</p>
            <div className="flashcard-answer">
              {revealed ? (
                <div className="flashcard-answer-row">
                  <p>{card.fr}</p>
                  <SpeakButton text={card.fr} />
                </div>
              ) : (
                <span>••••••••••••</span>
              )}
            </div>
            {!revealed && (
              <button type="button" className="flashcard-reveal" onClick={() => setRevealed(true)}>
                {ui('flashcards.reveal')}
              </button>
            )}
          </article>
          <div className="flashcard-actions">
            <button type="button" className="flashcard-remove" onClick={removeCard}>{ui('flashcards.remove')}</button>
            <button type="button" className="flashcard-next" onClick={nextCard}>{ui('flashcards.next')}</button>
          </div>
        </div>
      )}
    </div>
  );
}
