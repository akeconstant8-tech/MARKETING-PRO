import { useMemo } from 'react';
import './DonutChart.css';

export interface DonutSlice {
  label: string;
  value: number;
  color: string;
}

interface Props {
  slices: DonutSlice[];
  centerValue: string | number;
  centerLabel: string;
}

const SIZE = 160;
const STROKE = 22;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** A dependency-free SVG donut — drawn to scale from real proportions rather
 * than an image, so it stays correct as the underlying data changes. */
export default function DonutChart({ slices, centerValue, centerLabel }: Props) {
  const total = slices.reduce((sum, s) => sum + s.value, 0);

  const arcs = useMemo(() => {
    let offset = 0;
    return slices
      .filter((s) => s.value > 0)
      .map((s) => {
        const fraction = total > 0 ? s.value / total : 0;
        const length = fraction * CIRCUMFERENCE;
        const arc = { ...s, fraction, dasharray: `${length} ${CIRCUMFERENCE - length}`, dashoffset: -offset };
        offset += length;
        return arc;
      });
  }, [slices, total]);

  return (
    <div className="donut-wrap">
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="donut-svg">
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth={STROKE}
        />
        {arcs.map((arc, i) => (
          <circle
            key={arc.label}
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke={arc.color}
            strokeWidth={STROKE}
            strokeDasharray={arc.dasharray}
            strokeDashoffset={arc.dashoffset}
            transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
            className="donut-arc"
            style={{ transitionDelay: `${i * 90}ms` }}
          />
        ))}
        <text x="50%" y="47%" textAnchor="middle" className="donut-center-value">
          {centerValue}
        </text>
        <text x="50%" y="60%" textAnchor="middle" className="donut-center-label">
          {centerLabel}
        </text>
      </svg>

      <ul className="donut-legend">
        {slices.map((s) => (
          <li key={s.label}>
            <span className="donut-legend-dot" style={{ background: s.color }} />
            <span className="donut-legend-label">{s.label}</span>
            <span className="donut-legend-value">{total > 0 ? Math.round((s.value / total) * 100) : 0}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
