import type { TciChapter } from './tciTypes';
import { fcme2Chapter1 } from './fcme2Year2/chapter1';
import { fcme2Chapter2 } from './fcme2Year2/chapter2';
import { fcme2Chapter3 } from './fcme2Year2/chapter3';
import { fcme2Chapter4 } from './fcme2Year2/chapter4';
import { fcme2Chapter5 } from './fcme2Year2/chapter5';
import { fcme2Chapter6 } from './fcme2Year2/chapter6';
import { fcme2Chapter7 } from './fcme2Year2/chapter7';
import { fcme2Chapter8 } from './fcme2Year2/chapter8';

export const FCME2_COURSE_TITLE = 'Fondements, Concepts, Marketing et Étude du Marché (FCME)';
export const FCME2_COURSE_SUBTITLE = 'BTS Gestion Commerciale — 2ème Année';

/** Support de cours « FCME — 2ème Année » : les 7 chapitres du support
 * (p. 2 à 45) suivis d'un 8ᵉ bloc « Applications » regroupant les travaux
 * dirigés et les sujets de BTS des pages 46 à 50. */
export const fcme2Chapters: TciChapter[] = [
  fcme2Chapter1,
  fcme2Chapter2,
  fcme2Chapter3,
  fcme2Chapter4,
  fcme2Chapter5,
  fcme2Chapter6,
  fcme2Chapter7,
  fcme2Chapter8,
];
