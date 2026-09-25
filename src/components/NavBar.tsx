import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getUnitsByLevel } from '../data/units';
import type { CEFRLevel } from '../types';

const levels: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2'];

export function NavBar() {
  const { t, ui, toggleLang } = useLanguage();

  return (
    <aside className="navbar">
      <NavLink to="/" className="brand" end>
        <span className="brand-flag">🇫🇷</span>
        <span>Apprendre le français</span>
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/prononciation"><span className="nav-icon">📕</span>{ui('nav.pronunciation')}</NavLink>
        <div className="nav-phrase-group nav-group">
          <span className="nav-section"><span className="nav-icon">💬</span>{ui('nav.phrases')}</span>
          <NavLink to="/phrases/essential" className="nav-sub-link">必備 30 句短句</NavLink>
          <NavLink to="/phrases/simple" className="nav-sub-link">簡單短句</NavLink>
        </div>
        {levels.map((level) => {
          const units = getUnitsByLevel(level);
          return (
            <details className="nav-level-group" key={level} open={level === 'A1'}>
              <summary><span className="nav-icon">🫙</span><span>{level}</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-level-links">
                <NavLink to={`/level/${level}`} className="nav-sub-link">{ui('nav.overview')}</NavLink>
                {level === 'A1' && <NavLink to="/level/A1/cheat-sheet" className="nav-sub-link">{ui('nav.a1CheatSheet')}</NavLink>}
                {level === 'A1' && <NavLink to="/level/A1/etre" className="nav-sub-link">{ui('nav.etre')}</NavLink>}
                {units.map((unit) => (
                  <NavLink to={`/level/${level}/${unit.id}`} className="nav-sub-link" key={unit.id}>
                    {ui('nav.unit', { order: unit.order })}: {t(unit.title)}
                  </NavLink>
                ))}
              </div>
            </details>
          );
        })}
        <NavLink to="/tcf-canada"><span className="nav-icon">⌑</span>TCF Canada</NavLink>
        <NavLink to="/progress"><span className="nav-icon">🗓️</span>{ui('nav.progress')}</NavLink>
        <NavLink to="/flashcards"><span className="nav-icon">🃏</span>{ui('nav.flashcards')}</NavLink>
        <button type="button" className="lang-toggle" onClick={toggleLang}>
          {ui('nav.switchTo')}
        </button>
      </nav>
    </aside>
  );
}
