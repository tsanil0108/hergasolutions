import Reveal from './Reveal';

export default function SectionHeading({ title, subtitle, align = 'center', as: Tag = 'h2' }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <Tag className="section-heading__title">
        {align === 'center' && <span className="section-heading__line" aria-hidden="true" />}
        <span>{title}</span>
        {align === 'center' && <span className="section-heading__line" aria-hidden="true" />}
      </Tag>
      {subtitle && <p className="section-heading__sub">{subtitle}</p>}
    </Reveal>
  );
}
