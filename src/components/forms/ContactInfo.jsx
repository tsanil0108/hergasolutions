import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '../common/Reveal';
import { COMPANY } from '../../data/company';

export default function ContactInfo() {
  return (
    <Reveal className="info-card" x={-30} y={0}>
      <h2 className="info-card__title"><span aria-hidden="true" />Our Contact Information</h2>
      <ul className="info-list">
        <li>
          <span className="info-list__icon"><Phone size={26} /></span>
          <div>
            <h3>Phone</h3>
            {COMPANY.phones.map((p) => <a key={p.href} className="info-list__big" href={p.href}>{p.display}</a>)}
            <p>{COMPANY.hours}</p>
          </div>
        </li>
        <li>
          <span className="info-list__icon"><Mail size={26} /></span>
          <div>
            <h3>Email</h3>
            <a className="info-list__big info-list__big--sm" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            <p>{COMPANY.replyTime}</p>
          </div>
        </li>
        <li>
          <span className="info-list__icon"><Globe size={26} /></span>
          <div>
            <h3>Website</h3>
            <a className="info-list__big info-list__big--sm" href={COMPANY.websiteUrl}>{COMPANY.website}</a>
          </div>
        </li>
        <li>
          <span className="info-list__icon"><MapPin size={26} /></span>
          <div>
            <h3>Our Office</h3>
            <address>{COMPANY.addressLines.map((l) => <span key={l}>{l}<br /></span>)}</address>
          </div>
        </li>
      </ul>
    </Reveal>
  );
}
