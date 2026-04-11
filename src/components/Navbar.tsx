import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-serif font-bold tracking-tight text-primary-navy whitespace-nowrap">
          The Editorial Architect
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 text-xs font-medium uppercase tracking-[0.15em] text-text-secondary">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              className={({ isActive }) => 
                `hover:text-primary-navy transition-colors ${isActive ? 'text-primary-navy border-b border-primary-navy pb-1' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Link to="/contact" className="hidden sm:inline-block btn-primary shadow-lg hover:shadow-xl">
            GET STARTED
          </Link>
          <button className="lg:hidden text-primary-navy" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-surface border-b border-border shadow-xl overflow-hidden"
          >
            <div className="flex flex-col py-6 px-8 space-y-6 text-sm uppercase tracking-widest font-medium text-text-secondary">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path}
                  className={({ isActive }) => 
                    `block hover:text-primary-navy ${isActive ? 'text-primary-navy font-bold' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/contact" className="btn-primary w-full text-center mt-4">
                GET STARTED
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
