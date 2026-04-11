import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    id: 'accounting',
    icon: '◈',
    title: 'Accounting',
    tagline: 'Financial precision at every level.',
    desc: 'We provide rigorous bookkeeping, management accounts, and financial statement preparation aligned with IFRS and local GAAP standards. Our clients receive monthly board-ready reporting tailored to their operational complexity.',
    features: ['Management accounts & bookkeeping', 'IFRS/GAAP-compliant financials', 'Board-level reporting packs'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=75',
    imageAlt: 'Open ledger books on desk',
    reverse: false,
  },
  {
    id: 'payroll',
    icon: '◉',
    title: 'Payroll',
    tagline: 'Seamless, compliant, confidential.',
    desc: 'End-to-end payroll management for businesses of all scales. We ensure accurate salary processing, tax deductions, pension contributions, and full regulatory compliance across multiple jurisdictions.',
    features: ['Multi-jurisdiction payroll processing', 'Pension & benefits management', 'RTI submissions & compliance'],
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&auto=format&fit=crop&q=75',
    imageAlt: 'Two colleagues in professional setting',
    reverse: true,
  },
  {
    id: 'tax',
    icon: '◐',
    title: 'Tax Advisory',
    tagline: 'Preserve capital with strategic tax intelligence.',
    desc: 'Our tax specialists deliver proactive advice across corporate tax, VAT, capital gains, and international structures. We help clients navigate complexity and keep more of what they earn.',
    features: ['Corporate & personal tax planning', 'VAT & cross-border structuring', 'HMRC negotiation & disputes'],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=75',
    imageAlt: 'Abstract financial lines',
    reverse: false,
  },
  {
    id: 'legal',
    icon: '⬡',
    title: 'Legal Services',
    tagline: 'Expert counsel, discreet execution.',
    desc: 'From M&A transactions to employment contracts and regulatory filings, our legal team provides clear, actionable guidance. We protect your interests with precision and confidentiality.',
    features: ['Corporate governance & contracts', 'M&A due diligence support', 'Regulatory & compliance counsel'],
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&auto=format&fit=crop&q=75',
    imageAlt: 'Fountain pen signing document',
    reverse: true,
  },
  {
    id: 'reporting',
    icon: '◧',
    title: 'Reporting',
    tagline: 'Insight presented with authority.',
    desc: 'Bespoke financial, ESG, and performance reporting designed for boards, investors, and regulators. We transform raw data into clear, compelling narratives that inform confident decision-making.',
    features: ['ESG & sustainability reporting', 'Investor & stakeholder packs', 'KPI dashboards & analysis'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=75',
    imageAlt: 'Person reviewing financial papers',
    reverse: false,
  },
  {
    id: 'audit',
    icon: '◫',
    title: 'Audit',
    tagline: 'Independent assurance, elevated trust.',
    desc: 'Our audit practice delivers statutory and internal audits with rigour and independence. We go beyond compliance to provide insight that strengthens governance and operational controls.',
    features: ['Statutory & internal audits', 'Risk & controls assessment', 'Post-audit advisory recommendations'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=75',
    imageAlt: 'Modern glass office building lobby',
    reverse: true,
  },
];

export default function Services() {
  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Our Services</span>
          <h1>Advisory Built for Excellence</h1>
          <p>A comprehensive suite of expert services, each delivered with precision, discretion, and a commitment to transformational outcomes.</p>
        </div>
      </section>

      {/* Service Rows */}
      <div className="service-rows">
        {services.map(({ id, icon, title, tagline, desc, features, image, imageAlt, reverse }) => (
          <section key={id} id={id} className={`service-row section-pad ${reverse ? 'service-row--reverse' : ''}`}>
            <div className="container service-row__grid">
              <div className="service-row__text">
                <div className="service-row__badge">
                  <span className="service-row__badge-icon">{icon}</span>
                  <span className="service-row__badge-label">{title}</span>
                </div>
                <h2>{title}</h2>
                <p className="service-row__tagline">{tagline}</p>
                <div className="gold-bar" />
                <p className="service-row__desc">{desc}</p>
                <ul className="service-row__features">
                  {features.map(f => (
                    <li key={f} className="service-row__feature">
                      <span className="service-row__feature-dot">◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="service-row__cta">
                  INQUIRE <span>→</span>
                </Link>
              </div>
              <div className="service-row__image-wrap">
                <img src={image} alt={imageAlt} className="service-row__image" />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="cta-banner">
        <div className="container">
          <span className="eyebrow">Work With Us</span>
          <h2>Elevate Your Institutional Intelligence</h2>
          <p>Whether you're a growing enterprise or an established institution, our team is ready to architect your next phase of excellence.</p>
          <div className="btn-group">
            <Link to="/contact" className="btn btn-gold">Book a Consultation</Link>
            <Link to="/pricing" className="btn btn-outline-white">View Pricing Plans</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
