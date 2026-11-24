import { Home, Building2, Factory, Cog, Wrench, Landmark, Leaf, MessageSquare, PencilRuler, HardHat, Headset } from 'lucide-react';
import { solarImages } from '../assets/images';

export const SOLAR_SOLUTIONS = [
  { id: 'residential', title: 'Residential Rooftop Solar', icon: Home, image: solarImages.residential },
  { id: 'commercial', title: 'Commercial Solar', icon: Building2, image: solarImages.commercial },
  { id: 'industrial', title: 'Industrial Solar', icon: Factory, image: solarImages.industrial },
  { id: 'epc', title: 'Solar EPC Solutions', icon: Cog, image: solarImages.epc },
  { id: 'amc', title: 'Solar AMC & Maintenance', icon: Wrench, image: solarImages.amc },
  { id: 'pm-surya-ghar', title: 'PM Surya Ghar Muft Bijli Yojana', icon: Landmark, image: solarImages.pmSuryaGhar },
  { id: 'subsidy', title: 'Government Subsidy Assistance', icon: Leaf, image: solarImages.subsidy },
];

export const SOLAR_BENEFITS = [
  'Cut Your Electricity Bills',
  'Eco-Friendly & Sustainable Energy',
  'Expert Installation & Support',
  'Government Subsidy Assistance',
  'Reliable & Long-Term Performance',
];

export const SOLAR_PROCESS = [
  { title: 'Consultation', text: 'Discuss your needs and requirements', icon: MessageSquare },
  { title: 'Site Inspection', text: 'Professional site assessment', icon: Home },
  { title: 'Custom Design', text: 'Tailored solar solution for you', icon: PencilRuler },
  { title: 'Installation', text: 'Expert and safe installation', icon: HardHat },
  { title: 'Ongoing Support', text: 'AMC & maintenance support', icon: Headset },
];
