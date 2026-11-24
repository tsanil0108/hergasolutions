import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, UserRound } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Reveal from '../components/common/Reveal';
import CTABanner from '../components/common/CTABanner';
import SubsidyBanner from '../components/sections/SubsidyBanner';
import ProcessSteps from '../components/sections/ProcessSteps';
import ProjectCarousel from '../components/sections/ProjectCarousel';
import usePageMeta from '../hooks/usePageMeta';
import { heroes, misc } from '../assets/images';
import { SOLAR_BENEFITS, SOLAR_SOLUTIONS } from '../data/solar';

export default function SolarSolutions() {
  usePageMeta('Solar Solutions', "Residential, commercial and industrial rooftop solar, EPC, AMC and PM Surya Ghar subsidy assistance from HERGA'S SOLUTIONS.");
  return (
    <>
      <PageHero
        image={heroes.solar}
        imageAlt="Home with rooftop solar panels"
        lines={['Solar Solutions']}
        subtitle="Clean Energy. Bright Future."
        description="Harness the power of the sun with our comprehensive solar solutions."
        actions={<>
          <a href="#solutions" className="btn btn--primary" onClick={(e) => { e.preventDefault(); document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Explore Our Solutions <ArrowRight size={18} />
          </a>
          <Link to="/contact" className="btn btn--outline">Contact Us</Link>
        </>}
      />

      <section className="section" id="solutions">
        <div className="container">
          <SectionHeading title="Our Solar Solutions" subtitle="From homes to industries – we power it all" />
          <ul className="grid grid--7 solar-grid">
            {SOLAR_SOLUTIONS.map((s, i) => (
              <Reveal as="li" key={s.id} id={s.id} delay={(i % 4) * 0.07} className="solar-card">
                <span className="solar-card__img"><img src={s.image} alt="" loading="lazy" decoding="async" width="568" height="328" /></span>
                <span className="solar-card__icon"><s.icon size={22} /></span>
                <h3>{s.title}</h3>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="why why--band why--solar">
        <div className="container why__inner">
          <div className="why__copy">
            <Reveal as="h2">Why Choose HERGA'S SOLUTIONS?</Reveal>
            <ul className="checklist">
              {SOLAR_BENEFITS.map((t, i) => (
                <Reveal as="li" key={t} delay={0.08 + i * 0.07}><CheckCircle2 size={24} aria-hidden="true" /> {t}</Reveal>
              ))}
            </ul>
          </div>
          <Reveal className="why__media" x={40} y={0}><img src={misc.globe} alt="" loading="lazy" decoding="async" /></Reveal>
        </div>
      </section>

      <ProcessSteps />
      <SubsidyBanner variant="solar" />
      <ProjectCarousel />
      <CTABanner icon={UserRound} title="Ready to Go Solar?" text="Get a free consultation and quotation today." />
    </>
  );
}
