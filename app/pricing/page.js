import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7] pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#064e3b] tracking-tight mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-[#064e3b]/80 max-w-2xl mx-auto leading-relaxed">
          We only succeed when you succeed. No hidden fees, no complicated tiers.
        </p>
      </section>

      {/* Main Fee Section */}
      <section className="max-w-4xl mx-auto px-4 w-full mt-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-[#059669]/5 border border-[#f2eadb] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ecfdf5] rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#064e3b] mb-2">For Creators</h2>
              <p className="text-[#064e3b]/70 mb-8">Launch your project with zero upfront costs.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#059669]/10 text-[#059669] flex items-center justify-center font-bold text-xl shrink-0">
                    5%
                  </div>
                  <div>
                    <h3 className="font-bold text-[#064e3b]">Platform Fee</h3>
                    <p className="text-sm text-[#064e3b]/70">Applied only to successfully funded projects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 text-gray-600 flex items-center justify-center font-bold shrink-0">
                    ~3%
                  </div>
                  <div>
                    <h3 className="font-bold text-[#064e3b]">Payment Processing</h3>
                    <p className="text-sm text-[#064e3b]/70">Standard credit card processing fees ($0.30 per transaction).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold shrink-0">
                    Varies
                  </div>
                  <div>
                    <h3 className="font-bold text-[#064e3b]">Audit Fee (Optional)</h3>
                    <p className="text-sm text-[#064e3b]/70">Paid to independent auditors for the verification badge.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12">
              <h2 className="text-2xl font-bold text-[#064e3b] mb-2">For Backers</h2>
              <p className="text-[#064e3b]/70 mb-8">Invest without worrying about overhead.</p>
              
              <div className="bg-[#ecfdf5] p-6 rounded-2xl border border-[#34d399]/30 mb-8">
                <div className="text-4xl font-extrabold text-[#059669] mb-2">0%</div>
                <h3 className="font-bold text-[#064e3b] mb-1">Platform Fee</h3>
                <p className="text-sm text-[#064e3b]/70">Backers never pay a fee to pledge on Jade Fortune.</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[#064e3b]/80 text-sm">
                  <svg className="w-5 h-5 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Free account creation
                </li>
                <li className="flex items-center gap-2 text-[#064e3b]/80 text-sm">
                  <svg className="w-5 h-5 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Access to all audited projects
                </li>
                <li className="flex items-center gap-2 text-[#064e3b]/80 text-sm">
                  <svg className="w-5 h-5 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  No hidden transaction fees
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison / Tiers */}
      <section className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 w-full mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-4">Creator Launch Plans</h2>
          <div className="w-24 h-1 bg-[#059669] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {/* Bronze */}
          <div className="bg-white p-6 xl:p-8 rounded-3xl border border-[#f2eadb] shadow-sm flex flex-col">
            <h3 className="text-xl font-bold text-[#064e3b] mb-2">Bronze</h3>
            <p className="text-[#064e3b]/70 text-sm mb-6">Perfect for small projects and initial raises.</p>
            <div className="text-4xl font-extrabold text-[#064e3b] mb-6">5% <span className="text-lg font-normal text-[#064e3b]/50">fee</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-2 text-[#064e3b]/80 text-sm">
                <svg className="w-5 h-5 text-[#059669] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Basic project listing
              </li>
              <li className="flex items-start gap-2 text-[#064e3b]/80 text-sm">
                <svg className="w-5 h-5 text-[#059669] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Standard support
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                Independent Audit Badge
              </li>
            </ul>
            <Link href="/register" className="block w-full py-3 px-4 bg-white border-2 border-[#059669] text-[#059669] font-bold text-center rounded-full hover:bg-[#ecfdf5] transition-colors">
              Get Started
            </Link>
          </div>

          {/* Silver */}
          <div className="bg-white p-6 xl:p-8 rounded-3xl border border-[#f2eadb] shadow-sm flex flex-col">
            <h3 className="text-xl font-bold text-[#064e3b] mb-2">Silver</h3>
            <p className="text-[#064e3b]/70 text-sm mb-6">For growing creators building an audience.</p>
            <div className="text-4xl font-extrabold text-[#064e3b] mb-6">4.5% <span className="text-lg font-normal text-[#064e3b]/50">fee</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-2 text-[#064e3b]/80 text-sm">
                <svg className="w-5 h-5 text-[#059669] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Enhanced project listing
              </li>
              <li className="flex items-start gap-2 text-[#064e3b]/80 text-sm">
                <svg className="w-5 h-5 text-[#059669] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Priority support
              </li>
              <li className="flex items-start gap-2 text-[#064e3b]/80 text-sm">
                <svg className="w-5 h-5 text-[#059669] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Community features
              </li>
            </ul>
            <Link href="/register" className="block w-full py-3 px-4 bg-white border-2 border-[#059669] text-[#059669] font-bold text-center rounded-full hover:bg-[#ecfdf5] transition-colors">
              Get Started
            </Link>
          </div>

          {/* Gold */}
          <div className="bg-[#064e3b] p-6 xl:p-8 rounded-3xl border border-[#064e3b] shadow-xl shadow-[#064e3b]/20 flex flex-col transform md:-translate-y-4 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-[#34d399] text-[#064e3b] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">Recommended</div>
            <h3 className="text-xl font-bold text-white mb-2">Gold</h3>
            <p className="text-white/70 text-sm mb-6">For serious creators wanting maximum trust.</p>
            <div className="text-4xl font-extrabold text-white mb-6">4% <span className="text-lg font-normal text-white/50">fee + Audit</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-2 text-white/90 text-sm">
                <svg className="w-5 h-5 text-[#34d399] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Everything in Silver
              </li>
              <li className="flex items-start gap-2 text-white/90 text-sm">
                <svg className="w-5 h-5 text-[#34d399] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Full Independent Audit
              </li>
              <li className="flex items-start gap-2 text-white/90 text-sm">
                <svg className="w-5 h-5 text-[#34d399] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Verified Trust Badge
              </li>
              <li className="flex items-start gap-2 text-white/90 text-sm">
                <svg className="w-5 h-5 text-[#34d399] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Priority Support
              </li>
            </ul>
            <Link href="/register" className="block w-full py-3 px-4 bg-[#059669] text-white font-bold text-center rounded-full hover:bg-[#047857] transition-colors border-2 border-[#059669]">
              Start Gold Project
            </Link>
          </div>

          {/* Platinum */}
          <div className="bg-white p-6 xl:p-8 rounded-3xl border border-[#f2eadb] shadow-sm flex flex-col">
            <h3 className="text-xl font-bold text-[#064e3b] mb-2">Platinum</h3>
            <p className="text-[#064e3b]/70 text-sm mb-6">For large-scale equity raises and syndicates.</p>
            <div className="text-4xl font-extrabold text-[#064e3b] mb-6">Custom</div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-2 text-[#064e3b]/80 text-sm">
                <svg className="w-5 h-5 text-[#059669] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Dedicated Account Manager
              </li>
              <li className="flex items-start gap-2 text-[#064e3b]/80 text-sm">
                <svg className="w-5 h-5 text-[#059669] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Advanced Smart Contract
              </li>
              <li className="flex items-start gap-2 text-[#064e3b]/80 text-sm">
                <svg className="w-5 h-5 text-[#059669] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Legal Structuring Assistance
              </li>
            </ul>
            <Link href="/contact" className="block w-full py-3 px-4 bg-white border-2 border-gray-200 text-gray-600 font-bold text-center rounded-full hover:bg-gray-50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="mt-24 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#064e3b] mb-6">Ready to launch your vision?</h2>
        <Link href="/how-it-works" className="inline-block px-8 py-4 bg-gradient-to-b from-[#059669] to-[#064e3b] text-white rounded-full font-bold text-lg hover:brightness-110 shadow-lg hover:shadow-[#059669]/20 transition-all">
          Start a Project
        </Link>
      </section>

    </div>
  );
}
