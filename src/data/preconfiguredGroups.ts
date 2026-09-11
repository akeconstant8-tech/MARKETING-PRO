/** The 6 preconfigured groups (filiere + niveau + matieres + coefficients)
 * the teacher can add in one click when creating a class. Single source of
 * truth reused by seedTeachingData.ts (one-time import) and by Classes.tsx
 * (repeatable, per-group "add" action). */

export const MATIERES = {
  TCI: 'Technique du Commerce International (TCI)',
  FCME: 'Fondements, Concepts, Marketing et Étude du Marché (FCME)',
  MARKETING: 'Marketing',
  TVN: 'Technique de Vente et de Négociation (TVN)',
  MI: 'Marketing International (MI)',
} as const;

export type MatiereKey = keyof typeof MATIERES;

/** Coefficient per matiere — applies wherever that matiere is taught. */
export const MATIERE_COEFFICIENTS: Record<MatiereKey, number> = {
  TCI: 3,
  FCME: 2,
  MARKETING: 2,
  MI: 2,
  TVN: 2,
};

export interface PreconfiguredGroup {
  id: string;
  filiereNom: string;
  niveau: string;
  matieres: MatiereKey[];
}

export const PRECONFIGURED_GROUPS: PreconfiguredGroup[] = [
  { id: 'gec-1', filiereNom: 'Gestion Commerciale (GEC)', niveau: '1ère Année', matieres: ['TCI', 'FCME', 'TVN'] },
  { id: 'gec-2', filiereNom: 'Gestion Commerciale (GEC)', niveau: '2ème Année', matieres: ['TCI', 'FCME', 'MI', 'TVN'] },
  {
    id: 'fcge-1',
    filiereNom: 'Finances-Comptabilité et Gestion des Entreprises (FCGE)',
    niveau: '1ère Année',
    matieres: ['MARKETING'],
  },
  {
    id: 'fcge-2',
    filiereNom: 'Finances-Comptabilité et Gestion des Entreprises (FCGE)',
    niveau: '2ème Année',
    matieres: ['MARKETING'],
  },
  { id: 'licence-1', filiereNom: 'Licence', niveau: '1ère Année', matieres: ['TCI', 'FCME', 'TVN'] },
  { id: 'licence-2', filiereNom: 'Licence', niveau: '2ème Année', matieres: ['TCI', 'FCME', 'MI', 'TVN'] },
];
