import { Anchor, Banknote, FileBadge, Gavel, Globe2, HeartHandshake, Package, Users, UsersRound } from 'lucide-react';
import type { ChapterVisual } from './chapterVisuals';

/** Visuals for the 9 chapters of the "Marketing 2ème Année FCGE" course — no
 * photos supplied, so each chapter uses a themed icon tile. */
export const MARKETING2_CHAPTER_VISUALS: Record<number, ChapterVisual> = {
  1: { icon: Globe2, tone: 'green' },
  2: { icon: Anchor, tone: 'blue' },
  3: { icon: Package, tone: 'purple' },
  4: { icon: Gavel, tone: 'orange' },
  5: { icon: Banknote, tone: 'teal' },
  6: { icon: UsersRound, tone: 'indigo' },
  7: { icon: Users, tone: 'red' },
  8: { icon: HeartHandshake, tone: 'green' },
  9: { icon: FileBadge, tone: 'blue' },
};

export function getMarketing2ChapterVisual(chapterNumber: number): ChapterVisual {
  return MARKETING2_CHAPTER_VISUALS[chapterNumber] ?? { icon: Globe2, tone: 'blue' };
}
