import { essentialPhrases, phraseStudyNotes } from '../data/phrases';
import { SpeakButton } from '../components/SpeakButton';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';

function localDateKey() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

export function PhrasesPage() {
  const { t, ui } = useLanguage();
  const { state, markPhrasePracticed, unmarkPhrasePracticed } = useProgress();
  const practicedToday = state.phrasePractice[localDateKey()] ?? {};

  return (
    <div className="page phrases-page">
      <h1>{ui('phrases.title')}</h1>
      <p className="lesson-description">{ui('phrases.intro')}</p>

      <ol className="phrase-list">
        {essentialPhrases.map((p, i) => (
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
              </div>
              <div className="phrase-meaning">{t(p.meaning)}</div>
              <div className="phrase-study-notes">
                <div>
                  <span>{ui('phrases.structure')}</span>
                  <p>{t(phraseStudyNotes[p.id].structure)}</p>
                </div>
                <div>
                  <span>{ui('phrases.pronunciation')}</span>
                  <p className="phrase-ipa">{t(phraseStudyNotes[p.id].pronunciation)}</p>
                </div>
                <div>
                  <span>{ui('phrases.soundRule')}</span>
                  <p>{t(phraseStudyNotes[p.id].rule)}</p>
                </div>
              </div>

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
        ))}
      </ol>
    </div>
  );
}
