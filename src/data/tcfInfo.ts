import type { Localized } from '../types';

export interface TcfSection {
  name: Localized;
  duration: Localized;
  format: Localized;
  notes: Localized;
}

export const tcfCanadaSections: TcfSection[] = [
  {
    name: { en: 'Compréhension orale (Listening)', zh: 'Compréhension orale（聽力）' },
    duration: { en: '~35 minutes, 39 questions', zh: '約 35 分鐘，39 題' },
    format: { en: 'Multiple choice, increasing difficulty, audio played once.', zh: '選擇題，難度遞增，音檔只播放一次。' },
    notes: {
      en: 'Mandatory for TCF Canada. Practice with the listening quiz questions in every unit here.',
      zh: 'TCF Canada 必考科目。可利用本站每個單元中的聽力測驗題目來練習。',
    },
  },
  {
    name: { en: 'Compréhension écrite (Reading)', zh: 'Compréhension écrite（閱讀）' },
    duration: { en: '~45 minutes, 39 questions', zh: '約 45 分鐘，39 題' },
    format: { en: 'Multiple choice, increasing difficulty, short and long passages.', zh: '選擇題，難度遞增，包含短文與長文。' },
    notes: { en: 'Mandatory. Use the reading-passage questions in each unit to build speed.', zh: '必考科目。利用每個單元的閱讀測驗題目來訓練答題速度。' },
  },
  {
    name: { en: 'Maîtrise des structures de la langue (Grammar)', zh: 'Maîtrise des structures de la langue（文法結構）' },
    duration: { en: '~15 minutes, 18 questions', zh: '約 15 分鐘，18 題' },
    format: { en: 'Multiple choice grammar/vocabulary gap-fill.', zh: '文法/詞彙填空選擇題。' },
    notes: {
      en: 'Mandatory for TCF Canada. The grammar-tagged quiz questions target this section directly.',
      zh: 'TCF Canada 必考科目。本站標記為「文法」的測驗題目就是針對這個科目設計的。',
    },
  },
  {
    name: { en: 'Expression écrite (Writing)', zh: 'Expression écrite（寫作）' },
    duration: { en: '~60 minutes, 3 tasks', zh: '約 60 分鐘，3 項任務' },
    format: {
      en: 'Short message, narrative/descriptive text, then an argumentative essay with opinion.',
      zh: '短訊息、敘述/描寫文，接著是帶有個人意見的論說文。',
    },
    notes: {
      en: 'Required for most Canadian immigration programs (Entry Express / Quebec). Use the writing tasks in each unit.',
      zh: '大多數加拿大移民項目（Entry Express／魁北克）都需要此科目成績。可利用每個單元的寫作練習來準備。',
    },
  },
  {
    name: { en: 'Expression orale (Speaking)', zh: 'Expression orale（口說）' },
    duration: { en: '~12 minutes, 3 tasks with an examiner', zh: '約 12 分鐘，與考官進行 3 項任務' },
    format: {
      en: 'Introduce yourself, ask questions about a topic, then debate/argue a position.',
      zh: '自我介紹、針對主題提問，接著就一個立場進行辯論/論述。',
    },
    notes: {
      en: 'Required for most immigration programs. Use the speaking tasks and practice out loud, ideally recording yourself.',
      zh: '大多數移民項目都需要此科目成績。請利用口說練習大聲開口練習，最好搭配錄音回放檢查。',
    },
  },
];

export const nclcScale = [
  { nclc: '3–4', cefr: 'A2', meaning: { en: 'Basic, low points for Express Entry.', zh: '基礎程度，Express Entry 加分較低。' } },
  {
    nclc: '5–6',
    cefr: 'B1',
    meaning: { en: 'Intermediate — common minimum target for CEC/French-language bonus points.', zh: '中級——CEC／法語加分項目常見的最低目標等級。' },
  },
  {
    nclc: '7–8',
    cefr: 'B2',
    meaning: { en: 'Strong — significantly higher CRS points (Express Entry) as of recent rounds.', zh: '強——依近期趨勢，可大幅提高 Express Entry 的 CRS 分數。' },
  },
  { nclc: '9+', cefr: 'C1', meaning: { en: 'Advanced — maximum bonus points bracket.', zh: '高階——落在最高加分級距。' } },
];

export const tcfTips: Localized[] = [
  {
    en: "The TCF is adaptive-feeling in difficulty ordering: questions get progressively harder, so don't panic if later ones feel unfamiliar.",
    zh: 'TCF 的題目難度是漸進式排列，越後面越難，所以如果後段題目感覺陌生也不用緊張。',
  },
  {
    en: 'For Canada (IRCC / Quebec MIFI), results are valid for 2 years — plan your study timeline around your application deadline.',
    zh: '就加拿大申請（IRCC／魁北克 MIFI）而言，成績效期為 2 年——請根據申請截止日規劃讀書進度。',
  },
  {
    en: 'Listening and reading are pure multiple-choice with no penalty for guessing — always select an answer.',
    zh: '聽力與閱讀都是純選擇題，用猜的也不會倒扣——所以每題都務必選一個答案。',
  },
  {
    en: 'Writing and speaking are scored on task achievement, coherence, vocabulary range, and grammatical accuracy — practice the "Certes... néanmoins..." nuance structure from the B2 unit for top scores.',
    zh: '寫作與口說的評分標準包含任務完成度、連貫性、詞彙廣度與文法準確度——想拿高分，可多練習 B2 單元中「Certes... néanmoins...」的論證句型。',
  },
  {
    en: 'Official score conversion to NCLC (Niveaux de Compétence Linguistique Canadiens) is set by IRCC/France Éducation international — always confirm current thresholds on the official TCF Canada / IRCC pages before booking, as point tables are updated periodically.',
    zh: '官方的 NCLC（加拿大語言能力等級）換算標準由 IRCC／France Éducation international 制定——報名前務必到 TCF Canada／IRCC 官方頁面確認最新門檻，因為對照表會不定期更新。',
  },
];
