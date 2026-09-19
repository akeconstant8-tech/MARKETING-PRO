import type { TciChapter } from './tciTypes';
import { year1Chapter1 } from './tciYear1/chapter1';
import { year1Chapter2 } from './tciYear1/chapter2';
import { year1Chapter3 } from './tciYear1/chapter3';
import { year1Chapter4 } from './tciYear1/chapter4';
import { year1Chapter5 } from './tciYear1/chapter5';
import { year1Chapter6 } from './tciYear1/chapter6';
import { year1Chapter7 } from './tciYear1/chapter7';
import { year1Case1 } from './tciYear1/case1';
import { year1Case2 } from './tciYear1/case2';
import { year1Case3 } from './tciYear1/case3';
import { year1Case4 } from './tciYear1/case4';
import { year1Case5 } from './tciYear1/case5';

/** Support de cours « TCI 1ère Année » (BTS Gestion Commerciale) — les 7 chapitres
 * du sommaire puis les 5 cas pratiques, dans l'ordre des pages du support (p. 2 à 72). */
export const tciChaptersYear1: TciChapter[] = [
  year1Chapter1,
  year1Chapter2,
  year1Chapter3,
  year1Chapter4,
  year1Chapter5,
  year1Chapter6,
  year1Chapter7,
  year1Case1,
  year1Case2,
  year1Case3,
  year1Case4,
  year1Case5,
];

/** Sommaire (p. 1) du support de cours, tel qu'imprimé. */
export const TCI_YEAR1_SOMMAIRE = {
  titre: 'PROGRESSION TCI BTS GESTION COMMERCIALE 1ère Année',
  chapitres: [
    { titre: "Chapitre1 : L’environnement du commerce international", pages: '2- 8' },
    { titre: 'Chapitre2 : Les Incoterms 2020', pages: '9-27' },
    { titre: 'Chapitre3 : Le conditionnement et l’emballage', pages: '28-33' },
    { titre: 'Chapitre 4 : La réglementation du commerce extérieur de la Côte d’Ivoire', pages: '34-45' },
    { titre: 'Chapitre 5 : La réglementation du FINEX', pages: '46-48' },
    { titre: 'Chapitre 6 : La douane en Côte d’Ivoire', pages: '49-58' },
    { titre: 'Chapitre 7 : Le transit en Côte d’Ivoire', pages: '59-63' },
  ],
  casPratiques: [
    { titre: 'CAS CIPA', pages: '64' },
    { titre: 'CAS REHOBOTH', pages: '65' },
    { titre: 'CAS GLOIRE INFORMATIQUE', pages: '66-67' },
    { titre: 'CAS SIT', pages: '68-69' },
    { titre: 'CAS MARDOCHEE ET COMPAGNIE', pages: '70-71' },
  ],
  devise: 'JESUS est le chemin, la vérité et la vie. Jean 14 : 6',
} as const;
