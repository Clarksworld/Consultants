import { useState } from 'react';
import './Contact.css';

const serviceOptions = [
  'Select a service',
  'Accounting',
  'Payroll',
  'Tax Advisory',
  'Legal Services',
  'Reporting',
  'Audit',
  'General Enquiry',
];

const businessTypes = [
  'Select business type',
  'Start-up',
  'SME (1–50 employees)',
  'Mid-Market (50–500)',
  'Enterprise (500+)',
  'Family Office',
  'Institutional',
  'Individual / HNW',
];

const partners = ['VOGUE', "SOTHEBY'S", 'GOLDMAN', 'LEXUS', 'ROLEX'];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', businessType: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Contact Us</span>
          <h1>Book a Consultation</h1>
          <p>Complete the form and one of our senior advisors will be in touch within one business day.</p>
        </div>
      </section>

      {/* Split Layout */}
      <section className="contact-section section-pad">
        <div className="container contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <div className="contact-info__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1505409859467-3a796fd5798e?w=800&auto=format&fit=crop&q=75"
                alt="Our London office"
                className="contact-info__image"
              />
            </div>
            <div className="contact-info__blocks">
              <div className="contact-info__block">
                <span className="contact-info__icon">✆</span>
                <div>
                  <p className="contact-info__label">Phone</p>
                  <a href="tel:+442071234567" className="contact-info__value">+44 207 123 4567</a>
                </div>
              </div>
              <div className="contact-info__block">
                <span className="contact-info__icon">✉</span>
                <div>
                  <p className="contact-info__label">Email</p>
                  <a href="mailto:hello@editorialarchitect.com" className="contact-info__value">
                    hello@editorialarchitect.com
                  </a>
                </div>
              </div>
              <div className="contact-info__block">
                <span className="contact-info__icon">◎</span>
                <div>
                  <p className="contact-info__label">Office</p>
                  <p className="contact-info__value">One Canada Square, Canary Wharf, London E14 5AB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <span className="contact-success__icon">✓</span>
                <h3>Thank you, {form.name.split(' ')[0]}.</h3>
                <p>Your consultation request has been received. A senior advisor will be in touch within one business day.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit} id="consultation-form">
                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Julian Vane"
                      value={form.name}
                      onChange={handle}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="julian@example.com"
                      value={form.email}
                      onChange={handle}
                      required
                    />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="businessType">Business Type</label>
                    <select
                      id="businessType"
                      name="businessType"
                      className="form-control"
                      value={form.businessType}
                      onChange={handle}
                      required
                    >
                      {businessTypes.map(o => (
                        <option key={o} value={o === 'Select business type' ? '' : o}
                          disabled={o === 'Select business type'}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Required</label>
                    <select
                      id="service"
                      name="service"
                      className="form-control"
                      value={form.service}
                      onChange={handle}
                      required
                    >
                      {serviceOptions.map(o => (
                        <option key={o} value={o === 'Select a service' ? '' : o}
                          disabled={o === 'Select a service'}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={5}
                    placeholder="Tell us about your business, goals, or challenges..."
                    value={form.message}
                    onChange={handle}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-navy contact-form__submit">
                  Schedule a Free Consultation →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <div className="contact-partners">
        <div className="container">
          <p className="footer__partners-label">Global Partnerships</p>
          <div className="footer__partners-row">
            {partners.map(p => (
              <span key={p} className="footer__partner">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
