// Central image registry. Replace any file in this folder with a higher-resolution
// original (same file name) and the whole site updates.
import logoLight from './logo-light.png';
import logoDark from './logo-dark.png';

import heroHome from './heroes/home.webp';
import heroAbout from './heroes/about.webp';
import heroSolar from './heroes/solar.webp';
import heroServices from './heroes/services.webp';
import heroContact from './heroes/contact.webp';
import cta from './heroes/cta.webp';
import globe from './heroes/globe.webp';
import house from './heroes/house.webp';
import building from './heroes/building.webp';
import whyAbout from './heroes/why-about.webp';

import sRooftop from './services/rooftop-solar.webp';
import sLoading from './services/loading-bay.webp';
import sFab from './services/fabrication.webp';
import sMachine from './services/machine-utility.webp';
import sCctv from './services/cctv.webp';
import sFire from './services/fire-it.webp';
import sElectrical from './services/electrical.webp';
import sDigital from './services/digital-marketing.webp';

import soResidential from './solar/residential.webp';
import soCommercial from './solar/commercial.webp';
import soIndustrial from './solar/industrial.webp';
import soEpc from './solar/epc.webp';
import soAmc from './solar/amc.webp';
import soPm from './solar/pm-surya-ghar.webp';
import soSubsidy from './solar/subsidy.webp';

import p1 from './projects/project-1.webp';
import p2 from './projects/project-2.webp';
import p3 from './projects/project-3.webp';
import p4 from './projects/project-4.webp';
import p5 from './projects/project-5.webp';

import t1 from './team/photo-1.webp';
import t2 from './team/photo-2.webp';
import t3 from './team/photo-3.webp';
import t4 from './team/photo-4.webp';
import t5 from './team/photo-5.webp';
import t6 from './team/photo-6.webp';
import tCeo from './team/ceo.webp';

export const logos = { light: logoLight, dark: logoDark };
export const heroes = { home: heroHome, about: heroAbout, solar: heroSolar, services: heroServices, contact: heroContact };
export const misc = { cta, globe, house, building, whyAbout };
export const serviceImages = {
  rooftop: sRooftop, loading: sLoading, fabrication: sFab, machine: sMachine,
  cctv: sCctv, fire: sFire, electrical: sElectrical, digital: sDigital,
};
export const solarImages = {
  residential: soResidential, commercial: soCommercial, industrial: soIndustrial,
  epc: soEpc, amc: soAmc, pmSuryaGhar: soPm, subsidy: soSubsidy,
};
export const projectImages = [p1, p2, p3, p4, p5];
export const teamPhotos = [t1, t2, t3, t4, t5, t6];
export const ceoPhoto = tCeo;
