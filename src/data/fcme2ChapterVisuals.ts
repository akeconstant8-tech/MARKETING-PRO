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

/** Visuals for the 8 chapters of the "FCME 2ème Année" course — no photos were
 * supplied, so every chapter uses a themed icon tile instead of a fabricated
 * image. */
export const FCME2_CHAPTER_VISUALS: Record<number, ChapterVisual> = {
  1: { icon: Search, tone: 'green' },
  2: { icon: ListChecks, tone: 'blue' },
  3: { icon: Layers, tone: 'purple' },
  4: { icon: FileSpreadsheet, tone: 'orange' },
  5: { icon: FileText, tone: 'teal' },
  6: { icon: Users2, tone: 'indigo' },
  7: { icon: LineChart, tone: 'red' },
  8: { icon: ClipboardCheck, tone: 'green' },
};

export function getFcme2ChapterVisual(chapterNumber: number): ChapterVisual {
  return FCME2_CHAPTER_VISUALS[chapterNumber] ?? { icon: Search, tone: 'blue' };
}
