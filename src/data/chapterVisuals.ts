import {
  Banknote,
  BarChart3,
  Briefcase,
  ClipboardList,
  Globe,
  Handshake,
  Landmark,
  Package,
  Plane,
  Scale,
  Ship,
  ShieldCheck,
  TrendingUp,
  Truck,
  Umbrella,
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
import imgIncoterms2 from '../assets/images/chapters/commerce-incoterms2.jpg';
import imgAssurance2 from '../assets/images/chapters/commerce-assurance2.jpg';
import imgMaritime2 from '../assets/images/chapters/commerce-maritime2.jpg';
import imgAerien2 from '../assets/images/chapters/commerce-aerien2.jpg';
import imgPaiements2 from '../assets/images/chapters/commerce-paiements2.jpg';
import imgFinanciers2 from '../assets/images/chapters/commerce-financiers2.jpg';
import imgGestionCommande2 from '../assets/images/chapters/commerce-gestion-commande2.jpg';
import imgCasIsrael from '../assets/images/chapters/commerce-cas-israel.jpg';
import imgCasYeshua from '../assets/images/chapters/commerce-cas-yeshua.jpg';
import imgCasCaveYop from '../assets/images/chapters/commerce-cas-caveyop.jpg';
import imgCasVictoire from '../assets/images/chapters/commerce-cas-victoire.jpg';
import imgCasMage from '../assets/images/chapters/commerce-cas-mage.jpg';

export interface ChapterVisual {
  icon: LucideIcon;
  tone: string;
  image?: string;
  /** CSS background-position for the image — lets a chapter override the
   * default center crop when its subject sits off-center (e.g. a face near
   * the top), so the short card banner never cuts off what matters. */
  imagePosition?: string;
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
  13: { icon: Handshake, tone: 'indigo', image: imgIncoterms2, imagePosition: 'center 62%' },
  14: { icon: Umbrella, tone: 'purple', image: imgAssurance2 },
  15: { icon: Ship, tone: 'blue', image: imgMaritime2 },
  16: { icon: Plane, tone: 'teal', image: imgAerien2 },
  17: { icon: Banknote, tone: 'green', image: imgPaiements2 },
  18: { icon: TrendingUp, tone: 'orange', image: imgFinanciers2, imagePosition: 'center 25%' },
  19: { icon: ClipboardList, tone: 'red', image: imgGestionCommande2, imagePosition: 'center 22%' },
  20: { icon: Briefcase, tone: CAS_PRATIQUE_TONES[0], image: imgCasIsrael },
  21: { icon: Briefcase, tone: CAS_PRATIQUE_TONES[1], image: imgCasYeshua },
  22: { icon: Briefcase, tone: CAS_PRATIQUE_TONES[2], image: imgCasCaveYop },
  23: { icon: Briefcase, tone: CAS_PRATIQUE_TONES[3], image: imgCasVictoire },
  24: { icon: Briefcase, tone: CAS_PRATIQUE_TONES[4], image: imgCasMage },
};

export function getChapterVisual(chapterNumber: number): ChapterVisual {
  return CHAPTER_VISUALS[chapterNumber] ?? { icon: Globe, tone: 'blue' };
}
