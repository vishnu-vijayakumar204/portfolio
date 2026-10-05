/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://about.devizalabs.com)
 * once the custom domain is live; until then it falls back to the Vercel URL.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-two-peach-13.vercel.app"
).replace(/\/$/, "");
