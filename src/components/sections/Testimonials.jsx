import { Quote, Star } from 'lucide-react';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import { TESTIMONIALS } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="What Our Customers Say" subtitle="Trusted by homes, factories and businesses across Maharashtra" />
        <ul className="grid grid--3 testi">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" key={t.name} delay={(i % 3) * 0.08} className="testi__card">
              <Quote className="testi__q" size={30} aria-hidden="true" />
              <p className="testi__stars" role="img" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, k) => <Star key={k} size={16} fill="currentColor" />)}</p>
              <blockquote>{t.text}</blockquote>
              <footer>
                <span className="testi__av" aria-hidden="true">{t.name[0]}</span>
                <span><strong>{t.name}</strong><small>{t.type} · {t.place}</small></span>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}