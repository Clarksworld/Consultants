export default function Pricing() {
  return (
    <div className="bg-[var(--bg-color)] min-h-screen">
      <section className="section-padding pb-0">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#c2a674] font-bold text-xs uppercase tracking-[0.15em]">Investment</span>
            <h1 className="text-5xl font-serif text-[#06132D] mt-4 mb-6">Structural Pricing</h1>
            <p className="text-gray-600 text-lg">Clear, curatorial fee structures designed to scale with your firm's ambition.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-white p-10 border border-[#06132D]/5 flex flex-col hover:border-[#c2a674] transition-colors rounded-sm shadow-sm">
              <h3 className="font-serif text-2xl text-[#06132D] mb-2">Foundation</h3>
              <p className="text-gray-500 text-sm mb-6 h-10">Essential architecture for emerging enterprises.</p>
              <div className="text-4xl text-[#06132D] font-serif mb-8">$2,500<span className="text-sm text-gray-400 font-sans">/mo</span></div>
              <ul className="space-y-4 text-sm text-gray-600 mb-10 flex-grow">
                <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> Monthly Reconciliation</li>
                <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> Standard Reporting</li>
                <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> Basic Compliance Oversight</li>
              </ul>
              <button className="w-full border border-[#06132D] text-[#06132D] py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#06132D] hover:text-white transition-colors">
                Select Plan
              </button>
            </div>

            {/* Tier 2 */}
            <div className="bg-[#06132D] text-white p-10 flex flex-col rounded-sm shadow-2xl scale-105 relative z-10 border-t-4 border-[#c2a674]">
              <div className="absolute top-0 right-0 bg-[#c2a674] text-[#06132D] text-[10px] font-bold uppercase tracking-widest px-3 py-1">Featured</div>
              <h3 className="font-serif text-2xl mb-2">Infrastructure</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">Comprehensive advisory for scaling operations.</p>
              <div className="text-4xl font-serif mb-8">$5,000<span className="text-sm text-gray-400 font-sans">/mo</span></div>
              <ul className="space-y-4 text-sm text-gray-300 mb-10 flex-grow">
                <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> Advanced Financial Modeling</li>
                <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> Strategic Tax Advisory</li>
                <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> Bi-Weekly Consultations</li>
                <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> Priority Support Queue</li>
              </ul>
              <button className="w-full bg-[#c2a674] text-[#06132D] py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                Select Plan
              </button>
            </div>

            {/* Tier 3 */}
            <div className="bg-white p-10 border border-[#06132D]/5 flex flex-col hover:border-[#c2a674] transition-colors rounded-sm shadow-sm">
              <h3 className="font-serif text-2xl text-[#06132D] mb-2">Curator</h3>
              <p className="text-gray-500 text-sm mb-6 h-10">Bespoke synthesis for global entities.</p>
              <div className="text-4xl text-[#06132D] font-serif mb-8">Custom</div>
              <ul className="space-y-4 text-sm text-gray-600 mb-10 flex-grow">
                <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> Dedicated Financial Officer</li>
                <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> M&A Preparation</li>
                <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> International Structuring</li>
                <li className="flex items-center gap-3"><span className="text-[#c2a674] text-xs">◆</span> Daily Curatorial Review</li>
              </ul>
              <button className="w-full border border-[#06132D] text-[#06132D] py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#06132D] hover:text-white transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className="section-padding">
        <div className="container max-w-4xl text-center">
            <h2 className="font-serif text-3xl text-[#06132D] mb-6">Foundation & Infrastructure</h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto">Regardless of tier, all our engagements are built upon a relentless pursuit of clarity and perfection. Uncompromising design applied to financial modeling.</p>
        </div>
      </section>
    </div>
  );
}
