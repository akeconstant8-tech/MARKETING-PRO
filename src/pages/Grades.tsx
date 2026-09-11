import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { CheckCircle2, PenSquare, Save, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { useTeacherCollection } from '../hooks/useTeacherCollection';
import { addTeacherDoc, updateTeacherDoc } from '../services/dataService';
import { useEstablishment } from '../context/EstablishmentContext';
import { computeSimpleAverage } from '../utils/calculations';
import { EVALUATION_TYPE_LABELS } from '../data/evaluationTypes';
import Button from '../components/Button';
import Skeleton from '../components/Skeleton';
import type { Class, Evaluation, Grade, Student, Subject } from '../types';
import './Grades.css';

export default function Grades() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { activeId: activeEtablissementId } = useEstablishment();
  const { items: evaluations, loading: loadingEvaluations } = useTeacherCollection<Evaluation>('evaluations', 'date');
  const { items: subjects, loading: loadingSubjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const { items: classes, loading: loadingClasses } = useTeacherCollection<Class>('classes', 'nom');
  const { items: students, loading: loadingStudents } = useTeacherCollection<Student>('students', 'nom');
  const { items: grades, loading: loadingGrades } = useTeacherCollection<Grade>('grades', 'studentId');
  const loading = loadingEvaluations || loadingSubjects || loadingClasses || loadingStudents || loadingGrades;

  const [evaluationId, setEvaluationId] = useState('');
  const [noteInputs, setNoteInputs] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  const subjectById = useMemo(() => new Map(subjects.map((s) => [s.id, s])), [subjects]);
  const classById = useMemo(() => new Map(classes.map((c) => [c.id, c])), [classes]);

  const sortedEvaluations = useMemo(
    () => [...evaluations].sort((a, b) => b.date.localeCompare(a.date)),
    [evaluations]
  );

  const selectedEvaluation = useMemo(
    () => evaluations.find((e) => e.id === evaluationId) ?? null,
    [evaluations, evaluationId]
  );

  const classStudents = useMemo(() => {
    if (!selectedEvaluation) return [];
    return students
      .filter((s) => s.classeId === selectedEvaluation.classeId)
      .sort((a, b) => a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom));
  }, [students, selectedEvaluation]);

  const existingGrades = useMemo(() => {
    const map = new Map<string, Grade>();
    for (const g of grades) {
      if (g.evaluationId === evaluationId) map.set(g.studentId, g);
    }
    return map;
  }, [grades, evaluationId]);

  useEffect(() => {
    const initial: Record<string, string> = {};
    for (const student of classStudents) {
      const existing = existingGrades.get(student.id);
      if (existing) initial[student.id] = String(existing.note);
    }
    setNoteInputs(initial);
  }, [evaluationId, classStudents, existingGrades]);

  const enteredValues = useMemo(() => {
    return classStudents
      .map((s) => noteInputs[s.id])
      .filter((v): v is string => v !== undefined && v.trim() !== '')
      .map(Number)
      .filter((n) => !Number.isNaN(n));
  }, [classStudents, noteInputs]);

  const classAverage = computeSimpleAverage(enteredValues);
  const savedCount = classStudents.filter((s) => existingGrades.has(s.id)).length;

  async function handleSave() {
    if (!user || !selectedEvaluation) return;
    setSaving(true);
    try {
      const tasks = classStudents.map(async (student) => {
        const raw = noteInputs[student.id];
        if (raw === undefined || raw.trim() === '') return;
        const note = Number(raw);
        if (Number.isNaN(note)) return;

        const existing = existingGrades.get(student.id);
        if (existing) {
          await updateTeacherDoc('grades', existing.id, { note });
        } else {
          await addTeacherDoc('grades', {
            teacherId: user.uid,
            etablissementId: activeEtablissementId ?? null,
            studentId: student.id,
            subjectId: selectedEvaluation.subjectId,
            evaluationId: selectedEvaluation.id,
            note,
            noteMax: selectedEvaluation.noteMax,
            coefficient: selectedEvaluation.coefficient,
          });
        }
      });
      await Promise.all(tasks);
      showToast('success', 'Notes enregistrees.');
    } catch (err) {
      console.error(err);
      showToast('error', "Echec de l'enregistrement des notes.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="grades-page fade-in-up">
      <div className="grades-header">
        <div className="grades-header-left">
          <div className="grades-header-icon">
            <PenSquare size={22} />
          </div>
          <div>
            <h2 className="grades-title">Saisir les notes</h2>
            <p className="grades-subtitle">Choisissez une evaluation puis renseignez les notes de la classe.</p>
          </div>
        </div>
      </div>

      {!loading && evaluations.length === 0 ? (
        <p className="grades-empty">
          Creez d'abord une evaluation (page Evaluations) avant de saisir des notes.
        </p>
      ) : null}

      {!loading && evaluations.length > 0 ? (
        <div className="grades-selector-card">
          <label className="grades-label" htmlFor="grades-evaluation">
            Evaluation
          </label>
          <select
            id="grades-evaluation"
            className="grades-input"
            value={evaluationId}
            onChange={(e) => setEvaluationId(e.target.value)}
          >
            <option value="" disabled>
              Choisir une evaluation
            </option>
            {sortedEvaluations.map((e) => {
              const subject = subjectById.get(e.subjectId);
              const classe = classById.get(e.classeId);
              return (
                <option key={e.id} value={e.id}>
                  {subject?.nom ?? 'Matiere inconnue'} · {classe?.niveau ?? classe?.nom ?? '—'} ·{' '}
                  {EVALUATION_TYPE_LABELS[e.type]} · {e.date}
                </option>
              );
            })}
          </select>
        </div>
      ) : null}

      {loading ? (
        <div className="grades-table-card">
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <Skeleton height={20} />
            </div>
          ))}
        </div>
      ) : null}

      {!loading && selectedEvaluation ? (
        <>
          <div className="grades-summary-row">
            <div className="grades-summary-card">
              <Users size={16} />
              <div>
                <strong>{classStudents.length}</strong>
                <span>Etudiants dans la classe</span>
              </div>
            </div>
            <div className="grades-summary-card">
              <CheckCircle2 size={16} />
              <div>
                <strong>{savedCount}</strong>
                <span>Notes deja enregistrees</span>
              </div>
            </div>
            <div className="grades-summary-card">
              <PenSquare size={16} />
              <div>
                <strong>{classAverage !== null ? classAverage.toFixed(2) : '—'}</strong>
                <span>Moyenne de la saisie (/{selectedEvaluation.noteMax})</span>
              </div>
            </div>
          </div>

          {classStudents.length === 0 ? (
            <p className="grades-empty">Aucun etudiant dans cette classe pour le moment.</p>
          ) : (
            <div className="grades-table-card">
              <div className="grades-table-scroll">
                <table className="grades-table">
                  <thead>
                    <tr>
                      <th>Etudiant</th>
                      <th>Note (/{selectedEvaluation.noteMax})</th>
                      <th>Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classStudents.map((student, i) => (
                      <tr key={student.id} className="row-fade-in" style={{ '--stagger-index': Math.min(i, 14) } as CSSProperties}>
                        <td className="grades-table-name">
                          {student.prenom} {student.nom}
                        </td>
                        <td>
                          <input
                            type="number"
                            min={0}
                            max={selectedEvaluation.noteMax}
                            step="0.5"
                            className="grades-note-input"
                            value={noteInputs[student.id] ?? ''}
                            onChange={(e) =>
                              setNoteInputs((prev) => ({ ...prev, [student.id]: e.target.value }))
                            }
                          />
                        </td>
                        <td>
                          {existingGrades.has(student.id) ? (
                            <span className="grades-status grades-status-saved">
                              <CheckCircle2 size={13} />
                              Enregistree
                            </span>
                          ) : (
                            <span className="grades-status grades-status-pending">En attente</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grades-table-footer">
                <Button variant="primary" loading={saving} onClick={handleSave}>
                  <Save size={16} />
                  Enregistrer les notes
                </Button>
              </div>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
