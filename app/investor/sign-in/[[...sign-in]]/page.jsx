"use client";

import { SignIn, useAuth } from "@clerk/nextjs";

export default function InvestorSignInPage() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded || isSignedIn) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-[#fdfbf7] gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#064e3b]"></div>
        <p className="text-[#064e3b] font-medium animate-pulse">Preparing your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#fdfbf7]">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-[#064e3b] mb-6">Investor Portal Login</h1>
        <SignIn fallbackRedirectUrl="/investor-portal" routing="path" path="/investor/sign-in" signUpUrl="/investor/sign-up" />
      </div>
    </div>
  );
}
