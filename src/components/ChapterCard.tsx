import type { CSSProperties } from 'react';
import { CheckCircle2, Play } from 'lucide-react';
import type { ChapterVisual } from '../data/chapterVisuals';
import TiltCard from './TiltCard';
import './ChapterCard.css';

interface ChapterCardChapter {
  id: string;
  number: number;
  title: string;
}

interface Props {
  chapter: ChapterCardChapter;
  visual: ChapterVisual;
  /** Precomputed badge text, e.g. "Chapitre 3" or "Cas pratique 2" — left to
   * the caller since it depends on how the chapter fits into its own course
   * (TCI's cas pratiques are numbered by position, MI has none at all). */
  label: string;
  viewed: boolean;
  onOpen: () => void;
  index?: number;
}

export default function ChapterCard({ chapter, visual, label, viewed, onOpen, index = 0 }: Props) {
  const Icon = visual.icon;

  return (
    <TiltCard className="chapter-card fade-in-up" style={{ '--stagger-index': index } as CSSProperties} maxTilt={5}>
      <div
        className={`chapter-card-photo ${!visual.image ? `chapter-card-photo-${visual.tone}` : ''}`}
        style={
          visual.image
            ? { backgroundImage: `url(${visual.image})`, backgroundPosition: visual.imagePosition ?? 'center' }
            : undefined
        }
      >
        <div className={`chapter-card-icon chapter-card-icon-${visual.tone}`}>
          <Icon size={18} />
        </div>
        {viewed ? (
          <span className="chapter-card-viewed">
            <CheckCircle2 size={13} />
            Consulte
          </span>
        ) : null}
      </div>
      <div className="chapter-card-body">
        <span className={`chapter-card-kind chapter-card-kind-${visual.tone}`}>{label}</span>
        <h4 className="chapter-card-title">{chapter.title}</h4>
        <div className="chapter-card-progress" aria-label={viewed ? 'Consulté' : 'Non consulté'}>
          <div className={`chapter-card-progress-bar chapter-card-progress-${visual.tone}`} style={{ width: viewed ? '100%' : '0%' }} />
        </div>
        <span className="chapter-card-progress-label">{viewed ? 'Consulté' : 'À découvrir'}</span>
        <button className={`chapter-card-link chapter-card-link-${visual.tone}`} onClick={onOpen}>
          <Play size={12} fill="currentColor" />
          Voir le cours
        </button>
      </div>
    </TiltCard>
  );
}
