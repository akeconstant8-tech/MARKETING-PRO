import type { TciChapter } from './tciTypes';
import { miChapter1 } from './miYear2/chapter1';
import { miChapter2 } from './miYear2/chapter2';
import { miChapter3 } from './miYear2/chapter3';
import { miChapter4 } from './miYear2/chapter4';
import { miChapter5 } from './miYear2/chapter5';
import { miChapter6 } from './miYear2/chapter6';
import { miChapter7 } from './miYear2/chapter7';
import { miChapter8 } from './miYear2/chapter8';
import { miChapter9 } from './miYear2/chapter9';

export type { TciChapter as MiChapter } from './tciTypes';

export const MI_COURSE_TITLE = 'Marketing International';
export const MI_COURSE_SUBTITLE = 'BTS Gestion Commerciale — 2ème Année';

/** Support de cours « Marketing International — 2ème Année » : les 9
 * chapitres du sommaire, dans l'ordre des pages du support (p. 2 à 35). */
export const miChapters: TciChapter[] = [
  miChapter1,
  miChapter2,
  miChapter3,
  miChapter4,
  miChapter5,
  miChapter6,
  miChapter7,
  miChapter8,
  miChapter9,
];
