import type { Unit } from '../../types';

export const a1Unit1: Unit = {
  id: 'a1-u1',
  level: 'A1',
  order: 1,
  title: { en: 'Bonjour ! Greetings & first words', zh: 'Bonjour！問候語與第一批單字' },
  description: {
    en: 'Say hello and goodbye, count from 0 to 20, and introduce yourself.',
    zh: '學會打招呼與道別、從 0 數到 20，並且自我介紹。',
  },
  vocab: [
    { fr: 'Bonjour', meaning: { en: 'Hello / Good morning', zh: '你好／早安' }, example: 'Bonjour, madame !', exampleTranslation: { en: 'Hello, madam!', zh: '您好，女士！' } },
    { fr: 'Bonsoir', meaning: { en: 'Good evening', zh: '晚安（見面時）' }, example: 'Bonsoir, tout le monde.', exampleTranslation: { en: 'Good evening, everyone.', zh: '大家晚安。' } },
    { fr: 'Salut', meaning: { en: 'Hi / Bye (informal)', zh: '嗨／掰（非正式）' }, example: 'Salut, Marc !', exampleTranslation: { en: 'Hi, Marc!', zh: '嗨，馬克！' } },
    { fr: 'Au revoir', meaning: { en: 'Goodbye', zh: '再見' }, example: 'Au revoir, à demain !', exampleTranslation: { en: 'Goodbye, see you tomorrow!', zh: '再見，明天見！' } },
    { fr: "S'il vous plaît", meaning: { en: 'Please (formal)', zh: '請（正式）' }, example: "Un café, s'il vous plaît.", exampleTranslation: { en: 'A coffee, please.', zh: '請給我一杯咖啡。' } },
    { fr: 'Merci', meaning: { en: 'Thank you', zh: '謝謝' }, example: 'Merci beaucoup !', exampleTranslation: { en: 'Thank you very much!', zh: '非常謝謝！' } },
    { fr: 'De rien', meaning: { en: "You're welcome", zh: '不客氣' }, example: '— Merci ! — De rien.', exampleTranslation: { en: '"Thanks!" "You\'re welcome."', zh: '「謝謝！」「不客氣。」' } },
    { fr: 'Oui', meaning: { en: 'Yes', zh: '是' } },
    { fr: 'Non', meaning: { en: 'No', zh: '不是' } },
    { fr: 'Comment ça va ?', meaning: { en: 'How are you? (informal)', zh: '你好嗎？（非正式）' }, example: 'Salut ! Comment ça va ?', exampleTranslation: { en: 'Hi! How are you?', zh: '嗨！你好嗎？' } },
    { fr: "Je m'appelle...", meaning: { en: 'My name is...', zh: '我叫……' }, example: "Je m'appelle Sophie.", exampleTranslation: { en: 'My name is Sophie.', zh: '我叫蘇菲。' } },
    { fr: 'Enchanté(e)', meaning: { en: 'Nice to meet you', zh: '很高興認識你' }, example: 'Enchanté, madame.', exampleTranslation: { en: 'Nice to meet you, madam.', zh: '很高興認識您，女士。' } },
    { fr: 'Madame / Monsieur', meaning: { en: 'Madam / Sir', zh: '女士／先生' } },
    { fr: 'Excusez-moi', meaning: { en: 'Excuse me (formal)', zh: '不好意思（正式）' } },
  ],
  grammar: [
    {
      title: { en: 'Tu vs. vous', zh: 'Tu 與 vous 的差別' },
      explanation: {
        en: 'French has two ways to say "you". Use "tu" with friends, family, children, or people your age. Use "vous" with strangers, elders, in formal/professional settings, or when speaking to more than one person. Getting this right matters a lot on the TCF speaking section.',
        zh: '法文的「你」有兩種說法。對朋友、家人、小孩或同輩用「tu」；對陌生人、長輩、正式／職場場合，或對多人說話時用「vous」。這個區分在 TCF 口說科目中非常重要。',
      },
      examples: [
        { fr: "Tu t'appelles comment ?", translation: { en: "What's your name? (informal, one friend)", zh: '你叫什麼名字？（非正式，對一位朋友）' } },
        { fr: 'Comment vous appelez-vous ?', translation: { en: 'What is your name? (formal / polite)', zh: '請問您叫什麼名字？（正式／禮貌）' } },
      ],
    },
    {
      title: { en: 'Numbers 0–20', zh: '數字 0–20' },
      explanation: {
        en: 'zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, onze, douze, treize, quatorze, quinze, seize, dix-sept, dix-huit, dix-neuf, vingt. These come up constantly in listening comprehension for prices, ages, and times.',
        zh: 'zéro、un、deux、trois、quatre、cinq、six、sept、huit、neuf、dix、onze、douze、treize、quatorze、quinze、seize、dix-sept、dix-huit、dix-neuf、vingt。這些數字在聽力測驗中會不斷出現，例如價格、年齡與時間。',
      },
      examples: [
        { fr: "J'ai vingt ans.", translation: { en: 'I am twenty years old.', zh: '我二十歲。' } },
        { fr: 'Il y a quinze personnes.', translation: { en: 'There are fifteen people.', zh: '有十五個人。' } },
      ],
    },
  ],
  dialogue: {
    title: { en: 'A meeting', zh: '一次相遇' },
    lines: [
      { speaker: 'Léa', fr: "Bonjour ! Je m'appelle Léa. Et vous ?", translation: { en: 'Hello! My name is Léa. And you?', zh: '你好！我叫蕾雅。您呢？' } },
      { speaker: 'Marc', fr: "Bonjour, madame. Je m'appelle Marc. Enchanté.", translation: { en: 'Hello, madam. My name is Marc. Nice to meet you.', zh: '您好，女士。我叫馬克。很高興認識您。' } },
      { speaker: 'Léa', fr: 'Enchantée. Comment allez-vous ?', translation: { en: 'Nice to meet you too. How are you?', zh: '我也很高興認識您。您好嗎？' } },
      { speaker: 'Marc', fr: 'Très bien, merci. Et vous ?', translation: { en: 'Very well, thank you. And you?', zh: '很好，謝謝。您呢？' } },
      { speaker: 'Léa', fr: 'Ça va bien, merci ! Au revoir, Marc.', translation: { en: "I'm doing well, thanks! Goodbye, Marc.", zh: '我很好，謝謝！再見，馬克。' } },
      { speaker: 'Marc', fr: 'Au revoir, à bientôt !', translation: { en: 'Goodbye, see you soon!', zh: '再見，下次見！' } },
    ],
  },
  quiz: [
    {
      id: 'a1u1-q1',
      skill: 'vocab',
      prompt: { en: 'What does "Enchanté(e)" mean?', zh: '「Enchanté(e)」是什麼意思？' },
      options: [
        { en: 'Goodbye', zh: '再見' },
        { en: 'Nice to meet you', zh: '很高興認識你' },
        { en: 'Please', zh: '請' },
        { en: 'How are you?', zh: '你好嗎？' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a1u1-q2',
      skill: 'grammar',
      prompt: { en: 'You are speaking politely to your new boss for the first time. Which is correct?', zh: '你第一次很有禮貌地跟新老闆說話，該用哪一句？' },
      options: [
        { en: "Tu t'appelles comment ?", zh: "Tu t'appelles comment ?" },
        { en: 'Comment vous appelez-vous ?', zh: 'Comment vous appelez-vous ?' },
        { en: 'Salut, ça va ?', zh: 'Salut, ça va ?' },
        { en: 'Ça va bien.', zh: 'Ça va bien.' },
      ],
      answerIndex: 1,
      explanation: { en: 'With a boss or stranger, use the formal "vous" form.', zh: '對老闆或陌生人，要使用正式的「vous」形式。' },
    },
    {
      id: 'a1u1-q3',
      skill: 'listening',
      prompt: { en: 'Listen and choose what was said.', zh: '聽音檔，選出正確的意思。' },
      audioText: 'Bonsoir, comment allez-vous ?',
      options: [
        { en: 'Good morning, how old are you?', zh: '早安，你幾歲？' },
        { en: 'Good evening, how are you?', zh: '晚安，您好嗎？' },
        { en: 'Goodbye, see you tomorrow', zh: '再見，明天見' },
        { en: 'Thank you very much', zh: '非常謝謝' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a1u1-q4',
      skill: 'listening',
      prompt: { en: 'Listen and select the number you hear.', zh: '聽音檔，選出你聽到的數字。' },
      audioText: 'quinze',
      options: [
        { en: '5', zh: '5' },
        { en: '9', zh: '9' },
        { en: '15', zh: '15' },
        { en: '16', zh: '16' },
      ],
      answerIndex: 2,
    },
    {
      id: 'a1u1-q5',
      skill: 'reading',
      passage: "Bonjour ! Je m'appelle Amélie. J'ai dix-huit ans. Enchantée !",
      prompt: { en: 'How old is Amélie?', zh: '艾蜜莉幾歲？' },
      options: [
        { en: '8', zh: '8' },
        { en: '18', zh: '18' },
        { en: '80', zh: '80' },
        { en: 'Not mentioned', zh: '文中未提及' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a1u1-q6',
      skill: 'vocab',
      prompt: { en: 'How do you respond to "Merci !"?', zh: '如何回應「Merci !」？' },
      options: [
        { en: 'Salut', zh: 'Salut' },
        { en: 'De rien', zh: 'De rien' },
        { en: 'Bonsoir', zh: 'Bonsoir' },
        { en: "S'il vous plaît", zh: "S'il vous plaît" },
      ],
      answerIndex: 1,
    },
  ],
  writing: {
    prompt: {
      en: 'Write 3–4 sentences introducing yourself: your name, your age, and say hello/goodbye politely.',
      zh: '寫 3–4 句話自我介紹：你的名字、你的年齡，並有禮貌地打招呼與道別。',
    },
    minWords: 15,
    tips: [
      { en: 'Start with "Bonjour" or "Je m\'appelle..."', zh: '以「Bonjour」或「Je m\'appelle...」開頭。' },
      { en: 'Use "J\'ai ... ans" to give your age.', zh: '用「J\'ai ... ans」來說出你的年齡。' },
      { en: 'End with "Au revoir" or "À bientôt".', zh: '以「Au revoir」或「À bientôt」結尾。' },
    ],
  },
  speaking: {
    prompt: {
      en: 'Introduce yourself out loud in French: greet the examiner, give your name and age, and say goodbye.',
      zh: '用法文大聲自我介紹：向考官打招呼、說出你的名字與年齡，然後道別。',
    },
    tips: [
      { en: 'Use "vous" — the TCF speaking test is formal.', zh: '使用「vous」——TCF 口說測驗是正式場合。' },
      { en: 'Speak slowly and clearly; accuracy matters more than speed at A1.', zh: '說話放慢、清楚；A1 階段準確度比速度更重要。' },
    ],
  },
};
