import type { Unit } from '../../types';

export const a1Unit2: Unit = {
  id: 'a1-u2',
  level: 'A1',
  order: 2,
  title: { en: 'Être et avoir — who you are', zh: 'Être et avoir — 你是誰' },
  description: {
    en: 'Talk about your nationality, job, and describe people using être and avoir.',
    zh: '用 être 和 avoir 談論你的國籍、職業，並描述他人。',
  },
  vocab: [
    { fr: 'être', meaning: { en: 'to be', zh: '是（動詞）' } },
    { fr: 'avoir', meaning: { en: 'to have', zh: '擁有（動詞）' } },
    { fr: 'français / française', meaning: { en: 'French', zh: '法國的／法國人' } },
    { fr: 'canadien / canadienne', meaning: { en: 'Canadian', zh: '加拿大的／加拿大人' } },
    { fr: 'chinois / chinoise', meaning: { en: 'Chinese', zh: '中國的／中國人' } },
    { fr: 'américain / américaine', meaning: { en: 'American', zh: '美國的／美國人' } },
    { fr: 'étudiant / étudiante', meaning: { en: 'student', zh: '學生' } },
    { fr: 'professeur', meaning: { en: 'teacher', zh: '老師' } },
    { fr: 'ingénieur / ingénieure', meaning: { en: 'engineer', zh: '工程師' } },
    { fr: 'grand / grande', meaning: { en: 'tall', zh: '高的' } },
    { fr: 'petit / petite', meaning: { en: 'small / short', zh: '小的／矮的' } },
    { fr: 'content / contente', meaning: { en: 'happy', zh: '開心的' } },
    { fr: 'fatigué / fatiguée', meaning: { en: 'tired', zh: '疲累的' } },
    { fr: 'un ami / une amie', meaning: { en: 'a friend', zh: '朋友' } },
  ],
  grammar: [
    {
      title: { en: 'Être (to be) — present tense', zh: 'Être（是）— 現在式' },
      explanation: {
        en: 'je suis, tu es, il/elle/on est, nous sommes, vous êtes, ils/elles sont. Used for identity, nationality, jobs, and adjectives of description.',
        zh: 'je suis、tu es、il/elle/on est、nous sommes、vous êtes、ils/elles sont。用於身分、國籍、職業與描述性形容詞。',
      },
      examples: [
        { fr: 'Je suis canadienne.', translation: { en: 'I am Canadian. (feminine speaker)', zh: '我是加拿大人。（女性說話者）' } },
        { fr: 'Nous sommes étudiants.', translation: { en: 'We are students.', zh: '我們是學生。' } },
      ],
    },
    {
      title: { en: 'Avoir (to have) — present tense', zh: 'Avoir（擁有）— 現在式' },
      explanation: {
        en: "j'ai, tu as, il/elle/on a, nous avons, vous avez, ils/elles ont. Used for possession, age, and many fixed expressions (avoir faim, avoir soif, avoir besoin de).",
        zh: "j'ai、tu as、il/elle/on a、nous avons、vous avez、ils/elles ont。用於擁有、年齡，以及許多固定用語（avoir faim 餓了、avoir soif 渴了、avoir besoin de 需要）。",
      },
      examples: [
        { fr: "J'ai un ami à Paris.", translation: { en: 'I have a friend in Paris.', zh: '我在巴黎有一個朋友。' } },
        { fr: 'Elle a vingt-cinq ans.', translation: { en: 'She is twenty-five years old.', zh: '她二十五歲。' } },
      ],
    },
    {
      title: { en: 'Adjective agreement', zh: '形容詞的性數一致' },
      explanation: {
        en: 'Adjectives agree in gender and number with the noun. Most add -e for feminine (grand → grande) and -s for plural (grand → grands). If the masculine already ends in -e, no change (content stays "content" but wait: content→contente still adds e). Check irregular forms individually as you learn them.',
        zh: '形容詞要跟名詞的陰陽性與單複數一致。大部分陰性加 -e（grand → grande），複數加 -s（grand → grands）。若陽性已經以 -e 結尾則不變。不規則形式需要逐一記憶。',
      },
      examples: [
        { fr: 'Il est grand. Elle est grande.', translation: { en: 'He is tall. She is tall.', zh: '他很高。她很高。' } },
        { fr: 'Ils sont contents.', translation: { en: 'They (masc./mixed) are happy.', zh: '他們（陽性／混合）很開心。' } },
      ],
    },
  ],
  dialogue: {
    title: { en: 'Who are you?', zh: '你是誰？' },
    lines: [
      { speaker: 'Yuki', fr: 'Salut ! Tu es française ?', translation: { en: 'Hi! Are you French?', zh: '嗨！你是法國人嗎？' } },
      { speaker: 'Chloé', fr: 'Non, je suis canadienne. Et toi ?', translation: { en: "No, I'm Canadian. And you?", zh: '不是，我是加拿大人。你呢？' } },
      { speaker: 'Yuki', fr: "Je suis chinoise. J'habite à Montréal maintenant.", translation: { en: 'I am Chinese. I live in Montreal now.', zh: '我是中國人。我現在住在蒙特婁。' } },
      { speaker: 'Chloé', fr: 'Ah super ! Tu es étudiante ?', translation: { en: 'Oh great! Are you a student?', zh: '喔太棒了！你是學生嗎？' } },
      { speaker: 'Yuki', fr: "Oui, j'ai vingt-deux ans et je suis étudiante en ingénierie.", translation: { en: 'Yes, I am twenty-two and I am an engineering student.', zh: '是的，我二十二歲，是工程系學生。' } },
    ],
  },
  quiz: [
    {
      id: 'a1u2-q1',
      skill: 'grammar',
      prompt: { en: 'Complete: "Nous ___ étudiants."', zh: '完成句子：「Nous ___ étudiants.」' },
      options: [
        { en: 'sommes', zh: 'sommes' },
        { en: 'êtes', zh: 'êtes' },
        { en: 'sont', zh: 'sont' },
        { en: 'est', zh: 'est' },
      ],
      answerIndex: 0,
    },
    {
      id: 'a1u2-q2',
      skill: 'grammar',
      prompt: { en: 'Complete: "Elle ___ vingt ans."', zh: '完成句子：「Elle ___ vingt ans.」' },
      options: [
        { en: 'est', zh: 'est' },
        { en: 'a', zh: 'a' },
        { en: 'ai', zh: 'ai' },
        { en: 'as', zh: 'as' },
      ],
      answerIndex: 1,
      explanation: { en: 'Age is expressed with avoir, not être: "avoir X ans".', zh: '年齡要用 avoir 表達，而不是 être：「avoir X ans」。' },
    },
    {
      id: 'a1u2-q3',
      skill: 'vocab',
      prompt: { en: 'How do you say "tired" (masculine)?', zh: '「疲累的」（陽性）怎麼說？' },
      options: [
        { en: 'content', zh: 'content' },
        { en: 'fatigué', zh: 'fatigué' },
        { en: 'grand', zh: 'grand' },
        { en: 'petit', zh: 'petit' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a1u2-q4',
      skill: 'listening',
      prompt: { en: 'Listen and choose the correct meaning.', zh: '聽音檔，選出正確的意思。' },
      audioText: 'Je suis ingénieure et j\'ai trente ans.',
      options: [
        { en: 'I am a student and I am 13.', zh: '我是學生，我十三歲。' },
        { en: 'I am an engineer and I am 30.', zh: '我是工程師，我三十歲。' },
        { en: 'I am a teacher and I am 30.', zh: '我是老師，我三十歲。' },
        { en: 'I am tired and I am 13.', zh: '我很累，我十三歲。' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a1u2-q5',
      skill: 'reading',
      passage: 'Marc est grand et content. Il est professeur. Il a quarante ans.',
      prompt: { en: "What is Marc's job?", zh: '馬克的職業是什麼？' },
      options: [
        { en: 'Student', zh: '學生' },
        { en: 'Engineer', zh: '工程師' },
        { en: 'Teacher', zh: '老師' },
        { en: 'Not mentioned', zh: '文中未提及' },
      ],
      answerIndex: 2,
    },
    {
      id: 'a1u2-q6',
      skill: 'grammar',
      prompt: { en: 'Choose the correctly agreed sentence for a female speaker: "Je suis ___."', zh: '選出符合女性說話者的正確形容詞形式：「Je suis ___.」' },
      options: [
        { en: 'content', zh: 'content' },
        { en: 'contente', zh: 'contente' },
        { en: 'contents', zh: 'contents' },
        { en: 'contentes', zh: 'contentes' },
      ],
      answerIndex: 1,
    },
  ],
  writing: {
    prompt: {
      en: 'Write a short paragraph describing yourself: nationality, job/student status, age, and one adjective.',
      zh: '寫一小段話描述你自己：國籍、職業／學生身分、年齡，以及一個形容詞。',
    },
    minWords: 20,
    tips: [
      { en: 'Use "Je suis..." for identity/description.', zh: '用「Je suis...」表達身分／描述。' },
      { en: 'Use "J\'ai ... ans" for age.', zh: '用「J\'ai ... ans」表達年齡。' },
      { en: 'Make sure adjectives agree with your gender.', zh: '確認形容詞要跟你的性別一致。' },
    ],
  },
  speaking: {
    prompt: {
      en: 'Describe a friend or family member: their nationality, job, and one personality trait, using être and avoir.',
      zh: '用 être 和 avoir 描述一位朋友或家人：他們的國籍、職業，以及一項性格特質。',
    },
    tips: [{ en: 'Remember: "il/elle est" + adjective, but "il/elle a" for age and possessions.', zh: '記住：「il/elle est」+ 形容詞；但年齡與擁有物要用「il/elle a」。' }],
  },
};
