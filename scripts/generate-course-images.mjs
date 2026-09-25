// Génère les illustrations (SVG) des chapitres de cours et le fichier d'index
// src/data/courseImages.ts. Usage : node scripts/generate-course-images.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'src', 'assets', 'images', 'courses');
mkdirSync(outDir, { recursive: true });

const W = 800;
const H = 320;

const TONES = {
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
const S = (w = 6, c = F) => `fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;

const person = (x, y, s = 1, c = F) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="0" cy="-34" r="20" fill="${c}"/><path d="M-38 40 C-38 -2 38 -2 38 40 Z" fill="${c}"/></g>`;

const MOTIFS = {
  globe: () => `
    <circle r="92" fill="${F3}" ${S(6).replace('fill="none" ', '')}/>
    <ellipse rx="42" ry="92" ${S(4, F2)}/>
    <ellipse rx="92" ry="30" ${S(4, F2)}/>
    <path d="M-92 0H92M0 -92V92" ${S(4, F2)}/>
    <ellipse rx="150" ry="42" transform="rotate(-22)" ${S(4, F2)}/>
    <circle cx="131" cy="-21" r="10" fill="${F}"/>`,
  lightbulb: () => `
    <circle cy="-22" r="64" fill="${F3}" stroke="${F}" stroke-width="6"/>
    <path d="M-24 34H24M-18 52H18" ${S(8)}/>
    <path d="M-20 10 L0 -20 L20 10" ${S(5, F2)}/>
    ${[-70, -35, 0, 35, 70].map((a) => `<line x1="0" y1="-105" x2="0" y2="-125" ${S(6, F2)} transform="rotate(${a} 0 -22)"/>`).join('')}`,
  compass: () => `
    <circle r="92" fill="${F3}" stroke="${F}" stroke-width="6"/>
    ${Array.from({ length: 12 }, (_, i) => `<line x1="0" y1="-92" x2="0" y2="${i % 3 ? -80 : -70}" ${S(4, F2)} transform="rotate(${i * 30})"/>`).join('')}
    <g transform="rotate(40)"><polygon points="0,-68 15,0 0,68 -15,0" fill="${F2}"/><polygon points="0,-68 15,0 -15,0" fill="${F}"/></g>
    <circle r="9" fill="${F}"/>`,
  magnifier: () => `
    <circle cx="-18" cy="-18" r="66" fill="${F3}" stroke="${F}" stroke-width="10"/>
    <line x1="32" y1="32" x2="92" y2="92" ${S(16)}/>
    <path d="M-52 -4V14M-32 -24V14M-12 -40V14M8 -14V14" ${S(9, F2)}/>`,
  target: () => `
    <circle r="92" fill="${F3}" stroke="${F}" stroke-width="6"/>
    <circle r="60" ${S(6, F2)}/><circle r="28" fill="${F}"/>
    <line x1="0" y1="0" x2="96" y2="-96" ${S(7)}/>
    <path d="M96 -96 L84 -96 M96 -96 L96 -84 M86 -106 L106 -86" ${S(6)}/>`,
  route: () => `
    <path d="M-160 50 C-100 -70 -30 90 20 -20 S110 -40 150 20" ${S(6, F2)} stroke-dasharray="2 16"/>
    <circle cx="-160" cy="50" r="18" fill="${F}"/><circle cx="20" cy="-20" r="14" fill="${F2}"/>
    <path d="M150 20 c-30 -34 -34 -62 0 -66 c34 4 30 32 0 66z" fill="${F}"/><circle cx="150" cy="-30" r="9" fill="${TONE_DARK()}"/>`,
  talk: () => `
    <path d="M-150 -80H10a20 20 0 0 1 20 20V10a20 20 0 0 1 -20 20H-90L-124 58V30H-150a20 20 0 0 1 -20 -20V-60a20 20 0 0 1 20 -20z" fill="${F}"/>
    <path d="M-16 -20H130a20 20 0 0 1 20 20V70a20 20 0 0 1 -20 20H120V116L86 90H-16a20 20 0 0 1 -20 -20V0a20 20 0 0 1 20 -20z" fill="${F2}"/>
    <circle cx="-120" cy="-25" r="7" fill="${TONE_DARK()}"/><circle cx="-90" cy="-25" r="7" fill="${TONE_DARK()}"/><circle cx="-60" cy="-25" r="7" fill="${TONE_DARK()}"/>`,
  checklist: () => `
    <rect x="-80" y="-98" width="160" height="196" rx="18" fill="${F3}" stroke="${F}" stroke-width="6"/>
    <rect x="-30" y="-112" width="60" height="26" rx="10" fill="${F}"/>
    ${[-50, -8, 34].map((y) => `<path d="M-56 ${y}l10 10 20 -22" ${S(6)}/><line x1="-6" y1="${y}" x2="56" y2="${y}" ${S(7, F2)}/>`).join('')}`,
  orgchart: () => `
    <rect x="-46" y="-96" width="92" height="44" rx="10" fill="${F}"/>
    <path d="M0 -52V-26M-110 -26H110M-110 -26V4M0 -26V4M110 -26V4" ${S(5, F2)}/>
    ${[-110, 0, 110].map((x) => `<rect x="${x - 46}" y="4" width="92" height="44" rx="10" fill="${F2}"/>`).join('')}
    ${[-110, 0, 110].map((x) => `<path d="M${x} 48V68" ${S(5, F2)}/><rect x="${x - 26}" y="68" width="52" height="26" rx="8" fill="${F3}" stroke="${F2}" stroke-width="3"/>`).join('')}`,
  growth: () => `
    <path d="M-150 96H150" ${S(5, F2)}/>
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="${-140 + i * 58}" y="${70 - i * 30}" width="42" height="${26 + i * 30}" rx="6" fill="${i === 4 ? F : F2}"/>`).join('')}
    <path d="M-140 30 L-60 -10 L-10 10 L110 -70" ${S(7)}/><path d="M110 -70 L84 -66 M110 -70 L104 -44" ${S(7)}/>`,
  bars: () => `
    <path d="M-150 96H150" ${S(5, F2)}/>
    ${[60, 110, 80, 150, 100, 130].map((h, i) => `<rect x="${-140 + i * 48}" y="${96 - h}" width="34" height="${h}" rx="6" fill="${i === 3 ? F : F2}"/>`).join('')}`,
  environment: () => `
    <circle r="96" ${S(4, F2)}/><circle r="58" ${S(4, F2)}/><circle r="26" fill="${F}"/>
    ${Array.from({ length: 6 }, (_, i) => { const a = (i * 60 - 90) * Math.PI / 180; return `<line x1="0" y1="0" x2="${Math.cos(a) * 96}" y2="${Math.sin(a) * 96}" ${S(3, F3)}/><circle cx="${Math.cos(a) * 96}" cy="${Math.sin(a) * 96}" r="14" fill="${i % 2 ? F2 : F}"/>`; }).join('')}`,
  gauge: () => `
    <path d="M-110 50 A110 110 0 0 1 110 50" ${S(16, F3)}/>
    <path d="M-110 50 A110 110 0 0 1 40 -50" ${S(16)}/>
    <line x1="0" y1="50" x2="60" y2="-30" ${S(9)}/><circle cy="50" r="16" fill="${F}"/>
    <path d="M-150 82H150" ${S(4, F2)}/>`,
  pie: () => `
    <circle r="90" fill="${F3}"/>
    <path d="M0 0 L0 -90 A90 90 0 0 1 78 45 Z" fill="${F}"/>
    <path d="M0 0 L78 45 A90 90 0 0 1 -60 67 Z" fill="${F2}"/>
    <circle r="90" ${S(5)}/>`,
  box: () => `
    <polygon points="0,-90 90,-45 0,0 -90,-45" fill="${F}"/>
    <polygon points="-90,-45 0,0 0,96 -90,50" fill="${F2}"/>
    <polygon points="90,-45 0,0 0,96 90,50" fill="${F3}" stroke="${F}" stroke-width="4"/>
    <path d="M-45 -68 L45 -22" ${S(6, F2)}/>`,
  pricetag: () => `
    <path d="M-100 -30 L-20 -110 H100 V10 L20 90 Z" fill="${F3}" stroke="${F}" stroke-width="6" stroke-linejoin="round" transform="rotate(0)"/>
    <circle cx="62" cy="-62" r="13" fill="${F}"/>
    <text x="-6" y="10" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="68" fill="${F}" text-anchor="middle" transform="rotate(-45 -6 0)">%</text>`,
  truck: () => `
    <rect x="-150" y="-70" width="190" height="112" rx="12" fill="${F}"/>
    <path d="M50 -38 H100 L140 6 V42 H50 Z" fill="${F2}"/><path d="M64 -24 H92 L114 2 H64z" fill="${TONE_DARK()}" opacity="0.55"/>
    <circle cx="-90" cy="52" r="24" fill="${F}" stroke="${TONE_DARK()}" stroke-width="8"/><circle cx="84" cy="52" r="24" fill="${F}" stroke="${TONE_DARK()}" stroke-width="8"/>
    <path d="M-170 96H160" ${S(5, F3)}/>`,
  megaphone: () => `
    <path d="M-110 -30 L40 -96 V96 L-110 30 Z" fill="${F}"/>
    <rect x="-140" y="-32" width="40" height="64" rx="12" fill="${F2}"/>
    <path d="M-100 40 L-80 96 H-48 L-60 40" fill="${F2}"/>
    <path d="M70 -50 Q105 0 70 50M100 -80 Q160 0 100 80" ${S(6, F2)}/>`,
  ship: () => `
    <path d="M-150 30 H150 L112 88 H-112 Z" fill="${F}"/>
    ${[-96, -42, 12].map((x, i) => `<rect x="${x}" y="-18" width="48" height="44" rx="4" fill="${i === 1 ? F : F2}"/>`).join('')}
    ${[-72, -18].map((x) => `<rect x="${x}" y="-60" width="48" height="38" rx="4" fill="${F2}"/>`).join('')}
    <rect x="76" y="-40" width="44" height="66" rx="6" fill="${F}"/><rect x="88" y="-64" width="12" height="26" fill="${F2}"/>
    <path d="M-170 108 q20 -14 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" ${S(5, F2)}/>`,
  containers: () => `
    ${[[-138, 28, 0], [-46, 28, 1], [46, 28, 0], [-92, -32, 1], [0, -32, 0], [-46, -92, 0]]
      .map(([x, y, a]) => `<rect x="${x}" y="${y}" width="88" height="56" rx="5" fill="${a ? F : F2}"/><path d="M${x + 16} ${y + 8}V${y + 48}M${x + 44} ${y + 8}V${y + 48}M${x + 72} ${y + 8}V${y + 48}" ${S(3, TONE_DARK())} opacity="0.35"/>`).join('')}
    <path d="M-170 100H170" ${S(5, F3)}/>`,
  stamp: () => `
    <path d="M-80 -100 H30 L80 -50 V100 H-80 Z" fill="${F3}" stroke="${F}" stroke-width="6" stroke-linejoin="round"/>
    <path d="M30 -100 V-50 H80" ${S(5, F)}/>
    <line x1="-52" y1="-40" x2="30" y2="-40" ${S(6, F2)}/><line x1="-52" y1="-12" x2="52" y2="-12" ${S(6, F2)}/>
    <circle cx="34" cy="52" r="42" fill="${F3}" stroke="${F}" stroke-width="6"/><path d="M14 52 l14 14 l26 -30" ${S(7)}/>`,
  coins: () => `
    ${[[-100, 4], [0, -24], [100, 4]].map(([x, y]) => [0, 1, 2, 3].map((i) => `<ellipse cx="${x}" cy="${y + 60 - i * 22}" rx="42" ry="14" fill="${i === 3 ? F : F2}" stroke="${TONE_DARK()}" stroke-width="2" stroke-opacity="0.35"/>`).join('')).join('')}
    <path d="M-170 96H170" ${S(5, F3)}/>`,
  team: () => `
    ${person(-105, 20, 0.85, F2)}${person(105, 20, 0.85, F2)}${person(0, 22, 1.15, F)}
    <path d="M-170 96H170" ${S(5, F3)}/>`,
  care: () => `
    <path d="M0 96 C-140 10 -110 -100 -50 -100 C-20 -100 0 -80 0 -62 C0 -80 20 -100 50 -100 C110 -100 140 10 0 96 Z" fill="${F}"/>`,
  grid: () => `
    ${[0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => `<rect x="${-96 + c * 66}" y="${-96 + r * 66}" width="58" height="58" rx="10" fill="${r === 1 && c === 1 ? F : F2}" ${r === 1 && c === 1 ? '' : 'opacity="0.75"'}/>`)).join('')}`,
  map: () => `
    <path d="M-130 -60 L-45 -84 L45 -56 L130 -80 V60 L45 84 L-45 56 L-130 80 Z" fill="${F3}" stroke="${F}" stroke-width="6" stroke-linejoin="round"/>
    <path d="M-45 -84 V56M45 -56 V84" ${S(4, F2)}/>
    <path d="M30 20 c-34 -38 -36 -70 0 -74 c36 4 34 36 0 74z" fill="${F}"/><circle cx="30" cy="-30" r="10" fill="${TONE_DARK()}"/>`,
  positioning: () => `
    <path d="M-130 0H130M0 -100V100" ${S(5, F2)}/><path d="M130 0l-14 -9M130 0l-14 9M0 -100l-9 14M0 -100l9 14" ${S(5, F2)}/>
    ${[[-80, -50, 14], [-60, 55, 12], [70, 60, 14], [-20, 28, 10]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${F2}"/>`).join('')}
    <circle cx="70" cy="-52" r="34" fill="${F3}" stroke="${F}" stroke-width="5"/><circle cx="70" cy="-52" r="16" fill="${F}"/>`,
  sample: () => `
    ${Array.from({ length: 4 }, (_, r) => Array.from({ length: 9 }, (_, c) => { const hit = (r * 9 + c) % 5 === 2; return `<circle cx="${-128 + c * 32}" cy="${-72 + r * 48}" r="${hit ? 13 : 9}" fill="${hit ? F : F2}"/>`; }).join('')).join('')}`,
  steps: () => `
    <path d="M-120 70 L-40 20 L40 -10 L120 -70" ${S(5, F3)} stroke-dasharray="2 12"/>
    ${[[-120, 70], [-40, 20], [40, -10], [120, -70]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i === 3 ? 30 : 24}" fill="${i === 3 ? F : F2}"/><text x="${x}" y="${y + 9}" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="26" text-anchor="middle" fill="${TONE_DARK()}">${i + 1}</text>`).join('')}`,
  layers: () => `
    ${[60, 20, -20].map((y, i) => `<polygon points="0,${y - 50} 110,${y} 0,${y + 50} -110,${y}" fill="${i === 2 ? F : F2}" stroke="${TONE_DARK()}" stroke-opacity="0.3" stroke-width="3"/>`).join('')}`,
  document: () => `
    <path d="M-76 -100 H26 L76 -50 V100 H-76 Z" fill="${F3}" stroke="${F}" stroke-width="6" stroke-linejoin="round"/>
    <path d="M26 -100 V-50 H76" ${S(5)}/>
    ${[-30, 0, 30, 60].map((y, i) => `<line x1="-46" y1="${y}" x2="${i === 3 ? 10 : 46}" y2="${y}" ${S(6, F2)}/>`).join('')}`,
  pineapple: () => `
    ${[-64, -32, 0, 32, 64].map((a) => `<path d="M0 -50 C-16 -90 -10 -120 0 -136 C10 -120 16 -90 0 -50z" fill="${F2}" transform="rotate(${a} 0 -50)"/>`).join('')}
    <ellipse cy="26" rx="56" ry="74" fill="${F}"/>
    <clipPath id="pc"><ellipse cy="26" rx="56" ry="74"/></clipPath>
    <g clip-path="url(#pc)">${[-30, 0, 30].map((x) => `<path d="M${x - 40} -30 L${x + 40} 82M${x + 40} -30 L${x - 40} 82" ${S(3, TONE_DARK())} opacity="0.35"/>`).join('')}</g>`,
  pool: () => `
    <rect x="-140" y="-16" width="280" height="110" rx="18" fill="${F3}" stroke="${F}" stroke-width="6"/>
    <path d="M-120 24 q20 -16 40 0 t40 0 t40 0 t40 0 t40 0" ${S(6, F2)}/>
    <path d="M-120 60 q20 -16 40 0 t40 0 t40 0 t40 0 t40 0" ${S(6, F2)}/>
    <path d="M78 30V-56Q78 -92 112 -92M108 30V-56Q108 -92 112 -92" ${S(7)}/>
    <path d="M78 -34H108M78 -8H108" ${S(6, F2)}/>`,
  sack: () => `
    <path d="M-72 92 C-96 24 -66 -22 -32 -50 L-42 -84 H42 L32 -50 C66 -22 96 24 72 92 Z" fill="${F}"/>
    <path d="M-34 -50 H34" ${S(7, TONE_DARK())} opacity="0.35"/>
    <path d="M-20 22 C-34 -12 10 -24 24 4 C30 22 12 44 -6 34 C0 22 -8 18 -20 22Z" fill="${TONE_DARK()}" opacity="0.55"/>`,
  milk: () => `
    <polygon points="-46,-34 -46,-72 0,-104 46,-72 46,-34" fill="${F2}"/>
    <rect x="-46" y="-34" width="92" height="124" rx="6" fill="${F}"/>
    <path d="M0 -6 C-24 26 -22 56 0 56 C22 56 24 26 0 -6Z" fill="${TONE_DARK()}" opacity="0.5"/>
    <path d="M-120 92H120" ${S(5, F3)}/>
    <path d="M80 -50 C66 -30 68 -14 80 -14 C92 -14 94 -30 80 -50Z" fill="${F2}"/><path d="M-84 -20 C-96 -2 -94 12 -84 12 C-74 12 -72 -2 -84 -20Z" fill="${F2}"/>`,
  linechart: () => `
    <path d="M-140 -90V90H150" ${S(5, F2)}/>
    <path d="M-120 60 L-70 20 L-20 40 L40 -20 L100 -60" ${S(7)}/>
    ${[[-120, 60], [-70, 20], [-20, 40], [40, -20], [100, -60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="${F}"/>`).join('')}`,
};

let currentDark = '#000';
function TONE_DARK() {
  return currentDark;
}

function svg(tone, motif) {
  const [c1, c2] = TONES[tone];
  currentDark = c2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <circle cx="90" cy="30" r="150" fill="rgba(255,255,255,0.08)"/>
  <circle cx="730" cy="300" r="190" fill="rgba(255,255,255,0.07)"/>
  <circle cx="700" cy="40" r="60" fill="rgba(255,255,255,0.06)"/>
  <g transform="translate(400 168) scale(1.15)">${MOTIFS[motif]()}</g>
</svg>
`;
}

