import { SERVICES } from './services';
import { SOLAR_SOLUTIONS } from './solar';

export const NAV = [
  { label: 'Home', to: '/', end: true },
  { label: 'About Us', to: '/about' },
  {
    label: 'Solar Solutions',
    to: '/solar-solutions',
    children: SOLAR_SOLUTIONS.map((s) => ({ label: s.title, to: `/solar-solutions#${s.id}`, icon: s.icon })),
  },
  {
    label: 'Our Services',
    to: '/services',
    children: SERVICES.map((s) => ({ label: s.title, to: `/services/${s.slug}`, icon: s.icon })),
  },
  { label: 'Book Appointment', to: '/book-appointment' },
  { label: 'Contact Us', to: '/contact' },
];

export const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Solar Solutions', to: '/solar-solutions' },
  { label: 'Our Services', to: '/services' },
  { label: 'Book Appointment', to: '/book-appointment' },
  { label: 'Contact Us', to: '/contact' },
];