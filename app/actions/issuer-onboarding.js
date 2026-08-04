"use server";

import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { encrypt, decrypt } from "@/app/utils/crypto";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
);

export async function getOnboardingData() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const { data: issuer, error: issuerError } = await supabaseAdmin
    .from("issuers")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (issuerError && issuerError.code !== "PGRST116") {
    console.error(issuerError);
    throw new Error("Failed to fetch issuer data");
  }

  const { data: reps, error: repsError } = await supabaseAdmin
    .from("issuer_reps")
    .select("*")
    .eq("issuer_id", userId);

  if (repsError) {
    console.error(repsError);
    throw new Error("Failed to fetch representatives");
  }

  const { data: docs, error: docsError } = await supabaseAdmin
    .from("issuer_docs")
    .select("*")
    .eq("issuer_id", userId);

  if (docsError) {
    console.error(docsError);
    throw new Error("Failed to fetch documents");
  }

  // Decrypt sensitive fields
  if (issuer?.trade_license_number) {
    issuer.trade_license_number = decrypt(issuer.trade_license_number);
  }
  if (issuer?.bank_details?.iban) {
    issuer.bank_details.iban = decrypt(issuer.bank_details.iban);
  }

  const decryptedReps = (reps || []).map(rep => ({
    ...rep,
    id_number: rep.id_number ? decrypt(rep.id_number) : rep.id_number
  }));

  const decryptedDocs = (docs || []).map(doc => ({
    ...doc,
    document_password: doc.document_password ? decrypt(doc.document_password) : doc.document_password
  }));

  return { issuer: issuer || {}, reps: decryptedReps, docs: decryptedDocs };
}

export async function saveStage1(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const { error } = await supabaseAdmin
    .from("issuers")
    .update({
      legal_entity_name: data.legal_entity_name,
      country: data.country,
      city: data.city,
      business_email: data.business_email,
      business_phone_number: data.business_phone_number,
      business_type: data.business_type,
      license_authority: data.license_authority,
      trade_license_number: encrypt(data.trade_license_number),
    })
    .eq("user_id", userId);

  if (error) throw new Error("Failed to save entity details: " + error.message);
  revalidatePath("/issuer-portal/onboarding");
  return { success: true };
}

export async function saveStage2Rep(formData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const repId = formData.get("repId");
  const file = formData.get("file");

  let fileUrl = null;
  if (file && file.size > 0) {
    const fileExt = file.name.split(".").pop();
    const fullName = formData.get("full_name").replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
    const fileName = `${Date.now()}_${fullName}.${fileExt}`;
    const filePath = `${userId}/${fileName}`;

    const { error: uploadError } = await supabaseAdmin.storage
      .from("issuer_reps")
      .upload(filePath, file, { upsert: true });

    if (uploadError)
      throw new Error("Failed to upload image: " + uploadError.message);

    // Get public URL or just store the path. Using public URL for simplicity, or we can use signed URLs later. Assuming private bucket, we store path.
    // Wait, prompt said: "the url for this file should be stored in the id_url field"
    const {
      data: { publicUrl },
    } = supabaseAdmin.storage.from("issuer_reps").getPublicUrl(filePath);
    fileUrl = publicUrl; // Wait, if private, publicUrl won't work, but they just asked for "url". Let's store the full path or public URL. Actually, I'll store filePath so we can generate signed URLs later, but the prompt says "the url for this file should be stored in the id_url field". I'll store the publicUrl assuming they will make it readable or use signed URLs.
  }

  const payload = {
    issuer_id: userId,
    full_name: formData.get("full_name"),
    id_type: formData.get("id_type"),
    id_number: encrypt(formData.get("id_number")),
    is_authorized_signatory: formData.get("is_authorized_signatory") === "true",
    is_director: formData.get("is_director") === "true",
    is_ubo: formData.get("is_ubo") === "true",
    ubo_percentage:
      formData.get("is_ubo") === "true"
        ? parseFloat(formData.get("ubo_percentage"))
        : null,
    other_designation: formData.get("other_designation") || null,
  };

  if (fileUrl) {
    payload.id_url = fileUrl;
  }

  let error;
  if (repId) {
    const { error: err } = await supabaseAdmin
      .from("issuer_reps")
      .update(payload)
      .eq("id", repId)
      .eq("issuer_id", userId);
    error = err;
  } else {
    const { error: err } = await supabaseAdmin
      .from("issuer_reps")
      .insert([payload]);
    error = err;
  }

  if (error) throw new Error("Failed to save representative: " + error.message);
  revalidatePath("/issuer-portal/onboarding");
  return { success: true };
}

