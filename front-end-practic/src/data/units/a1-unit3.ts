import type { Unit } from '../../types';

export const a1Unit3: Unit = {
  id: 'a1-u3',
  level: 'A1',
  order: 3,
  title: { en: 'Ma famille et mes objets', zh: 'Ma famille et mes objets — 我的家人與物品' },
  description: {
    en: 'Articles, possessives, family vocabulary, and your first -er verbs.',
    zh: '冠詞、所有格、家庭詞彙，以及你的第一批 -er 動詞。',
  },
  vocab: [
    { fr: 'un père / une mère', meaning: { en: 'a father / a mother', zh: '父親／母親' } },
    { fr: 'un frère / une sœur', meaning: { en: 'a brother / a sister', zh: '兄弟／姊妹' } },
    { fr: 'un fils / une fille', meaning: { en: 'a son / a daughter', zh: '兒子／女兒' } },
    { fr: 'les parents', meaning: { en: 'the parents', zh: '父母' } },
    { fr: 'un mari / une femme', meaning: { en: 'a husband / a wife', zh: '丈夫／妻子' } },
    { fr: 'un livre', meaning: { en: 'a book', zh: '書' } },
    { fr: 'une table', meaning: { en: 'a table', zh: '桌子' } },
    { fr: 'un stylo', meaning: { en: 'a pen', zh: '筆' } },
    { fr: 'une maison', meaning: { en: 'a house', zh: '房子' } },
    { fr: 'un ordinateur', meaning: { en: 'a computer', zh: '電腦' } },
    { fr: 'parler', meaning: { en: 'to speak', zh: '說話' } },
    { fr: 'aimer', meaning: { en: 'to like / love', zh: '喜歡／愛' } },
    { fr: 'habiter', meaning: { en: 'to live (somewhere)', zh: '居住' } },
    { fr: 'travailler', meaning: { en: 'to work', zh: '工作' } },
  ],
  grammar: [
    {
      title: { en: 'Definite & indefinite articles', zh: '定冠詞與不定冠詞' },
      explanation: {
        en: "Indefinite: un (masc.), une (fem.), des (plural) — \"a/an/some\". Definite: le (masc.), la (fem.), les (plural) — \"the\". Le/la become l' before a vowel sound.",
        zh: '不定冠詞：un（陽性）、une（陰性）、des（複數）——相當於「一個／一些」。定冠詞：le（陽性）、la（陰性）、les（複數）——相當於「這個／那個」。le/la 在母音開頭的字前會變成 l\'。',
      },
      examples: [
        { fr: "J'ai un livre et une table.", translation: { en: 'I have a book and a table.', zh: '我有一本書和一張桌子。' } },
        { fr: 'Le livre est sur la table.', translation: { en: 'The book is on the table.', zh: '書在桌子上。' } },
      ],
    },
    {
      title: { en: 'Possessive adjectives (mon / ma / mes)', zh: '所有格形容詞（mon／ma／mes）' },
      explanation: {
        en: 'mon (masc. sing.), ma (fem. sing.), mes (plural) all mean "my". They agree with the noun\'s gender, not the owner\'s. Note: "ma" becomes "mon" before a vowel sound (mon amie).',
        zh: 'mon（陽性單數）、ma（陰性單數）、mes（複數）都表示「我的」，要跟名詞本身的性別一致，而不是跟擁有者的性別一致。注意：「ma」在母音開頭的字前會變成「mon」（mon amie）。',
      },
      examples: [
        { fr: 'Mon père travaille beaucoup.', translation: { en: 'My father works a lot.', zh: '我父親工作很多。' } },
        { fr: 'Ma sœur habite à Toronto.', translation: { en: 'My sister lives in Toronto.', zh: '我姊妹住在多倫多。' } },
        { fr: 'Mes parents aiment voyager.', translation: { en: 'My parents like to travel.', zh: '我父母喜歡旅行。' } },
      ],
    },
    {
      title: { en: '-ER verbs in the present tense', zh: '現在式的 -ER 動詞' },
      explanation: {
        en: 'Most French verbs end in -er (parler, aimer, habiter, travailler). Drop -er and add: -e, -es, -e, -ons, -ez, -ent.',
        zh: '大部分法文動詞以 -er 結尾（parler、aimer、habiter、travailler）。去掉 -er 後加上字尾：-e、-es、-e、-ons、-ez、-ent。',
      },
      examples: [
        { fr: 'Je parle français. Tu parles anglais.', translation: { en: 'I speak French. You speak English.', zh: '我說法文。你說英文。' } },
        { fr: 'Nous habitons à Québec.', translation: { en: 'We live in Quebec.', zh: '我們住在魁北克。' } },
        { fr: 'Ils travaillent le lundi.', translation: { en: 'They work on Mondays.', zh: '他們星期一工作。' } },
      ],
    },
  ],
  dialogue: {
    title: { en: 'My family', zh: '我的家人' },
    lines: [
      { speaker: 'Sam', fr: 'Tu as des frères et sœurs ?', translation: { en: 'Do you have brothers and sisters?', zh: '你有兄弟姊妹嗎？' } },
      { speaker: 'Nadia', fr: "Oui, j'ai un frère et une sœur. Et toi ?", translation: { en: 'Yes, I have a brother and a sister. And you?', zh: '有，我有一個兄弟和一個姊妹。你呢？' } },
      {
        speaker: 'Sam',
        fr: "Je n'ai pas de frère, mais j'ai une sœur. Mes parents habitent à Ottawa.",
        translation: { en: "I don't have a brother, but I have a sister. My parents live in Ottawa.", zh: '我沒有兄弟，但有一個姊妹。我父母住在渥太華。' },
      },
      { speaker: 'Nadia', fr: 'Ma famille habite à Montréal. Mon père travaille dans un bureau.', translation: { en: 'My family lives in Montreal. My father works in an office.', zh: '我的家人住在蒙特婁。我父親在辦公室工作。' } },
    ],
  },
  quiz: [
    {
      id: 'a1u3-q1',
      skill: 'grammar',
      prompt: { en: 'Fill in: "___ sœur habite à Paris." (my sister)', zh: '填空：「___ sœur habite à Paris.」（我的姊妹）' },
      options: [
        { en: 'Mon', zh: 'Mon' },
        { en: 'Ma', zh: 'Ma' },
        { en: 'Mes', zh: 'Mes' },
        { en: 'Le', zh: 'Le' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a1u3-q2',
      skill: 'grammar',
      prompt: { en: 'Conjugate "parler" for "nous": "Nous ___ français."', zh: '將「parler」變位成「nous」的形式：「Nous ___ français.」' },
      options: [
        { en: 'parle', zh: 'parle' },
        { en: 'parles', zh: 'parles' },
        { en: 'parlons', zh: 'parlons' },
        { en: 'parlent', zh: 'parlent' },
      ],
      answerIndex: 2,
    },
    {
      id: 'a1u3-q3',
      skill: 'vocab',
      prompt: { en: 'What is "un fils"?', zh: '「un fils」是什麼意思？' },
      options: [
        { en: 'a daughter', zh: '女兒' },
        { en: 'a son', zh: '兒子' },
        { en: 'a husband', zh: '丈夫' },
        { en: 'a father', zh: '父親' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a1u3-q4',
      skill: 'listening',
      prompt: { en: 'Listen and choose what you hear.', zh: '聽音檔，選出你聽到的內容。' },
      audioText: 'Mes parents habitent à Montréal.',
      options: [
        { en: 'My parents live in Montreal.', zh: '我父母住在蒙特婁。' },
        { en: 'My sister works in Montreal.', zh: '我姊妹在蒙特婁工作。' },
        { en: 'My friends travel to Montreal.', zh: '我朋友去蒙特婁旅行。' },
        { en: 'My parents like Montreal food.', zh: '我父母喜歡蒙特婁的食物。' },
      ],
      answerIndex: 0,
    },
    {
      id: 'a1u3-q5',
      skill: 'reading',
      passage: "J'aime ma famille. Mon père travaille beaucoup et ma mère aime lire. Mon frère habite à Québec avec sa femme.",
      prompt: { en: "Where does the speaker's brother live?", zh: '說話者的兄弟住在哪裡？' },
      options: [
        { en: 'Montreal', zh: '蒙特婁' },
        { en: 'Ottawa', zh: '渥太華' },
        { en: 'Québec', zh: '魁北克' },
        { en: 'Not mentioned', zh: '文中未提及' },
      ],
      answerIndex: 2,
    },
    {
      id: 'a1u3-q6',
      skill: 'grammar',
      prompt: { en: 'Which article is correct: "___ ordinateur est nouveau." (the computer)', zh: '哪個冠詞正確：「___ ordinateur est nouveau.」（那台電腦）' },
      options: [
        { en: 'La', zh: 'La' },
        { en: 'Le', zh: 'Le' },
        { en: 'Les', zh: 'Les' },
        { en: 'Un', zh: 'Un' },
      ],
      answerIndex: 1,
    },
  ],
  writing: {
    prompt: {
      en: 'Describe your family in 4–5 sentences: who is in it, where they live, and what they like or do.',
      zh: '用 4–5 句話描述你的家庭：家中有哪些成員、他們住在哪裡，以及他們喜歡做什麼或做什麼工作。',
    },
    minWords: 25,
    tips: [
      { en: 'Use possessives (mon/ma/mes) correctly.', zh: '正確使用所有格（mon/ma/mes）。' },
      { en: 'Try at least two -er verbs (habiter, aimer, travailler).', zh: '至少使用兩個 -er 動詞（habiter、aimer、travailler）。' },
    ],
  },
  speaking: {
    prompt: {
      en: 'Talk about your home and one object in it, plus one family member and what they do.',
      zh: '談談你的家和家裡的一件物品，再加上一位家人以及他們的工作或日常活動。',
    },
    tips: [{ en: 'Use "il y a" (there is/are) to introduce objects: "Il y a une table."', zh: '用「il y a」（有）來介紹物品：「Il y a une table.」' }],
  },
};
