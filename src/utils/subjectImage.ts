import marketingScene from '../assets/images/subjects/marketing.svg';
import tciScene from '../assets/images/subjects/tci.svg';
import fcmeScene from '../assets/images/subjects/fcme.svg';
import tvnScene from '../assets/images/subjects/tvn.svg';
import miScene from '../assets/images/subjects/mi.svg';
import { getCourseIllustration } from './courseIllustration';

// Même ordre de priorité que la détection de la page Matières : le nom de la
// matière FCME contient « Marketing », et MI aussi, donc Marketing passe en dernier.
const SCENES: Array<[RegExp, string]> = [
  [/\bTCI\b|Commerce International/i, tciScene],
  [/\bMI\b|Marketing International/i, miScene],
  [/\bFCME\b|Fondements,? Concepts,? Marketing/i, fcmeScene],
  [/\bTVN\b|Vente|N[ée]gociation/i, tvnScene],
  [/marketing/i, marketingScene],
];

/** Image de bannière d'une matière. Les cinq matières connues ont leur scène
 * dédiée ; une matière inconnue reçoit une illustration générée d'après son nom. */
export function getSubjectImage(subjectName: string): string {
  const scene = SCENES.find(([re]) => re.test(subjectName));
  return scene ? scene[1] : getCourseIllustration(subjectName);
}
