import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffcf8] pb-24">
      {/* Header */}
      <section className="bg-[#064e3b] py-20 px-4 text-center border-b-[8px] border-[#059669] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#10b981] opacity-20 blur-3xl"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#fdfbf7] tracking-tight mb-6 relative z-10">
          Get In Touch
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-[#ecfdf5]/80 relative z-10">
          Have questions about auditing, investing, or submitting a project? Our team is here to help.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 w-full mt-16">
        
        {/* FAQ Link Banner */}
        <div className="bg-[#ecfdf5] border border-[#34d399]/30 rounded-2xl p-6 text-center mb-12 shadow-sm">
          <p className="text-[#064e3b] font-medium">
            Looking for quick answers? <Link href="/faq" className="font-bold text-[#059669] hover:underline ml-2">Check our comprehensive FAQ section &rarr;</Link>
          </p>
        </div>

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
                  <p className="text-sm text-[#064e3b]/50 mt-1">Mon-Fri from 8am to 5pm (EST).</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#064e3b]">Email</h3>
                  <p className="text-[#064e3b]/70">support@jadefortune.com</p>
                  <p className="text-sm text-[#064e3b]/50 mt-1">We respond within 24 hours on business days.</p>
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
            
            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-[#059669]/10">
              <h3 className="font-semibold text-lg text-[#064e3b] mb-4">Connect with us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#f2eadb] flex items-center justify-center text-[#059669] hover:bg-[#059669] hover:text-white transition-colors shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#f2eadb] flex items-center justify-center text-[#059669] hover:bg-[#059669] hover:text-white transition-colors shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#f2eadb] flex items-center justify-center text-[#059669] hover:bg-[#059669] hover:text-white transition-colors shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#ecfdf5] rounded-2xl border border-[#059669]/10">
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
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669] transition-all appearance-none cursor-pointer">
                    <option value="" disabled defaultValue>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Creator Support</option>
                    <option>Backer Support</option>
                    <option>Press Inquiry</option>
                    <option>Partnerships</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#064e3b]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
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
