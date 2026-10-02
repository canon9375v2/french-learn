import { useState } from 'react';
import type { QuizQuestion, QuizSkill } from '../types';
import { SpeakButton } from './SpeakButton';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';
import type { UiKey } from '../i18n/uiStrings';

const skillKey: Record<QuizSkill, UiKey> = {
  grammar: 'quiz.skill.grammar',
  vocab: 'quiz.skill.vocab',
  reading: 'quiz.skill.reading',
  listening: 'quiz.skill.listening',
};

export function MCQQuiz({ unitId, questions }: { unitId: string; questions: QuizQuestion[] }) {
  const { saveQuizAttempt } = useProgress();
  const { t, ui } = useLanguage();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);
  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);

  const selectAnswer = (qid: string, idx: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qid]: idx }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    saveQuizAttempt(unitId, score, questions.length);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="mcq-quiz">
      {questions.map((q, qi) => {
        const selected = answers[q.id];
        const isCorrect = submitted && selected === q.answerIndex;
        const isWrong = submitted && selected !== undefined && selected !== q.answerIndex;
        return (
          <div key={q.id} className={`quiz-question${isCorrect ? ' correct' : ''}${isWrong ? ' wrong' : ''}`}>
            <div className="quiz-question-header">
              <span className="quiz-number">Q{qi + 1}</span>
              <span className="quiz-skill-tag">{ui(skillKey[q.skill])}</span>
            </div>
            {q.passage && <p className="quiz-passage">{q.passage}</p>}
            {q.audioText && (
              <div className="quiz-audio">
                <span className="quiz-audio-label">{ui('quiz.playAudio')}</span>
                <SpeakButton text={q.audioText} />
              </div>
            )}
            <p className="quiz-prompt">{t(q.prompt)}</p>
            <div className="quiz-options">
              {q.options.map((opt, oi) => {
                const isSelected = selected === oi;
                const showAsCorrect = submitted && oi === q.answerIndex;
                return (
                  <button
                    key={opt.en}
                    type="button"
                    className={`quiz-option${isSelected ? ' selected' : ''}${showAsCorrect ? ' answer-correct' : ''}`}
                    onClick={() => selectAnswer(q.id, oi)}
                    disabled={submitted}
                  >
                    {t(opt)}
                  </button>
                );
              })}
            </div>
            {submitted && q.explanation && <p className="quiz-explanation">💡 {t(q.explanation)}</p>}
          </div>
        );
      })}

      <div className="quiz-footer">
        {!submitted ? (
          <button type="button" className="btn-primary" disabled={!allAnswered} onClick={handleSubmit}>
            {ui('quiz.checkAnswers')}
          </button>
        ) : (
          <div className="quiz-result">
            <p>{ui('quiz.score', { score, total: questions.length })}</p>
            <button type="button" className="btn-secondary" onClick={handleRetry}>
              {ui('quiz.retry')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
