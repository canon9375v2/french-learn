import type { Unit } from '../../types';

export const a2Unit2: Unit = {
  id: 'a2-u2',
  level: 'A2',
  order: 2,
  title: { en: 'Au restaurant — food, quantities & partitive articles', zh: 'Au restaurant — 食物、數量與部分冠詞' },
  description: {
    en: 'Order food, talk about quantities with du/de la/des, and use the pronoun "on".',
    zh: '學會點餐、用 du/de la/des 談論數量，並使用代名詞「on」。',
  },
  vocab: [
    { fr: 'le pain', meaning: { en: 'bread', zh: '麵包' } },
    { fr: 'le fromage', meaning: { en: 'cheese', zh: '起司' } },
    { fr: "l'eau (f.)", meaning: { en: 'water', zh: '水' } },
    { fr: 'la viande', meaning: { en: 'meat', zh: '肉' } },
    { fr: 'les légumes (m.)', meaning: { en: 'vegetables', zh: '蔬菜' } },
    { fr: 'un peu de', meaning: { en: 'a little of', zh: '一點點' } },
    { fr: 'beaucoup de', meaning: { en: 'a lot of', zh: '很多' } },
    { fr: 'une bouteille de', meaning: { en: 'a bottle of', zh: '一瓶' } },
    { fr: "l'addition (f.)", meaning: { en: 'the check/bill', zh: '帳單' } },
    { fr: 'commander', meaning: { en: 'to order', zh: '點餐' } },
    { fr: 'la carte', meaning: { en: 'the menu', zh: '菜單' } },
    { fr: 'délicieux / délicieuse', meaning: { en: 'delicious', zh: '美味的' } },
  ],
  grammar: [
    {
      title: { en: "Partitive articles: du, de la, de l', des", zh: '部分冠詞：du、de la、de l\'、des' },
      explanation: {
        en: 'Used for "some" of an uncountable or mass noun: du (masc.), de la (fem.), de l\' (before vowel sound), des (plural). After a negation, these all become "de/d\'".',
        zh: '用於不可數或整體名詞的「一些」：du（陽性）、de la（陰性）、de l\'（母音前）、des（複數）。否定句中這些全部變成「de/d\'」。',
      },
      examples: [
        { fr: 'Je voudrais du pain et de la salade.', translation: { en: 'I would like some bread and some salad.', zh: '我想要一些麵包和沙拉。' } },
        { fr: 'Je ne mange pas de viande.', translation: { en: "I don't eat meat.", zh: '我不吃肉。' } },
      ],
    },
    {
      title: { en: 'Expressions of quantity + de', zh: '數量表達 + de' },
      explanation: { en: 'beaucoup de, un peu de, une bouteille de, trop de — all followed directly by "de/d\'" with no article.', zh: 'beaucoup de、un peu de、une bouteille de、trop de——後面直接接「de/d\'」，不加冠詞。' },
      examples: [
        { fr: 'Il y a beaucoup de fromage en France.', translation: { en: 'There is a lot of cheese in France.', zh: '法國有很多起司。' } },
        { fr: "Une bouteille d'eau, s'il vous plaît.", translation: { en: 'A bottle of water, please.', zh: '請給我一瓶水。' } },
      ],
    },
    {
      title: { en: 'The pronoun "on"', zh: '代名詞「on」' },
      explanation: { en: 'Informally, "on" replaces "nous" and takes the same verb form as il/elle. It can also mean "people/one" in general.', zh: '在口語中，「on」可取代「nous」，動詞變化跟 il/elle 相同。它也可以泛指「人們／大家」。' },
      examples: [
        { fr: 'On mange au restaurant ce soir ?', translation: { en: 'Shall we eat at a restaurant tonight?', zh: '我們今晚要去餐廳吃飯嗎？' } },
        { fr: 'En France, on aime le pain frais.', translation: { en: 'In France, people love fresh bread.', zh: '在法國，大家都喜歡新鮮麵包。' } },
      ],
    },
  ],
  dialogue: {
    title: { en: 'At the restaurant', zh: '在餐廳' },
    lines: [
      { speaker: 'Serveur', fr: 'Bonjour, vous avez choisi ?', translation: { en: 'Hello, have you chosen?', zh: '您好，決定好了嗎？' } },
      { speaker: 'Client', fr: "Oui, je voudrais du poulet avec des légumes, s'il vous plaît.", translation: { en: 'Yes, I would like chicken with vegetables, please.', zh: '是的，我想要雞肉搭配蔬菜，謝謝。' } },
      { speaker: 'Serveur', fr: 'Et à boire ?', translation: { en: 'And to drink?', zh: '飲料呢？' } },
      { speaker: 'Client', fr: "Une bouteille d'eau, merci. On partage un dessert ?", translation: { en: 'A bottle of water, thanks. Shall we share a dessert?', zh: '一瓶水，謝謝。我們要不要分享一份甜點？' } },
      { speaker: 'Serveur', fr: "Bien sûr ! L'addition, ce sera pour vous deux ensemble ?", translation: { en: 'Of course! The check, will that be together for both of you?', zh: '當然！帳單要算你們兩位一起嗎？' } },
    ],
  },
  quiz: [
    {
      id: 'a2u2-q1',
      skill: 'grammar',
      prompt: { en: 'Complete: "Je voudrais ___ eau."', zh: '完成句子：「Je voudrais ___ eau.」' },
      options: [
        { en: 'du', zh: 'du' },
        { en: 'de la', zh: 'de la' },
        { en: "de l'", zh: "de l'" },
        { en: 'des', zh: 'des' },
      ],
      answerIndex: 2,
      explanation: { en: '"Eau" starts with a vowel sound, so "de l\'" is used.', zh: '「Eau」以母音開頭，所以要用「de l\'」。' },
    },
    {
      id: 'a2u2-q2',
      skill: 'grammar',
      prompt: { en: 'Complete (negative): "Je ne bois pas ___ café."', zh: '完成否定句：「Je ne bois pas ___ café.」' },
      options: [
        { en: 'du', zh: 'du' },
        { en: 'de', zh: 'de' },
        { en: 'des', zh: 'des' },
        { en: 'la', zh: 'la' },
      ],
      answerIndex: 1,
      explanation: { en: 'After a negation, partitive articles reduce to "de".', zh: '否定句中，部分冠詞會簡化成「de」。' },
    },
    {
      id: 'a2u2-q3',
      skill: 'vocab',
      prompt: { en: 'What is "l\'addition"?', zh: '「l\'addition」是什麼意思？' },
      options: [
        { en: 'the menu', zh: '菜單' },
        { en: 'the check/bill', zh: '帳單' },
        { en: 'the waiter', zh: '服務生' },
        { en: 'the dessert', zh: '甜點' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a2u2-q4',
      skill: 'listening',
      prompt: { en: 'Listen and choose the correct meaning.', zh: '聽音檔，選出正確的意思。' },
      audioText: "On voudrait une bouteille d'eau et beaucoup de pain, s'il vous plaît.",
      options: [
        { en: 'We would like a bottle of wine and a little bread.', zh: '我們想要一瓶酒和一點麵包。' },
        { en: 'We would like a bottle of water and a lot of bread.', zh: '我們想要一瓶水和很多麵包。' },
        { en: 'I would like some cheese and vegetables.', zh: '我想要一些起司和蔬菜。' },
        { en: 'They ordered chicken and salad.', zh: '他們點了雞肉和沙拉。' },
      ],
      answerIndex: 1,
    },
    {
      id: 'a2u2-q5',
      skill: 'reading',
      passage: 'Au marché, on trouve du pain frais, du fromage et beaucoup de légumes. Les prix sont raisonnables le matin.',
      prompt: { en: 'According to the text, when are prices reasonable?', zh: '根據文章，什麼時候的價格比較合理？' },
      options: [
        { en: 'In the evening', zh: '晚上' },
        { en: 'In the morning', zh: '早上' },
        { en: 'At night', zh: '深夜' },
        { en: 'Not mentioned', zh: '文中未提及' },
      ],
      answerIndex: 1,
    },
  ],
  writing: {
    prompt: {
      en: 'Write a short dialogue or paragraph ordering a meal at a restaurant, using at least 3 partitive articles.',
      zh: '寫一段在餐廳點餐的簡短對話或段落，至少使用 3 個部分冠詞。',
    },
    minWords: 25,
    tips: [
      { en: 'Use "je voudrais" for polite requests.', zh: '用「je voudrais」表達禮貌的請求。' },
      { en: 'Remember quantity expressions drop the article: "beaucoup de", not "beaucoup du/de la".', zh: '記得數量表達不加冠詞：是「beaucoup de」，不是「beaucoup du/de la」。' },
    ],
  },
};
