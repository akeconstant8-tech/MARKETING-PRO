import type { ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

/** A short 3D flip between routes — the page rotates in around its top edge
 * instead of a flat fade, which reads as far more "premium SaaS" while
 * staying under 350ms. Falls back to a plain fade when the OS asks for
 * reduced motion, since rotateX/translate can't be stopped by CSS media
 * queries once Framer Motion owns the transform. */
export default function PageTransition({ children }: Props) {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  const variants = reducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, rotateX: -6, y: 18 },
        animate: { opacity: 1, rotateX: 0, y: 0 },
        exit: { opacity: 0, rotateX: 6, y: -10 },
      };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={variants.initial}
        animate={variants.animate}
        exit={variants.exit}
        transition={{ duration: 0.32, ease: EASE_PREMIUM }}
        style={{ transformPerspective: 1400, transformOrigin: 'top center' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
