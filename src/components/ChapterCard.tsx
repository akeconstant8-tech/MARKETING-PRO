import type { CSSProperties } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { getChapterVisual } from '../data/chapterVisuals';
import { tciChapters, type TciChapter } from '../data/tciCourse';
import TiltCard from './TiltCard';
import './ChapterCard.css';

interface Props {
  chapter: TciChapter;
  viewed: boolean;
  onOpen: () => void;
  index?: number;
}

export default function ChapterCard({ chapter, viewed, onOpen, index = 0 }: Props) {
  const visual = getChapterVisual(chapter.number);
  const Icon = visual.icon;
  const casPosition = tciChapters.filter((c) => c.level === chapter.level && c.kind === 'cas').findIndex((c) => c.id === chapter.id) + 1;

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
        <span className={`chapter-card-kind chapter-card-kind-${visual.tone}`}>
          {chapter.kind === 'chapitre' ? `Chapitre ${chapter.number}` : `Cas pratique ${casPosition}`}
        </span>
        <h4 className="chapter-card-title">{chapter.title}</h4>
        <button className={`chapter-card-link chapter-card-link-${visual.tone}`} onClick={onOpen}>
          Voir →
        </button>
      </div>
    </TiltCard>
  );
}
