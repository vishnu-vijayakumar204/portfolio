/**
 * Case-study content.
 *
 * Anything starting with "TODO:" is a placeholder for you to fill in with REAL facts.
 * Placeholders are shown (amber, dashed) in `npm run dev` and silently hidden in
 * production builds, so an unfinished sentence can never ship to a client.
 * Don't write claims here you can't defend on a discovery call.
 */

export interface CaseStudy {
  slug: string;
  title: string;
  /** Still being built: shown with a WIP badge. */
  wip?: boolean;
  category: string;
  emoji: string;
  /** One sentence: what the product is. */
  whatItIs: string;
  liveUrl: string;
  tech: string[];
  /** The business/user problem it solves. */
  problem: string;
  /** What you personally did: architecture, frontend, API, auth, DB, AI, deploy, analytics, perf. */
  whatIDid: string[];
  /** Decisions + trade-offs (why X over Y). */
  decisions: string[];
  /** Measurable results: users, speed, SEO, cost, time-to-ship. */
  outcomes: string[];
  /** The "why this matters" line for a prospective client. */
  whyItMatters: string;
}

export const isTodo = (s: string) => s.trim().startsWith("TODO:");

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "travelvisastack",
    title: "TravelVisaStack",
    category: "AI travel platform",
    emoji: "✈️",
    whatItIs:
      "A visa-requirements checker with AI-generated visa guides and paid, AI-assisted trip itineraries, built under Deviza Labs.",
    liveUrl: "https://travelvisastack.com",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Gemini API",
      "Razorpay",
      "Resend",
      "PostHog",
      "Vercel",
    ],
    problem:
      "Visa rules are scattered across government and embassy sites and are hard to compare. Travellers want a clear answer for their passport, plus a plan for the trip.",
    whatIDid: [
      "Designed and built the product end to end: UI, API routes, database, AI workflows, payments and deployment.",
      "Visa checker dashboard driven by the passport-index dataset, with search, document checklists, a Schengen calculator, currency converter and cover-letter generator.",
      "Programmatic SEO: server-rendered guide pages for origin/destination country pairs, hub pages and a sitemap, revalidated weekly (ISR).",
      "AI content pipeline: scheduled GitHub Actions batch jobs generate structured visa guides with the Gemini API and store them in Supabase. Pairs are processed in a deterministic order, with rate limits tuned to the free-tier quotas.",
      "Trip planner: a multi-step wizard that collects preferences, generates itineraries with Gemini, and produces a PDF delivered by email.",
      "Payments: Razorpay order creation, signature-verified payment confirmation and webhooks for paid itineraries.",
      "PIN-protected admin dashboard for reviewing itinerary requests, plus a moderated community blog.",
      "Analytics with PostHog and Vercel Analytics, affiliate integrations, and a feedback flow via Resend.",
    ],
    decisions: [
      "Pre-generate guides instead of scraping government sites. Scraping at scale is fragile and often breaks terms of service, while a batch AI pipeline gives consistent, structured content that can be cached and indexed.",
      "Spread generation over scheduled batches sized to the model's rate limits, so cost stays near zero and quota errors don't take the pipeline down.",
      "Revalidate the programmatic pages weekly: content stays fresh without paying a rebuild cost on every request.",
    ],
    outcomes: [
      "A live production site with a programmatic guide system built to cover roughly 40,000 origin/destination pairs.",
    ],
    whyItMatters:
      "A full product, shipped and operated by one engineer: SEO at scale, an AI content pipeline, payments, email and analytics. It's the same loop I run for clients: scope it, build it, ship it, then tune it.",
  },
  {
    slug: "expense-tracker",
    title: "Deviza Expense Tracker",
    wip: true,
    category: "AI-powered SaaS (web + mobile)",
    emoji: "💰",
    whatItIs:
      "An expense tracker where you log spending in plain language, in the web app or on Telegram or WhatsApp, with a native mobile app in development. AI turns each message into categorised transactions.",
    liveUrl: "https://expenses.devizalabs.com",
    tech: [
      "Next.js",
      "React Native (Expo)",
      "TypeScript",
      "Supabase",
      "Gemini API",
      "Telegram & WhatsApp APIs",
      "Razorpay · Lemon Squeezy · RevenueCat",
      "Sentry",
      "pnpm monorepo",
    ],
    problem:
      "Expense apps make you fill in forms and pick categories, so people stop using them. This one lets you type \"coffee 200, lunch 500\" wherever you already are and handles the rest.",
    whatIDid: [
      "Architected a pnpm monorepo: a Next.js web app, an Expo React Native app, and shared packages for business logic and types, so web and mobile run the same code paths.",
      "Built the AI pipeline: natural language in, validated and de-duplicated transactions out, with recovery for truncated or malformed model output.",
      "Supabase for auth (email and Google OAuth), Postgres with row-level security, and SQL migrations that add atomic usage counters and webhook idempotency.",
      "Chat integrations: Telegram and WhatsApp webhooks with account linking.",
      "Subscriptions across three billing providers (Razorpay, Lemon Squeezy and RevenueCat for mobile), all via idempotent, signature-verified webhooks.",
      "Versioned REST API with bearer-token auth and per-user rate limiting (Upstash) for the mobile client.",
      "Mobile app (in development, Expo): offline-first writes queue in an on-device SQLite outbox and replay in order when the connection returns.",
      "Dashboards and insights: charts, budgets, recurring transactions, collections, AI insight summaries, export, installable PWA. Sentry for error tracking, Vitest tests and GitHub Actions CI.",
    ],
    decisions: [
      "Extracted the AI parsing into one shared package after finding that the Telegram copy of the logic had silently diverged. It returned only one transaction when a user sent several, and raised no error. One implementation means web, chat and mobile can't drift.",
      "Kept the Gemini key behind a server endpoint, so it never reaches a client, while mobile reads and writes its own data directly through Supabase with RLS as the safety net.",
      "Only queue offline the writes that are safe to replay (edits and collection changes on rows the user owns). Anything gated by a server-side quota check, like AI parsing, shows \"you're offline\" instead of queueing.",
    ],
    outcomes: [
      "A production-hardened web app with chat bots and subscription billing, built on shared business logic that the in-development mobile app reuses.",
    ],
    whyItMatters:
      "A multi-platform SaaS with real money flowing through it: auth, billing, AI, webhooks, offline sync and an API. This is what 'give me the problem and I'll ship the thing' looks like.",
  },
  {
    slug: "compete",
    title: "Compete",
    category: "Data aggregation platform",
    emoji: "🏆",
    whatItIs:
      "A race-discovery platform for India: runners and endurance athletes browse upcoming running, cycling, triathlon, Ironman and Hyrox events in one place, with a curator dashboard behind it.",
    liveUrl: "https://compete.devizalabs.com",
    tech: [
      "Next.js",
      "TypeScript",
      "Drizzle ORM",
      "Postgres (Supabase)",
      "Auth.js",
      "Zod",
      "Resend",
      "Tailwind + shadcn/ui",
      "Framer Motion",
      "Vercel",
    ],
    problem:
      "Race listings for Indian running and endurance events are spread across organiser sites, social posts and registration platforms. Compete collects them into one browsable, searchable, always-current source.",
    whatIDid: [
      "Designed the system end to end: data model, API, public site, admin dashboard and deployment.",
      "Public site: browsable race lists per sport, filters, race detail pages with distances, pricing, schedules and registration status, and SEO with dynamic OpenGraph images.",
      "Human-in-the-loop pipeline: scheduled AI routines run daily by region, search for races and post verified candidates through a bearer-token API. A second daily routine re-checks approved races against their live pages and flags changes. A curator reviews everything in an admin dashboard (pending, approved, rejected, needs review, unreachable, past).",
      "Postgres schema with Drizzle: races, categories, editions, schedule items, sources, edits, subscribers, alert deliveries and sponsor requests, managed with versioned migrations.",
      "Admin: Auth.js-protected, with approval workflow, race editing, duplicate detection and merging, analytics and subscriber management.",
      "Email alerts for subscribers through Resend, and click and view tracking for organisers and sponsors.",
      "Sponsored and featured placements, with a sponsor request form feeding the dashboard.",
    ],
    decisions: [
      "Drizzle over Prisma for plain-SQL performance and no query-engine cold start on serverless.",
      "AI proposes, a human approves: nothing from the discovery routine goes public until reviewed. The rules for it are strict (never guess; omit unknown fields), so data quality stays high.",
      "Kept the discovery logic outside the web app. The app only exposes the API that receives results, so the routines can change without touching the product. Pages that change or go dead are flagged for human review rather than silently updated.",
    ],
    outcomes: [
      "A live product covering five sports with a working curation pipeline and monetisation hooks (sponsorships and featured listings).",
    ],
    whyItMatters:
      "Shows I can build a two-sided data product: a public site for users, an operational back office for a curator, and an API for an AI pipeline, designed around data quality, not just UI.",
  },
];

