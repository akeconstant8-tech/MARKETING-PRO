/**
 * Illustration vectorielle générée à partir du TITRE d'un cours.
 *
 * Utilisée uniquement pour les cours qui n'ont aucune image : rien n'est
 * stocké, rien n'est écrit en base, et une image existante (`imageUrl`) est
 * toujours renvoyée telle quelle. Le résultat est déterministe : un même titre
 * donne toujours la même illustration.
 */

import { TtlCache } from './ttlCache';

type Motif =
  | 'cross' | 'book' | 'dove' | 'flame' | 'pentecost' | 'baptism' | 'repentance' | 'menorah'
  | 'altar' | 'hands' | 'scroll' | 'shield' | 'heart' | 'crown' | 'wheat'
  | 'globe' | 'bars' | 'target' | 'magnifier' | 'coins' | 'orgchart' | 'box' | 'megaphone' | 'lightbulb';

const TONES: Record<string, [string, string]> = {
  blue: ['#3b82f6', '#1e3a8a'],
  green: ['#22c55e', '#166534'],
  purple: ['#a855f7', '#581c87'],
  orange: ['#fb923c', '#9a3412'],
  teal: ['#22d3ee', '#155e75'],
  indigo: ['#818cf8', '#312e81'],
  red: ['#f87171', '#991b1b'],
};

const F = 'rgba(255,255,255,0.96)';
const F2 = 'rgba(255,255,255,0.6)';
const F3 = 'rgba(255,255,255,0.2)';
const S = (w = 6, c = F) =>
  `fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;

const flamePath = 'M0 -110 C40 -50 70 -20 70 25 A70 70 0 0 1 -70 25 C-70 -10 -40 -30 -20 -60 C-10 -40 0 -70 0 -110Z';
const crossShape = (fill = F) =>
  `<rect x="-16" y="-100" width="32" height="200" rx="6" fill="${fill}"/><rect x="-66" y="-52" width="132" height="32" rx="6" fill="${fill}"/>`;

const person = (x: number, y: number, s: number, c = F) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="0" cy="-34" r="20" fill="${c}"/><path d="M-38 40 C-38 -2 38 -2 38 40 Z" fill="${c}"/></g>`;

