import { Link } from 'react-router-dom';
import { etreConjugation, etreSentences } from '../data/etreVerb';
import { SpeakButton } from '../components/SpeakButton';
import { SyllableSpeakButton } from '../components/SyllableSpeakButton';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';

export function EtreVerbPage() {
  const { t, ui } = useLanguage();
  const { state, toggleFlashcard } = useProgress();

  return (
    <div className="page etre-page">
      <div className="lesson-breadcrumb">
        <Link to="/level/A1">{ui('lesson.backToUnits', { level: 'A1' })}</Link>
      </div>
      <h1>{ui('etre.title')}</h1>
      <p className="lesson-description">{ui('etre.intro')}</p>

      <section className="lesson-section">
        <h2>{ui('etre.conjugationTitle')}</h2>
        <table className="etre-table">
          <thead>
            <tr>
              <th>{ui('etre.table.pronoun')}</th>
              <th>{ui('etre.table.form')}</th>
              <th>{ui('etre.table.ipa')}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {etreConjugation.map((row) => (
              <tr key={row.pronoun}>
                <td>
                  {row.pronoun}
                  <span className="etre-pronoun-meaning"> — {t(row.pronounMeaning)}</span>
                </td>
                <td className="etre-form">{row.form}</td>
                <td className="etre-ipa">{row.ipa}</td>
                <td>
                  <SpeakButton text={`${row.pronoun.split(' / ')[0]} ${row.form}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <h2>{ui('etre.sentencesTitle')}</h2>
        <ol className="phrase-list">
          {etreSentences.map((s, i) => (
            <li className="phrase-item" key={s.id}>
              <span className="phrase-number">{i + 1}</span>
              <div className="phrase-body">
                <div className="phrase-fr-row">
                  <span className="phrase-fr">{s.fr}</span>
                  <SpeakButton text={s.fr} />
                  <button
                    type="button"
                    className={`phrase-flashcard-btn${state.flashcards[s.id] ? ' added' : ''}`}
                    onClick={() => toggleFlashcard(s.id)}
                    aria-pressed={!!state.flashcards[s.id]}
                  >
                    {state.flashcards[s.id] ? ui('phrases.flashcardAdded') : ui('phrases.addFlashcard')}
                  </button>
                </div>
                <div className="phrase-meaning">{t(s.meaning)}</div>
                <div className="phrase-study-notes">
                  <div>
                    <span>{ui('phrases.structure')}</span>
                    <p>{t(s.structure)}</p>
                  </div>
                  <div>
                    <span>{ui('phrases.pronunciation')}</span>
                    <SyllableSpeakButton text={s.fr} ipa={s.ipa} label={ui('phrases.playSegments')} />
                  </div>
                  <div>
                    <span>{ui('phrases.soundRule')}</span>
                    <p>{t(s.soundRule)}</p>
                  </div>
                  <div className="phrase-word-usage">
                    <span>{ui('phrases.wordUsage')}</span>
                    <ul>
                      {s.words.map((w) => (
                        <li key={w.word}>
                          <strong>{w.word}</strong> — {t(w.usage)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
