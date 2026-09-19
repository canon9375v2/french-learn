import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

let cachedFrenchVoice: SpeechSynthesisVoice | null | undefined;

function getFrenchVoice(): SpeechSynthesisVoice | null {
  if (cachedFrenchVoice !== undefined) return cachedFrenchVoice;
  const voices = window.speechSynthesis.getVoices();
  // Voice order is platform-dependent.  In particular, macOS can put a
  // Canadian French voice before the France French one, which changes some
  // vowels and rhythm noticeably. Prefer the standard learner target (fr-FR).
  cachedFrenchVoice =
    voices.find((voice) => voice.lang.toLowerCase() === 'fr-fr') ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith('fr-fr-')) ??
    voices.find((voice) => voice.lang.toLowerCase() === 'fr') ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith('fr-')) ??
    null;
  return cachedFrenchVoice;
}

function speak(text: string, rate: number, onStart: () => void, onEnd: () => void) {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = getFrenchVoice();
  if (voice) utterance.voice = voice;
  utterance.lang = voice?.lang ?? 'fr-FR';
  utterance.rate = rate;
  utterance.onstart = onStart;
  utterance.onend = onEnd;
  utterance.onerror = onEnd;
  window.speechSynthesis.speak(utterance);
}

interface SpeakButtonProps {
  text: string;
}

export function SpeakButton({ text }: SpeakButtonProps) {
  const { ui } = useLanguage();
  const [supported, setSupported] = useState(true);
  const [playing, setPlaying] = useState<'normal' | 'slow' | null>(null);
  const voicesLoaded = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setSupported(false);
      return;
    }
    if (!voicesLoaded.current) {
      window.speechSynthesis.onvoiceschanged = () => {
        cachedFrenchVoice = undefined;
      };
      voicesLoaded.current = true;
    }
  }, []);

  if (!supported) return null;

  const play = (mode: 'normal' | 'slow') => {
    speak(text, mode === 'slow' ? 0.55 : 1, () => setPlaying(mode), () => setPlaying(null));
  };

  return (
    <span className="speak-btn-group">
      <button
        type="button"
        className={`speak-btn${playing === 'normal' ? ' speaking' : ''}`}
        title={ui('speak.normal')}
        aria-label={ui('speak.normal')}
        onClick={() => play('normal')}
      >
        {playing === 'normal' ? '🔊…' : '🔊'}
      </button>
      <button
        type="button"
        className={`speak-btn slow${playing === 'slow' ? ' speaking' : ''}`}
        title={ui('speak.slow')}
        aria-label={ui('speak.slow')}
        onClick={() => play('slow')}
      >
        {playing === 'slow' ? '🐢…' : '🐢'}
      </button>
    </span>
  );
}
