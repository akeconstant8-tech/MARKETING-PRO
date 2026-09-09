import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { ChevronLeft, ChevronRight, Loader2, X } from 'lucide-react';
import './PdfFlipViewer.css';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

interface Props {
  url: string;
  title: string;
  onClose: () => void;
}

interface FlipState {
  from: number;
  to: number;
  dir: 1 | -1;
}

/** Renders every page of a PDF to an image once, then flips between them with
 * a real 3D page-turn (rotateY around the page's spine) instead of a plain
 * crossfade — the effect the user specifically asked for. */
export default function PdfFlipViewer({ url, title, onClose }: Props) {
  const [pageImages, setPageImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [anim, setAnim] = useState<FlipState | null>(null);
  const animatingRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setPage(1);
    setPageImages([]);

    (async () => {
      try {
        const pdf = await pdfjsLib.getDocument({ url }).promise;
        const images: string[] = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          if (cancelled) return;
          const pdfPage = await pdf.getPage(i);
          const viewport = pdfPage.getViewport({ scale: 1.4 });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await pdfPage.render({ canvas, viewport }).promise;
          images.push(canvas.toDataURL('image/jpeg', 0.85));
        }
        if (!cancelled) {
          setPageImages(images);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError('Impossible de charger ce document.');
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [url]);

  const totalPages = pageImages.length;

  function goTo(targetPage: number) {
    if (animatingRef.current || targetPage < 1 || targetPage > totalPages || targetPage === page) return;
    animatingRef.current = true;
    setAnim({ from: page, to: targetPage, dir: targetPage > page ? 1 : -1 });
  }

  function handleFlipComplete() {
    if (!anim) return;
    setPage(anim.to);
    setAnim(null);
    animatingRef.current = false;
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') goTo(page + 1);
      if (e.key === 'ArrowLeft') goTo(page - 1);
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const bottomSrc = pageImages[(anim ? anim.to : page) - 1];
  const topSrc = pageImages[(anim ? anim.from : page) - 1];

  return (
    <div className="pdf-viewer-backdrop" onClick={onClose}>
      <div className="pdf-viewer" onClick={(e) => e.stopPropagation()}>
        <div className="pdf-viewer-header">
          <span className="pdf-viewer-title">{title}</span>
          <button className="pdf-viewer-close" onClick={onClose} aria-label="Fermer">
            <X size={20} />
          </button>
        </div>

        <div className="pdf-viewer-stage">
          {loading ? (
            <div className="pdf-viewer-loading">
              <Loader2 className="pdf-spin" size={28} />
              <span>Chargement du document...</span>
            </div>
          ) : error ? (
            <div className="pdf-viewer-error">{error}</div>
          ) : (
            <div className="pdf-flip-perspective">
              <div className="pdf-flip-page pdf-flip-page-bottom">{bottomSrc ? <img src={bottomSrc} alt="" /> : null}</div>
              <motion.div
                key={anim ? `${anim.from}-${anim.to}` : `static-${page}`}
                className="pdf-flip-page pdf-flip-page-top"
                style={{ transformOrigin: anim && anim.dir < 0 ? 'right center' : 'left center' }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: anim ? anim.dir * -180 : 0 }}
                transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
                onAnimationComplete={handleFlipComplete}
              >
                {topSrc ? <img src={topSrc} alt="" /> : null}
                <div className="pdf-flip-shade" />
              </motion.div>
            </div>
          )}
        </div>

        <div className="pdf-viewer-footer">
          <button className="pdf-nav-btn" onClick={() => goTo(page - 1)} disabled={page <= 1 || loading || !!error}>
            <ChevronLeft size={18} />
          </button>
          <span className="pdf-page-counter">
            Page {page} / {totalPages || '—'}
          </span>
          <button className="pdf-nav-btn" onClick={() => goTo(page + 1)} disabled={page >= totalPages || loading || !!error}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
