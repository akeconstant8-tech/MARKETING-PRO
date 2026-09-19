import type { TciChapter } from './tciTypes';
import { tciChaptersYear1 } from './tciCourseYear1';
import { tciChaptersYear2 } from './tciCourseYear2';

export type { TciChapter, TciSection, TciTable, TciFigure, TciDiagram, TciDiagramBox, TciDiagramArrow } from './tciTypes';

export const TCI_COURSE_TITLE = 'Technique du Commerce International';
export const TCI_COURSE_SUBTITLE = "BTS Gestion Commerciale — 1ère & 2ème Année";
export const TCI_COURSE_SUBTITLE_1 = "BTS Gestion Commerciale — 1ère Année";
export const TCI_COURSE_SUBTITLE_2 = "BTS Gestion Commerciale — 2ème Année";

export const tciChapters: TciChapter[] = [...tciChaptersYear1, ...tciChaptersYear2];