const MOTIFS: Record<Motif, (dark: string) => string> = {
  cross: () => `
    <circle r="112" fill="${F3}"/>
    ${Array.from({ length: 12 }, (_, i) => `<line x1="0" y1="-128" x2="0" y2="-150" ${S(5, F2)} transform="rotate(${i * 30})"/>`).join('')}
    ${crossShape()}`,
  book: (d) => `
    <path d="M0 -62 C-40 -84 -90 -76 -118 -64 V72 C-90 60 -40 56 0 80Z" fill="${F}"/>
    <path d="M0 -62 C40 -84 90 -76 118 -64 V72 C90 60 40 56 0 80Z" fill="${F2}"/>
    <path d="M0 -62V80" ${S(4, d)} opacity="0.35"/>
    <path d="M-92 -34 C-66 -42 -40 -40 -20 -32M-92 -8 C-66 -16 -40 -14 -20 -6M-92 18 C-66 10 -40 12 -20 20" ${S(5, d)} opacity="0.3"/>`,
  dove: (d) => `
    <path d="M-100 16 C-70 -26 -16 -30 18 -8 C36 -46 78 -62 104 -92 C104 -40 84 2 44 22 C24 54 -34 64 -100 16Z" fill="${F}"/>
    <path d="M-6 -6 C-30 -68 12 -104 56 -108 C44 -66 32 -34 12 -4Z" fill="${F2}"/>
    <circle cx="56" cy="-8" r="5" fill="${d}"/>
    <path d="M-100 16 L-132 6 L-112 30Z" fill="${F2}"/>`,
  flame: (d) => `
    <path d="${flamePath}" fill="${F}"/>
    <path d="M0 -40 C22 -8 40 6 40 34 A40 40 0 0 1 -40 34 C-40 14 -20 0 0 -40Z" fill="${d}" opacity="0.45"/>`,
  pentecost: (d) => `
    ${[-110, 0, 110].map((x) => `<g transform="translate(${x} -58) scale(0.5)"><path d="${flamePath}" fill="${F}"/><path d="M0 -40 C22 -8 40 6 40 34 A40 40 0 0 1 -40 34 C-40 14 -20 0 0 -40Z" fill="${d}" opacity="0.45"/></g>`).join('')}
    ${person(-110, 66, 0.9, F2)}${person(0, 66, 1.05, F)}${person(110, 66, 0.9, F2)}`,
  baptism: (d) => `
    ${person(0, -14, 1.1, F)}
    <rect x="-150" y="24" width="300" height="90" rx="16" fill="${d}" opacity="0.45"/>
    <path d="M-150 30 q25 -20 50 0 t50 0 t50 0 t50 0 t50 0 t50 0" ${S(7, F)}/>
    <path d="M-150 64 q25 -20 50 0 t50 0 t50 0 t50 0 t50 0 t50 0" ${S(6, F2)}/>
    <path d="M-72 -98 C-82 -82 -80 -70 -72 -70 C-64 -70 -62 -82 -72 -98Z" fill="${F2}"/>
    <path d="M78 -86 C68 -70 70 -58 78 -58 C86 -58 88 -70 78 -86Z" fill="${F2}"/>
    <g transform="translate(-118 -70) scale(0.28)">${crossShape(F2)}</g>`,
  repentance: (d) => `
    <g transform="translate(96 -6) scale(0.62)"><circle r="112" fill="${F3}"/>${crossShape()}</g>
    <path d="M-130 70 C-150 -70 0 -100 44 -42" ${S(9)}/>
    <path d="M44 -42 L18 -44 M44 -42 L40 -68" ${S(9)}/>
    ${person(-130, 78, 0.55, F2)}
    <path d="M-100 100H150" ${S(4, d)} opacity="0.3"/>`,
  menorah: () => `
    <path d="M0 -96V88M-46 88H46M-22 88H22" ${S(9)}/>
    ${[36, 72, 108].map((r) => `<path d="M-${r} -80 V-30 A${r} ${r * 0.62} 0 0 0 0 30M${r} -80 V-30 A${r} ${r * 0.62} 0 0 1 0 30" ${S(7)}/>`).join('')}
    ${[-108, -72, -36, 0, 36, 72, 108].map((x) => `<path d="M${x} -100 C${x - 12} -116 ${x - 8} -128 ${x} -136 C${x + 8} -128 ${x + 12} -116 ${x} -100Z" fill="${F2}"/>`).join('')}`,
  altar: (d) => `
    <rect x="-100" y="24" width="200" height="72" rx="6" fill="${F}"/>
    <rect x="-80" y="0" width="160" height="30" rx="4" fill="${F2}"/>
    <path d="M-60 62H60" ${S(5, d)} opacity="0.3"/>
    <g transform="translate(0 -32) scale(0.62)"><path d="${flamePath}" fill="${F}"/><path d="M0 -40 C22 -8 40 6 40 34 A40 40 0 0 1 -40 34 C-40 14 -20 0 0 -40Z" fill="${d}" opacity="0.45"/></g>`,
  hands: (d) => `
    <path d="M0 96 C-58 40 -70 -40 0 -104 C70 -40 58 40 0 96Z" fill="${F2}" transform="rotate(-14 0 96)"/>
    <path d="M0 96 C-58 40 -70 -40 0 -104 C70 -40 58 40 0 96Z" fill="${F}" transform="rotate(14 0 96)"/>
    <path d="M0 -70V60" ${S(4, d)} opacity="0.25"/>
    ${[-64, 0, 64].map((a) => `<line x1="0" y1="-128" x2="0" y2="-146" ${S(5, F2)} transform="rotate(${a} 0 -20)"/>`).join('')}`,
  scroll: (d) => `
    <rect x="-90" y="-80" width="180" height="160" rx="10" fill="${F}"/>
    <rect x="-108" y="-96" width="216" height="30" rx="15" fill="${F2}"/>
    <rect x="-108" y="66" width="216" height="30" rx="15" fill="${F2}"/>
    ${[-40, -8, 24].map((y) => `<line x1="-56" y1="${y}" x2="56" y2="${y}" ${S(6, d)} opacity="0.35"/>`).join('')}`,
  shield: (d) => `
    <path d="M0 -104 L86 -70 V-4 C86 52 46 88 0 108 C-46 88 -86 52 -86 -4 V-70Z" fill="${F}"/>
    <path d="M0 -104 L86 -70 V-4 C86 52 46 88 0 108Z" fill="${F2}"/>
    <g transform="translate(0 2) scale(0.42)">${crossShape(d)}</g>`,
  heart: () => `
    <path d="M0 96 C-140 10 -110 -100 -50 -100 C-20 -100 0 -80 0 -62 C0 -80 20 -100 50 -100 C110 -100 140 10 0 96 Z" fill="${F}"/>`,
  crown: (d) => `
    <path d="M-110 70 L-130 -50 L-56 4 L0 -84 L56 4 L130 -50 L110 70Z" fill="${F}"/>
    <rect x="-110" y="70" width="220" height="26" rx="8" fill="${F2}"/>
    ${[-130, 0, 130].map((x, i) => `<circle cx="${x}" cy="${i === 1 ? -92 : -58}" r="12" fill="${F2}"/>`).join('')}
    ${[-52, 0, 52].map((x) => `<circle cx="${x}" cy="46" r="9" fill="${d}" opacity="0.4"/>`).join('')}`,
  wheat: () => `
    <path d="M0 108V-70" ${S(7)}/>
    ${Array.from({ length: 5 }, (_, i) => `<ellipse cx="-20" cy="${-58 + i * 26}" rx="11" ry="22" transform="rotate(-38 -20 ${-58 + i * 26})" fill="${F}"/><ellipse cx="20" cy="${-58 + i * 26}" rx="11" ry="22" transform="rotate(38 20 ${-58 + i * 26})" fill="${F2}"/>`).join('')}
    <ellipse cx="0" cy="-92" rx="11" ry="24" fill="${F}"/>
    <path d="M-130 108H130" ${S(5, F3)}/>`,
  globe: () => `
    <circle r="92" fill="${F3}" stroke="${F}" stroke-width="6"/>
    <ellipse rx="42" ry="92" ${S(4, F2)}/><ellipse rx="92" ry="30" ${S(4, F2)}/>
    <path d="M-92 0H92M0 -92V92" ${S(4, F2)}/>
    <ellipse rx="150" ry="42" transform="rotate(-22)" ${S(4, F2)}/><circle cx="131" cy="-21" r="10" fill="${F}"/>`,
  bars: () => `
    <path d="M-150 96H150" ${S(5, F2)}/>
    ${[60, 110, 80, 150, 100, 130].map((h, i) => `<rect x="${-140 + i * 48}" y="${96 - h}" width="34" height="${h}" rx="6" fill="${i === 3 ? F : F2}"/>`).join('')}`,
  target: () => `
    <circle r="92" fill="${F3}" stroke="${F}" stroke-width="6"/><circle r="60" ${S(6, F2)}/><circle r="28" fill="${F}"/>
    <line x1="0" y1="0" x2="96" y2="-96" ${S(7)}/><path d="M96 -96 L84 -96 M96 -96 L96 -84 M86 -106 L106 -86" ${S(6)}/>`,
  magnifier: () => `
    <circle cx="-18" cy="-18" r="66" fill="${F3}" stroke="${F}" stroke-width="10"/>
    <line x1="32" y1="32" x2="92" y2="92" ${S(16)}/>
    <path d="M-52 -4V14M-32 -24V14M-12 -40V14M8 -14V14" ${S(9, F2)}/>`,
  coins: () => `
    ${[[-100, 4], [0, -24], [100, 4]].map(([x, y]) => [0, 1, 2, 3].map((i) => `<ellipse cx="${x}" cy="${y + 60 - i * 22}" rx="42" ry="14" fill="${i === 3 ? F : F2}"/>`).join('')).join('')}
    <path d="M-170 96H170" ${S(5, F3)}/>`,
  orgchart: () => `
    <rect x="-46" y="-96" width="92" height="44" rx="10" fill="${F}"/>
    <path d="M0 -52V-26M-110 -26H110M-110 -26V4M0 -26V4M110 -26V4" ${S(5, F2)}/>
    ${[-110, 0, 110].map((x) => `<rect x="${x - 46}" y="4" width="92" height="44" rx="10" fill="${F2}"/>`).join('')}`,
  box: () => `
    <polygon points="0,-90 90,-45 0,0 -90,-45" fill="${F}"/><polygon points="-90,-45 0,0 0,96 -90,50" fill="${F2}"/>
    <polygon points="90,-45 0,0 0,96 90,50" fill="${F3}" stroke="${F}" stroke-width="4"/>`,
  megaphone: () => `
    <path d="M-110 -30 L40 -96 V96 L-110 30 Z" fill="${F}"/><rect x="-140" y="-32" width="40" height="64" rx="12" fill="${F2}"/>
    <path d="M70 -50 Q105 0 70 50M100 -80 Q160 0 100 80" ${S(6, F2)}/>`,
  lightbulb: () => `
    <circle cy="-22" r="64" fill="${F3}" stroke="${F}" stroke-width="6"/>
    <path d="M-24 34H24M-18 52H18" ${S(8)}/>
    ${[-70, -35, 0, 35, 70].map((a) => `<line x1="0" y1="-105" x2="0" y2="-125" ${S(6, F2)} transform="rotate(${a} 0 -22)"/>`).join('')}`,
};

