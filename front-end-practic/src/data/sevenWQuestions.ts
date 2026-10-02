import type { Localized } from '../types';
import type { SyllablePair } from './phrases';

export interface SevenWQuestionExample {
  id: string;
  fr: string;
  meaning: Localized;
}

export interface SevenWQuestionItem {
  id: string;
  word: string;
  meaning: Localized;
  structure: Localized;
  pronunciation: string;
  soundFocus: Localized;
  usage: Array<{ label: string; text: Localized }>;
  syllables: SyllablePair[];
  examples: SevenWQuestionExample[];
}

export const sevenWQuestionItems: SevenWQuestionItem[] = [
  {
    id: 'sevenw-qui',
    word: 'Qui',
    meaning: { en: 'Who', zh: '誰' },
    structure: { en: 'Qui + verb + subject?', zh: 'Qui + 動詞 + 主詞？（問人）' },
    pronunciation: '/ki/',
    soundFocus: { en: 'The final i is clear and short; do not add an English “ee” glide at the end.', zh: '最後的 i 要清楚短促，不要加英文「ee」的滑音。' },
    usage: [
      { label: 'Qui', text: { en: 'Asks for a person or subject: Qui est-ce ? = Who is it?', zh: '用來問人或主詞：Qui est-ce ? = 是誰？' } },
      { label: 'Qui + verb', text: { en: 'Used in a question about the actor: Qui parle ? = Who is speaking?', zh: '用來問動作者：Qui parle ? = 誰在說話？' } },
    ],
    syllables: [{ fr: 'Qui', ipa: 'ki' }],
    examples: [
      { id: 'sevenw-qui-1', fr: 'Qui est-ce ?', meaning: { en: 'Who is it?', zh: '是誰？' } },
      { id: 'sevenw-qui-2', fr: 'Qui parle ?', meaning: { en: 'Who is speaking?', zh: '誰在說話？' } },
    ],
  },
  {
    id: 'sevenw-que',
    word: 'Que / Qu’est-ce que',
    meaning: { en: 'What', zh: '什麼' },
    structure: { en: 'Que + subject + verb? / Qu’est-ce que + subject + verb?', zh: 'Que + 主詞 + 動詞？／Qu’est-ce que + 主詞 + 動詞？（問事物）' },
    pronunciation: '/kə/ and /kɛs kə/',
    soundFocus: { en: 'Que is a very light /kə/; in Qu’est-ce que, the sound group is quick and linked together.', zh: 'Que 讀很輕的 /kə/；Qu’est-ce que 會連成一個快速的音群。' },
    usage: [
      { label: 'Que', text: { en: 'Questions about an object or action: Que fais-tu ? = What are you doing?', zh: '用來問物品或動作：Que fais-tu ? = 你在做什麼？' } },
      { label: 'Qu’est-ce que', text: { en: 'A very common neutral question form, especially in everyday speech.', zh: '口語中最常見的中性問句形式。' } },
    ],
    syllables: [{ fr: 'Que', ipa: 'kə' }, { fr: "Qu'est-ce", ipa: 'kɛs' }, { fr: 'que', ipa: 'kə' }],
    examples: [
      { id: 'sevenw-que-1', fr: 'Que fais-tu ?', meaning: { en: 'What are you doing?', zh: '你在做什麼？' } },
      { id: 'sevenw-que-2', fr: "Qu'est-ce que tu veux ?", meaning: { en: 'What do you want?', zh: '你想要什麼？' } },
    ],
  },
  {
    id: 'sevenw-quand',
    word: 'Quand',
    meaning: { en: 'When', zh: '何時' },
    structure: { en: 'Quand + verb + subject?', zh: 'Quand + 動詞 + 主詞？（問時間）' },
    pronunciation: '/kɑ̃/',
    soundFocus: { en: 'The nasal vowel /ɑ̃/ is essential. Keep the air flowing through the nose and do not say the n as a separate consonant.', zh: '鼻母音 /ɑ̃/ 很重要；氣流要從鼻腔出來，不要把 n 當成單獨的子音。' },
    usage: [
      { label: 'Quand', text: { en: 'Asks for a point in time or a specific moment: Quand viens-tu ?', zh: '問時間點或特定時刻：Quand viens-tu ?' } },
    ],
    syllables: [{ fr: 'Quand', ipa: 'kɑ̃' }],
    examples: [
      { id: 'sevenw-quand-1', fr: 'Quand viens-tu ?', meaning: { en: 'When are you coming?', zh: '你什麼時候來？' } },
      { id: 'sevenw-quand-2', fr: 'Quand est ton anniversaire ?', meaning: { en: 'When is your birthday?', zh: '你的生日是什麼時候？' } },
    ],
  },
  {
    id: 'sevenw-ou',
    word: 'Où',
    meaning: { en: 'Where', zh: '哪裡' },
    structure: { en: 'Où + verb + subject?', zh: 'Où + 動詞 + 主詞？（問地點）' },
    pronunciation: '/u/',
    soundFocus: { en: 'Où is a short, rounded vowel /u/; it is not the same as the English “oo” in a prolonged way.', zh: 'Où 讀短促的圓唇母音 /u/；不像英文「oo」那樣長。' },
    usage: [
      { label: 'Où', text: { en: 'Asks for location or direction: Où habites-tu ?', zh: '問地點或方向：Où habites-tu ?' } },
      { label: 'D’où', text: { en: 'Asks where someone comes from: D’où viens-tu ?', zh: '問來自哪裡：D’où viens-tu ?' } },
    ],
    syllables: [{ fr: 'Où', ipa: 'u' }, { fr: "D'où", ipa: 'du' }],
    examples: [
      { id: 'sevenw-ou-1', fr: 'Où habites-tu ?', meaning: { en: 'Where do you live?', zh: '你住在哪裡？' } },
      { id: 'sevenw-ou-2', fr: "D'où viens-tu ?", meaning: { en: 'Where are you from?', zh: '你從哪裡來？' } },
    ],
  },
  {
    id: 'sevenw-pourquoi',
    word: 'Pourquoi',
    meaning: { en: 'Why', zh: '為什麼' },
    structure: { en: 'Pourquoi + verb + subject?', zh: 'Pourquoi + 動詞 + 主詞？（問原因）' },
    pronunciation: '/puʁ.kwa/',
    soundFocus: { en: 'Pourquoi has a French r in the first syllable, then a smooth /kwa/ glide. Keep the air slightly rounded on /ʁ/ and the /wa/ glide clear.', zh: 'Pourquoi 第一音節有法語 r，後面接 /kwa/ 的滑音；/ʁ/ 要在喉嚨後方發出，/wa/ 也要順暢。' },
    usage: [
      { label: 'Pourquoi', text: { en: 'Asks for a reason or motive: Pourquoi tu apprends le français ?', zh: '問原因：Pourquoi tu apprends le français ?' } },
    ],
    syllables: [{ fr: 'Pourquoi', ipa: 'puʁ.kwa' }],
    examples: [
      { id: 'sevenw-pourquoi-1', fr: 'Pourquoi tu apprends le français ?', meaning: { en: 'Why are you learning French?', zh: '你為什麼學法文？' } },
      { id: 'sevenw-pourquoi-2', fr: 'Pourquoi tu es fatigué ?', meaning: { en: 'Why are you tired?', zh: '你為什麼累了？' } },
    ],
  },
  {
    id: 'sevenw-comment',
    word: 'Comment',
    meaning: { en: 'How', zh: '如何／怎麼' },
    structure: { en: 'Comment + verb + subject? / Comment ça va?', zh: 'Comment + 動詞 + 主詞？／Comment ça va？（問方式或近況）' },
    pronunciation: '/kɔ.mɑ̃/',
    soundFocus: { en: 'The final nasal /ɑ̃/ is the key sound; the first syllable is light. Do not say the n as a separate sound.', zh: '最後的鼻母音 /ɑ̃/ 是重點；第一音節要輕。不要把 n 單獨唸出來。' },
    usage: [
      { label: 'Comment', text: { en: 'Asks about manner or wellbeing: Comment ça va ? = How are you?', zh: '問方式或近況：Comment ça va ? = 你好嗎？' } },
      { label: 'Comment tu t’appelles ?', text: { en: 'A classic beginner question asking for a name.', zh: '問名字的經典初級句型。' } },
    ],
    syllables: [{ fr: 'Comment', ipa: 'kɔ.mɑ̃' }, { fr: 'ça', ipa: 'sa' }, { fr: 'va', ipa: 'va' }],
    examples: [
      { id: 'sevenw-comment-1', fr: 'Comment ça va ?', meaning: { en: 'How are you?', zh: '你好嗎？' } },
      { id: 'sevenw-comment-2', fr: "Comment tu t'appelles ?", meaning: { en: 'What is your name?', zh: '你叫什麼名字？' } },
    ],
  },
  {
    id: 'sevenw-combien',
    word: 'Combien',
    meaning: { en: 'How much / How many', zh: '多少' },
    structure: { en: 'Combien + verb + noun?', zh: 'Combien + 動詞 + 名詞？（問數量／價錢）' },
    pronunciation: '/kɔ̃.bjɛ̃/',
    soundFocus: { en: 'There are two nasal vowels in a row, so the sound stays in the nose. The final /bjɛ̃/ has a rising, smooth flow.', zh: '連續兩個鼻母音，聲音要一直留在鼻腔裡；最後的 /bjɛ̃/ 需要順暢銜接。' },
    usage: [
      { label: 'Combien', text: { en: 'Asks quantity or price: Combien ça coûte ? = How much does it cost?', zh: '問數量或價錢：Combien ça coûte ? = 多少錢？' } },
      { label: 'Combien de', text: { en: 'Used with countable nouns: Combien de livres ?', zh: '接可數名詞：Combien de livres ? = 多少本書？' } },
    ],
    syllables: [{ fr: 'Combien', ipa: 'kɔ̃.bjɛ̃' }, { fr: 'ça', ipa: 'sa' }, { fr: 'coûte', ipa: 'kut' }],
    examples: [
      { id: 'sevenw-combien-1', fr: 'Combien ça coûte ?', meaning: { en: 'How much does it cost?', zh: '多少錢？' } },
      { id: 'sevenw-combien-2', fr: 'Combien de livres ?', meaning: { en: 'How many books?', zh: '多少本書？' } },
    ],
  },
  {
    id: 'sevenw-quel',
    word: 'Quel / Quelle / Quels / Quelles',
    meaning: { en: 'Which / What', zh: '哪一個／哪些' },
    structure: { en: 'Quel + noun? / Quelle + feminine noun? / Quels + plural noun?', zh: 'Quel + 名詞？／Quelle + 陰性名詞？／Quels + 複數名詞？（問選擇）' },
    pronunciation: '/kɛl/ and /kɛl/',
    soundFocus: { en: 'The final l is pronounced. The form changes with gender and number: quel / quelle / quels / quelles.', zh: '最後的 l 要發音；形容詞要依性別與數量變化：quel / quelle / quels / quelles。' },
    usage: [
      { label: 'Quel', text: { en: 'Masculine singular: Quel hôtel ? = Which hotel?', zh: '陽性單數：Quel hôtel ? = 哪一家旅店？' } },
      { label: 'Quelle', text: { en: 'Feminine singular: Quelle heure ? = What time?', zh: '陰性單數：Quelle heure ? = 幾點？' } },
      { label: 'Quels / Quelles', text: { en: 'Plural forms for various choices.', zh: '複數形式，用於多個選項。' } },
    ],
    syllables: [{ fr: 'Quel', ipa: 'kɛl' }, { fr: 'heure', ipa: 'œʁ' }, { fr: 'est-il', ipa: 'ɛ.til' }],
    examples: [
      { id: 'sevenw-quel-1', fr: 'Quel livre tu préfères ?', meaning: { en: 'Which book do you prefer?', zh: '你比較喜歡哪一本書？' } },
      { id: 'sevenw-quel-2', fr: 'Quelle heure est-il ?', meaning: { en: 'What time is it?', zh: '現在幾點？' } },
    ],
  },
];

export const sevenWQuestionFlashcards = sevenWQuestionItems.flatMap((item) => item.examples.map((example) => ({
  id: example.id,
  fr: example.fr,
  meaning: example.meaning,
}))); 
