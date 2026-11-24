import { ArrowRight, Leaf, SunMedium } from 'lucide-react';
import Reveal from '../common/Reveal';
import { misc } from '../../assets/images';
import { COMPANY } from '../../data/company';

export default function SubsidyBanner({ variant = 'home' }) {
  return (
    <section className="container subsidy-wrap">
      <Reveal className={`subsidy subsidy--${variant}`}>
        <div className="subsidy__img"><img src={misc.house} alt="Home with rooftop solar panels" loading="lazy" decoding="async" /></div>
        <div className="subsidy__body">
          <span className="subsidy__icon" aria-hidden="true"><SunMedium size={52} strokeWidth={1.3} /></span>
          <div className="subsidy__copy">
            <h2>PM Surya Ghar<br className="hide-sm" /> Muft Bijli Yojana</h2>
            <p>Get subsidy assistance for rooftop solar installation under PM Surya Ghar Yojana.</p>
            {variant === 'home' && (
              <a className="btn btn--primary btn--sm" href={COMPANY.pmSuryaGharUrl} target="_blank" rel="noopener noreferrer">
                Know More <ArrowRight size={15} />
              </a>
            )}
          </div>
          {variant === 'solar' && (
            <div className="subsidy__aside"><Leaf size={34} aria-hidden="true" /><strong>Let’s Build a<br />Solar Powered India</strong></div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
