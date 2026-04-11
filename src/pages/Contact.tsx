export default function Contact() {
  return (
    <div className="bg-[var(--bg-color)] min-h-screen">
      <section className="pt-32 pb-20 bg-white">
        <div className="container text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-[#06132D] mb-6">Book a Consultation</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Initiate a dialogue with our senior advisory team to define your structural requirements.</p>
        </div>
      </section>

      <section className="section-padding bg-[var(--bg-color)]">
        <div className="container max-w-5xl">
            <div className="flex flex-col lg:flex-row gap-16">
                
                {/* Contact Form */}
                <div className="flex-grow bg-white p-12 shadow-sm rounded-sm border border-[rgba(6,19,45,0.05)]">
                    <form className="space-y-8">
                        <div className="grid grid-cols-2 gap-8">
                           <div>
                               <label className="block text-xs uppercase tracking-widest text-[#06132D] font-bold mb-3">First Name</label>
                               <input type="text" className="w-full border-b border-[#06132D]/20 py-3 bg-transparent focus:border-[#c2a674] focus:outline-none transition-colors rounded-none placeholder:text-gray-300" placeholder="Jane" />
                           </div>
                           <div>
                               <label className="block text-xs uppercase tracking-widest text-[#06132D] font-bold mb-3">Last Name</label>
                               <input type="text" className="w-full border-b border-[#06132D]/20 py-3 bg-transparent focus:border-[#c2a674] focus:outline-none transition-colors rounded-none placeholder:text-gray-300" placeholder="Doe" />
                           </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-[#06132D] font-bold mb-3">Email Address</label>
                            <input type="email" className="w-full border-b border-[#06132D]/20 py-3 bg-transparent focus:border-[#c2a674] focus:outline-none transition-colors rounded-none placeholder:text-gray-300" placeholder="jane.doe@company.com" />
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-[#06132D] font-bold mb-3">Inquiry Type</label>
                            <select className="w-full border-b border-[#06132D]/20 py-3 bg-transparent focus:border-[#c2a674] focus:outline-none transition-colors rounded-none text-[#06132D]">
                                <option>General Advisory</option>
                                <option>Tax Structure</option>
                                <option>Audit Services</option>
                                <option>M&A Consulting</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-[#06132D] font-bold mb-3">Message</label>
                            <textarea rows={4} className="w-full border-b border-[#06132D]/20 py-3 bg-transparent focus:border-[#c2a674] focus:outline-none transition-colors rounded-none placeholder:text-gray-300" placeholder="Briefly describe your objectives..."></textarea>
                        </div>

                        <button className="w-full bg-[#06132D] text-white py-5 font-bold uppercase tracking-widest text-xs hover:bg-[#142340] transition-colors mt-4 shadow-xl">
                            Submit Inquiry
                        </button>
                    </form>
                </div>

                {/* Direct Connect */}
                <div className="lg:w-1/3 space-y-12">
                    <div>
                        <h4 className="font-serif text-2xl text-[#06132D] mb-4">Direct Connection</h4>
                        <p className="text-gray-500 text-sm mb-6">For immediate requirements or press inquiries, please contact our director desk directly.</p>
                        <a href="mailto:direct@editorialarchitect.com" className="text-[#c2a674] font-bold uppercase tracking-widest text-xs border-b border-[#c2a674] pb-1 hover:text-[#06132D] hover:border-[#06132D] transition-colors">
                           direct@editorialarchitect.com
                        </a>
                    </div>
                    
                    <div>
                        <h4 className="font-serif text-2xl text-[#06132D] mb-4">Global Headquarters</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            The Editorial Architect<br/>
                            1420 Curatorial Ave, Suite 400<br/>
                            London, UK W1B 5TG
                        </p>
                    </div>

                    <div className="pt-8 border-t border-[#06132D]/10">
                         <h4 className="text-xs uppercase tracking-widest text-[#06132D] font-bold mb-4">Available Hours</h4>
                         <p className="text-gray-500 text-sm">Mon-Fri: 9:00 AM - 6:00 PM GMT</p>
                    </div>
                </div>

            </div>
        </div>
      </section>
    </div>
  );
}
