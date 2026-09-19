import type { Localized } from '../types';

export interface SoundExample {
  fr: string;
  translation: Localized;
}

export interface SoundGroup {
  spelling: string;
  ipa: string;
  description: Localized;
  examples: SoundExample[];
}

export interface ConsonantRule {
  title: Localized;
  explanation: Localized;
  examples: SoundExample[];
}

export interface AlphabetLetter {
  letter: string;
  spoken: string;
  ipa: string;
  example: string;
  exampleTranslation: Localized;
}

export const alphabetLetters: AlphabetLetter[] = [
  { letter: 'A', spoken: 'a', ipa: '[a]', example: 'avion', exampleTranslation: { en: 'airplane', zh: '飛機' } },
  { letter: 'B', spoken: 'bé', ipa: '[be]', example: 'bateau', exampleTranslation: { en: 'boat', zh: '船' } },
  { letter: 'C', spoken: 'cé', ipa: '[se]', example: 'café', exampleTranslation: { en: 'coffee', zh: '咖啡' } },
  { letter: 'D', spoken: 'dé', ipa: '[de]', example: 'dimanche', exampleTranslation: { en: 'Sunday', zh: '星期日' } },
  { letter: 'E', spoken: 'e', ipa: '[ə]', example: 'école', exampleTranslation: { en: 'school', zh: '學校' } },
  { letter: 'F', spoken: 'effe', ipa: '[ɛf]', example: 'fromage', exampleTranslation: { en: 'cheese', zh: '起司' } },
  { letter: 'G', spoken: 'gé', ipa: '[ʒe]', example: 'gâteau', exampleTranslation: { en: 'cake', zh: '蛋糕' } },
  { letter: 'H', spoken: 'hache', ipa: '[aʃ]', example: 'hôtel', exampleTranslation: { en: 'hotel', zh: '飯店' } },
  { letter: 'I', spoken: 'i', ipa: '[i]', example: 'idée', exampleTranslation: { en: 'idea', zh: '主意' } },
  { letter: 'J', spoken: 'ji', ipa: '[ʒi]', example: 'jardin', exampleTranslation: { en: 'garden', zh: '花園' } },
  { letter: 'K', spoken: 'ka', ipa: '[ka]', example: 'kilo', exampleTranslation: { en: 'kilo', zh: '公斤' } },
  { letter: 'L', spoken: 'elle', ipa: '[ɛl]', example: 'lundi', exampleTranslation: { en: 'Monday', zh: '星期一' } },
  { letter: 'M', spoken: 'emme', ipa: '[ɛm]', example: 'maison', exampleTranslation: { en: 'house', zh: '房子' } },
  { letter: 'N', spoken: 'enne', ipa: '[ɛn]', example: 'nuit', exampleTranslation: { en: 'night', zh: '夜晚' } },
  { letter: 'O', spoken: 'o', ipa: '[o]', example: 'orange', exampleTranslation: { en: 'orange', zh: '柳橙' } },
  { letter: 'P', spoken: 'pé', ipa: '[pe]', example: 'pain', exampleTranslation: { en: 'bread', zh: '麵包' } },
  { letter: 'Q', spoken: 'ku', ipa: '[ky]', example: 'question', exampleTranslation: { en: 'question', zh: '問題' } },
  { letter: 'R', spoken: 'erre', ipa: '[ɛʁ]', example: 'rouge', exampleTranslation: { en: 'red', zh: '紅色' } },
  { letter: 'S', spoken: 'esse', ipa: '[ɛs]', example: 'soleil', exampleTranslation: { en: 'sun', zh: '太陽' } },
  { letter: 'T', spoken: 'té', ipa: '[te]', example: 'table', exampleTranslation: { en: 'table', zh: '桌子' } },
  { letter: 'U', spoken: 'u', ipa: '[y]', example: 'université', exampleTranslation: { en: 'university', zh: '大學' } },
  { letter: 'V', spoken: 'vé', ipa: '[ve]', example: 'ville', exampleTranslation: { en: 'city', zh: '城市' } },
  { letter: 'W', spoken: 'double vé', ipa: '[dubləve]', example: 'wagon', exampleTranslation: { en: 'train car', zh: '火車車廂' } },
  { letter: 'X', spoken: 'iks', ipa: '[iks]', example: 'xylophone', exampleTranslation: { en: 'xylophone', zh: '木琴' } },
  { letter: 'Y', spoken: 'i grec', ipa: '[igʁɛk]', example: 'yaourt', exampleTranslation: { en: 'yogurt', zh: '優格' } },
  { letter: 'Z', spoken: 'zède', ipa: '[zɛd]', example: 'zéro', exampleTranslation: { en: 'zero', zh: '零' } },
];

export interface LiaisonExample {
  fr: string;
  note: Localized;
}

