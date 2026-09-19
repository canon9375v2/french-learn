import type { VocabItem } from '../types';
import { SpeakButton } from './SpeakButton';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';

export function VocabList({ items }: { items: VocabItem[] }) {
  const { state, markWordReviewed } = useProgress();
  const { t, ui } = useLanguage();

  return (
    <ul className="vocab-list">
      {items.map((item) => {
        const reviewed = !!state.wordsReviewed[item.fr];
        return (
          <li key={item.fr} className={`vocab-item${reviewed ? ' reviewed' : ''}`}>
            <div className="vocab-main">
              <span className="vocab-fr">{item.fr}</span>
              <span className="vocab-en">{t(item.meaning)}</span>
            </div>
            <div className="vocab-actions">
              <SpeakButton text={item.fr} />
              <button
                type="button"
                className="review-toggle"
                onClick={() => markWordReviewed(item.fr)}
                aria-pressed={reviewed}
              >
                {reviewed ? ui('vocab.reviewed') : ui('vocab.markReviewed')}
              </button>
            </div>
            {item.example && (
              <p className="vocab-example">
                <em>{item.example}</em>
                {item.exampleTranslation && <> — {t(item.exampleTranslation)}</>}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