export async function removeStage2Rep(repId) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const { data, error: fetchErr } = await supabaseAdmin
    .from("issuer_reps")
    .select("id_url")
    .eq("id", repId)
    .eq("issuer_id", userId)
    .single();

  if (fetchErr) throw new Error("Rep not found");

  // Remove file from storage if it exists
  if (data?.id_url) {
    const path = data.id_url.split("/").pop(); // This assumes just the filename or path.
    // In a real app we parse the URL correctly. Let's assume the path stored in DB is relative or just the file name.
    await supabaseAdmin.storage
      .from("issuer_reps")
      .remove([`${userId}/${path}`]);
  }

  const { error } = await supabaseAdmin
    .from("issuer_reps")
    .delete()
    .eq("id", repId)
    .eq("issuer_id", userId);

  if (error)
    throw new Error("Failed to delete representative: " + error.message);
  revalidatePath("/issuer-portal/onboarding");
  return { success: true };
}

export async function saveStage3Doc(formData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const docType = formData.get("doc_type");
  const password = formData.get("document_password");
  const file = formData.get("file");

  if (!docType || !file || file.size === 0) {
    throw new Error("Document type and file are required");
  }

  const fileExt = file.name.split(".").pop();
  const fileName = `${docType}_${Date.now()}.${fileExt}`;
  const filePath = `${userId}/${fileName}`;

  const { error: uploadError } = await supabaseAdmin.storage
    .from("issuer_docs")
    .upload(filePath, file, { upsert: true });

  if (uploadError)
    throw new Error("Failed to upload document: " + uploadError.message);

  const {
    data: { publicUrl },
  } = supabaseAdmin.storage.from("issuer_docs").getPublicUrl(filePath);
  const fileUrl = publicUrl;

  // Upsert pattern (we might already have this doc_type, so we update or insert)
  const { data: existing } = await supabaseAdmin
    .from("issuer_docs")
    .select("id, url")
    .eq("issuer_id", userId)
    .eq("doc_type", docType)
    .single();

  if (existing) {
    // Delete old file if updating
    if (existing.url && existing.url !== fileUrl) {
      const oldPath = existing.url.split("/").pop();
      await supabaseAdmin.storage
        .from("issuer_docs")
        .remove([`${userId}/${oldPath}`]);
    }

    const { error } = await supabaseAdmin
      .from("issuer_docs")
      .update({
        document_password: password ? encrypt(password) : null,
        url: fileUrl,
        uploaded_at: new Date().toISOString(),
      })
      .eq("id", existing.id);
    if (error) throw new Error("Failed to update doc");
  } else {
    const { error } = await supabaseAdmin.from("issuer_docs").insert([
      {
        issuer_id: userId,
        doc_type: docType,
        document_password: password ? encrypt(password) : null,
        url: fileUrl,
        status: "pending",
        uploaded_at: new Date().toISOString(),
      },
    ]);
    if (error) throw new Error("Failed to insert doc: " + error.message);
  }

  revalidatePath("/issuer-portal/onboarding");
  return { success: true };
}

export async function updateDocPassword(docType, password) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const { error } = await supabaseAdmin
    .from("issuer_docs")
    .update({ document_password: password ? encrypt(password) : null })
    .eq("issuer_id", userId)
    .eq("doc_type", docType);

  if (error) throw new Error("Failed to update document password: " + error.message);
  
  revalidatePath("/issuer-portal/onboarding");
  return { success: true };
}

export async function saveStage4Banking(bankDetails) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const { error } = await supabaseAdmin
    .from("issuers")
    .update({
      bank_details: { ...bankDetails, iban: encrypt(bankDetails.iban) },
      bank_verification_status: "pending",
    })
    .eq("user_id", userId);

  if (error) throw new Error("Failed to save bank details: " + error.message);
  revalidatePath("/issuer-portal/onboarding");
  return { success: true };
}

export async function submitApplication() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown";
  const userAgent = headersList.get("user-agent") || "unknown";

  const { error } = await supabaseAdmin
    .from("issuers")
    .update({
      onboarding_status: "pending review",
      consent_timestamp: new Date().toISOString(),
      consent_ip: ip,
      consent_user_profile: userAgent,
    })
    .eq("user_id", userId);

  if (error) throw new Error("Failed to submit application: " + error.message);
  revalidatePath("/issuer-portal/onboarding");
  return { success: true };
}
