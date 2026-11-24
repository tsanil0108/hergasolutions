import Reveal from '../common/Reveal';

export default function TeamCard({ member, index = 0, featured = false }) {
  return (
    <Reveal as="li" delay={(index % 5) * 0.08} className={`team-card ${featured ? 'team-card--ceo' : ''}`}>
      <span className="team-card__photo">
        <img src={member.photo} alt={`${member.name}, ${member.role}`} loading="lazy" decoding="async" width="480" height="480" />
      </span>
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </Reveal>
  );
}
