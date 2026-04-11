import { Link } from 'react-router-dom';
import './Footer.css';

const partners = ['VOGUE', "SOTHEBY'S", 'GOLDMAN', 'LEXUS', 'ROLEX'];

const companyLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const legalLinks = [
  { label: 'Privacy Policy' },
  { label: 'Terms of Service' },
  { label: 'Cookie Policy' },
  { label: 'Disclaimer' },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Partners Band */}
      <div className="footer__partners">
        <div className="container">
          <p className="footer__partners-label">Global Partnerships</p>
          <div className="footer__partners-row">
            {partners.map(p => (
              <span key={p} className="footer__partner">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">✦</span>
              The Editorial Architect
            </Link>
            <p className="footer__brand-desc">
              Architecting clarity for institutional and private clients navigating
              complex financial, legal, and strategic landscapes.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="LinkedIn" className="footer__social">in</a>
              <a href="#" aria-label="Twitter" className="footer__social">𝕏</a>
              <a href="#" aria-label="Instagram" className="footer__social">IG</a>
            </div>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__col-links">
              {companyLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__col-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer__col">
            <h4 className="footer__col-title">Legal</h4>
            <ul className="footer__col-links">
              {legalLinks.map(({ label }) => (
                <li key={label}>
                  <a href="#" className="footer__col-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="footer__col">
            <h4 className="footer__col-title">Connect</h4>
            <ul className="footer__col-links footer__connect">
              <li>
                <span className="footer__connect-icon">✉</span>
                <a href="mailto:hello@editorialarchitect.com" className="footer__col-link">
                  hello@editorialarchitect.com
                </a>
              </li>
              <li>
                <span className="footer__connect-icon">✆</span>
                <a href="tel:+442071234567" className="footer__col-link">
                  +44 207 123 4567
                </a>
              </li>
              <li>
                <span className="footer__connect-icon">◎</span>
                <span className="footer__col-link">One Canada Square, London</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="container footer__bottom-inner">
            <p>© {new Date().getFullYear()} The Editorial Architect. All rights reserved.</p>
            <p className="footer__bottom-tag">Precision. Discretion. Excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
