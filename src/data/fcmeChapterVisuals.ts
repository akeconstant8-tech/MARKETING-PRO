import {
  BrainCircuit,
  Crosshair,
  Grid3x3,
  MapPinned,
  PieChart,
  Target,
  UserSearch,
} from 'lucide-react';
import type { ChapterVisual } from './chapterVisuals';
import { FCME_CHAPTER_IMAGES } from './courseImages';

/** Visuals for the 7 chapters of the "FCME" (Fondements, Concepts, Marketing
 * et Étude du Marché) course — no photos were supplied for this course, so
 * every chapter uses a themed icon tile instead of a fabricated image. */
export const FCME_CHAPTER_VISUALS: Record<number, ChapterVisual> = {
  1: { icon: BrainCircuit, tone: 'green', image: FCME_CHAPTER_IMAGES[1] },
  2: { icon: Grid3x3, tone: 'blue', image: FCME_CHAPTER_IMAGES[2] },
  3: { icon: UserSearch, tone: 'purple', image: FCME_CHAPTER_IMAGES[3] },
  4: { icon: MapPinned, tone: 'orange', image: FCME_CHAPTER_IMAGES[4] },
  5: { icon: PieChart, tone: 'teal', image: FCME_CHAPTER_IMAGES[5] },
  6: { icon: Crosshair, tone: 'indigo', image: FCME_CHAPTER_IMAGES[6] },
  7: { icon: Target, tone: 'red', image: FCME_CHAPTER_IMAGES[7] },
};

export function getFcmeChapterVisual(chapterNumber: number): ChapterVisual {
  return FCME_CHAPTER_VISUALS[chapterNumber] ?? { icon: BrainCircuit, tone: 'blue' };
}
