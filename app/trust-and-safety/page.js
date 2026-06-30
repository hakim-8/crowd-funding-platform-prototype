import Link from 'next/link';

export default function TrustAndSafety() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7] pb-24">
      {/* Header */}
      <section className="pt-32 pb-24 px-4 text-center bg-[#064e3b] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669] rounded-full filter blur-3xl opacity-40 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="text-sm font-semibold tracking-wide text-white uppercase">
              Security First
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Trust is Our Foundation
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            At Jade Fortune, we don't just facilitate funding; we engineer trust. Explore the rigorous systems we use to protect our community.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 w-full -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (2 spans) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Vetting Process */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-[#f2eadb]">
              <div className="w-16 h-16 bg-[#ecfdf5] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
                📋
              </div>
              <h2 className="text-2xl font-bold text-[#064e3b] mb-4">The Vetting Protocol</h2>
              <p className="text-[#064e3b]/80 mb-6 leading-relaxed">
                Every project on Jade Fortune is subject to an uncompromising review before it ever reaches our backers. We believe that preventative care is the best defense against fraud.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[#064e3b]/80">
                  <div className="w-6 h-6 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">1</div>
                  <span><strong>Identity Verification (KYC):</strong> All creators must pass strict government ID and biometric verification.</span>
                </li>
                <li className="flex items-start gap-3 text-[#064e3b]/80">
                  <div className="w-6 h-6 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">2</div>
                  <span><strong>Business Entity Checks:</strong> We verify corporate registration, tax status, and ultimate beneficial owners (UBOs).</span>
                </li>
                <li className="flex items-start gap-3 text-[#064e3b]/80">
                  <div className="w-6 h-6 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">3</div>
                  <span><strong>Independent Financial Audit:</strong> Third-party CPAs review financial projections and current asset health.</span>
                </li>
                <li className="flex items-start gap-3 text-[#064e3b]/80">
                  <div className="w-6 h-6 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">4</div>
                  <span><strong>Feasibility Analysis:</strong> Industry experts evaluate the technical and market feasibility of the proposed product.</span>
                </li>
              </ul>
            </div>

            {/* Fraud Prevention & Escrow */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-[#f2eadb]">
              <div className="w-16 h-16 bg-[#ecfdf5] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
                🔐
              </div>
              <h2 className="text-2xl font-bold text-[#064e3b] mb-4">Fraud Prevention & Escrow</h2>
              <p className="text-[#064e3b]/80 mb-6 leading-relaxed">
                Once a project is live, our technological infrastructure takes over to protect funds. We do not disburse capital blindly.
              </p>
              <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#059669]/20 mb-6">
                <h3 className="font-bold text-[#059669] mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Milestone-Based Smart Contracts
                </h3>
                <p className="text-[#064e3b]/70 text-sm">
                  Funds are held in secure escrow. They are only released in predefined tranches as the creator achieves verifiable milestones. If a project stalls, remaining funds are protected.
                </p>
              </div>
              <p className="text-[#064e3b]/80 leading-relaxed">
                Additionally, our ML-driven anomaly detection monitors all transactions for suspicious patterns, money laundering attempts, and coordinate bot activity, neutralizing threats in real-time.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-[#f2eadb]">
              <h2 className="text-2xl font-bold text-[#064e3b] mb-4">Dispute Resolution</h2>
              <p className="text-[#064e3b]/80 mb-4 leading-relaxed">
                While our vetting prevents most issues, disagreements can occur. We offer a structured arbitration process.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#064e3b]/80">
                <li>Direct mediation channel opened between creator and backers.</li>
                <li>Platform intervention if the creator fails to respond within 14 days.</li>
                <li>Vote by backers to pause further escrow disbursement if milestones are contested.</li>
              </ul>
            </div>

          </div>

          {/* Right Column (1 span) */}
          <div className="space-y-8">
            
            {/* Badges Explanation */}
            <div className="bg-[#064e3b] text-white p-8 rounded-3xl shadow-xl shadow-[#064e3b]/20">
              <h3 className="text-xl font-bold mb-6">Verification Badges</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <svg className="w-8 h-8 text-[#34d399]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#a7f3d0]">Identity Verified</h4>
                    <p className="text-sm text-white/70">The creator has passed stringent KYC checks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-200">Fully Audited</h4>
                    <p className="text-sm text-white/70">Project financials and plans have been verified by third-party CPAs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-200">Track Record</h4>
                    <p className="text-sm text-white/70">Creator has successfully delivered 3+ projects on Jade Fortune.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Link Box */}
            <div className="bg-[#ecfdf5] border border-[#34d399]/30 p-8 rounded-3xl text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#059669]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-[#064e3b] mb-2">Understand the Risks</h3>
              <p className="text-[#064e3b]/70 text-sm mb-6">
                All early-stage investments carry risk. We strongly advise reading our full risk disclosure before pledging.
              </p>
              <Link href="/risk-disclosure" className="inline-block w-full py-3 bg-white border border-[#059669]/20 text-[#059669] font-bold rounded-xl hover:bg-gray-50 transition-colors">
                Read Risk Disclosure
              </Link>
            </div>
            
            {/* Report Issue CTA */}
            <div className="bg-white border border-[#f2eadb] p-8 rounded-3xl text-center shadow-sm">
              <h3 className="font-bold text-[#064e3b] mb-2">See something suspicious?</h3>
              <p className="text-[#064e3b]/70 text-sm mb-4">Our community is our best defense.</p>
              <Link href="/contact" className="text-red-500 font-bold hover:underline">
                Report a project
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
