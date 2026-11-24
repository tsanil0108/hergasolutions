import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import Logo from '../common/Logo';
import { Globe, Mail, Phone } from 'lucide-react';
import { NAV } from '../../data/navigation';
import { COMPANY } from '../../data/company';

function DesktopItem({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => !ref.current?.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);

  if (!item.children) {
    return (
      <NavLink to={item.to} end={item.end} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
        {item.label}
      </NavLink>
    );
  }
  const active = pathname.startsWith(item.to);
  return (
    <div className="nav__dropdown" ref={ref} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div className={`nav__link nav__link--split ${active ? 'is-active' : ''}`}>
        <NavLink to={item.to} className="nav__dd-label">{item.label}</NavLink>
        <button type="button" className="nav__chev" aria-expanded={open} aria-label={`Toggle ${item.label} menu`} onClick={() => setOpen((o) => !o)}>
          <ChevronDown size={16} className={open ? 'is-flipped' : ''} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="nav__panel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
          >
            {item.children.map((c) => (
              <li key={c.to}>
                <Link to={c.to} className="nav__panel-link">
                  <span className="nav__panel-icon"><c.icon size={18} /></span>
                  {c.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileItem({ item, close }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <NavLink to={item.to} end={item.end} onClick={close} className={({ isActive }) => `drawer__link ${isActive ? 'is-active' : ''}`}>
        {item.label}
      </NavLink>
    );
  }
  return (
    <div className="drawer__group">
      <div className="drawer__row">
        <NavLink to={item.to} onClick={close} className={({ isActive }) => `drawer__link ${isActive ? 'is-active' : ''}`}>{item.label}</NavLink>
        <button type="button" className="drawer__toggle" aria-expanded={open} aria-label={`Toggle ${item.label}`} onClick={() => setOpen((o) => !o)}>
          <ChevronDown size={18} className={open ? 'is-flipped' : ''} />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="drawer__sub">
            {item.children.map((c) => (
              <li key={c.to}><Link to={c.to} onClick={close}><c.icon size={16} /> {c.label}</Link></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setDrawer(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawer]);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <a href={COMPANY.websiteUrl} className="topbar__item"><Globe size={14} /> {COMPANY.website}</a>
          <a href={`mailto:${COMPANY.email}`} className="topbar__item"><Mail size={14} /> {COMPANY.email}</a>
          {COMPANY.phones.map((p) => <a key={p.href} href={p.href} className="topbar__item"><Phone size={14} /> {p.display}</a>)}
        </div>
      </div>
      <div className="container header__inner">
        <Logo />
        <nav className="nav" aria-label="Primary">
          {NAV.map((item) => <DesktopItem key={item.label} item={item} />)}
        </nav>
        <Link to="/book-appointment" className="btn btn--primary header__cta">Book Appointment <ArrowRight size={18} /></Link>
        <button type="button" className="header__burger" aria-label="Open menu" aria-expanded={drawer} onClick={() => setDrawer(true)}>
          <Menu size={26} />
        </button>
      </div>

      {/* Rendered into <body> so no header style (blur/transform) can squash the full-screen menu */}
      {createPortal(
      <AnimatePresence>
        {drawer && (
          <>
            <motion.div className="drawer__scrim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setDrawer(false)} />
            <motion.aside
              className="drawer" role="dialog" aria-modal="true" aria-label="Menu"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 0.8, 0.24, 1] }}
            >
              <div className="drawer__top">
                <span className="drawer__title">Menu</span>
                <button type="button" aria-label="Close menu" onClick={() => setDrawer(false)} className="drawer__close"><X size={24} /></button>
              </div>
              <nav className="drawer__nav" aria-label="Mobile">
                {NAV.map((item) => <MobileItem key={item.label} item={item} close={() => setDrawer(false)} />)}
              </nav>
              <Link to="/book-appointment" className="btn btn--primary drawer__cta" onClick={() => setDrawer(false)}>
                Book Appointment <ArrowRight size={18} />
              </Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>,
        document.body,
      )}
    </header>
  );
}