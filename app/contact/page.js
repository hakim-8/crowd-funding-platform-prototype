export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffcf8] pb-24">
      {/* Header */}
      <section className="bg-[#064e3b] py-20 px-4 text-center border-b-[8px] border-[#059669] relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#10b981] opacity-10 blur-3xl"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#fdfbf7] tracking-tight mb-6 relative z-10">
          Get In Touch
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-[#ecfdf5]/80 relative z-10">
          Have questions about auditing, investing, or submitting a project? Our team is here to help.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 w-full mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-[#064e3b] mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#064e3b]">Phone</h3>
                  <p className="text-[#064e3b]/70">+1 (555) 123-4567</p>
                  <p className="text-sm text-[#064e3b]/50 mt-1">Mon-Fri from 8am to 5pm.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#064e3b]">Email</h3>
                  <p className="text-[#064e3b]/70">support@jadefortune.com</p>
                  <p className="text-sm text-[#064e3b]/50 mt-1">We'll respond within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#064e3b]">Headquarters</h3>
                  <p className="text-[#064e3b]/70">100 Emerald Suite<br/>Financial District, NY 10004</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-[#ecfdf5] rounded-2xl border border-[#059669]/10">
              <h4 className="font-bold text-[#064e3b] mb-2">Are you an auditor?</h4>
              <p className="text-sm text-[#064e3b]/80 mb-4">We are always expanding our network of certified independent auditors.</p>
              <a href="#" className="text-[#059669] font-semibold hover:underline">Apply to be an auditor &rarr;</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-[#059669]/5 border border-[#f2eadb]">
            <h2 className="text-2xl font-bold text-[#064e3b] mb-6">Send us a message</h2>
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#064e3b] mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669] transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#064e3b] mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669] transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#064e3b] mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669] transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#064e3b] mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669] transition-all appearance-none cursor-pointer">
                  <option>General Inquiry</option>
                  <option>Investment Question</option>
                  <option>Project Submission</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#064e3b] mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669] transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-[#064e3b] hover:bg-[#059669] text-[#fdfbf7] font-bold text-lg py-4 px-6 rounded-xl transition-all shadow-lg shadow-[#064e3b]/20 mt-4"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