// [cours, préfixe TS, motifs par chapitre : [tone, motif]]
const COURSES = {
  mi: ['MI', [
    ['green', 'globe'], ['blue', 'lightbulb'], ['purple', 'compass'], ['orange', 'magnifier'], ['teal', 'target'],
    ['indigo', 'route'], ['red', 'talk'], ['green', 'checklist'], ['blue', 'orgchart'],
  ]],
  mkt1: ['MARKETING1', [
    ['green', 'growth'], ['blue', 'bars'], ['purple', 'environment'], ['orange', 'gauge'], ['teal', 'magnifier'],
    ['indigo', 'checklist'], ['red', 'pie'], ['green', 'box'], ['blue', 'pricetag'], ['purple', 'truck'], ['orange', 'megaphone'],
  ]],
  mkt2: ['MARKETING2', [
    ['green', 'globe'], ['blue', 'ship'], ['purple', 'containers'], ['orange', 'stamp'], ['teal', 'coins'],
    ['indigo', 'orgchart'], ['red', 'team'], ['green', 'care'], ['blue', 'document'],
  ]],
  fcme1: ['FCME', [
    ['green', 'lightbulb'], ['blue', 'grid'], ['purple', 'team'], ['orange', 'map'], ['teal', 'pie'],
    ['indigo', 'target'], ['red', 'positioning'],
  ]],
  fcme2: ['FCME2', [
    ['green', 'magnifier'], ['blue', 'steps'], ['purple', 'layers'], ['orange', 'sample'], ['teal', 'document'],
    ['indigo', 'team'], ['red', 'linechart'], ['green', 'checklist'],
  ]],
};

