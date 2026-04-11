import { Link } from 'react-router-dom';
import './Home.css';

const services = [
  { icon: '◈', title: 'Accounting', desc: 'Rigorous financial record management and reporting for institutional clarity.' },
  { icon: '◉', title: 'Payroll', desc: 'Seamless payroll operations ensuring precision, compliance, and confidentiality.' },
  { icon: '◐', title: 'Tax Advisory', desc: 'Strategic tax planning that preserves capital and maximises efficiency.' },
  { icon: '⬡', title: 'Legal Services', desc: 'Expert counsel across corporate law, contracts, and regulatory compliance.' },
  { icon: '◧', title: 'Reporting', desc: 'Bespoke financial and ESG reporting aligned with global standards.' },
  { icon: '◫', title: 'Audit', desc: 'Independent assurance services that elevate trust and transparency.' },
];

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '240+', label: 'Global Clients' },
  { value: '$4B+', label: 'Capital Guided' },
  { value: '12', label: 'Key Industries' },
];

const testimonial = {
  quote: 'The Editorial Architect redefined how we approach financial strategy. Their counsel is precise, discreet, and transformational.',
  name: 'Alexander Osei',
  title: 'CEO, Meridian Capital Group',
};

const trustedBy = ['NEXUS', 'EQUITY', 'VANTAGE', 'MERIDIAN', 'HORIZON'];

const pillars = [
  { icon: '◈', label: 'Absolute Clarity' },
  { icon: '◉', label: 'Rigour & Precision' },
  { icon: '◐', label: 'Discreet Stewardship' },
  { icon: '⬡', label: 'Intellectual Heritage' },
];

export default function Home() {
  return (
    <div className="home">
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&auto=format&fit=crop&q=80"
            alt="Elegant corporate office interior"
            className="hero__img"
          />
          <div className="hero__overlay" />
        </div>
        <div className="container hero__content">
          <div className="hero__left">
            <span className="eyebrow">Strategic Guidance</span>
            <h1 className="hero__headline">
              Architecting Clarity in a <em className="italic-gold">Complex</em> World
            </h1>
            <p className="hero__desc">
              Elite advisory services for private clients, family offices, and institutional leaders seeking absolute precision in finance, law, and strategy.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-gold">Book a Consultation</Link>
              <Link to="/services" className="btn btn-outline-white">Our Services</Link>
            </div>
            <div className="hero__stat-badge">
              <div className="hero__stat-badge-inner">
                <strong>$4B+</strong>
                <span>Capital Guided Globally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trusted By ───────────────────────────────────────── */}
      <section className="trusted section-pad-sm">
        <div className="container">
          <p className="trusted__label">Trusted By</p>
          <div className="trusted__row">
            {trustedBy.map(name => (
              <span key={name} className="trusted__name">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Grid ────────────────────────────────────── */}
      <section className="section-pad" id="services-overview">
        <div className="container">
          <div className="home-section-header">
            <span className="eyebrow">What We Do</span>
            <h2>A Suite of Expert Services</h2>
            <div className="gold-bar" />
            <p className="home-section-sub">
              From foundational accounting to sophisticated tax strategy and legal counsel — every service is delivered with absolute discretion.
            </p>
          </div>
          <div className="services-grid">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="service-card">
                <span className="service-card__icon">{icon}</span>
                <h4 className="service-card__title">{title}</h4>
                <p className="service-card__desc">{desc}</p>
                <Link to="/services" className="service-card__link">
                  Learn more <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats Row ────────────────────────────────────────── */}
      <section className="stats-band">
        <div className="container stats-band__grid">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-item">
              <strong className="stat-item__value">{value}</strong>
              <span className="stat-item__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Digital Curator ──────────────────────────────────── */}
      <section className="section-pad curator">
        <div className="container curator__grid">
          <div className="curator__text">
            <span className="eyebrow">The Digital Curator</span>
            <h2>Intelligence That Drives Decision</h2>
            <div className="gold-bar" />
            <p>
              Our advisory methodology blends institutional rigour with bespoke insight. Every engagement is tailored to reveal the clarity hidden within complexity.
            </p>
            <ul className="curator__bullets">
              {[
                'Deep-dive financial analysis and scenario modelling',
                'Regulatory intelligence across 12+ jurisdictions',
                'Board-level strategy and capital allocation advice',
                'Proprietary briefings and confidential research',
              ].map(pt => (
                <li key={pt} className="curator__bullet">
                  <span className="curator__dot">◆</span>
                  {pt}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-navy">
              Discover Our Approach
            </Link>
          </div>
          <div className="curator__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&auto=format&fit=crop&q=80"
              alt="Professional working at desk"
              className="curator__image"
            />
          </div>
        </div>
      </section>

      {/* ─── Pillars ──────────────────────────────────────────── */}
      <section className="pillars section-pad-sm">
        <div className="container">
          <div className="home-section-header home-section-header--center">
            <span className="eyebrow">Our Foundation</span>
            <h2>Pillars of Excellence</h2>
            <div className="gold-bar gold-bar-center" />
          </div>
          <div className="pillars__grid">
            {pillars.map(({ icon, label }) => (
              <div key={label} className="pillar-item">
                <span className="pillar-item__icon">{icon}</span>
                <span className="pillar-item__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonial ──────────────────────────────────────── */}
      <section className="testimonial section-pad">
        <div className="container">
          <div className="testimonial__card">
            <span className="testimonial__quote-mark">"</span>
            <blockquote className="testimonial__text">{testimonial.quote}</blockquote>
            <div className="testimonial__divider" />
            <p className="testimonial__name">{testimonial.name}</p>
            <p className="testimonial__title">{testimonial.title}</p>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────────────────── */}
      <section className="cta-banner">
        <div className="container">
          <span className="eyebrow">Take The Next Step</span>
          <h2>Ready to Grow Your Business?</h2>
          <p>Speak with one of our advisors and discover what strategic clarity can unlock for your organisation.</p>
          <div className="btn-group">
            <Link to="/contact" className="btn btn-gold">Schedule a Free Consultation</Link>
            <Link to="/pricing" className="btn btn-outline-white">View Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
