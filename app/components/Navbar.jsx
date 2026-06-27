"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [authModal, setAuthModal] = useState({
    isOpen: false,
    mode: "login",
    userType: "investor",
  });
  const navRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openAuth = (mode, userType) => {
    setAuthModal({ isOpen: true, mode, userType });
    setActiveDropdown(null);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .nav-desktop-only { display: flex !important; }
          .nav-mobile-only { display: none !important; }
          .nav-desktop-space-x > :not([hidden]) ~ :not([hidden]) {
            --tw-space-x-reverse: 0;
            margin-right: calc(2rem * var(--tw-space-x-reverse));
            margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
          }
        }
        @media (max-width: 767px) {
          .nav-desktop-only { display: none !important; }
          .nav-mobile-only { display: flex !important; }
        }
      `}} />
      <nav ref={navRef} className="sticky top-0 z-40 w-full glass shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold tracking-tighter text-[#064e3b] flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded bg-gradient-to-br from-[#10b981] to-[#064e3b] text-[#fdfbf7] flex items-center justify-center font-bold text-lg">
                  J
                </div>
                Jade Fortune
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="nav-mobile-only items-center">
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'mobileMenu' ? null : 'mobileMenu')}
                className="text-[#064e3b] hover:text-[#059669] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#059669] rounded-md p-2"
              >
                <span className="sr-only">Open main menu</span>
                {activeDropdown === 'mobileMenu' ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-desktop-only nav-desktop-space-x items-center w-full justify-end hidden">
              <Link
                href="/"
                className="text-[#064e3b] font-medium transition-colors hover:opacity-80 whitespace-nowrap"
              >
                Home
              </Link>
              <Link
                href="/how-it-works"
                style={{ color: "#064e3b" }}
                className="font-medium transition-colors hover:opacity-80 whitespace-nowrap"
              >
                How It Works
              </Link>
              <Link
                href="/contact"
                style={{ color: "#064e3b" }}
                className="font-medium transition-colors hover:opacity-80 whitespace-nowrap"
              >
                Contact
              </Link>

              {/* Auditor Dropdown */}
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "auditor" ? null : "auditor",
                    )
                  }
                  style={{ color: "#064e3b" }}
                  className="flex items-center font-medium transition-colors hover:opacity-80 gap-1 whitespace-nowrap"
                >
                  Auditor
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === "auditor" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {activeDropdown === "auditor" && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#fdfbf7] border border-[#059669]/10 rounded-xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <button
                      onClick={() => openAuth("login", "auditor")}
                      className="block w-full text-left px-4 py-2 text-sm text-[#064e3b] hover:bg-[#ecfdf5] hover:text-[#059669] transition-colors"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => openAuth("register", "auditor")}
                      className="block w-full text-left px-4 py-2 text-sm text-[#064e3b] hover:bg-[#ecfdf5] hover:text-[#059669] transition-colors"
                    >
                      Register
                    </button>
                  </div>
                )}
              </div>

              {/* Investor Dropdown */}
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "investor" ? null : "investor",
                    )
                  }
                  className="flex items-center bg-[#064e3b] text-[#fdfbf7] px-5 py-2.5 rounded-full font-medium hover:bg-[#059669] transition-colors shadow-lg shadow-[#064e3b]/20 gap-1 whitespace-nowrap"
                >
                  Investors
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === "investor" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {activeDropdown === "investor" && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#fdfbf7] border border-[#059669]/10 rounded-xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <button
                      onClick={() => openAuth("login", "investor")}
                      className="block w-full text-left px-4 py-2 text-sm text-[#064e3b] hover:bg-[#ecfdf5] hover:text-[#059669] transition-colors"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => openAuth("register", "investor")}
                      className="block w-full text-left px-4 py-2 text-sm text-[#064e3b] hover:bg-[#ecfdf5] hover:text-[#059669] transition-colors"
                    >
                      Register
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          {activeDropdown === 'mobileMenu' && (
            <div className="nav-mobile-only mt-2 pb-4 bg-[#fdfbf7]/95 rounded-xl border border-[#059669]/10 shadow-lg px-4 pt-2 hidden w-full block">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-[#064e3b] font-medium py-2 hover:bg-[#ecfdf5] px-3 rounded-lg"
                  onClick={() => setActiveDropdown(null)}
                >
                  Home
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-[#064e3b] font-medium py-2 hover:bg-[#ecfdf5] px-3 rounded-lg"
                  onClick={() => setActiveDropdown(null)}
                >
                  How It Works
                </Link>
                <Link
                  href="/contact"
                  className="text-[#064e3b] font-medium py-2 hover:bg-[#ecfdf5] px-3 rounded-lg"
                  onClick={() => setActiveDropdown(null)}
                >
                  Contact
                </Link>

                <div className="border-t border-[#064e3b]/10 pt-3">
                  <span className="text-[#064e3b]/60 text-xs font-bold uppercase tracking-wider px-3">Auditor</span>
                  <div className="grid grid-cols-2 gap-2 mt-2 px-3">
                    <button onClick={() => openAuth('login', 'auditor')} className="text-sm bg-white border border-[#064e3b]/20 py-2 rounded-lg font-medium text-[#064e3b]">Login</button>
                    <button onClick={() => openAuth('register', 'auditor')} className="text-sm bg-[#ecfdf5] border border-[#064e3b]/20 py-2 rounded-lg font-medium text-[#064e3b]">Register</button>
                  </div>
                </div>

                <div className="border-t border-[#064e3b]/10 pt-3">
                  <span className="text-[#064e3b]/60 text-xs font-bold uppercase tracking-wider px-3">Investor</span>
                  <div className="grid grid-cols-2 gap-2 mt-2 px-3 pb-2">
                    <button onClick={() => openAuth('login', 'investor')} className="text-sm bg-white border border-[#064e3b]/20 py-2 rounded-lg font-medium text-[#064e3b]">Login</button>
                    <button onClick={() => openAuth('register', 'investor')} className="text-sm bg-[#064e3b] py-2 rounded-lg font-medium text-[#fdfbf7]">Register</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>      {/* Auth Modal rendered globally inside Navbar component so it triggers everywhere */}
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        initialMode={authModal.mode}
        userType={authModal.userType}
      />
    </>
  );
}
