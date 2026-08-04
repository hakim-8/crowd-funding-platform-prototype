import { currentUser } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

export default async function ProtectedIssuerLayout({ children }) {
  const user = await currentUser();

  if (!user) return null; // Should be caught by root issuer-portal layout

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY,
  );

  const { data } = await supabaseAdmin
    .from("issuers")
    .select(
      "legal_entity_name, country, city, business_email, business_phone_number, business_type, license_authority, trade_license_number, bank_details",
    )
    .eq("user_id", user.id)
    .single();

  // Check if all fields are filled
  const requiredFields = [
    "legal_entity_name",
    "country",
    "city",
    "business_email",
    "business_phone_number",
    "business_type",
    "license_authority",
    "trade_lisence_number",
    "bank_details",
  ];

  const isFullyOnboarded = data
    ? requiredFields.every(
        (field) => data[field] !== null && data[field] !== "",
      )
    : false;

  if (!isFullyOnboarded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcfaf5]">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm border border-[#064e3b]/10 text-center">
          <h2 className="text-2xl font-bold text-[#064e3b] mb-4">
            Onboarding Required
          </h2>
          <p className="text-gray-600 mb-6">
            You need to complete your profile onboarding before accessing the
            platform.
          </p>
          <Link
            href="/issuer-portal/onboarding"
            className="inline-block bg-[#064e3b] text-white px-6 py-2 rounded-md font-medium hover:bg-[#064e3b]/90 transition-colors"
          >
            Complete Onboarding
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
