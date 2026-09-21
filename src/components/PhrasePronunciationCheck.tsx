import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

type Status = 'idle' | 'recording' | 'recorded' | 'unsupported' | 'denied';

interface RecognitionResultLike {
  transcript: string;
}

interface RecognitionEventLike {
  results: ArrayLike<ArrayLike<RecognitionResultLike>>;
}

interface RecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: RecognitionEventLike) => void) | null;
  onerror: (() => void) | null;
  start: () => void;
  stop: () => void;
}

type RecognitionConstructor = new () => RecognitionLike;

function normaliseWords(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[’'’-]/g, ' ')
    .replace(/[^a-z\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

function getMissingWords(target: string, transcript: string) {
  const heard = normaliseWords(transcript);
  let heardIndex = 0;
  return normaliseWords(target).filter((word) => {
    const matchAt = heard.indexOf(word, heardIndex);
    if (matchAt === -1) return true;
    heardIndex = matchAt + 1;
    return false;
  });
}

export function PhrasePronunciationCheck({ text }: { text: string }) {
  const { ui } = useLanguage();
  const [status, setStatus] = useState<Status>('idle');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [transcript, setTranscript] = useState('');
  const [recognitionSupported, setRecognitionSupported] = useState<boolean | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recognitionRef = useRef<RecognitionLike | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
  }, [audioUrl]);

  const start = async () => {
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      setStatus('unsupported');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      setTranscript('');
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);

      recorder.ondataavailable = (event) => chunksRef.current.push(event.data);
      recorder.onstop = () => {
        setAudioUrl(URL.createObjectURL(new Blob(chunksRef.current, { type: 'audio/webm' })));
        stream.getTracks().forEach((track) => track.stop());
        setStatus('recorded');
      };
      mediaRecorderRef.current = recorder;

      const speechWindow = window as typeof window & {
        SpeechRecognition?: RecognitionConstructor;
        webkitSpeechRecognition?: RecognitionConstructor;
      };
      const Recognition = speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition;
      setRecognitionSupported(!!Recognition);
      if (Recognition) {
        const recognition = new Recognition();
        recognition.lang = 'fr-FR';
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.onresult = (event) => {
          const result = event.results[event.results.length - 1];
          setTranscript(result?.[0]?.transcript ?? '');
        };
        recognition.onerror = () => undefined;
        recognitionRef.current = recognition;
        recognition.start();
      } else {
        recognitionRef.current = null;
      }

      recorder.start();
      setStatus('recording');
    } catch {
      setStatus('denied');
    }
  };

  const stop = () => {
    recognitionRef.current?.stop();
    mediaRecorderRef.current?.stop();
  };

  const reset = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setTranscript('');
    setStatus('idle');
  };

  const missingWords = transcript ? getMissingWords(text, transcript) : [];
  const totalWords = normaliseWords(text).length;
  const score = transcript ? Math.round(((totalWords - missingWords.length) / totalWords) * 100) : null;

  return (
    <div className="phrase-recording-controls">
      {status === 'idle' && <button type="button" onClick={start}>{ui('phrases.record')}</button>}
      {status === 'recording' && <button type="button" className="recording" onClick={stop}>{ui('phrases.stopRecording')}</button>}
      {status === 'recorded' && (
        <>
          {audioUrl && <audio controls src={audioUrl} />}
          <button type="button" onClick={reset}>{ui('phrases.recordAgain')}</button>
        </>
      )}
      {status === 'unsupported' && <p>{ui('phrases.recordingUnsupported')}</p>}
      {status === 'denied' && <p>{ui('phrases.microphoneDenied')}</p>}

      {status === 'recorded' && recognitionSupported === false && <p>{ui('phrases.recognitionUnsupported')}</p>}
      {transcript && score !== null && (
        <div className="pronunciation-feedback">
          <p>{ui('phrases.heard', { text: transcript })}</p>
          <p className={score >= 85 ? 'good' : ''}>{ui('phrases.matchScore', { score })}</p>
          {missingWords.length > 0 ? (
            <p>{ui('phrases.checkWords', { words: missingWords.join(', ') })}</p>
          ) : (
            <p className="good">{ui('phrases.allWordsRecognized')}</p>
          )}
          <p className="feedback-note">{ui('phrases.feedbackNote')}</p>
        </div>
      )}
    </div>
  );
}
