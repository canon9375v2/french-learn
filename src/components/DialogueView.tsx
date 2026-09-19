import { useState } from 'react';
import type { Dialogue } from '../types';
import { SpeakButton } from './SpeakButton';
import { useLanguage } from '../context/LanguageContext';

export function DialogueView({ dialogue }: { dialogue: Dialogue }) {
  const [showTranslation, setShowTranslation] = useState(true);
  const { t, ui } = useLanguage();

  return (
    <div className="dialogue-view">
      <div className="dialogue-header">
        <h4>{t(dialogue.title)}</h4>
        <label className="translation-toggle">
          <input type="checkbox" checked={showTranslation} onChange={(e) => setShowTranslation(e.target.checked)} />
          {ui('dialogue.showTranslation')}
        </label>
      </div>
      <ul className="dialogue-lines">
        {dialogue.lines.map((line, i) => (
          <li key={i} className="dialogue-line">
            <strong>{line.speaker}:</strong> {line.fr}
            <SpeakButton text={line.fr} />
            {showTranslation && <div className="dialogue-en">{t(line.translation)}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
