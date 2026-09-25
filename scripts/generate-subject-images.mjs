// Génère les scènes illustrées (SVG, 800×320) des cartes de matières dans
// src/assets/images/subjects/. Usage : node scripts/generate-subject-images.mjs
// N'écrit que dans ce dossier : aucune image existante n'est touchée.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets', 'images', 'subjects');
mkdirSync(outDir, { recursive: true });

const W = 800;
const H = 320;
const NAVY = '#1e3a8a';
const INK = '#0f172a';
const BLUE = '#3b82f6';
const ORANGE = '#fb923c';
const TEAL = '#14b8a6';
const RED = '#f43f5e';
const YELLOW = '#fbbf24';
const SKIN = ['#f1c8a5', '#c98f5f', '#8d5a3b', '#e8b998'];
const HAIR = ['#1f2937', '#4b2e1a', '#0b0b0b', '#7c4a1e'];

const person = (x, y, s, skin, shirt, hair, extra = '') => `
  <g transform="translate(${x} ${y}) scale(${s})">
    <rect x="-25" y="6" width="50" height="86" rx="24" fill="${shirt}"/>
    <rect x="-8" y="-8" width="16" height="20" rx="6" fill="${skin}"/>
    <circle cy="-26" r="22" fill="${skin}"/>
    <path d="M-23 -28 a23 23 0 0 1 46 0 q-23 -15 -46 0z" fill="${hair}"/>
    ${extra}
  </g>`;

const laptop = (x, y, s, content) => `
  <g transform="translate(${x} ${y}) scale(${s})">
    <rect x="-56" y="-72" width="112" height="72" rx="7" fill="${NAVY}"/>
    <rect x="-49" y="-65" width="98" height="58" rx="3" fill="#f8fafc"/>
    ${content}
    <path d="M-70 0 H70 L62 12 H-62Z" fill="#94a3b8"/>
  </g>`;

const miniBars = (c = BLUE) =>
  `<rect x="-40" y="-26" width="12" height="18" rx="2" fill="${c}"/><rect x="-24" y="-38" width="12" height="30" rx="2" fill="${ORANGE}"/><rect x="-8" y="-32" width="12" height="24" rx="2" fill="${c}"/><rect x="8" y="-48" width="12" height="40" rx="2" fill="${TEAL}"/><rect x="24" y="-40" width="12" height="32" rx="2" fill="${c}"/>`;

const desk = (y = 250) => `<rect x="0" y="${y}" width="${W}" height="${H - y}" fill="#cbd5e1"/><rect x="0" y="${y}" width="${W}" height="8" fill="#94a3b8"/>`;

const megaphone = (x, y, s = 1) => `
  <g transform="translate(${x} ${y}) scale(${s})">
    <circle r="34" fill="${ORANGE}"/>
    <path d="M-16 -6 L10 -18 V18 L-16 6Z" fill="#fff"/><rect x="-22" y="-6" width="9" height="12" rx="3" fill="#fff"/>
    <path d="M16 -10 q8 10 0 20M22 -16 q14 16 0 32" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
  </g>`;

const bg = (c1, c2) => `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="90" cy="40" r="140" fill="rgba(255,255,255,0.45)"/>
  <circle cx="730" cy="60" r="110" fill="rgba(255,255,255,0.35)"/>`;

