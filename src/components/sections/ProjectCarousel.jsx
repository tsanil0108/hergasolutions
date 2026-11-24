import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import { projectImages } from '../../assets/images';

export default function ProjectCarousel() {
  const track = useRef(null);
  const scrollBy = (dir) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' });
  };
  return (
    <section className="section projects" >
      <div className="container">
        <SectionHeading title="Our Featured Projects" />
        <Reveal className="carousel">
          <button type="button" className="carousel__btn carousel__btn--prev" onClick={() => scrollBy(-1)} aria-label="Previous projects"><ChevronLeft size={22} /></button>
          <ul className="carousel__track" ref={track} tabIndex={0} aria-label="Featured projects">
            {projectImages.map((src, i) => (
              <li key={src} className="carousel__item">
                <img src={src} alt={`Solar installation project ${i + 1}`} loading="lazy" decoding="async" width="948" height="280" />
              </li>
            ))}
          </ul>
          <button type="button" className="carousel__btn carousel__btn--next" onClick={() => scrollBy(1)} aria-label="Next projects"><ChevronRight size={22} /></button>
        </Reveal>
      </div>
    </section>
  );
}
