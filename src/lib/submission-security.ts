import "server-only";
import { createHmac } from "node:crypto";
import type { NextRequest } from "next/server";
import type { SupabaseClient } from "@supabase/supabase-js";

export function validOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  return (
    origin === request.nextUrl.origin ||
    origin === process.env.NEXT_PUBLIC_SITE_URL
  );
}

export async function rateLimit(
  db: SupabaseClient,
  request: NextRequest,
  scope: "waitlist" | "feedback",
  email: string,
) {
  const secret = process.env.RATE_LIMIT_SECRET;
  if (!secret || secret.length < 24 || secret.startsWith("replace-with-")) {
    console.error("Set RATE_LIMIT_SECRET to a random server-side secret of at least 24 characters.");
    return { allowed: false, unavailable: true };
  }
  const ip =
    process.env.VERCEL === "1"
      ? request.headers.get("x-vercel-forwarded-for") ||
        request.headers.get("x-forwarded-for")
      : null;
  const buckets = [
    { key: `${scope}:ip:${ip?.split(",")[0].trim() || "shared"}`, limit: 12 },
    { key: `${scope}:email:${email}`, limit: 5 },
  ];
  for (const bucket of buckets) {
    const key = createHmac("sha256", secret).update(bucket.key).digest("hex");
    const { data, error } = await db.rpc("check_submission_rate_limit", {
      p_key: key,
      p_limit: bucket.limit,
      p_window_seconds: 3600,
    });
    if (error) {
      console.error("Supabase rate-limit check failed", { code: error.code || "connection_error" });
      return { allowed: false, unavailable: true };
    }
    if (data !== true) return { allowed: false, unavailable: false };
  }
  return { allowed: true, unavailable: false };
}

export async function readJson(request: NextRequest): Promise<unknown> {
  const maxBytes = 24000;
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json") ||
    Number(request.headers.get("content-length")) > maxBytes ||
    !request.body
  )
    return null;
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBytes) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return null;
  } finally {
    reader.releaseLock();
  }
}
