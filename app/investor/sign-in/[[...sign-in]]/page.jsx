import { SignIn } from "@clerk/nextjs";

export default function InvestorSignInPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#fdfbf7]">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-[#064e3b] mb-6">Investor Portal Login</h1>
        <SignIn fallbackRedirectUrl="/investor-portal" routing="path" path="/investor/sign-in" signUpUrl="/investor/sign-up" />
      </div>
    </div>
  );
}
