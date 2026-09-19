import type { TciChapter } from './tciTypes';
import { year2Chapter1 } from './tciYear2/chapter1';
import { year2Chapter2 } from './tciYear2/chapter2';
import { year2Chapter3 } from './tciYear2/chapter3';
import { year2Chapter4 } from './tciYear2/chapter4';
import { year2Chapter5 } from './tciYear2/chapter5';
import { year2Chapter6 } from './tciYear2/chapter6';
import { year2Chapter7 } from './tciYear2/chapter7';
import { year2Cases } from './tciYear2/cases';

/** Support de cours « TCI 2ème Année » (BTS Gestion Commerciale, 2025-2026) —
 * les 7 chapitres du sommaire puis les études de cas pratiques, dans l'ordre
 * des pages du support (p. 2 à 80). */
export const tciChaptersYear2: TciChapter[] = [
  year2Chapter1,
  year2Chapter2,
  year2Chapter3,
  year2Chapter4,
  year2Chapter5,
  year2Chapter6,
  year2Chapter7,
  ...year2Cases,
];

/** Page de garde (p. 0) du support de cours. */
export const TCI_YEAR2_COVER = {
  ministere: "MINISTERE DE L'ENSEIGNEMENT SUPERIEUR ET DE LA RECHERCHE SCIENTIFIQUE",
  republique: "REPUBLIQUE DE COTE D'IVOIRE — UNION-DISCIPLINE-TRAVAIL",
  etablissement: 'ISTM — Institut Supérieur des Technologies et de Management',
  titre: 'SUPPORT DE COURS — TECHNIQUE DU COMMERCE INTERNATIONAL',
  filiere: 'GESTION COMMERCIALE',
  annee: 'BTS 2ème Année',
  anneeAcademique: '2025-2026',
  auteur: 'PROFESSEUR BLEY — 05 05 62 54 25 / 07 59 45 85 24',
  etudiant: 'FOFANA MASSIBIRI — 05 45 86 98 28',
} as const;

/** Sommaire (p. 1) du support de cours, tel qu'imprimé. */
export const TCI_YEAR2_SOMMAIRE = {
  chapitres: [
    { titre: 'CHAPITRE 1 : LES INCOTERMS 2020', pages: 'P2-13' },
    { titre: "CHAPITRE 2 : L'ASSURANCE TRANSPORT", pages: 'P14-24' },
    { titre: 'CHAPITRE 3 : LE TRANSPORT MARITIME', pages: 'P25-37' },
    { titre: 'CHAPITRE 4 : LE TRANSPORT AERIEN', pages: 'P38-43' },
    { titre: 'CHAPITRE 5 : LES PAIEMENTS INTERNATIONAUX', pages: 'P44-57' },
    { titre: 'CHAPITRE 6 : LES PROBLEMES FINANCIERS DU COMMERCE INTERNATIONAL', pages: 'P58-63' },
    { titre: "CHAPITRE 7 : LA GESTION DES COMMANDES A L'IMPORTATION ET A L'EXPORTATION", pages: 'P64-69' },
  ],
  casPratiques: [
    { titre: 'CAS MARDOCHEE ET COMPAGNIE', pages: 'P71' },
    { titre: 'CAS ISRAEL ET FILS', pages: 'P72' },
    { titre: 'CAS REBECCA', pages: 'P73' },
    { titre: 'CAS ETS YESHUA', pages: 'P74' },
    { titre: 'CAS DAVID', pages: 'P75' },
    { titre: 'CAS YEGESSOUM', pages: 'P76' },
    { titre: 'CAS CAVE DE YOP', pages: 'P77' },
    { titre: 'CAS VICTOIRE SA', pages: 'P78' },
    { titre: 'CAS SHADRAC', pages: 'P79' },
    { titre: 'CAS CIT', pages: 'P80' },
    { titre: 'CAS GLOIRE', pages: 'P81' },
    { titre: 'CAS EMMANUEL', pages: 'P82-83' },
    { titre: 'CAS MAGE SA', pages: 'P84-85' },
  ],
} as const;