export const simpleVowels: SoundGroup[] = [
  {
    spelling: 'a, à, â',
    ipa: '[a]',
    description: { en: 'Like "a" in "father", short and bright.', zh: '類似英文 father 中的 a，短而明亮。' },
    examples: [
      { fr: 'chat', translation: { en: 'cat', zh: '貓' } },
      { fr: 'là', translation: { en: 'there', zh: '那裡' } },
    ],
  },
  {
    spelling: 'e',
    ipa: '[ə]',
    description: { en: 'A relaxed, neutral "uh" — often nearly dropped in fast speech.', zh: '放鬆、中性的「呃」音，快速口語中常幾乎被省略。' },
    examples: [
      { fr: 'le', translation: { en: 'the', zh: '（陽性）這個/那個' } },
      { fr: 'petit', translation: { en: 'small', zh: '小的' } },
    ],
  },
  {
    spelling: 'é',
    ipa: '[e]',
    description: { en: 'A closed, crisp "ay" sound, lips spread — never a diphthong like English "ay".', zh: '閉口、清脆的「ay」音，嘴角展開——不像英文「ay」那樣是雙母音。' },
    examples: [
      { fr: 'été', translation: { en: 'summer', zh: '夏天' } },
      { fr: 'café', translation: { en: 'coffee', zh: '咖啡' } },
    ],
  },
  {
    spelling: 'è, ê, ai, ei',
    ipa: '[ɛ]',
    description: { en: 'An open "eh", like "bet".', zh: '開口的「欸」音，類似英文 bet 中的母音。' },
    examples: [
      { fr: 'mère', translation: { en: 'mother', zh: '母親' } },
      { fr: 'être', translation: { en: 'to be', zh: '是（動詞）' } },
    ],
  },
  {
    spelling: 'i, î, y',
    ipa: '[i]',
    description: { en: 'Like "ee" in "see", short and tight.', zh: '類似英文 see 的「ee」音，短而緊。' },
    examples: [
      { fr: 'si', translation: { en: 'if', zh: '如果' } },
      { fr: 'stylo', translation: { en: 'pen', zh: '筆' } },
    ],
  },
  {
    spelling: 'o, ô, au, eau',
    ipa: '[o] / [ɔ]',
    description: {
      en: 'Closed "o" (rose) in open syllables; more open "o" (like "aw") before a pronounced consonant.',
      zh: '在開音節中是閉口的「o」（如 rose）；在後接發音子音時則較開口，類似「aw」。',
    },
    examples: [
      { fr: 'mot', translation: { en: 'word', zh: '字' } },
      { fr: 'beau', translation: { en: 'beautiful', zh: '美的' } },
    ],
  },
  {
    spelling: 'ou',
    ipa: '[u]',
    description: { en: 'Like "oo" in "food" — rounded lips, never like English "ou" in "out".', zh: '類似英文 food 的「oo」音，嘴唇要圓——不像英文 out 裡的 "ou"。' },
    examples: [
      { fr: 'vous', translation: { en: 'you (formal/plural)', zh: '您/你們' } },
      { fr: 'rouge', translation: { en: 'red', zh: '紅色' } },
    ],
  },
  {
    spelling: 'u, û',
    ipa: '[y]',
    description: {
      en: 'No English equivalent: say "ee" while rounding your lips like for "oo". The classic hard sound for English speakers.',
      zh: '英文中沒有對應音：嘴型像發「oo」一樣圓唇，同時發出「ee」的音。這是英語母語者最難掌握的法文音之一。',
    },
    examples: [
      { fr: 'tu', translation: { en: 'you (informal)', zh: '你（非正式）' } },
      { fr: 'rue', translation: { en: 'street', zh: '街道' } },
    ],
  },
  {
    spelling: 'eu, œu',
    ipa: '[ø] / [œ]',
    description: { en: 'Round your lips for "o" but say "é" or "è" — between "eu" in French and English "uh".', zh: '嘴型圓成「o」的樣子，但發出「é」或「è」的音——介於法文「eu」和英文「uh」之間。' },
    examples: [
      { fr: 'peu', translation: { en: 'little', zh: '少量' } },
      { fr: 'œuf', translation: { en: 'egg', zh: '蛋' } },
    ],
  },
  {
    spelling: 'oi',
    ipa: '[wa]',
    description: { en: 'Glide "w" + "a", like English "wa" in "watt".', zh: '滑音「w」加上「a」，類似英文 watt 中的 "wa"。' },
    examples: [
      { fr: 'moi', translation: { en: 'me', zh: '我' } },
      { fr: 'trois', translation: { en: 'three', zh: '三' } },
    ],
  },
];

