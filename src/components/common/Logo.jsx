import { Link } from 'react-router-dom';
import { logos } from '../../assets/images';
import { COMPANY } from '../../data/company';

/** Logo lockup. The logo image itself is never altered – only scaled by height (auto width). */
export default function Logo({ variant = 'light', showTagline = true }) {
  return (
    <Link to="/" className={`logo logo--${variant}`} aria-label={`${COMPANY.name} – Home`}>
      <img src={variant === 'dark' ? logos.dark : logos.light} alt="" className="logo__img" height="64" />
      <span className="logo__text">
        <span className="logo__name">{COMPANY.name}</span>
        {showTagline && <span className="logo__tag">{COMPANY.website}</span>}
      </span>
    </Link>
  );
}
