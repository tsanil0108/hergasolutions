import { useState } from 'react';
import { validateAll, validators } from '../../lib/validators';
import { submitEnquiry } from '../../lib/submitEnquiry';

const EMPTY = { name: '', phone: '', email: '', service: '', message: '', website: '' };

export default function useEnquiryForm(initialService = '') {
  const [values, setValues] = useState({ ...EMPTY, service: initialService });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const setField = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) setErrors((e) => ({ ...e, [name]: validators[name]?.(value) ?? '' }));
  };
  const blur = (name) => {
    setTouched((t) => ({ ...t, [name]: true }));
    if (validators[name]) setErrors((e) => ({ ...e, [name]: validators[name](values[name]) }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (values.website) return; // honeypot – bots only
    const all = validateAll(values);
    setErrors(all);
    setTouched({ name: true, phone: true, email: true, service: true, message: true });
    const firstBad = Object.keys(all).find((k) => all[k]);
    if (firstBad) {
      document.getElementById(`field-${firstBad}`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      await submitEnquiry(values);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setValues({ ...EMPTY, service: initialService });
    setErrors({}); setTouched({}); setStatus('idle');
  };

  return { values, errors, status, setField, blur, submit, reset };
}
