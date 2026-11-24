import { Link } from 'react-router-dom';
import { ArrowRight, Headset } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTABanner from '../components/common/CTABanner';
import { ServiceTile } from '../components/sections/ServiceTile';
import WhyChoose from '../components/sections/WhyChoose';
import SubsidyBanner from '../components/sections/SubsidyBanner';
import Testimonials from '../components/sections/Testimonials';
import ProjectCarousel from '../components/sections/ProjectCarousel';
import usePageMeta from '../hooks/usePageMeta';
import { heroes, misc } from '../assets/images';
import { SERVICES } from '../data/services';

export default function Home() {
  usePageMeta("Rooftop Solar, PM Surya Ghar Subsidy & Industrial Solutions in Thane, Mumbai", "HERGA'S SOLUTIONS – solar EPC & AMC, PM Surya Ghar Muft Bijli Yojana subsidy help, fabrication, electrical, CCTV, fire alarm & IT infrastructure across Thane, Mumbai and Maharashtra. Call +91 70219 50053.");
  return (
    <>
      <PageHero
        variant="home"
        image={heroes.home}
        imageAlt="Rooftop solar panels with a city skyline at sunrise"
        eyebrow="Your Single Touchpoint for Solar & Industrial Solutions"
        lines={['Rooftop Solar &', 'Industrial Solutions']}
        subtitle="Solar EPC, AMC & PM Surya Ghar Subsidy Assistance in Thane, Mumbai & Maharashtra"
        description="Cut your electricity bill with expert rooftop solar for homes, factories and businesses – plus fabrication, electrical, CCTV, fire alarm and IT infrastructure services from one trusted team."
        actions={<>
          <Link to="/book-appointment" className="btn btn--primary">Book Free Consultation <ArrowRight size={18} /></Link>
          <Link to="/services" className="btn btn--outline">Explore Our Services</Link>
        </>}
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Our Services" subtitle="Comprehensive Solar & Industrial Solutions" />
          <ul className="grid grid--4 tiles">
            {SERVICES.map((s, i) => <ServiceTile key={s.slug} service={s} index={i} />)}
          </ul>
        </div>
      </section>

      <WhyChoose
        title="Why Choose HERGA'S SOLUTIONS?"
        items={['Innovative & Reliable Solutions', 'Expertise in Solar & Industrial Services', 'Commitment to Quality & Safety', 'Customer-Centric Approach']}
        image={misc.globe}
        imageAlt="A hand holding a green globe"
      />

      <SubsidyBanner variant="home" />
      <ProjectCarousel />
      <Testimonials />
      <CTABanner icon={Headset} title="Have a Project in Mind?" text="Book a free consultation slot or call us on +91 70219 50053 / +91 98197 96980." to="/book-appointment" label="Book Appointment" />
    </>
  );
}