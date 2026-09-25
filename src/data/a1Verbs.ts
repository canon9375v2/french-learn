import type { Localized } from '../types';

export interface A1VerbForm {
  pronoun: string;
  form: string;
  ipa: string;
}

export interface A1Verb {
  id: string;
  infinitive: string;
  meaning: Localized;
  group: Localized;
  forms: A1VerbForm[];
  example: string;
  exampleMeaning: Localized;
  note: Localized;
}

const forms = (rows: [string, string, string][]): A1VerbForm[] =>
  rows.map(([pronoun, form, ipa]) => ({ pronoun, form, ipa }));

export const a1Verbs: A1Verb[] = [
  {
    id: 'etre', infinitive: 'être', meaning: { en: 'to be', zh: '是' },
    group: { en: 'Irregular · identity, description, location', zh: '不規則 · 身分、描述、位置' },
    forms: forms([['je', 'suis', '/ʒə sɥi/'], ['tu', 'es', '/ty ɛ/'], ['il / elle / on', 'est', '/il ɛ/'], ['nous', 'sommes', '/nu sɔm/'], ['vous', 'êtes', '/vu.z‿ɛt/'], ['ils / elles', 'sont', '/il sɔ̃/']]),
    example: 'Je suis débutant.', exampleMeaning: { en: 'I am a beginner.', zh: '我是初學者。' },
    note: { en: 'Use être for who/what someone is, how they are, and where they are.', zh: 'être 用於表達身分、狀態，以及人或物的位置。' },
  },
  {
    id: 'avoir', infinitive: 'avoir', meaning: { en: 'to have', zh: '有' },
    group: { en: 'Irregular · possession, age, needs', zh: '不規則 · 擁有、年齡、需要' },
    forms: forms([['j\' / je', 'ai', '/ʒe/'], ['tu', 'as', '/ty a/'], ['il / elle / on', 'a', '/il a/'], ['nous', 'avons', '/nu.z‿a.vɔ̃/'], ['vous', 'avez', '/vu.z‿a.ve/'], ['ils / elles', 'ont', '/il.z‿ɔ̃/']]),
    example: "J'ai vingt ans.", exampleMeaning: { en: 'I am twenty years old.', zh: '我二十歲。' },
    note: { en: 'French says “have” for age: avoir + number + ans.', zh: '法文用「有」表達年齡：avoir + 數字 + ans。' },
  },
  {
    id: 'aller', infinitive: 'aller', meaning: { en: 'to go', zh: '去' },
    group: { en: 'Irregular · movement, near future', zh: '不規則 · 移動、近期未來' },
    forms: forms([['je', 'vais', '/ʒə vɛ/'], ['tu', 'vas', '/ty va/'], ['il / elle / on', 'va', '/il va/'], ['nous', 'allons', '/nu.z‿a.lɔ̃/'], ['vous', 'allez', '/vu.z‿a.le/'], ['ils / elles', 'vont', '/il vɔ̃/']]),
    example: 'Je vais au travail.', exampleMeaning: { en: 'I am going to work.', zh: '我去上班。' },
    note: { en: 'aller + infinitive makes the near future: Je vais partir.', zh: 'aller + 原形動詞構成近期未來：Je vais partir（我快要出發）。' },
  },
  {
    id: 'faire', infinitive: 'faire', meaning: { en: 'to do / make', zh: '做' },
    group: { en: 'Irregular · activities, weather', zh: '不規則 · 活動、天氣' },
    forms: forms([['je', 'fais', '/ʒə fɛ/'], ['tu', 'fais', '/ty fɛ/'], ['il / elle / on', 'fait', '/il fɛ/'], ['nous', 'faisons', '/nu fə.zɔ̃/'], ['vous', 'faites', '/vu fɛt/'], ['ils / elles', 'font', '/il fɔ̃/']]),
    example: 'Il fait beau.', exampleMeaning: { en: 'The weather is nice.', zh: '天氣很好。' },
    note: { en: 'Use faire in many fixed expressions: faire du sport, faire attention, faire chaud.', zh: 'faire 常出現在固定片語：做運動、注意、天氣熱。' },
  },
  {
    id: 'venir', infinitive: 'venir', meaning: { en: 'to come', zh: '來' },
    group: { en: 'Irregular · origin, arrival', zh: '不規則 · 來源、到來' },
    forms: forms([['je', 'viens', '/ʒə vjɛ̃/'], ['tu', 'viens', '/ty vjɛ̃/'], ['il / elle / on', 'vient', '/il vjɛ̃/'], ['nous', 'venons', '/nu və.nɔ̃/'], ['vous', 'venez', '/vu və.ne/'], ['ils / elles', 'viennent', '/il vjɛn/']]),
    example: 'Je viens de Montréal.', exampleMeaning: { en: 'I come from Montreal.', zh: '我來自蒙特婁。' },
    note: { en: 'venir de + place means “come from”; venir de + infinitive means “have just done”.', zh: 'venir de + 地點表示「來自」；venir de + 原形動詞表示「剛剛做了」。' },
  },
  {
    id: 'pouvoir', infinitive: 'pouvoir', meaning: { en: 'can / be able to', zh: '可以、能夠' },
    group: { en: 'Irregular · ability, permission', zh: '不規則 · 能力、許可' },
    forms: forms([['je', 'peux', '/ʒə pø/'], ['tu', 'peux', '/ty pø/'], ['il / elle / on', 'peut', '/il pø/'], ['nous', 'pouvons', '/nu pu.vɔ̃/'], ['vous', 'pouvez', '/vu pu.ve/'], ['ils / elles', 'peuvent', '/il pœv/']]),
    example: 'Je peux vous aider.', exampleMeaning: { en: 'I can help you.', zh: '我可以幫您。' },
    note: { en: 'pouvoir + infinitive: the second verb stays in the infinitive.', zh: 'pouvoir + 原形動詞：第二個動詞保持原形。' },
  },
  {
    id: 'vouloir', infinitive: 'vouloir', meaning: { en: 'to want', zh: '想要' },
    group: { en: 'Irregular · wishes, requests', zh: '不規則 · 願望、要求' },
    forms: forms([['je', 'veux', '/ʒə vø/'], ['tu', 'veux', '/ty vø/'], ['il / elle / on', 'veut', '/il vø/'], ['nous', 'voulons', '/nu vu.lɔ̃/'], ['vous', 'voulez', '/vu vu.le/'], ['ils / elles', 'veulent', '/il vœl/']]),
    example: 'Je voudrais un café.', exampleMeaning: { en: 'I would like a coffee.', zh: '我想要一杯咖啡。' },
    note: { en: 'For polite requests, use the conditional form voudrais / voudriez.', zh: '禮貌請求使用條件式 voudrais／voudriez。' },
  },
  {
    id: 'devoir', infinitive: 'devoir', meaning: { en: 'must / have to', zh: '必須' },
    group: { en: 'Irregular · obligation', zh: '不規則 · 義務' },
    forms: forms([['je', 'dois', '/ʒə dwa/'], ['tu', 'dois', '/ty dwa/'], ['il / elle / on', 'doit', '/il dwa/'], ['nous', 'devons', '/nu də.vɔ̃/'], ['vous', 'devez', '/vu də.ve/'], ['ils / elles', 'doivent', '/il dwav/']]),
    example: 'Je dois étudier.', exampleMeaning: { en: 'I must study.', zh: '我必須學習。' },
    note: { en: 'devoir + infinitive expresses an obligation or something expected.', zh: 'devoir + 原形動詞表示義務或預期要做的事。' },
  },
];
