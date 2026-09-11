import type { CSSProperties } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { getSubjectExpertise } from '../utils/subjectExpertise';
import TiltCard from './TiltCard';
import type { Course } from '../types';
import './ChapterCard.css';

interface Props {
  course: Course;
  subjectNom: string;
  viewed: boolean;
  onOpen: () => void;
  index?: number;
}

const TONES = ['blue', 'green', 'purple', 'orange', 'teal', 'indigo', 'red'];

/** Same visual language as ChapterCard (the TCI course cards) so a
 * teacher's own course reads as first-class content, not a second-tier
 * feature — reuses ChapterCard.css directly rather than duplicating it. No
 * per-course photo exists, so the header falls back to the tone gradient,
 * exactly like the TCI chapters that don't have a supplied photo either. */
export default function TeachingCourseCard({ course, subjectNom, viewed, onOpen, index = 0 }: Props) {
  const { icon: Icon, domain } = getSubjectExpertise(subjectNom);
  const tone = TONES[index % TONES.length];

  return (
    <TiltCard className="chapter-card fade-in-up" style={{ '--stagger-index': index } as CSSProperties} maxTilt={5}>
      <div className={`chapter-card-photo chapter-card-photo-${tone}`}>
        <div className={`chapter-card-icon chapter-card-icon-${tone}`}>
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
        <span className={`chapter-card-kind chapter-card-kind-${tone}`}>{domain}</span>
        <h4 className="chapter-card-title">{course.titre}</h4>
        <button className={`chapter-card-link chapter-card-link-${tone}`} onClick={onOpen}>
          Voir →
        </button>
      </div>
    </TiltCard>
  );
}
