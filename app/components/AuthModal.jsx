"use client";

import { useState, useEffect } from "react";

export default function AuthModal({ isOpen, onClose, initialMode = "login", userType = "investor" }) {
  const [mode, setMode] = useState(initialMode);
  
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#064e3b]/40 backdrop-blur-sm p-4">
      <div 
        className="bg-[#fdfbf7] border border-[#064e3b]/20 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
      >
        <div className="relative h-24 bg-diamond-grid-green flex items-center justify-center overflow-hidden">
          <div className="absolute top-4 right-4 z-20">
            <button 
              onClick={onClose}
              className="text-[#fdfbf7]/70 hover:text-[#fdfbf7] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <h2 className="text-2xl font-bold text-[#fdfbf7] capitalize tracking-wide relative z-10">
            {mode === 'login' ? 'Welcome Back' : 'Join Jade Fortune'}
          </h2>
        </div>

        <div className="p-8">
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 bg-[#ecfdf5] text-[#064e3b] text-sm font-semibold rounded-full capitalize border border-[#10b981]/20">
              {userType} Portal
            </span>
            <p className="text-[#064e3b]/70 text-sm mt-3">
              {mode === 'login' 
                ? 'Please enter your credentials to continue.' 
                : 'Create an account to start your journey.'}
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-[#064e3b] mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669]"
                  placeholder="John Doe"
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-[#064e3b] mb-1">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669]"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#064e3b] mb-1">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-lg border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669]"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="button"
              onClick={onClose}
              className="w-full bg-gradient-to-b from-[#059669] to-[#064e3b] border-b-[4px] border-[#033527] text-[#fdfbf7] font-semibold py-3 px-4 rounded-lg hover:brightness-110 active:translate-y-[2px] active:border-b-[2px] transition-all duration-100 shadow-lg shadow-[#059669]/20 mt-4"
            >
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-[#064e3b]/70">
            {mode === 'login' ? (
              <p>Don't have an account? <button onClick={() => setMode('register')} className="text-[#059669] font-semibold hover:underline">Register here</button></p>
            ) : (
              <p>Already have an account? <button onClick={() => setMode('login')} className="text-[#059669] font-semibold hover:underline">Log in</button></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
