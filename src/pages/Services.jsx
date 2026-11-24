import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Leaf } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Reveal from '../components/common/Reveal';
import CTABanner from '../components/common/CTABanner';
import { ServiceCard } from '../components/sections/ServiceTile';
import usePageMeta from '../hooks/usePageMeta';
import { heroes, projectImages, serviceImages, solarImages } from '../assets/images';
import { SERVICES } from '../data/services';

const POINTS = ['Expertise in Solar & Industrial Services', 'Commitment to Quality & Safety', 'Customer-Centric Approach', 'Timely Project Delivery'];
const DIAMONDS = [projectImages[0], solarImages.amc, serviceImages.fabrication, solarImages.subsidy];

export default function Services() {
  usePageMeta('Our Services', "Rooftop solar, loading bay equipment, fabrication, machine refurbishment, CCTV, fire alarms, electrical subcontracting and digital marketing – HERGA'S SOLUTIONS.");
  return (
    <>
      <PageHero
        image={heroes.services}
        eyebrow="Our Services"
        lines={['Comprehensive Solutions', 'for a Sustainable Future']}
        description="From solar energy to industrial solutions, we provide end-to-end services with excellence and reliability."
        actions={<Link to="/contact#enquiry" className="btn btn--primary">Get a Free Quote <ArrowRight size={18} /></Link>}
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="What We Do" subtitle="Eight services, one trusted partner" />
          <ul className="grid grid--4 svc-grid">
            {SERVICES.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </ul>
        </div>
      </section>

      <section className="why why--band why--services">
        <div className="container why__inner">
          <div className="why__copy">
            <Reveal as="p" className="eyebrow"><Leaf size={16} /> Why choose HERGA'S SOLUTIONS?</Reveal>
            <Reveal as="h2" delay={0.05}>Your Trusted Partner for Complete Solutions</Reveal>
            <Reveal as="p" delay={0.1} className="why__intro">We deliver innovative, reliable and cost-effective solutions across solar and industrial domains.</Reveal>
            <ul className="checklist">
              {POINTS.map((t, i) => <Reveal as="li" key={t} delay={0.12 + i * 0.07}><CheckCircle2 size={24} aria-hidden="true" /> {t}</Reveal>)}
            </ul>
          </div>
          <div className="diamonds" aria-hidden="true">
            {DIAMONDS.map((src, i) => (
              <Reveal key={i} delay={0.1 + i * 0.12} className={`diamond diamond--${i + 1}`}>
                <img src={src} alt="" loading="lazy" decoding="async" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner icon={Leaf} title="Need Our Services?" text="Get in touch with us for customized solutions." />
    </>
  );
}
