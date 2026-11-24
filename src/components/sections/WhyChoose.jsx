import { CheckCircle2 } from 'lucide-react';
import Reveal from '../common/Reveal';

/** Checklist with a side image. `tone="band"` = full-bleed light-green band. */
export default function WhyChoose({ title, intro, items, image, imageAlt = '', tone = 'band' }) {
  return (
    <section className={`why why--${tone}`}>
      <div className="container why__inner">
        <div className="why__copy">
          <Reveal as="h2">{title}</Reveal>
          {intro && <Reveal as="p" delay={0.05} className="why__intro">{intro}</Reveal>}
          <ul className="checklist">
            {items.map((t, i) => (
              <Reveal as="li" key={t} delay={0.08 + i * 0.07}>
                <CheckCircle2 size={24} aria-hidden="true" /> {t}
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal className="why__media" x={40} y={0}>
          <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
        </Reveal>
      </div>
    </section>
  );
}
