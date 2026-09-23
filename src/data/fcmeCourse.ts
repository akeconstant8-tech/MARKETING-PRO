import type { TciChapter } from './tciTypes';
import { fcmeChapter1 } from './fcmeYear1/chapter1';
import { fcmeChapter2 } from './fcmeYear1/chapter2';
import { fcmeChapter3 } from './fcmeYear1/chapter3';
import { fcmeChapter4 } from './fcmeYear1/chapter4';
import { fcmeChapter5 } from './fcmeYear1/chapter5';
import { fcmeChapter6 } from './fcmeYear1/chapter6';
import { fcmeChapter7 } from './fcmeYear1/chapter7';

export type { TciChapter as FcmeChapter } from './tciTypes';

export const FCME_COURSE_TITLE = 'Fondements, Concepts, Marketing et Étude du Marché (FCME)';
export const FCME_COURSE_SUBTITLE = 'BTS GEC — 1ère Année';

/** Support de cours « FCME — 1ère Année » : les 7 chapitres du support, dans
 * l'ordre où ils apparaissent réellement dans le document (p. 3 à 52) — cet
 * ordre diffère légèrement de l'intitulé des chapitres 3/4 dans le sommaire
 * imprimé en page 1, qui contient une inversion ; le contenu du corps du
 * document fait foi. */
export const fcmeChapters: TciChapter[] = [
  fcmeChapter1,
  fcmeChapter2,
  fcmeChapter3,
  fcmeChapter4,
  fcmeChapter5,
  fcmeChapter6,
  fcmeChapter7,
];