export const nasalVowels: SoundGroup[] = [
  {
    spelling: 'an, am, en, em',
    ipa: '[ɑ̃]',
    description: { en: 'Open "ah" pushed through the nose — do not pronounce the "n"/"m" itself.', zh: '開口的「啊」音從鼻腔送出——不要把「n」/「m」本身唸出來。' },
    examples: [
      { fr: 'dans', translation: { en: 'in', zh: '在……裡面' } },
      { fr: 'enfant', translation: { en: 'child', zh: '小孩' } },
    ],
  },
  {
    spelling: 'in, im, ain, ein, yn',
    ipa: '[ɛ̃]',
    description: { en: 'Nasal version of è.', zh: '「è」的鼻音版本。' },
    examples: [
      { fr: 'vin', translation: { en: 'wine', zh: '酒' } },
      { fr: 'pain', translation: { en: 'bread', zh: '麵包' } },
    ],
  },
  {
    spelling: 'on, om',
    ipa: '[ɔ̃]',
    description: { en: 'Nasal version of the open "o".', zh: '開口「o」的鼻音版本。' },
    examples: [
      { fr: 'bon', translation: { en: 'good', zh: '好的' } },
      { fr: 'maison', translation: { en: 'house', zh: '房子' } },
    ],
  },
  {
    spelling: 'un, um',
    ipa: '[œ̃]',
    description: { en: 'Nasal version of "eu" — merging with [ɛ̃] for many speakers today.', zh: '「eu」的鼻音版本——現今許多說話者已把它和 [ɛ̃] 混為同一個音。' },
    examples: [
      { fr: 'un', translation: { en: 'one/a', zh: '一個（陽性）' } },
      { fr: 'parfum', translation: { en: 'perfume', zh: '香水' } },
    ],
  },
];

export const consonantRules: ConsonantRule[] = [
  {
    title: { en: 'c — hard or soft', zh: 'c — 硬音或軟音' },
    explanation: {
      en: 'Hard [k] before a, o, u or a consonant. Soft [s] before e, i, y. A cedilla (ç) forces the soft [s] sound even before a/o/u.',
      zh: '在 a、o、u 或子音前發硬音 [k]；在 e、i、y 前發軟音 [s]。加上軟音符（ç）可以在 a/o/u 前也強制發出 [s] 音。',
    },
    examples: [
      { fr: 'café, école', translation: { en: '[k] — café, school', zh: '[k] — 咖啡、學校' } },
      { fr: 'cinéma, ça', translation: { en: '[s] — cinema, that', zh: '[s] — 電影院、那個' } },
    ],
  },
  {
    title: { en: 'g — hard or soft', zh: 'g — 硬音或軟音' },
    explanation: {
      en: 'Hard [g] before a, o, u. Soft [ʒ] (like "s" in "measure") before e, i, y. Adding a silent "u" (gu) keeps the hard sound before e/i.',
      zh: '在 a、o、u 前發硬音 [g]；在 e、i、y 前發軟音 [ʒ]（類似英文 measure 中的 "s"）。加上不發音的「u」（gu）可以在 e/i 前保留硬音。',
    },
    examples: [
      { fr: 'garçon, gomme', translation: { en: '[g] — boy, eraser', zh: '[g] — 男孩、橡皮擦' } },
      { fr: 'âge, girafe', translation: { en: '[ʒ] — age, giraffe', zh: '[ʒ] — 年齡、長頸鹿' } },
      { fr: 'guerre, guide', translation: { en: '[g] kept — war, guide', zh: '保留 [g] — 戰爭、導遊' } },
    ],
  },
  {
    title: { en: 'h — always silent, but two kinds', zh: 'h — 永遠不發音，但分兩種' },
    explanation: {
      en: '"h muet" (mute h) behaves like a vowel and allows liaison/elision (l\'hôtel). "h aspiré" (aspirated h) blocks liaison and elision, even though it is still not pronounced (le héros, not l\'héros).',
      zh: '「h muet」（啞音 h）表現得像母音，允許連音/省音（l\'hôtel）。「h aspiré」（噓音 h）雖然本身也不發音，但會阻擋連音與省音（le héros，而不是 l\'héros）。',
    },
    examples: [
      { fr: "l'hôtel, l'homme", translation: { en: 'h muet — linked freely', zh: 'h muet — 可自由連音' } },
      { fr: 'le héros, le haricot', translation: { en: 'h aspiré — no linking', zh: 'h aspiré — 不可連音' } },
    ],
  },
  {
    title: { en: 'qu, j, ch, th, gn, ll', zh: 'qu、j、ch、th、gn、ll' },
    explanation: {
      en: 'qu is almost always just [k] (never "kw"). j is always [ʒ]. ch is usually [ʃ] ("sh"). th is just [t] — the English "th" sound does not exist in French. gn is [ɲ], like the "ny" in "canyon". Double ll is usually a plain [l], but after "i" it often becomes a "y" glide [j].',
      zh: 'qu 幾乎都唸 [k]（不是「kw」）。j 永遠唸 [ʒ]。ch 通常唸 [ʃ]（類似「噓」音）。th 就是 [t]——法文沒有英文的「th」音。gn 唸 [ɲ]，類似英文 canyon 中的 "ny"。雙寫 ll 通常唸單純的 [l]，但在「i」之後常常變成滑音 [j]（類似「呦」）。',
    },
    examples: [
      { fr: 'qui, quatre', translation: { en: '[k] — who, four', zh: '[k] — 誰、四' } },
      { fr: 'jardin', translation: { en: '[ʒ] — garden', zh: '[ʒ] — 花園' } },
      { fr: 'chat', translation: { en: '[ʃ] — cat', zh: '[ʃ] — 貓' } },
      { fr: 'thé, théâtre', translation: { en: '[t] — tea, theatre', zh: '[t] — 茶、劇院' } },
      { fr: 'montagne', translation: { en: '[ɲ] — mountain', zh: '[ɲ] — 山' } },
      { fr: 'fille, famille', translation: { en: '[j] glide — girl, family', zh: '[j] 滑音 — 女孩、家庭' } },
    ],
  },
  {
    title: { en: 'Final consonants are usually silent', zh: '字尾子音通常不發音' },
    explanation: {
      en: 'Most final consonants are dropped: petit, beaucoup, chat. Exception mnemonic "CaReFuL": the letters C, R, F, L are often still pronounced at the end of a word.',
      zh: '大部分字尾子音不發音：petit、beaucoup、chat。記憶口訣「CaReFuL」：字母 C、R、F、L 在字尾通常仍會發音。',
    },
    examples: [
      { fr: 'petit, beaucoup', translation: { en: 'silent final t, p', zh: '字尾 t、p 不發音' } },
      { fr: 'sac, bonjour, chef, animal', translation: { en: 'C-R-F-L pronounced', zh: 'C-R-F-L 會發音' } },
    ],
  },
];

