import type { Unit } from '../../types';

export const a1Unit4: Unit = {
  id: 'a1-u4',
  level: 'A1',
  order: 4,
  title: { en: 'Ma journée — daily routine & time', zh: 'Ma journée — 每日作息與時間' },
  description: {
    en: 'Tell the time, describe your daily routine, and use aller + faire, including the near future.',
    zh: '學會報時、描述每日作息，並使用 aller 和 faire，包含近未來式。',
  },
  vocab: [
    { fr: 'Quelle heure est-il ?', meaning: { en: 'What time is it?', zh: '現在幾點？' } },
    { fr: 'Il est huit heures.', meaning: { en: "It's eight o'clock.", zh: '現在八點。' } },
    { fr: 'le matin', meaning: { en: 'the morning', zh: '早上' } },
    { fr: "l'après-midi", meaning: { en: 'the afternoon', zh: '下午' } },
    { fr: 'le soir', meaning: { en: 'the evening', zh: '晚上' } },
    { fr: 'se lever', meaning: { en: 'to get up', zh: '起床' } },
    { fr: 'se laver', meaning: { en: 'to wash oneself', zh: '盥洗' } },
    { fr: 'se coucher', meaning: { en: 'to go to bed', zh: '上床睡覺' } },
    { fr: 'aller', meaning: { en: 'to go', zh: '去' } },
    { fr: 'faire', meaning: { en: 'to do / make', zh: '做' } },
    { fr: 'le travail', meaning: { en: 'work', zh: '工作' } },
    { fr: "l'école", meaning: { en: 'school', zh: '學校' } },
    { fr: 'tous les jours', meaning: { en: 'every day', zh: '每天' } },
    { fr: 'ensuite', meaning: { en: 'then / next', zh: '接著／然後' } },
  ],
  grammar: [
    {
      title: { en: 'Telling time', zh: '報時' },
      explanation: {
        en: '"Il est ... heure(s)" for the time. Add minutes directly, or use "et quart" (quarter past), "et demie" (half past), "moins le quart" (quarter to).',
        zh: '用「Il est ... heure(s)」表示時間。可直接加上分鐘數，或使用「et quart」（過一刻）、「et demie」（過半）、「moins le quart」（差一刻）。',
      },
      examples: [
        { fr: 'Il est sept heures et quart.', translation: { en: "It's a quarter past seven.", zh: '現在七點十五分。' } },
        { fr: 'Il est midi.', translation: { en: "It's noon.", zh: '現在中午十二點。' } },
      ],
    },
    {
      title: { en: 'Aller (to go) — irregular present tense', zh: 'Aller（去）— 不規則現在式' },
      explanation: { en: 'je vais, tu vas, il/elle/on va, nous allons, vous allez, ils/elles vont.', zh: 'je vais、tu vas、il/elle/on va、nous allons、vous allez、ils/elles vont。' },
      examples: [
        { fr: "Je vais à l'école le matin.", translation: { en: 'I go to school in the morning.', zh: '我早上去學校。' } },
        { fr: 'Elle va au travail à huit heures.', translation: { en: "She goes to work at eight o'clock.", zh: '她八點去上班。' } },
      ],
    },
    {
      title: { en: 'Faire (to do/make) — irregular present tense', zh: 'Faire（做）— 不規則現在式' },
      explanation: {
        en: 'je fais, tu fais, il/elle/on fait, nous faisons, vous faites, ils/elles font. Used in many fixed expressions.',
        zh: 'je fais、tu fais、il/elle/on fait、nous faisons、vous faites、ils/elles font。用於許多固定用語中。',
      },
      examples: [
        { fr: 'Je fais mes devoirs le soir.', translation: { en: 'I do my homework in the evening.', zh: '我晚上做作業。' } },
        { fr: 'Il fait ses courses le samedi.', translation: { en: 'He does his shopping on Saturdays.', zh: '他星期六去買東西。' } },
      ],
    },
    {
      title: { en: 'The near future: aller + infinitive', zh: '近未來式：aller + 原形動詞' },
      explanation: { en: 'To say what you are going to do, use present-tense "aller" + an infinitive verb.', zh: '要表達即將做什麼，用現在式的「aller」加上原形動詞。' },
      examples: [
        { fr: 'Je vais me coucher.', translation: { en: 'I am going to go to bed.', zh: '我要去睡覺了。' } },
        { fr: 'Nous allons manger.', translation: { en: 'We are going to eat.', zh: '我們要去吃飯了。' } },
      ],
    },
  ],
  dialogue: {
    title: { en: 'A typical day', zh: '典型的一天' },
    lines: [
      { speaker: 'Ana', fr: 'Tu te lèves à quelle heure le matin ?', translation: { en: 'What time do you get up in the morning?', zh: '你早上幾點起床？' } },
      { speaker: 'Théo', fr: 'Je me lève à six heures et demie. Ensuite, je fais mon café.', translation: { en: 'I get up at half past six. Then I make my coffee.', zh: '我六點半起床。然後我煮咖啡。' } },
      { speaker: 'Ana', fr: 'Et tu vas au travail à quelle heure ?', translation: { en: 'And what time do you go to work?', zh: '那你幾點去上班？' } },
      {
        speaker: 'Théo',
        fr: 'Je vais au travail à huit heures. Le soir, je vais me coucher vers dix heures.',
        translation: { en: 'I go to work at eight. In the evening, I go to bed around ten.', zh: '我八點去上班。晚上大約十點我會去睡覺。' },
      },
    ],
  },
  quiz: [
    {
      id: 'a1u4-q1',
      skill: 'grammar',
      prompt: { en: 'Complete: "Nous ___ à l\'école." (we go)', zh: '完成句子：「Nous ___ à l\'école.」（我們去）' },
      options: [
        { en: 'vas', zh: 'vas' },
        { en: 'va', zh: 'va' },
        { en: 'allons', zh: 'allons' },
        { en: 'vont', zh: 'vont' },
      ],
      answerIndex: 2,
    },
    {
      id: 'a1u4-q2',
      skill: 'grammar',
      prompt: { en: 'Which sentence correctly uses the near future?', zh: '哪一句正確使用了近未來式？' },
      options: [
        { en: 'Je vais mange.', zh: 'Je vais mange.' },
        { en: 'Je vais manger.', zh: 'Je vais manger.' },
        { en: 'Je manger vais.', zh: 'Je manger vais.' },
        { en: 'Je vais mangé.', zh: 'Je vais mangé.' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a1u4-q3',
      skill: 'vocab',
      prompt: { en: '"se coucher" means:', zh: '「se coucher」的意思是：' },
      options: [
        { en: 'to get up', zh: '起床' },
        { en: 'to wash', zh: '盥洗' },
        { en: 'to go to bed', zh: '上床睡覺' },
        { en: 'to work', zh: '工作' },
      ],
      answerIndex: 2,
    },
    {
      id: 'a1u4-q4',
      skill: 'listening',
      prompt: { en: 'Listen and select the time you hear.', zh: '聽音檔，選出你聽到的時間。' },
      audioText: 'Il est sept heures et quart.',
      options: [
        { en: '6:15', zh: '6:15' },
        { en: '7:15', zh: '7:15' },
        { en: '7:45', zh: '7:45' },
        { en: '7:30', zh: '7:30' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a1u4-q5',
      skill: 'listening',
      prompt: { en: "Listen to the sentence and choose its meaning.", zh: '聽這句話，選出正確的意思。' },
      audioText: 'Je fais mes devoirs le soir, ensuite je me couche.',
      options: [
        { en: 'I do my homework in the morning, then I get up.', zh: '我早上做作業，然後起床。' },
        { en: 'I do my homework in the evening, then I go to bed.', zh: '我晚上做作業，然後去睡覺。' },
        { en: 'I go to work in the evening, then I eat.', zh: '我晚上去上班，然後吃飯。' },
        { en: 'I get up in the evening, then I work.', zh: '我晚上起床，然後工作。' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a1u4-q6',
      skill: 'reading',
      passage:
        'Le matin, je me lève à sept heures. Je fais mon café, puis je vais au travail à huit heures et demie. Le soir, je fais mes devoirs et je me couche à onze heures.',
      prompt: { en: 'At what time does the speaker go to work?', zh: '說話者幾點去上班？' },
      options: [
        { en: '7:00', zh: '7:00' },
        { en: '7:30', zh: '7:30' },
        { en: '8:30', zh: '8:30' },
        { en: '11:00', zh: '11:00' },
      ],
      answerIndex: 2,
    },
    {
      id: 'a1u4-q7',
      skill: 'grammar',
      prompt: { en: 'Complete: "Vous ___ vos devoirs ce soir ?" (do)', zh: '完成句子：「Vous ___ vos devoirs ce soir ?」（做）' },
      options: [
        { en: 'fais', zh: 'fais' },
        { en: 'fait', zh: 'fait' },
        { en: 'faites', zh: 'faites' },
        { en: 'font', zh: 'font' },
      ],
      answerIndex: 2,
    },
  ],
  writing: {
    prompt: {
      en: 'Describe your typical day from morning to evening, mentioning at least 3 times and using aller/faire.',
      zh: '描述你典型的一天，從早上到晚上，至少提到三個時間點，並使用 aller/faire。',
    },
    minWords: 30,
    tips: [
      { en: "Use sequence words: d'abord, ensuite, puis, enfin.", zh: '使用順序詞：d\'abord、ensuite、puis、enfin。' },
      { en: 'Include at least one near-future sentence (je vais...).', zh: '至少包含一句近未來式（je vais...）。' },
    ],
  },
  speaking: {
    prompt: { en: 'Tell the examiner about your daily routine, from waking up to going to bed.', zh: '向考官描述你的日常作息，從起床到睡覺。' },
    tips: [{ en: 'Practice saying times fluently — this is a very common TCF listening topic.', zh: '練習流暢地說出時間——這是 TCF 聽力非常常見的主題。' }],
  },
};
