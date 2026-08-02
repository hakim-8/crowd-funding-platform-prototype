import { SignUp } from "@clerk/nextjs";

export default function InvestorSignUpPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#fdfbf7]">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-[#064e3b] mb-6">Investor Portal Registration</h1>
        <SignUp fallbackRedirectUrl="/investor-portal" routing="path" path="/investor/sign-up" signInUrl="/investor/sign-in" />
      </div>
    </div>
  );
}
