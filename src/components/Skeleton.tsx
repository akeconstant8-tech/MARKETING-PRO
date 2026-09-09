import type { CSSProperties } from 'react';
import './Skeleton.css';

interface Props {
  width?: string | number;
  height?: string | number;
  radius?: string;
  circle?: boolean;
  className?: string;
}

export default function Skeleton({ width = '100%', height = 16, radius, circle, className }: Props) {
  const style: CSSProperties = {
    width: circle ? height : width,
    height,
    borderRadius: circle ? '50%' : (radius ?? 'var(--radius-sm)'),
  };

  return <span className={`skeleton ${className ?? ''}`} style={style} />;
}
