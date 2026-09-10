import type { ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

interface ListProps {
  className?: string;
  children: ReactNode;
}

/** Staggered reveal container — the "Animated List" effect from React Bits,
 * built on the framer-motion `variants`/`staggerChildren` primitives already
 * used elsewhere in this app (TeachingReader, TiltCard). */
export function AnimatedList({ className, children }: ListProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <ul className={className}>{children}</ul>;
  }

  return (
    <motion.ul className={className} variants={containerVariants} initial="hidden" animate="show">
      {children}
    </motion.ul>
  );
}

interface ItemProps {
  children: ReactNode;
}

export function AnimatedListItem({ children }: ItemProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <li>{children}</li>;
  }

  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ y: -3, boxShadow: '0 8px 18px rgba(15, 28, 46, 0.14)' }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderRadius: 'var(--radius-sm)' }}
    >
      {children}
    </motion.li>
  );
}
