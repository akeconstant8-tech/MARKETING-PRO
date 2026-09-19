import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, ChevronLeft, ChevronRight, FileText, List, Quote, X } from 'lucide-react';
import { tciChapters, TCI_COURSE_SUBTITLE, TCI_COURSE_TITLE } from '../data/tciCourse';
import type { TciSection } from '../data/tciCourse';
import TciDiagramView from './TciDiagramView';
import commerceImage from '../assets/images/reader/commerce-international.jpg';
import './TeachingReader.css';

interface Props {
  startIndex: number;
  onClose: () => void;
}

const SECTION_TONES = ['tone-indigo', 'tone-green', 'tone-purple', 'tone-orange', 'tone-blue'] as const;
const BADGE_TONES = ['badge-blue', 'badge-green', 'badge-purple', 'badge-orange'] as const;

function sectionIcon(section: TciSection) {
  return section.list ? List : FileText;
}

/** A hardcoded, in-app reader for the TCI course — deliberately not backed by
 * Firebase Storage/Firestore, so it renders instantly with zero setup and
 * ships as part of the app bundle. */
export default function TeachingReader({ startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const chapter = tciChapters[index];
  const total = tciChapters.length;

  function go(delta: number) {
    setIndex((i) => Math.min(total - 1, Math.max(0, i + delta)));
  }

  return (
    <div className="reader-backdrop" onClick={onClose}>
      <div className="reader-modal" onClick={(e) => e.stopPropagation()}>
        <div className="reader-header">
          <div className="reader-header-left">
            <div className="reader-header-icon">
              <BookOpen size={20} />
            </div>
            <div className="reader-header-text">
              <span className="reader-kicker">{TCI_COURSE_TITLE}</span>
              <span className="reader-kicker-sub">{TCI_COURSE_SUBTITLE}</span>
            </div>
          </div>
          <div className="reader-header-right">
            <span className="reader-page-pill">
              {chapter.kind === 'chapitre' ? 'Chapitre' : 'Cas pratique'} {chapter.number} sur {total}
            </span>
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
                key={chapter.id}
                className="reader-page"
                style={{ transformPerspective: 1400 }}
                initial={{ opacity: 0, rotateY: -8, x: 24 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: 8, x: -24 }}
                transition={{ duration: 0.32, ease: [0.45, 0, 0.55, 1] }}
              >
                <span className="reader-eyebrow">
                  {chapter.kind === 'chapitre' ? `Chapitre ${chapter.number}` : 'Cas pratique'}
                </span>
                <h2 className="reader-title">{chapter.title}</h2>

                <div className="reader-intro-card">
                  <span className="reader-intro-icon">
                    <Quote size={16} />
                  </span>
                  <p>{chapter.intro}</p>
                </div>

                {chapter.sections.map((s, i) => {
                  const tone = SECTION_TONES[i % SECTION_TONES.length];
                  const Icon = sectionIcon(s);
                  return (
                    <div key={i} className={`reader-section ${tone}`}>
                      {s.heading ? (
                        <div className="reader-section-head">
                          <span className="reader-section-icon">
                            <Icon size={15} />
                          </span>
                          <h3>{s.heading}</h3>
                        </div>
                      ) : null}
                      {s.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
                      {s.list ? (
                        <ul className={`reader-badge-list${s.list.some((li) => li.length > 70) ? ' reader-badge-list-long' : ''}`}>
                          {s.list.map((li, k) => (
                            <li key={k}>
                              <span className={`reader-badge ${BADGE_TONES[k % BADGE_TONES.length]}`}>{k + 1}</span>
                              <span>{li}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {s.formulas?.map((f, j) => (
                        <div key={j} className="reader-formula">
                          {f}
                        </div>
                      ))}
                      {s.table ? (
                        <div className="reader-table-wrap">
                          <table className="reader-table">
                            {s.table.caption ? <caption>{s.table.caption}</caption> : null}
                            <thead>
                              <tr>
                                {s.table.headers.map((h, k) => (
                                  <th key={k}>{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {s.table.rows.map((row, r) => (
                                <tr key={r}>
                                  {row.map((cell, c) => (
                                    <td key={c}>{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : null}
                      {s.figure ? (
                        <figure className="reader-figure">
                          <img src={s.figure.src} alt={s.figure.alt} loading="lazy" />
                          {s.figure.caption ? <figcaption>{s.figure.caption}</figcaption> : null}
                        </figure>
                      ) : null}
                      {s.diagram ? <TciDiagramView diagram={s.diagram} /> : null}
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="reader-side" style={{ backgroundImage: `url(${commerceImage})` }}>
            <div className="reader-side-scrim" />
            <div className="reader-side-text">
              <h4>Commerce International</h4>
              <p>Des opportunites sans frontieres</p>
              <span className="reader-side-rule" />
            </div>
          </div>
        </div>

        <div className="reader-footer">
          <button className="reader-footer-btn" onClick={() => go(-1)} disabled={index === 0}>
            <ChevronLeft size={16} />
            Chapitre precedent
          </button>
          <div className="reader-footer-center">
            <div className="reader-dots">
              {tciChapters.map((c, i) => (
                <button
                  key={c.id}
                  className={`reader-dot ${i === index ? 'reader-dot-active' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={c.title}
                />
              ))}
            </div>
            <span className="reader-counter">
              {index + 1} / {total}
            </span>
          </div>
          <button className="reader-footer-btn reader-footer-btn-primary" onClick={() => go(1)} disabled={index === total - 1}>
            Chapitre suivant
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
