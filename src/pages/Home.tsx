// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import meetingImg from '../assets/meeting.png';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-[var(--bg-color)]">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-[#c2a674] font-bold text-xs uppercase tracking-[0.3em] mb-6">Elevated Vision</span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#06132D] leading-[1.1] mb-6">
              Architecting <br/>
              <span className="italic font-light opacity-90 text-[#c2a674]">Clarity</span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-md">
              We curate high-fidelity business advisory and accounting frameworks for global enterprises, ensuring sophisticated growth and uncompromising compliance.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary">Get Started</Link>
              <Link to="/services" className="btn-secondary">Explore Services</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl border-t border-[#06132D]/10">
              <img src={heroImg} alt="Strategic Architecture Hero" className="w-full h-full object-cover grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100 duration-1000" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-2xl w-64 border-l-2 border-[#c2a674]">
              <div className="text-5xl font-serif text-[#06132D] mb-1">20+</div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">Years Curating Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 border-y border-[#06132D]/5 text-center bg-white">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-10">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
          <span className="text-2xl font-serif font-black tracking-widest text-[#06132D]">VOGUE</span>
          <span className="text-2xl font-serif font-black tracking-widest text-[#06132D]">SOTHEBY'S</span>
          <span className="text-2xl font-serif font-black tracking-widest text-[#06132D]">GOLDMAN</span>
          <span className="text-2xl font-serif font-black tracking-widest text-[#06132D]">CONDÉ NAST</span>
        </div>
      </section>

      {/* Approach Summary */}
      <section className="section-padding bg-[var(--bg-color)]">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square">
               <img src={meetingImg} alt="Curatorial Process" className="w-full h-full object-cover grayscale contrast-125" />
               <div className="absolute inset-0 border border-[#06132D]/10 translate-x-4 translate-y-4"></div>
            </div>
            <div>
              <span className="text-[#c2a674] font-bold text-xs uppercase tracking-widest">Our Methodology</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#06132D] my-8">The Digital Curator Approach</h2>
              <div className="space-y-10">
                {[
                  { title: 'Expertise', desc: 'Decades of synthesis from senior advisors who have navigated multiple market cycles.' },
                  { title: 'Compliance', desc: 'Proactive regulatory alignment that mitigates risk before it impacts your bottom line.' },
                  { title: 'Tailored', desc: 'Bespoke architectural frameworks built specifically for your business goals.' },
                ].map((item, i) => (
                  <div key={i} className="border-l border-[#c2a674] pl-6">
                      <h4 className="font-serif text-2xl text-[#06132D] mb-2">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="section-padding bg-white text-center">
         <div className="container max-w-4xl">
            <div className="text-6xl text-[#c2a674] opacity-40 font-serif mb-6">"</div>
            <h3 className="font-serif text-2xl md:text-4xl text-[#06132D] italic font-light mb-12 leading-relaxed">
              The level of strategic synthesis provided is unparalleled. They didn't just give us data; they gave us a curatorial roadmap that successfully guided our global growth.
            </h3>
            <div>
              <div className="font-bold text-[#06132D] uppercase tracking-widest mb-1 text-sm">Helena Vance</div>
              <div className="text-gray-400 text-xs uppercase tracking-[0.2em]">Managing Director, Nexus Equity</div>
            </div>
         </div>
      </section>

      {/* CTA Bottom */}
      <section className="section-padding bg-[#06132D] text-center text-white">
        <div className="container max-w-4xl border border-white/10 p-16 md:p-24 bg-white/5 rounded-sm relative overflow-hidden">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white leading-tight">Ready to curate your next strategy?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto tracking-wide">Connect with our senior advisory team to articulate your vision and architect your structural advantage.</p>
          <Link to="/contact" className="bg-[#c2a674] text-[#06132D] px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#b0966a] transition-colors inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
