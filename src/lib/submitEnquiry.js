import { COMPANY } from '../data/company';
import { mailtoLink } from './contact';

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

/**
 * Sends the enquiry.
 * - If VITE_FORM_ENDPOINT is set → POST JSON to it.
 * - Otherwise → opens a pre-filled email draft addressed to the company.
 */
export async function submitEnquiry(values) {
  const subject = `Website enquiry – ${values.service}`;
  const body =
    `Name: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\n` +
    `Service: ${values.service}\n\nMessage:\n${values.message}`;

  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...values, _subject: subject, _to: COMPANY.email }),
    });
    if (!res.ok) throw new Error('Request failed');
    return { mode: 'endpoint' };
  }
  window.location.href = mailtoLink(subject, body);
  return { mode: 'mailto' };
}

/** Sends a calendar booking (same delivery rules as submitEnquiry). */
export async function submitBooking(b) {
  const subject = `Appointment request – ${b.dateLabel}, ${b.slot}`;
  const body =
    `Appointment request\nDate: ${b.dateLabel}\nTime: ${b.slot}\nService: ${b.service}\n\n` +
    `Name: ${b.name}\nPhone: ${b.phone}\nEmail: ${b.email}\nNotes: ${b.notes || '-'}`;
  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...b, _subject: subject, _to: COMPANY.email }),
    });
    if (!res.ok) throw new Error('Request failed');
    return { mode: 'endpoint' };
  }
  window.location.href = mailtoLink(subject, body);
  return { mode: 'mailto' };
}
