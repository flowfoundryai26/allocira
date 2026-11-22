import { NextRequest, NextResponse } from "next/server";
import { feedbackSchema } from "@/lib/validation";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { rateLimit, readJson, validOrigin } from "@/lib/submission-security";

export const runtime = "nodejs";

async function submit(request: NextRequest) {
  if (!validOrigin(request))
    return NextResponse.json(
      { message: "Invalid request origin." },
      { status: 403 },
    );
  const body = await readJson(request);
  if (!body)
    return NextResponse.json(
      { message: "Please check your details and try again." },
      { status: 400 },
    );
  const parsed = feedbackSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      {
        message: "Please correct the highlighted fields.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  if (parsed.data.website)
    return NextResponse.json(
      { message: "Unable to process this request." },
      { status: 400 },
    );
  const db = getSupabaseAdmin();
  if (!db)
    return NextResponse.json(
      {
        message:
          "Feedback is temporarily unavailable. Please email info@flowfoundryai.in.",
      },
      { status: 503 },
    );
  const limit = await rateLimit(db, request, "feedback", parsed.data.email);
  if (limit.unavailable)
    return NextResponse.json(
      {
        message:
          "Feedback is temporarily unavailable. Please email info@flowfoundryai.in.",
      },
      { status: 503 },
    );
  if (!limit.allowed)
    return NextResponse.json(
      { message: "Too many attempts. Please try again in an hour." },
      { status: 429, headers: { "Retry-After": "3600" } },
    );
  const { error } = await db.from("product_feedback").insert({
    full_name: parsed.data.fullName,
    email: parsed.data.email,
    message: parsed.data.message,
    privacy_consent: true,
    consent_timestamp: new Date().toISOString(),
    privacy_notice_version: "2026-11-22",
  });
  if (error) {
    console.error("Feedback insert failed", { code: error.code });
    return NextResponse.json(
      {
        message:
          "We couldn't save your feedback right now. Please email info@flowfoundryai.in.",
      },
      { status: 503 },
    );
  }
  return NextResponse.json(
    {
      message:
        "Thank you for sharing your feedback. The FlowFoundry team will review it.",
    },
    { status: 201 },
  );
}

export async function POST(request: NextRequest) {
  try {
    return await submit(request);
  } catch {
    return NextResponse.json(
      {
        message:
          "We could not save your submission. Please try again later or contact info@flowfoundryai.in.",
      },
      { status: 503 },
    );
  }
}
