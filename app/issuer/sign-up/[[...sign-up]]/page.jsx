import { SignUp } from "@clerk/nextjs";

export default function IssuerSignUpPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#fcfaf5]">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-[#064e3b] mb-6">Issuer Portal Registration</h1>
        <SignUp fallbackRedirectUrl="/issuer-portal" routing="path" path="/issuer/sign-up" signInUrl="/issuer/sign-in" unsafeMetadata={{ role: "issuer" }} />
      </div>
    </div>
  );
}
