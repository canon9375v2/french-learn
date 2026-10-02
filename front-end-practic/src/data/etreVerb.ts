import type { Localized } from '../types';
import type { WordUsage, SyllablePair } from './phrases';

export interface EtreForm {
  pronoun: string;
  pronounMeaning: Localized;
  form: string;
  ipa: string;
}

export const etreConjugation: EtreForm[] = [
  { pronoun: 'je', pronounMeaning: { en: 'I', zh: '我' }, form: 'suis', ipa: '/ʒə sɥi/' },
  { pronoun: 'tu', pronounMeaning: { en: 'you (informal)', zh: '你（非正式）' }, form: 'es', ipa: '/ty ɛ/' },
  { pronoun: 'il / elle / on', pronounMeaning: { en: 'he / she / one', zh: '他／她／（泛指或口語的我們）' }, form: 'est', ipa: '/il ɛ/' },
  { pronoun: 'nous', pronounMeaning: { en: 'we', zh: '我們' }, form: 'sommes', ipa: '/nu sɔm/' },
  { pronoun: 'vous', pronounMeaning: { en: 'you (formal / plural)', zh: '您／你們' }, form: 'êtes', ipa: '/vu.z‿ɛt/' },
  { pronoun: 'ils / elles', pronounMeaning: { en: 'they (m. / f.)', zh: '他們／她們' }, form: 'sont', ipa: '/il sɔ̃/' },
];

export interface EtreSentence {
  id: string;
  fr: string;
  meaning: Localized;
  structure: Localized;
  ipa: string;
  soundRule: Localized;
  words: WordUsage[];
  syllables: SyllablePair[];
}

