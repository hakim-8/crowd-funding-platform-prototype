import { SignIn } from "@clerk/nextjs";

export default function IssuerSignInPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#fcfaf5]">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-[#064e3b] mb-6">Issuer Portal Login</h1>
        <SignIn fallbackRedirectUrl="/issuer-portal" routing="path" path="/issuer/sign-in" signUpUrl="/issuer/sign-up" />
      </div>
    </div>
  );
}
