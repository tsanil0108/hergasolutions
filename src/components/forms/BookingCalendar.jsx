import { useMemo, useState } from 'react';
import { CalendarCheck, CheckCircle2, ChevronLeft, ChevronRight, Clock, Loader2 } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon';
import { SERVICES } from '../../data/services';
import { validators } from '../../lib/validators';
import { submitBooking } from '../../lib/submitEnquiry';
import { whatsappLink } from '../../lib/contact';

const SLOTS = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const sameDay = (a, b) => a && b && a.getTime() === b.getTime();
const label = (d) => d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

export default function BookingCalendar() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [view, setView] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState('');
  const [f, setF] = useState({ name: '', phone: '', email: '', service: '', notes: '' });
  const [err, setErr] = useState({});
  const [status, setStatus] = useState('idle');

  const first = view.getDay();
  const count = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: count }, (_, i) => new Date(view.getFullYear(), view.getMonth(), i + 1))];
  const canPrev = view > new Date(today.getFullYear(), today.getMonth(), 1);
  const disabled = (d) => d < today || d.getDay() === 0;
  const set = (k, v) => { setF((p) => ({ ...p, [k]: v })); setErr((p) => ({ ...p, [k]: '' })); };

  const submit = async (e) => {
    e.preventDefault();
    const errors = {
      name: validators.name(f.name), phone: validators.phone(f.phone),
      email: validators.email(f.email), service: validators.service(f.service),
      when: date && slot ? '' : 'Please choose a date and a time slot.',
    };
    setErr(errors);
    if (Object.values(errors).some(Boolean)) return;
    setStatus('sending');
    try { await submitBooking({ ...f, dateLabel: label(date), slot }); setStatus('sent'); } catch { setStatus('error'); }
  };

  const waMsg = `Hello HERGA'S SOLUTIONS, I would like to book an appointment.\nDate: ${date ? label(date) : '-'}\nTime: ${slot || '-'}\nService: ${f.service || '-'}\nName: ${f.name || '-'}`;

  if (status === 'sent') {
    return (
      <div className="booking booking--done" role="status">
        <CheckCircle2 size={60} />
        <h2>Appointment Request Sent</h2>
        <p>{label(date)} at {slot}. Our team will call you to confirm.</p>
        <a className="btn btn--wa" href={whatsappLink(waMsg)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Confirm on WhatsApp</a>
      </div>
    );
  }

  return (
    <form className="booking" onSubmit={submit} noValidate id="book">
      <div className="booking__cal">
        <div className="cal__head">
          <button type="button" className="cal__nav" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))} disabled={!canPrev} aria-label="Previous month"><ChevronLeft size={20} /></button>
          <h3><CalendarCheck size={20} /> {MONTHS[view.getMonth()]} {view.getFullYear()}</h3>
          <button type="button" className="cal__nav" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))} aria-label="Next month"><ChevronRight size={20} /></button>
        </div>
        <div className="cal__grid" role="grid">
          {DAYS.map((d) => <span key={d} className="cal__dow">{d}</span>)}
          {cells.map((d, i) => d ? (
            <button key={i} type="button" disabled={disabled(d)} onClick={() => { setDate(d); setSlot(''); setErr((p) => ({ ...p, when: '' })); }}
              className={`cal__day ${sameDay(d, date) ? 'is-selected' : ''} ${sameDay(d, today) ? 'is-today' : ''}`} aria-pressed={sameDay(d, date)}>
              {d.getDate()}
            </button>
          ) : <span key={i} />)}
        </div>
        <p className="cal__note">Open Monday to Saturday, 9:00 AM – 7:00 PM. Sundays are closed.</p>
        <div className="cal__slots" aria-live="polite">
          <h4><Clock size={16} /> {date ? `Available slots – ${date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}` : 'Select a date to see time slots'}</h4>
          {date && <div className="slots">{SLOTS.map((s) => (
            <button key={s} type="button" className={`slot ${slot === s ? 'is-selected' : ''}`} onClick={() => { setSlot(s); setErr((p) => ({ ...p, when: '' })); }}>{s}</button>
          ))}</div>}
          {err.when && <p className="field__error" role="alert">{err.when}</p>}
        </div>
      </div>

      <div className="booking__form">
        <h3>Your Details</h3>
        {[['name', 'Full Name', 'text'], ['phone', 'Mobile Number', 'tel'], ['email', 'Email Address', 'email']].map(([k, l, t]) => (
          <div key={k} className={`field ${err[k] ? 'has-error' : ''}`}>
            <label htmlFor={`bk-${k}`}>{l} <span aria-hidden="true">*</span></label>
            <input id={`bk-${k}`} type={t} value={f[k]} onChange={(e) => set(k, e.target.value)} autoComplete={k === 'phone' ? 'tel' : k} />
            {err[k] && <p className="field__error" role="alert">{err[k]}</p>}
          </div>
        ))}
        <div className={`field ${err.service ? 'has-error' : ''}`}>
          <label htmlFor="bk-service">Service Required <span aria-hidden="true">*</span></label>
          <select id="bk-service" value={f.service} onChange={(e) => set('service', e.target.value)}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          </select>
          {err.service && <p className="field__error" role="alert">{err.service}</p>}
        </div>
        <div className="field">
          <label htmlFor="bk-notes">Notes (optional)</label>
          <textarea id="bk-notes" rows={3} value={f.notes} onChange={(e) => set('notes', e.target.value)} />
        </div>
        {status === 'error' && <p className="form-alert">Could not send. Please call us or try WhatsApp.</p>}
        <button className="btn btn--primary btn--block" disabled={status === 'sending'}>
          {status === 'sending' ? <><Loader2 size={18} className="spin" /> Sending…</> : <>Book Appointment <CalendarCheck size={18} /></>}
        </button>
        <a className="btn btn--wa btn--block" href={whatsappLink(waMsg)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Book via WhatsApp</a>
      </div>
    </form>
  );
}