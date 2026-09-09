import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase';
import { addTeacherDoc } from '../services/dataService';

const ANNEE_ACADEMIQUE = '2026-2027';

const MATIERES = {
  TCI: 'Technique du Commerce International (TCI)',
  FCME: 'Fondements, Concepts, Marketing et Étude du Marché (FCME)',
  MARKETING: 'Marketing',
  TVN: 'Technique de Vente et de Négociation (TVN)',
  MI: 'Marketing International (MI)',
} as const;

const FILIERES = [
  { key: 'GEC', nom: 'Gestion Commerciale (GEC)' },
  { key: 'FCGE', nom: 'Finances-Comptabilité et Gestion des Entreprises (FCGE)' },
  { key: 'LICENCE', nom: 'Licence' },
] as const;

type FiliereKey = (typeof FILIERES)[number]['key'];

const CLASSES: { filiere: FiliereKey; niveau: string; matieres: (keyof typeof MATIERES)[] }[] = [
  { filiere: 'GEC', niveau: '1ère Année', matieres: ['TCI', 'FCME', 'TVN'] },
  { filiere: 'GEC', niveau: '2ème Année', matieres: ['TCI', 'FCME', 'MI', 'TVN'] },
  { filiere: 'FCGE', niveau: '1ère Année', matieres: ['MARKETING'] },
  { filiere: 'FCGE', niveau: '2ème Année', matieres: ['MARKETING'] },
  { filiere: 'LICENCE', niveau: '1ère Année', matieres: ['TCI', 'FCME', 'TVN'] },
  { filiere: 'LICENCE', niveau: '2ème Année', matieres: ['TCI', 'FCME', 'MI', 'TVN'] },
];

export async function teachingStructureAlreadySeeded(teacherId: string): Promise<boolean> {
  const q = query(collection(db, 'filieres'), where('teacherId', '==', teacherId), where('nom', '==', FILIERES[0].nom));
  const snapshot = await getDocs(q);
  return !snapshot.empty;
}

/** One-time import of the teacher's real filieres/classes/matieres structure. */
export async function seedTeachingStructure(teacherId: string): Promise<{ filieres: number; classes: number; matieres: number }> {
  const filiereIds: Record<FiliereKey, string> = { GEC: '', FCGE: '', LICENCE: '' };
  for (const f of FILIERES) {
    filiereIds[f.key] = await addTeacherDoc('filieres', { teacherId, nom: f.nom, createdAt: new Date().toISOString() });
  }

  let matiereCount = 0;
  for (const classe of CLASSES) {
    const classId = await addTeacherDoc('classes', {
      teacherId,
      nom: `${FILIERES.find((f) => f.key === classe.filiere)!.nom.split(' (')[0]} - ${classe.niveau}`,
      niveau: classe.niveau,
      filiereId: filiereIds[classe.filiere],
      anneeAcademique: ANNEE_ACADEMIQUE,
      createdAt: new Date().toISOString(),
    });

    for (const matiereKey of classe.matieres) {
      await addTeacherDoc('subjects', {
        teacherId,
        nom: MATIERES[matiereKey],
        coefficient: 1,
        classeId: classId,
        createdAt: new Date().toISOString(),
      });
      matiereCount++;
    }
  }

  return { filieres: FILIERES.length, classes: CLASSES.length, matieres: matiereCount };
}
