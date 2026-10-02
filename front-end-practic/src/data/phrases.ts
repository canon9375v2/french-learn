import type { Localized } from '../types';

export interface PhraseVariant {
  fr: string;
  meaning: Localized;
}

export interface Phrase {
  id: string;
  fr: string;
  meaning: Localized;
  variants: PhraseVariant[];
}

export interface WordUsage {
  word: string;
  usage: Localized;
}

export interface PhraseStudyNote {
  structure: Localized;
  pronunciation: Localized;
  rule: Localized;
  words: WordUsage[];
}

/** Short, standard-fr-FR notes for the 30 core phrases. */
export const phraseStudyNotes: Record<string, PhraseStudyNote> = {
  p1: { structure: { en: 'Comment + subject + reflexive verb appeler', zh: 'Comment + 主詞 + 反身動詞 appeler（問名字）' }, pronunciation: { en: '/kɔ.mɑ̃ ty ta.pɛl/', zh: '/kɔ.mɑ̃ ty ta.pɛl/' }, rule: { en: 'The apostrophe joins te + appelles; final -ent is not present here.', zh: "t’ = te 的省略；appelles 的 ll 讀 /l/，字尾 -es 不另發音。" }, words: [
    { word: 'Comment', usage: { en: 'Question word "how" — here used idiomatically to ask a name.', zh: '疑問詞「如何」，這裡用來詢問名字。' } },
    { word: "t'", usage: { en: 'Contraction of "te" (reflexive pronoun "yourself") before a vowel.', zh: '反身代詞「te」在母音前的省略形式。' } },
    { word: 'appelles', usage: { en: '"tu" form of the reflexive verb s\'appeler (to be called).', zh: '反身動詞 s\'appeler（被稱為）的 tu 變位。' } },
  ] },
  p2: { structure: { en: 'Depuis combien de temps + verb + tu?', zh: 'Depuis combien de temps + 動詞 + tu？（多久以來）' }, pronunciation: { en: '/də.pɥi kɔ̃.bjɛ̃ də tɑ̃ a.pʁɑ̃ ty lə fʁɑ̃.sɛ/', zh: '/də.pɥi kɔ̃.bjɛ̃ də tɑ̃ a.pʁɑ̃ ty lə fʁɑ̃.sɛ/' }, rule: { en: 'combien and temps have nasal vowels; the final -s in temps is silent.', zh: 'combien、temps 都是鼻母音；temps 的字尾 s 不發音。' }, words: [
    { word: 'Depuis', usage: { en: 'Preposition "since / for" — a duration that continues up to now.', zh: '介系詞「自從／已經」，表示持續到現在的時間。' } },
    { word: 'combien de temps', usage: { en: 'Fixed phrase "how much time / how long".', zh: '固定片語「多長時間」。' } },
    { word: 'apprends-tu', usage: { en: 'Inverted "tu" form of apprendre (to learn), used for a written/formal question.', zh: 'apprendre 的 tu 倒裝疑問形式，用於書面／正式問句。' } },
  ] },
  p3: { structure: { en: 'D’où + venir + tu? (inversion)', zh: 'D’où + venir + tu？（倒裝問句）' }, pronunciation: { en: '/du vjɛ̃ ty/', zh: '/du vjɛ̃ ty/' }, rule: { en: 'où loses its vowel before de; viens ends with nasal /jɛ̃/.', zh: 'de + où 省略為 d’où；viens 的 -ens 讀鼻母音 /jɛ̃/。' }, words: [
    { word: "D'où", usage: { en: '"de" + "où" = "from where".', zh: 'de + où 合併，意思是「從哪裡」。' } },
    { word: 'viens-tu', usage: { en: 'Inverted "tu" form of venir (to come).', zh: 'venir 的 tu 倒裝疑問形式。' } },
  ] },
  p4: { structure: { en: 'Quel(s) + être + possessive + plural noun', zh: 'Quels + être + 所有格 + 複數名詞' }, pronunciation: { en: '/kɛl sɔ̃ te lwa.ziʁ/', zh: '/kɛl sɔ̃ te lwa.ziʁ/' }, rule: { en: 'Final -s of quels is pronounced /l/; loisirs ends in a voiced /ʁ/.', zh: 'quels 的 l 要發音；loisirs 字尾 s 讀 /ʁ/ 前的 /ʁ/，不是英文 r。' }, words: [
    { word: 'Quels', usage: { en: 'Plural masculine "which/what", agreeing with loisirs.', zh: '陽性複數疑問形容詞，需與 loisirs 的陽性複數配合。' } },
    { word: 'tes', usage: { en: 'Plural possessive "your".', zh: '複數所有格「你的」。' } },
    { word: 'loisirs', usage: { en: 'Plural noun "hobbies / leisure activities".', zh: '複數名詞「興趣、休閒活動」。' } },
  ] },
  p5: { structure: { en: 'Où + habiter + tu? (inversion)', zh: 'Où + habiter + tu？（倒裝問句）' }, pronunciation: { en: '/u a.bit ty/', zh: '/u a.bit ty/' }, rule: { en: 'The h in habites is mute, so it begins with a vowel sound.', zh: 'habites 的 h 是啞音，開頭直接接母音 /a/。' }, words: [
    { word: 'Où', usage: { en: 'Question word "where".', zh: '疑問詞「哪裡」。' } },
    { word: 'habites-tu', usage: { en: 'Inverted "tu" form of habiter (to live).', zh: 'habiter 的 tu 倒裝疑問形式。' } },
  ] },
  p6: { structure: { en: 'Avoir + tu + adverb déjà + past participle', zh: 'avoir + tu + déjà + 過去分詞（複合過去式）' }, pronunciation: { en: '/a ty de.ʒa dɑ̃.se/', zh: '/a ty de.ʒa dɑ̃.se/' }, rule: { en: 'dansé ends in /e/; the written final -é is pronounced.', zh: 'dansé 的字尾 -é 要讀 /e/；dans 的 an 是鼻母音。' }, words: [
    { word: 'As-tu', usage: { en: 'Inverted "tu" form of avoir, the auxiliary for the passé composé.', zh: 'avoir 的 tu 倒裝形式，複合過去式的助動詞。' } },
    { word: 'déjà', usage: { en: 'Adverb "already / ever", placed between the auxiliary and the participle.', zh: '副詞「已經／曾經」，放在助動詞與過去分詞之間。' } },
    { word: 'dansé', usage: { en: 'Past participle of danser (to dance).', zh: 'danser（跳舞）的過去分詞。' } },
  ] },
  p7: { structure: { en: 'Comment + aller + tu? (inversion)', zh: 'Comment + aller + tu？（問近況）' }, pronunciation: { en: '/kɔ.mɑ̃ va ty/', zh: '/kɔ.mɑ̃ va ty/' }, rule: { en: 'comment has a nasal /ɑ̃/; tu keeps the rounded /y/ vowel.', zh: 'comment 的 en 讀鼻母音 /ɑ̃/；tu 讀圓唇 /y/，不是 /u/。' }, words: [
    { word: 'Comment', usage: { en: '"How" — asking about manner/state, here idiomatically about wellbeing.', zh: '疑問詞「如何」，這裡用來問近況。' } },
    { word: 'vas-tu', usage: { en: 'Inverted "tu" form of aller, used idiomatically to mean "to be doing".', zh: 'aller 的 tu 倒裝形式，這裡表示「過得如何」。' } },
  ] },
  p8: { structure: { en: 'Est-ce que + subject + pouvoir + infinitive?', zh: 'Est-ce que + 主詞 + pouvoir + 原形動詞？' }, pronunciation: { en: '/ɛs kə ʒə pø kɥi.zi.ne/', zh: '/ɛs kə ʒə pø kɥi.zi.ne/' }, rule: { en: 'est-ce que is the neutral question frame; peux is /pø/.', zh: 'est-ce que 是中性問句框架；peux 讀 /pø/，字尾 x 不發音。' }, words: [
    { word: 'Est-ce que', usage: { en: 'Neutral question marker placed at the start — no subject/verb inversion needed.', zh: '中性問句標記，放在句首，不需要主詞動詞倒裝。' } },
    { word: 'peux', usage: { en: '"je" form of pouvoir (can/may).', zh: 'pouvoir（可以）的 je 變位。' } },
    { word: 'cuisiner', usage: { en: 'Infinitive "to cook", following peux.', zh: '原形動詞「做菜」，接在 peux 後面。' } },
  ] },
  p9: { structure: { en: 'Et + stressed pronoun', zh: 'Et + 重讀人稱代詞' }, pronunciation: { en: '/e twa/', zh: '/e twa/' }, rule: { en: 'et is /e/, not the English “et”; toi has the glide /w/.', zh: 'et 讀 /e/；toi 中 oi 讀 /wa/。' }, words: [
    { word: 'Et', usage: { en: 'Conjunction "and".', zh: '連接詞「和／而」。' } },
    { word: 'toi', usage: { en: 'Stressed/disjunctive pronoun for "tu" — used alone or after a preposition/et.', zh: '重讀人稱代詞，單獨使用或接在 et／介系詞之後。' } },
  ] },
  p10: { structure: { en: 'Quand + auxiliary avoir + tu + past participle?', zh: 'Quand + avoir + tu + 過去分詞？' }, pronunciation: { en: '/kɑ̃ a ty vwa.ja.ʒe/', zh: '/kɑ̃ a ty vwa.ja.ʒe/' }, rule: { en: 'quand has nasal /ɑ̃/; voyagé ends in pronounced /e/.', zh: 'quand 的 an 讀鼻母音 /ɑ̃/；voyagé 的 -é 讀 /e/。' }, words: [
    { word: 'Quand', usage: { en: 'Question word "when".', zh: '疑問詞「何時」。' } },
    { word: 'as-tu voyagé', usage: { en: 'Passé composé, "tu" form of voyager (to travel).', zh: 'voyager（旅行）的複合過去式 tu 形式。' } },
  ] },
  p11: { structure: { en: 'Past participle used as a greeting', zh: '用過去分詞作問候語' }, pronunciation: { en: '/ɑ̃.ʃɑ̃.te/', zh: '/ɑ̃.ʃɑ̃.te/' }, rule: { en: 'The (e) marks feminine spelling only: both forms sound the same.', zh: '括號 e 只標示陰性拼寫；Enchanté 和 Enchantée 發音相同。' }, words: [
    { word: 'Enchanté(e)', usage: { en: 'Past participle of enchanter, fixed as a greeting meaning "delighted (to meet you)".', zh: 'enchanter 的過去分詞，固定用作問候語，意思是「（很高興認識你）」。' } },
  ] },
  p12: { structure: { en: 'Subject + aimer + definite article + noun?', zh: '主詞 + aimer + 定冠詞 + 名詞？' }, pronunciation: { en: '/ty ɛm la my.zik/', zh: '/ty ɛm la my.zik/' }, rule: { en: 'aimes is /ɛm/; music has /z/ between vowels.', zh: 'aimes 讀 /ɛm/，字尾 s 不發音；musique 的 s 在兩母音間讀 /z/。' }, words: [
    { word: 'aimes', usage: { en: '"tu" form of aimer (to like/love).', zh: 'aimer（喜歡／愛）的 tu 變位。' } },
    { word: 'la', usage: { en: 'Definite article used before a general/abstract noun like "music".', zh: '定冠詞，用在音樂等抽象名詞前，表示泛指。' } },
  ] },
  p13: { structure: { en: 'Qu’est-ce que + subject + verb?', zh: 'Qu’est-ce que + 主詞 + 動詞？（問「什麼」）' }, pronunciation: { en: '/kɛs kə ty fɛ/', zh: '/kɛs kə ty fɛ/' }, rule: { en: 'qu’est-ce que contracts in speech; fais is /fɛ/, final -s silent.', zh: 'qu’est-ce que 口語連成一組；fais 讀 /fɛ/，字尾 s 不發音。' }, words: [
    { word: "Qu'est-ce que", usage: { en: 'Full question form of "what" (qu\' elides before est).', zh: '「什麼」的完整問句形式，qu\' 在 est 前省略。' } },
    { word: 'fais', usage: { en: '"tu" form of faire (to do/make).', zh: 'faire（做）的 tu 變位。' } },
  ] },
  p14: { structure: { en: 'Qu’est-ce que + ça + vouloir dire?', zh: 'Qu’est-ce que + ça + vouloir dire？（是什麼意思）' }, pronunciation: { en: '/kɛs kə sa vø diʁ/', zh: '/kɛs kə sa vø diʁ/' }, rule: { en: 'veux is /vø/; French r is made at the back of the throat.', zh: 'veux 讀 /vø/；dire 的 r 是法語小舌音，不是英文 r。' }, words: [
    { word: 'ça', usage: { en: 'Informal demonstrative pronoun "that / it".', zh: '口語指示代詞，指「這個／那個」。' } },
    { word: 'veut dire', usage: { en: 'Idiom "veut dire" = "means" (literally "wants to say").', zh: '慣用語「veut dire」＝「意思是」（字面是「想說」）。' } },
  ] },
  p15: { structure: { en: 'Est-ce que + subject + parler + language?', zh: 'Est-ce que + 主詞 + parler + 語言？' }, pronunciation: { en: '/ɛs kə ty paʁl fʁɑ̃.sɛ/', zh: '/ɛs kə ty paʁl fʁɑ̃.sɛ/' }, rule: { en: 'français has nasal /ɑ̃/ then /sɛ/; final -s is silent.', zh: 'français 先讀鼻母音 /ɑ̃/ 再讀 /sɛ/；字尾 s 不發音。' }, words: [
    { word: 'parles', usage: { en: '"tu" form of parler (to speak).', zh: 'parler（說）的 tu 變位。' } },
    { word: 'français', usage: { en: 'Name of the language — no article is needed directly after parler.', zh: '語言名稱，parler 後面直接接，不加冠詞。' } },
  ] },
  p16: { structure: { en: 'Est-ce que + subject + jouer de + instrument?', zh: 'Est-ce que + 主詞 + jouer de + 樂器？' }, pronunciation: { en: '/ɛs kə ty ʒu dy pja.no/', zh: '/ɛs kə ty ʒu dy pja.no/' }, rule: { en: 'jouer de + instrument; du is /dy/, not /du/.', zh: '樂器前用 jouer de；du 讀 /dy/，不是 /du/。' }, words: [
    { word: 'joues', usage: { en: '"tu" form of jouer (to play).', zh: 'jouer（演奏／玩）的 tu 變位。' } },
    { word: 'du', usage: { en: 'Contraction of "de + le" — jouer takes "de" before instruments.', zh: 'de + le 的合併；jouer 接樂器時要用 de。' } },
  ] },
  p17: { structure: { en: 'Est-ce qu’ + il y a + noun + place?', zh: 'Est-ce qu’ + il y a + 名詞 + 地點？（有沒有）' }, pronunciation: { en: '/ɛs kil i a ɛ̃ ʁɛs.to.ʁɑ̃ i.si/', zh: '/ɛs kil i a ɛ̃ ʁɛs.to.ʁɑ̃ i.si/' }, rule: { en: 'que elides before il; un and restaurant contain nasal vowels.', zh: 'que 在 il 前省略成 qu’；un、restaurant 都含鼻母音。' }, words: [
    { word: 'il y a', usage: { en: 'Fixed expression "there is / there are" — never changes form.', zh: '固定用語「有」，不隨人稱或單複數變化。' } },
    { word: 'ici', usage: { en: 'Adverb "here".', zh: '副詞「這裡」。' } },
  ] },
  p18: { structure: { en: 'Pourquoi + verb + tu + object? (inversion)', zh: 'Pourquoi + 動詞 + tu + 受詞？（倒裝問句）' }, pronunciation: { en: '/puʁ.kwa a.pʁɑ̃ ty lə fʁɑ̃.sɛ/', zh: '/puʁ.kwa a.pʁɑ̃ ty lə fʁɑ̃.sɛ/' }, rule: { en: 'pourquoi ends in /kwa/; apprends ends in nasal /ɑ̃/.', zh: 'pourquoi 的 oi 讀 /wa/；apprends 的 en 讀鼻母音 /ɑ̃/。' }, words: [
    { word: 'Pourquoi', usage: { en: 'Question word "why".', zh: '疑問詞「為什麼」。' } },
    { word: 'apprends-tu', usage: { en: 'Inverted "tu" form of apprendre (to learn).', zh: 'apprendre 的 tu 倒裝形式。' } },
  ] },
  p19: { structure: { en: 'Imperative + polite phrase s’il te plaît', zh: '命令式 + 禮貌語 s’il te plaît' }, pronunciation: { en: '/ʁe.pɛt sil tə plɛ/', zh: '/ʁe.pɛt sil tə plɛ/' }, rule: { en: 's’il links smoothly; the weak e in te may be very light in fast speech.', zh: 's’il 要連著讀；語速快時 te 的弱 e 常很輕。' }, words: [
    { word: 'Répète', usage: { en: 'Imperative "tu" form of répéter (to repeat) — no subject pronoun in commands.', zh: 'répéter（重複）的命令式（tu 形式）；命令句不加主詞。' } },
    { word: "s'il te plaît", usage: { en: 'Informal "please", literally "if it pleases you".', zh: '非正式「請」，字面是「如果它讓你高興」。' } },
  ] },
  p20: { structure: { en: 'C’est + pour + definite article + noun', zh: 'C’est + pour + 定冠詞 + 名詞' }, pronunciation: { en: '/sɛ puʁ lə tʁa.vaj/', zh: '/sɛ puʁ lə tʁa.vaj/' }, rule: { en: 'travail ends in /aj/; written final -il does not sound like English l.', zh: 'travail 的 ail 讀 /aj/；字尾 il 不照英文 l 讀。' }, words: [
    { word: "C'est", usage: { en: 'Contraction of "ce" + "est" = "it is".', zh: 'ce + est 的合併，「這是」。' } },
    { word: 'pour', usage: { en: 'Preposition "for", introducing a reason or purpose.', zh: '介系詞「為了」，表原因或目的。' } },
  ] },
  p21: { structure: { en: 'Combien + ça + coûter?', zh: 'Combien + ça + coûter？（多少錢）' }, pronunciation: { en: '/kɔ̃.bjɛ̃ sa kut/', zh: '/kɔ̃.bjɛ̃ sa kut/' }, rule: { en: 'combien has two nasal vowels; coûte ends with a pronounced /t/.', zh: 'combien 有兩個鼻母音；coûte 的字尾 t 要發音。' }, words: [
    { word: 'Combien', usage: { en: 'Question word "how much / how many".', zh: '疑問詞「多少」。' } },
    { word: 'coûte', usage: { en: '"il/elle/ça" form of coûter (to cost).', zh: 'coûter（花費）的第三人稱單數變位。' } },
  ] },
  p22: { structure: { en: 'Je + ne + verb + pas (negation)', zh: 'Je + ne + 動詞 + pas（否定句）' }, pronunciation: { en: '/ʒə nə kɔ̃.pʁɑ̃ pa/', zh: '/ʒə nə kɔ̃.pʁɑ̃ pa/' }, rule: { en: 'In fast speech ne is often dropped, but keep it in careful TCF speech.', zh: '快語中 ne 常省略；TCF 正式口說建議保留。' }, words: [
    { word: 'ne...pas', usage: { en: 'Two-part negation that surrounds the conjugated verb.', zh: '「ne...pas」否定結構，包住變位後的動詞。' } },
    { word: 'comprends', usage: { en: '"je" form of comprendre (to understand).', zh: 'comprendre（理解）的 je 變位。' } },
  ] },
  p23: { structure: { en: 'Je + reflexive pronoun + appeler', zh: 'Je + 反身代詞 + appeler（自我介紹）' }, pronunciation: { en: '/ʒə ma.pɛl/', zh: '/ʒə ma.pɛl/' }, rule: { en: 'm’ is me before a vowel; appeller’s double l gives /l/.', zh: 'm’ 是 me 在母音前的省略；appelle 的 ll 讀 /l/。' }, words: [
    { word: "m'", usage: { en: 'Contraction of "me" (reflexive pronoun) before a vowel.', zh: '反身代詞「me」在母音前的省略。' } },
    { word: 'appelle', usage: { en: '"je" form of s\'appeler (to be called).', zh: 's\'appeler（被稱為）的 je 變位。' } },
  ] },
  p24: { structure: { en: 'Où + être + definite article + plural noun?', zh: 'Où + être + 定冠詞 + 複數名詞？' }, pronunciation: { en: '/u sɔ̃ le twa.lɛt/', zh: '/u sɔ̃ le twa.lɛt/' }, rule: { en: 'sont ends in nasal /ɔ̃/; toilettes has oi = /wa/.', zh: 'sont 的 on 讀鼻母音 /ɔ̃/；toilettes 的 oi 讀 /wa/。' }, words: [
    { word: 'sont', usage: { en: '"ils/elles" form of être, agreeing with plural toilettes.', zh: 'être 的複數變位，與複數名詞 toilettes 一致。' } },
    { word: 'les', usage: { en: 'Plural definite article "the".', zh: '複數定冠詞「這些／那些」。' } },
  ] },
  p25: { structure: { en: 'Peux-tu + object pronoun + infinitive?', zh: 'Peux-tu + 受詞代詞 + 原形動詞？（請求）' }, pronunciation: { en: '/pø ty me.de/', zh: '/pø ty me.de/' }, rule: { en: 'Hyphen marks inversion; peux is /pø/ and aider begins with /e/.', zh: '連字號標示倒裝；peux 讀 /pø/，aider 開頭讀 /e/。' }, words: [
    { word: 'Peux-tu', usage: { en: 'Inverted "tu" form of pouvoir, used for a polite request.', zh: 'pouvoir 的 tu 倒裝形式，用於禮貌請求。' } },
    { word: "m'aider", usage: { en: '"me" + infinitive aider — the object pronoun goes before the infinitive.', zh: 'me + 原形動詞 aider；受詞代詞放在原形動詞前面。' } },
  ] },
  p26: { structure: { en: 'Je suis + adjective + de + infinitive', zh: 'Je suis + 形容詞 + de + 原形動詞' }, pronunciation: { en: '/ʒə sɥi ʁa.vi də tə ʁɑ̃.kɔ̃.tʁe/', zh: '/ʒə sɥi ʁa.vi də tə ʁɑ̃.kɔ̃.tʁe/' }, rule: { en: 'The (e) is feminine spelling only; rencontrer has nasal /ɑ̃/.', zh: '括號 e 只改陰性拼寫；rencontrer 的 en 讀鼻母音 /ɑ̃/。' }, words: [
    { word: 'suis', usage: { en: '"je" form of être (to be).', zh: 'être（是）的 je 變位。' } },
    { word: 'de + infinitive', usage: { en: 'Structure linking an adjective (ravi) to the following verb.', zh: '「de + 原形動詞」用來連接形容詞（ravi）與後面的動詞。' } },
  ] },
  p27: { structure: { en: 'Formal imperative of excuser + moi', zh: 'excuser 的 vous 命令式 + moi（正式）' }, pronunciation: { en: '/ɛks.ky.ze mwa/', zh: '/ɛks.ky.ze mwa/' }, rule: { en: 'The final -z is pronounced /z/ before moi; use it with strangers.', zh: '字尾 z 在 moi 前讀 /z/；對陌生人或正式場合使用。' }, words: [
    { word: 'Excusez', usage: { en: '"vous" imperative form of excuser — a formal command.', zh: 'excuser 的 vous 命令式，屬於正式用法。' } },
    { word: 'moi', usage: { en: 'Stressed pronoun attached after the imperative verb.', zh: '附加在命令式動詞後的重讀代詞。' } },
  ] },
  p28: { structure: { en: 'Je + ne + savoir + pas (negation)', zh: 'Je + ne + savoir + pas（不知道）' }, pronunciation: { en: '/ʒə nə sɛ pa/', zh: '/ʒə nə sɛ pa/' }, rule: { en: 'sais is /sɛ/; both written final -s sounds are silent.', zh: 'sais 讀 /sɛ/；sais 和 pas 的字尾 s 都不發音。' }, words: [
    { word: 'sais', usage: { en: '"je" form of savoir, "to know" a fact or how to do something.', zh: 'savoir（知道）的 je 變位，指知道事實或會做某事。' } },
    { word: 'ne...pas', usage: { en: 'Standard negation structure around the verb.', zh: '包住動詞的標準否定結構。' } },
  ] },
  p29: { structure: { en: 'Quelle + noun + être + il? (inversion)', zh: 'Quelle + 名詞 + être + il？（倒裝問句）' }, pronunciation: { en: '/kɛ.lœʁ ɛ.til/', zh: '/kɛ.lœʁ ɛ.til/' }, rule: { en: 'heure begins with a mute h; est-il is linked as /ɛ.til/.', zh: 'heure 的 h 是啞音；est-il 要連讀成 /ɛ.til/。' }, words: [
    { word: 'Quelle', usage: { en: 'Feminine singular "which/what", agreeing with heure.', zh: '陰性單數疑問形容詞，與陰性名詞 heure 配合。' } },
    { word: 'est-il', usage: { en: 'Inverted "il" form of être, used in the impersonal time expression.', zh: 'être 的 il 倒裝形式，用於無人稱的時間表達。' } },
  ] },
  p30: { structure: { en: 'Imperative + plus + adverb + polite phrase', zh: '命令式 + plus + 副詞 + 禮貌語' }, pronunciation: { en: '/paʁl ply lɑ̃t.mɑ̃ sil tə plɛ/', zh: '/paʁl ply lɑ̃t.mɑ̃ sil tə plɛ/' }, rule: { en: 'plus is /ply/ before a consonant; lentement has two nasal vowels.', zh: 'plus 在子音前讀 /ply/；lentement 有兩個鼻母音。' }, words: [
    { word: 'Parle', usage: { en: 'Imperative "tu" form of parler (to speak).', zh: 'parler（說）的命令式（tu 形式）。' } },
    { word: 'plus + adverb', usage: { en: 'Comparative structure meaning "more ___ly".', zh: '「plus + 副詞」比較結構，表示「更……地」。' } },
  ] },
  'simple-1': { structure: { en: 'Comment + ça + aller?', zh: 'Comment + ça + aller？（問近況）' }, pronunciation: { en: '/kɔ.mɑ̃ sa va/', zh: '/kɔ.mɑ̃ sa va/' }, rule: { en: 'comment ends with nasal /ɑ̃/; ça is /sa/.', zh: 'comment 的 en 讀鼻母音 /ɑ̃/；ça 讀 /sa/。' }, words: [
    { word: 'ça', usage: { en: 'Informal pronoun standing for "it / things (in general)".', zh: '口語代詞，泛指「事情、狀況」。' } },
    { word: 'va', usage: { en: '"il/elle/ça" form of aller (to go), used idiomatically for wellbeing.', zh: 'aller 的第三人稱變位，這裡表示「過得如何」。' } },
  ] },
  'simple-2': { structure: { en: 'Ça + aller + adverb', zh: 'Ça + aller + 副詞（回答近況）' }, pronunciation: { en: '/sa va bjɛ̃/', zh: '/sa va bjɛ̃/' }, rule: { en: 'bien ends in the nasal vowel /jɛ̃/.', zh: 'bien 的 en 讀鼻母音 /jɛ̃/。' }, words: [
    { word: 'bien', usage: { en: 'Adverb "well", describing va.', zh: '副詞「好」，修飾 va。' } },
  ] },
  'simple-3': { structure: { en: 'Comment + subject + reflexive verb appeler', zh: 'Comment + 主詞 + 反身動詞 appeler' }, pronunciation: { en: '/kɔ.mɑ̃ ty ta.pɛl/', zh: '/kɔ.mɑ̃ ty ta.pɛl/' }, rule: { en: 't’ = te before a vowel; appelles ends /pɛl/.', zh: 't’ 是 te 在母音前的省略；appelles 結尾讀 /pɛl/。' }, words: [
    { word: "t'", usage: { en: 'Contraction of "te" (reflexive pronoun) before a vowel.', zh: '反身代詞「te」在母音前的省略。' } },
    { word: 'appelles', usage: { en: '"tu" form of s\'appeler (to be called).', zh: 's\'appeler 的 tu 變位。' } },
  ] },
  'simple-4': { structure: { en: 'Je + reflexive pronoun + appeler + name', zh: 'Je + 反身代詞 + appeler + 名字' }, pronunciation: { en: '/ʒə ma.pɛl …/', zh: '/ʒə ma.pɛl …/' }, rule: { en: 'm’ = me before a vowel; add your name after a short pause.', zh: 'm’ 是 me 在母音前的省略；停一下後接自己的名字。' }, words: [
    { word: "m'", usage: { en: 'Contraction of "me" before a vowel.', zh: '反身代詞「me」在母音前的省略。' } },
    { word: '___', usage: { en: 'Blank to fill in with your own name.', zh: '空格處填入你自己的名字。' } },
  ] },
  'simple-5': { structure: { en: 'Subject + venir + d’où?', zh: '主詞 + venir + d’où？（從哪裡來）' }, pronunciation: { en: '/ty vjɛ̃ du/', zh: '/ty vjɛ̃ du/' }, rule: { en: 'viens ends with nasal /jɛ̃/; d’où is pronounced /du/.', zh: 'viens 結尾讀鼻母音 /jɛ̃/；d’où 讀 /du/。' }, words: [
    { word: 'viens', usage: { en: '"tu" form of venir (to come).', zh: 'venir（來）的 tu 變位。' } },
    { word: "d'où", usage: { en: '"From where" — colloquial word order with où at the end.', zh: '口語語序「從哪裡」，où 放在句尾。' } },
  ] },
  'simple-6': { structure: { en: 'Je + venir + de + place', zh: 'Je + venir + de + 地點' }, pronunciation: { en: '/ʒə vjɛ̃ də ɔ̃ kɔ̃ŋ/', zh: '/ʒə vjɛ̃ də ɔ̃ kɔ̃ŋ/' }, rule: { en: 'viens has nasal /jɛ̃/; Hong Kong is commonly approximated with nasal vowels in French.', zh: 'viens 的 en 讀 /jɛ̃/；Hong Kong 在法語中常近似讀作鼻母音。' }, words: [
    { word: 'viens de', usage: { en: '"venir de" + place = "to come from".', zh: 'venir de + 地點＝「來自」。' } },
    { word: 'de', usage: { en: 'Preposition before place names — no article is used for most city names.', zh: '地名前的介系詞；大部分城市名前不加冠詞。' } },
  ] },
  'simple-7': { structure: { en: 'Il est + quelle heure?', zh: 'Il est + quelle heure？（口語問時間）' }, pronunciation: { en: '/il ɛ kɛ.lœʁ/', zh: '/il ɛ kɛ.lœʁ/' }, rule: { en: 'heure begins with a mute h; use the uvular French r.', zh: 'heure 的 h 是啞音；r 用法語小舌音。' }, words: [
    { word: 'Il est', usage: { en: 'Impersonal "it is", used for telling time.', zh: '無人稱主詞「它是」，用於表示時間。' } },
    { word: 'quelle heure', usage: { en: '"What time" — quelle agrees with the feminine noun heure.', zh: '「幾點」，quelle 與陰性名詞 heure 配合。' } },
  ] },
  'simple-8': { structure: { en: 'Il est + number + heure(s)', zh: 'Il est + 數字 + heure(s)' }, pronunciation: { en: '/il ɛ tʁwa.z‿œʁ/', zh: '/il ɛ tʁwa.z‿œʁ/' }, rule: { en: 'Make the liaison in trois heures: /z‿œʁ/.', zh: 'trois heures 要連音：/z‿œʁ/。' }, words: [
    { word: 'heures', usage: { en: 'Plural of "heure", used after numbers 2 and above.', zh: 'heure 的複數形式，用於 2 點以上的時刻。' } },
  ] },
  'simple-9': { structure: { en: 'Je suis + un peu + adjective', zh: 'Je suis + un peu + 形容詞' }, pronunciation: { en: '/ʒə sɥi ɛ̃ pø fa.ti.ɡe/', zh: '/ʒə sɥi ɛ̃ pø fa.ti.ɡe/' }, rule: { en: 'un is nasal /ɛ̃/; fatigué(e) has the same pronunciation for both genders.', zh: 'un 讀鼻母音 /ɛ̃/；fatigué(e) 的陰陽性發音相同。' }, words: [
    { word: 'un peu', usage: { en: 'Adverbial phrase "a little", softening the adjective.', zh: '副詞片語「一點點」，用來緩和形容詞語氣。' } },
    { word: 'fatigué(e)', usage: { en: 'Adjective "tired" — add (e) when the speaker is feminine.', zh: '形容詞「累的」，女性說話者要加 e。' } },
  ] },
  'simple-10': { structure: { en: 'À + time expression', zh: 'À + 時間表達（道別）' }, pronunciation: { en: '/a də.mɛ̃/', zh: '/a də.mɛ̃/' }, rule: { en: 'demain ends in nasal /mɛ̃/.', zh: 'demain 的 ain 讀鼻母音 /mɛ̃/。' }, words: [
    { word: 'À', usage: { en: 'Preposition used in farewells, meaning "until".', zh: '介系詞，用於道別語，表示「直到」。' } },
    { word: 'demain', usage: { en: 'Adverb "tomorrow".', zh: '副詞「明天」。' } },
  ] },
  'simple-11': { structure: { en: 'Fixed farewell expression', zh: '固定道別語' }, pronunciation: { en: '/o ʁə.vwaʁ/', zh: '/o ʁə.vwaʁ/' }, rule: { en: 'au is /o/ and oi is /wa/.', zh: 'au 讀 /o/；oi 讀 /wa/。' }, words: [
    { word: 'Au', usage: { en: 'Contraction of "à + le".', zh: 'à + le 的合併。' } },
    { word: 'revoir', usage: { en: 'Infinitive "to see again", fixed as a farewell expression.', zh: '原形動詞「再見到」，固定用作道別語。' } },
  ] },
};

