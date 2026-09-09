import { useEffect, useRef, useState } from 'react';

const DURATION_MS = 700;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Animates a number counting up to `target` whenever it changes. CSS-only
 * media queries can't stop a requestAnimationFrame loop, so reduced-motion
 * is checked here in JS too. */
export function useCountUp(target: number): number {
  const [value, setValue] = useState(prefersReducedMotion() ? target : 0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    const start = performance.now();
    const from = 0;

    function tick(now: number) {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / DURATION_MS);
      setValue(Math.round(from + (target - from) * easeOutCubic(t)));
      if (t < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    }

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [target]);

  return value;
}
