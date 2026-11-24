import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Reveal from '../components/common/Reveal';
import CTABanner from '../components/common/CTABanner';
import NotFound from './NotFound';
import usePageMeta from '../hooks/usePageMeta';
import { heroes } from '../assets/images';
import { COMPANY } from '../data/company';
import { SERVICES, getService } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  usePageMeta(service?.title ?? 'Service not found', service?.short);
  if (!service) return <NotFound />;
  const Icon = service.icon;
  return (
    <>
      <PageHero
        image={heroes.services}
        eyebrow="Our Services"
        lines={[service.title]}
        subtitle={service.short}
        breadcrumb={service.title}
      />
      <section className="section">
        <div className="container detail">
          <div className="detail__main">
            <Reveal className="detail__img"><img src={service.image} alt="" decoding="async" /></Reveal>
            <Reveal as="h2" delay={0.05} className="detail__h"><span className="detail__icon"><Icon size={26} /></span> What this covers</Reveal>
            <ul className="checklist checklist--tight">
              {service.covers.map((c, i) => <Reveal as="li" key={c} delay={0.1 + i * 0.07}><CheckCircle2 size={22} aria-hidden="true" /> {c}</Reveal>)}
            </ul>
            <Reveal delay={0.2} className="detail__actions">
              <Link to={`/contact?service=${service.slug}#enquiry`} className="btn btn--primary">Enquire About This Service <ArrowRight size={18} /></Link>
              <a href={COMPANY.phoneHref} className="btn btn--outline"><Phone size={16} /> {COMPANY.phone}</a>
            </Reveal>
          </div>
          <Reveal as="aside" className="detail__side" x={30} y={0} aria-label="Other services">
            <h3>Other Services</h3>
            <ul>
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`}><s.icon size={18} /> {s.title}</Link></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <CTABanner icon={Phone} title="Need Our Services?" text="Get in touch with us for customized solutions." />
    </>
  );
}
