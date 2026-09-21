import { Navigate, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { PronunciationPage } from './pages/PronunciationPage';
import { PhrasesPage } from './pages/PhrasesPage';
import { LevelOverview } from './pages/LevelOverview';
import { LessonPage } from './pages/LessonPage';
import { TCFInfoPage } from './pages/TCFInfoPage';
import { ProgressPage } from './pages/ProgressPage';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { EtreVerbPage } from './pages/EtreVerbPage';
import { simplePhrases } from './data/phrases';
import { useLanguage } from './context/LanguageContext';
import './App.css';

function App() {
  const { ui } = useLanguage();
  return (
    <div className="app-shell">
      <NavBar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prononciation" element={<PronunciationPage />} />
          <Route path="/phrases" element={<Navigate to="/phrases/essential" replace />} />
          <Route path="/phrases/essential" element={<PhrasesPage />} />
          <Route
            path="/phrases/simple"
            element={<PhrasesPage phrases={simplePhrases} title={ui('phrases.simpleTitle')} intro={ui('phrases.simpleIntro')} />}
          />
          <Route path="/level/:levelId" element={<LevelOverview />} />
          <Route path="/level/A1/etre" element={<EtreVerbPage />} />
          <Route path="/level/:levelId/:unitId" element={<LessonPage />} />
          <Route path="/tcf-canada" element={<TCFInfoPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
