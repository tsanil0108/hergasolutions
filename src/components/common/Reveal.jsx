import { motion, useReducedMotion } from 'framer-motion';

/** Scroll-triggered entrance. Respects prefers-reduced-motion. */
export default function Reveal({ as = 'div', delay = 0, y = 26, x = 0, className, children, ...rest }) {
  const reduce = useReducedMotion();
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 0.8, 0.24, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
