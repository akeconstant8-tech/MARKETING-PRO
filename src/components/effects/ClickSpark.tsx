import { useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import './ClickSpark.css';

interface Spark {
  id: number;
  x: number;
  y: number;
}

interface Props {
  children: ReactNode;
}

const PARTICLE_COUNT = 6;
const DURATION = 0.45;

let nextSparkId = 0;

/** Short burst of particles at the click point — the "Click Spark" effect
 * from React Bits. Purely decorative and non-blocking: it listens on a
 * wrapping div during the bubble phase without calling preventDefault or
 * stopPropagation, so the real button underneath still receives and handles
 * its own onClick exactly as before. */
export default function ClickSpark({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [sparks, setSparks] = useState<Spark[]>([]);

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const id = nextSparkId++;
    setSparks((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => s.id !== id));
    }, DURATION * 1000 + 50);
  }

  return (
    <div ref={ref} className="click-spark-wrap" onClick={handleClick}>
      {children}
      <AnimatePresence>
        {sparks.map((spark) => (
          <span key={spark.id} className="click-spark-burst" style={{ left: spark.x, top: spark.y }}>
            {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
              const angle = ((360 / PARTICLE_COUNT) * i * Math.PI) / 180;
              return (
                <motion.span
                  key={i}
                  className="click-spark-particle"
                  initial={{ opacity: 1, x: 0, y: 0 }}
                  animate={{ opacity: 0, x: Math.cos(angle) * 18, y: Math.sin(angle) * 18 }}
                  transition={{ duration: DURATION, ease: 'easeOut' }}
                />
              );
            })}
          </span>
        ))}
      </AnimatePresence>
    </div>
  );
}