/** [motif de titre, motif, ton] — le premier motif dont l'expression correspond gagne.
 * Les titres sont comparés sans accents ni majuscules. */
const RULES: Array<[RegExp, Motif, string]> = [
  [/levit|sacrificateur|pretre|sacerdo|tabernacle|temple|chandelier/, 'menorah', 'indigo'],
  [/repent|conversion|se detourner|pardon|reconcili|delivrance/, 'repentance', 'teal'],
  [/bapteme|baptis|immersion|eau vive/, 'baptism', 'blue'],
  [/pentecote|saint[- ]esprit|esprit[- ]saint|actes 2|langues de feu/, 'pentecost', 'orange'],
  [/colombe|paix\b/, 'dove', 'teal'],
  [/croix|calvaire|redempt|sauveur|salut|resurrection|crucifi|paques|expiation/, 'cross', 'purple'],
  [/priere|prier|intercession|jeune\b|adoration|louange/, 'hands', 'indigo'],
  [/sacrifice|offrande|autel|holocauste|dime|prémice/, 'altar', 'orange'],
  [/parole|bible|ecriture|loi\b|alliance|evangile|commandement|doctrine|testament|prophet/, 'scroll', 'green'],
  [/foi\b|armure|combat|guerre spirituelle|protection|victoire/, 'shield', 'blue'],
  [/amour|grace|compassion|charite|famille|mariage|couple|fraternit|relation client|fidelisation/, 'heart', 'red'],
  [/roi\b|royaume|autorite|leadership|leader|gouvern|couronne|regne/, 'crown', 'purple'],
  [/semence|semeur|moisson|fruit|croissance|discipl/, 'wheat', 'green'],
  [/international|export|import|douane|incoterm|mondial|etranger|transit|commerce exterieur/, 'globe', 'green'],
  [/etude de marche|enquete|questionnaire|sondage|diagnostic|analyse|recherche/, 'magnifier', 'orange'],
  [/finance|paiement|budget|comptab|tresorerie|credit|prix\b|tarif/, 'coins', 'teal'],
  [/statistique|indicateur|performance|prevision|demande|vente|resultat|note/, 'bars', 'blue'],
  [/strategie|ciblage|cible|segment|positionnement|objectif/, 'target', 'red'],
  [/communication|publicit|promotion|marketing digital|reseaux sociaux/, 'megaphone', 'orange'],
  [/produit|distribution|logistique|emballage|livraison|stock/, 'box', 'purple'],
  [/organisation|gestion|management|equipe|structure|ressources humaines/, 'orgchart', 'indigo'],
  [/idee|creativite|innovation|concept|introduction|decouverte/, 'lightbulb', 'green'],
];