export interface SyllablePair {
  fr: string;
  ipa: string;
}

/**
 * Per-word (or per-liaison-group, where two words are pronounced as one
 * linked unit) breakdown pairing each spoken chunk with its IPA, for the
 * clickable pronunciation buttons. Keyed by phrase id.
 */
export const phraseSyllables: Record<string, SyllablePair[]> = {
  p1: [{ fr: 'Comment', ipa: 'kɔ.mɑ̃' }, { fr: 'tu', ipa: 'ty' }, { fr: "t'appelles", ipa: 'ta.pɛl' }],
  p2: [{ fr: 'Depuis', ipa: 'də.pɥi' }, { fr: 'combien', ipa: 'kɔ̃.bjɛ̃' }, { fr: 'de', ipa: 'də' }, { fr: 'temps', ipa: 'tɑ̃' }, { fr: 'apprends-tu', ipa: 'a.pʁɑ̃ ty' }, { fr: 'le', ipa: 'lə' }, { fr: 'français', ipa: 'fʁɑ̃.sɛ' }],
  p3: [{ fr: "D'où", ipa: 'du' }, { fr: 'viens-tu', ipa: 'vjɛ̃ ty' }],
  p4: [{ fr: 'Quels', ipa: 'kɛl' }, { fr: 'sont', ipa: 'sɔ̃' }, { fr: 'tes', ipa: 'te' }, { fr: 'loisirs', ipa: 'lwa.ziʁ' }],
  p5: [{ fr: 'Où', ipa: 'u' }, { fr: 'habites-tu', ipa: 'a.bit ty' }],
  p6: [{ fr: 'As-tu', ipa: 'a ty' }, { fr: 'déjà', ipa: 'de.ʒa' }, { fr: 'dansé', ipa: 'dɑ̃.se' }],
  p7: [{ fr: 'Comment', ipa: 'kɔ.mɑ̃' }, { fr: 'vas-tu', ipa: 'va ty' }],
  p8: [{ fr: 'Est-ce', ipa: 'ɛs' }, { fr: 'que', ipa: 'kə' }, { fr: 'je', ipa: 'ʒə' }, { fr: 'peux', ipa: 'pø' }, { fr: 'cuisiner', ipa: 'kɥi.zi.ne' }],
  p9: [{ fr: 'Et', ipa: 'e' }, { fr: 'toi', ipa: 'twa' }],
  p10: [{ fr: 'Quand', ipa: 'kɑ̃' }, { fr: 'as-tu', ipa: 'a ty' }, { fr: 'voyagé', ipa: 'vwa.ja.ʒe' }],
  p11: [{ fr: 'Enchanté(e)', ipa: 'ɑ̃.ʃɑ̃.te' }],
  p12: [{ fr: 'Tu', ipa: 'ty' }, { fr: 'aimes', ipa: 'ɛm' }, { fr: 'la', ipa: 'la' }, { fr: 'musique', ipa: 'my.zik' }],
  p13: [{ fr: "Qu'est-ce", ipa: 'kɛs' }, { fr: 'que', ipa: 'kə' }, { fr: 'tu', ipa: 'ty' }, { fr: 'fais', ipa: 'fɛ' }],
  p14: [{ fr: "Qu'est-ce", ipa: 'kɛs' }, { fr: 'que', ipa: 'kə' }, { fr: 'ça', ipa: 'sa' }, { fr: 'veut', ipa: 'vø' }, { fr: 'dire', ipa: 'diʁ' }],
  p15: [{ fr: 'Est-ce', ipa: 'ɛs' }, { fr: 'que', ipa: 'kə' }, { fr: 'tu', ipa: 'ty' }, { fr: 'parles', ipa: 'paʁl' }, { fr: 'français', ipa: 'fʁɑ̃.sɛ' }],
  p16: [{ fr: 'Est-ce', ipa: 'ɛs' }, { fr: 'que', ipa: 'kə' }, { fr: 'tu', ipa: 'ty' }, { fr: 'joues', ipa: 'ʒu' }, { fr: 'du', ipa: 'dy' }, { fr: 'piano', ipa: 'pja.no' }],
  p17: [{ fr: 'Est-ce', ipa: 'ɛs' }, { fr: "qu'il", ipa: 'kil' }, { fr: 'y', ipa: 'i' }, { fr: 'a', ipa: 'a' }, { fr: 'un', ipa: 'ɛ̃' }, { fr: 'restaurant', ipa: 'ʁɛs.to.ʁɑ̃' }, { fr: 'ici', ipa: 'i.si' }],
  p18: [{ fr: 'Pourquoi', ipa: 'puʁ.kwa' }, { fr: 'apprends-tu', ipa: 'a.pʁɑ̃ ty' }, { fr: 'le', ipa: 'lə' }, { fr: 'français', ipa: 'fʁɑ̃.sɛ' }],
  p19: [{ fr: 'Répète', ipa: 'ʁe.pɛt' }, { fr: "s'il", ipa: 'sil' }, { fr: 'te', ipa: 'tə' }, { fr: 'plaît', ipa: 'plɛ' }],
  p20: [{ fr: "C'est", ipa: 'sɛ' }, { fr: 'pour', ipa: 'puʁ' }, { fr: 'le', ipa: 'lə' }, { fr: 'travail', ipa: 'tʁa.vaj' }],
  p21: [{ fr: 'Combien', ipa: 'kɔ̃.bjɛ̃' }, { fr: 'ça', ipa: 'sa' }, { fr: 'coûte', ipa: 'kut' }],
  p22: [{ fr: 'Je', ipa: 'ʒə' }, { fr: 'ne', ipa: 'nə' }, { fr: 'comprends', ipa: 'kɔ̃.pʁɑ̃' }, { fr: 'pas', ipa: 'pa' }],
  p23: [{ fr: 'Je', ipa: 'ʒə' }, { fr: "m'appelle", ipa: 'ma.pɛl' }],
  p24: [{ fr: 'Où', ipa: 'u' }, { fr: 'sont', ipa: 'sɔ̃' }, { fr: 'les', ipa: 'le' }, { fr: 'toilettes', ipa: 'twa.lɛt' }],
  p25: [{ fr: 'Peux-tu', ipa: 'pø ty' }, { fr: "m'aider", ipa: 'me.de' }],
  p26: [{ fr: 'Je', ipa: 'ʒə' }, { fr: 'suis', ipa: 'sɥi' }, { fr: 'ravi(e)', ipa: 'ʁa.vi' }, { fr: 'de', ipa: 'də' }, { fr: 'te', ipa: 'tə' }, { fr: 'rencontrer', ipa: 'ʁɑ̃.kɔ̃.tʁe' }],
  p27: [{ fr: 'Excusez-moi', ipa: 'ɛks.ky.ze mwa' }],
  p28: [{ fr: 'Je', ipa: 'ʒə' }, { fr: 'ne', ipa: 'nə' }, { fr: 'sais', ipa: 'sɛ' }, { fr: 'pas', ipa: 'pa' }],
  p29: [{ fr: 'Quelle heure', ipa: 'kɛ.lœʁ' }, { fr: 'est-il', ipa: 'ɛ.til' }],
  p30: [{ fr: 'Parle', ipa: 'paʁl' }, { fr: 'plus', ipa: 'ply' }, { fr: 'lentement', ipa: 'lɑ̃t.mɑ̃' }, { fr: "s'il", ipa: 'sil' }, { fr: 'te', ipa: 'tə' }, { fr: 'plaît', ipa: 'plɛ' }],
  'simple-1': [{ fr: 'Comment', ipa: 'kɔ.mɑ̃' }, { fr: 'ça', ipa: 'sa' }, { fr: 'va', ipa: 'va' }],
  'simple-2': [{ fr: 'Ça', ipa: 'sa' }, { fr: 'va', ipa: 'va' }, { fr: 'bien', ipa: 'bjɛ̃' }],
  'simple-3': [{ fr: 'Comment', ipa: 'kɔ.mɑ̃' }, { fr: 'tu', ipa: 'ty' }, { fr: "t'appelles", ipa: 'ta.pɛl' }],
  'simple-4': [{ fr: 'Je', ipa: 'ʒə' }, { fr: "m'appelle", ipa: 'ma.pɛl' }, { fr: '___', ipa: '…' }],
  'simple-5': [{ fr: 'Tu', ipa: 'ty' }, { fr: 'viens', ipa: 'vjɛ̃' }, { fr: "d'où", ipa: 'du' }],
  'simple-6': [{ fr: 'Je', ipa: 'ʒə' }, { fr: 'viens', ipa: 'vjɛ̃' }, { fr: 'de', ipa: 'də' }, { fr: 'Hong', ipa: 'ɔ̃' }, { fr: 'Kong', ipa: 'kɔ̃ŋ' }],
  'simple-7': [{ fr: 'Il', ipa: 'il' }, { fr: 'est', ipa: 'ɛ' }, { fr: 'quelle heure', ipa: 'kɛ.lœʁ' }],
  'simple-8': [{ fr: 'Il', ipa: 'il' }, { fr: 'est', ipa: 'ɛ' }, { fr: 'trois heures', ipa: 'tʁwa.z‿œʁ' }],
  'simple-9': [{ fr: 'Je', ipa: 'ʒə' }, { fr: 'suis', ipa: 'sɥi' }, { fr: 'un', ipa: 'ɛ̃' }, { fr: 'peu', ipa: 'pø' }, { fr: 'fatigué(e)', ipa: 'fa.ti.ɡe' }],
  'simple-10': [{ fr: 'À', ipa: 'a' }, { fr: 'demain', ipa: 'də.mɛ̃' }],
  'simple-11': [{ fr: 'Au', ipa: 'o' }, { fr: 'revoir', ipa: 'ʁə.vwaʁ' }],
};