let index = `// Fichier généré par scripts/generate-course-images.mjs — ne pas modifier à la main.\n`;
const records = [];
for (const [slug, [prefix, chapters]] of Object.entries(COURSES)) {
  const names = [];
  chapters.forEach(([tone, motif], i) => {
    const file = `${slug}-ch${i + 1}.svg`;
    writeFileSync(join(outDir, file), svg(tone, motif));
    const v = `${slug}Ch${i + 1}`;
    index += `import ${v} from '../assets/images/courses/${file}';\n`;
    names.push(v);
  });
  records.push(`export const ${prefix}_CHAPTER_IMAGES: Record<number, string> = {\n${names.map((n, i) => `  ${i + 1}: ${n},`).join('\n')}\n};\n`);
}
// Cas pratiques TCI 2ème année sans photo : [numéro de chapitre, ton, motif]
const TCI2_CAS = [
  [22, 'orange', 'sack'], // Yegossoum — noix de cajou
  [25, 'blue', 'milk'], // Gloire — importation de lait
  [27, 'teal', 'pool'], // Lagoon Bleu — piscines en kit
  [28, 'green', 'pineapple'], // Ets Adjé — ananas
];
const casNames = [];
for (const [num, tone, motif] of TCI2_CAS) {
  const file = `tci2-ch${num}.svg`;
  writeFileSync(join(outDir, file), svg(tone, motif));
  index += `import tci2Ch${num} from '../assets/images/courses/${file}';\n`;
  casNames.push([num, `tci2Ch${num}`]);
}
records.push(`export const TCI2_CAS_IMAGES: Record<number, string> = {\n${casNames.map(([n, v]) => `  ${n}: ${v},`).join('\n')}\n};\n`);

index += `\n${records.join('\n')}`;
writeFileSync(join(root, 'src', 'data', 'courseImages.ts'), index);

console.log('OK', Object.values(COURSES).reduce((n, [, c]) => n + c.length, TCI2_CAS.length), 'images');
