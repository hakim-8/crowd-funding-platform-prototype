import Link from 'next/link';
import Image from 'next/image'; // Assuming they might use it later, but using standard img tags for now

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7] pb-24">
      {/* Header */}
      <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ecfdf5]/50 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#064e3b] tracking-tight mb-6">
            Building the Future of <br/> Trust in Crowdfunding
          </h1>
          <p className="text-xl text-[#064e3b]/80 max-w-2xl mx-auto leading-relaxed">
            We started Jade Fortune to bridge the gap between visionary ideas and the security that investors deserve.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="max-w-5xl mx-auto px-4 w-full mt-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#059669]/10 transform translate-x-4 translate-y-4 rounded-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Team collaborating" 
              className="relative z-10 rounded-3xl shadow-lg border border-[#f2eadb]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#064e3b] mb-6">Our Mission</h2>
            <p className="text-[#064e3b]/80 text-lg leading-relaxed mb-8">
              To democratize access to high-potential early-stage projects while establishing a gold standard of transparency, rigorous auditing, and accountability in the crowdfunding ecosystem.
            </p>
            <h2 className="text-3xl font-bold text-[#064e3b] mb-6">Our Vision</h2>
            <p className="text-[#064e3b]/80 text-lg leading-relaxed">
              A world where anyone can confidently fund the next breakthrough innovation, knowing their investment is protected by verifiable data and expert oversight.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#064e3b] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669] rounded-full filter blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#059669] rounded-full filter blur-3xl opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Principles</h2>
            <div className="w-24 h-1 bg-[#34d399] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🔍", title: "Radical Transparency", desc: "No hidden fees, no opaque algorithms. Every decision, audit, and milestone is documented and accessible." },
              { icon: "🛡️", title: "Uncompromising Security", desc: "We prioritize the safety of our users' funds above all else, employing rigorous smart contracts and certified audits." },
              { icon: "🤝", title: "Mutual Growth", desc: "We believe in symbiotic success. When creators succeed, backers succeed. Our platform is built to align incentives." }
            ].map((value, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/80">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Story */}
      <section className="max-w-4xl mx-auto px-4 w-full py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-[#059669] mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#059669]/30 before:to-transparent">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#059669] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-2xl shadow-sm border border-[#f2eadb]">
              <div className="text-[#059669] font-bold mb-1">2024</div>
              <h3 className="font-bold text-[#064e3b] text-lg mb-2">The Catalyst</h3>
              <p className="text-[#064e3b]/70">After witnessing billions lost to unverified projects in the digital space, our founders began architecting a trust-first platform.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#059669] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-2xl shadow-sm border border-[#f2eadb]">
              <div className="text-[#059669] font-bold mb-1">2025</div>
              <h3 className="font-bold text-[#064e3b] text-lg mb-2">Platform Beta</h3>
              <p className="text-[#064e3b]/70">Launched the first iteration of Jade Fortune to a closed group of 1,000 verified investors and 50 audited projects.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#059669] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[#059669] text-white rounded-2xl shadow-md border border-[#047857]">
              <div className="text-[#a7f3d0] font-bold mb-1">Today</div>
              <h3 className="font-bold text-white text-lg mb-2">Global Expansion</h3>
              <p className="text-white/90">Scaling the platform globally, introducing new auditing tiers, and redefining the standards of crowdfunding.</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24 border-t border-[#059669]/10">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-4">Meet the Leadership</h2>
            <div className="w-24 h-1 bg-[#059669] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: "Elena Rostova", role: "Chief Executive Officer" },
              { name: "Marcus Chen", role: "Chief Technical Officer" },
              { name: "Sarah Jenkins", role: "Head of Auditing" },
              { name: "David Alaba", role: "VP of Product" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-4 border-[#ecfdf5] group-hover:border-[#059669] transition-colors duration-300 bg-[#fdfbf7] flex items-center justify-center">
                  <svg className="w-1/2 h-1/2 text-[#059669]/30 group-hover:text-[#059669] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#064e3b] mb-1">{member.name}</h3>
                <p className="text-sm md:text-base text-[#059669] font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
