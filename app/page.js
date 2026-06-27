import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#fdfbf7] bg-opacity-90"></div>
          {/* Decorative blurs */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#ecfdf5] opacity-70 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#059669]/10 opacity-50 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/50 border border-[#059669]/10 backdrop-blur-sm">
                <span className="text-sm font-semibold tracking-wide text-[#064e3b] uppercase">
                  The Standard in Crowdfunding
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#064e3b] tracking-tight mb-8">
                Empower the Future with <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#064e3b]">
                  Jade Fortune
                </span>
              </h1>
              <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-xl text-[#064e3b]/80 mb-10 leading-relaxed">
                Discover and fund transformative projects. A secure platform connecting visionary creators, diligent auditors, and passionate investors.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                <Link 
                  href="/how-it-works" 
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-b from-[#059669] to-[#064e3b] border-b-[4px] border-[#033527] text-[#fdfbf7] rounded-full font-bold text-lg hover:brightness-110 active:translate-y-[2px] active:border-b-[2px] transition-all duration-100 shadow-lg hover:shadow-[#059669]/10 text-center"
                >
                  Learn How It Works
                </Link>
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-b from-white to-[#fcfaf5] text-[#064e3b] border border-[#059669]/20 border-b-[4px] border-b-[#e5dccb] rounded-full font-bold text-lg hover:bg-[#ecfdf5] active:translate-y-[2px] active:border-b-[2px] transition-all duration-100 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ecfdf5] to-transparent rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg"></div>
              <img 
                src="/hero-image.png" 
                alt="Jade Fortune Dashboard Concept" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border border-[#f2eadb] transform transition-transform hover:scale-[1.02] duration-500"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-[#fffcf8] relative border-t border-[#059669]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-4">Why Jade Fortune?</h2>
            <div className="w-24 h-1 bg-[#059669] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { title: "Rigorous Auditing", desc: "Every project undergoes a strict vetting process by certified auditors to ensure financial safety.", icon: "shield" },
              { title: "High-Yield Potential", desc: "Access early-stage opportunities with incredible growth potential, curated by experts.", icon: "trending-up" },
              { title: "Transparent Ecosystem", desc: "Our platform guarantees perfect clarity. Watch your investment grow with real-time tracking.", icon: "eye" }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-[#f2eadb] hover:shadow-xl hover:shadow-[#059669]/5 transition-all group">
                <div className="w-14 h-14 bg-[#ecfdf5] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-[#059669] rounded-sm opacity-80 rotate-45"></div>
                </div>
                <h3 className="text-xl font-bold text-[#064e3b] mb-3">{feature.title}</h3>
                <p className="text-[#064e3b]/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
