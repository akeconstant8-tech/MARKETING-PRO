import '@testing-library/jest-dom/vitest';

if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {};
}

// Report "prefers-reduced-motion: reduce" so animated counters (useCountUp)
// and framer-motion resolve to their end state immediately instead of
// depending on requestAnimationFrame timing inside jsdom.
window.matchMedia = (query: string) => ({
  matches: query.includes('prefers-reduced-motion'),
  media: query,
  onchange: null,
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
});
