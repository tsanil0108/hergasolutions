import { useSearchParams } from 'react-router-dom';
import { Handshake, Phone } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import CTABanner from '../components/common/CTABanner';
import Reveal from '../components/common/Reveal';
import ContactInfo from '../components/forms/ContactInfo';
import EnquiryForm from '../components/forms/EnquiryForm';
import MapSection from '../components/forms/MapSection';
import usePageMeta from '../hooks/usePageMeta';
import { heroes } from '../assets/images';
import { COMPANY } from '../data/company';
import { getService } from '../data/services';

export default function Contact() {
  usePageMeta('Contact Us', "Contact HERGA'S SOLUTIONS in Thane West for solar solutions, industrial services and free quotes. Call +91 70219 50053 / +91 98197 96980.");
  const [params] = useSearchParams();
  const preselected = getService(params.get('service'))?.title ?? '';
  return (
    <>
      <PageHero
        image={heroes.contact}
        imageAlt="Rooftop solar panels with a city skyline"
        lines={['Contact Us']}
        subtitle="Let's Build a Greener Tomorrow Together"
        description="Get in touch with us for solar solutions, industrial services and more."
        actions={<>{COMPANY.phones.map((p) => <a key={p.href} href={p.href} className="btn btn--primary btn--lg"><Phone size={20} /> {p.display}</a>)}</>}
      />
      <section className="section section--tight">
        <div className="container contact-grid">
          <ContactInfo />
          <Reveal x={30} y={0}><EnquiryForm key={preselected} initialService={preselected} /></Reveal>
        </div>
      </section>
      <MapSection />
      <CTABanner icon={Handshake} title="Partner With HERGA'S SOLUTIONS" text="For innovative solar and industrial solutions." />
    </>
  );
}