export const etreSentences: EtreSentence[] = [
  {
    id: 'etre-1',
    fr: 'Je suis français.',
    meaning: { en: 'I am French.', zh: '我是法國人。' },
    structure: { en: 'Je + être (suis) + nationality adjective', zh: 'Je + être（suis）+ 國籍形容詞' },
    ipa: '/ʒə sɥi fʁɑ̃.sɛ/',
    soundRule: {
      en: 'français ends in nasal /ɑ̃/ then /sɛ/; the final -s is silent.',
      zh: 'français 先讀鼻母音 /ɑ̃/ 再讀 /sɛ/；字尾 s 不發音。',
    },
    words: [
      { word: 'suis', usage: { en: '"je" form of être (to be).', zh: 'être（是）的 je 變位。' } },
      { word: 'français', usage: { en: 'Nationality adjective, written lowercase when describing a person.', zh: '國籍形容詞，描述人時小寫（非專有名詞）。' } },
    ],
    syllables: [{ fr: 'Je', ipa: 'ʒə' }, { fr: 'suis', ipa: 'sɥi' }, { fr: 'français', ipa: 'fʁɑ̃.sɛ' }],
  },
  {
    id: 'etre-2',
    fr: 'Tu es hongkongais(e).',
    meaning: { en: 'You are a Hong Konger.', zh: '你是香港人。' },
    structure: { en: 'Tu + être (es) + nationality adjective', zh: 'Tu + être（es）+ 國籍形容詞' },
    ipa: '/ty ɛ ɔ̃.kɔ̃.ɡɛ/',
    soundRule: {
      en: 'es is a short /ɛ/ with no liaison to tu; the (e) marks feminine spelling only — pronunciation is the same.',
      zh: 'es 讀短音 /ɛ/，與 tu 不連音；括號 e 只是陰性拼寫，發音相同。',
    },
    words: [
      { word: 'es', usage: { en: '"tu" form of être.', zh: 'être 的 tu 變位。' } },
      { word: 'hongkongais(e)', usage: { en: 'Adjective "from Hong Kong"; add (e) for a feminine subject.', zh: '「香港的／香港人」形容詞，陰性主詞加 e。' } },
    ],
    syllables: [{ fr: 'Tu', ipa: 'ty' }, { fr: 'es', ipa: 'ɛ' }, { fr: 'hongkongais(e)', ipa: 'ɔ̃.kɔ̃.ɡɛ' }],
  },
  {
    id: 'etre-3',
    fr: 'Il est grand.',
    meaning: { en: 'He is tall.', zh: '他很高。' },
    structure: { en: 'Il + être (est) + adjective', zh: 'Il + être（est）+ 形容詞' },
    ipa: '/il ɛ ɡʁɑ̃/',
    soundRule: {
      en: 'est is /ɛ/ with a silent final -t; grand ends in nasal /ɑ̃/ with a silent final -d.',
      zh: 'est 讀 /ɛ/，字尾 t 不發音；grand 讀鼻母音 /ɑ̃/，字尾 d 不發音。',
    },
    words: [
      { word: 'est', usage: { en: '"il / elle / on" form of être.', zh: 'être 的 il/elle/on 變位。' } },
      { word: 'grand', usage: { en: 'Adjective "tall", agreeing with a masculine subject.', zh: '形容詞「高的」，與陽性主詞一致。' } },
    ],
    syllables: [{ fr: 'Il', ipa: 'il' }, { fr: 'est', ipa: 'ɛ' }, { fr: 'grand', ipa: 'ɡʁɑ̃' }],
  },
  {
    id: 'etre-4',
    fr: 'On est en 2026.',
    meaning: { en: "It's 2026.", zh: '現在是 2026 年。' },
    structure: { en: 'On + être (est) + en + year (fixed way to state the year)', zh: 'On + être（est）+ en + 年份（表達年份的固定句型）' },
    ipa: '/ɔ̃.n‿ɛ ɑ̃ dø.mil.vɛ̃t.sis/',
    soundRule: {
      en: 'on est makes a liaison, /ɔ̃.n‿ɛ/; en links smoothly into the year that follows.',
      zh: 'on est 要連音成 /ɔ̃.n‿ɛ/；en 與後面的年份順暢相連。',
    },
    words: [
      { word: 'On', usage: { en: 'Informal subject pronoun, often replacing "nous"; here used impersonally like English "it" for dates.', zh: '口語主詞代詞，常代替 nous；這裡像英文的「it」，用於表達日期／年份。' } },
      { word: 'en', usage: { en: 'Preposition used before a year to mean "in".', zh: '介系詞，用在年份前表示「在……（年）」。' } },
    ],
    syllables: [{ fr: 'On est', ipa: 'ɔ̃.n‿ɛ' }, { fr: 'en', ipa: 'ɑ̃' }, { fr: '2026', ipa: 'dø.mil.vɛ̃t.sis' }],
  },
  {
    id: 'etre-5',
    fr: 'Vous êtes très intelligent.',
    meaning: { en: 'You are very intelligent. (formal)', zh: '您非常聰明。（正式）' },
    structure: { en: 'Vous + être (êtes) + très + adjective', zh: 'Vous + être（êtes）+ très + 形容詞' },
    ipa: '/vu.z‿ɛt tʁɛ ɛ̃.tɛ.li.ʒɑ̃/',
    soundRule: {
      en: 'vous êtes makes a liaison, /vu.z‿ɛt/; the circumflex on ê does not change the pronunciation here.',
      zh: 'vous êtes 要連音成 /vu.z‿ɛt/；ê 上的長音符號在這裡不影響發音。',
    },
    words: [
      { word: 'êtes', usage: { en: '"vous" form of être.', zh: 'être 的 vous 變位。' } },
      { word: 'très', usage: { en: 'Adverb "very", placed directly before the adjective.', zh: '副詞「非常」，放在形容詞前面。' } },
    ],
    syllables: [{ fr: 'Vous êtes', ipa: 'vu.z‿ɛt' }, { fr: 'très', ipa: 'tʁɛ' }, { fr: 'intelligent', ipa: 'ɛ̃.tɛ.li.ʒɑ̃' }],
  },
  {
    id: 'etre-6',
    fr: 'Ils sont fans de Cristiano Ronaldo.',
    meaning: { en: 'They are fans of Cristiano Ronaldo.', zh: '他們是C羅（Cristiano Ronaldo）的粉絲。' },
    structure: { en: 'Ils + être (sont) + fans de + person', zh: 'Ils + être（sont）+ fans de + 人名' },
    ipa: '/il sɔ̃ fan də kʁis.tja.no ʁɔ.nal.do/',
    soundRule: {
      en: 'sont ends in nasal /ɔ̃/; "fans" is a borrowed English word but still takes the French plural -s.',
      zh: 'sont 讀鼻母音 /ɔ̃/；fans 雖是外來詞，複數同樣加 -s。',
    },
    words: [
      { word: 'sont', usage: { en: '"ils / elles" form of être.', zh: 'être 的 ils/elles 變位。' } },
      { word: 'fans de', usage: { en: 'Fixed expression "fan(s) of ___" — de introduces who they admire.', zh: '固定用語「……的粉絲」，de 後面接對象。' } },
    ],
    syllables: [{ fr: 'Ils', ipa: 'il' }, { fr: 'sont', ipa: 'sɔ̃' }, { fr: 'fans', ipa: 'fan' }, { fr: 'de', ipa: 'də' }, { fr: 'Cristiano', ipa: 'kʁis.tja.no' }, { fr: 'Ronaldo', ipa: 'ʁɔ.nal.do' }],
  },
];
