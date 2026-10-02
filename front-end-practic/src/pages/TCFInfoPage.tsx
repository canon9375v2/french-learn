import { tcfCanadaSections, nclcScale, tcfTips } from '../data/tcfInfo';
import { useLanguage } from '../context/LanguageContext';

export function TCFInfoPage() {
  const { t, ui } = useLanguage();

  return (
    <div className="page tcf-page">
      <h1>{ui('tcf.title')}</h1>
      <p>{ui('tcf.intro')}</p>

      <section className="lesson-section">
        <h2>{ui('tcf.examSections')}</h2>
        <div className="tcf-sections">
          {tcfCanadaSections.map((s) => (
            <div className="tcf-section-card" key={s.name.en}>
              <h3>{t(s.name)}</h3>
              <p className="tcf-duration">{t(s.duration)}</p>
              <p>{t(s.format)}</p>
              <p className="tcf-notes">{t(s.notes)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>{ui('tcf.nclcTitle')}</h2>
        <table className="nclc-table">
          <thead>
            <tr>
              <th>{ui('tcf.table.nclc')}</th>
              <th>{ui('tcf.table.cefr')}</th>
              <th>{ui('tcf.table.meaning')}</th>
            </tr>
          </thead>
          <tbody>
            {nclcScale.map((row) => (
              <tr key={row.nclc}>
                <td>{row.nclc}</td>
                <td>{row.cefr}</td>
                <td>{t(row.meaning)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <h2>{ui('tcf.studyTips')}</h2>
        <ul className="tips-list">
          {tcfTips.map((tip) => (
            <li key={tip.en}>{t(tip)}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
