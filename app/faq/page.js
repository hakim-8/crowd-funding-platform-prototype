"use client";
import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    category: "General",
    questions: [
      { q: "What is Jade Fortune?", a: "Jade Fortune is a premium crowdfunding platform that bridges the gap between visionary creators and verified investors through a rigorous auditing process." },
      { q: "How is Jade Fortune different from other platforms?", a: "Unlike traditional platforms, every project on Jade Fortune undergoes an independent audit before launching. This ensures a higher standard of financial transparency and viability." },
    ]
  },
  {
    category: "For Backers",
    questions: [
      { q: "Is there a fee to invest?", a: "No, backers do not pay any platform fees to pledge to a project." },
      { q: "What happens if a project doesn't reach its funding goal?", a: "If a project uses the All-or-Nothing model and fails to reach its goal, your pledge will be fully refunded or never charged, depending on the payment method used." },
      { q: "How do I know my investment is safe?", a: "While all investments carry risk, our mandatory auditing process, milestone-based fund release, and smart contract integration significantly mitigate the risk of fraud or mismanagement." },
    ]
  },
  {
    category: "For Creators",
    questions: [
      { q: "How much does it cost to launch a project?", a: "It is free to launch a project. We only take a 5% platform fee if your project successfully reaches its funding goal." },
      { q: "How long does the auditing process take?", a: "The auditing process typically takes 1-3 weeks depending on the complexity of your project and the tier you select." },
    ]
  },
  {
    category: "Payments",
    questions: [
      { q: "What payment methods are accepted?", a: "We accept all major credit cards, bank transfers (for institutional investors), and select cryptocurrencies via secure payment gateways." },
      { q: "When are my funds collected?", a: "Funds are typically authorized when you pledge, but only fully captured when the campaign successfully ends." },
    ]
  },
  {
    category: "Account & Security",
    questions: [
      { q: "How is my personal data protected?", a: "We employ bank-grade encryption and comply with GDPR and CCPA standards to ensure your data is secure and private." },
      { q: "How do verification badges work?", a: "Verification badges are awarded after successful KYC (Know Your Customer) checks and project audits, signaling maximum trust to the community." },
    ]
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const activeFaqs = faqs.find(f => f.category === activeCategory)?.questions || [];

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7] pb-24">
      {/* Header & Search */}
      <section className="bg-[#064e3b] pt-32 pb-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-50 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            How can we help?
          </h1>
          
          <div className="relative max-w-2xl mx-auto mt-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full pl-12 pr-4 py-4 rounded-full text-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-[#34d399]/50 border-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 w-full -mt-8 relative z-20 flex flex-col gap-8">
        
        {/* Categories Bar */}
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-lg border border-[#f2eadb] p-4 lg:p-2 sticky top-24 z-30">
            <h3 className="font-bold text-[#064e3b] mb-4 lg:mb-0 px-4 lg:px-2 pt-2 lg:pt-0 uppercase text-sm tracking-wider lg:hidden">Categories</h3>
            <ul className="flex flex-col lg:flex-row gap-2 w-full overflow-x-auto no-scrollbar">
              {faqs.map((categoryObj, i) => (
                <li key={i} className="flex-shrink-0">
                  <button
                    onClick={() => { setActiveCategory(categoryObj.category); setOpenIndex(0); }}
                    className={`w-full lg:w-auto text-left lg:text-center px-6 py-3 rounded-xl font-medium transition-colors whitespace-nowrap ${
                      activeCategory === categoryObj.category 
                        ? 'bg-[#ecfdf5] text-[#059669]' 
                        : 'text-[#064e3b]/70 hover:bg-gray-50'
                    }`}
                  >
                    {categoryObj.category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Accordion List */}
        <div className="flex-1 w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg border border-[#f2eadb] p-6 md:p-10 min-h-[400px]">
            <h2 className="text-2xl font-bold text-[#064e3b] mb-8 pb-4 border-b border-gray-100">{activeCategory}</h2>
            
            <div className="space-y-4">
              {activeFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300">
                    <button 
                      className={`w-full flex justify-between items-center text-left p-5 transition-colors ${isOpen ? 'bg-[#ecfdf5]/50' : 'hover:bg-gray-50'}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span className="font-bold text-[#064e3b] pr-4">{faq.q}</span>
                      <svg className={`w-5 h-5 text-[#059669] transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`px-5 text-[#064e3b]/70 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="pt-2">{faq.a}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 w-full mt-24 text-center">
        <div className="bg-[#ecfdf5] rounded-3xl p-10 border border-[#34d399]/30">
          <h2 className="text-2xl font-bold text-[#064e3b] mb-4">Still have questions?</h2>
          <p className="text-[#064e3b]/70 mb-8 max-w-lg mx-auto">If you couldn't find the answer you were looking for, our support team is ready to assist you.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-[#059669] text-white rounded-full font-bold hover:bg-[#047857] transition-colors shadow-lg shadow-[#059669]/20">
            Contact Support
          </Link>
        </div>
      </section>

    </div>
  );
}
