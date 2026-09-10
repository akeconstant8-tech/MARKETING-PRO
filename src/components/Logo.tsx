import { motion, useReducedMotion } from 'framer-motion';
import './Logo.css';

// marketing-pro.png is the full brand lockup (icon + wordmark + tagline
// baked into one image, transparent background) — used at "large" size
// where it has room to breathe. marketing-pro-icon.png is a crop of just
// the emblem (also transparent), used at "small"/"medium" alongside
// separately-rendered text (the full lockup's baked-in text would be
// illegible shrunk to header height).
const lockupModules = import.meta.glob<string>('../assets/images/logo/marketing-pro.png', {
  eager: true,
  import: 'default',
});
const iconModules = import.meta.glob<string>('../assets/images/logo/marketing-pro-icon.png', {
  eager: true,
  import: 'default',
});
const lockupSrc = Object.values(lockupModules)[0];
const iconSrc = Object.values(iconModules)[0];

export type LogoSize = 'small' | 'medium' | 'large';

interface Props {
  size?: LogoSize;
}

export default function Logo({ size = 'large' }: Props) {
  const reducedMotion = useReducedMotion();
  const entrance = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
      };

  if (size === 'large' && lockupSrc) {
    return (
      <motion.img
        src={lockupSrc}
        alt="MarketingPro"
        className="logo-image logo-image-large"
        loading="eager"
        {...entrance}
      />
    );
  }

  return (
    <motion.div className={`logo logo-${size}`} {...entrance}>
      {iconSrc ? (
        <img src={iconSrc} alt="MarketingPro" className={`logo-image logo-image-${size}`} loading="eager" />
      ) : (
        <span className="logo-badge" />
      )}
      <span className="logo-text-block">
        <span className="logo-wordmark">
          Marketing<span className="logo-accent">Pro</span>
        </span>
        <span className="logo-tagline">ENSEIGNER · GÉRER · RÉUSSIR</span>
      </span>
    </motion.div>
  );
}
