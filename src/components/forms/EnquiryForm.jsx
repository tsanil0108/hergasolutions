import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, Mail, Send } from 'lucide-react';
import useEnquiryForm from './useEnquiryForm';
import WhatsAppIcon from '../common/WhatsAppIcon';
import { SERVICES } from '../../data/services';
import { whatsappLink } from '../../lib/contact';

function Field({ id, label, error, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={`field-${id}`}>{label} <span aria-hidden="true">*</span></label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p id={`err-${id}`} role="alert" className="field__error"
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
            <AlertCircle size={14} /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EnquiryForm({ initialService = '' }) {
  const { values, errors, status, setField, blur, submit, reset } = useEnquiryForm(initialService);
  const bind = (name) => ({
    id: `field-${name}`, name, value: values[name],
    onChange: (e) => setField(name, e.target.value),
    onBlur: () => blur(name),
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `err-${name}` : undefined,
  });

  const waMessage = () => {
    const parts = ["Hello HERGA'S SOLUTIONS, I'd like to make an enquiry."];
    if (values.name.trim()) parts.push(`Name: ${values.name.trim()}`);
    if (values.service) parts.push(`Service: ${values.service}`);
    if (values.message.trim()) parts.push(`Details: ${values.message.trim()}`);
    return parts.join('\n');
  };

  return (
    <div className="enquiry" id="enquiry">
      <div className="enquiry__head">
        <span className="enquiry__head-icon"><Mail size={40} strokeWidth={1.4} /></span>
        <div>
          <h2>Send Us an Enquiry</h2>
          <p>Fill the form and we will get back to you shortly.</p>
        </div>
      </div>

      <div className="enquiry__body">
        <AnimatePresence mode="wait">
          {status === 'sent' ? (
            <motion.div key="done" className="enquiry__done" role="status"
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              <CheckCircle2 size={56} />
              <h3>Your enquiry is ready to send</h3>
              <p>If your email app opened, press Send there to finish. We usually reply within 24 hours.</p>
              <button type="button" className="btn btn--outline" onClick={reset}>Send another enquiry</button>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={submit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="form-grid">
                <Field id="name" label="Your Name" error={errors.name}>
                  <input type="text" autoComplete="name" placeholder="Enter your full name" {...bind('name')} />
                </Field>
                <Field id="phone" label="Phone Number" error={errors.phone}>
                  <input type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" {...bind('phone')} />
                </Field>
                <Field id="email" label="Email Address" error={errors.email}>
                  <input type="email" autoComplete="email" placeholder="you@example.com" {...bind('email')} />
                </Field>
                <Field id="service" label="Select Service" error={errors.service}>
                  <select {...bind('service')}>
                    <option value="">Select Service</option>
                    {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                  </select>
                </Field>
                <div className="form-grid__full">
                  <Field id="message" label="Project Description / Message" error={errors.message}>
                    <textarea rows={4} placeholder="Tell us about your requirement" {...bind('message')} />
                  </Field>
                </div>
              </div>

              {/* honeypot */}
              <div className="hp" aria-hidden="true">
                <label>Leave blank<input type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => setField('website', e.target.value)} /></label>
              </div>

              {status === 'error' && (
                <p className="form-alert" role="alert"><AlertCircle size={16} /> We couldn’t send your enquiry. Please try again or use WhatsApp.</p>
              )}

              <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending'}>
                {status === 'sending' ? <><Loader2 size={18} className="spin" /> Sending…</> : <><Send size={18} /> Send Enquiry <ArrowRight size={18} /></>}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="or-divider"><span>or</span></div>
        <a className="btn btn--wa btn--block" href={whatsappLink(waMessage())} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={22} /> Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