export const essentialPhrases: Phrase[] = [
  {
    id: 'p1',
    fr: "Comment tu t'appelles ?",
    meaning: { en: 'What is your name?', zh: '你叫什麼名字？' },
    variants: [
      { fr: 'Il s\'appelle comment ?', meaning: { en: "What's his name?", zh: '他叫什麼名字？' } },
      { fr: 'Vous vous appelez comment ?', meaning: { en: 'What is your name? (formal)', zh: '您叫什麼名字？（正式）' } },
      { fr: 'Comment s\'appelle ta sœur ?', meaning: { en: "What's your sister's name?", zh: '你姊妹叫什麼名字？' } },
    ],
  },
  {
    id: 'p2',
    fr: 'Depuis combien de temps apprends-tu le français ?',
    meaning: { en: 'How long have you been learning French?', zh: '你學習法文多久了？' },
    variants: [
      { fr: 'Depuis combien de temps habites-tu ici ?', meaning: { en: 'How long have you lived here?', zh: '你住在這裡多久了？' } },
      { fr: 'Depuis combien de temps travailles-tu dans cette entreprise ?', meaning: { en: 'How long have you worked at this company?', zh: '你在這家公司工作多久了？' } },
      { fr: 'Depuis combien de temps joues-tu du piano ?', meaning: { en: 'How long have you played piano?', zh: '你彈鋼琴多久了？' } },
    ],
  },
  {
    id: 'p3',
    fr: "D'où viens-tu ?",
    meaning: { en: 'Where are you from?', zh: '你是從哪裡來的？' },
    variants: [
      { fr: "D'où vient ce cadeau ?", meaning: { en: 'Where does this gift come from?', zh: '這份禮物是從哪裡來的？' } },
      { fr: "D'où viennent-ils ?", meaning: { en: 'Where do they come from?', zh: '他們是從哪裡來的？' } },
      { fr: "D'où arrivez-vous ?", meaning: { en: 'Where are you arriving from? (formal)', zh: '您從哪裡來？（正式）' } },
    ],
  },
  {
    id: 'p4',
    fr: 'Quels sont tes loisirs ?',
    meaning: { en: 'What are your hobbies?', zh: '你的興趣是什麼？' },
    variants: [
      { fr: 'Quels sont tes projets ?', meaning: { en: 'What are your plans?', zh: '你的計畫是什麼？' } },
      { fr: 'Quelles sont tes qualités ?', meaning: { en: 'What are your strengths?', zh: '你的優點是什麼？' } },
      { fr: 'Quels sont tes plats préférés ?', meaning: { en: 'What are your favorite dishes?', zh: '你最喜歡的菜是什麼？' } },
    ],
  },
  {
    id: 'p5',
    fr: 'Où habites-tu ?',
    meaning: { en: 'Where do you live?', zh: '你住在哪裡？' },
    variants: [
      { fr: 'Où travailles-tu ?', meaning: { en: 'Where do you work?', zh: '你在哪裡工作？' } },
      { fr: 'Où vas-tu ce soir ?', meaning: { en: 'Where are you going tonight?', zh: '你今晚要去哪裡？' } },
      { fr: 'Où étudies-tu le français ?', meaning: { en: 'Where do you study French?', zh: '你在哪裡學法文？' } },
    ],
  },
  {
    id: 'p6',
    fr: 'As-tu déjà dansé ?',
    meaning: { en: 'Have you ever danced?', zh: '你做過跳舞嗎？' },
    variants: [
      { fr: 'As-tu déjà voyagé en France ?', meaning: { en: 'Have you already traveled to France?', zh: '你去過法國旅行嗎？' } },
      { fr: 'As-tu déjà mangé des escargots ?', meaning: { en: 'Have you already eaten snails?', zh: '你吃過蝸牛嗎？' } },
      { fr: 'As-tu déjà vu ce film ?', meaning: { en: 'Have you already seen this movie?', zh: '你看過這部電影嗎？' } },
    ],
  },
  {
    id: 'p7',
    fr: 'Comment vas-tu ?',
    meaning: { en: 'How are you?', zh: '你好嗎？' },
    variants: [
      { fr: 'Comment te sens-tu aujourd\'hui ?', meaning: { en: 'How do you feel today?', zh: '你今天感覺怎麼樣？' } },
      { fr: 'Comment se passe ta journée ?', meaning: { en: "How's your day going?", zh: '你今天過得怎麼樣？' } },
      { fr: 'Comment allez-vous ?', meaning: { en: 'How are you? (formal)', zh: '您好嗎？（正式）' } },
    ],
  },
  {
    id: 'p8',
    fr: 'Est-ce que je peux cuisiner ?',
    meaning: { en: 'May I cook?', zh: '我可以做料理嗎？' },
    variants: [
      { fr: 'Est-ce que je peux entrer ?', meaning: { en: 'May I come in?', zh: '我可以進來嗎？' } },
      { fr: 'Est-ce que je peux essayer ?', meaning: { en: 'May I try?', zh: '我可以試試看嗎？' } },
      { fr: 'Est-ce que je peux poser une question ?', meaning: { en: 'May I ask a question?', zh: '我可以問一個問題嗎？' } },
    ],
  },
  {
    id: 'p9',
    fr: 'Et toi ?',
    meaning: { en: 'And you?', zh: '你呢？' },
    variants: [
      { fr: 'Et vous ?', meaning: { en: 'And you? (formal)', zh: '您呢？（正式）' } },
      { fr: 'Et lui ?', meaning: { en: 'And him?', zh: '那他呢？' } },
      { fr: 'Et les autres ?', meaning: { en: 'And the others?', zh: '那其他人呢？' } },
    ],
  },
  {
    id: 'p10',
    fr: 'Quand as-tu voyagé ?',
    meaning: { en: 'When did you travel?', zh: '你什麼時候做了旅行？' },
    variants: [
      { fr: 'Quand as-tu commencé le français ?', meaning: { en: 'When did you start French?', zh: '你什麼時候開始學法文的？' } },
      { fr: 'Quand as-tu déménagé ?', meaning: { en: 'When did you move (house)?', zh: '你什麼時候搬家的？' } },
      { fr: 'Quand avez-vous terminé le projet ?', meaning: { en: 'When did you finish the project? (formal)', zh: '您什麼時候完成這個專案的？（正式）' } },
    ],
  },
  {
    id: 'p11',
    fr: 'Enchanté(e) !',
    meaning: { en: 'Nice to meet you.', zh: '初次見面。' },
    variants: [
      { fr: 'Ravi(e) de te rencontrer !', meaning: { en: 'Delighted to meet you!', zh: '很高興認識你！' } },
      { fr: "C'est un plaisir de vous rencontrer.", meaning: { en: "It's a pleasure to meet you. (formal)", zh: '很榮幸認識您。（正式）' } },
      { fr: 'Content(e) de te revoir !', meaning: { en: 'Happy to see you again!', zh: '很高興再見到你！' } },
    ],
  },
  {
    id: 'p12',
    fr: 'Tu aimes la musique ?',
    meaning: { en: 'Do you like music?', zh: '你喜歡音樂嗎？' },
    variants: [
      { fr: 'Tu aimes le sport ?', meaning: { en: 'Do you like sports?', zh: '你喜歡運動嗎？' } },
      { fr: 'Tu aimes voyager ?', meaning: { en: 'Do you like traveling?', zh: '你喜歡旅行嗎？' } },
      { fr: 'Tu aimes la cuisine française ?', meaning: { en: 'Do you like French cuisine?', zh: '你喜歡法國菜嗎？' } },
    ],
  },
  {
    id: 'p13',
    fr: "Qu'est-ce que tu fais ?",
    meaning: { en: 'What are you doing?', zh: '你在做什麼？' },
    variants: [
      { fr: "Qu'est-ce que tu manges ?", meaning: { en: 'What are you eating?', zh: '你在吃什麼？' } },
      { fr: "Qu'est-ce que tu penses de ça ?", meaning: { en: 'What do you think about that?', zh: '你覺得那個怎麼樣？' } },
      { fr: "Qu'est-ce que tu étudies ?", meaning: { en: 'What are you studying?', zh: '你在學什麼？' } },
    ],
  },
  {
    id: 'p14',
    fr: "Qu'est-ce que ça veut dire ?",
    meaning: { en: 'What does this mean?', zh: '這個是什麼意思？' },
    variants: [
      { fr: 'Qu\'est-ce que ce mot signifie ?', meaning: { en: 'What does this word mean?', zh: '這個字是什麼意思？' } },
      { fr: "Comment ça s'écrit ?", meaning: { en: 'How is it spelled?', zh: '這個怎麼寫？' } },
      { fr: 'Comment on dit ça en français ?', meaning: { en: 'How do you say that in French?', zh: '那個用法文怎麼說？' } },
    ],
  },
  {
    id: 'p15',
    fr: 'Est-ce que tu parles français ?',
    meaning: { en: 'Can you speak French?', zh: '你會說法語嗎？' },
    variants: [
      { fr: "Est-ce que tu comprends l'anglais ?", meaning: { en: 'Do you understand English?', zh: '你懂英文嗎？' } },
      { fr: 'Est-ce que tu écris bien le chinois ?', meaning: { en: 'Do you write Chinese well?', zh: '你中文寫得好嗎？' } },
      { fr: 'Est-ce que tu connais cette chanson ?', meaning: { en: 'Do you know this song?', zh: '你知道這首歌嗎？' } },
    ],
  },
  {
    id: 'p16',
    fr: 'Est-ce que tu joues du piano ?',
    meaning: { en: 'Can you play the piano?', zh: '你會彈鋼琴嗎？' },
    variants: [
      { fr: 'Est-ce que tu joues de la guitare ?', meaning: { en: 'Do you play guitar?', zh: '你會彈吉他嗎？' } },
      { fr: 'Est-ce que tu fais du sport ?', meaning: { en: 'Do you do sports?', zh: '你有在運動嗎？' } },
      { fr: 'Est-ce que tu joues au tennis ?', meaning: { en: 'Do you play tennis?', zh: '你會打網球嗎？' } },
    ],
  },
  {
    id: 'p17',
    fr: "Est-ce qu'il y a un restaurant ici ?",
    meaning: { en: 'Is there a restaurant here?', zh: '這裡有餐廳嗎？' },
    variants: [
      { fr: "Est-ce qu'il y a une pharmacie près d'ici ?", meaning: { en: 'Is there a pharmacy nearby?', zh: '這附近有藥局嗎？' } },
      { fr: "Est-ce qu'il y a des toilettes dans ce café ?", meaning: { en: 'Are there restrooms in this café?', zh: '這間咖啡館裡有廁所嗎？' } },
      { fr: "Est-ce qu'il y a un problème ?", meaning: { en: 'Is there a problem?', zh: '有什麼問題嗎？' } },
    ],
  },
  {
    id: 'p18',
    fr: 'Pourquoi apprends-tu le français ?',
    meaning: { en: 'Why are you learning French?', zh: '你為什麼學習法文？' },
    variants: [
      { fr: 'Pourquoi choisis-tu ce métier ?', meaning: { en: 'Why do you choose this profession?', zh: '你為什麼選擇這個職業？' } },
      { fr: 'Pourquoi aimes-tu ce livre ?', meaning: { en: 'Why do you like this book?', zh: '你為什麼喜歡這本書？' } },
      { fr: 'Pourquoi pars-tu si tôt ?', meaning: { en: 'Why are you leaving so early?', zh: '你為什麼這麼早離開？' } },
    ],
  },
  {
    id: 'p19',
    fr: "Répète, s'il te plaît.",
    meaning: { en: 'Please say it again.', zh: '請再說一次。' },
    variants: [
      { fr: "Parle plus fort, s'il te plaît.", meaning: { en: 'Speak louder, please.', zh: '請說大聲一點。' } },
      { fr: "Écris ton nom, s'il te plaît.", meaning: { en: 'Write your name, please.', zh: '請寫下你的名字。' } },
      { fr: "Attends une minute, s'il te plaît.", meaning: { en: 'Wait a minute, please.', zh: '請等一下。' } },
    ],
  },
  {
    id: 'p20',
    fr: "C'est pour le travail.",
    meaning: { en: "It's because of work.", zh: '因為工作的關係。' },
    variants: [
      { fr: "C'est pour mon anniversaire.", meaning: { en: "It's for my birthday.", zh: '這是為了我的生日。' } },
      { fr: "C'est pour les études.", meaning: { en: "It's for my studies.", zh: '這是為了學業。' } },
      { fr: "C'est pour ma famille.", meaning: { en: "It's for my family.", zh: '這是為了我的家人。' } },
    ],
  },
  {
    id: 'p21',
    fr: 'Combien ça coûte ?',
    meaning: { en: 'How much is this?', zh: '這個多少錢？' },
    variants: [
      { fr: 'Combien ça pèse ?', meaning: { en: 'How much does it weigh?', zh: '這個重多少？' } },
      { fr: 'Combien de temps ça prend ?', meaning: { en: 'How much time does it take?', zh: '這個要花多少時間？' } },
      { fr: "C'est combien, le billet ?", meaning: { en: 'How much is the ticket?', zh: '票多少錢？' } },
    ],
  },
  {
    id: 'p22',
    fr: 'Je ne comprends pas.',
    meaning: { en: "I don't understand.", zh: '我不懂。' },
    variants: [
      { fr: "Je n'entends pas bien.", meaning: { en: "I don't hear well.", zh: '我聽不清楚。' } },
      { fr: 'Je ne parle pas très bien français.', meaning: { en: "I don't speak French very well.", zh: '我法文說得不太好。' } },
      { fr: 'Je ne trouve pas mes clés.', meaning: { en: "I can't find my keys.", zh: '我找不到我的鑰匙。' } },
    ],
  },
  {
    id: 'p23',
    fr: "Je m'appelle...",
    meaning: { en: 'My name is...', zh: '我叫……' },
    variants: [
      { fr: 'Je m\'appelle Julie, et voici mon frère.', meaning: { en: 'My name is Julie, and this is my brother.', zh: '我叫茱莉，這是我的哥哥/弟弟。' } },
      { fr: 'Elle s\'appelle comment, ta collègue ?', meaning: { en: "What's your colleague's name?", zh: '你的同事叫什麼名字？' } },
      { fr: 'Ils s\'appellent Paul et Marie.', meaning: { en: 'Their names are Paul and Marie.', zh: '他們叫保羅和瑪麗。' } },
    ],
  },
  {
    id: 'p24',
    fr: 'Où sont les toilettes ?',
    meaning: { en: 'Where is the bathroom?', zh: '廁所在哪裡？' },
    variants: [
      { fr: 'Où sont mes clés ?', meaning: { en: 'Where are my keys?', zh: '我的鑰匙在哪裡？' } },
      { fr: 'Où est la gare ?', meaning: { en: 'Where is the train station?', zh: '火車站在哪裡？' } },
      { fr: 'Où est la sortie ?', meaning: { en: 'Where is the exit?', zh: '出口在哪裡？' } },
    ],
  },
  {
    id: 'p25',
    fr: "Peux-tu m'aider ?",
    meaning: { en: 'Can you help me?', zh: '你可以幫我嗎？' },
    variants: [
      { fr: 'Peux-tu me passer le sel ?', meaning: { en: 'Can you pass me the salt?', zh: '你可以把鹽遞給我嗎？' } },
      { fr: "Peux-tu m'expliquer ça ?", meaning: { en: 'Can you explain that to me?', zh: '你可以跟我解釋一下嗎？' } },
      { fr: "Pouvez-vous m'accompagner ?", meaning: { en: 'Can you accompany me? (formal)', zh: '您可以陪我去嗎？（正式）' } },
    ],
  },
  {
    id: 'p26',
    fr: 'Je suis ravi(e) de te rencontrer.',
    meaning: { en: "I'm happy to meet you.", zh: '我很高興認識你。' },
    variants: [
      { fr: 'Je suis content(e) de te voir.', meaning: { en: "I'm happy to see you.", zh: '我很高興見到你。' } },
      { fr: "Je suis désolé(e) d'être en retard.", meaning: { en: "I'm sorry for being late.", zh: '我很抱歉遲到了。' } },
      { fr: 'Je suis fatigué(e) de travailler.', meaning: { en: "I'm tired of working.", zh: '我工作累了。' } },
    ],
  },
  {
    id: 'p27',
    fr: 'Excusez-moi.',
    meaning: { en: 'Sorry / Excuse me.', zh: '對不起。' },
    variants: [
      { fr: 'Pardon, madame.', meaning: { en: 'Excuse me, madam.', zh: '對不起，女士。' } },
      { fr: 'Je suis désolé(e).', meaning: { en: "I'm sorry.", zh: '我很抱歉。' } },
      { fr: "Ce n'est pas grave.", meaning: { en: "It's not a big deal.", zh: '沒關係。' } },
    ],
  },
  {
    id: 'p28',
    fr: 'Je ne sais pas.',
    meaning: { en: "I don't know.", zh: '我不知道。' },
    variants: [
      { fr: 'Je ne sais pas pourquoi.', meaning: { en: "I don't know why.", zh: '我不知道為什麼。' } },
      { fr: 'Je ne sais pas où il est.', meaning: { en: "I don't know where he is.", zh: '我不知道他在哪裡。' } },
      { fr: 'Il ne sait pas nager.', meaning: { en: "He doesn't know how to swim.", zh: '他不會游泳。' } },
    ],
  },
  {
    id: 'p29',
    fr: 'Quelle heure est-il ?',
    meaning: { en: 'What time is it?', zh: '現在幾點？' },
    variants: [
      { fr: 'Quel jour sommes-nous ?', meaning: { en: 'What day is it?', zh: '今天星期幾？' } },
      { fr: "Quelle est la date aujourd'hui ?", meaning: { en: "What's the date today?", zh: '今天是幾號？' } },
      { fr: 'Quel temps fait-il ?', meaning: { en: "What's the weather like?", zh: '天氣怎麼樣？' } },
    ],
  },
  {
    id: 'p30',
    fr: "Parle plus lentement, s'il te plaît.",
    meaning: { en: 'Please speak more slowly, thank you.', zh: '慢慢說，謝謝。' },
    variants: [
      { fr: "Marche plus vite, s'il te plaît.", meaning: { en: 'Walk faster, please.', zh: '請走快一點。' } },
      { fr: "Explique plus clairement, s'il te plaît.", meaning: { en: 'Explain more clearly, please.', zh: '請說明清楚一點。' } },
      { fr: "Conduis plus prudemment, s'il te plaît.", meaning: { en: 'Drive more carefully, please.', zh: '請開車小心一點。' } },
    ],
  },
];

