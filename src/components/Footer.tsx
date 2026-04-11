import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#06132D] text-white pt-20 pb-10">
      <div className="container grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <Link to="/" className="text-2xl font-serif font-bold mb-6 inline-block">
            The Editorial Architect
          </Link>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed tracking-wide">
            Strategic financial intelligence and curatorial business advisory for modern, ambitious enterprises.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-[0.1em] text-gray-400 font-bold mb-6">Navigation</h4>
          <ul className="space-y-3 text-sm tracking-wide">
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-[0.1em] text-gray-400 font-bold mb-6">Legal</h4>
          <ul className="space-y-3 text-sm tracking-wide">
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-[0.1em] text-gray-400 font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4 tracking-wide">Curated intelligence delivered directly to your inbox.</p>
          <form className="flex mt-6">
            <input type="email" placeholder="Email Address" className="border-none rounded-sm rounded-r-none px-4 py-3 flex-grow text-gray-900 bg-white/90 focus:ring-0 focus:outline-none" />
            <button type="submit" className="bg-[#c2a674] px-4 py-3 text-[#06132D] font-bold rounded-r-sm text-xs tracking-widest uppercase hover:bg-[#b0966a] transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="container border-t border-white/10 pt-8 text-center text-xs text-gray-500 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} The Editorial Architect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
