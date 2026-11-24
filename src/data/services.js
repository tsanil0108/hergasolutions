import { Sun, Truck, Warehouse, Cog, Cctv, Siren, Zap, BarChart3 } from 'lucide-react';
import { serviceImages } from '../assets/images';

// The 8 services. `title` strings are exactly the ones used in the nav, footer and form dropdown.
export const SERVICES = [
  {
    slug: 'rooftop-solar-epc-amc',
    title: 'Rooftop Solar – EPC & AMC',
    short: 'Residential and factory solar solutions with EPC & AMC support.',
    icon: Sun,
    image: serviceImages.rooftop,
    covers: ['Residential rooftop solar', 'Factory and industrial rooftop solar', 'EPC and AMC support'],
  },
  {
    slug: 'loading-bay-equipment-supply-amc',
    title: 'Loading Bay Equipment – Supply & AMC',
    short: 'Dock ramps and loading bay equipment for industrial use.',
    icon: Truck,
    image: serviceImages.loading,
    covers: ['Dock ramps', 'Loading bay equipment supply', 'AMC for installed equipment'],
  },
  {
    slug: 'fabrication-solutions',
    title: 'Fabrication Solutions',
    short: 'Steel sheds and custom fabrication solutions.',
    icon: Warehouse,
    image: serviceImages.fabrication,
    covers: ['Steel sheds', 'Custom fabrication work'],
  },
  {
    slug: 'machine-utility-refurbishment-amc',
    title: 'Machine & Utility – Refurbishment & AMC',
    short: 'Machine refurbishment and industrial utility repair.',
    icon: Cog,
    image: serviceImages.machine,
    covers: ['Machine refurbishment', 'Industrial utility repair', 'AMC support'],
  },
  {
    slug: 'cctv-access-control-supply-amc',
    title: 'CCTV / Access Control – Supply & AMC',
    short: 'Advanced surveillance and access control systems.',
    icon: Cctv,
    image: serviceImages.cctv,
    covers: ['CCTV surveillance systems', 'Access control systems', 'Supply and AMC'],
  },
  {
    slug: 'fire-alarms-it-infrastructure-supply-amc',
    title: 'Fire Alarms / IT Infrastructure – Supply & AMC',
    short: 'Fire alarm systems and IT infrastructure solutions.',
    icon: Siren,
    image: serviceImages.fire,
    covers: ['Fire alarm systems', 'IT infrastructure solutions', 'Supply and AMC'],
  },
  {
    slug: 'electrical-subcontracting',
    title: 'Electrical – Subcontracting',
    short: 'Industrial electrical installation and maintenance.',
    icon: Zap,
    image: serviceImages.electrical,
    covers: ['Industrial electrical installation', 'Electrical maintenance', 'Subcontracting'],
  },
  {
    slug: 'digital-marketing-services-executions',
    title: 'Digital Marketing – Services & Executions',
    short: 'Grow your business with result-driven digital marketing.',
    icon: BarChart3,
    image: serviceImages.digital,
    covers: ['Digital marketing services', 'Campaign execution'],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
