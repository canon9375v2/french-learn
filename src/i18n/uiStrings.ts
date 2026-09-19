import type { Localized } from '../types';

export const uiStrings = {
  'nav.pronunciation': { en: 'Pronunciation', zh: '發音' },
  'nav.phrases': { en: 'Phrases', zh: '常用短句' },
  'nav.progress': { en: 'Progress', zh: '學習進度' },
  'nav.switchTo': { en: '中文', zh: 'English' },

  'phrases.title': { en: '30 Essential Beginner Phrases', zh: '初學法文必備 30 句短句' },
  'phrases.intro': {
    en: 'Thirty high-frequency phrases every beginner should memorize first — for self-introductions, asking questions, and everyday survival French. Click 🔊 to hear each one spoken aloud.',
    zh: '三十句初學者最先該背下來的高頻短句——用於自我介紹、提問，以及日常生存法語。點擊每句旁的 🔊 即可聽發音。',
  },
  'phrases.similar': { en: 'Similar sentences — same structure', zh: '相似句 — 同一結構' },
  'phrases.practice': { en: '✓ Practice today', zh: '✓ 今日打卡' },
  'phrases.practiced': { en: '✓ Practiced today', zh: '✓ 今天已練習' },
  'phrases.cancelPractice': { en: '✓ Practiced — undo', zh: '✓ 已打卡－取消' },
  'phrases.structure': { en: 'Structure', zh: '句型結構' },
  'phrases.pronunciation': { en: 'Pronunciation', zh: '讀音（IPA）' },
  'phrases.soundRule': { en: 'Sound rule', zh: '發音重點' },
  'phrases.playSegments': { en: 'Play this part slowly', zh: '播放這一段' },

  'home.title': { en: 'Learn French from zero to TCF Canada', zh: '從零開始學法文，邁向 TCF Canada' },
  'home.subtitle': {
    en: "A structured path from complete beginner (A1) through B2, with vocabulary, grammar, listening practice (using your browser's text-to-speech), reading, writing, and speaking — all mapped to the TCF Canada exam.",
    zh: '從完全零基礎（A1）到 B2 的完整學習路徑，涵蓋詞彙、文法、聽力（使用瀏覽器內建的語音朗讀）、閱讀、寫作與口說練習，並對應 TCF Canada 考試的各個科目。',
  },
  'home.unitsCompleted': { en: '{{completed}} / {{total}} units completed', zh: '已完成 {{completed}} / {{total}} 個單元' },
  'home.startUnit1': { en: 'Start with Unit 1', zh: '從第一單元開始' },
  'home.continueLearning': { en: 'Continue learning', zh: '繼續學習' },
  'home.learnSoundsFirst': { en: '🔤 Learn the sounds first', zh: '🔤 先學發音' },
  'home.levelUnitsCount': { en: '{{done}} / {{total}} units', zh: '{{done}} / {{total}} 個單元' },
  'home.aboutTcf': { en: '📋 About the TCF Canada exam →', zh: '📋 認識 TCF Canada 考試 →' },

  'level.comingSoon': { en: 'Units for this level are coming soon.', zh: '此級別的單元即將推出。' },
  'level.unitLabel': { en: 'Unit {{order}}', zh: '第 {{order}} 單元' },
  'level.doneBadge': { en: '✓ Done', zh: '✓ 已完成' },
  'level.lastQuizScore': { en: 'Last quiz score: {{score}}/{{total}}', zh: '上次測驗分數：{{score}}/{{total}}' },

  'lesson.backToUnits': { en: '← {{level}} units', zh: '← 返回 {{level}} 單元列表' },
  'lesson.vocabulary': { en: '📚 Vocabulary', zh: '📚 詞彙' },
  'lesson.grammar': { en: '🧩 Grammar', zh: '🧩 文法' },
  'lesson.dialogue': { en: '💬 Dialogue', zh: '💬 對話' },
  'lesson.quiz': { en: '✅ Practice quiz', zh: '✅ 練習測驗' },
  'lesson.writing': { en: '✍️ Writing practice', zh: '✍️ 寫作練習' },
  'lesson.speaking': { en: '🎙️ Speaking practice', zh: '🎙️ 口說練習' },
  'lesson.markComplete': { en: 'Mark unit as complete', zh: '標記本單元為已完成' },
  'lesson.unitCompleted': { en: '✓ Unit completed', zh: '✓ 單元已完成' },
  'lesson.next': { en: 'Next: {{title}} →', zh: '下一單元：{{title}} →' },

  'vocab.markReviewed': { en: 'Mark reviewed', zh: '標記已複習' },
  'vocab.reviewed': { en: '✓ Reviewed', zh: '✓ 已複習' },

  'speak.normal': { en: 'Normal speed', zh: '正常速度' },
  'speak.slow': { en: 'Slow speed', zh: '慢速' },

  'dialogue.showTranslation': { en: 'Show translation', zh: '顯示翻譯' },

  'quiz.skill.grammar': { en: 'Grammar', zh: '文法' },
  'quiz.skill.vocab': { en: 'Vocabulary', zh: '詞彙' },
  'quiz.skill.reading': { en: 'Reading', zh: '閱讀' },
  'quiz.skill.listening': { en: 'Listening', zh: '聽力' },
  'quiz.playAudio': { en: '🔊 Play audio', zh: '🔊 播放音檔' },
  'quiz.checkAnswers': { en: 'Check answers', zh: '檢查答案' },
  'quiz.score': { en: 'Score: {{score}} / {{total}}', zh: '分數：{{score}} / {{total}}' },
  'quiz.retry': { en: 'Retry quiz', zh: '重新測驗' },

  'writing.wordCount': { en: '{{count}} / {{min}} words', zh: '{{count}} / {{min}} 字' },

  'speaking.startRecording': { en: '● Start recording', zh: '● 開始錄音' },
  'speaking.stop': { en: '■ Stop ({{seconds}}s)', zh: '■ 停止（{{seconds}} 秒）' },
  'speaking.recordAgain': { en: 'Record again', zh: '重新錄音' },
  'speaking.unsupported': {
    en: "Voice recording isn't supported in this browser. You can still practice by speaking the prompt aloud on your own.",
    zh: '此瀏覽器不支援錄音功能，你仍然可以自己大聲朗讀練習。',
  },
  'speaking.denied': {
    en: 'Microphone access was denied. Enable it in your browser settings to record yourself, or practice speaking without recording.',
    zh: '麥克風權限已被拒絕。請在瀏覽器設定中開啟權限以錄音，或不錄音直接練習口說。',
  },
  'speaking.hint': { en: 'Recordings stay only in your browser — nothing is uploaded anywhere.', zh: '錄音僅保存在你的瀏覽器中，不會上傳到任何地方。' },

  'tcf.title': { en: 'About the TCF Canada exam', zh: '關於 TCF Canada 考試' },
  'tcf.intro': {
    en: "The TCF Canada (Test de connaissance du français pour le Canada) is the standardized French test accepted by IRCC and Quebec's MIFI for immigration applications. Here's what each section covers and how it maps to what you're practicing here.",
    zh: 'TCF Canada（加拿大法語知識測驗）是加拿大移民局（IRCC）與魁北克移民廳（MIFI）認可的標準化法語測驗。以下說明各科目內容，以及它們如何對應到本網站的練習內容。',
  },
  'tcf.examSections': { en: 'Exam sections', zh: '考試科目' },
  'tcf.nclcTitle': { en: 'NCLC score bands (approximate)', zh: 'NCLC 分數對照表（概略）' },
  'tcf.table.nclc': { en: 'NCLC', zh: 'NCLC' },
  'tcf.table.cefr': { en: '≈ CEFR', zh: '≈ CEFR' },
  'tcf.table.meaning': { en: 'What it means', zh: '代表意義' },
  'tcf.studyTips': { en: 'Study tips', zh: '學習小技巧' },

  'progress.title': { en: 'Your progress', zh: '你的學習進度' },
  'progress.wordsReviewed': { en: '📖 {{count}} words marked as reviewed', zh: '📖 已標記複習 {{count}} 個單字' },
  'progress.phrasesPracticed': { en: '🗣️ {{count}} phrases practiced', zh: '🗣️ 已練習 {{count}} 句短句' },
  'progress.phraseHistory': { en: 'Phrase practice log', zh: '短句練習紀錄' },
  'progress.noPhrasePractice': { en: 'No phrases practiced yet. Start from the Phrases page.', zh: '尚未練習短句；請到「常用短句」頁開始打卡。' },
  'progress.phrasesOnDate': { en: '{{count}} phrases practiced', zh: '練習了 {{count}} 句' },
  'progress.resetAll': { en: 'Reset all progress', zh: '重設所有進度' },
  'progress.resetConfirm': {
    en: 'Reset all progress? This clears completed units, quiz scores, and reviewed words.',
    zh: '確定要重設所有進度嗎？這將清除已完成的單元、測驗分數與已複習的單字紀錄。',
  },

  'pron.title': { en: 'Prononciation — sounds, rules & liaison', zh: 'Prononciation — 發音、規則與連音' },
  'pron.intro': {
    en: "French spelling doesn't map to sound the way English does. Learning these patterns early pays off directly on the TCF listening section, where mis-hearing a nasal vowel or missing a liaison changes the whole meaning of a sentence. Click 🔊 on any example to hear it spoken aloud.",
    zh: '法文的拼字和發音的對應方式跟英文很不一樣。及早掌握這些規則，對 TCF 聽力科目非常有幫助——聽錯一個鼻母音或漏掉一個連音，整句話的意思就會不一樣。點擊任何範例旁的 🔊 即可聽發音。',
  },
  'pron.alphabet': { en: "1. L'alphabet — the 26 letters", zh: "1. L'alphabet — 26 個字母發音" },
  'pron.alphabetIntro': {
    en: 'How to say each letter out loud — essential for spelling your name, an email address, or a word the examiner asks you to spell.',
    zh: '學會怎麼唸出每個字母——這在拼出你的名字、電子郵件地址，或考官要求你拼字時非常重要。',
  },
  'pron.section1': { en: '2. Voyelles simples — simple vowels', zh: '2. Voyelles simples — 簡單母音' },
  'pron.section2': { en: '3. Voyelles nasales — nasal vowels', zh: '3. Voyelles nasales — 鼻母音' },
  'pron.section2intro': {
    en: 'When a vowel is followed by "n" or "m" at the end of a syllable, the air passes through the nose and the n/m itself is not pronounced as a consonant. This is one of the hardest habits for English speakers to build — and one of the most common listening traps on the TCF.',
    zh: '當母音後面接著音節結尾的「n」或「m」時，氣流會從鼻子出來，而 n/m 本身並不會被當作子音發出來。這是最難養成的發音習慣之一，也是 TCF 聽力最常見的陷阱之一。',
  },
  'pron.section3': { en: '4. Consonnes particulières — tricky consonants', zh: '4. Consonnes particulières — 特殊子音' },
  'pron.section4': { en: '5. La liaison — linking words together', zh: '5. La liaison — 連音' },
  'pron.section4intro': {
    en: "When a word ends in a normally-silent consonant and the next word starts with a vowel sound (or a mute \"h\"), that consonant is often pronounced and glides into the next word. This is why spoken French can sound like one continuous stream rather than separate words — and it's exactly what makes TCF listening feel fast.",
    zh: '當一個字尾的子音原本不發音，而下一個字是以母音（或啞音 h）開頭時，這個子音常常會被唸出來，並滑接到下一個字。這就是為什麼法文口語聽起來像一整串連續的聲音，而不是一個個分開的單字——也是 TCF 聽力感覺很快的原因。',
  },
  'pron.liaisonObligatory': { en: '✅ Obligatoire — always made', zh: '✅ Obligatoire — 必須連音' },
  'pron.liaisonForbidden': { en: '🚫 Interdite — never made', zh: '🚫 Interdite — 禁止連音' },
  'pron.liaisonOptional': { en: '➖ Facultative — optional, style-dependent', zh: '➖ Facultative — 可連可不連' },
  'pron.soundChanges': { en: '🔁 Sound changes in liaison', zh: '🔁 連音時的音變' },
  'pron.table.letter': { en: 'Written letter', zh: '書寫字母' },
  'pron.table.sound': { en: 'Liaison sound', zh: '連音發音' },
  'pron.table.example': { en: 'Example', zh: '範例' },
} satisfies Record<string, Localized>;

export type UiKey = keyof typeof uiStrings;
