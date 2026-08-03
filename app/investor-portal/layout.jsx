import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function InvestorPortalLayout({ children }) {
  const user = await currentUser();

  if (!user) {
    redirect("/investor/sign-in");
  }

  const role = user.publicMetadata?.role || user.unsafeMetadata?.role;

  // Strict role checking: If they are explicitly an issuer, send them to their portal.
  if (role === "issuer") {
    redirect("/issuer-portal");
  }

  // If role is missing (edge case) or 'investor', allow them to proceed.
  // Real apps might block missing roles, but for now we allow missing or 'investor'.
  if (role !== "investor" && role !== undefined) {
    redirect("/");
  }

  return <>{children}</>;
}
