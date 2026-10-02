import { Link, Navigate, useParams } from 'react-router-dom';
import { getUnit, getNextUnit } from '../data/units';
import { VocabList } from '../components/VocabList';
import { GrammarSection } from '../components/GrammarSection';
import { DialogueView } from '../components/DialogueView';
import { MCQQuiz } from '../components/MCQQuiz';
import { WritingTaskView } from '../components/WritingTaskView';
import { SpeakingTaskView } from '../components/SpeakingTaskView';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';

export function LessonPage() {
  const { unitId } = useParams<{ unitId: string }>();
  const { state, markUnitComplete } = useProgress();
  const { t, ui } = useLanguage();
  const unit = getUnit(unitId ?? '');

  if (!unit) return <Navigate to="/" replace />;

  const done = !!state.completedUnits[unit.id];
  const nextUnit = getNextUnit(unit.id);

  return (
    <div className="page lesson-page">
      <div className="lesson-breadcrumb">
        <Link to={`/level/${unit.level}`}>{ui('lesson.backToUnits', { level: unit.level })}</Link>
      </div>
      <h1>{t(unit.title)}</h1>
      <p className="lesson-description">{t(unit.description)}</p>

      <section className="lesson-section">
        <h2>{ui('lesson.vocabulary')}</h2>
        <VocabList items={unit.vocab} />
      </section>

      <section className="lesson-section">
        <h2>{ui('lesson.grammar')}</h2>
        <GrammarSection points={unit.grammar} />
      </section>

      {unit.dialogue && (
        <section className="lesson-section">
          <h2>{ui('lesson.dialogue')}</h2>
          <DialogueView dialogue={unit.dialogue} />
        </section>
      )}

      <section className="lesson-section">
        <h2>{ui('lesson.quiz')}</h2>
        <MCQQuiz unitId={unit.id} questions={unit.quiz} />
      </section>

      {unit.writing && (
        <section className="lesson-section">
          <h2>{ui('lesson.writing')}</h2>
          <WritingTaskView task={unit.writing} />
        </section>
      )}

      {unit.speaking && (
        <section className="lesson-section">
          <h2>{ui('lesson.speaking')}</h2>
          <SpeakingTaskView task={unit.speaking} />
        </section>
      )}

      <div className="lesson-footer">
        {!done ? (
          <button type="button" className="btn-primary" onClick={() => markUnitComplete(unit.id)}>
            {ui('lesson.markComplete')}
          </button>
        ) : (
          <span className="done-badge">{ui('lesson.unitCompleted')}</span>
        )}
        {nextUnit && (
          <Link to={`/level/${nextUnit.level}/${nextUnit.id}`} className="btn-secondary">
            {ui('lesson.next', { title: t(nextUnit.title) })}
          </Link>
        )}
      </div>
    </div>
  );
}
