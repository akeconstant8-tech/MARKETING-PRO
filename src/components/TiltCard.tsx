import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import './TiltCard.css';

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  as?: 'div' | 'button';
  maxTilt?: number;
}

const SPRING = { stiffness: 260, damping: 22, mass: 0.4 };

/** Mouse-tracked 3D tilt with a moving glare highlight — the depth cue that
 * makes a flat card read as a physical, hoverable object rather than a flat
 * tile. Elevation (translateY/scale) lives on the outer element; the 3D
 * rotation lives on an inner wrapper so the card's shadow/border never spin
 * with the content. */
export default function TiltCard({ children, className, style, onClick, as = 'div', maxTilt = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), SPRING);
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), SPRING);
  const glareX = useTransform(px, [0, 1], ['0%', '100%']);
  const glareY = useTransform(py, [0, 1], ['0%', '100%']);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4), transparent 60%)`;

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  const Comp = (as === 'button' ? motion.button : motion.div) as typeof motion.div;

  return (
    <Comp
      ref={ref}
      className={`tilt-card ${className ?? ''}`}
      style={{ ...style, perspective: 900, cursor: onClick ? 'pointer' : style?.cursor }}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={reducedMotion ? undefined : { y: -6, scale: 1.015 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      transition={SPRING}
    >
      <motion.div
        className="tilt-card-inner"
        style={reducedMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        {children}
        {reducedMotion ? null : <motion.span className="tilt-card-glare" style={{ background: glareBackground }} />}
      </motion.div>
    </Comp>
  );
}
