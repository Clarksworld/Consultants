import meetingImg from '../assets/meeting.png';

export default function About() {
  return (
    <div className="bg-[var(--bg-color)] min-h-screen">
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-[#c2a674] font-bold text-xs uppercase tracking-[0.15em] mb-4 block">Firm Profile</span>
          <h1 className="text-4xl md:text-6xl font-serif text-[#06132D] leading-[1.2] mb-12">
            Architecting clarity in a complex world.
          </h1>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-[#06132D]/5"></div>
      </section>

      <section className="border-t border-[#06132D]/10 bg-[var(--bg-color)] py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#06132D]/10">
            <div>
              <div className="text-4xl font-serif text-[#06132D] mb-2">150+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Global Clients</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-[#06132D] mb-2">$4B</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Assets Advised</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-[#06132D] mb-2">24</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-[#06132D] mb-2">99%</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
            <div>
                <span className="text-[#c2a674] font-bold text-xs uppercase tracking-widest">Leadership</span>
                <h2 className="font-serif text-4xl text-[#06132D] my-6">Julian Vane</h2>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-8">Principal Architect</div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With over two decades spent synthesizing complex market structures into streamlined operations, Julian founded The Editorial Architect to bridge the gap between rigorous financial modeling and inspired business design.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  His curatorial approach strips away unessential noise, allowing enterprise leadership to operate with absolute clarity and uncompromising ambition.
                </p>
            </div>
            <div className="aspect-[3/4] relative">
              <img src={meetingImg} alt="Julian Vane" className="w-full h-full object-cover grayscale opacity-90 sepia-[.2]" />
               <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#c2a674] translate-x-4 -translate-y-4"></div>
            </div>
        </div>
      </section>

      <section className="section-padding bg-[#06132D] text-white">
        <div className="container text-center max-w-4xl mx-auto">
           <h2 className="font-serif text-4xl mb-16">Pillars of Excellence</h2>
           <div className="grid md:grid-cols-3 gap-12 text-left">
              <div>
                 <div className="text-[#c2a674] text-xl mb-4 font-serif">01. Synthesis</div>
                 <p className="text-gray-400 text-sm">We distil complexity down to its most elegant, functional essence.</p>
              </div>
              <div>
                 <div className="text-[#c2a674] text-xl mb-4 font-serif">02. Integrity</div>
                 <p className="text-gray-400 text-sm">Structural truth in reporting, advising, and corporate action.</p>
              </div>
              <div>
                 <div className="text-[#c2a674] text-xl mb-4 font-serif">03. Foresight</div>
                 <p className="text-gray-400 text-sm">Anticipating regulatory and market shifts before they require reaction.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
