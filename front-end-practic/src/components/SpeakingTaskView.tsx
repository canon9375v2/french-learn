import { useEffect, useRef, useState } from 'react';
import type { SpeakingTask } from '../types';
import { useLanguage } from '../context/LanguageContext';

type RecorderStatus = 'idle' | 'recording' | 'recorded' | 'unsupported' | 'denied';

export function SpeakingTaskView({ task }: { task: SpeakingTask }) {
  const { t, ui } = useLanguage();
  const [status, setStatus] = useState<RecorderStatus>('idle');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [seconds, setSeconds] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startRecording = async () => {
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      setStatus('unsupported');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => chunksRef.current.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
        setStatus('recorded');
        if (timerRef.current) window.clearInterval(timerRef.current);
      };
      mediaRecorderRef.current = recorder;
      recorder.start();
      setStatus('recording');
      setSeconds(0);
      timerRef.current = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    } catch {
      setStatus('denied');
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
  };

  const reset = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setStatus('idle');
    setSeconds(0);
  };

  return (
    <div className="task-view">
      <p className="task-prompt">{t(task.prompt)}</p>
      <ul className="task-tips">
        {task.tips.map((tip) => (
          <li key={tip.en}>{t(tip)}</li>
        ))}
      </ul>

      <div className="speaking-recorder">
        {status === 'idle' && (
          <button type="button" className="btn-primary" onClick={startRecording}>
            {ui('speaking.startRecording')}
          </button>
        )}
        {status === 'recording' && (
          <button type="button" className="btn-danger" onClick={stopRecording}>
            {ui('speaking.stop', { seconds })}
          </button>
        )}
        {status === 'recorded' && audioUrl && (
          <div className="recorded-playback">
            <audio controls src={audioUrl} />
            <button type="button" className="btn-secondary" onClick={reset}>
              {ui('speaking.recordAgain')}
            </button>
          </div>
        )}
        {status === 'unsupported' && <p className="recorder-note">{ui('speaking.unsupported')}</p>}
        {status === 'denied' && <p className="recorder-note">{ui('speaking.denied')}</p>}
        <p className="recorder-hint">{ui('speaking.hint')}</p>
      </div>
    </div>
  );
}
