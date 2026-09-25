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
import { MI_CHAPTER_IMAGES } from './courseImages';

/** Visuals for the 9 chapters of the "Marketing International" course — no
 * photos were supplied for this course, so every chapter uses a themed icon
 * tile instead of a fabricated image. */
export const MI_CHAPTER_VISUALS: Record<number, ChapterVisual> = {
  1: { icon: Globe, tone: 'green', image: MI_CHAPTER_IMAGES[1] },
  2: { icon: Lightbulb, tone: 'blue', image: MI_CHAPTER_IMAGES[2] },
  3: { icon: Compass, tone: 'purple', image: MI_CHAPTER_IMAGES[3] },
  4: { icon: Search, tone: 'orange', image: MI_CHAPTER_IMAGES[4] },
  5: { icon: Target, tone: 'teal', image: MI_CHAPTER_IMAGES[5] },
  6: { icon: Route, tone: 'indigo', image: MI_CHAPTER_IMAGES[6] },
  7: { icon: Handshake, tone: 'red', image: MI_CHAPTER_IMAGES[7] },
  8: { icon: ClipboardList, tone: 'green', image: MI_CHAPTER_IMAGES[8] },
  9: { icon: Building2, tone: 'blue', image: MI_CHAPTER_IMAGES[9] },
};

export function getMiChapterVisual(chapterNumber: number): ChapterVisual {
  return MI_CHAPTER_VISUALS[chapterNumber] ?? { icon: Globe, tone: 'blue' };
}
