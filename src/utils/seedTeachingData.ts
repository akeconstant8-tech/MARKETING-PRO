import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase';
import { addTeacherDoc } from '../services/dataService';
import { MATIERE_COEFFICIENTS, MATIERES, PRECONFIGURED_GROUPS } from '../data/preconfiguredGroups';

const ANNEE_ACADEMIQUE = '2026-2027';

export async function teachingStructureAlreadySeeded(teacherId: string): Promise<boolean> {
  const q = query(
    collection(db, 'filieres'),
    where('teacherId', '==', teacherId),
    where('nom', '==', PRECONFIGURED_GROUPS[0].filiereNom)
  );
  const snapshot = await getDocs(q);
  return !snapshot.empty;
}

/** One-time import of the teacher's real filieres/classes/matieres structure
 * (all 6 preconfigured groups, with the correct per-matiere coefficients). */
export async function seedTeachingStructure(
  teacherId: string,
  etablissementId?: string | null
): Promise<{ filieres: number; classes: number; matieres: number }> {
  const filiereIds = new Map<string, string>();
  let matiereCount = 0;

  for (const group of PRECONFIGURED_GROUPS) {
    let filiereId = filiereIds.get(group.filiereNom);
    if (!filiereId) {
      filiereId = await addTeacherDoc('filieres', {
        teacherId,
        etablissementId: etablissementId ?? null,
        nom: group.filiereNom,
        createdAt: new Date().toISOString(),
      });
      filiereIds.set(group.filiereNom, filiereId);
    }

    const classId = await addTeacherDoc('classes', {
      teacherId,
      etablissementId: etablissementId ?? null,
      nom: `${group.filiereNom.split(' (')[0]} - ${group.niveau}`,
      niveau: group.niveau,
      filiereId,
      anneeAcademique: ANNEE_ACADEMIQUE,
      createdAt: new Date().toISOString(),
    });

    for (const matiereKey of group.matieres) {
      await addTeacherDoc('subjects', {
        teacherId,
        etablissementId: etablissementId ?? null,
        nom: MATIERES[matiereKey],
        coefficient: MATIERE_COEFFICIENTS[matiereKey],
        classeId: classId,
        createdAt: new Date().toISOString(),
      });
      matiereCount++;
    }
  }

  return { filieres: filiereIds.size, classes: PRECONFIGURED_GROUPS.length, matieres: matiereCount };
}
