import type { Unit } from '../../types';

export const b1Unit1: Unit = {
  id: 'b1-u1',
  level: 'B1',
  order: 1,
  title: { en: 'Donner son opinion — opinions & the future', zh: 'Donner son opinion — 表達意見與未來式' },
  description: {
    en: 'Express opinions with nuance, justify them, and talk about the future — key for TCF B1 (a common immigration target).',
    zh: '學會有層次地表達意見、說明理由，並談論未來——這是 TCF B1（常見的移民目標等級）的關鍵能力。',
  },
  vocab: [
    { fr: 'à mon avis', meaning: { en: 'in my opinion', zh: '依我看' } },
    { fr: 'je pense que / je trouve que', meaning: { en: 'I think that', zh: '我認為' } },
    { fr: "je suis d'accord avec", meaning: { en: 'I agree with', zh: '我同意' } },
    { fr: "je ne suis pas d'accord", meaning: { en: 'I disagree', zh: '我不同意' } },
    { fr: 'parce que', meaning: { en: 'because', zh: '因為' } },
    { fr: 'donc', meaning: { en: 'so / therefore', zh: '所以' } },
    { fr: 'cependant', meaning: { en: 'however', zh: '然而' } },
    { fr: 'par contre', meaning: { en: 'on the other hand', zh: '另一方面' } },
    { fr: "d'ailleurs", meaning: { en: 'moreover / besides', zh: '此外' } },
    { fr: 'un avantage / un inconvénient', meaning: { en: 'an advantage / a disadvantage', zh: '優點／缺點' } },
    { fr: 'selon moi', meaning: { en: 'according to me', zh: '依我之見' } },
    { fr: 'il me semble que', meaning: { en: 'it seems to me that', zh: '在我看來' } },
  ],
  grammar: [
    {
      title: { en: 'Le futur simple', zh: 'Le futur simple — 簡單未來式' },
      explanation: {
        en: 'Formed from the infinitive (dropping final -e for -re verbs) + endings: -ai, -as, -a, -ons, -ez, -ont. Many common verbs are irregular in the stem (être→ser-, avoir→aur-, aller→ir-, faire→fer-, pouvoir→pourr-, vouloir→voudr-, devoir→devr-).',
        zh: '由原形動詞（-re 動詞去掉字尾 -e）加上字尾構成：-ai、-as、-a、-ons、-ez、-ont。許多常見動詞的字根是不規則的（être→ser-、avoir→aur-、aller→ir-、faire→fer-、pouvoir→pourr-、vouloir→voudr-、devoir→devr-）。',
      },
      examples: [
        { fr: 'Je pense que le télétravail sera plus courant.', translation: { en: 'I think remote work will be more common.', zh: '我認為遠距工作將會更普遍。' } },
        { fr: 'Nous devrons nous adapter.', translation: { en: 'We will have to adapt.', zh: '我們將必須適應。' } },
      ],
    },
    {
      title: { en: 'Structuring an opinion (TCF expression écrite/orale)', zh: '意見表達的結構（TCF 寫作／口說）' },
      explanation: {
        en: 'A strong B1 opinion answer states a position, gives a reason with "parce que", adds a nuance with "cependant/par contre", and concludes. This structure directly maps to TCF writing task 2 and speaking task 3.',
        zh: '一篇優秀的 B1 意見回答會先表明立場，用「parce que」說明理由，再用「cependant/par contre」加入不同角度，最後做出結論。這個結構直接對應到 TCF 寫作第二題與口說第三題。',
      },
      examples: [
        {
          fr: "À mon avis, les réseaux sociaux sont utiles parce qu'ils connectent les gens. Cependant, ils peuvent aussi isoler.",
          translation: { en: 'In my opinion, social media is useful because it connects people. However, it can also isolate.', zh: '依我看，社群媒體是有用的，因為它能連結人與人。然而，它也可能造成孤立。' },
        },
      ],
    },
  ],
  dialogue: {
    title: { en: 'Debate: remote work', zh: '辯論：遠距工作' },
    lines: [
      { speaker: 'Nora', fr: 'À mon avis, le télétravail sera la norme dans dix ans.', translation: { en: 'In my opinion, remote work will be the norm in ten years.', zh: '依我看，十年後遠距工作將會是常態。' } },
      {
        speaker: 'Hugo',
        fr: "Je ne suis pas tout à fait d'accord. Cependant, je pense que ça dépendra du métier.",
        translation: { en: "I don't entirely agree. However, I think it will depend on the job.", zh: '我不完全同意。然而，我認為這會取決於職業種類。' },
      },
      { speaker: 'Nora', fr: "C'est vrai, mais il y aura plus de flexibilité pour tout le monde.", translation: { en: 'True, but there will be more flexibility for everyone.', zh: '沒錯，但每個人都會有更多彈性。' } },
      { speaker: 'Hugo', fr: 'Par contre, certains auront des difficultés à se concentrer chez eux.', translation: { en: 'On the other hand, some people will have trouble concentrating at home.', zh: '另一方面，有些人在家會很難專心。' } },
    ],
  },
  quiz: [
    {
      id: 'b1u1-q1',
      skill: 'grammar',
      prompt: { en: 'Complete the futur simple: "Demain, je ___ à Paris." (aller)', zh: '完成簡單未來式：「Demain, je ___ à Paris.」（aller）' },
      options: [
        { en: 'vais', zh: 'vais' },
        { en: 'irai', zh: 'irai' },
        { en: 'allé', zh: 'allé' },
        { en: 'allerai', zh: 'allerai' },
      ],
      answerIndex: 1,
    },
    {
      id: 'b1u1-q2',
      skill: 'grammar',
      prompt: { en: 'Which connector introduces a contrast/nuance?', zh: '哪個連接詞用來引出對比／不同角度？' },
      options: [
        { en: 'parce que', zh: 'parce que' },
        { en: 'donc', zh: 'donc' },
        { en: 'cependant', zh: 'cependant' },
        { en: 'et', zh: 'et' },
      ],
      answerIndex: 2,
    },
    {
      id: 'b1u1-q3',
      skill: 'listening',
      prompt: { en: "Listen and identify the speaker's opinion.", zh: '聽音檔，判斷說話者的意見。' },
      audioText: "À mon avis, il faudra investir davantage dans les transports en commun, cependant cela coûtera cher à court terme.",
      options: [
        { en: 'Public transport investment is unnecessary.', zh: '不需要投資大眾運輸。' },
        { en: 'More investment in public transport is needed, though costly short-term.', zh: '需要投資更多大眾運輸，雖然短期內成本較高。' },
        { en: 'Public transport is already sufficient.', zh: '大眾運輸已經很足夠了。' },
        { en: 'The speaker has no opinion.', zh: '說話者沒有意見。' },
      ],
      answerIndex: 1,
    },
    {
      id: 'b1u1-q4',
      skill: 'reading',
      passage:
        "Selon une étude récente, de plus en plus de jeunes choisiront de travailler à distance. Cependant, certains experts pensent que cela isolera les nouveaux employés, qui auront moins d'occasions d'apprendre de leurs collègues.",
      prompt: { en: 'What concern do some experts raise?', zh: '部分專家提出了什麼樣的擔憂？' },
      options: [
        { en: 'Remote work will increase salaries.', zh: '遠距工作會提高薪資。' },
        { en: 'New employees may become isolated and learn less from colleagues.', zh: '新進員工可能會變得孤立，較少機會向同事學習。' },
        { en: 'Remote work will be banned.', zh: '遠距工作將被禁止。' },
        { en: 'Young people refuse to work remotely.', zh: '年輕人拒絕遠距工作。' },
      ],
      answerIndex: 1,
    },
    {
      id: 'b1u1-q5',
      skill: 'grammar',
      prompt: { en: 'Complete: "Il ___ (devoir) faire des efforts pour réussir."', zh: '完成句子：「Il ___（devoir）faire des efforts pour réussir.」' },
      options: [
        { en: 'devra', zh: 'devra' },
        { en: 'devrai', zh: 'devrai' },
        { en: 'devrez', zh: 'devrez' },
        { en: 'doit', zh: 'doit' },
      ],
      answerIndex: 0,
    },
  ],
  writing: {
    prompt: {
      en: 'TCF-style task: "Certaines personnes pensent que les villes devraient interdire les voitures au centre-ville. Qu\'en pensez-vous ?" Write your opinion with reasons and a nuance (60+ words).',
      zh: 'TCF 風格題目：「Certaines personnes pensent que les villes devraient interdire les voitures au centre-ville. Qu\'en pensez-vous ?」（有些人認為城市應該禁止市中心行車，你的看法是？）寫出你的意見，包含理由與不同角度（60 字以上）。',
    },
    minWords: 60,
    tips: [
      { en: 'Structure: position → reason (parce que) → nuance (cependant) → conclusion.', zh: '結構：立場 → 理由（parce que）→ 不同角度（cependant）→ 結論。' },
      { en: 'Use at least one futur simple sentence about consequences.', zh: '至少使用一句簡單未來式來談論後果。' },
    ],
  },
  speaking: {
    prompt: {
      en: 'Give a 1-minute opinion on whether social media does more good than harm, with a clear structure and a nuance.',
      zh: '用一分鐘表達你對「社群媒體利大於弊還是弊大於利」的看法，結構清楚並包含不同角度。',
    },
    tips: [{ en: 'Practice out loud with a timer — TCF speaking tasks are time-boxed.', zh: '搭配計時器大聲練習——TCF 口說任務有時間限制。' }],
  },
};
