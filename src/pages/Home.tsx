import { Link } from 'react-router-dom';
import { levels } from '../data/levels';
import { allUnits, getUnitsByLevel } from '../data/units';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';

export function Home() {
  const { state } = useProgress();
  const { t, ui } = useLanguage();
  const completedCount = Object.keys(state.completedUnits).length;
  const totalUnits = allUnits.length;

  const nextUnit = allUnits.find((u) => !state.completedUnits[u.id]) ?? allUnits[0];

  return (
    <div className="page home-page">
      <section className="hero">
        <h1>{ui('home.title')}</h1>
        <p>{ui('home.subtitle')}</p>
        <div className="hero-progress">
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${(completedCount / totalUnits) * 100}%` }} />
          </div>
          <span>{ui('home.unitsCompleted', { completed: completedCount, total: totalUnits })}</span>
        </div>
        <div className="hero-actions">
          {nextUnit && (
            <Link to={`/level/${nextUnit.level}/${nextUnit.id}`} className="btn-primary continue-btn">
              {completedCount === 0 ? ui('home.startUnit1') : ui('home.continueLearning')} →
            </Link>
          )}
          <Link to="/prononciation" className="btn-secondary continue-btn">
            {ui('home.learnSoundsFirst')}
          </Link>
        </div>
      </section>

      <section className="levels-grid">
        {levels.map((level) => {
          const units = getUnitsByLevel(level.id);
          const done = units.filter((u) => state.completedUnits[u.id]).length;
          return (
            <Link to={`/level/${level.id}`} className="level-card" key={level.id}>
              <div className="level-card-top">
                <h3>{t(level.title)}</h3>
                <span className="ncLc-badge">{level.ncLc}</span>
              </div>
              <p className="level-tagline">{t(level.tagline)}</p>
              <p>{t(level.description)}</p>
              <div className="level-card-footer">{ui('home.levelUnitsCount', { done, total: units.length })}</div>
            </Link>
          );
        })}
      </section>

      <section className="home-links">
        <Link to="/tcf-canada" className="secondary-link">
          {ui('home.aboutTcf')}
        </Link>
      </section>
    </div>
  );
}
