import { Anchor, Banknote, FileBadge, Gavel, Globe2, HeartHandshake, Package, Users, UsersRound } from 'lucide-react';
import type { ChapterVisual } from './chapterVisuals';
import { MARKETING2_CHAPTER_IMAGES } from './courseImages';

/** Visuals for the 9 chapters of the "Marketing 2ème Année FCGE" course — no
 * photos supplied, so each chapter uses a themed icon tile. */
export const MARKETING2_CHAPTER_VISUALS: Record<number, ChapterVisual> = {
  1: { icon: Globe2, tone: 'green', image: MARKETING2_CHAPTER_IMAGES[1] },
  2: { icon: Anchor, tone: 'blue', image: MARKETING2_CHAPTER_IMAGES[2] },
  3: { icon: Package, tone: 'purple', image: MARKETING2_CHAPTER_IMAGES[3] },
  4: { icon: Gavel, tone: 'orange', image: MARKETING2_CHAPTER_IMAGES[4] },
  5: { icon: Banknote, tone: 'teal', image: MARKETING2_CHAPTER_IMAGES[5] },
  6: { icon: UsersRound, tone: 'indigo', image: MARKETING2_CHAPTER_IMAGES[6] },
  7: { icon: Users, tone: 'red', image: MARKETING2_CHAPTER_IMAGES[7] },
  8: { icon: HeartHandshake, tone: 'green', image: MARKETING2_CHAPTER_IMAGES[8] },
  9: { icon: FileBadge, tone: 'blue', image: MARKETING2_CHAPTER_IMAGES[9] },
};

export function getMarketing2ChapterVisual(chapterNumber: number): ChapterVisual {
  return MARKETING2_CHAPTER_VISUALS[chapterNumber] ?? { icon: Globe2, tone: 'blue' };
}
