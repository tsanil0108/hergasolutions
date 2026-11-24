import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import { SOLAR_PROCESS } from '../../data/solar';

export default function ProcessSteps() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Our Solar Installation Process" />
        <ol className="process">
          {SOLAR_PROCESS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.12} className="process__step">
              <span className="process__icon"><s.icon size={34} strokeWidth={1.6} /></span>
              <h3>{i + 1}. {s.title}</h3>
              <p>{s.text}</p>
              {i < SOLAR_PROCESS.length - 1 && <ArrowRight className="process__arrow" size={18} aria-hidden="true" />}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
