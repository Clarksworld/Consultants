export default function Services() {
  const servicesList = [
    { title: "Accounting & Tax", desc: "Rigorous financial oversight transforming raw data into strategic intelligence." },
    { title: "Payroll Infrastructure", desc: "Seamless global disbursement frameworks for modern operations." },
    { title: "Legal & Compliance", desc: "Proactive regulatory alignment mitigating risks effectively." },
    { title: "Executive Coaching", desc: "Bespoke leadership development for senior organizational roles." }
  ];

  return (
    <div className="bg-[var(--bg-color)] min-h-screen">
      <section className="section-padding">
        <div className="container">
          <div className="max-w-2xl mb-20 text-center mx-auto">
            <span className="text-[#c2a674] font-bold text-xs uppercase tracking-[0.15em]">Our Capabilities</span>
            <h1 className="text-5xl font-serif text-[#06132D] mt-4 mb-6">Curated Services</h1>
            <p className="text-gray-600 text-lg">Sophisticated solutions bridging the gap between functional finance and strategic vision.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {servicesList.map((service, idx) => (
              <div key={idx} className="bg-white p-12 shadow-sm border border-[#06132D]/5 hover:shadow-xl transition-shadow rounded-sm text-center">
                <h3 className="font-serif text-2xl text-[#06132D] mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">{service.desc}</p>
                <div className="h-px bg-[#06132D]/10 w-16 mx-auto mb-8"></div>
                <ul className="space-y-3 text-sm text-gray-500 tracking-wide text-left inline-block">
                  <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> Strategic Analysis</li>
                  <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> Implementation Planning</li>
                  <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> Ongoing Curation</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Dark bottom CTA */}
      <section className="section-padding bg-[#06132D] text-center text-white">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-4xl mb-8 leading-tight">Elevate your institutional intelligence.</h2>
          <button className="bg-[#c2a674] text-[#06132D] px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-[#b0966a] transition-colors">
            Engage Our Team
          </button>
        </div>
      </section>
    </div>
  );
}
