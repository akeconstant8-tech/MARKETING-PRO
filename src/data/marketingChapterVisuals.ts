import {
  BarChart3,
  ClipboardList,
  Compass,
  Layers,
  Megaphone,
  PackageSearch,
  SearchCheck,
  ShoppingBag,
  Tags,
  Telescope,
  Truck,
} from 'lucide-react';
import type { ChapterVisual } from './chapterVisuals';

/** Visuals for the 11 chapters/leçons of the "Marketing" 1ère Année course —
 * no photos were supplied for this course, so every chapter uses a themed
 * icon tile instead of a fabricated image. */
export const MARKETING_CHAPTER_VISUALS: Record<number, ChapterVisual> = {
  1: { icon: Telescope, tone: 'green' },
  2: { icon: Compass, tone: 'blue' },
  3: { icon: Layers, tone: 'purple' },
  4: { icon: BarChart3, tone: 'orange' },
  5: { icon: SearchCheck, tone: 'teal' },
  6: { icon: ClipboardList, tone: 'indigo' },
  7: { icon: PackageSearch, tone: 'red' },
  8: { icon: ShoppingBag, tone: 'green' },
  9: { icon: Tags, tone: 'blue' },
  10: { icon: Truck, tone: 'purple' },
  11: { icon: Megaphone, tone: 'orange' },
};

export function getMarketingChapterVisual(chapterNumber: number): ChapterVisual {
  return MARKETING_CHAPTER_VISUALS[chapterNumber] ?? { icon: Telescope, tone: 'blue' };
}
