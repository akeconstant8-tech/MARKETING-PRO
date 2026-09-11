import { computeAverage, normalizeNote } from '../../utils/calculations';
import { EVALUATION_TYPE_LABELS } from '../../data/evaluationTypes';
import type { Class, Evaluation, Filiere, Grade, Student, Subject } from '../../types';
import './Print.css';

interface Props {
  etablissementNom: string;
  teacherName: string;
  classe: Class;
  filiere?: Filiere;
  subject: Subject;
  evaluations: Evaluation[];
  students: Student[];
  grades: Grade[];
}

/** Wide table (one column per evaluation) — laid out for A4 landscape via
 * the `print-landscape` utility class from print.css. */
export default function PrintGradeSummary({
  etablissementNom,
  teacherName,
  classe,
  filiere,
  subject,
  evaluations,
  students,
  grades,
}: Props) {
  const gradesByStudentAndEval = new Map<string, Grade>();
  for (const g of grades) {
    gradesByStudentAndEval.set(`${g.studentId}:${g.evaluationId}`, g);
  }

  function studentAverage(studentId: string): number | null {
    const items = evaluations
      .map((ev) => gradesByStudentAndEval.get(`${studentId}:${ev.id}`))
      .filter((g): g is Grade => Boolean(g))
      .map((g) => ({ note: normalizeNote(g.note, g.noteMax), coefficient: g.coefficient }));
    return computeAverage(items);
  }

  return (
    <div className="print-doc print-landscape">
      <div className="print-doc-brand">MARKETING PRO</div>
      <h1 className="print-doc-title">Recapitulatif des evaluations</h1>

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
      </div>

      <table className="print-table">
        <thead>
          <tr>
            <th className="print-col-num">N°</th>
            <th>Etudiant</th>
            {evaluations.map((ev) => (
              <th key={ev.id} className="print-col-note">
                {EVALUATION_TYPE_LABELS[ev.type]}
                <br />
                <span className="print-th-sub">/{ev.noteMax} — {ev.date}</span>
              </th>
            ))}
            <th className="print-col-note">Moyenne</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => {
            const average = studentAverage(student.id);
            return (
              <tr key={student.id}>
                <td className="print-col-num">{i + 1}</td>
                <td>
                  {student.prenom} {student.nom}
                </td>
                {evaluations.map((ev) => {
                  const grade = gradesByStudentAndEval.get(`${student.id}:${ev.id}`);
                  return (
                    <td key={ev.id} className="print-col-note">
                      {grade ? grade.note : '—'}
                    </td>
                  );
                })}
                <td className="print-col-note print-col-average">{average !== null ? `${average.toFixed(1)}/20` : '—'}</td>
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
