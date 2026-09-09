import { useId, useMemo } from 'react';
import './TrendChart.css';

export interface TrendPoint {
  label: string;
  value: number | null;
}

interface Props {
  points: TrendPoint[];
  max?: number;
}

const WIDTH = 560;
const HEIGHT = 180;
const PAD_X = 16;
const PAD_Y = 18;

/** A dependency-free SVG area chart, drawn to a fixed 0..max scale so every
 * tick and point represents a real value the data actually reaches. */
export default function TrendChart({ points, max = 20 }: Props) {
  const gradientId = useId();
  const hasData = points.some((p) => p.value !== null);

  const { linePath, areaPath, dots } = useMemo(() => {
    const usableWidth = WIDTH - PAD_X * 2;
    const usableHeight = HEIGHT - PAD_Y * 2;
    const step = points.length > 1 ? usableWidth / (points.length - 1) : 0;

    const coords = points.map((p, i) => {
      const x = PAD_X + step * i;
      const v = p.value ?? 0;
      const y = PAD_Y + usableHeight - (Math.min(v, max) / max) * usableHeight;
      return { x, y, value: p.value };
    });

    const line = coords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x} ${c.y}`).join(' ');
    const area = `${line} L ${coords[coords.length - 1]?.x ?? 0} ${HEIGHT - PAD_Y} L ${coords[0]?.x ?? 0} ${HEIGHT - PAD_Y} Z`;

    return { linePath: line, areaPath: area, dots: coords };
  }, [points, max]);

  return (
    <div className="trend-wrap">
      <svg width="100%" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="trend-svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary-light)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-primary-light)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0, 0.5, 1].map((f) => (
          <line
            key={f}
            x1={PAD_X}
            x2={WIDTH - PAD_X}
            y1={PAD_Y + f * (HEIGHT - PAD_Y * 2)}
            y2={PAD_Y + f * (HEIGHT - PAD_Y * 2)}
            stroke="var(--color-border)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
        ))}

        {hasData ? (
          <>
            <path d={areaPath} fill={`url(#${gradientId})`} className="trend-area" />
            <path d={linePath} fill="none" stroke="var(--color-primary-light)" strokeWidth="2.5" className="trend-line" />
            {dots.map(
              (d, i) =>
                d.value !== null && (
                  <circle key={i} cx={d.x} cy={d.y} r="3.5" fill="var(--color-primary-light)" className="trend-dot" />
                )
            )}
          </>
        ) : null}
      </svg>

      <div className="trend-x-labels">
        {points.map((p) => (
          <span key={p.label}>{p.label}</span>
        ))}
      </div>

      {!hasData ? (
        <div className="trend-empty">
          <span>Pas encore de notes cette annee.</span>
        </div>
      ) : null}
    </div>
  );
}
