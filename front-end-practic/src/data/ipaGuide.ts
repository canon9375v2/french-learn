import type { Localized } from '../types';

export interface IpaGuideEntry {
  symbol: string;
  description: Localized;
  example: { fr: string; ipa: string };
}

/**
 * The "hard" French sounds worth calling out individually — nasal vowels,
 * rounded front vowels, semivowels, the uvular r, and a few consonants that
 * don't map onto English. Ordinary sounds close to English (a, i, t, k...)
 * are left out on purpose.
 */
export const ipaGuide: IpaGuideEntry[] = [
  { symbol: 'ɑ̃', description: { en: 'Nasal "ah" — push the air through your nose; do not pronounce the n/m itself.', zh: '鼻音「啊」——氣流從鼻腔出來，不要把 n/m 本身唸出來。' }, example: { fr: 'dans', ipa: 'dɑ̃' } },
  { symbol: 'ɛ̃', description: { en: 'Nasal version of è.', zh: '「è」的鼻音版本。' }, example: { fr: 'vin', ipa: 'vɛ̃' } },
  { symbol: 'ɔ̃', description: { en: 'Nasal version of the open "o".', zh: '開口「o」的鼻音版本。' }, example: { fr: 'bon', ipa: 'bɔ̃' } },
  { symbol: 'y', description: { en: 'Round your lips for "oo" but say "ee" — no English equivalent.', zh: '嘴唇像發「oo」一樣圓唇，同時發出「ee」的音——英文中沒有這個音。' }, example: { fr: 'tu', ipa: 'ty' } },
  { symbol: 'ø', description: { en: 'Round your lips for "o" but say "é" — between French "eu" and English "uh".', zh: '嘴型圓成「o」的樣子，但發出「é」的音，介於法文「eu」與英文「uh」之間。' }, example: { fr: 'peu', ipa: 'pø' } },
  { symbol: 'ɥ', description: { en: 'A very quick glide from rounded "y" into the next vowel.', zh: '從圓唇的「y」快速滑向下一個母音。' }, example: { fr: 'suis', ipa: 'sɥi' } },
  { symbol: 'w', description: { en: 'Glide like the "w" in English "watt".', zh: '滑音，類似英文 watt 中的 "w"。' }, example: { fr: 'toi', ipa: 'twa' } },
  { symbol: 'ʁ', description: { en: 'The French r — made at the back of the throat, not with the tongue tip like English r.', zh: '法語小舌音 r——在喉嚨後方發音，不是像英文 r 用舌尖。' }, example: { fr: 'rouge', ipa: 'ʁuʒ' } },
  { symbol: 'ʒ', description: { en: 'Like the "s" in English "measure".', zh: '類似英文 measure 中的 "s"。' }, example: { fr: 'je', ipa: 'ʒə' } },
  { symbol: 'ʃ', description: { en: 'Like English "sh".', zh: '類似英文的「sh」音。' }, example: { fr: 'chat', ipa: 'ʃa' } },
  { symbol: 'ə', description: { en: 'A relaxed, neutral "uh" — often nearly dropped in fast speech.', zh: '放鬆、中性的「呃」音，快速口語中常幾乎被省略。' }, example: { fr: 'le', ipa: 'lə' } },
];

/** Returns the guide entries (in canonical order) whose symbol appears in any of the given IPA strings. */
export function findIpaSymbolsIn(ipaStrings: string[]): IpaGuideEntry[] {
  return ipaGuide.filter((entry) => ipaStrings.some((ipa) => ipa.includes(entry.symbol)));
}
