import {
  ClipboardCheck,
  FileSpreadsheet,
  FileText,
  Layers,
  LineChart,
  ListChecks,
  Search,
  Users2,
} from 'lucide-react';
import type { ChapterVisual } from './chapterVisuals';
import { FCME2_CHAPTER_IMAGES } from './courseImages';

/** Visuals for the 8 chapters of the "FCME 2ème Année" course — no photos were
 * supplied, so every chapter uses a themed icon tile instead of a fabricated
 * image. */
export const FCME2_CHAPTER_VISUALS: Record<number, ChapterVisual> = {
  1: { icon: Search, tone: 'green', image: FCME2_CHAPTER_IMAGES[1] },
  2: { icon: ListChecks, tone: 'blue', image: FCME2_CHAPTER_IMAGES[2] },
  3: { icon: Layers, tone: 'purple', image: FCME2_CHAPTER_IMAGES[3] },
  4: { icon: FileSpreadsheet, tone: 'orange', image: FCME2_CHAPTER_IMAGES[4] },
  5: { icon: FileText, tone: 'teal', image: FCME2_CHAPTER_IMAGES[5] },
  6: { icon: Users2, tone: 'indigo', image: FCME2_CHAPTER_IMAGES[6] },
  7: { icon: LineChart, tone: 'red', image: FCME2_CHAPTER_IMAGES[7] },
  8: { icon: ClipboardCheck, tone: 'green', image: FCME2_CHAPTER_IMAGES[8] },
};

export function getFcme2ChapterVisual(chapterNumber: number): ChapterVisual {
  return FCME2_CHAPTER_VISUALS[chapterNumber] ?? { icon: Search, tone: 'blue' };
}
