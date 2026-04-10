import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Moon, Sun, ChevronRight, BarChart3, 
  Users, Calculator, ShieldCheck, Briefcase, 
  Search, ExternalLink, Globe, Mail, Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from './assets/hero.png';
import meetingImg from './assets/meeting.png';

const Navbar = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'py-6'}`}>
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-serif font-bold tracking-tight">
          AT<span className="text-accent-gold">Advisory</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium uppercase tracking-widest text-secondary">
          <a href="#home" className="hover:text-gold transition-colors">Home</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#about" className="hover:text-gold transition-colors">Approach</a>
          <a href="#insights" className="hover:text-gold transition-colors">Insights</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="hidden sm:block executive-gradient text-white px-6 py-2 rounded-md text-xs uppercase font-bold tracking-widest hover:opacity-90 shadow-lg">
            Connect
          </button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border p-8"
          >
            <div className="flex flex-col space-y-6 text-center uppercase tracking-widest font-medium">
              <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>Approach</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <button className="executive-gradient text-white py-4 rounded-md text-xs font-bold">Connect</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block text-accent-gold font-bold text-xs uppercase tracking-[0.3em] mb-6">Strategic Advisory</span>
        <h1 className="text-5xl md:text-7xl mb-8 leading-[1.1]">
          Strategic Financial <br />
          & Business Advisory <br />
          <span className="italic font-light opacity-80 text-accent-gold">for Growth</span>
        </h1>
        <p className="text-lg text-secondary max-w-lg mb-12">
          Synthesizing complex market data into rigorous, actionable wisdom. We provide the architectural framework for your firm's sustainable expansion.
        </p>
        <div className="flex flex-wrap gap-6">
          <button className="executive-gradient text-white px-10 py-5 rounded-md text-sm font-bold uppercase tracking-widest shadow-xl hover:scale-105 transition-transform">
            Get Started
          </button>
          <button className="border border-border px-10 py-5 rounded-md text-sm font-bold uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5">
            Our Portfolio
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
          <img src={heroImg} alt="Corporate Office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </div>
        <div className="absolute -bottom-8 -left-8 bg-surface p-8 rounded-xl shadow-2xl border-l-4 border-accent-gold max-w-[220px]">
          <span className="block text-4xl font-bold mb-1">20+</span>
          <span className="text-sm text-secondary font-medium">Years of market-leading structural advisory expertise.</span>
        </div>
      </motion.div>
    </div>
    
    <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 -z-10 blur-3xl rounded-full translate-x-1/2"></div>
  </section>
);

const TrustLogos = () => (
  <section className="py-16 bg-surface border-y border-border/50">
    <div className="container">
      <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-secondary/50 mb-12">Trusted by Global Entities</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        {['NEXUS', 'EQUITY', 'VANTAGE', 'MERIDIAN', 'HORIZON'].map(logo => (
          <span key={logo} className="text-xl font-serif font-black tracking-tighter">{logo}</span>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: 'Accounting', desc: 'Rigorous financial oversight transforming data into strategic intelligence.', icon: <Calculator /> },
    { title: 'Tax Advisory', desc: 'Precision planning aligning regulatory compliance with long-term goals.', icon: <ShieldCheck /> },
    { title: 'Payroll', desc: 'Seamless global disbursement infrastructures for modern workforces.', icon: <Users /> },
    { title: 'Executive Coaching', desc: 'Bespoke leadership development for senior organizational roles.', icon: <Briefcase /> },
    { title: 'Market Insight', desc: 'High-fidelity analytics to inform every strategic recommendation.', icon: <BarChart3 /> },
    { title: 'Internal Audit', desc: 'Independent examination ensuring the highest standards of integrity.', icon: <Search /> },
  ];

  return (
    <section id="services" className="section-padding bg-surface/50">
      <div className="container">
        <div className="mb-20">
          <span className="text-accent-gold font-bold text-xs uppercase tracking-widest">Our Capabilities</span>
          <h2 className="text-4xl md:text-5xl mt-6">Structural Integrity for <br />Modern Enterprise</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-surface p-10 rounded-2xl border border-border group hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 executive-gradient rounded-lg flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                {React.cloneElement(s.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="text-2xl mb-4">{s.title}</h3>
              <p className="text-secondary">{s.desc}</p>
              <a href="#" className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-accent-gold group-hover:gap-2 transition-all">
                Learn More <ChevronRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Approach = () => (
  <section id="about" className="section-padding">
    <div className="container grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
          <img src={meetingImg} alt="Executive Meeting" className="w-full h-auto" />
          <div className="absolute inset-0 bg-primary-accent/10 mix-blend-overlay"></div>
        </div>
        <div className="absolute -top-12 -right-12 w-64 h-64 executive-gradient rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent-gold/20 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div>
        <span className="text-accent-gold font-bold text-xs uppercase tracking-widest">Why ATAdvisory</span>
        <h2 className="text-4xl md:text-5xl my-8">The Digital Curator Approach</h2>
        
        <div className="space-y-10">
          {[
            { title: 'Expertise', desc: 'Decades of synthesis from senior advisors who have navigated multiple market cycles.', icon: <Globe /> },
            { title: 'Compliance', desc: 'Proactive regulatory alignment that mitigates risk before it impacts your bottom line.', icon: <ShieldCheck /> },
            { title: 'Tailored', desc: 'Bespoke architectural frameworks built specifically for your business goals.', icon: <Briefcase /> },
          ].map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="text-accent-gold shrink-0">{item.icon}</div>
              <div>
                <h4 className="text-xl mb-2">{item.title}</h4>
                <p className="text-secondary">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="section-padding bg-surface">
    <div className="container text-center max-w-4xl">
      <Quote className="mx-auto text-accent-gold opacity-20 mb-12" size={64} />
      <h3 className="text-3xl md:text-4xl italic font-light mb-12">
        "The level of strategic synthesis provided by ATAdvisory is unparalleled. They didn't just give us data; they gave us a roadmap that successfully guided our growth."
      </h3>
      <div>
        <div className="font-bold text-xl mb-1">Helena Vance</div>
        <div className="text-secondary text-sm uppercase tracking-widest">Managing Director, Nexus Equity</div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="container mb-32">
    <div className="executive-gradient rounded-3xl p-16 md:p-24 text-center relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl text-white mb-8">Ready to grow your firm?</h2>
        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
          Begin your consultation with our senior advisory team and architect your firm's future with precision.
        </p>
        <button className="bg-white text-primary px-12 py-5 rounded-md font-bold uppercase tracking-widest shadow-2xl hover:bg-white/90">
          Request Private Invite
        </button>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#fff_0%,_transparent_70%)] opacity-20"></div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface border-t border-border pt-20 pb-10">
    <div className="container grid md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-1">
        <div className="text-2xl font-serif font-bold mb-6">AT<span className="text-accent-gold">Advisory</span></div>
        <p className="text-secondary text-sm">
          Precision financial architecture and strategic advisory for the global executive.
        </p>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Navigation</h4>
        <ul className="space-y-4 text-sm text-secondary">
          <li><a href="#" className="hover:text-primary">Services</a></li>
          <li><a href="#" className="hover:text-primary">Case Studies</a></li>
          <li><a href="#" className="hover:text-primary">Leadership</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Legal</h4>
        <ul className="space-y-4 text-sm text-secondary">
          <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-primary">Terms of Use</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Connect</h4>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Globe size={18} /></a>
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Mail size={18} /></a>
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all"><ExternalLink size={18} /></a>
        </div>
      </div>
    </div>
    <div className="container border-t border-border pt-10 text-center text-xs text-secondary opacity-50 uppercase tracking-widest">
      &copy; 2024 ATAdvisory Global. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <TrustLogos />
      <Services />
      <Approach />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}
