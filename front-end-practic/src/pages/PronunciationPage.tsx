import { SpeakButton } from '../components/SpeakButton';
import { useLanguage } from '../context/LanguageContext';
import {
  alphabetLetters,
  simpleVowels,
  nasalVowels,
  consonantRules,
  liaisonObligatory,
  liaisonForbidden,
  liaisonOptional,
  liaisonSoundChanges,
  type SoundGroup,
  type LiaisonExample,
} from '../data/pronunciation';

function AlphabetGrid() {
  const { t } = useLanguage();
  return (
    <div className="alphabet-grid">
      {alphabetLetters.map((l) => (
        <div className="alphabet-card" key={l.letter}>
          <div className="alphabet-letter-row">
            <span className="alphabet-letter">{l.letter}</span>
            <SpeakButton text={l.spoken} />
          </div>
          <div className="alphabet-spoken">
            {l.spoken} <span className="sound-ipa">{l.ipa}</span>
          </div>
          <div className="alphabet-example">
            <span className="ex-fr">{l.example}</span>
            <SpeakButton text={l.example} />
            <span className="ex-en"> — {t(l.exampleTranslation)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function SoundGroupList({ groups }: { groups: SoundGroup[] }) {
  const { t } = useLanguage();
  return (
    <div className="sound-grid">
      {groups.map((g) => (
        <div className="sound-card" key={g.spelling}>
          <div className="sound-card-head">
            <span className="sound-spelling">{g.spelling}</span>
            <span className="sound-ipa">{g.ipa}</span>
          </div>
          <p className="sound-desc">{t(g.description)}</p>
          <ul className="sound-examples">
            {g.examples.map((ex) => (
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

function liaisonAudioText(fr: string) {
  return fr.replace(/[_‿]/g, ' ').replace(/\(|\)/g, '');
}

function LiaisonList({ items, tone }: { items: LiaisonExample[]; tone: 'ok' | 'no' | 'maybe' }) {
  const { t } = useLanguage();
  return (
    <ul className="liaison-list">
      {items.map((item) => (
        <li key={item.fr} className={`liaison-item liaison-${tone}`}>
          <div className="liaison-fr-row">
            <span className="liaison-fr">{item.fr.replace(/_/g, '‿')}</span>
            <SpeakButton text={liaisonAudioText(item.fr)} />
          </div>
          <p className="liaison-note">{t(item.note)}</p>
        </li>
      ))}
    </ul>
  );
}

export function PronunciationPage() {
  const { ui } = useLanguage();

  return (
    <div className="page pronunciation-page">
      <h1>{ui('pron.title')}</h1>
      <p className="lesson-description">{ui('pron.intro')}</p>

      <section className="lesson-section">
        <h2>{ui('pron.alphabet')}</h2>
        <p className="section-intro">{ui('pron.alphabetIntro')}</p>
        <AlphabetGrid />
      </section>

      <section className="lesson-section">
        <h2>{ui('pron.section1')}</h2>
        <SoundGroupList groups={simpleVowels} />
      </section>

      <section className="lesson-section">
        <h2>{ui('pron.section2')}</h2>
        <p className="section-intro">{ui('pron.section2intro')}</p>
        <SoundGroupList groups={nasalVowels} />
      </section>

      <section className="lesson-section">
        <h2>{ui('pron.section3')}</h2>
        <div className="grammar-section">
          {consonantRules.map((rule) => (
            <ConsonantRuleCard key={rule.title.en} rule={rule} />
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>{ui('pron.section4')}</h2>
        <p className="section-intro">{ui('pron.section4intro')}</p>

        <h3 className="liaison-subheading">{ui('pron.liaisonObligatory')}</h3>
        <LiaisonList items={liaisonObligatory} tone="ok" />

        <h3 className="liaison-subheading">{ui('pron.liaisonForbidden')}</h3>
        <LiaisonList items={liaisonForbidden} tone="no" />

        <h3 className="liaison-subheading">{ui('pron.liaisonOptional')}</h3>
        <LiaisonList items={liaisonOptional} tone="maybe" />

        <h3 className="liaison-subheading">{ui('pron.soundChanges')}</h3>
        <table className="nclc-table liaison-sound-table">
          <thead>
            <tr>
              <th>{ui('pron.table.letter')}</th>
              <th>{ui('pron.table.sound')}</th>
              <th>{ui('pron.table.example')}</th>
            </tr>
          </thead>
          <tbody>
            {liaisonSoundChanges.map((row) => (
              <tr key={row.letter}>
                <td>{row.letter}</td>
                <td>{row.becomes}</td>
                <td>{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

function ConsonantRuleCard({ rule }: { rule: (typeof consonantRules)[number] }) {
  const { t } = useLanguage();
  return (
    <div className="grammar-point">
      <h4>{t(rule.title)}</h4>
      <p>{t(rule.explanation)}</p>
      <ul className="grammar-examples">
        {rule.examples.map((ex) => (
          <li key={ex.fr}>
            <span className="ex-fr">{ex.fr}</span>
            <SpeakButton text={ex.fr} />
            <span className="ex-en"> — {t(ex.translation)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