export const liaisonObligatory: LiaisonExample[] = [
  { fr: 'les_amis', note: { en: 'plural determiner + vowel — s sounds like [z]', zh: '複數冠詞 + 母音——s 發成 [z]' } },
  { fr: 'un_homme', note: { en: 'article + h muet — n is pronounced', zh: '冠詞 + 啞音 h——n 會發音' } },
  { fr: 'nous_avons', note: { en: 'subject pronoun + verb starting with a vowel', zh: '主詞代名詞 + 以母音開頭的動詞' } },
  { fr: 'ils_ont', note: { en: 'subject pronoun + verb — s sounds like [z]', zh: '主詞代名詞 + 動詞——s 發成 [z]' } },
  { fr: "c'est_un ami", note: { en: 'est + vowel, very common in everyday speech', zh: 'est + 母音，日常口語中非常常見' } },
  { fr: 'très_intéressant', note: { en: 'short adverb + adjective', zh: '短副詞 + 形容詞' } },
  { fr: 'un petit_hôtel', note: { en: 'adjective + h muet noun in a fixed phrase', zh: '形容詞 + 啞音 h 名詞的固定用法' } },
];

export const liaisonForbidden: LiaisonExample[] = [
  { fr: 'les / héros', note: { en: 'h aspiré blocks liaison — no [z] sound before "héros"', zh: '噓音 h 阻擋連音——「héros」前不會出現 [z] 音' } },
  { fr: 'les / haricots', note: { en: 'h aspiré — say "lay-ari-ko", not "lay-z-ari-ko"', zh: '噓音 h——唸成「lay-ari-ko」，而不是「lay-z-ari-ko」' } },
  { fr: 'un garçon / et une fille', note: { en: 'never liaise right before "et" (and)', zh: '在「et」（和）之前絕不連音' } },
  {
    fr: 'Comment / allez-vous ?',
    note: { en: 'no liaison after most words ending in a nasal vowel + "t" like "comment" in questions', zh: '在問句中，像「comment」這類以鼻母音 + "t" 結尾的字之後通常不連音' },
  },
];

export const liaisonOptional: LiaisonExample[] = [
  { fr: 'Je ne suis pas(_)anglais.', note: { en: 'liaison after "pas" is common in careful/formal speech, often dropped casually', zh: '「pas」之後的連音在正式/謹慎的口語中常見，日常口語中常省略' } },
  { fr: 'des enfants(_)intelligents', note: { en: 'plural noun + adjective — liaison is elegant/formal, optional in casual speech', zh: '複數名詞 + 形容詞——連音顯得優雅正式，日常口語中可省略' } },
];

export const liaisonSoundChanges = [
  { letter: 's or x', becomes: '[z]', example: 'les_amis, deux_ans' },
  { letter: 'd', becomes: '[t]', example: 'un grand_ami' },
  { letter: 'f', becomes: '[v]', example: 'neuf_ans (neuf → [nœv])' },
];
