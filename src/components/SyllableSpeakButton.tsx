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

/** Lets learners play one spoken segment at a time for deliberate shadowing. */
export function SyllableSpeakButton({ text, ipa, label }: SyllableSpeakButtonProps) {
  const [playingSegment, setPlayingSegment] = useState<string | null>(null);
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

  const segments = text.replace(/[?!,.…]/g, '').split(/\s+/).filter(Boolean);

  const playSegment = (segment: string) => {
    window.speechSynthesis.cancel();
    const voice = getFrenchVoice();
    const utterance = new SpeechSynthesisUtterance(segment);
    if (voice) utterance.voice = voice;
    utterance.lang = voice?.lang ?? 'fr-FR';
    utterance.rate = 0.58;
    utterance.onend = utterance.onerror = () => {
      if (mounted.current) setPlayingSegment(null);
    };
    setPlayingSegment(segment);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <p className="phrase-ipa">{ipa}</p>
      <div className="phrase-segment-buttons" aria-label={label}>
        {segments.map((segment, index) => (
          <button
            type="button"
            className={playingSegment === segment ? 'speaking' : ''}
            key={`${segment}-${index}`}
            onClick={() => playSegment(segment)}
            title={label}
            aria-label={`${label}: ${segment}`}
          >
            {playingSegment === segment ? '🔊' : '🔉'} {segment}
          </button>
        ))}
      </div>
    </div>
  );
}
