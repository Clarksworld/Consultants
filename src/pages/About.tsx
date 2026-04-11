import { Link } from 'react-router-dom';
import './About.css';

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '240+', label: 'Global Clients' },
  { value: '12', label: 'Key Industries' },
  { value: '$4B+', label: 'Capital Guided' },
];

const pillars = [
  {
    icon: '◈',
    title: 'Absolute Clarity',
    desc: 'We cut through noise to present the truth of every situation with lucid, actionable precision.',
  },
  {
    icon: '◉',
    title: 'Rigour & Precision',
    desc: 'Every analysis, recommendation, and document is reviewed to the highest standard before it reaches your desk.',
  },
  {
    icon: '◐',
    title: 'Discreet Stewardship',
    desc: 'Your affairs are handled with total confidentiality. Trust is our most valuable currency.',
  },
  {
    icon: '⬡',
    title: 'Intellectual Heritage',
    desc: 'Decades of accumulated expertise across finance, law, and strategy form the bedrock of every engagement.',
  },
  {
    icon: '◧',
    title: 'Actionable Wisdom',
    desc: 'We do not deliver reports — we deliver decisions. Every insight is translated into clear next steps.',
  },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Bio / Firm</span>
          <h1>
            Architecting clarity in a <em className="italic-gold">complex</em> world.
          </h1>
          <p>
            Founded on a conviction that the world's most ambitious individuals and institutions deserve advisors of the highest calibre.
          </p>
        </div>
      </section>

      {/* Stats Row */}
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

      {/* Founder Profile */}
      <section className="section-pad founder">
        <div className="container founder__grid">
          <div className="founder__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&auto=format&fit=crop&q=80&sat=-100"
              alt="Julian Vane, Founder"
              className="founder__image"
            />
          </div>
          <div className="founder__text">
            <span className="eyebrow">The Founder</span>
            <h2 className="founder__name">Julian Vane</h2>
            <p className="founder__role">
              "Strategy without clarity is noise. We provide the silence in which great decisions are made."
            </p>
            <div className="gold-bar" />
            <p>
              Julian built The Editorial Architect after two decades working at the intersection of private equity, international tax law, and family office advisory. His clients span sovereign wealth funds, FTSE 100 boards, and high-net-worth private individuals across five continents.
            </p>
            <p style={{ marginTop: '1rem' }}>
              His approach is grounded in a simple belief: the best advice is that which the client can immediately act upon. Every engagement begins with listening, proceeds with rigorous analysis, and concludes with a precise, implementable strategy.
            </p>
            <a href="#pillars" className="founder__manifesto-link">
              Read The Full Manifesto <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pillars of Excellence */}
      <section id="pillars" className="section-pad pillars-section" style={{ background: '#f0ede7' }}>
        <div className="container">
          <div className="home-section-header home-section-header--center">
            <span className="eyebrow">Our Philosophy</span>
            <h2>Pillars of Excellence</h2>
            <div className="gold-bar gold-bar-center" />
            <p style={{ maxWidth: '560px', margin: '0 auto' }}>
              Five enduring principles that guide every engagement, every recommendation, and every relationship.
            </p>
          </div>
          <div className="pillars-section__grid" style={{ marginTop: '3.5rem' }}>
            {pillars.map(({ icon, title, desc }) => (
              <div key={title} className="pillar-card">
                <span className="pillar-card__icon">{icon}</span>
                <h4 className="pillar-card__title">{title}</h4>
                <p className="pillar-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <span className="eyebrow">Begin Your Engagement</span>
          <h2>Ready to Curate Your Next Strategy?</h2>
          <p>Speak with a senior advisor today and discover what's possible when clarity leads every decision.</p>
          <div className="btn-group">
            <Link to="/contact" className="btn btn-gold">Book a Consultation</Link>
            <Link to="/services" className="btn btn-outline-white">Explore Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
