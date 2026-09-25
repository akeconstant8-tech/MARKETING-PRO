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
import { MARKETING1_CHAPTER_IMAGES } from './courseImages';

/** Visuals for the 11 chapters/leçons of the "Marketing" 1ère Année course —
 * no photos were supplied for this course, so every chapter uses a themed
 * icon tile instead of a fabricated image. */
export const MARKETING_CHAPTER_VISUALS: Record<number, ChapterVisual> = {
  1: { icon: Telescope, tone: 'green', image: MARKETING1_CHAPTER_IMAGES[1] },
  2: { icon: Compass, tone: 'blue', image: MARKETING1_CHAPTER_IMAGES[2] },
  3: { icon: Layers, tone: 'purple', image: MARKETING1_CHAPTER_IMAGES[3] },
  4: { icon: BarChart3, tone: 'orange', image: MARKETING1_CHAPTER_IMAGES[4] },
  5: { icon: SearchCheck, tone: 'teal', image: MARKETING1_CHAPTER_IMAGES[5] },
  6: { icon: ClipboardList, tone: 'indigo', image: MARKETING1_CHAPTER_IMAGES[6] },
  7: { icon: PackageSearch, tone: 'red', image: MARKETING1_CHAPTER_IMAGES[7] },
  8: { icon: ShoppingBag, tone: 'green', image: MARKETING1_CHAPTER_IMAGES[8] },
  9: { icon: Tags, tone: 'blue', image: MARKETING1_CHAPTER_IMAGES[9] },
  10: { icon: Truck, tone: 'purple', image: MARKETING1_CHAPTER_IMAGES[10] },
  11: { icon: Megaphone, tone: 'orange', image: MARKETING1_CHAPTER_IMAGES[11] },
};

export function getMarketingChapterVisual(chapterNumber: number): ChapterVisual {
  return MARKETING_CHAPTER_VISUALS[chapterNumber] ?? { icon: Telescope, tone: 'blue' };
}
