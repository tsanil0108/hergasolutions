import { COMPANY } from '../data/company';

export const whatsappLink = (message = "Hello HERGA'S SOLUTIONS, I would like to know more about your solar and industrial services.") =>
  `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mailtoLink = (subject = '', body = '') =>
  `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const directionsLink = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY.mapQuery)}`;

export const mapViewLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.mapQuery)}`;

// Keyless Google Maps embed.
export const mapEmbedSrc = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&z=16&output=embed`;
