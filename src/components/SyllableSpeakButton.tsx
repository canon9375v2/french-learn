import { useEffect, useRef, useState } from 'react';
import type { SyllablePair } from '../data/phrases';

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
  syllables: SyllablePair[];
  label: string;
}

/** Lets learners play one spoken segment at a time, each paired with its own IPA, for deliberate shadowing. */
export function SyllableSpeakButton({ syllables, label }: SyllableSpeakButtonProps) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    window.speechSynthesis.onvoiceschanged = () => {
      cachedFrenchVoice = undefined;
    };
    return () => {
      mounted.current = false;
    };
  }, []);

  const fullIpa = `/${syllables.map((s) => s.ipa).join(' ')}/`;

  const playSegment = (index: number) => {
    const segment = syllables[index];
    if (segment.fr === '___') return;
    window.speechSynthesis.cancel();
    const voice = getFrenchVoice();
    const utterance = new SpeechSynthesisUtterance(segment.fr);
    if (voice) utterance.voice = voice;
    utterance.lang = voice?.lang ?? 'fr-FR';
    utterance.rate = 0.58;
    utterance.onend = utterance.onerror = () => {
      if (mounted.current) setPlayingIndex(null);
    };
    setPlayingIndex(index);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <p className="phrase-ipa">{fullIpa}</p>
      <div className="phrase-segment-buttons" aria-label={label}>
        {syllables.map((segment, index) => (
          <button
            type="button"
            className={playingIndex === index ? 'speaking' : ''}
            key={`${segment.fr}-${index}`}
            onClick={() => playSegment(index)}
            title={label}
            aria-label={`${label}: ${segment.fr}`}
          >
            {playingIndex === index ? '🔊' : '🔉'} {segment.fr}
            <span className="segment-ipa"> /{segment.ipa}/</span>
          </button>
        ))}
      </div>
    </div>
  );
}
