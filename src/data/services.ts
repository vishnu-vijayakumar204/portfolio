/**
 * Service landing pages. Every claim here is drawn from work already shown on the
 * site (Myntra, Codingmart, the three own products, client work). Don't add numbers
 * or clients that aren't in src/data/caseStudies.ts or the Experience section.
 */

export interface ServicePage {
  slug: string;
  path: string;
  /** <title> (the site suffix is added automatically). */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  build: { title: string; body: string }[];
  when: string[];
  experience: { title: string; body: string }[];
  /** Approach section, for pages where how I work matters more than what I build. */
  approach?: { title: string; steps: { title: string; body: string }[] };
  caseStudies: string[];
  tech: string[];
  faq: { q: string; a: string }[];
  related: string[];
}

const FULL_TIME_FAQ = {
  q: "Do you take full-time roles?",
  a: "No. I work full-time as a Technical Lead at Myntra and take on a small number of part-time freelance and contract engagements alongside that.",
};

const REMOTE_FAQ = {
  q: "Can you work remotely with international teams?",
  a: "Yes. I'm based in Bengaluru, India, and available for remote part-time engagements worldwide.",
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "react-developer",
    path: "/react-developer",
    metaTitle: "Senior React Developer for Startups",
    metaDescription:
      "Senior React developer and Technical Lead at Myntra, available part-time. Product features, SaaS dashboards and frontend architecture for startups.",
    eyebrow: "React · Part-time engagements",
    h1: "Senior React developer for startups and product teams",
    intro:
      "I'm a Technical Lead at Myntra, where I own the frontend of core consumer pages in React. Alongside that I take on a small number of part-time React engagements: a feature your team doesn't have the bandwidth for, a product that needs a senior pair of hands, or an architecture that needs straightening out.",
    build: [
      {
        title: "Features, owned end to end",
        body: "A feature scoped, built, tested and shipped, not a stack of PRs handed back for you to integrate.",
      },
      {
        title: "SaaS dashboards and web apps",
        body: "Data-heavy interfaces: charts, budgets, search, filters, admin and curator back offices. The kind of screens I built for my own products.",
      },
      {
        title: "Component architecture",
        body: "Shared component libraries and state patterns that let a small team ship faster without the codebase turning into a tangle.",
      },
      {
        title: "Integrations",
        body: "Payments, auth, third-party APIs and webhooks wired into the frontend properly, including the unglamorous failure cases.",
      },
    ],
    when: [
      "You have a product and a roadmap, but not enough senior frontend capacity to hit it.",
      "You need someone to own a feature or a module, not just take tickets.",
      "Your React codebase has grown messy and you want an experienced second opinion, then help fixing it.",
      "You're taking a prototype to something you can put in front of paying users.",
    ],
    experience: [
      {
        title: "Myntra: Technical Lead",
        body: "Owning the frontend of the home, SIS, PLP and PDP pages across the Myntra app, mobile web and internal tooling. Built Algorithmic Store (page deployment cycle cut from 1 month to 2 days) and the Federator UI for real-time content configuration with audience targeting.",
      },
      {
        title: "Codingmart: Product Engineer",
        body: "Built a reusable React component library with ContextAPI that sped up feature delivery across 3+ products for early-stage startups in SaaS, fintech and e-commerce.",
      },
      {
        title: "Own products under Deviza Labs",
        body: "A web dashboard for an AI-powered expense tracker, a visa-checker dashboard, and a curator admin for a race-discovery platform, all shipped by me end to end.",
      },
    ],
    caseStudies: ["expense-tracker", "compete"],
    tech: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "Framer Motion", "Razorpay", "Supabase"],
    faq: [
      FULL_TIME_FAQ,
      {
        q: "Can you take ownership of an entire feature?",
        a: "Yes, and that's the engagement I'm best at. I'd rather own a feature from scoping to production than be handed isolated tickets.",
      },
      {
        q: "Do you work on existing products or only new ones?",
        a: "Both. I work in existing, large codebases every day and I build new products from scratch under Deviza Labs.",
      },
      {
        q: "What else do you work with besides React?",
        a: "TypeScript, Next.js, React Native, Node.js and Tailwind CSS on the frontend side, plus Postgres or MongoDB and Supabase when a project needs a backend.",
      },
      REMOTE_FAQ,
    ],
    related: ["nextjs-developer", "react-native-developer", "performance"],
  },
  {
    slug: "nextjs-developer",
    path: "/nextjs-developer",
    metaTitle: "Senior Next.js Developer for Startups",
    metaDescription:
      "Senior Next.js developer for startups, available part-time. SaaS and AI products, App Router builds, ISR and programmatic SEO, and migrations to Next.js.",
    eyebrow: "Next.js · Part-time engagements",
    h1: "Senior Next.js developer for startups",
    intro:
      "I've shipped Next.js products of my own, from a programmatic-SEO visa site to an AI expense tracker to a race-discovery platform with an admin back office, and I migrated a client site from Lovable to Next.js. If you need a Next.js build, feature or migration done properly, I take on a small number of part-time engagements alongside my role as Technical Lead at Myntra.",
    build: [
      {
        title: "SaaS and product sites",
        body: "Server-rendered apps with auth, a database, billing and an admin side, deployed on Vercel.",
      },
      {
        title: "Programmatic SEO with ISR",
        body: "Large sets of server-rendered pages generated from data and revalidated on a schedule, the way TravelVisaStack does for country-pair visa guides.",
      },
      {
        title: "AI features done safely",
        body: "Model calls behind server endpoints so keys never reach the client, with validated, structured output and handling for malformed responses.",
      },
      {
        title: "Migrations to Next.js",
        body: "Moving a client-rendered or generator-built site onto Next.js, with metadata, structured data, sitemap and Core Web Vitals handled as part of the move.",
      },
    ],
    when: [
      "You're building an MVP or SaaS product and want a senior engineer to set the architecture and ship the first version.",
      "Your site is a client-side app that search engines and social previews handle badly.",
      "You want pages that are generated from data, indexable and fast, not hand-built one at a time.",
      "You're adding AI features and want the integration to be secure, bounded and maintainable.",
    ],
    experience: [
      {
        title: "TravelVisaStack",
        body: "Next.js, Supabase and the Gemini API. Server-rendered guide pages for origin/destination pairs, revalidated weekly with ISR, designed to cover roughly 40,000 pairs. Also paid itineraries with Razorpay and PDF email delivery.",
      },
      {
        title: "Compete",
        body: "Next.js, Drizzle, Postgres and Auth.js. A public race-discovery site plus a curator dashboard, and an API that an AI discovery pipeline posts candidates to for human review.",
      },
      {
        title: "Technomanagers.in",
        body: "A client site migrated from Lovable to Next.js, with structured data, sitemap, robots, OG images and Core Web Vitals work.",
      },
    ],
    caseStudies: ["travelvisastack", "compete", "technomanagers-nextjs-migration"],
    tech: ["Next.js (App Router)", "TypeScript", "Supabase", "Postgres", "Drizzle ORM", "Auth.js", "Zod", "Tailwind CSS", "Vercel", "Resend", "Razorpay"],
    faq: [
      FULL_TIME_FAQ,
      {
        q: "Do you work with startups?",
        a: "Yes. Startups, SaaS and AI companies are who I most want to work with: small teams that need senior engineering capacity without another full-time hire.",
      },
      {
        q: "When is Next.js the right choice over a plain React app?",
        a: "When pages need to be indexed or shared (SEO, previews), when first-load speed matters, or when you want server rendering, API routes and a single deployment. For an internal tool behind a login, plain React is often enough, and I'll tell you so.",
      },
      {
        q: "Can you migrate an existing app to Next.js?",
        a: "Yes. I've migrated a client site from Lovable to Next.js, including the SEO groundwork. I'd start by looking at what you have and what actually needs to change.",
      },
      REMOTE_FAQ,
    ],
    related: ["seo-nextjs", "performance", "react-developer"],
  },
  {
    slug: "react-native-developer",
    path: "/react-native-developer",
    metaTitle: "React Native Developer for Cross-Platform Apps",
    metaDescription:
      "React Native developer with production experience at Myntra, available part-time. Build or extend iOS and Android apps with offline-first features.",
    eyebrow: "React Native · Part-time engagements",
    h1: "React Native developer for iOS and Android apps",
    intro:
      "React Native is part of my day job as a Technical Lead at Myntra and of my own products. I take on a small number of part-time engagements to build a new cross-platform app or to add screens and features to an existing one.",
    build: [
      {
        title: "New cross-platform apps",
        body: "iOS and Android from one codebase, with a native feel and a sensible path to the stores.",
      },
      {
        title: "Features in existing apps",
        body: "New screens, flows and modules added to a React Native codebase you already have, including bridging web modules into the app with a webview.",
      },
      {
        title: "Offline-first behaviour",
        body: "Local storage and a write queue that replays when the connection returns, with clear rules for what is safe to queue.",
      },
      {
        title: "Shared logic across web and mobile",
        body: "A monorepo with shared packages, so the business rules behind your web app and your mobile app are one implementation, not two that drift.",
      },
    ],
    when: [
      "You want an iOS and Android app without maintaining two native codebases.",
      "Your existing React Native app needs a senior engineer for a feature or a hard problem.",
      "You already have a web product and need a mobile companion that shares its logic.",
      "You need an app that behaves well on a poor connection.",
    ],
    experience: [
      {
        title: "Myntra: Mnow",
        body: "Led the React Native and web frontend for Myntra's hyperlocal 2-hour delivery product, implementing lazy loading on product racks, which resolved SLA discrepancies and improved FCP/LCP.",
      },
      {
        title: "House of 30ML",
        body: "Architected the entire frontend (React Native and React web) for a bar-hopping platform live in Pune, working directly with the founder.",
      },
      {
        title: "Fanspace",
        body: "Built the Display page for an Indian e-sports fan engagement platform and bridged website modules into the app with a webview. React Native and MobX.",
      },
      {
        title: "Deviza Expense Tracker (in development)",
        body: "An Expo React Native app on a pnpm monorepo that shares business logic with the web app. Offline writes queue in an on-device SQLite outbox and replay in order. Still in development.",
      },
    ],
    caseStudies: ["expense-tracker"],
    tech: ["React Native", "Expo", "TypeScript", "MobX", "SQLite", "Supabase", "RevenueCat", "Sentry"],
    faq: [
      FULL_TIME_FAQ,
      {
        q: "Can you extend an existing React Native app?",
        a: "Yes. A lot of my React Native work is inside existing, large codebases, adding features and screens rather than starting from zero.",
      },
      {
        q: "Do you build the web app as well?",
        a: "Yes. I work across React, Next.js and React Native, and I'm happiest when web and mobile share logic.",
      },
      {
        q: "Do you work on existing products or only new products?",
        a: "Both. I'd start by reading your codebase and telling you honestly what I'd change and what I'd leave alone.",
      },
      REMOTE_FAQ,
    ],
    related: ["react-developer", "nextjs-developer"],
  },
  {
    slug: "performance",
    path: "/performance",
    metaTitle: "React & Next.js Performance Engineering",
    metaDescription:
      "Core Web Vitals, FCP/LCP and bundle-size work for React and Next.js apps, from a Technical Lead who does it at Myntra scale. Available part-time.",
    eyebrow: "Performance · Part-time engagements",
    h1: "React and Next.js performance engineering",
    intro:
      "Improving FCP, LCP and Core Web Vitals on high-traffic consumer pages is a core part of my role as Technical Lead at Myntra. I take on a small number of part-time engagements to find out why your React or Next.js app is slow and fix the parts that matter.",
    build: [
      {
        title: "Core Web Vitals audits",
        body: "Measure first with Lighthouse and real-user data where you have it, so effort goes to what hurts users, not to what's easy to change.",
      },
      {
        title: "Rendering and loading strategy",
        body: "What should be server-rendered, static, revalidated or lazy-loaded, and when. Often the biggest win and a cheap one.",
      },
      {
        title: "Bundle and image work",
        body: "Bundle analysis, code splitting, lazy loading and image optimisation. Most slow pages are shipping more JavaScript and bigger images than they need.",
      },
      {
        title: "Frontend architecture that stays fast",
        body: "Patterns and guardrails so performance doesn't regress the next time someone adds a feature.",
      },
    ],
    when: [
      "Your Lighthouse or Search Console Core Web Vitals report is red and you don't know where to start.",
      "A key page, such as a product page, landing page or listing, loads noticeably slowly.",
      "Your bundle has grown over time and nobody owns it.",
      "You're about to invest in SEO and want the performance foundation right first.",
    ],
    approach: {
      title: "How an engagement runs",
      steps: [
        { title: "Measure", body: "Baseline the pages that matter, on realistic devices and networks." },
        { title: "Diagnose", body: "Find the actual bottlenecks: render path, bundle, images, third-party scripts, layout shifts." },
        { title: "Fix the highest-impact items", body: "Implement the changes with your team, or hand over a prioritised list if you'd rather do it in-house." },
        { title: "Re-measure", body: "Confirm the numbers moved, and leave guardrails behind." },
      ],
    },
    experience: [
      {
        title: "Myntra: Mnow",
        body: "Implemented lazy loading on product racks for the hyperlocal 2-hour delivery product, resolving SLA discrepancies and improving FCP/LCP.",
      },
      {
        title: "Myntra: consumer surfaces",
        body: "Drove FCP, LCP and Core Web Vitals improvements across Myntra's consumer surfaces.",
      },
      {
        title: "Technomanagers.in",
        body: "Core Web Vitals work as part of a migration from Lovable to Next.js, alongside the SEO overhaul.",
      },
    ],
    caseStudies: ["technomanagers-nextjs-migration"],
    tech: ["React", "Next.js", "Lighthouse", "Core Web Vitals", "Bundle analysis", "Lazy loading", "Image optimisation", "ISR / SSR"],
    faq: [
      FULL_TIME_FAQ,
      {
        q: "Can you guarantee a Lighthouse score?",
        a: "No, and be wary of anyone who does. Scores depend on your content, third-party scripts and devices. I can promise to measure properly, fix the biggest causes first and show you the before and after.",
      },
      {
        q: "Do you only work on Next.js?",
        a: "No. I work on React apps generally, including client-rendered ones, and on React Native performance.",
      },
      {
        q: "Can you work with my team rather than alone?",
        a: "Yes. I'm used to leading a team. I can pair with your engineers, or hand over a prioritised plan.",
      },
      REMOTE_FAQ,
    ],
    related: ["seo-nextjs", "nextjs-developer"],
  },
  {
    slug: "seo-nextjs",
    path: "/seo-nextjs",
    metaTitle: "Next.js SEO and Migrations",
    metaDescription:
      "Technical SEO engineering for Next.js: migrations from client-rendered sites, metadata, structured data, sitemaps and programmatic pages. Available part-time.",
    eyebrow: "Next.js SEO · Part-time engagements",
    h1: "Next.js SEO: migrations, structured data and technical foundations",
    intro:
      "I do the engineering side of SEO: making a site crawlable, fast, correctly described to search engines and shareable. I've done it for a client migration and for my own programmatic-SEO product. I take on a small number of part-time engagements alongside my role as Technical Lead at Myntra.",
    build: [
      {
        title: "Migration to Next.js",
        body: "Moving a client-rendered or generator-built site onto Next.js, with the SEO groundwork done as part of the move rather than afterwards.",
      },
      {
        title: "Metadata, canonicals and social previews",
        body: "Titles, descriptions, canonical URLs, Open Graph and Twitter cards, including generated OG images.",
      },
      {
        title: "Structured data, sitemaps and robots",
        body: "Valid JSON-LD for the page types you have, a sitemap that matches your real URLs, and a robots file that does what you intend.",
      },
      {
        title: "Programmatic pages at scale",
        body: "Server-rendered pages generated from data, with hub pages, a sitemap and scheduled revalidation, so a large catalogue stays fresh and indexable.",
      },
    ],
    when: [
      "Your site was built with a generator or as a client-side app and isn't getting the visibility it should.",
      "You're moving to Next.js and want SEO treated as part of the migration, not an afterthought.",
      "You have, or could generate, a large set of data-driven pages and want them indexable.",
      "You want an engineer, not an agency deck, to fix the technical issues an SEO audit found.",
    ],
    experience: [
      {
        title: "Technomanagers.in",
        body: "Migrated a Lovable-built client site to Next.js with an SEO overhaul: structured data, sitemap, robots, og:image and Core Web Vitals work.",
      },
      {
        title: "TravelVisaStack",
        body: "Programmatic SEO: server-rendered guide pages for origin/destination country pairs, hub pages and a sitemap, revalidated weekly with ISR. Built to cover roughly 40,000 pairs.",
      },
      {
        title: "Compete",
        body: "Race detail pages and per-sport browse pages with dynamic OpenGraph images.",
      },
    ],
    caseStudies: ["technomanagers-nextjs-migration", "travelvisastack"],
    tech: ["Next.js (App Router)", "TypeScript", "JSON-LD / schema.org", "Sitemaps & robots", "Open Graph", "ISR", "Core Web Vitals"],
    faq: [
      FULL_TIME_FAQ,
      {
        q: "Can you guarantee rankings?",
        a: "No. Rankings depend on content, competition and links, none of which I control. What I do is the technical side: crawlability, speed, metadata, structured data and migrations done without losing what you already have.",
      },
      {
        q: "Do you do content strategy or link building?",
        a: "No. I'm an engineer. If you need those, I'm happy to work alongside whoever does them.",
      },
      {
        q: "Will a migration hurt my existing rankings?",
        a: "It can if it's careless. URLs, redirects, metadata and structured data all need to be carried across deliberately, which is why I treat SEO as part of the migration plan.",
      },
      REMOTE_FAQ,
    ],
    related: ["nextjs-developer", "performance"],
  },
];

export const getServicePage = (slug: string) => SERVICE_PAGES.find((s) => s.slug === slug);
