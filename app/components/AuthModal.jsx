"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = "login",
  userType = "investor",
}) {
  const [mode, setMode] = useState(initialMode);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    verificationCode: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expectedCode, setExpectedCode] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        verificationCode: "",
      });
      setError("");
      setExpectedCode(null);
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "register") {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, userType }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to register");

        // Auto-login or just show success and switch to login
        setMode("login");
        setError("Registration successful! Please login.");
      } else if (mode === "login") {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            userType,
          }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to login");

        // Show verification step
        setExpectedCode(data.verificationCode);
        setMode("verify");
      } else if (mode === "verify") {
        // Check verification code locally
        if (formData.verificationCode === expectedCode) {
          // Success! Redirect to portal
          const portalPath =
            userType === "investor" ? "/investor-portal" : "/auditor-portal";
          router.push(portalPath);
          onClose();
        } else {
          throw new Error("Invalid verification code");
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#064e3b]/40 backdrop-blur-sm p-4">
      <div className="bg-[#fdfbf7] border border-[#064e3b]/20 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="relative h-24 bg-diamond-grid-green flex items-center justify-center overflow-hidden">
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={onClose}
              className="text-[#fdfbf7]/70 hover:text-[#fdfbf7] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <h2 className="text-2xl font-bold text-[#fdfbf7] capitalize tracking-wide relative z-10">
            {mode === "login"
              ? "Welcome Back"
              : mode === "verify"
                ? "Verification"
                : "Join Jade Fortune"}
          </h2>
        </div>

        <div className="p-8 max-h-[70vh] overflow-y-auto">
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 bg-[#ecfdf5] text-[#064e3b] text-sm font-semibold rounded-full capitalize border border-[#10b981]/20">
              {userType} Portal
            </span>
            <p className="text-[#064e3b]/70 text-sm mt-3">
              {mode === "login"
                ? "Please enter your credentials to continue."
                : mode === "verify"
                  ? "A verification code has been sent to your email."
                  : "Create an account to start your journey."}
            </p>
          </div>

          {error && (
            <div
              className={`mb-4 p-3 rounded-lg text-sm ${error.includes("successful") ? "bg-green-100 text-green-700 border border-green-200" : "bg-red-50 text-red-600 border border-red-200"}`}
            >
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {mode === "register" && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#064e3b] mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#064e3b] mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669]"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#064e3b] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669]"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </>
            )}

            {(mode === "login" || mode === "register") && (
              <>
                <div>
                  <label className="block text-sm font-medium text-[#064e3b] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#064e3b] mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669]"
                    placeholder="••••••••"
                  />
                </div>
              </>
            )}

            {mode === "verify" && (
              <div>
                <label className="block text-sm font-medium text-[#064e3b] mb-1">
                  Verification Code
                </label>
                <input
                  type="text"
                  name="verificationCode"
                  value={formData.verificationCode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#064e3b]/20 bg-[#fffcf8] text-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#059669] text-center tracking-widest font-mono text-xl"
                  placeholder="123456"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#064e3b] border-b-[4px] border-[#033527] text-[#fdfbf7] font-semibold py-3 px-4 rounded-lg hover:brightness-110 active:translate-y-[2px] active:border-b-[2px] transition-all duration-100 shadow-lg shadow-[#059669]/20 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading
                ? "Processing..."
                : mode === "login"
                  ? "Sign In"
                  : mode === "verify"
                    ? "Verify & Continue"
                    : "Create Account"}
            </button>
          </form>

          {mode !== "verify" && (
            <div className="mt-6 text-center text-sm text-[#064e3b]/70">
              {mode === "login" ? (
                <p>
                  Don't have an account?{" "}
                  <button
                    onClick={() => {
                      setMode("register");
                      setError("");
                    }}
                    className="text-[#059669] font-semibold hover:underline"
                  >
                    Register here
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    onClick={() => {
                      setMode("login");
                      setError("");
                    }}
                    className="text-[#059669] font-semibold hover:underline"
                  >
                    Log in
                  </button>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
