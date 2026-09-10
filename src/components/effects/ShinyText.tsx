import type { ReactNode } from 'react';
import './ShinyText.css';

interface Props {
  children: ReactNode;
  className?: string;
}

/** Subtle animated light sweep over an already-gold word, the "Shiny Text"
 * effect from React Bits. The gradient is built from the same accent color
 * on both sides of the highlight band, so at rest — and always, under
 * prefers-reduced-motion, which the global stylesheet already freezes this
 * animation for — it reads as the exact same solid gold as before. */
export default function ShinyText({ children, className }: Props) {
  return <span className={`shiny-text ${className ?? ''}`}>{children}</span>;
}
