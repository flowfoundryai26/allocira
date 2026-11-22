export function siteOrigin() {
  if (process.env.NEXT_PUBLIC_SITE_URL)
    return new URL(process.env.NEXT_PUBLIC_SITE_URL).origin;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (process.env.VERCEL_URL) return "https://" + process.env.VERCEL_URL;
  return "http://localhost:3000";
}
