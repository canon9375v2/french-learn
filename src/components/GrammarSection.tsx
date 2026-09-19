import type { GrammarPoint } from '../types';
import { SpeakButton } from './SpeakButton';
import { useLanguage } from '../context/LanguageContext';

export function GrammarSection({ points }: { points: GrammarPoint[] }) {
  const { t } = useLanguage();

  return (
    <div className="grammar-section">
      {points.map((point) => (
        <div className="grammar-point" key={point.title.en}>
          <h4>{t(point.title)}</h4>
          <p>{t(point.explanation)}</p>
          <ul className="grammar-examples">
            {point.examples.map((ex) => (
              <li key={ex.fr}>
                <span className="ex-fr">{ex.fr}</span>
                <SpeakButton text={ex.fr} />
                <span className="ex-en"> — {t(ex.translation)}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
