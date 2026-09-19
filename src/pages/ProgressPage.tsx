import { Link } from 'react-router-dom';
import { levels } from '../data/levels';
import { getUnitsByLevel } from '../data/units';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';
import { essentialPhrases } from '../data/phrases';

export function ProgressPage() {
  const { state, resetProgress } = useProgress();
  const { t, ui, lang } = useLanguage();
  const wordsReviewedCount = Object.keys(state.wordsReviewed).length;
  const phraseById = new Map(essentialPhrases.map((phrase) => [phrase.id, phrase]));
  const phrasePracticeDates = Object.entries(state.phrasePractice)
    .filter(([, phrases]) => Object.keys(phrases).length > 0)
    .sort(([first], [second]) => second.localeCompare(first));
  const practicedPhraseCount = new Set(phrasePracticeDates.flatMap(([, phrases]) => Object.keys(phrases))).size;

  const formatDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-CA', { dateStyle: 'long' });

  const handleReset = () => {
    if (window.confirm(ui('progress.resetConfirm'))) {
      resetProgress();
    }
  };

  return (
    <div className="page progress-page">
      <h1>{ui('progress.title')}</h1>
      <p className="progress-stat">{ui('progress.wordsReviewed', { count: wordsReviewedCount })}</p>
      <p className="progress-stat">{ui('progress.phrasesPracticed', { count: practicedPhraseCount })}</p>

      <section className="lesson-section phrase-history">
        <h2>{ui('progress.phraseHistory')}</h2>
        {phrasePracticeDates.length === 0 ? (
          <p className="progress-empty">{ui('progress.noPhrasePractice')}</p>
        ) : (
          <div className="phrase-history-list">
            {phrasePracticeDates.map(([date, phraseIds]) => {
              const phrases = Object.keys(phraseIds)
                .map((id) => phraseById.get(id))
                .filter((phrase): phrase is (typeof essentialPhrases)[number] => !!phrase);
              return (
                <article className="phrase-history-day" key={date}>
                  <h3>{formatDate(date)}</h3>
                  <p>{ui('progress.phrasesOnDate', { count: phrases.length })}</p>
                  <ul>
                    {phrases.map((phrase) => (
                      <li key={phrase.id}>{phrase.fr}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {levels.map((level) => {
        const units = getUnitsByLevel(level.id);
        return (
          <section className="lesson-section" key={level.id}>
            <h2>{t(level.title)}</h2>
            <div className="progress-unit-list">
              {units.map((unit) => {
                const done = !!state.completedUnits[unit.id];
                const attempt = state.quizAttempts[unit.id];
                return (
                  <Link to={`/level/${unit.level}/${unit.id}`} className="progress-unit-row" key={unit.id}>
                    <span>{done ? '✅' : '⬜️'}</span>
                    <span className="progress-unit-title">{t(unit.title)}</span>
                    {attempt && (
                      <span className="progress-unit-score">
                        {attempt.score}/{attempt.total}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      <button type="button" className="btn-danger" onClick={handleReset}>
        {ui('progress.resetAll')}
      </button>
    </div>
  );
}
