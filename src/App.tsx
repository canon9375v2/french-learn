import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { PronunciationPage } from './pages/PronunciationPage';
import { PhrasesPage } from './pages/PhrasesPage';
import { LevelOverview } from './pages/LevelOverview';
import { LessonPage } from './pages/LessonPage';
import { TCFInfoPage } from './pages/TCFInfoPage';
import { ProgressPage } from './pages/ProgressPage';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prononciation" element={<PronunciationPage />} />
          <Route path="/phrases" element={<PhrasesPage />} />
          <Route path="/level/:levelId" element={<LevelOverview />} />
          <Route path="/level/:levelId/:unitId" element={<LessonPage />} />
          <Route path="/tcf-canada" element={<TCFInfoPage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
