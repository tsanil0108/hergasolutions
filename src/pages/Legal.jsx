import PageHero from '../components/common/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import { heroes } from '../assets/images';
import { COMPANY } from '../data/company';

// NOTE: Starter wording that only describes what this website actually does.
// Have HERGA'S SOLUTIONS review / replace it with their approved legal text before launch.
const CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      ['Information we collect', 'When you use the enquiry form we collect the name, phone number, email address, selected service and message you enter. If you contact us through WhatsApp, phone or email, we receive the details you share in that conversation.'],
      ['How we use it', 'We use this information only to respond to your enquiry and to provide the services you ask about.'],
      ['Third-party services', 'This website embeds Google Maps and links to WhatsApp. Those services have their own privacy policies.'],
      ['Contact', `For any privacy question, write to ${COMPANY.email} or call ${COMPANY.phone}.`],
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
      ['Use of this website', `This website is operated by ${COMPANY.name} to share information about its solar and industrial services. Information is provided for general guidance.`],
      ['Quotations and subsidies', 'Project scope, pricing and any government subsidy assistance are confirmed individually with each customer. Subsidy eligibility is determined by the relevant government authority.'],
      ['Changes', 'We may update this website and these terms from time to time.'],
      ['Contact', `Questions about these terms can be sent to ${COMPANY.email}.`],
    ],
  },
};

export default function Legal({ kind }) {
  const page = CONTENT[kind];
  usePageMeta(page.title);
  return (
    <>
      <PageHero image={heroes.about} lines={[page.title]} breadcrumb={page.title} />
      <section className="section">
        <div className="container legal">
          {page.sections.map(([h, p]) => (
            <div key={h}><h2>{h}</h2><p>{p}</p></div>
          ))}
        </div>
      </section>
    </>
  );
}
