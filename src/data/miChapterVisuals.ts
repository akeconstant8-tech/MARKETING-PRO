import {
  Building2,
  ClipboardList,
  Compass,
  Globe,
  Handshake,
  Lightbulb,
  Route,
  Search,
  Target,
} from 'lucide-react';
import type { ChapterVisual } from './chapterVisuals';

/** Visuals for the 9 chapters of the "Marketing International" course — no
 * photos were supplied for this course, so every chapter uses a themed icon
 * tile instead of a fabricated image. */
export const MI_CHAPTER_VISUALS: Record<number, ChapterVisual> = {
  1: { icon: Globe, tone: 'green' },
  2: { icon: Lightbulb, tone: 'blue' },
  3: { icon: Compass, tone: 'purple' },
  4: { icon: Search, tone: 'orange' },
  5: { icon: Target, tone: 'teal' },
  6: { icon: Route, tone: 'indigo' },
  7: { icon: Handshake, tone: 'red' },
  8: { icon: ClipboardList, tone: 'green' },
  9: { icon: Building2, tone: 'blue' },
};

export function getMiChapterVisual(chapterNumber: number): ChapterVisual {
  return MI_CHAPTER_VISUALS[chapterNumber] ?? { icon: Globe, tone: 'blue' };
}
