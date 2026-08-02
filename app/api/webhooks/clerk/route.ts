export const runtime = "edge";

import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { supabaseAdmin } from "../../../../lib/supabase";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error("Missing CLERK_WEBHOOK_SECRET");
    return new Response("Server Error", { status: 500 });
  }

  // Get the headers from the standard Request object
  const svix_id = req.headers.get("svix-id");
  const svix_timestamp = req.headers.get("svix-timestamp");
  const svix_signature = req.headers.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  let payload;
  try {
    payload = await req.json();
  } catch (err) {
    return new Response("Invalid JSON body", { status: 400 });
  }

  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Handle the webhook
  try {
    const eventType = evt.type;

    if (eventType === "user.created") {
      const { id, email_addresses, first_name, last_name, public_metadata } =
        evt.data;
      const role = public_metadata?.role as string | undefined;

      const email = email_addresses?.[0]?.email_address || "";
      const firstName = first_name || "";
      const lastName = last_name || "";

      const data = {
        user_id: id,
        email,
        first_name: firstName,
        last_name: lastName,
      };

      if (role === "investor") {
        const { error } = await supabaseAdmin.from("investors").insert([data]);
        if (error) throw error;
      } else if (role === "issuer") {
        const { error } = await supabaseAdmin.from("issuers").insert([data]);
        if (error) throw error;
      }
    }

    if (eventType === "user.updated") {
      const { id, email_addresses, first_name, last_name, public_metadata } =
        evt.data;
      const role = public_metadata?.role as string | undefined;

      const email = email_addresses?.[0]?.email_address || "";
      const firstName = first_name || "";
      const lastName = last_name || "";

      const data = {
        email,
        first_name: firstName,
        last_name: lastName,
      };

      if (role === "investor") {
        const { error } = await supabaseAdmin
          .from("investors")
          .update(data)
          .eq("user_id", id);
        if (error) throw error;
      } else if (role === "issuer") {
        const { error } = await supabaseAdmin
          .from("issuers")
          .update(data)
          .eq("user_id", id);
        if (error) throw error;
      } else {
        // Fallback: try both if role isn't clear
        await supabaseAdmin.from("investors").update(data).eq("user_id", id);
        await supabaseAdmin.from("issuers").update(data).eq("user_id", id);
      }
    }

    if (eventType === "user.deleted") {
      const { id } = evt.data;
      if (id) {
        await supabaseAdmin.from("investors").delete().eq("user_id", id);
        await supabaseAdmin.from("issuers").delete().eq("user_id", id);
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database sync error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Database sync error" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