/** Very short everyday phrases for a first speaking session. */
export const simplePhrases: Phrase[] = [
  { id: 'simple-1', fr: 'Comment ça va ?', meaning: { en: 'How are you?', zh: '你好嗎？' }, variants: [] },
  { id: 'simple-2', fr: 'Ça va bien.', meaning: { en: 'I am well.', zh: '我很好。' }, variants: [] },
  { id: 'simple-3', fr: "Comment tu t'appelles ?", meaning: { en: 'What is your name?', zh: '你叫什麼名字？' }, variants: [] },
  { id: 'simple-4', fr: "Je m'appelle ___.", meaning: { en: 'My name is ___.', zh: '我叫＿＿。' }, variants: [] },
  { id: 'simple-5', fr: "Tu viens d'où ?", meaning: { en: 'Where are you from?', zh: '你從哪裡來？' }, variants: [] },
  { id: 'simple-6', fr: 'Je viens de Hong Kong.', meaning: { en: 'I am from Hong Kong.', zh: '我來自香港。' }, variants: [] },
  { id: 'simple-7', fr: 'Il est quelle heure ?', meaning: { en: 'What time is it?', zh: '現在幾點？' }, variants: [] },
  { id: 'simple-8', fr: 'Il est trois heures.', meaning: { en: 'It is three o’clock.', zh: '現在三點。' }, variants: [] },
  { id: 'simple-9', fr: 'Je suis un peu fatigué(e).', meaning: { en: 'I am a little tired.', zh: '我有一點累。' }, variants: [] },
  { id: 'simple-10', fr: 'À demain !', meaning: { en: 'See you tomorrow!', zh: '明天見！' }, variants: [] },
  { id: 'simple-11', fr: 'Au revoir !', meaning: { en: 'Goodbye!', zh: '再見！' }, variants: [] },
];
