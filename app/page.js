"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function useAnimatedCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

function AnimatedNumber({ end, prefix = "", suffix = "" }) {
  const count = useAnimatedCounter(end);
  return (
    <>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
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
              <h1 className="text-5xl lg:text-6xl font-extrabold text-[#064e3b] tracking-tight mb-6">
                Empower the Future with <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#064e3b]">
                  Jade Fortune
                </span>
              </h1>
              <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-xl text-[#064e3b]/80 mb-10 leading-relaxed">
                Discover and fund transformative projects. A secure platform
                connecting visionary creators, diligent auditors, and passionate
                investors.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                <Link
                  href="/projects"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-b from-[#059669] to-[#064e3b] border-b-[4px] border-[#033527] text-[#fdfbf7] rounded-full font-bold text-lg hover:brightness-110 active:translate-y-[2px] active:border-b-[2px] transition-all duration-100 shadow-lg hover:shadow-[#059669]/10 text-center"
                >
                  Browse Projects
                </Link>
                <Link
                  href="/how-it-works"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-b from-white to-[#fcfaf5] text-[#064e3b] border border-[#059669]/20 border-b-[4px] border-b-[#e5dccb] rounded-full font-bold text-lg hover:bg-[#ecfdf5] active:translate-y-[2px] active:border-b-[2px] transition-all duration-100 text-center"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            {/* Right Column: Statistics Grid */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ecfdf5] to-transparent rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg"></div>

              <div className="relative z-10 grid grid-cols-2 gap-6 p-8 bg-white/60 backdrop-blur-xl border border-[#f2eadb] rounded-3xl shadow-2xl">
                <div className="p-6 bg-gradient-to-br from-white to-[#fdfbf7] rounded-2xl border border-[#059669]/10 shadow-sm text-center transform transition-transform hover:-translate-y-1 duration-300">
                  <p className="text-4xl font-extrabold text-[#059669] mb-2">
                    <AnimatedNumber end={50} prefix="$" suffix="M+" />
                  </p>
                  <p className="text-xs font-bold text-[#064e3b]/70 uppercase tracking-wider">
                    Total Raised
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-white to-[#fdfbf7] rounded-2xl border border-[#059669]/10 shadow-sm text-center transform transition-transform hover:-translate-y-1 duration-300 translate-y-4">
                  <p className="text-4xl font-extrabold text-[#059669] mb-2">
                    <AnimatedNumber end={1200} suffix="+" />
                  </p>
                  <p className="text-xs font-bold text-[#064e3b]/70 uppercase tracking-wider">
                    Projects Funded
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-white to-[#fdfbf7] rounded-2xl border border-[#059669]/10 shadow-sm text-center transform transition-transform hover:-translate-y-1 duration-300 -translate-y-4">
                  <p className="text-4xl font-extrabold text-[#059669] mb-2">
                    <AnimatedNumber end={250} suffix="k+" />
                  </p>
                  <p className="text-xs font-bold text-[#064e3b]/70 uppercase tracking-wider">
                    Happy Backers
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-white to-[#fdfbf7] rounded-2xl border border-[#059669]/10 shadow-sm text-center transform transition-transform hover:-translate-y-1 duration-300">
                  <p className="text-4xl font-extrabold text-[#059669] mb-2">
                    <AnimatedNumber end={100} suffix="%" />
                  </p>
                  <p className="text-xs font-bold text-[#064e3b]/70 uppercase tracking-wider">
                    Audited Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Logos Section */}
      <section className="py-12 bg-white border-y border-[#059669]/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Press Logos Mockup */}
          <div className="pt-2">
            <p className="text-center text-sm font-semibold text-[#064e3b]/50 uppercase tracking-widest mb-8">
              Trusted by leading publications
            </p>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="text-2xl font-bold font-serif text-[#064e3b]">
                Forbes
              </div>
              <div className="text-2xl font-bold font-sans text-[#064e3b]">
                TechCrunch
              </div>
              <div className="text-2xl font-bold font-mono text-[#064e3b]">
                WIRED
              </div>
              <div className="text-2xl font-bold font-sans text-[#064e3b] italic">
                Bloomberg
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#fffcf8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#064e3b] mb-4">
              Why Choose Jade Fortune?
            </h2>
            <p className="text-lg text-[#064e3b]/70 max-w-2xl mx-auto">
              A purpose-built ecosystem designed for both visionary creators and
              discerning backers.
            </p>
            <div className="w-24 h-1 bg-[#059669] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* For Backers */}
            <div className="bg-white p-10 rounded-3xl shadow-lg shadow-[#059669]/5 border border-[#f2eadb] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ecfdf5] rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <h3 className="text-2xl font-bold text-[#064e3b] mb-6 relative z-10 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#059669] text-white flex items-center justify-center text-xl">
                  🛡️
                </span>
                For Backers
              </h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3 text-[#064e3b]/80">
                  <svg
                    className="w-6 h-6 text-[#059669] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Rigorous Auditing:</strong> Every project undergoes
                    strict vetting.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[#064e3b]/80">
                  <svg
                    className="w-6 h-6 text-[#059669] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>High-Yield Potential:</strong> Access curated
                    early-stage opportunities.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[#064e3b]/80">
                  <svg
                    className="w-6 h-6 text-[#059669] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Transparent Ecosystem:</strong> Track investments
                    with real-time updates.
                  </span>
                </li>
              </ul>
            </div>

            {/* For Creators */}
            <div className="bg-[#064e3b] p-10 rounded-3xl shadow-lg shadow-[#064e3b]/20 border border-[#064e3b] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#059669] rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 opacity-50"></div>
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white text-[#064e3b] flex items-center justify-center text-xl">
                  🚀
                </span>
                For Creators
              </h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3 text-white/90">
                  <svg
                    className="w-6 h-6 text-[#34d399] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Fair Funding:</strong> All-or-nothing or flexible
                    models to suit your needs.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <svg
                    className="w-6 h-6 text-[#34d399] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Global Reach:</strong> Connect with verified
                    investors globally.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <svg
                    className="w-6 h-6 text-[#34d399] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Expert Guidance:</strong> Get audited to prove your
                    project's viability.
                  </span>
                </li>
              </ul>
            </div>

            {/* For Auditors */}
            <div className="bg-white p-10 rounded-3xl shadow-lg shadow-[#059669]/5 border border-[#f2eadb] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ecfdf5] rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <h3 className="text-2xl font-bold text-[#064e3b] mb-6 relative z-10 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#059669] text-white flex items-center justify-center text-xl">
                  🔍
                </span>
                For Auditors
              </h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3 text-[#064e3b]/80">
                  <svg
                    className="w-6 h-6 text-[#059669] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Monetize Expertise:</strong> Earn fees by conducting
                    thorough reviews.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[#064e3b]/80">
                  <svg
                    className="w-6 h-6 text-[#059669] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Build Reputation:</strong> Gain a verified status on
                    the platform.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-[#064e3b]/80">
                  <svg
                    className="w-6 h-6 text-[#059669] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Drive Quality:</strong> Ensure the ecosystem remains
                    trustworthy.
                  </span>
                </li>
              </ul>
            </div>

            {/* For Partners */}
            <div className="bg-[#064e3b] p-10 rounded-3xl shadow-lg shadow-[#064e3b]/20 border border-[#064e3b] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#059669] rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 opacity-50"></div>
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white text-[#064e3b] flex items-center justify-center text-xl">
                  🤝
                </span>
                For Partners
              </h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3 text-white/90">
                  <svg
                    className="w-6 h-6 text-[#34d399] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Scale Impact:</strong> Co-fund massive initiatives
                    with syndicates.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <svg
                    className="w-6 h-6 text-[#34d399] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Exclusive Access:</strong> Get early looks at
                    vetted, high-tier projects.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <svg
                    className="w-6 h-6 text-[#34d399] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Custom Deals:</strong> Negotiate equity or revenue
                    sharing structures.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Teaser */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#064e3b] mb-4">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-[#059669] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-4 gap-8 relative before:absolute before:inset-0 before:top-1/2 before:-translate-y-1/2 before:h-0.5 before:bg-[#ecfdf5] before:hidden lg:before:block">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "Browse through our curated list of audited, high-potential projects.",
              },
              {
                step: "02",
                title: "Fund",
                desc: "Rigorous vetting ensures only viable projects make it to the platform.",
              },
              {
                step: "03",
                title: "Secure Funding",
                desc: "Backers commit funds securely via escrow smart contracts.",
              },
              {
                step: "04",
                title: "Execute & Return",
                desc: "Funds are released on milestones. Returns flow directly to backers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative z-10 bg-white border border-[#f2eadb] p-8 rounded-2xl shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-[#059669] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-[#059669]/20 border-4 border-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#064e3b] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#064e3b]/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 font-bold text-[#059669] hover:text-[#064e3b] transition-colors group"
            >
              See the full process
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="py-24 bg-[#fdfbf7] relative border-y border-[#059669]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#064e3b] mb-4">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-[#059669] rounded-full mt-2"></div>
            </div>
            <Link
              href="/projects"
              className="hidden lg:inline-flex items-center gap-2 font-bold text-[#059669] hover:text-[#064e3b] transition-colors group"
            >
              View all projects
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mock Project 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-md shadow-[#059669]/5 border border-[#f2eadb] group hover:shadow-xl hover:shadow-[#059669]/10 transition-all duration-300">
              <div className="h-48 bg-gray-200 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#059669] text-xs font-bold px-3 py-1 rounded-full z-10">
                  Tech
                </div>
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                  alt="Tech Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#064e3b] mb-2 line-clamp-1">
                  NextGen Solar Processor
                </h3>
                <p className="text-[#064e3b]/70 text-sm mb-6 line-clamp-2">
                  Revolutionary chip design that runs entirely on ambient light,
                  reducing carbon footprint for IoT devices.
                </p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold text-[#059669]">$125,000</span>
                    <span className="text-[#064e3b]/50">of $100k goal</span>
                  </div>
                  <div className="w-full h-2 bg-[#ecfdf5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#059669] w-[125%] rounded-full"></div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-[#064e3b]/70 border-t border-gray-100 pt-4">
                  <span className="font-medium text-[#064e3b]">
                    1,042 Backers
                  </span>
                  <span className="font-medium text-[#059669]">
                    4 Days Left
                  </span>
                </div>
              </div>
            </div>

            {/* Mock Project 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-md shadow-[#059669]/5 border border-[#f2eadb] group hover:shadow-xl hover:shadow-[#059669]/10 transition-all duration-300">
              <div className="h-48 bg-gray-200 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#059669] text-xs font-bold px-3 py-1 rounded-full z-10">
                  Design
                </div>
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                  alt="Design Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#064e3b] mb-2 line-clamp-1">
                  The Modular Desk Ecosystem
                </h3>
                <p className="text-[#064e3b]/70 text-sm mb-6 line-clamp-2">
                  A completely customizable workspace solution that adapts to
                  your posture and workflow dynamically.
                </p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold text-[#059669]">$45,000</span>
                    <span className="text-[#064e3b]/50">of $50k goal</span>
                  </div>
                  <div className="w-full h-2 bg-[#ecfdf5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#059669] w-[90%] rounded-full"></div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-[#064e3b]/70 border-t border-gray-100 pt-4">
                  <span className="font-medium text-[#064e3b]">
                    312 Backers
                  </span>
                  <span className="font-medium text-orange-500">
                    12 Days Left
                  </span>
                </div>
              </div>
            </div>

            {/* Mock Project 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-md shadow-[#059669]/5 border border-[#f2eadb] group hover:shadow-xl hover:shadow-[#059669]/10 transition-all duration-300">
              <div className="h-48 bg-gray-200 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#059669] text-xs font-bold px-3 py-1 rounded-full z-10">
                  Film
                </div>
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
                  alt="Film Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#064e3b] mb-2 line-clamp-1">
                  Echoes of Tomorrow
                </h3>
                <p className="text-[#064e3b]/70 text-sm mb-6 line-clamp-2">
                  An independent sci-fi feature film exploring the ethical
                  implications of memory modification technology.
                </p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold text-[#059669]">$210,000</span>
                    <span className="text-[#064e3b]/50">of $150k goal</span>
                  </div>
                  <div className="w-full h-2 bg-[#ecfdf5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#059669] w-full rounded-full"></div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-[#064e3b]/70 border-t border-gray-100 pt-4">
                  <span className="font-medium text-[#064e3b]">
                    2,150 Backers
                  </span>
                  <span className="font-medium text-blue-500">Funded</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center lg:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-bold text-[#059669] hover:text-[#064e3b] transition-colors group"
            >
              View all projects
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#064e3b] mb-4">
              Success Stories
            </h2>
            <div className="w-24 h-1 bg-[#059669] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-[#fdfbf7] p-8 lg:p-10 rounded-3xl border border-[#f2eadb] relative">
              <svg
                className="absolute top-6 right-6 w-12 h-12 text-[#059669]/10"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg text-[#064e3b]/80 italic mb-8 relative z-10">
                "Jade Fortune made the entire funding process seamless. Not only
                did we hit our goal in record time, but the auditing process
                gave our backers the confidence they needed."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                    alt="Sarah J."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#064e3b]">Sarah Jenkins</h4>
                  <p className="text-sm text-[#059669]">
                    Creator, Modular Desk
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#fdfbf7] p-8 lg:p-10 rounded-3xl border border-[#f2eadb] relative">
              <svg
                className="absolute top-6 right-6 w-12 h-12 text-[#059669]/10"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg text-[#064e3b]/80 italic mb-8 relative z-10">
                "As an investor, security is my top priority. The transparent
                auditing and regular updates provided by this platform are
                unparalleled in the crowdfunding space."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
                    alt="Michael T."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#064e3b]">Michael Torres</h4>
                  <p className="text-sm text-[#059669]">Super Backer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#064e3b]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669] rounded-full filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#059669] rounded-full filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of innovators and backers building the next
            generation of groundbreaking products.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              href="/register"
              className="px-8 py-4 bg-white text-[#064e3b] rounded-full font-bold text-lg hover:bg-gray-50 active:scale-95 transition-all shadow-xl shadow-black/10"
            >
              Get Started Now
            </Link>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              Stay in the loop
            </h3>
            <p className="text-white/70 mb-6 text-sm">
              Subscribe to our newsletter for the latest projects and platform
              updates.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#34d399] transition-all"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#059669] text-white font-bold rounded-xl hover:bg-[#047857] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
