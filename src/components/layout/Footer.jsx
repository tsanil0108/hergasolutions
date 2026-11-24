import { Link } from 'react-router-dom';
import { Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Logo from '../common/Logo';
import { COMPANY } from '../../data/company';
import { QUICK_LINKS } from '../../data/navigation';
import { SERVICES } from '../../data/services';

const SOCIAL_ICONS = { facebook: Facebook, linkedin: Linkedin, youtube: Youtube, instagram: Instagram };

export default function Footer() {
  const socials = COMPANY.social.filter((s) => s.url);
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="dark" showTagline={false} />
          <p>{COMPANY.intro}</p>
          {socials.length > 0 && (
            <ul className="footer__social">
              {socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.id];
                return (
                  <li key={s.id}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}><Icon size={18} /></a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>{QUICK_LINKS.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
        </nav>

        <nav className="footer__col footer__col--services" aria-label="Our services">
          <h3>Our Services</h3>
          <ul>{SERVICES.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </nav>

        <div className="footer__col">
          <h3>Contact Us</h3>
          <ul className="footer__contact">
            {COMPANY.phones.map((p) => <li key={p.href}><Phone size={18} /><a href={p.href}>{p.display}</a></li>)}
            <li><Globe size={18} /><a href={COMPANY.websiteUrl}>{COMPANY.website}</a></li>
            <li><Mail size={18} /><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
            <li><MapPin size={18} /><address>{COMPANY.addressLines.map((l) => <span key={l}>{l}<br /></span>)}</address></li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.</p>
          <p className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span aria-hidden="true">|</span>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}