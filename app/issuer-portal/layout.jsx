import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function IssuerPortalLayout({ children }) {
  const user = await currentUser();

  if (!user) {
    redirect("/issuer/sign-in");
  }

  const role = user.publicMetadata?.role || user.unsafeMetadata?.role;

  // Strict role checking: If they are explicitly an investor, send them to their portal.
  if (role === "investor") {
    redirect("/investor-portal");
  }

  // If role is missing (edge case) or 'issuer', allow them to proceed.
  if (role !== "issuer" && role !== undefined) {
    redirect("/");
  }

  return <>{children}</>;
}
