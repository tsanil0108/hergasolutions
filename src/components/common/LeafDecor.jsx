import { motion, useReducedMotion } from 'framer-motion';

/** Decorative swaying leaves on the hero's left edge. */
export default function LeafDecor() {
  const reduce = useReducedMotion();
  const sway = (d) => (reduce ? {} : { animate: { rotate: [-3, 3, -3] }, transition: { duration: 7 + d, repeat: Infinity, ease: 'easeInOut' } });
  return (
    <div className="leaf-decor" aria-hidden="true">
      <motion.svg viewBox="0 0 120 160" className="leaf leaf--a" style={{ originX: 0, originY: 1 }} {...sway(0)}>
        <path d="M0 150C10 60 60 10 118 4c-4 60-34 120-118 146Z" fill="#35A853" opacity=".85" />
        <path d="M2 148C34 96 66 50 112 8" stroke="#EAF5EC" strokeWidth="2" fill="none" opacity=".7" />
      </motion.svg>
      <motion.svg viewBox="0 0 120 160" className="leaf leaf--b" style={{ originX: 0, originY: 1 }} {...sway(2)}>
        <path d="M0 150C6 80 40 30 92 20c0 54-24 100-92 130Z" fill="#16834A" opacity=".8" />
      </motion.svg>
    </div>
  );
}
