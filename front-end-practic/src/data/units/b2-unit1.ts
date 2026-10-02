import type { Unit } from '../../types';

export const b2Unit1: Unit = {
  id: 'b2-u1',
  level: 'B2',
  order: 1,
  title: { en: 'Le subjonctif & argumentation nuancée', zh: 'Le subjonctif — 虛擬式與細膩論證' },
  description: {
    en: 'Master the subjunctive after opinion/emotion expressions and build sophisticated arguments for the hardest TCF items.',
    zh: '掌握意見／情緒表達後接虛擬式的用法，並學會建構精細的論證，應付 TCF 中最難的題目。',
  },
  vocab: [
    { fr: 'il faut que', meaning: { en: 'it is necessary that', zh: '必須（做某事）' } },
    { fr: 'il est possible que', meaning: { en: 'it is possible that', zh: '有可能' } },
    { fr: 'je doute que', meaning: { en: 'I doubt that', zh: '我懷疑' } },
    { fr: 'je suis surpris(e) que', meaning: { en: 'I am surprised that', zh: '我很驚訝' } },
    { fr: 'bien que', meaning: { en: 'although', zh: '雖然' } },
    { fr: 'à condition que', meaning: { en: 'provided that', zh: '只要／前提是' } },
    { fr: 'de sorte que', meaning: { en: 'so that', zh: '以便／以致於' } },
    { fr: 'un enjeu', meaning: { en: 'a stake / a key issue', zh: '關鍵議題' } },
    { fr: 'nuancer', meaning: { en: 'to nuance / qualify', zh: '使更細膩／補充說明' } },
    { fr: 'remettre en question', meaning: { en: 'to call into question', zh: '重新檢視／質疑' } },
    { fr: 'un point de vue', meaning: { en: 'a point of view', zh: '觀點' } },
    { fr: 'néanmoins', meaning: { en: 'nevertheless', zh: '儘管如此' } },
  ],
  grammar: [
    {
      title: { en: 'Le subjonctif présent', zh: 'Le subjonctif présent — 現在虛擬式' },
      explanation: {
        en: 'Used after expressions of necessity, doubt, emotion, and certain conjunctions (bien que, pour que, à condition que, avant que). Formed from the "ils" form of the present indicative + endings -e, -es, -e, -ions, -iez, -ent. Irregular: être (sois, soit, soyons...), avoir (aie, aies, ait...), aller (aille...), faire (fasse...), pouvoir (puisse...).',
        zh: '用於必要性、懷疑、情緒表達之後，以及某些連接詞之後（bien que、pour que、à condition que、avant que）。由現在式直陳式的「ils」形式去掉字尾，加上 -e、-es、-e、-ions、-iez、-ent 構成。不規則動詞：être（sois、soit、soyons...）、avoir（aie、aies、ait...）、aller（aille...）、faire（fasse...）、pouvoir（puisse...）。',
      },
      examples: [
        { fr: 'Il faut que nous soyons prêts.', translation: { en: 'We need to be ready.', zh: '我們必須準備好。' } },
        { fr: "Bien qu'il pleuve, ils sortent.", translation: { en: 'Although it is raining, they go out.', zh: '雖然在下雨，他們還是出門了。' } },
        { fr: "Je doute qu'il vienne.", translation: { en: "I doubt he'll come.", zh: '我懷疑他會來。' } },
      ],
    },
    {
      title: { en: 'Nuanced argumentation for B2 writing/speaking', zh: 'B2 寫作／口說的細膩論證' },
      explanation: {
        en: 'At B2, the TCF expects you to concede a counter-argument before reinforcing your own position ("Certes... néanmoins...") rather than presenting a single flat opinion.',
        zh: '在 B2 程度，TCF 期望你先讓步承認一個反方論點，再強化自己的立場（「Certes... néanmoins...」），而不是只提出單一、扁平的意見。',
      },
      examples: [
        {
          fr: 'Certes, le télétravail réduit les interactions sociales ; néanmoins, il permet une meilleure conciliation entre vie professionnelle et vie privée.',
          translation: { en: 'Granted, remote work reduces social interaction; nevertheless, it allows a better work-life balance.', zh: '誠然，遠距工作減少了社交互動；然而，它讓工作與生活能有更好的平衡。' },
        },
      ],
    },
  ],
  dialogue: {
    title: { en: 'A nuanced debate', zh: '一場細膩的辯論' },
    lines: [
      { speaker: 'Amine', fr: 'Il est essentiel que les gouvernements agissent contre le changement climatique.', translation: { en: 'It is essential that governments act against climate change.', zh: '各國政府針對氣候變遷採取行動是至關重要的。' } },
      {
        speaker: 'Claire',
        fr: "Certes, mais je doute que des mesures isolées suffisent sans coopération internationale.",
        translation: { en: 'Granted, but I doubt that isolated measures will suffice without international cooperation.', zh: '誠然，但我懷疑若沒有國際合作，單獨的措施是不夠的。' },
      },
      {
        speaker: 'Amine',
        fr: 'Bien que la coopération soit difficile, il faut que chaque pays commence quelque part.',
        translation: { en: 'Although cooperation is difficult, each country needs to start somewhere.', zh: '雖然合作很困難，但每個國家都必須從某處開始。' },
      },
    ],
  },
  quiz: [
    {
      id: 'b2u1-q1',
      skill: 'grammar',
      prompt: { en: 'Complete: "Il faut que tu ___ (être) à l\'heure."', zh: '完成句子：「Il faut que tu ___（être）à l\'heure.」' },
      options: [
        { en: 'es', zh: 'es' },
        { en: 'sois', zh: 'sois' },
        { en: 'seras', zh: 'seras' },
        { en: 'était', zh: 'était' },
      ],
      answerIndex: 1,
    },
    {
      id: 'b2u1-q2',
      skill: 'grammar',
      prompt: { en: 'Complete: "Bien qu\'il ___ (pouvoir) réussir, il doute de lui."', zh: '完成句子：「Bien qu\'il ___（pouvoir）réussir, il doute de lui.」' },
      options: [
        { en: 'peut', zh: 'peut' },
        { en: 'pourra', zh: 'pourra' },
        { en: 'puisse', zh: 'puisse' },
        { en: 'pouvait', zh: 'pouvait' },
      ],
      answerIndex: 2,
    },
    {
      id: 'b2u1-q3',
      skill: 'listening',
      prompt: { en: 'Listen and identify the main nuance expressed.', zh: '聽音檔，找出說話者表達的主要轉折。' },
      audioText: "Certes, l'intelligence artificielle améliore la productivité ; néanmoins, elle soulève des questions éthiques majeures que l'on ne peut ignorer.",
      options: [
        { en: 'AI has no drawbacks at all.', zh: 'AI 完全沒有缺點。' },
        { en: 'AI improves productivity but raises major ethical questions.', zh: 'AI 提升了生產力，但也引發了重大的倫理議題。' },
        { en: 'AI should be banned immediately.', zh: 'AI 應該立刻被禁止。' },
        { en: 'AI has no effect on productivity.', zh: 'AI 對生產力沒有影響。' },
      ],
      answerIndex: 1,
    },
    {
      id: 'b2u1-q4',
      skill: 'reading',
      passage:
        "Bien que la transition énergétique soit indispensable, elle exige des investissements considérables, et il n'est pas certain que tous les pays disposent des ressources nécessaires pour la mener à bien à court terme.",
      prompt: { en: 'What concern does the passage raise about the energy transition?', zh: '這段文字對能源轉型提出了什麼樣的疑慮？' },
      options: [
        { en: 'It is unnecessary.', zh: '它是不必要的。' },
        { en: 'Not all countries may have the resources to carry it out quickly.', zh: '並非所有國家都有足夠資源能快速完成它。' },
        { en: 'It requires no investment.', zh: '它不需要任何投資。' },
        { en: 'It has already been completed everywhere.', zh: '它已經在各地完成了。' },
      ],
      answerIndex: 1,
    },
    {
      id: 'b2u1-q5',
      skill: 'grammar',
      prompt: { en: 'Which conjunction requires the subjunctive?', zh: '哪個連接詞後面需要接虛擬式？' },
      options: [
        { en: 'parce que', zh: 'parce que' },
        { en: 'depuis que', zh: 'depuis que' },
        { en: 'à condition que', zh: 'à condition que' },
        { en: 'pendant que', zh: 'pendant que' },
      ],
      answerIndex: 2,
    },
  ],
  writing: {
    prompt: {
      en: 'TCF-style task: "Le télétravail va-t-il remplacer le travail au bureau ?" Write a nuanced argumentative essay using "Certes... néanmoins..." structure and at least two subjunctive constructions (120+ words).',
      zh: 'TCF 風格題目：「Le télétravail va-t-il remplacer le travail au bureau ?」（遠距工作會取代辦公室工作嗎？）寫一篇有層次的論說文，使用「Certes... néanmoins...」結構，並至少包含兩個虛擬式句型（120 字以上）。',
    },
    minWords: 120,
    tips: [
      { en: 'Concede a point first ("Certes...") before pivoting with "néanmoins" or "cependant".', zh: '先讓步承認一個論點（「Certes...」），再用「néanmoins」或「cependant」轉折。' },
      { en: 'Use "il faut que", "bien que", or "il est possible que" to trigger the subjunctive naturally.', zh: '用「il faut que」、「bien que」或「il est possible que」自然地帶出虛擬式。' },
    ],
  },
  speaking: {
    prompt: {
      en: 'Defend a nuanced position on a controversial topic of your choice for 2 minutes, conceding one counter-argument.',
      zh: '就一個你自選的爭議性主題，用兩分鐘捍衛一個有層次的立場，並讓步承認一個反方論點。',
    },
    tips: [{ en: 'Examiners at B2 reward concession + rebuttal structure over a one-sided rant.', zh: 'B2 考官偏好「讓步 + 反駁」的結構，而不是單方面的抱怨。' }],
  },
};
