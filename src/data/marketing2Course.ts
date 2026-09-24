import type { TciChapter } from './tciTypes';
import { mkt2Chapter1 } from './marketing2Year2/chapter1';
import { mkt2Chapter2 } from './marketing2Year2/chapter2';
import { mkt2Chapter3 } from './marketing2Year2/chapter3';
import { mkt2Chapter4 } from './marketing2Year2/chapter4';
import { mkt2Chapter5 } from './marketing2Year2/chapter5';
import { mkt2Chapter6 } from './marketing2Year2/chapter6';
import { mkt2Chapter7 } from './marketing2Year2/chapter7';
import { mkt2Chapter8 } from './marketing2Year2/chapter8';
import { mkt2Chapter9 } from './marketing2Year2/chapter9';

export const MARKETING2_COURSE_TITLE = 'Marketing';
export const MARKETING2_COURSE_SUBTITLE = 'BTS FCGE — 2ème Année';

/** Support de cours « Marketing — 2ème Année FCGE » : le commerce international
 * (5 chapitres), la gestion de la relation clientèle (3 chapitres) et les sujets
 * de BTS en annexe, dans l'ordre des pages du support (p. 2 à 51). */
export const marketing2Chapters: TciChapter[] = [
  mkt2Chapter1,
  mkt2Chapter2,
  mkt2Chapter3,
  mkt2Chapter4,
  mkt2Chapter5,
  mkt2Chapter6,
  mkt2Chapter7,
  mkt2Chapter8,
  mkt2Chapter9,
];
