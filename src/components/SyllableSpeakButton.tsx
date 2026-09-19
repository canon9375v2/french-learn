import { useEffect, useRef, useState } from 'react';

let cachedFrenchVoice: SpeechSynthesisVoice | null | undefined;

function getFrenchVoice() {
  if (cachedFrenchVoice !== undefined) return cachedFrenchVoice;
  const voices = window.speechSynthesis.getVoices();
  cachedFrenchVoice =
    voices.find((voice) => voice.lang.toLowerCase() === 'fr-fr') ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith('fr-fr-')) ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith('fr-')) ??
    null;
  return cachedFrenchVoice;
}

interface SyllableSpeakButtonProps {
  text: string;
  ipa: string;
  label: string;
}

/** Plays one spoken word at a time, leaving a short pause for shadowing. */
export function SyllableSpeakButton({ text, ipa, label }: SyllableSpeakButtonProps) {
  const [playing, setPlaying] = useState(false);
  const cancelled = useRef(false);

  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = () => {
      cachedFrenchVoice = undefined;
    };
    return () => {
      cancelled.current = true;
    };
  }, []);

  const playSegments = () => {
    window.speechSynthesis.cancel();
    cancelled.current = false;
    const segments = text.replace(/[?!,.…]/g, '').split(/\s+/).filter(Boolean);
    const voice = getFrenchVoice();
    let index = 0;
    setPlaying(true);

    const playNext = () => {
      if (cancelled.current || index >= segments.length) {
        setPlaying(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(segments[index]);
      index += 1;
      if (voice) utterance.voice = voice;
      utterance.lang = voice?.lang ?? 'fr-FR';
      utterance.rate = 0.58;
      utterance.onend = () => window.setTimeout(playNext, 180);
      utterance.onerror = playNext;
      window.speechSynthesis.speak(utterance);
    };

    playNext();
  };

  return (
    <button
      type="button"
      className={`phrase-ipa phrase-ipa-button${playing ? ' speaking' : ''}`}
      onClick={playSegments}
      title={label}
      aria-label={label}
    >
      {playing ? '🔊 ' : '🔉 '}{ipa}
    </button>
  );
}
