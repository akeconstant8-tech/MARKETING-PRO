import { useState } from 'react';
import { getAppreciation } from '../../data/appreciationScale';
import { normalizeNote } from '../../utils/calculations';
import { EVALUATION_TYPE_LABELS } from '../../data/evaluationTypes';
import type { Class, Evaluation, Filiere, Grade, Student, Subject } from '../../types';
import './Print.css';

interface Props {
  etablissementNom: string;
  teacherName: string;
  classe: Class;
  filiere?: Filiere;
  subject: Subject;
  evaluation: Evaluation;
  students: Student[];
  grades: Grade[];
}

export default function PrintGradeSheet({
  etablissementNom,
  teacherName,
  classe,
  filiere,
  subject,
  evaluation,
  students,
  grades,
}: Props) {
  const gradeByStudentId = new Map(grades.filter((g) => g.evaluationId === evaluation.id).map((g) => [g.studentId, g]));
  const [observations, setObservations] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const student of students) {
      const grade = gradeByStudentId.get(student.id);
      if (grade) initial[student.id] = getAppreciation(normalizeNote(grade.note, grade.noteMax));
    }
    return initial;
  });

  return (
    <div className="print-doc">
      <div className="print-doc-brand">MARKETING PRO</div>
      <h1 className="print-doc-title">Releve des notes</h1>

      <div className="print-doc-meta">
        <div>
          <span>Etablissement</span>
          <strong>{etablissementNom}</strong>
        </div>
        <div>
          <span>Annee academique</span>
          <strong>{classe.anneeAcademique}</strong>
        </div>
        <div>
          <span>Groupe</span>
          <strong>
            {filiere?.nom ?? '—'} · {classe.niveau ?? classe.nom}
          </strong>
        </div>
        <div>
          <span>Matiere</span>
          <strong>{subject.nom}</strong>
        </div>
        <div>
          <span>Professeur</span>
          <strong>{teacherName}</strong>
        </div>
        <div>
          <span>Evaluation</span>
          <strong>
            {EVALUATION_TYPE_LABELS[evaluation.type]} — {evaluation.date}
          </strong>
        </div>
      </div>

      <table className="print-table">
        <thead>
          <tr>
            <th className="print-col-num">N°</th>
            <th>Nom et prenom</th>
            <th className="print-col-note">Note</th>
            <th className="print-col-note">Base</th>
            <th className="print-col-note">Coefficient</th>
            <th>Observation</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => {
            const grade = gradeByStudentId.get(student.id);
            const normalized = grade ? normalizeNote(grade.note, grade.noteMax) : null;
            return (
              <tr key={student.id}>
                <td className="print-col-num">{i + 1}</td>
                <td>
                  {student.prenom} {student.nom}
                </td>
                <td className="print-col-note">{grade ? grade.note : '—'}</td>
                <td className="print-col-note">
                  /{grade?.noteMax ?? evaluation.noteMax}
                  {grade && grade.noteMax !== 20 ? (
                    <span className="print-note-conversion"> ({normalized?.toFixed(1)}/20)</span>
                  ) : null}
                </td>
                <td className="print-col-note">{evaluation.coefficient}</td>
                <td>
                  <input
                    className="print-observation-input"
                    value={observations[student.id] ?? ''}
                    onChange={(e) => setObservations((prev) => ({ ...prev, [student.id]: e.target.value }))}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="print-doc-footer">
        <span>Marketing Pro — Genere le {new Date().toLocaleDateString('fr-FR')}</span>
      </div>
    </div>
  );
}
