import type { TciChapter } from './tciTypes';
import { mktChapter1 } from './marketingYear1/chapter1';
import { mktChapter2 } from './marketingYear1/chapter2';
import { mktChapter3 } from './marketingYear1/chapter3';
import { mktChapter4 } from './marketingYear1/chapter4';
import { mktChapter5 } from './marketingYear1/chapter5';
import { mktChapter6 } from './marketingYear1/chapter6';
import { mktChapter7 } from './marketingYear1/chapter7';
import { mktChapter8 } from './marketingYear1/chapter8';
import { mktChapter9 } from './marketingYear1/chapter9';
import { mktChapter10 } from './marketingYear1/chapter10';
import { mktChapter11 } from './marketingYear1/chapter11';

export type { TciChapter as MarketingChapter } from './tciTypes';

export const MARKETING_COURSE_TITLE = 'Marketing';
export const MARKETING_COURSE_SUBTITLE = 'BTS FCGE — 1ère Année';

/** Support de cours « Marketing — 1ère Année » : les trois parties du
 * sommaire (Fondements marketing, Initiation aux études de marché, Le mix
 * marketing), dans l'ordre des pages du support (p. 2 à 51). */
export const marketingChapters: TciChapter[] = [
  mktChapter1,
  mktChapter2,
  mktChapter3,
  mktChapter4,
  mktChapter5,
  mktChapter6,
  mktChapter7,
  mktChapter8,
  mktChapter9,
  mktChapter10,
  mktChapter11,
];
