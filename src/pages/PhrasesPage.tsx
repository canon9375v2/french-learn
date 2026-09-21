import { essentialPhrases, phraseStudyNotes, type Phrase } from '../data/phrases';
import { SpeakButton } from '../components/SpeakButton';
import { SyllableSpeakButton } from '../components/SyllableSpeakButton';
import { PhrasePronunciationCheck } from '../components/PhrasePronunciationCheck';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';

function localDateKey() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

interface PhrasesPageProps {
  phrases?: Phrase[];
  title?: string;
  intro?: string;
}

export function PhrasesPage({ phrases = essentialPhrases, title, intro }: PhrasesPageProps) {
  const { t, ui } = useLanguage();
  const { state, markPhrasePracticed, unmarkPhrasePracticed, toggleFlashcard } = useProgress();
  const practicedToday = state.phrasePractice[localDateKey()] ?? {};

  return (
    <div className="page phrases-page">
      <h1>{title ?? ui('phrases.title')}</h1>
      <p className="lesson-description">{intro ?? ui('phrases.intro')}</p>

      <ol className="phrase-list">
        {phrases.map((p, i) => {
          const studyNote = phraseStudyNotes[p.id];
          return (
          <li className="phrase-item" key={p.id}>
            <span className="phrase-number">{i + 1}</span>
            <div className="phrase-body">
              <div className="phrase-fr-row">
                <span className="phrase-fr">{p.fr}</span>
                <SpeakButton text={p.fr} />
                <button
                  type="button"
                  className={`phrase-practice-btn${practicedToday[p.id] ? ' practiced' : ''}`}
                  onClick={() => (practicedToday[p.id] ? unmarkPhrasePracticed(p.id) : markPhrasePracticed(p.id))}
                  aria-pressed={!!practicedToday[p.id]}
                >
                  {practicedToday[p.id] ? ui('phrases.cancelPractice') : ui('phrases.practice')}
                </button>
                <button
                  type="button"
                  className={`phrase-flashcard-btn${state.flashcards[p.id] ? ' added' : ''}`}
                  onClick={() => toggleFlashcard(p.id)}
                  aria-pressed={!!state.flashcards[p.id]}
                >
                  {state.flashcards[p.id] ? ui('phrases.flashcardAdded') : ui('phrases.addFlashcard')}
                </button>
              </div>
              <div className="phrase-meaning">{t(p.meaning)}</div>
              {studyNote && <div className="phrase-study-notes">
                <div>
                  <span>{ui('phrases.structure')}</span>
                  <p>{t(studyNote.structure)}</p>
                </div>
                <div>
                  <span>{ui('phrases.pronunciation')}</span>
                  <SyllableSpeakButton
                    text={p.fr}
                    ipa={t(studyNote.pronunciation)}
                    label={ui('phrases.playSegments')}
                  />
                </div>
                <div>
                  <span>{ui('phrases.soundRule')}</span>
                  <p>{t(studyNote.rule)}</p>
                </div>
                <div className="phrase-word-usage">
                  <span>{ui('phrases.wordUsage')}</span>
                  <ul>
                    {studyNote.words.map((w) => (
                      <li key={w.word}>
                        <strong>{w.word}</strong> — {t(w.usage)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>}
              <details className="phrase-pronunciation-check">
                <summary>{ui('phrases.pronunciationCheck')}</summary>
                <PhrasePronunciationCheck text={p.fr} />
              </details>

              {p.variants.length > 0 && (
                <div className="phrase-variants">
                  <div className="phrase-variants-label">{ui('phrases.similar')}</div>
                  <ul className="phrase-variant-list">
                    {p.variants.map((v) => (
                      <li key={v.fr} className="phrase-variant-item">
                        <span className="phrase-variant-fr">{v.fr}</span>
                        <SpeakButton text={v.fr} />
                        <span className="phrase-variant-meaning"> — {t(v.meaning)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
          );
        })}
      </ol>
    </div>
  );
}
