import { useState } from 'react';
import { getAppreciation } from '../../data/appreciationScale';
import type { Class, Filiere } from '../../types';
import type { BulletinStudent } from '../../hooks/useBulletinData';
import './Print.css';

interface Props {
  etablissementNom: string;
  teacherName: string;
  classe: Class;
  filiere?: Filiere;
  bulletin: BulletinStudent;
  isFirst: boolean;
}

export default function PrintBulletin({ etablissementNom, teacherName, classe, filiere, bulletin, isFirst }: Props) {
  const [appreciations, setAppreciations] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const row of bulletin.subjectRows) {
      if (row.average !== null) initial[row.subject.id] = getAppreciation(row.average);
    }
    return initial;
  });

  return (
    <div className={`print-doc ${isFirst ? '' : 'print-page-break'}`}>
      <div className="print-doc-brand">MARKETING PRO</div>
      <h1 className="print-doc-title">Bulletin de notes</h1>

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
          <span>Etudiant</span>
          <strong>
            {bulletin.student.prenom} {bulletin.student.nom}
          </strong>
        </div>
        <div>
          <span>Professeur</span>
          <strong>{teacherName}</strong>
        </div>
      </div>

      <table className="print-table">
        <thead>
          <tr>
            <th>Matiere</th>
            <th className="print-col-note">Coefficient</th>
            <th>Notes</th>
            <th className="print-col-note">Moyenne</th>
            <th>Appreciation</th>
          </tr>
        </thead>
        <tbody>
          {bulletin.subjectRows.map((row) => (
            <tr key={row.subject.id}>
              <td>{row.subject.nom}</td>
              <td className="print-col-note">{row.subject.coefficient}</td>
              <td>
                {row.notes.length > 0
                  ? row.notes.map((n, i) => (
                      <span key={i} className="print-note-chip">
                        {n.note}/{n.noteMax}
                      </span>
                    ))
                  : '—'}
              </td>
              <td className="print-col-note">{row.average !== null ? row.average.toFixed(1) : '—'}</td>
              <td>
                <input
                  className="print-observation-input"
                  value={appreciations[row.subject.id] ?? ''}
                  onChange={(e) => setAppreciations((prev) => ({ ...prev, [row.subject.id]: e.target.value }))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="print-general-average">
        MOYENNE GENERALE : {bulletin.generalAverage !== null ? `${bulletin.generalAverage.toFixed(2)}/20` : '—'}
      </div>

      <div className="print-doc-footer">
        <span>Marketing Pro — Genere le {new Date().toLocaleDateString('fr-FR')}</span>
      </div>
    </div>
  );
}
