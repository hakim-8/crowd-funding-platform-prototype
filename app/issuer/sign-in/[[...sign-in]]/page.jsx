"use client";

import { SignIn, useAuth } from "@clerk/nextjs";

export default function IssuerSignInPage() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded || isSignedIn) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-[#fcfaf5] gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#064e3b]"></div>
        <p className="text-[#064e3b] font-medium animate-pulse">Preparing your workspace...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#fcfaf5]">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-[#064e3b] mb-6">Issuer Portal Login</h1>
        <SignIn fallbackRedirectUrl="/issuer-portal" routing="path" path="/issuer/sign-in" signUpUrl="/issuer/sign-up" />
      </div>
    </div>
  );
}
