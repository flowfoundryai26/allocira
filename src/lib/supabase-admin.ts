import "server-only";
import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL?.trim() || process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_SECRET_KEY?.trim() || process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || url.includes("your-project")) {
    console.error("Submission storage requires the Supabase project URL in the server environment.");
    return null;
  }
  if (!key || key.startsWith("your-") || key.startsWith("sb_publishable_")) {
    console.error("Submission storage requires SUPABASE_SECRET_KEY from the project's secret API keys.");
    return null;
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