const TONE_ORDER = ['blue', 'green', 'purple', 'orange', 'teal', 'indigo', 'red'];

export function normalizeTitle(title: string): string {
  return title
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[’']/g, ' ');
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** Motif (et ton par défaut) choisis pour un titre ; « book » si aucun thème n'est reconnu. */
export function pickIllustration(title: string): { motif: Motif; tone: string } {
  const t = normalizeTitle(title);
  for (const [re, motif, tone] of RULES) {
    if (re.test(t)) return { motif, tone };
  }
  return { motif: 'book', tone: TONE_ORDER[hash(t) % TONE_ORDER.length] };
}

// Borné (les combinaisons motif/ton sont peu nombreuses) et expirant : une
// illustration expirée est simplement régénérée à partir du titre.
const cache = new TtlCache<string, string>(200, 30 * 60 * 1000);

/** Renvoie l'image d'un cours : celle qui existe déjà si `existingImage` est
 * fourni (jamais modifiée), sinon une illustration SVG (data URI) générée à
 * partir du titre. `tone` permet d'aligner le dégradé sur celui de la carte. */
export function getCourseIllustration(title: string, tone?: string, existingImage?: string): string {
  if (existingImage) return existingImage;
  const picked = pickIllustration(title);
  const useTone = tone && TONES[tone] ? tone : picked.tone;
  const key = `${picked.motif}|${useTone}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const [c1, c2] = TONES[useTone];
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>` +
    `<rect width="800" height="320" fill="url(#g)"/>` +
    `<circle cx="90" cy="30" r="150" fill="rgba(255,255,255,0.08)"/><circle cx="730" cy="300" r="190" fill="rgba(255,255,255,0.07)"/>` +
    `<circle cx="700" cy="40" r="60" fill="rgba(255,255,255,0.06)"/>` +
    `<g transform="translate(400 168) scale(1.1)">${MOTIFS[picked.motif](c2)}</g></svg>`;
  const uri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  cache.set(key, uri);
  return uri;
}
