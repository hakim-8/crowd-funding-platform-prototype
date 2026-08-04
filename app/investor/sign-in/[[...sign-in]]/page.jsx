"use client";

import { SignIn, useAuth, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InvestorSignInPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      const timeoutId = setTimeout(() => {
        router.push("/investor-portal");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [isLoaded, isSignedIn, user, router]);

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
        <SignIn forceRedirectUrl="/investor/sign-in" routing="path" path="/investor/sign-in" signUpUrl="/investor/sign-up" />
      </div>
    </div>
  );
}
