import { useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

interface Props {
  children: ReactNode;
  strength?: number;
}

const SPRING = { stiffness: 200, damping: 18, mass: 0.3 };

function supportsHover(): boolean {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

/** Small mouse-tracked magnetic pull — the "Magnet" effect from React Bits —
 * reusing the same useMotionValue/useSpring pattern as TiltCard.tsx. Only
 * active on real mouse pointers (checked once via matchMedia), so touch
 * devices get zero displacement and zero listener overhead. Never touches
 * the child's own onClick — it only translates the box around it. */
export default function MagnetButton({ children, strength = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [enabled] = useState(supportsHover);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!enabled || reducedMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relX * strength * 2);
    y.set(relY * strength * 2);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div ref={ref} style={{ x: springX, y: springY }} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </motion.div>
  );
}
