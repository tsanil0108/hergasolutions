export const normalizePhone = (value) => value.replace(/[\s\-()]/g, '').replace(/^(\+91|91|0)/, '');

export const validators = {
  name: (v) => {
    const t = v.trim();
    if (!t) return 'Please enter your full name.';
    if (t.length < 2) return 'Name must be at least 2 characters.';
    if (!/^[\p{L}\s.'-]+$/u.test(t)) return 'Name can only contain letters and spaces.';
    return '';
  },
  phone: (v) => {
    if (!v.trim()) return 'Please enter your phone number.';
    if (!/^[6-9]\d{9}$/.test(normalizePhone(v))) return 'Enter a valid 10-digit Indian mobile number.';
    return '';
  },
  email: (v) => {
    if (!v.trim()) return 'Please enter your email address.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())) return 'Enter a valid email address.';
    return '';
  },
  service: (v) => (v ? '' : 'Please select a service.'),
  message: (v) => {
    const t = v.trim();
    if (!t) return 'Please describe your project or question.';
    if (t.length < 10) return 'Please write at least 10 characters.';
    if (t.length > 1000) return 'Please keep the message under 1000 characters.';
    return '';
  },
};

export const validateAll = (values) =>
  Object.fromEntries(Object.keys(validators).map((k) => [k, validators[k](values[k] ?? '')]));
