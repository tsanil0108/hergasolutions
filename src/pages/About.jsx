import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Gem, Leaf, Target, Users } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Reveal from '../components/common/Reveal';
import CTABanner from '../components/common/CTABanner';
import WhyChoose from '../components/sections/WhyChoose';
import TeamCard from '../components/sections/TeamCard';
import usePageMeta from '../hooks/usePageMeta';
import { heroes, misc } from '../assets/images';
import { CEO, HEADS, SUPPORT } from '../data/team';

const PILLARS = [
  { icon: Users, title: 'Who We Are', text: 'A Maharashtra-based company specializing in solar and industrial solutions.' },
  { icon: Eye, title: 'Our Vision', text: 'To lead the way in sustainable energy and innovative industrial solutions.' },
  { icon: Target, title: 'Our Mission', text: 'To deliver reliable, cost-effective and eco-friendly solutions for a better tomorrow.' },
  { icon: Gem, title: 'Our Values', text: 'Integrity, Innovation, Quality and Customer First Approach.' },
];

export default function About() {
  usePageMeta('About Us', "Learn about HERGA'S SOLUTIONS, a Maharashtra-based company specializing in solar and industrial solutions, and meet our team.");
  return (
    <>
      <PageHero
        image={heroes.about}
        lines={['About Us']}
        subtitle="Building a Sustainable Future with Innovative Solar & Industrial Solutions"
        breadcrumb="About Us"
      />

      <section className="section">
        <div className="container intro">
          <Reveal className="intro__media" x={-40} y={0}>
            <img src={misc.building} alt="HERGA'S SOLUTIONS office building" loading="lazy" decoding="async" />
          </Reveal>
          <div className="intro__copy">
            <Reveal as="p" className="eyebrow"><Leaf size={16} /> About HERGA'S SOLUTIONS</Reveal>
            <Reveal as="h2" delay={0.05}>Your Trusted Partner for Solar &amp; Industrial Solutions</Reveal>
            <Reveal as="p" delay={0.1}>
              At HERGA'S SOLUTIONS, we are committed to delivering innovative, sustainable and reliable solutions for residential, commercial and industrial needs. With a focus on quality, technology and customer satisfaction, we strive to create a greener and more efficient tomorrow.
            </Reveal>
            <Reveal delay={0.15}><Link to="/services" className="btn btn--primary">Explore Our Services <ArrowRight size={18} /></Link></Reveal>
          </div>
        </div>
      </section>

      <section className="container">
        <ul className="pillars">
          {PILLARS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.1} className="pillar">
              <span className="pillar__icon"><p.icon size={30} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <WhyChoose
        tone="plain"
        title="Why Choose HERGA'S SOLUTIONS?"
        intro="We combine technical expertise with a customer-first approach to deliver solutions that make a difference."
        items={['Innovative & Reliable Solutions', 'Expertise in Solar & Industrial Services', 'Commitment to Quality & Safety', 'Customer-Centric Approach']}
        image={misc.whyAbout}
        imageAlt="Solar panels with a city skyline at sunset"
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Our Team" subtitle="Leadership and professionals behind HERGA'S SOLUTIONS" />
          <ul className="team-grid team-grid--ceo"><TeamCard member={CEO} index={0} featured /></ul>
          <ul className="team-grid">{HEADS.map((m, i) => <TeamCard key={m.name} member={m} index={i} />)}</ul>
          <ul className="team-grid">{SUPPORT.map((m, i) => <TeamCard key={m.name} member={m} index={i} />)}</ul>
        </div>
      </section>

      <CTABanner icon={Leaf} title="Let’s Build a Greener Tomorrow Together" text="Get in touch with us for your solar and industrial solutions." />
    </>
  );
}