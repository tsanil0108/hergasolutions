import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';
import LeafDecor from './LeafDecor';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.8, 0.24, 1] } },
};

/**
 * Shared hero. `lines` = headline split in lines (last line gets the emerald colour).
 * `variant`: 'home' (tall) | 'page' (default).
 */
export default function PageHero({
  image, imageAlt = '', eyebrow, lines, subtitle, description, actions, breadcrumb, variant = 'page', titleTag: Tag = 'h1',
}) {
  const reduce = useReducedMotion();
  return (
    <section className={`hero hero--${variant}`}>
      <motion.div
        className="hero__bg"
        initial={reduce ? false : { scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 0.8, 0.24, 1] }}
      >
        <img src={image} alt={imageAlt} fetchPriority="high" decoding="async" />
        <span className="hero__sunglow" aria-hidden="true" />
      </motion.div>
      <LeafDecor />
      <div className="container">
        <motion.div className="hero__content" variants={container} initial={reduce ? false : 'hidden'} animate="show">
          {eyebrow && <motion.p variants={item} className="hero__eyebrow">{eyebrow}</motion.p>}
          <Tag className="hero__title">
            {lines.map((l, i) => (
              <motion.span key={l} variants={item} className={`hero__line ${i === lines.length - 1 && lines.length > 1 ? 'is-accent' : ''}`}>
                {l}
              </motion.span>
            ))}
          </Tag>
          {subtitle && <motion.p variants={item} className="hero__subtitle">{subtitle}</motion.p>}
          {description && <motion.p variants={item} className="hero__desc">{description}</motion.p>}
          {breadcrumb && (
            <motion.nav variants={item} className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/"><HomeIcon size={14} /> Home</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">{breadcrumb}</span>
            </motion.nav>
          )}
          {actions && <motion.div variants={item} className="hero__actions">{actions}</motion.div>}
        </motion.div>
      </div>
    </section>
  );
}
