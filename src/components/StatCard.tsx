import type { CSSProperties, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
import TiltCard from './TiltCard';
import './StatCard.css';

export type StatTone = 'blue' | 'green' | 'purple' | 'orange';

interface Props {
  icon: LucideIcon;
  label: string;
  value: string | number;
  accent?: boolean;
  tone?: StatTone;
  to?: string;
  index?: number;
}

export default function StatCard({ icon: Icon, label, value, accent, tone, to, index = 0 }: Props) {
  const navigate = useNavigate();
  const isNumeric = typeof value === 'number';
  const counted = useCountUp(isNumeric ? value : 0);
  const style = { '--stagger-index': index } as CSSProperties;
  const toneClass = tone ? `stat-icon-${tone}` : '';

  function handleGoTo(e: MouseEvent) {
    e.stopPropagation();
    if (to) navigate(to);
  }

  return (
    <TiltCard className={`stat-card fade-in-up ${accent ? 'stat-card-accent' : ''}`} style={style} maxTilt={8}>
      <div className="stat-card-top">
        <div className={`stat-icon ${toneClass}`}>
          <Icon size={20} color={accent ? '#fff' : undefined} />
        </div>
        {to ? (
          <button className="stat-card-goto" onClick={handleGoTo} aria-label={`Voir ${label}`}>
            <ArrowUpRight size={14} />
          </button>
        ) : null}
      </div>
      <div className="stat-value">{isNumeric ? counted : value}</div>
      <div className="stat-label">{label}</div>
    </TiltCard>
  );
}
