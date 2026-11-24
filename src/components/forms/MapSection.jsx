import { ArrowRight, MapPin } from 'lucide-react';
import Reveal from '../common/Reveal';
import { COMPANY } from '../../data/company';
import { directionsLink, mapEmbedSrc } from '../../lib/contact';

export default function MapSection() {
  return (
    <section className="container map-wrap" aria-labelledby="map-title">
      <Reveal className="map">
        <div className="map__copy">
          <h2 id="map-title"><MapPin size={34} aria-hidden="true" /> Find Us on Map</h2>
          <p>Visit our office at the address mentioned above. We are conveniently located in Thane, Mumbai.</p>
          <address className="map__addr">{COMPANY.addressLines.join(' ')}</address>
          <a className="btn btn--primary" href={directionsLink()} target="_blank" rel="noopener noreferrer">
            Get Directions <ArrowRight size={18} />
          </a>
        </div>
        <div className="map__frame">
          <iframe
            title="HERGA'S SOLUTIONS office location on Google Maps"
            src={mapEmbedSrc()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Reveal>
    </section>
  );
}
