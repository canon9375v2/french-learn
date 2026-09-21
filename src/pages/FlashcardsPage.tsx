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
