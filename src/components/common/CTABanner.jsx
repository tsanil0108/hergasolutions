import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { misc } from '../../assets/images';

export default function CTABanner({ icon: Icon, title, text, to = '/contact', label = 'Contact Us' }) {
  return (
    <section className="container cta-wrap">
      <Reveal className="cta-banner">
        <img src={misc.cta} alt="" className="cta-banner__bg" loading="lazy" decoding="async" />
        <div className="cta-banner__inner">
          {Icon && <span className="cta-banner__icon"><Icon size={44} strokeWidth={1.4} /></span>}
          <div className="cta-banner__copy">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link to={to} className="btn btn--white">{label} <ArrowRight size={18} /></Link>
        </div>
      </Reveal>
    </section>
  );
}
