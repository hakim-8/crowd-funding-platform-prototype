"use client";
import { useState } from "react";
import Link from "next/link";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("backers");

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7] pb-24">
      {/* Header */}
      <section className="bg-[#064e3b] py-20 px-4 text-center border-b-[8px] border-[#059669] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-[#059669]/20 to-transparent pointer-events-none"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#fdfbf7] tracking-tight mb-6 relative z-10">
          How Crowdfunding Works
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-[#ecfdf5]/80 relative z-10">
          Understanding the lifecycle of a secure, audited, and transparent
          investment on Jade Fortune.
        </p>
      </section>

      {/* Tabs */}
      <section className="max-w-xl mx-auto px-4 w-full -mt-8 relative z-20">
        <div className="bg-white p-2 rounded-full shadow-lg border border-[#f2eadb] flex">
          <button
            onClick={() => setActiveTab("backers")}
            className={`flex-1 py-3 px-6 rounded-full font-bold text-lg transition-all duration-300 ${
              activeTab === "backers"
                ? "bg-[#059669] text-white shadow-md"
                : "text-[#064e3b]/70 hover:bg-[#ecfdf5] hover:text-[#064e3b]"
            }`}
          >
            For Backers
          </button>
          <button
            onClick={() => setActiveTab("creators")}
            className={`flex-1 py-3 px-6 rounded-full font-bold text-lg transition-all duration-300 ${
              activeTab === "creators"
                ? "bg-[#064e3b] text-white shadow-md"
                : "text-[#064e3b]/70 hover:bg-[#ecfdf5] hover:text-[#064e3b]"
            }`}
          >
            For Creators
          </button>
        </div>
      </section>

      {/* Process Content */}
      <section className="max-w-7xl mx-auto px-4 w-full mt-16">
        <div className="grid grid-cols-1 gap-8">
          {/* Step 1 */}
          <div className="relative flex flex-col gap-6 items-center bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-[#f2eadb] transition-all duration-500 text-center">
            <div
              className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-[#fdfbf7] text-xl font-bold shadow-xl border-4 border-[#fdfbf7] transition-colors duration-300 ${activeTab === "backers" ? "bg-[#059669]" : "bg-[#064e3b]"}`}
            >
              1
            </div>

            <div className="w-full flex justify-center mb-4 mt-2">
              <div className="w-40 h-40 bg-[#fffcf8] rounded-full border-[8px] border-[#ecfdf5] flex items-center justify-center">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl rotate-12 transition-colors duration-300 ${activeTab === "backers" ? "bg-[#059669]/20" : "bg-[#064e3b]/20"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg transition-colors duration-300 ${activeTab === "backers" ? "bg-[#059669]" : "bg-[#064e3b]"}`}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <span
                className={`font-bold tracking-wider uppercase text-sm mb-2 block ${activeTab === "backers" ? "text-[#059669]" : "text-[#064e3b]"}`}
              >
                Step 1
              </span>
              <h2 className="text-2xl font-bold text-[#064e3b] mb-4">
                {activeTab === "backers"
                  ? "Discover & Evaluate"
                  : "Project Creation & Vetting"}
              </h2>
              <p className="text-[#064e3b]/80 leading-relaxed text-lg">
                {activeTab === "backers"
                  ? "Browse through a curated selection of visionary projects. Every project on Jade Fortune has passed a rigorous audit, meaning you can review financial projections, auditor notes, and team backgrounds before making a commitment."
                  : "Submit your project to Jade Fortune. Before any project is listed, it must undergo a comprehensive vetting process by our certified independent auditors who evaluate financial viability, team background, and feasibility."}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col gap-6 items-center bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-[#f2eadb] transition-all duration-500 text-center">
            <div
              className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-[#fdfbf7] text-xl font-bold shadow-xl border-4 border-[#fdfbf7] transition-colors duration-300 ${activeTab === "backers" ? "bg-[#059669]" : "bg-[#064e3b]"}`}
            >
              2
            </div>

            <div className="w-full flex justify-center mb-4 mt-2">
              <div className="w-40 h-40 bg-[#fffcf8] rounded-full border-[8px] border-[#ecfdf5] flex items-center justify-center">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full transition-colors duration-300 ${activeTab === "backers" ? "bg-[#059669]/20" : "bg-[#064e3b]/20"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full transition-colors duration-300 ${activeTab === "backers" ? "bg-[#059669]" : "bg-[#064e3b]"}`}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <span
                className={`font-bold tracking-wider uppercase text-sm mb-2 block ${activeTab === "backers" ? "text-[#059669]" : "text-[#064e3b]"}`}
              >
                Step 2
              </span>
              <h2 className="text-2xl font-bold text-[#064e3b] mb-4">
                {activeTab === "backers"
                  ? "Secure Investment"
                  : "Funding & Community"}
              </h2>
              <p className="text-[#064e3b]/80 leading-relaxed text-lg">
                {activeTab === "backers"
                  ? "Pledge funds to the projects you believe in. Your funds are held securely in escrow and are only released if the project meets its funding goals. You choose whether you are backing for a reward or an equity stake."
                  : "Once audited, your project becomes visible to verified investors. Engage with backers, answer questions, and build momentum. Funds are securely held in escrow until your funding goals are met."}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col gap-6 items-center bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-[#f2eadb] transition-all duration-500 text-center">
            <div
              className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-[#fdfbf7] text-xl font-bold shadow-xl border-4 border-[#fdfbf7] transition-colors duration-300 ${activeTab === "backers" ? "bg-[#059669]" : "bg-[#064e3b]"}`}
            >
              3
            </div>

            <div className="w-full flex justify-center mb-4 mt-2">
              <div className="w-40 h-40 bg-[#fffcf8] rounded-full border-[8px] border-[#ecfdf5] flex items-center justify-center">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl rotate-45 transition-colors duration-300 ${activeTab === "backers" ? "bg-[#059669]/20" : "bg-[#064e3b]/20"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-sm transition-colors duration-300 ${activeTab === "backers" ? "bg-[#059669]" : "bg-[#064e3b]"}`}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <span
                className={`font-bold tracking-wider uppercase text-sm mb-2 block ${activeTab === "backers" ? "text-[#059669]" : "text-[#064e3b]"}`}
              >
                Step 3
              </span>
              <h2 className="text-2xl font-bold text-[#064e3b] mb-4">
                {activeTab === "backers"
                  ? "Execution & Returns"
                  : "Execution & Fulfillment"}
              </h2>
              <p className="text-[#064e3b]/80 leading-relaxed text-lg">
                {activeTab === "backers"
                  ? "Receive transparent, regular updates as the project executes its roadmap. When the project generates returns or is ready to ship, smart contracts route profits or rewards directly to you."
                  : "Upon successful funding, funds are released in phases tied to verifiable project milestones. Deliver your promises, update your backers, and turn your vision into reality."}
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-col gap-6 items-center bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-[#f2eadb] transition-all duration-500 text-center">
            <div
              className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-[#fdfbf7] text-xl font-bold shadow-xl border-4 border-[#fdfbf7] transition-colors duration-300 ${activeTab === "backers" ? "bg-[#059669]" : "bg-[#064e3b]"}`}
            >
              4
            </div>

            <div className="w-full flex justify-center mb-4 mt-2">
              <div className="w-40 h-40 bg-[#fffcf8] rounded-full border-[8px] border-[#ecfdf5] flex items-center justify-center">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl rotate-45 transition-colors duration-300 ${activeTab === "backers" ? "bg-[#059669]/20" : "bg-[#064e3b]/20"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full transition-colors duration-300 ${activeTab === "backers" ? "bg-[#059669]" : "bg-[#064e3b]"}`}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <span
                className={`font-bold tracking-wider uppercase text-sm mb-2 block ${activeTab === "backers" ? "text-[#059669]" : "text-[#064e3b]"}`}
              >
                Step 4
              </span>
              <h2 className="text-2xl font-bold text-[#064e3b] mb-4">
                {activeTab === "backers" ? "Track & Grow" : "Scale & Thrive"}
              </h2>
              <p className="text-[#064e3b]/80 leading-relaxed text-lg">
                {activeTab === "backers"
                  ? "Build your portfolio over time. As projects succeed, track your dividends and reinvest into new, promising ventures within the ecosystem."
                  : "Leverage the momentum from your successful raise to scale your operations. Stay connected with your backers who become your strongest advocates."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Models & Fees */}
      <section className="max-w-5xl mx-auto px-4 w-full mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-4">
            Funding Models & Fees
          </h2>
          <div className="w-24 h-1 bg-[#059669] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* All-or-nothing */}
          <div className="bg-white p-8 rounded-3xl border border-[#f2eadb] shadow-sm">
            <h3 className="text-xl font-bold text-[#064e3b] mb-3">
              All-or-Nothing vs. Flexible
            </h3>
            <p className="text-[#064e3b]/70 mb-4">
              Creators can choose between All-or-Nothing (funds are only
              collected if the goal is met) or Flexible funding (creators keep
              what they raise).
            </p>
          </div>
          {/* Reward vs Equity */}
          <div className="bg-white p-8 rounded-3xl border border-[#f2eadb] shadow-sm">
            <h3 className="text-xl font-bold text-[#064e3b] mb-3">
              Reward vs. Equity
            </h3>
            <p className="text-[#064e3b]/70 mb-4">
              Backers can pledge in exchange for a tangible reward (like a
              product), or for an equity stake in the venture, depending on the
              project's structure.
            </p>
          </div>
        </div>

        <div className="bg-[#fdfbf7] p-8 md:p-12 rounded-3xl border border-[#059669]/20 text-center">
          <h3 className="text-2xl font-bold text-[#064e3b] mb-4">
            Transparent Pricing
          </h3>
          <p className="text-[#064e3b]/70 mb-8 max-w-2xl mx-auto">
            We believe in complete transparency. Our fees are competitive and
            straightforward. Backers never pay a fee to pledge. Creators pay a
            small platform fee only if they succeed.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#059669] text-white rounded-full font-bold hover:bg-[#047857] transition-colors"
          >
            View Full Pricing
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="max-w-5xl mx-auto px-4 w-full mt-24">
        <div className="bg-[#064e3b] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#059669] rounded-full filter blur-3xl opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>

          <h2 className="text-3xl font-bold mb-6 relative z-10">
            Still have questions?
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto relative z-10">
            Check out our detailed FAQ section or reach out to our support team.
            We're here to help you navigate the future of funding.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link
              href="/faq"
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              Read the FAQ
            </Link>
            <Link
              href="/register"
              className="px-8 py-4 bg-white text-[#064e3b] rounded-full font-bold hover:bg-gray-50 shadow-lg"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
