export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7] pb-24">
      {/* Header */}
      <section className="bg-[#064e3b] py-20 px-4 text-center border-b-[8px] border-[#059669]">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#fdfbf7] tracking-tight mb-6">
          How Crowdfunding Works
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-[#ecfdf5]/80">
          Understanding the lifecycle of a secure, audited, and transparent investment on Jade Fortune.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 w-full mt-16">
        <div className="space-y-16">
          
          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row gap-8 items-center bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-[#f2eadb]">
            <div className="absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#059669] rounded-full flex items-center justify-center text-[#fdfbf7] text-2xl font-bold shadow-xl border-4 border-[#fdfbf7] hidden md:flex">
              1
            </div>
            <div className="flex-1">
              <span className="text-[#059669] font-bold tracking-wider uppercase text-sm mb-2 block md:hidden">Step 1</span>
              <h2 className="text-3xl font-bold text-[#064e3b] mb-4">Project Creation & Vetting</h2>
              <p className="text-[#064e3b]/80 leading-relaxed text-lg">
                Visionary creators submit their projects to Jade Fortune. Before any project is listed, it must undergo a comprehensive vetting process by our certified independent auditors. The auditors evaluate financial viability, team background, and feasibility.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-[#fffcf8] rounded-full border-[12px] border-[#ecfdf5] flex items-center justify-center">
                <div className="w-20 h-20 bg-[#059669]/20 flex items-center justify-center rounded-2xl rotate-12">
                   <div className="w-12 h-12 bg-[#059669] rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-[#f2eadb]">
            <div className="absolute -right-6 md:-right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#059669] rounded-full flex items-center justify-center text-[#fdfbf7] text-2xl font-bold shadow-xl border-4 border-[#fdfbf7] hidden md:flex">
              2
            </div>
            <div className="flex-1">
              <span className="text-[#059669] font-bold tracking-wider uppercase text-sm mb-2 block md:hidden">Step 2</span>
              <h2 className="text-3xl font-bold text-[#064e3b] mb-4">Funding & Investment</h2>
              <p className="text-[#064e3b]/80 leading-relaxed text-lg">
                Once a project passes the audit, it becomes visible to verified investors. Investors can review the exact auditor notes, financial projections, and team structure before deciding to allocate capital. Funds are securely held in escrow until funding goals are met.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-[#fffcf8] rounded-full border-[12px] border-[#ecfdf5] flex items-center justify-center">
                <div className="w-20 h-20 bg-[#059669]/20 flex items-center justify-center rounded-full">
                  <div className="w-12 h-12 bg-[#059669] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row gap-8 items-center bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-[#f2eadb]">
            <div className="absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#059669] rounded-full flex items-center justify-center text-[#fdfbf7] text-2xl font-bold shadow-xl border-4 border-[#fdfbf7] hidden md:flex">
              3
            </div>
            <div className="flex-1">
              <span className="text-[#059669] font-bold tracking-wider uppercase text-sm mb-2 block md:hidden">Step 3</span>
              <h2 className="text-3xl font-bold text-[#064e3b] mb-4">Execution & Returns</h2>
              <p className="text-[#064e3b]/80 leading-relaxed text-lg">
                Upon successful funding, funds are released in phases tied to verifiable project milestones. Investors receive regular transparent updates. When the project generates returns, smart contracts route the profits directly back to the investors proportionately.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-[#fffcf8] rounded-full border-[12px] border-[#ecfdf5] flex items-center justify-center">
                <div className="w-20 h-20 bg-[#059669]/20 flex items-center justify-center rounded-2xl rotate-45">
                   <div className="w-10 h-10 bg-[#059669] rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
