import type { Unit } from '../../types';

export const a2Unit1: Unit = {
  id: 'a2-u1',
  level: 'A2',
  order: 1,
  title: { en: 'Le passé composé — talking about the past', zh: 'Le passé composé — 談論過去' },
  description: {
    en: 'Learn the most common past tense in French, used constantly in TCF listening and reading.',
    zh: '學習法文中最常見的過去式，在 TCF 聽力與閱讀中頻繁出現。',
  },
  vocab: [
    { fr: 'hier', meaning: { en: 'yesterday', zh: '昨天' } },
    { fr: 'la semaine dernière', meaning: { en: 'last week', zh: '上星期' } },
    { fr: 'il y a deux jours', meaning: { en: 'two days ago', zh: '兩天前' } },
    { fr: 'manger', meaning: { en: 'to eat', zh: '吃' } },
    { fr: 'regarder', meaning: { en: 'to watch', zh: '看' } },
    { fr: 'acheter', meaning: { en: 'to buy', zh: '買' } },
    { fr: 'aller (past: être)', meaning: { en: 'to go', zh: '去' } },
    { fr: 'venir (past: être)', meaning: { en: 'to come', zh: '來' } },
    { fr: 'faire', meaning: { en: 'to do/make', zh: '做' } },
    { fr: 'voir', meaning: { en: 'to see', zh: '看見' } },
    { fr: 'un magasin', meaning: { en: 'a store', zh: '商店' } },
    { fr: 'le marché', meaning: { en: 'the market', zh: '市場' } },
    { fr: 'un prix', meaning: { en: 'a price', zh: '價格' } },
    { fr: 'coûter', meaning: { en: 'to cost', zh: '花費' } },
  ],
  grammar: [
    {
      title: { en: 'Passé composé with avoir', zh: '用 avoir 構成的複合過去式' },
      explanation: {
        en: 'Most verbs form the passé composé with "avoir" + past participle. -ER verbs → -é (mangé), -IR verbs → -i (fini), -RE verbs → -u (vendu). Many common verbs have irregular participles (fait, vu, pris, pu, voulu).',
        zh: '大部分動詞用「avoir」+ 過去分詞構成複合過去式。-ER 動詞 → -é（mangé），-IR 動詞 → -i（fini），-RE 動詞 → -u（vendu）。許多常見動詞有不規則的過去分詞（fait、vu、pris、pu、voulu）。',
      },
      examples: [
        { fr: "J'ai mangé une pizza hier soir.", translation: { en: 'I ate a pizza last night.', zh: '我昨晚吃了披薩。' } },
        { fr: 'Elle a fait ses courses ce matin.', translation: { en: 'She did her shopping this morning.', zh: '她今天早上去買東西了。' } },
        { fr: 'Nous avons vu un bon film.', translation: { en: 'We saw a good movie.', zh: '我們看了一部好電影。' } },
      ],
    },
    {
      title: { en: 'Passé composé with être', zh: '用 être 構成的複合過去式' },
      explanation: {
        en: 'A small set of verbs (mostly movement: aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, retourner, tomber) use "être" instead. The past participle then agrees in gender/number with the subject.',
        zh: '有一小群動詞（大多與移動有關：aller、venir、arriver、partir、entrer、sortir、monter、descendre、naître、mourir、rester、retourner、tomber）改用「être」。此時過去分詞要跟主詞的性別與單複數一致。',
      },
      examples: [
        { fr: 'Je suis allé au marché. / Je suis allée au marché.', translation: { en: 'I went to the market. (masc./fem. speaker)', zh: '我去了市場。（陽性／陰性說話者）' } },
        { fr: 'Elles sont arrivées à midi.', translation: { en: 'They (fem.) arrived at noon.', zh: '她們中午抵達了。' } },
      ],
    },
  ],
  dialogue: {
    title: { en: 'At the market', zh: '在市場' },
    lines: [
      { speaker: 'Julie', fr: 'Tu as fait les courses hier ?', translation: { en: 'Did you do the shopping yesterday?', zh: '你昨天去買東西了嗎？' } },
      {
        speaker: 'Karim',
        fr: "Oui, je suis allé au marché le matin. J'ai acheté des légumes et du pain.",
        translation: { en: 'Yes, I went to the market in the morning. I bought vegetables and bread.', zh: '有，我早上去了市場。我買了蔬菜和麵包。' },
      },
      { speaker: 'Julie', fr: 'Ça a coûté combien ?', translation: { en: 'How much did that cost?', zh: '那花了多少錢？' } },
      { speaker: 'Karim', fr: "Ça a coûté vingt euros. Ensuite, j'ai vu Sarah au café.", translation: { en: 'It cost twenty euros. Then I saw Sarah at the café.', zh: '花了二十歐元。然後我在咖啡館遇到莎拉。' } },
    ],
  },
  quiz: [
    {
      id: 'a2u1-q1',
      skill: 'grammar',
      prompt: { en: 'Complete: "Hier, j\'___ mangé au restaurant."', zh: '完成句子：「Hier, j\'___ mangé au restaurant.」' },
      options: [
        { en: 'ai', zh: 'ai' },
        { en: 'as', zh: 'as' },
        { en: 'a', zh: 'a' },
        { en: 'ont', zh: 'ont' },
      ],
      answerIndex: 0,
    },
    {
      id: 'a2u1-q2',
      skill: 'grammar',
      prompt: { en: 'Which auxiliary verb does "aller" use in the passé composé?', zh: '「aller」在複合過去式中使用哪個助動詞？' },
      options: [
        { en: 'avoir', zh: 'avoir' },
        { en: 'être', zh: 'être' },
        { en: 'faire', zh: 'faire' },
        { en: 'aller does not take one', zh: 'aller 不需要助動詞' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a2u1-q3',
      skill: 'grammar',
      prompt: { en: 'A female speaker says "I arrived late." Choose the correct sentence.', zh: '一位女性說話者要說「我遲到了」，選出正確的句子。' },
      options: [
        { en: 'Je suis arrivé en retard.', zh: 'Je suis arrivé en retard.' },
        { en: 'Je suis arrivée en retard.', zh: 'Je suis arrivée en retard.' },
        { en: "J'ai arrivée en retard.", zh: "J'ai arrivée en retard." },
        { en: 'Je arrive en retard hier.', zh: 'Je arrive en retard hier.' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a2u1-q4',
      skill: 'listening',
      prompt: { en: 'Listen and choose what happened.', zh: '聽音檔，選出發生了什麼事。' },
      audioText: 'Hier, nous sommes allés au marché et nous avons acheté du pain.',
      options: [
        { en: 'Tomorrow we will go to the market.', zh: '明天我們要去市場。' },
        { en: 'Yesterday we went to the market and bought bread.', zh: '昨天我們去了市場並買了麵包。' },
        { en: 'Yesterday we sold bread at the market.', zh: '昨天我們在市場賣麵包。' },
        { en: 'We are at the market now buying bread.', zh: '我們現在在市場買麵包。' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a2u1-q5',
      skill: 'reading',
      passage:
        "Samedi dernier, Léa est allée au centre-ville. Elle a acheté une robe et des chaussures. Ensuite, elle a mangé avec une amie dans un petit restaurant.",
      prompt: { en: 'What did Léa buy?', zh: '蕾雅買了什麼？' },
      options: [
        { en: 'A book and a pen', zh: '一本書和一支筆' },
        { en: 'A dress and shoes', zh: '一件洋裝和一雙鞋' },
        { en: 'Vegetables and bread', zh: '蔬菜和麵包' },
        { en: 'A computer', zh: '一台電腦' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a2u1-q6',
      skill: 'vocab',
      prompt: { en: 'What does "coûter" mean?', zh: '「coûter」是什麼意思？' },
      options: [
        { en: 'to buy', zh: '買' },
        { en: 'to sell', zh: '賣' },
        { en: 'to cost', zh: '花費' },
        { en: 'to eat', zh: '吃' },
      ],
      answerIndex: 2,
    },
  ],
  writing: {
    prompt: {
      en: 'Write about what you did last weekend, using at least 4 verbs in the passé composé (mix of avoir and être verbs).',
      zh: '寫一段你上週末做了什麼，至少使用 4 個複合過去式動詞（混合 avoir 與 être 類動詞）。',
    },
    minWords: 35,
    tips: [
      { en: "List a few actions in order using d'abord/ensuite/puis/enfin.", zh: '用 d\'abord/ensuite/puis/enfin 依序列出幾個動作。' },
      { en: 'Double check être-verb agreement if you are describing a woman or a group of women.', zh: '如果描述的是女性或一群女性，記得檢查 être 動詞的性數一致。' },
    ],
  },
  speaking: {
    prompt: {
      en: 'Tell the examiner about your last vacation or a recent weekend — where you went and what you did.',
      zh: '向考官描述你上次的假期或最近的週末——你去了哪裡、做了什麼。',
    },
    tips: [{ en: 'Prepare 4–5 passé composé sentences in advance; this topic appears very often.', zh: '事先準備 4–5 句複合過去式句子；這個主題非常常出現。' }],
  },
};
