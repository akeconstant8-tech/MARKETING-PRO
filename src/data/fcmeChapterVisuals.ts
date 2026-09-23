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

/** Visuals for the 7 chapters of the "FCME" (Fondements, Concepts, Marketing
 * et Étude du Marché) course — no photos were supplied for this course, so
 * every chapter uses a themed icon tile instead of a fabricated image. */
export const FCME_CHAPTER_VISUALS: Record<number, ChapterVisual> = {
  1: { icon: BrainCircuit, tone: 'green' },
  2: { icon: Grid3x3, tone: 'blue' },
  3: { icon: UserSearch, tone: 'purple' },
  4: { icon: MapPinned, tone: 'orange' },
  5: { icon: PieChart, tone: 'teal' },
  6: { icon: Crosshair, tone: 'indigo' },
  7: { icon: Target, tone: 'red' },
};

export function getFcmeChapterVisual(chapterNumber: number): ChapterVisual {
  return FCME_CHAPTER_VISUALS[chapterNumber] ?? { icon: BrainCircuit, tone: 'blue' };
}
