import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function NavBar() {
  const { ui, toggleLang } = useLanguage();

  return (
    <header className="navbar">
      <NavLink to="/" className="brand" end>
        <span className="brand-flag">🇫🇷</span>
        <span>Apprendre le français</span>
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/prononciation"><span className="nav-icon">📕</span>{ui('nav.pronunciation')}</NavLink>
        <NavLink to="/phrases"><span className="nav-icon">💬</span>{ui('nav.phrases')}</NavLink>
        <NavLink to="/level/A1"><span className="nav-icon">🫙</span>A1</NavLink>
        <NavLink to="/level/A2"><span className="nav-icon">🫙</span>A2</NavLink>
        <NavLink to="/level/B1"><span className="nav-icon">🫙</span>B1</NavLink>
        <NavLink to="/level/B2"><span className="nav-icon">🫙</span>B2</NavLink>
        <NavLink to="/tcf-canada"><span className="nav-icon">⌑</span>TCF Canada</NavLink>
        <NavLink to="/progress"><span className="nav-icon">🗓️</span>{ui('nav.progress')}</NavLink>
        <button type="button" className="lang-toggle" onClick={toggleLang}>
          {ui('nav.switchTo')}
        </button>
      </nav>
    </header>
  );
}
