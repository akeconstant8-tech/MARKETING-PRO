import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileText, Quote, X } from 'lucide-react';
import { getSubjectExpertise } from '../utils/subjectExpertise';
import type { Course, CourseAttachment } from '../types';
import './TeachingReader.css';
import './CourseReader.css';

interface ReaderSection {
  heading: string;
  text: string;
}

interface Props {
  courses: Course[];
  startIndex: number;
  subjectNomById: Map<string, string>;
  onClose: () => void;
  onOpenAttachment: (attachment: CourseAttachment) => void;
}

const SECTION_TONES = ['tone-indigo', 'tone-green', 'tone-purple', 'tone-orange', 'tone-blue'] as const;
const TONES = ['blue', 'green', 'purple', 'orange', 'teal', 'indigo', 'red'];

function buildSections(course: Course): ReaderSection[] {
  const sections: ReaderSection[] = [];
  if (course.contenu?.trim()) sections.push({ heading: 'Contenu du cours', text: course.contenu });
  if (course.exemples?.trim()) sections.push({ heading: 'Exemple', text: course.exemples });
  if (course.casPratique?.trim()) sections.push({ heading: 'Cas pratique', text: course.casPratique });
  if (course.resume?.trim()) sections.push({ heading: 'Resume', text: course.resume });
  if (course.references?.trim()) sections.push({ heading: 'References', text: course.references });
  return sections;
}

/** Same reader used for the TCI course, reused for the teacher's own
 * courses so a course they add reads exactly like "Commerce International" —
 * built from the real content they filled in (objectifs/contenu/exemples/
 * casPratique/resume/references), with an honest empty state when none of
 * that has been filled in yet, rather than inventing placeholder text. */
export default function CourseReader({ courses, startIndex, subjectNomById, onClose, onOpenAttachment }: Props) {
  const [index, setIndex] = useState(startIndex);
  const course = courses[index];
  const total = courses.length;
  const subjectNom = subjectNomById.get(course.subjectId) ?? '';
  const { icon: Icon, domain } = getSubjectExpertise(subjectNom);
  const tone = TONES[index % TONES.length];
  const sections = buildSections(course);
  const attachments = course.attachments ?? [];

  function go(delta: number) {
    setIndex((i) => Math.min(total - 1, Math.max(0, i + delta)));
  }

  return (
    <div className="reader-backdrop" onClick={onClose}>
      <div className="reader-modal" onClick={(e) => e.stopPropagation()}>
        <div className="reader-header">
          <div className="reader-header-left">
            <div className="reader-header-icon">
              <Icon size={20} />
            </div>
            <div className="reader-header-text">
              <span className="reader-kicker">{course.titre}</span>
              <span className="reader-kicker-sub">{subjectNom}</span>
            </div>
          </div>
          <div className="reader-header-right">
            {total > 1 ? (
              <span className="reader-page-pill">
                Cours {index + 1} sur {total}
              </span>
            ) : null}
            <button className="reader-nav-btn" onClick={() => go(-1)} disabled={index === 0} aria-label="Precedent">
              <ChevronLeft size={17} />
            </button>
            <button
              className="reader-nav-btn"
              onClick={() => go(1)}
              disabled={index === total - 1}
              aria-label="Suivant"
            >
              <ChevronRight size={17} />
            </button>
            <button className="reader-close" onClick={onClose} aria-label="Fermer">
              <X size={19} />
            </button>
          </div>
        </div>

        <div className="reader-split">
          <div className="reader-body">
            <AnimatePresence mode="wait">
              <motion.div
                key={course.id}
                className="reader-page"
                style={{ transformPerspective: 1400 }}
                initial={{ opacity: 0, rotateY: -8, x: 24 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: 8, x: -24 }}
                transition={{ duration: 0.32, ease: [0.45, 0, 0.55, 1] }}
              >
                <span className="reader-eyebrow">{course.chapitre || 'Cours'}</span>
                <h2 className="reader-title">{course.titre}</h2>

                {course.objectifs?.trim() ? (
                  <div className="reader-intro-card">
                    <span className="reader-intro-icon">
                      <Quote size={16} />
                    </span>
                    <p>{course.objectifs}</p>
                  </div>
                ) : null}

                {sections.length === 0 && !course.objectifs?.trim() ? (
                  <p className="course-reader-empty">
                    Ce cours n'a pas encore de contenu detaille — seuls le titre et les documents joints sont
                    disponibles pour le moment.
                  </p>
                ) : null}

                {sections.map((s, i) => {
                  const sectionTone = SECTION_TONES[i % SECTION_TONES.length];
                  return (
                    <div key={s.heading} className={`reader-section ${sectionTone}`}>
                      <div className="reader-section-head">
                        <span className="reader-section-icon">
                          <FileText size={15} />
                        </span>
                        <h3>{s.heading}</h3>
                      </div>
                      {s.text.split('\n').filter(Boolean).map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  );
                })}

                {attachments.length > 0 ? (
                  <div className="reader-section tone-blue">
                    <div className="reader-section-head">
                      <span className="reader-section-icon">
                        <FileText size={15} />
                      </span>
                      <h3>Documents joints</h3>
                    </div>
                    <ul className="course-reader-attachments">
                      {attachments.map((a) => (
                        <li key={a.storagePath}>
                          <button onClick={() => onOpenAttachment(a)}>
                            <FileText size={14} />
                            {a.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={`reader-side course-reader-side-${tone}`}>
            <div className="reader-side-scrim" />
            <div className="reader-side-text">
              <h4>{subjectNom}</h4>
              <p>{domain}</p>
              <span className="reader-side-rule" />
            </div>
          </div>
        </div>

        <div className="reader-footer">
          <button className="reader-footer-btn" onClick={() => go(-1)} disabled={index === 0}>
            <ChevronLeft size={16} />
            Cours precedent
          </button>
          <div className="reader-footer-center">
            {total > 1 ? (
              <div className="reader-dots">
                {courses.map((c, i) => (
                  <button
                    key={c.id}
                    className={`reader-dot ${i === index ? 'reader-dot-active' : ''}`}
                    onClick={() => setIndex(i)}
                    aria-label={c.titre}
                  />
                ))}
              </div>
            ) : null}
            <span className="reader-counter">
              {index + 1} / {total}
            </span>
          </div>
          <button
            className="reader-footer-btn reader-footer-btn-primary"
            onClick={() => go(1)}
            disabled={index === total - 1}
          >
            Cours suivant
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