export const OTHER_WORK = [
  {
    title: "House of 30ML",
    blurb:
      "Bar-hopping platform live in Pune. Architected the full frontend (React Native + React web) working directly with the founder.",
    liveUrl: "https://www.houseof30ml.in/",
  },
  {
    title: "Technomanagers.in",
    blurb:
      "Migrated a Lovable-built site to Next.js with an SEO overhaul: structured data, sitemap, OG images and Core Web Vitals work.",
    liveUrl: "https://technomanagers.in",
  },
];

/**
 * Production only lists case studies whose "what it is" line is real,
 * so a half-written case study never goes live. Dev shows everything.
 */
export const PUBLISHED_STUDIES = CASE_STUDIES.filter(
  (c) => process.env.NODE_ENV !== "production" || !isTodo(c.whatItIs),
);

export const getCaseStudy = (slug: string) =>
  PUBLISHED_STUDIES.find((c) => c.slug === slug);

/** Strip TODO placeholders before data crosses to the client (production only). */
export function sanitize(c: CaseStudy): CaseStudy {
  if (process.env.NODE_ENV !== "production") return c;
  const keep = (a: string[]) => a.filter((s) => !isTodo(s));
  const one = (s: string) => (isTodo(s) ? "" : s);
  return {
    ...c,
    category: one(c.category),
    problem: one(c.problem),
    whyItMatters: one(c.whyItMatters),
    whatIDid: keep(c.whatIDid),
    decisions: keep(c.decisions),
    outcomes: keep(c.outcomes),
  };
}
