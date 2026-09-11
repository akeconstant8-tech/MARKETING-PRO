import { useMemo, useState, type CSSProperties, type FormEvent } from 'react';
import { CalendarClock, ClipboardList, Hourglass, Layers, Plus, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { useTeacherCollection } from '../hooks/useTeacherCollection';
import { addTeacherDoc, deleteTeacherDoc } from '../services/dataService';
import { useEstablishment } from '../context/EstablishmentContext';
import { EVALUATION_TYPE_DEFAULT_NOTE_MAX, EVALUATION_TYPE_LABELS, EVALUATION_TYPE_TONES } from '../data/evaluationTypes';
import Button from '../components/Button';
import StatCard from '../components/StatCard';
import Skeleton from '../components/Skeleton';
import type { Class, Evaluation, EvaluationType, Subject } from '../types';
import './Evaluations.css';

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export default function Evaluations() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { activeId: activeEtablissementId } = useEstablishment();
  const { items: evaluations, loading: loadingEvaluations } = useTeacherCollection<Evaluation>('evaluations', 'date');
  const { items: subjects, loading: loadingSubjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const { items: classes, loading: loadingClasses } = useTeacherCollection<Class>('classes', 'nom');
  const loading = loadingEvaluations || loadingSubjects || loadingClasses;

  const [showForm, setShowForm] = useState(false);
  const [subjectId, setSubjectId] = useState('');
  const [type, setType] = useState<EvaluationType>('devoir');
  const [date, setDate] = useState('');
  const [coefficient, setCoefficient] = useState('1');
  const [noteMax, setNoteMax] = useState('20');
  const [saving, setSaving] = useState(false);

  const subjectById = useMemo(() => new Map(subjects.map((s) => [s.id, s])), [subjects]);
  const classById = useMemo(() => new Map(classes.map((c) => [c.id, c])), [classes]);

  const sortedEvaluations = useMemo(
    () => [...evaluations].sort((a, b) => b.date.localeCompare(a.date)),
    [evaluations]
  );

  const matieresConcernees = useMemo(() => new Set(evaluations.map((e) => e.subjectId)).size, [evaluations]);
  const aVenir = useMemo(() => evaluations.filter((e) => e.date >= todayIso()).length, [evaluations]);
  const passees = useMemo(() => evaluations.filter((e) => e.date < todayIso()).length, [evaluations]);

  async function handleCreateEvaluation(e: FormEvent) {
    e.preventDefault();
    if (!user || !subjectId || !date) return;
    const subject = subjectById.get(subjectId);
    if (!subject?.classeId) {
      showToast('error', "Cette matiere n'est rattachee a aucune classe.");
      return;
    }
    setSaving(true);
    try {
      await addTeacherDoc('evaluations', {
        teacherId: user.uid,
        etablissementId: activeEtablissementId ?? null,
        subjectId,
        classeId: subject.classeId,
        type,
        date,
        coefficient: Number(coefficient) || 1,
        noteMax: Number(noteMax) || 20,
        createdAt: new Date().toISOString(),
      });
      showToast('success', 'Evaluation creee.');
      setSubjectId('');
      setType('devoir');
      setDate('');
      setCoefficient('1');
      setNoteMax('20');
      setShowForm(false);
    } catch (err) {
      console.error(err);
      showToast('error', "Echec de la creation de l'evaluation.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteEvaluation(evaluation: Evaluation) {
    const subject = subjectById.get(evaluation.subjectId);
    if (!window.confirm(`Supprimer l'evaluation "${subject?.nom ?? 'Matiere inconnue'}" du ${evaluation.date} ?`)) return;
    try {
      await deleteTeacherDoc('evaluations', evaluation.id);
      showToast('success', 'Evaluation supprimee.');
    } catch (err) {
      console.error(err);
      showToast('error', 'Echec de la suppression.');
    }
  }

  return (
    <div className="evaluations-page fade-in-up">
      <div className="evaluations-header">
        <div className="evaluations-header-left">
          <div className="evaluations-header-icon">
            <ClipboardList size={22} />
          </div>
          <div>
            <h2 className="evaluations-title">Evaluations</h2>
            <p className="evaluations-subtitle">Planifiez vos devoirs, interrogations et examens.</p>
          </div>
        </div>
        <Button variant="primary" onClick={() => setShowForm((v) => !v)} disabled={subjects.length === 0}>
          <Plus size={18} />
          Nouvelle evaluation
        </Button>
      </div>

      {subjects.length === 0 && !loading ? (
        <p className="evaluations-empty">Creez d'abord une matiere (page Matieres) avant de planifier une evaluation.</p>
      ) : null}

      {showForm ? (
        <form className="evaluations-form fade-in-up" onSubmit={handleCreateEvaluation}>
          <div className="evaluations-field">
            <label className="evaluations-label" htmlFor="eval-subject">
              Matiere
            </label>
            <select
              id="eval-subject"
              className="evaluations-input"
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
              required
            >
              <option value="" disabled>
                Choisir une matiere
              </option>
              {subjects.map((s) => {
                const classe = classById.get(s.classeId ?? '');
                return (
                  <option key={s.id} value={s.id}>
                    {s.nom}
                    {classe ? ` · ${classe.niveau ?? classe.nom}` : ''}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="evaluations-form-row">
            <div className="evaluations-field">
              <label className="evaluations-label" htmlFor="eval-type">
                Type
              </label>
              <select
                id="eval-type"
                className="evaluations-input"
                value={type}
                onChange={(e) => {
                  const nextType = e.target.value as EvaluationType;
                  setType(nextType);
                  const fixedBase = EVALUATION_TYPE_DEFAULT_NOTE_MAX[nextType];
                  if (fixedBase !== undefined) setNoteMax(String(fixedBase));
                }}
              >
                {(Object.keys(EVALUATION_TYPE_LABELS) as EvaluationType[]).map((t) => (
                  <option key={t} value={t}>
                    {EVALUATION_TYPE_LABELS[t]}
                  </option>
                ))}
              </select>
            </div>
            <div className="evaluations-field">
              <label className="evaluations-label" htmlFor="eval-date">
                Date
              </label>
              <input
                id="eval-date"
                type="date"
                className="evaluations-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="evaluations-form-row">
            <div className="evaluations-field">
              <label className="evaluations-label" htmlFor="eval-coeff">
                Coefficient
              </label>
              <input
                id="eval-coeff"
                type="number"
                min={1}
                max={10}
                className="evaluations-input"
                value={coefficient}
                onChange={(e) => setCoefficient(e.target.value)}
                required
              />
            </div>
            <div className="evaluations-field">
              <label className="evaluations-label" htmlFor="eval-notemax">
                Note maximale
                <span className="evaluations-notemax-badge">Base : /{noteMax || '20'}</span>
              </label>
              <input
                id="eval-notemax"
                type="number"
                min={1}
                max={100}
                className="evaluations-input"
                value={noteMax}
                onChange={(e) => setNoteMax(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="evaluations-form-actions">
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
              Annuler
            </Button>
            <Button type="submit" loading={saving} disabled={!subjectId || !date}>
              Creer
            </Button>
          </div>
        </form>
      ) : null}

      {!loading ? (
        <div className="evaluations-stats-grid">
          <StatCard icon={ClipboardList} label="Evaluations au total" value={evaluations.length} tone="blue" />
          <StatCard icon={Layers} label="Matieres concernees" value={matieresConcernees} tone="purple" />
          <StatCard icon={CalendarClock} label="A venir" value={aVenir} tone="green" />
          <StatCard icon={Hourglass} label="Passees" value={passees} tone="orange" />
        </div>
      ) : null}

      {loading ? (
        <div className="evaluations-table-card">
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <Skeleton height={20} />
            </div>
          ))}
        </div>
      ) : evaluations.length === 0 ? (
        <p className="evaluations-empty">Aucune evaluation pour le moment. Cliquez sur "Nouvelle evaluation" pour commencer.</p>
      ) : (
        <div className="evaluations-table-card">
          <div className="evaluations-table-scroll">
            <table className="evaluations-table">
              <thead>
                <tr>
                  <th>Matiere</th>
                  <th>Classe</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Coefficient</th>
                  <th>Note max</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedEvaluations.map((evaluation, i) => {
                  const subject = subjectById.get(evaluation.subjectId);
                  const classe = classById.get(evaluation.classeId);
                  return (
                    <tr key={evaluation.id} className="row-fade-in" style={{ '--stagger-index': Math.min(i, 14) } as CSSProperties}>
                      <td className="evaluations-table-name">{subject?.nom ?? 'Matiere inconnue'}</td>
                      <td>{classe?.niveau ?? classe?.nom ?? '—'}</td>
                      <td>
                        <span className={`evaluations-badge evaluations-badge-${EVALUATION_TYPE_TONES[evaluation.type]}`}>
                          {EVALUATION_TYPE_LABELS[evaluation.type]}
                        </span>
                      </td>
                      <td>{evaluation.date}</td>
                      <td>{evaluation.coefficient}</td>
                      <td>{evaluation.noteMax}</td>
                      <td>
                        <button
                          className="evaluations-table-action"
                          onClick={() => handleDeleteEvaluation(evaluation)}
                          aria-label="Supprimer l'evaluation"
                        >
                          <Trash2 size={15} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
