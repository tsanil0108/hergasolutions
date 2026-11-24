import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Reveal from '../common/Reveal';

/** Compact tile (Home page). */
export function ServiceTile({ service, index = 0 }) {
  return (
    <Reveal as="li" delay={(index % 4) * 0.08}>
      <Link to={`/services/${service.slug}`} className="tile">
        <span className="tile__img"><img src={service.image} alt="" loading="lazy" decoding="async" width="868" height="280" /></span>
        <span className="tile__row">
          <span className="tile__title">{service.title}</span>
          <span className="tile__go"><ChevronRight size={16} /></span>
        </span>
      </Link>
    </Reveal>
  );
}

/** Detailed card (Our Services page). */
export function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;
  return (
    <Reveal as="li" delay={(index % 4) * 0.08} className="svc-card">
      <div className="svc-card__img">
        <img src={service.image} alt="" loading="lazy" decoding="async" width="868" height="280" />
      </div>
      <span className="svc-card__icon"><Icon size={26} /></span>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <Link to={`/services/${service.slug}`} className="btn btn--outline btn--sm" aria-label={`Know more about ${service.title}`}>
        Know More <ArrowRight size={15} />
      </Link>
    </Reveal>
  );
}
