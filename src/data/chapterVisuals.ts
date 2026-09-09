import {
  BarChart3,
  Briefcase,
  Globe,
  Landmark,
  Package,
  Scale,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from 'lucide-react';
import imgMonde from '../assets/images/chapters/commerce-monde.jpg';
import imgBateau from '../assets/images/chapters/commerce-bateau.jpg';
import imgEmballage from '../assets/images/chapters/commerce-emballage.jpg';
import imgReglementation from '../assets/images/chapters/commerce-reglementation.jpg';
import imgFinex from '../assets/images/chapters/commerce-finex.jpg';
import imgDouane from '../assets/images/chapters/commerce-douane.jpg';
import imgTransit from '../assets/images/chapters/commerce-transit.jpg';
import imgCasSit from '../assets/images/chapters/commerce-cas-sit.jpg';
import imgCasCipa from '../assets/images/chapters/commerce-cas-cipa.jpg';
import imgCasRehoboth from '../assets/images/chapters/commerce-cas-rehoboth.jpg';
import imgCasGloire from '../assets/images/chapters/commerce-cas-gloire.jpg';
import imgCasMardochee from '../assets/images/chapters/commerce-cas-mardochee.jpg';

export interface ChapterVisual {
  icon: LucideIcon;
  tone: string;
  image?: string;
}

const CAS_PRATIQUE_TONES = ['blue', 'green', 'purple', 'orange', 'teal'];

/** Visuals for the 12 TCI chapters, shared across every page that lists
 * them (Dashboard, Matieres, Cours) so the same chapter always looks the
 * same everywhere. */
export const CHAPTER_VISUALS: Record<number, ChapterVisual> = {
  1: { icon: Globe, tone: 'green', image: imgMonde },
  2: { icon: BarChart3, tone: 'blue', image: imgBateau },
  3: { icon: Package, tone: 'purple', image: imgEmballage },
  4: { icon: Scale, tone: 'orange', image: imgReglementation },
  5: { icon: Landmark, tone: 'teal', image: imgFinex },
  6: { icon: ShieldCheck, tone: 'indigo', image: imgDouane },
  7: { icon: Truck, tone: 'red', image: imgTransit },
  8: { icon: Briefcase, tone: CAS_PRATIQUE_TONES[0], image: imgCasCipa },
  9: { icon: Briefcase, tone: CAS_PRATIQUE_TONES[1], image: imgCasRehoboth },
  10: { icon: Briefcase, tone: CAS_PRATIQUE_TONES[2], image: imgCasGloire },
  11: { icon: Briefcase, tone: CAS_PRATIQUE_TONES[3], image: imgCasSit },
  12: { icon: Briefcase, tone: CAS_PRATIQUE_TONES[4], image: imgCasMardochee },
};

export function getChapterVisual(chapterNumber: number): ChapterVisual {
  return CHAPTER_VISUALS[chapterNumber] ?? { icon: Globe, tone: 'blue' };
}
