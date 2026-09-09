import './HamburgerIcon.css';

interface Props {
  open: boolean;
}

/** Three bars that morph into an X — no icon library ships this as a single
 * animatable glyph, so it's built from spans instead. */
export default function HamburgerIcon({ open }: Props) {
  return (
    <span className={`hamburger ${open ? 'hamburger-open' : ''}`}>
      <span className="hamburger-bar" />
      <span className="hamburger-bar" />
      <span className="hamburger-bar" />
    </span>
  );
}
