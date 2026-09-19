import { Link, useParams, Navigate } from 'react-router-dom';
import { getLevelMeta } from '../data/levels';
import { getUnitsByLevel } from '../data/units';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';
import type { CEFRLevel } from '../types';

export function LevelOverview() {
  const { levelId } = useParams<{ levelId: string }>();
  const { state } = useProgress();
  const { t, ui } = useLanguage();
  const meta = getLevelMeta(levelId ?? '');

  if (!meta) return <Navigate to="/" replace />;

  const units = getUnitsByLevel(levelId as CEFRLevel);

  return (
    <div className="page level-page">
      <h1>{t(meta.title)}</h1>
      <p className="level-tagline">
        {t(meta.tagline)} · NCLC: {meta.ncLc}
      </p>
      <p>{t(meta.description)}</p>

      <div className="unit-list">
        {units.length === 0 && <p>{ui('level.comingSoon')}</p>}
        {units.map((unit) => {
          const done = !!state.completedUnits[unit.id];
          const attempt = state.quizAttempts[unit.id];
          return (
            <Link to={`/level/${meta.id}/${unit.id}`} className={`unit-card${done ? ' done' : ''}`} key={unit.id}>
              <div className="unit-card-header">
                <span className="unit-order">{ui('level.unitLabel', { order: unit.order })}</span>
                {done && <span className="done-badge">{ui('level.doneBadge')}</span>}
              </div>
              <h3>{t(unit.title)}</h3>
              <p>{t(unit.description)}</p>
              {attempt && (
                <p className="unit-quiz-score">{ui('level.lastQuizScore', { score: attempt.score, total: attempt.total })}</p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
