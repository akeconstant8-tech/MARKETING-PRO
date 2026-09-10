import { useEffect, useMemo, useRef, useState, type ElementType, type HTMLAttributes } from 'react';
import './TextType.css';

interface VariableSpeed {
  min: number;
  max: number;
}

interface Props extends HTMLAttributes<HTMLElement> {
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
  textColors?: string[];
  variableSpeed?: VariableSpeed;
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Typewriter reveal — the "Text Type" effect from the React Bits catalogue,
 * reimplemented with plain React state/timeouts instead of GSAP (not a
 * dependency of this project) and with two bugs from the original fixed:
 * the pause between looped sentences was a dead no-op setTimeout that never
 * actually delayed anything, and the cursor's blink tween was never cleaned
 * up. Here the pause genuinely gates the transition to the next sentence,
 * and the blink is a plain CSS animation (already frozen globally under
 * prefers-reduced-motion by src/styles/global.css), so there is nothing to
 * clean up. Under reduced motion the full text is shown immediately. */
export default function TextType({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...rest
}: Props) {
  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const reducedMotion = useMemo(prefersReducedMotion, []);

  const [displayedText, setDisplayedText] = useState(reducedMotion ? (textArray[0] ?? '') : '');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible || reducedMotion);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (reducedMotion || !startOnVisible || !containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [reducedMotion, startOnVisible]);

  useEffect(() => {
    if (reducedMotion || !isVisible) return;

    const currentSentence = textArray[sentenceIndex] ?? '';
    const target = reverseMode ? [...currentSentence].reverse().join('') : currentSentence;
    const speed = variableSpeed ? Math.random() * (variableSpeed.max - variableSpeed.min) + variableSpeed.min : typingSpeed;
    const isLastSentence = sentenceIndex === textArray.length - 1;

    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => setDisplayedText((prev) => prev.slice(0, -1)), deletingSpeed);
      } else {
        onSentenceComplete?.(currentSentence, sentenceIndex);
        if (isLastSentence && !loop) return;
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setSentenceIndex((prev) => (prev + 1) % textArray.length);
          setCharIndex(0);
        }, pauseDuration);
      }
    } else if (charIndex < target.length) {
      const delay = charIndex === 0 ? initialDelay : speed;
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + target[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, delay);
    } else if (!(isLastSentence && !loop)) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    }

    return () => clearTimeout(timeout);
  }, [
    reducedMotion,
    isVisible,
    charIndex,
    displayedText,
    isDeleting,
    sentenceIndex,
    textArray,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    initialDelay,
    loop,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
  ]);

  const currentColor = textColors.length > 0 ? textColors[sentenceIndex % textColors.length] : undefined;
  const isTyping = !reducedMotion && !isDeleting && charIndex < (textArray[sentenceIndex]?.length ?? 0);
  const hideCursor = showCursor && hideCursorWhileTyping && (isTyping || isDeleting);

  return (
    <Component ref={containerRef} className={`text-type ${className}`} {...rest}>
      <span className="text-type__content" style={currentColor ? { color: currentColor } : undefined}>
        {displayedText}
      </span>
      {showCursor ? (
        <span className={`text-type__cursor ${cursorClassName} ${hideCursor ? 'text-type__cursor--hidden' : ''}`}>
          {cursorCharacter}
        </span>
      ) : null}
    </Component>
  );
}
