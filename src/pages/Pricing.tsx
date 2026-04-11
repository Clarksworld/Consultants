import { Link } from 'react-router-dom';
import './Pricing.css';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$49',
    period: '/mo',
    desc: 'Essential advisory for early-stage businesses.',
    features: [
      'Monthly bookkeeping',
      'Basic tax filing support',
      'Email support',
      'Quarterly review call',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: '$129',
    period: '/mo',
    desc: 'Growing businesses needing structured support.',
    features: [
      'Full monthly accounting',
      'Payroll (up to 10 staff)',
      'VAT returns',
      'Bi-monthly strategy call',
      'Priority email support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$299',
    period: '/mo',
    desc: 'Our most popular plan for established businesses.',
    features: [
      'Full accounting & payroll',
      'Corporate tax planning',
      'Legal contracts review',
      'Monthly board reporting',
      'Dedicated advisor',
      'Weekend support',
    ],
    cta: 'Get Started',
    highlight: true,
    badge: 'Recommended',
  },
  {
    id: 'boost',
    name: 'Boost',
    price: '$499',
    period: '/mo',
    desc: 'Comprehensive services for scaling companies.',
    features: [
      'Everything in Premium',
      'ESG reporting',
      'Internal audit support',
      'International tax advice',
      'Investor reporting packs',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    id: 'supreme',
    name: 'Supreme',
    price: '$999',
    period: '/mo',
    desc: 'Bespoke advisory for institutional clients.',
    features: [
      'Everything in Boost',
      'Dedicated senior partner',
      'M&A advisory support',
      'Custom reporting framework',
      'On-site presence available',
      'Direct partner hotline',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
];

const features = [
  {
    icon: '◈',
    title: 'Total Compliance Control',
    desc: 'Stay ahead of regulatory changes with real-time compliance monitoring across all relevant jurisdictions.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=70',
  },
  {
    icon: '◉',
    title: 'Expert Curators',
    desc: 'Each client is matched with a senior advisor who understands their industry and long-term goals.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=70',
  },
  {
    icon: '◐',
    title: 'Global Reach',
    desc: 'With coverage in 12+ jurisdictions, we provide consistent advisory regardless of where your business operates.',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&auto=format&fit=crop&q=70',
  },
];

export default function Pricing() {
  return (
    <div className="pricing-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Strategy First</span>
          <h1>Start Your Business with Confidence</h1>
          <p>Transparent pricing across five tiers. Every plan includes access to our network of experts, no hidden fees, and a commitment to your growth.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-section section-pad">
        <div className="container">
          <div className="pricing-grid">
            {plans.map(({ id, name, price, period, desc, features: feats, cta, highlight, badge }) => (
              <div key={id} className={`pricing-card ${highlight ? 'pricing-card--highlight' : ''}`}>
                {badge && <div className="pricing-card__badge">{badge}</div>}
                <div className="pricing-card__header">
                  <h3 className="pricing-card__name">{name}</h3>
                  <div className="pricing-card__price">
                    <span className="pricing-card__amount">{price}</span>
                    <span className="pricing-card__period">{period}</span>
                  </div>
                  <p className="pricing-card__desc">{desc}</p>
                </div>
                <div className="pricing-card__divider" />
                <ul className="pricing-card__features">
                  {feats.map(f => (
                    <li key={f} className="pricing-card__feature">
                      <span className="pricing-card__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn pricing-card__cta ${highlight ? 'btn-gold' : 'btn-navy'}`}
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation & Infrastructure */}
      <section className="section-pad" style={{ background: '#f0ede7' }}>
        <div className="container">
          <div className="home-section-header home-section-header--center">
            <span className="eyebrow">Foundation & Infrastructure</span>
            <h2>Built to Support Your Growth</h2>
            <div className="gold-bar gold-bar-center" />
          </div>
          <div className="grid-3" style={{ marginTop: '3rem' }}>
            {features.map(({ icon, title, desc, image }) => (
              <div key={title} className="infra-card card">
                <div className="infra-card__img-wrap">
                  <img src={image} alt={title} className="infra-card__img" />
                </div>
                <div className="infra-card__body">
                  <span className="infra-card__icon">{icon}</span>
                  <h4 className="infra-card__title">{title}</h4>
                  <p className="infra-card__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <span className="eyebrow">Your Legacy Starts Here</span>
          <h2>Ready to Architect Your Legacy?</h2>
          <p>Speak with our team and find the right plan to support your organisation's ambitions.</p>
          <div className="btn-group">
            <Link to="/contact" className="btn btn-gold">Book a Free Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
