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
    category: "AI travel product",
    emoji: "✈️",
    whatItIs:
      "An AI-powered visa requirements checker and trip itinerary generator, built under Deviza Labs.",
    liveUrl: "https://travelvisastack.com",
    tech: ["Next.js", "TypeScript", "LLM integration", "Structured data SEO"],
    problem:
      "TODO: Who is it for and what was painful about checking visa rules / planning trips before this existed?",
    whatIDid: [
      "Built the product with Next.js and TypeScript, including LLM integration for itineraries.",
      "Implemented structured data and SEO for discoverability.",
      "TODO: Architecture & rendering strategy (SSR/ISR/static, API routes)",
      "TODO: Data source for visa rules and how you keep it accurate",
      "TODO: Prompting / guardrails / cost control for the LLM",
      "TODO: Deployment, analytics, monitoring",
    ],
    decisions: [
      "TODO: One decision you'd defend (e.g. why this LLM, why this rendering mode) and the trade-off.",
    ],
    outcomes: [
      "TODO: Real numbers: traffic, indexed pages, Lighthouse scores, time to ship. Skip if you don't have them.",
    ],
    whyItMatters:
      "Shipped an AI product end to end, from idea to a live, indexable site, as one person. That's the same loop I run for clients: scope it, build it, ship it, then tune it.",
  },
  {
    slug: "expense-tracker",
    title: "Deviza Expense Tracker",
    category: "LLM-powered chat product",
    emoji: "💰",
    whatItIs:
      "An LLM-based expense parser that takes natural-language messages via Telegram and WhatsApp, with no manual categorisation.",
    liveUrl: "https://expenses.devizalabs.com",
    tech: ["Node.js", "LLM", "Telegram Bot", "WhatsApp API"],
    problem:
      "TODO: Why are expense apps annoying to use, and what does 'just send a message' fix?",
    whatIDid: [
      "Designed an LLM pipeline that turns free-text messages into structured, categorised expenses.",
      "Integrated Telegram and WhatsApp as the input channels.",
      "TODO: Backend, database and auth choices",
      "TODO: What the web app at expenses.devizalabs.com does vs. the chat bots",
      "TODO: Handling ambiguous or wrong parses",
      "TODO: Deployment & hosting",
    ],
    decisions: [
      "TODO: e.g. why chat-first instead of a form-first app; how you validate LLM output before saving it.",
    ],
    outcomes: [
      "TODO: Parse accuracy, number of users, time saved. Only real numbers.",
    ],
    whyItMatters:
      "Shows I can wire an LLM into a real workflow with third-party messaging APIs, not just bolt a chatbot onto a landing page.",
  },
  {
    slug: "compete",
    title: "Compete",
    category: "TODO: product category",
    emoji: "🏆",
    whatItIs: "TODO: One sentence on what compete.devizalabs.com is and who uses it.",
    liveUrl: "https://compete.devizalabs.com",
    tech: [],
    problem: "TODO: The problem it solves.",
    whatIDid: [
      "TODO: Architecture",
      "TODO: Frontend",
      "TODO: Backend / API",
      "TODO: Auth & database",
      "TODO: Deployment & analytics",
    ],
    decisions: ["TODO: A decision and its trade-off."],
    outcomes: ["TODO: Real outcomes."],
    whyItMatters: "TODO: What this project proves about how you work.",
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
