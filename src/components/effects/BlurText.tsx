import { Fragment, type ElementType } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  blur?: number;
  rise?: number;
  as?: ElementType;
}

/** Word-by-word reveal (opacity + slight rise + blur-to-sharp), the "Blur
 * Text" effect from the React Bits catalogue reimplemented on top of the
 * framer-motion already used across this app. Plain spaces are rendered as
 * ordinary text nodes between word spans (not baked into each word) so the
 * browser keeps wrapping the line normally on narrow screens. `as` defaults
 * to a plain span but should be set to the real heading/paragraph tag when
 * replacing one, so the document outline stays intact. */
export default function BlurText({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  duration = 0.6,
  blur = 4,
  rise = 8,
  as: Tag = 'span',
}: Props) {
  const reducedMotion = useReducedMotion();
  const words = text.split(' ');

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <motion.span
            style={{ display: 'inline-block', willChange: 'transform, opacity, filter' }}
            initial={{ opacity: 0, y: rise, filter: `blur(${blur}px)` }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </Tag>
  );
}
