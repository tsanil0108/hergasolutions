# HERGA'S SOLUTIONS – Website (React + Vite)

Premium, responsive, animated 5-page website: Home · About Us · Solar Solutions · Our Services · Contact Us
(+ 8 service detail pages, Privacy Policy, Terms & Conditions, 404).

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview
```

## Changes in this version
- Black metal theme: `src/styles/theme-metal.css` (loaded last).
- Team: CEO row, 3 business heads, then Sumant & Sarvesh (`src/data/team.js`).
- Booking calendar: `/book-appointment` (`components/forms/BookingCalendar.jsx`). Set `VITE_FORM_ENDPOINT` for direct delivery; otherwise it opens an email draft to info@hergassolutions.com and offers WhatsApp confirmation.
- Testimonials: `src/data/testimonials.js` (sample text – replace with real customer reviews).
- Contact: 2 phones, info@hergassolutions.com and www.hergassolutions.com in `src/data/company.js`.

## Folder structure
```
public/                  favicon, robots.txt, _redirects (Netlify SPA), 
vercel.json              SPA rewrite for Vercel
src/
  main.jsx · App.jsx     entry, routes, animated page transitions, code-splitting
  assets/images/         logos, heroes, services, solar, projects, team  (+ index.js registry)
  data/                  company.js (ALL contact info) · services.js · solar.js · team.js · navigation.js
  lib/                   contact.js (WhatsApp/mailto/maps links) · validators.js · submitEnquiry.js
  hooks/usePageMeta.js   per-page <title> + meta description
  components/
    layout/              Header (sticky, dropdowns, mobile drawer) · Footer · WhatsAppFloat
    common/              Logo · PageHero · SectionHeading · CTABanner · Reveal · LeafDecor · ScrollToTop · ScrollProgress
    sections/            ServiceTile/Card · WhyChoose · SubsidyBanner · ProjectCarousel · TeamCard · ProcessSteps
    forms/               EnquiryForm (+ useEnquiryForm) · ContactInfo · MapSection
  pages/                 Home · About · SolarSolutions · Services · ServiceDetail · Contact · Legal · NotFound
  styles/                tokens · base · layout · components · pages (.css)
```

## Things to finish before launch
1. **Logo** – `src/assets/images/logo-light.png` / `logo-dark.png` were cropped from the design mockups (low-res).
   Replace them with the original logo files (same names) – no code change needed.
2. **Photos** – hero, service, solar and project images are crops from the mockups. Replace the files in
   `src/assets/images/*` with real, high-resolution photos of the same names.
3. **Team photos** – 6 photos were supplied for 5 names. They are mapped in upload order in `src/data/team.js`;
   confirm the matches (change the `teamPhotos[n]` index) – `team/photo-6.webp` is unused.
4. **Enquiry form** – set `VITE_FORM_ENDPOINT` in `.env` (Formspree / Getform / own API) to deliver submissions.
   Without it the form opens a pre-filled email draft to info@hergassolutions.com.
5. **Social links** – add the real profile URLs in `src/data/company.js` (`social`). Empty ones are hidden.
6. **Legal pages** – `pages/Legal.jsx` holds starter text only; get the company's approved wording.
7. Add `sitemap.xml` and a canonical URL once the domain is known.

## Notes
- Colours/typography are CSS variables in `styles/tokens.css` (Poppins, bundled locally – no external font request).
- Animations use Framer Motion and respect `prefers-reduced-motion`.
- Google Map uses the keyless embed; Get Directions opens Google Maps directions.