const SCENES = {
  // Marketing : équipe autour d'une présentation de stratégie
  marketing: () => `${bg('#dbeafe', '#bfdbfe')}
    ${desk(252)}
    <rect x="282" y="46" width="236" height="150" rx="12" fill="${INK}"/>
    <rect x="292" y="56" width="216" height="130" rx="6" fill="#fff"/>
    <g transform="translate(340 168) scale(1.3)">${miniBars()}</g>
    <path d="M410 150 L440 118 L470 132 L496 88" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="496" cy="88" r="6" fill="${RED}"/>
    <rect x="304" y="66" width="70" height="8" rx="4" fill="#cbd5e1"/><rect x="304" y="80" width="46" height="8" rx="4" fill="#e2e8f0"/>
    <rect x="392" y="196" width="16" height="30" fill="#64748b"/><rect x="360" y="224" width="80" height="10" rx="5" fill="#64748b"/>
    ${person(190, 156, 1.15, SKIN[3], TEAL, HAIR[0])}
    ${person(618, 156, 1.15, SKIN[1], ORANGE, HAIR[2])}
    ${megaphone(150, 60, 0.9)}
    <g transform="translate(672 66)"><rect x="-40" y="-26" width="80" height="50" rx="14" fill="#fff"/><path d="M-14 24 L-24 40 L2 24Z" fill="#fff"/><circle cx="-16" cy="-1" r="6" fill="${BLUE}"/><circle cx="0" cy="-1" r="6" fill="${ORANGE}"/><circle cx="16" cy="-1" r="6" fill="${TEAL}"/></g>
    <g transform="rotate(-8 90 214)"><rect x="60" y="192" width="60" height="50" rx="4" fill="${YELLOW}"/><rect x="70" y="204" width="40" height="5" rx="2" fill="#b45309"/><rect x="70" y="216" width="28" height="5" rx="2" fill="#b45309"/></g>`,

  // TCI — commerce international : port, navire, conteneurs, globe
  tci: () => `${bg('#e0f2fe', '#bae6fd')}
    <rect x="0" y="238" width="${W}" height="82" fill="#0284c7"/>
    <path d="M0 252 q25 -12 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="4"/>
    <path d="M0 282 q25 -12 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="4"/>
    <rect x="30" y="226" width="200" height="94" fill="#94a3b8"/><rect x="30" y="226" width="200" height="10" fill="#64748b"/>
    ${person(120, 132, 1.05, SKIN[1], NAVY, HAIR[2], `<path d="M-24 -30 a24 24 0 0 1 48 0z" fill="${YELLOW}"/><rect x="-28" y="-32" width="56" height="7" rx="3" fill="${YELLOW}"/>`)}
    <rect x="150" y="150" width="34" height="46" rx="4" fill="#fff" transform="rotate(12 150 150)"/><rect x="157" y="160" width="20" height="4" rx="2" fill="${BLUE}" transform="rotate(12 150 150)"/>
    <path d="M330 236 H700 L664 288 H366Z" fill="${NAVY}"/><path d="M340 236 H690 V246 H340Z" fill="#dc2626"/>
    ${[[366, ORANGE], [420, TEAL], [474, BLUE], [528, RED]].map(([x, c]) => `<rect x="${x}" y="190" width="50" height="46" rx="3" fill="${c}"/><path d="M${x + 12} 196V230M${x + 25} 196V230M${x + 38} 196V230" stroke="rgba(255,255,255,0.45)" stroke-width="3"/>`).join('')}
    ${[[394, BLUE], [448, ORANGE], [502, TEAL]].map(([x, c]) => `<rect x="${x}" y="144" width="50" height="46" rx="3" fill="${c}"/><path d="M${x + 12} 150V184M${x + 25} 150V184M${x + 38} 150V184" stroke="rgba(255,255,255,0.45)" stroke-width="3"/>`).join('')}
    <rect x="600" y="170" width="70" height="66" rx="4" fill="#f8fafc"/><rect x="612" y="182" width="46" height="14" rx="3" fill="${BLUE}"/><rect x="630" y="140" width="10" height="30" fill="#f8fafc"/>
    <g transform="translate(300 74)"><circle r="52" fill="#fff" stroke="${NAVY}" stroke-width="5"/><ellipse rx="22" ry="52" fill="none" stroke="${BLUE}" stroke-width="3"/><path d="M-52 0H52M-44 -26H44M-44 26H44" stroke="${BLUE}" stroke-width="3"/><path d="M-30 -30 q18 -14 34 2 q-8 16 -24 12Z" fill="${TEAL}"/><path d="M6 8 q16 -6 24 10 q-6 16 -22 12Z" fill="${TEAL}"/></g>
    <path d="M356 84 Q470 -10 600 100" fill="none" stroke="${NAVY}" stroke-width="4" stroke-dasharray="3 12" stroke-linecap="round"/>
    <g transform="translate(628 118) rotate(20)"><path d="M0 -6 L46 0 L0 6 L-10 24 L-14 24 L-8 4 L-26 8 L-30 14 L-34 14 L-30 0 L-34 -14 L-30 -14 L-26 -8 L-8 -4 L-14 -24 L-10 -24Z" fill="#fff" stroke="${NAVY}" stroke-width="3" stroke-linejoin="round"/></g>`,

  // FCME — étude de marché : analyste, graphiques, échantillon
  fcme: () => `${bg('#fef3c7', '#fde68a')}
    ${desk(252)}
    <rect x="470" y="34" width="268" height="176" rx="14" fill="#fff" stroke="#e2e8f0" stroke-width="4"/>
    <g transform="translate(548 108) rotate(-90)">
      <circle r="17" fill="none" stroke="${BLUE}" stroke-width="34" stroke-dasharray="48 58.8"/>
      <circle r="17" fill="none" stroke="${ORANGE}" stroke-width="34" stroke-dasharray="32 74.8" stroke-dashoffset="-48"/>
      <circle r="17" fill="none" stroke="${TEAL}" stroke-width="34" stroke-dasharray="26.8 80" stroke-dashoffset="-80"/>
    </g>
    <path d="M604 168 H720" stroke="#cbd5e1" stroke-width="3"/>
    ${[[614, 40], [638, 64], [662, 50], [686, 84]].map(([x, h], i) => `<rect x="${x}" y="${168 - h}" width="18" height="${h}" rx="3" fill="${i % 2 ? ORANGE : BLUE}"/>`).join('')}
    <rect x="608" y="54" width="100" height="9" rx="4" fill="#e2e8f0"/><rect x="608" y="70" width="64" height="9" rx="4" fill="#f1f5f9"/>
    <g transform="translate(690 178)"><circle r="16" fill="none" stroke="${NAVY}" stroke-width="5"/><path d="M12 12 L26 26" stroke="${NAVY}" stroke-width="6" stroke-linecap="round"/></g>
    ${Array.from({ length: 3 }, (_, r) => Array.from({ length: 6 }, (_, c) => `<circle cx="${70 + c * 26}" cy="${58 + r * 26}" r="${(r * 6 + c) % 5 === 2 ? 9 : 6}" fill="${(r * 6 + c) % 5 === 2 ? ORANGE : '#f59e0b'}" opacity="${(r * 6 + c) % 5 === 2 ? 1 : 0.5}"/>`).join('')).join('')}
    ${person(300, 168, 1.2, SKIN[0], NAVY, HAIR[1])}
    ${laptop(392, 250, 1.05, `<g transform="translate(0 0)">${miniBars(BLUE)}</g>`)}
    <rect x="70" y="214" width="70" height="38" rx="4" fill="#fff"/><rect x="76" y="204" width="70" height="10" rx="3" fill="${BLUE}"/><rect x="82" y="190" width="58" height="14" rx="3" fill="${TEAL}"/>
    <g transform="translate(736 232)"><rect x="-14" y="0" width="28" height="22" rx="4" fill="#b45309"/><path d="M0 0 C-30 -20 -22 -50 0 -34 C22 -50 30 -20 0 0Z" fill="#22c55e"/></g>`,

  // TVN — vente & négociation : poignée de main, contrat, boutique
  tvn: () => `${bg('#fce7f3', '#fbcfe8')}
    <rect x="40" y="36" width="230" height="200" rx="6" fill="#fff"/>
    ${Array.from({ length: 6 }, (_, i) => `<path d="M${40 + i * 38.3} 36 h38.3 v34 a19.2 19.2 0 0 1 -38.3 0z" fill="${i % 2 ? '#fff' : RED}"/>`).join('')}
    <rect x="58" y="104" width="194" height="110" rx="4" fill="#e0f2fe"/>
    <rect x="72" y="166" width="42" height="48" rx="3" fill="${ORANGE}"/><rect x="124" y="150" width="42" height="64" rx="3" fill="${TEAL}"/><rect x="176" y="176" width="42" height="38" rx="3" fill="${BLUE}"/>
    ${desk(252)}
    ${person(338, 150, 1.2, SKIN[2], NAVY, HAIR[2])}
    ${person(500, 150, 1.2, SKIN[3], TEAL, HAIR[3])}
    <rect x="352" y="196" width="94" height="20" rx="10" fill="${SKIN[2]}"/><rect x="392" y="196" width="94" height="20" rx="10" fill="${SKIN[3]}"/>
    <circle cx="420" cy="206" r="15" fill="${SKIN[2]}" stroke="${YELLOW}" stroke-width="3"/>
    <g transform="translate(420 60)"><rect x="-44" y="-30" width="88" height="112" rx="8" fill="#fff" transform="rotate(-6)"/>
      <g transform="rotate(-6)"><rect x="-28" y="-14" width="56" height="6" rx="3" fill="#cbd5e1"/><rect x="-28" y="0" width="42" height="6" rx="3" fill="#e2e8f0"/><rect x="-28" y="14" width="50" height="6" rx="3" fill="#e2e8f0"/><circle cx="0" cy="52" r="15" fill="#22c55e"/><path d="M-7 52 l5 6 l10 -12" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></g>
    <g transform="translate(650 112)"><path d="M-44 -6 H44 L54 100 H-54Z" fill="${ORANGE}"/><path d="M-22 -6 V-22 a22 22 0 0 1 44 0 V-6" fill="none" stroke="${ORANGE}" stroke-width="7"/><circle cy="44" r="20" fill="rgba(255,255,255,0.9)"/><text x="0" y="53" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="26" text-anchor="middle" fill="${ORANGE}">%</text></g>
    <g transform="translate(736 214)">${[0, 1, 2].map((i) => `<ellipse cy="${-i * 12}" rx="26" ry="9" fill="${i === 2 ? YELLOW : '#f59e0b'}"/>`).join('')}</g>`,

  // MI — marketing international : réunion devant une carte du monde
  mi: () => `${bg('#dcfce7', '#bbf7d0')}
    <rect x="200" y="20" width="400" height="150" rx="12" fill="${INK}"/>
    <rect x="210" y="30" width="380" height="130" rx="6" fill="#0ea5e9"/>
    ${[[262, 78, 40, 26], [316, 70, 30, 30], [372, 66, 46, 22], [388, 100, 34, 36], [446, 72, 70, 30], [470, 108, 40, 22], [530, 116, 32, 20], [290, 108, 28, 30]].map(([x, y, w, h]) => `<ellipse cx="${x}" cy="${y}" rx="${w / 2}" ry="${h / 2}" fill="#86efac"/>`).join('')}
    ${[[318, 78], [410, 82], [486, 84], [522, 120]].map(([x, y]) => `<g transform="translate(${x} ${y})"><circle r="6" fill="${RED}"/><circle r="12" fill="none" stroke="${RED}" stroke-width="2" opacity="0.6"/></g>`).join('')}
    <path d="M318 78 Q360 30 410 82 M410 82 Q450 40 486 84 M486 84 Q510 90 522 120" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="2 8" stroke-linecap="round"/>
    <rect x="390" y="170" width="20" height="26" fill="#64748b"/>
    ${person(180, 168, 1, SKIN[1], NAVY, HAIR[2])}${person(310, 168, 1, SKIN[0], ORANGE, HAIR[1])}${person(490, 168, 1, SKIN[3], TEAL, HAIR[0])}${person(620, 168, 1, SKIN[2], BLUE, HAIR[3])}
    <rect x="70" y="236" width="660" height="26" rx="12" fill="#a16207"/><rect x="70" y="236" width="660" height="9" rx="4" fill="#ca8a04"/>
    <rect x="90" y="262" width="620" height="58" fill="#e2e8f0"/>
    ${laptop(250, 236, 0.62, miniBars(BLUE))}${laptop(550, 236, 0.62, miniBars(TEAL))}
    <rect x="360" y="222" width="46" height="14" rx="2" fill="#fff" transform="rotate(-4 360 222)"/><rect x="418" y="224" width="46" height="12" rx="2" fill="#fef3c7"/>
    <g transform="translate(88 96)"><rect x="-4" y="-2" width="6" height="64" fill="#64748b"/><path d="M2 0 H40 L32 12 L40 24 H2Z" fill="${RED}"/></g>
    <g transform="translate(712 96)"><rect x="-4" y="-2" width="6" height="64" fill="#64748b"/><path d="M2 0 H40 L32 12 L40 24 H2Z" fill="${BLUE}"/></g>`,
};

for (const [name, scene] of Object.entries(SCENES)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" preserveAspectRatio="xMidYMid slice">${scene()}</svg>\n`;
  writeFileSync(join(outDir, `${name}.svg`), svg);
}
console.log('OK', Object.keys(SCENES).length, 'scènes');
