import { Link } from 'react-router-dom';
import { a1Verbs } from '../data/a1Verbs';
import { SpeakButton } from '../components/SpeakButton';
import { useLanguage } from '../context/LanguageContext';

export function A1CheatSheetPage() {
  const { t, ui } = useLanguage();

  return (
    <div className="page etre-page cheat-sheet-page">
      <div className="lesson-breadcrumb">
        <Link to="/level/A1">{ui('lesson.backToUnits', { level: 'A1' })}</Link>
      </div>
      <div className="cheat-sheet-heading">
        <div>
          <h1>{ui('a1.title')}</h1>
          <p className="lesson-description">{ui('a1.intro')}</p>
        </div>
        <button type="button" className="btn-secondary print-button" onClick={() => window.print()}>
          {ui('a1.print')}
        </button>
      </div>

      <section className="lesson-section a1-overview">
        <h2>{ui('a1.coreRuleTitle')}</h2>
        <p>{ui('a1.coreRule')}</p>
        <div className="a1-patterns">
          <code>pouvoir / vouloir / devoir + infinitif</code>
          <code>aller + infinitif = futur proche</code>
          <code>venir de + infinitif = just did</code>
        </div>
      </section>

      {a1Verbs.map((verb) => (
        <section className="lesson-section a1-verb-section" key={verb.id}>
          <div className="a1-verb-heading">
            <div>
              <h2>{verb.infinitive} <span>— {t(verb.meaning)}</span></h2>
              <p className="level-tagline">{t(verb.group)}</p>
            </div>
            <SpeakButton text={verb.infinitive} />
          </div>
          <table className="etre-table a1-verb-table">
            <thead>
              <tr>
                <th>{ui('etre.table.pronoun')}</th>
                <th>{ui('etre.table.form')}</th>
                <th>{ui('etre.table.ipa')}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {verb.forms.map((form) => (
                <tr key={`${verb.id}-${form.pronoun}`}>
                  <td>{form.pronoun}</td>
                  <td className="etre-form">{form.form}</td>
                  <td className="etre-ipa">{form.ipa}</td>
                  <td><SpeakButton text={`${form.pronoun.split(' / ')[0]} ${form.form}`} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="a1-example">
            <div className="phrase-fr-row">
              <strong>{verb.example}</strong>
              <SpeakButton text={verb.example} />
            </div>
            <p>{t(verb.exampleMeaning)}</p>
            <small>{t(verb.note)}</small>
          </div>
        </section>
      ))}

      <section className="lesson-section a1-memory-section">
        <h2>{ui('a1.memoryTitle')}</h2>
        <ul className="tips-list">
          <li>{ui('a1.memory1')}</li>
          <li>{ui('a1.memory2')}</li>
          <li>{ui('a1.memory3')}</li>
          <li>{ui('a1.memory4')}</li>
        </ul>
      </section>
    </div>
  );
}
