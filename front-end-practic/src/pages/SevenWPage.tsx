import { Link } from 'react-router-dom';
import { SpeakButton } from '../components/SpeakButton';
import { SyllableSpeakButton } from '../components/SyllableSpeakButton';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { sevenWQuestionItems } from '../data/sevenWQuestions';

export function SevenWPage() {
  const { t, ui } = useLanguage();
  const { state, toggleFlashcard } = useProgress();

  return (
    <div className="page phrases-page">
      <div className="lesson-breadcrumb">
        <Link to="/level/A1">{ui('lesson.backToUnits', { level: 'A1' })}</Link>
      </div>

      <h1>{ui('sevenw.title')}</h1>
      <p className="lesson-description">{ui('sevenw.intro')}</p>

      <ol className="phrase-list">
        {sevenWQuestionItems.map((item) => (
          <li className="phrase-item" key={item.id}>
            <div className="phrase-body">
              <div className="phrase-fr-row">
                <span className="phrase-fr">{item.word}</span>
                <SpeakButton text={item.word} />
              </div>
              <div className="phrase-meaning">{t(item.meaning)}</div>

              <div className="phrase-study-notes">
                <div>
                  <span>{ui('phrases.structure')}</span>
                  <p>{t(item.structure)}</p>
                </div>

                <div>
                  <span>{ui('phrases.pronunciation')}</span>
                  <SyllableSpeakButton syllables={item.syllables} label={ui('phrases.playSegments')} />
                </div>

                <div>
                  <span>{ui('phrases.soundRule')}</span>
                  <p>{t(item.soundFocus)}</p>
                </div>

                <div className="phrase-word-usage">
                  <span>{ui('phrases.wordUsage')}</span>
                  <ul>
                    {item.usage.map((entry) => (
                      <li key={`${item.id}-${entry.label}`}>
                        <strong>{entry.label}</strong> — {t(entry.text)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="phrase-variants">
                <div className="phrase-variants-label">{ui('phrases.similar')}</div>
                <ul className="phrase-variant-list">
                  {item.examples.map((example) => (
                    <li key={example.id} className="phrase-variant-item">
                      <span className="phrase-variant-fr">{example.fr}</span>
                      <SpeakButton text={example.fr} />
                      <span className="phrase-variant-meaning"> — {t(example.meaning)}</span>
                      <button
                        type="button"
                        className={`phrase-flashcard-btn${state.flashcards[example.id] ? ' added' : ''}`}
                        onClick={() => toggleFlashcard(example.id)}
                        aria-pressed={!!state.flashcards[example.id]}
                      >
                        {state.flashcards[example.id] ? ui('phrases.flashcardAdded') : ui('phrases.addFlashcard')}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
