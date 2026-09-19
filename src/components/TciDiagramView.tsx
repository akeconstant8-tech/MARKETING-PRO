import { useId } from 'react';
import type { TciDiagram, TciDiagramArrow } from '../data/tciTypes';

/** Point situé à mi-longueur d'une polyligne (pour placer le badge numéroté d'une flèche). */
function midpoint(points: [number, number][]): [number, number] {
  const lengths: number[] = [];
  let total = 0;
  for (let i = 1; i < points.length; i++) {
    const d = Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]);
    lengths.push(d);
    total += d;
  }
  let remaining = total / 2;
  for (let i = 0; i < lengths.length; i++) {
    if (remaining <= lengths[i]) {
      const t = lengths[i] === 0 ? 0 : remaining / lengths[i];
      return [
        points[i][0] + (points[i + 1][0] - points[i][0]) * t,
        points[i][1] + (points[i + 1][1] - points[i][1]) * t,
      ];
    }
    remaining -= lengths[i];
  }
  return points[0];
}

function badgePosition(arrow: TciDiagramArrow): [number, number] {
  return arrow.badge?.at ?? midpoint(arrow.points);
}

/** Schéma du cours (flux, circuits de paiement, procédures) dessiné en SVG à partir de données. */
export default function TciDiagramView({ diagram }: { diagram: TciDiagram }) {
  const markerId = `tci-arrow-${useId().replace(/:/g, '')}`;

  return (
    <figure className="reader-diagram">
      <svg
        viewBox={`0 0 ${diagram.width} ${diagram.height}`}
        role="img"
        aria-label={diagram.caption ?? 'Schéma du cours'}
        className="reader-diagram-svg"
      >
        <defs>
          <marker id={markerId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" className="reader-diagram-head" />
          </marker>
        </defs>

        {diagram.arrows?.map((arrow, i) => (
          <polyline
            key={`a${i}`}
            points={arrow.points.map((p) => p.join(',')).join(' ')}
            className="reader-diagram-line"
            strokeDasharray={arrow.dashed ? '5 4' : undefined}
            markerEnd={arrow.noHead ? undefined : `url(#${markerId})`}
          />
        ))}

        {diagram.boxes.map((box, i) => {
          const rows = box.label ? box.label.split('\n') : [];
          const cx = box.x + box.w / 2;
          const cy = box.y + box.h / 2;
          const startY = cy - ((rows.length - 1) * 15) / 2;
          return (
            <g key={`b${i}`}>
              <rect
                x={box.x}
                y={box.y}
                width={box.w}
                height={box.h}
                rx={4}
                className={box.emphasis ? 'reader-diagram-box reader-diagram-box-emph' : 'reader-diagram-box'}
              />
              {rows.map((row, r) => (
                <text
                  key={r}
                  x={cx}
                  y={startY + r * 15}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={box.emphasis ? 'reader-diagram-text reader-diagram-text-bold' : 'reader-diagram-text'}
                >
                  {row}
                </text>
              ))}
            </g>
          );
        })}

        {diagram.labels?.map((label, i) => (
          <text
            key={`l${i}`}
            x={label.x}
            y={label.y}
            textAnchor={label.anchor ?? 'start'}
            className={label.bold ? 'reader-diagram-text reader-diagram-text-bold' : 'reader-diagram-text'}
          >
            {label.text}
          </text>
        ))}

        {diagram.arrows?.map((arrow, i) => {
          if (arrow.label) {
            return (
              <text key={`al${i}`} x={arrow.label.x} y={arrow.label.y} textAnchor={arrow.label.anchor ?? 'start'} className="reader-diagram-text">
                {arrow.label.text}
              </text>
            );
          }
          return null;
        })}

        {diagram.arrows?.map((arrow, i) => {
          if (!arrow.badge) return null;
          const [bx, by] = badgePosition(arrow);
          const wide = arrow.badge.text.length > 1;
          return (
            <g key={`bd${i}`}>
              <ellipse cx={bx} cy={by} rx={wide ? 12 : 10} ry={10} className="reader-diagram-badge" />
              <text x={bx} y={by} textAnchor="middle" dominantBaseline="central" className="reader-diagram-badge-text">
                {arrow.badge.text}
              </text>
            </g>
          );
        })}
      </svg>
      {diagram.caption ? <figcaption>{diagram.caption}</figcaption> : null}
    </figure>
  );
}
