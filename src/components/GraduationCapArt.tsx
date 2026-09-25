/** Illustration vectorielle du bandeau de bienvenue : bonnet de diplômé,
 * diplôme et rubans dorés. Décorative (aria-hidden), sans texte. */
export default function GraduationCapArt() {
  return (
    <svg className="graduation-cap-art" viewBox="0 0 360 140" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="gca-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6dc8a" />
          <stop offset="1" stopColor="#b8860b" />
        </linearGradient>
        <linearGradient id="gca-cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b4453" />
          <stop offset="1" stopColor="#111827" />
        </linearGradient>
      </defs>
      <path d="M6 120 C90 70 150 128 230 88 S330 40 356 56" fill="none" stroke="url(#gca-gold)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M30 132 C110 96 170 136 250 104 S334 70 356 84" fill="none" stroke="url(#gca-gold)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
      <g transform="rotate(-8 96 104)">
        <rect x="40" y="92" width="118" height="26" rx="13" fill="#fdf6e3" stroke="#e5d3a1" strokeWidth="2" />
        <ellipse cx="46" cy="105" rx="9" ry="13" fill="#f3e6bd" stroke="#e5d3a1" strokeWidth="2" />
        <ellipse cx="152" cy="105" rx="9" ry="13" fill="#f3e6bd" stroke="#e5d3a1" strokeWidth="2" />
        <rect x="88" y="92" width="14" height="26" fill="#dc2626" />
        <path d="M95 118 l-8 16 l8 -5 l8 5 l-8 -16z" fill="#dc2626" />
      </g>
      <path d="M118 74 V100 C118 118 242 118 242 100 V74 L180 94Z" fill="#0b1220" />
      <polygon points="180,22 292,58 180,94 68,58" fill="url(#gca-cap)" />
      <polygon points="180,22 292,58 180,60" fill="rgba(255,255,255,0.09)" />
      <circle cx="180" cy="58" r="7" fill="url(#gca-gold)" />
      <path d="M180 58 L270 66 V108" fill="none" stroke="url(#gca-gold)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M262 106 h16 l4 20 h-24z" fill="url(#gca-gold)" />
      <path d="M266 126 v10 M270 126 v12 M274 126 v10" stroke="url(#gca-gold)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
