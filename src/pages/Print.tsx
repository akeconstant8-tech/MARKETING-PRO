import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Check, ClipboardList, FileText, Layers, Printer, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useEstablishment } from '../context/EstablishmentContext';
import { useTeacherCollection } from '../hooks/useTeacherCollection';
import { useBulletinData } from '../hooks/useBulletinData';
import Button from '../components/Button';
import PrintGradeSheet from '../components/print/PrintGradeSheet';
import PrintGradeSummary from '../components/print/PrintGradeSummary';
import PrintBulletin from '../components/print/PrintBulletin';
import type { Class, Evaluation, Filiere, Grade, Student, Subject } from '../types';
import './Print.css';

type Mode = 'menu' | 'notes' | 'bulletins';
type NotesScope = 'single' | 'multi';

const MENU_ITEMS: { mode: Mode; icon: typeof FileText; title: string; subtitle: string }[] = [
  { mode: 'notes', icon: FileText, title: 'Imprimer les notes', subtitle: "Releve d'une evaluation, ou recapitulatif de plusieurs" },
  { mode: 'bulletins', icon: ClipboardList, title: 'Imprimer les bulletins', subtitle: "Bulletin d'un etudiant ou de toute une classe" },
];

export default function Print() {
  const { user } = useAuth();
  const { etablissements, activeId } = useEstablishment();
  const { items: classes } = useTeacherCollection<Class>('classes', 'nom');
  const { items: filieres } = useTeacherCollection<Filiere>('filieres', 'nom');
  const { items: subjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const { items: evaluations } = useTeacherCollection<Evaluation>('evaluations', 'date');
  const { items: students } = useTeacherCollection<Student>('students', 'nom');
  const { items: grades } = useTeacherCollection<Grade>('grades', 'studentId');

  const etablissementNom = etablissements.find((e) => e.id === activeId)?.nom ?? 'Tous etablissements';
  const teacherName = user?.displayName || 'Professeur';

  const [mode, setMode] = useState<Mode>('menu');
  const [notesScope, setNotesScope] = useState<NotesScope>('single');
  const [previewing, setPreviewing] = useState(false);

  const [printPulse, setPrintPulse] = useState(false);

  function handlePrint() {
    setPrintPulse(true);
    window.print();
    window.setTimeout(() => setPrintPulse(false), 400);
  }

  const [classeId, setClasseId] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [evaluationId, setEvaluationId] = useState('');
  const [multiEvalIds, setMultiEvalIds] = useState<Set<string>>(new Set());
  const [selectedStudentIds, setSelectedStudentIds] = useState<Set<string>>(new Set());
  const [bulletinScope, setBulletinScope] = useState<'one' | 'class'>('one');
  const [bulletinStudentId, setBulletinStudentId] = useState('');

  const classById = useMemo(() => new Map(classes.map((c) => [c.id, c])), [classes]);
  const filiereById = useMemo(() => new Map(filieres.map((f) => [f.id, f])), [filieres]);
  const subjectById = useMemo(() => new Map(subjects.map((s) => [s.id, s])), [subjects]);

  const classSubjects = useMemo(() => subjects.filter((s) => s.classeId === classeId), [subjects, classeId]);
  const subjectEvaluations = useMemo(
    () => evaluations.filter((e) => e.subjectId === subjectId).sort((a, b) => b.date.localeCompare(a.date)),
    [evaluations, subjectId]
  );
  const classStudents = useMemo(
    () =>
      students
        .filter((s) => s.classeId === classeId)
        .sort((a, b) => a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom)),
    [students, classeId]
  );

  useEffect(() => {
    setSelectedStudentIds(new Set(classStudents.map((s) => s.id)));
  }, [classStudents]);

  const bulletinData = useBulletinData(mode === 'bulletins' && classeId ? classeId : null);

  function backToMenu() {
    setMode('menu');
    setPreviewing(false);
    setClasseId('');
    setSubjectId('');
    setEvaluationId('');
    setMultiEvalIds(new Set());
    setBulletinStudentId('');
  }

  function selectClasse(id: string) {
    setClasseId(id);
    setSubjectId('');
    setEvaluationId('');
    setMultiEvalIds(new Set());
    setBulletinStudentId('');
  }

  function selectSubject(id: string) {
    setSubjectId(id);
    setEvaluationId('');
    setMultiEvalIds(new Set());
  }

  function toggleStudent(id: string) {
    setSelectedStudentIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleMultiEval(id: string) {
    setMultiEvalIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const canPreviewNotesSingle = Boolean(classeId && subjectId && evaluationId && selectedStudentIds.size > 0);
  const canPreviewNotesMulti = Boolean(classeId && subjectId && multiEvalIds.size > 0);
  const canPreviewBulletin = Boolean(classeId && (bulletinScope === 'class' || bulletinStudentId));

  if (previewing) {
    return (
      <div className="print-page">
        <div className="print-preview-actions no-print">
          <Button variant="outline" onClick={() => setPreviewing(false)}>
            <ArrowLeft size={16} />
            Retour
          </Button>
          <Button variant="primary" className={printPulse ? 'print-btn-pulse' : ''} onClick={handlePrint}>
            <Printer size={16} />
            Imprimer
          </Button>
        </div>

        {mode === 'notes' && notesScope === 'single' && classeId && subjectId && evaluationId ? (
          <PrintGradeSheet
            etablissementNom={etablissementNom}
            teacherName={teacherName}
            classe={classById.get(classeId)!}
            filiere={filiereById.get(classById.get(classeId)?.filiereId ?? '')}
            subject={subjectById.get(subjectId)!}
            evaluation={evaluations.find((e) => e.id === evaluationId)!}
            students={classStudents.filter((s) => selectedStudentIds.has(s.id))}
            grades={grades}
          />
        ) : null}

        {mode === 'notes' && notesScope === 'multi' && classeId && subjectId ? (
          <PrintGradeSummary
            etablissementNom={etablissementNom}
            teacherName={teacherName}
            classe={classById.get(classeId)!}
            filiere={filiereById.get(classById.get(classeId)?.filiereId ?? '')}
            subject={subjectById.get(subjectId)!}
            evaluations={subjectEvaluations.filter((e) => multiEvalIds.has(e.id))}
            students={classStudents}
            grades={grades}
          />
        ) : null}

        {mode === 'bulletins' && classeId
          ? bulletinData.bulletins
              .filter((b) => bulletinScope === 'class' || b.student.id === bulletinStudentId)
              .map((b, i) => (
                <PrintBulletin
                  key={b.student.id}
                  etablissementNom={etablissementNom}
                  teacherName={teacherName}
                  classe={classById.get(classeId)!}
                  filiere={filiereById.get(classById.get(classeId)?.filiereId ?? '')}
                  bulletin={b}
                  isFirst={i === 0}
                />
              ))
          : null}
      </div>
    );
  }

  return (
    <div className="print-page fade-in-up">
      <div className="print-header">
        <div className="print-header-icon">
          <Printer size={22} />
        </div>
        <div>
          <h2 className="print-title">Imprimer</h2>
          <p className="print-subtitle">
            Etablissement actif : <strong>{etablissementNom}</strong>
          </p>
        </div>
      </div>

      {mode === 'menu' ? (
        <div className="print-menu-grid">
          {MENU_ITEMS.map((item) => (
            <button key={item.mode} className="print-menu-tile" onClick={() => setMode(item.mode)}>
              <div className="print-menu-tile-icon">
                <item.icon size={22} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="print-flow">
          <button className="print-back-link" onClick={backToMenu}>
            <ArrowLeft size={15} />
            Retour au menu
          </button>

          {mode === 'notes' ? (
            <div className="print-scope-toggle print-notes-scope">
              <button
                type="button"
                className={notesScope === 'single' ? 'print-scope-btn print-scope-btn-active' : 'print-scope-btn'}
                onClick={() => {
                  setNotesScope('single');
                  setMultiEvalIds(new Set());
                }}
              >
                Une evaluation
              </button>
              <button
                type="button"
                className={notesScope === 'multi' ? 'print-scope-btn print-scope-btn-active' : 'print-scope-btn'}
                onClick={() => {
                  setNotesScope('multi');
                  setEvaluationId('');
                }}
              >
                Plusieurs evaluations
              </button>
            </div>
          ) : null}

          <div className="print-flow-steps">
            <div className="print-field">
              <label className="print-label">Groupe</label>
              <select className="print-select" value={classeId} onChange={(e) => selectClasse(e.target.value)}>
                <option value="" disabled>
                  Choisir un groupe
                </option>
                {classes.map((c) => (
                  <option key={c.id} value={c.id}>
                    {(filiereById.get(c.filiereId ?? '')?.nom ?? '—') + ' · ' + (c.niveau ?? c.nom)}
                  </option>
                ))}
              </select>
            </div>

            {mode !== 'bulletins' && classeId ? (
              <div className="print-field">
                <label className="print-label">Matiere</label>
                <select className="print-select" value={subjectId} onChange={(e) => selectSubject(e.target.value)}>
                  <option value="" disabled>
                    Choisir une matiere
                  </option>
                  {classSubjects.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.nom}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            {mode === 'notes' && notesScope === 'single' && subjectId ? (
              <div className="print-field">
                <label className="print-label">Evaluation</label>
                <select className="print-select" value={evaluationId} onChange={(e) => setEvaluationId(e.target.value)}>
                  <option value="" disabled>
                    Choisir une evaluation
                  </option>
                  {subjectEvaluations.map((ev) => (
                    <option key={ev.id} value={ev.id}>
                      {ev.date} — /{ev.noteMax}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            {mode === 'notes' && notesScope === 'multi' && subjectId ? (
              <div className="print-field">
                <label className="print-label">Evaluations a inclure</label>
                <div className="print-checklist">
                  {subjectEvaluations.length === 0 ? (
                    <p className="print-empty">Aucune evaluation pour cette matiere.</p>
                  ) : (
                    subjectEvaluations.map((ev) => (
                      <label key={ev.id} className="print-checkbox-row">
                        <input
                          type="checkbox"
                          checked={multiEvalIds.has(ev.id)}
                          onChange={() => toggleMultiEval(ev.id)}
                        />
                        <span>
                          {ev.date} — /{ev.noteMax}
                        </span>
                      </label>
                    ))
                  )}
                </div>
              </div>
            ) : null}

            {mode === 'notes' && notesScope === 'single' && evaluationId ? (
              <div className="print-field">
                <label className="print-label">
                  <Users size={14} /> Etudiants ({selectedStudentIds.size}/{classStudents.length})
                </label>
                <div className="print-checklist">
                  {classStudents.map((s) => (
                    <label key={s.id} className="print-checkbox-row">
                      <input type="checkbox" checked={selectedStudentIds.has(s.id)} onChange={() => toggleStudent(s.id)} />
                      <span>
                        {s.prenom} {s.nom}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ) : null}

            {mode === 'bulletins' && classeId ? (
              <div className="print-field">
                <label className="print-label">
                  <Layers size={14} /> Portee
                </label>
                <div className="print-scope-toggle">
                  <button
                    type="button"
                    className={bulletinScope === 'one' ? 'print-scope-btn print-scope-btn-active' : 'print-scope-btn'}
                    onClick={() => setBulletinScope('one')}
                  >
                    Un etudiant
                  </button>
                  <button
                    type="button"
                    className={bulletinScope === 'class' ? 'print-scope-btn print-scope-btn-active' : 'print-scope-btn'}
                    onClick={() => setBulletinScope('class')}
                  >
                    Toute la classe
                  </button>
                </div>
                {bulletinScope === 'one' ? (
                  <select
                    className="print-select"
                    value={bulletinStudentId}
                    onChange={(e) => setBulletinStudentId(e.target.value)}
                  >
                    <option value="" disabled>
                      Choisir un etudiant
                    </option>
                    {classStudents.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.prenom} {s.nom}
                      </option>
                    ))}
                  </select>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="print-flow-actions">
            {mode === 'notes' && notesScope === 'single' ? (
              <Button variant="primary" disabled={!canPreviewNotesSingle} onClick={() => setPreviewing(true)}>
                <Check size={16} />
                Apercu
              </Button>
            ) : null}
            {mode === 'notes' && notesScope === 'multi' ? (
              <Button variant="primary" disabled={!canPreviewNotesMulti} onClick={() => setPreviewing(true)}>
                <Check size={16} />
                Apercu
              </Button>
            ) : null}
            {mode === 'bulletins' ? (
              <Button variant="primary" disabled={!canPreviewBulletin} onClick={() => setPreviewing(true)}>
                <Check size={16} />
                Apercu
              </Button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
