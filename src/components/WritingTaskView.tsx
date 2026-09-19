import { useState } from 'react';
import type { WritingTask } from '../types';
import { useLanguage } from '../context/LanguageContext';

export function WritingTaskView({ task }: { task: WritingTask }) {
  const { t, ui } = useLanguage();
  const [text, setText] = useState('');
  const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  const met = wordCount >= task.minWords;

  return (
    <div className="task-view">
      <p className="task-prompt">{t(task.prompt)}</p>
      <ul className="task-tips">
        {task.tips.map((tip) => (
          <li key={tip.en}>{t(tip)}</li>
        ))}
      </ul>
      <textarea
        className="writing-textarea"
        rows={8}
        placeholder="Écrivez votre réponse ici..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className={`word-count${met ? ' met' : ''}`}>
        {ui('writing.wordCount', { count: wordCount, min: task.minWords })} {met ? '✓' : ''}
      </div>
    </div>
  );
}
