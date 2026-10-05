import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Contact from "@/components/Contact";
import { OWN_PRODUCTS, CLIENT_WORK, caseStudyPath } from "@/data/caseStudies";
import { SERVICE_PAGES } from "@/data/services";
import { pageMetadata } from "@/lib/site";
import { JsonLd, siteGraph, breadcrumbSchema, faqSchema, professionalServiceSchema } from "@/lib/jsonld";
import { Section, SectionHeading, PageHero, ButtonLink, Card, BulletList, Pill, FaqList } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Part-time Freelance React & Next.js Developer",
  description:
    "Senior product engineering without another full-time hire. Technical Lead at Myntra taking on a few part-time React, Next.js and React Native projects.",
  path: "/freelance",
});

const HELP: { title: string; body: string; href: string; cta?: string }[] = [
  { title: "Product development", body: "Build production-ready web products, SaaS applications and MVPs.", href: "/nextjs-developer" },
  { title: "React / Next.js engineering", body: "Build new features, applications, migrations and frontend architecture.", href: "/react-developer" },
  { title: "React Native", body: "Build or extend cross-platform mobile applications.", href: "/react-native-developer" },
  { title: "AI-powered products", body: "Integrate AI workflows, APIs and AI-driven product experiences.", href: "/nextjs-developer" },
  { title: "Performance engineering", body: "Improve Core Web Vitals, rendering performance, bundle size and frontend architecture.", href: "/performance" },
  { title: "Technical consulting", body: "Architecture reviews, frontend modernisation and technical direction.", href: "#contact", cta: "Discuss it" },
];

const TYPICAL = [
  "Feature development",
  "MVP and product development",
  "Frontend architecture",
  "Next.js migration",
  "Performance optimisation",
  "AI integrations",
  "React Native development",
];

const WHY = [
  { title: "Technical Lead at Myntra", body: "I own the frontend for core consumer pages in React and React Native. I bring the same standards to the projects I take on." },
  { title: "I ship my own products", body: "TravelVisaStack, Deviza Expense Tracker and Compete are live, built by me from idea to production: auth, billing, AI, SEO and deployment included." },
  { title: "Ownership, not tickets", body: "I'd rather own a feature from scoping to production than be handed isolated tasks." },
  { title: "Part-time, by design", body: "You get senior capacity for the work in front of you, without another full-time hire. I work around my role at Myntra and keep my client list small." },
];

const PROCESS = [
  { n: "01", title: "Discovery call", body: "30 minutes. You describe the problem; I tell you honestly whether I'm the right person." },
  { n: "02", title: "Scoped proposal", body: "Clear deliverables, timeline and price before any work starts." },
  { n: "03", title: "Build and ship", body: "Regular demos, working software early, production deployment included." },
];

const TECH = [
  "React", "Next.js", "React Native", "Expo", "TypeScript", "Node.js", "Tailwind CSS", "Supabase", "Postgres", "Drizzle ORM", "Auth.js",
  "MongoDB", "GoLang", "Vercel", "Gemini API", "Razorpay", "Resend",
];

const FAQ = [
  { q: "Do you take full-time roles?", a: "No. I work full-time as a Technical Lead at Myntra and take on a small number of part-time freelance and contract engagements." },
  { q: "What technologies do you work with?", a: "React, Next.js, React Native and TypeScript are my core stack, with Node.js, Postgres, MongoDB and Supabase on the backend side. I also integrate AI APIs such as Gemini into products." },
  { q: "Do you work with startups?", a: "Yes. Startups, SaaS and AI companies are who I most want to work with: small teams that need senior engineering capacity without another full-time hire." },
  { q: "Can you take ownership of an entire feature?", a: "Yes. That's the engagement I'm best at: scoping, building, shipping and following through, rather than closing isolated tickets." },
  { q: "Can you work remotely with international teams?", a: "Yes. I'm based in Bengaluru, India, and available for remote part-time engagements worldwide." },
  { q: "Do you work on existing products or only new products?", a: "Both. I work in existing, large codebases every day, and I build new products from scratch under Deviza Labs." },
];

export default function FreelancePage() {
  return (
    <>
      <JsonLd
        data={siteGraph(
          professionalServiceSchema,
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Freelance", path: "/freelance" }]),
          faqSchema(FAQ),
        )}
      />

      <PageHero>
        <p className="mb-4 text-sm font-semibold text-primary">Technical Lead at Myntra · Part-time engagements</p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Senior product engineering, <span className="text-primary">without another full-time hire.</span>
        </h1>
        <p className="mb-4 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          I&apos;m a Technical Lead at Myntra and take on a small number of part-time product engineering
          engagements through Deviza Labs.
        </p>
        <p className="mb-8 max-w-3xl leading-relaxed text-muted-foreground">
          React, Next.js and React Native, for startups, SaaS and AI companies. Available for remote
          part-time engagements worldwide. I&apos;m not available for full-time roles.
        </p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#contact">
            Start a project <ArrowRight size={16} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="#work" variant="secondary">See what I&apos;ve shipped</ButtonLink>
        </div>
      </PageHero>

      <Section tone="muted" id="help">
        <SectionHeading title="What I can help with" sub="Each of these can be delivered as a part-time engagement." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HELP.map((h) => (
            <Card key={h.title} as="article">
              <h3 className="mb-2 font-bold text-foreground">{h.title}</h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              <Link href={h.href} className="inline-flex min-h-8 items-center gap-1 text-sm font-semibold text-primary hover:underline">
                {h.cta ?? "Learn more"} <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Typical engagements</h3>
          <ul className="flex flex-wrap gap-2">{TYPICAL.map((t) => (<li key={t}><Pill>{t}</Pill></li>))}</ul>
        </div>
      </Section>

      <Section id="work">
        <SectionHeading title="Selected work" sub="Products I built and shipped myself. Open the live site and judge for yourself." />
        <div className="space-y-5">
          {OWN_PRODUCTS.map((c) => (
            <Card key={c.slug} as="article" className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                  {c.category}
                  {c.wip && <span className="ml-3 rounded-full border border-[var(--amber-border)] bg-[var(--amber-bg)] px-2 py-0.5 text-[10px] text-[var(--amber)]">WIP</span>}
                </p>
                <h3 className="mb-2 text-xl font-bold"><span aria-hidden="true">{c.emoji}</span> {c.title}</h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">{c.whatItIs}</p>
                <p className="text-xs text-muted-foreground">{c.tech.join(" · ")}</p>
              </div>
              <div className="flex flex-wrap gap-3 md:flex-col">
                <ButtonLink href={c.liveUrl} external className="!py-2.5">View live</ButtonLink>
                <ButtonLink href={caseStudyPath(c.slug)} variant="secondary" className="!py-2.5">Case study</ButtonLink>
              </div>
            </Card>
          ))}
        </div>
        <p className="mb-3 mt-10 text-sm text-muted-foreground">Also built for clients</p>
        <div className="grid gap-4 md:grid-cols-3">
          {CLIENT_WORK.map((w) => (
            <Card key={w.title} as="article" className="!p-5">
              <h3 className="mb-1 font-semibold text-foreground">{w.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{w.whatIDid}</p>
              {w.caseStudy && (
                <Link href={w.caseStudy} className="mt-3 inline-flex min-h-8 items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Case study <ArrowRight size={14} aria-hidden="true" />
                </Link>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title="Why work with me" />
        <div className="grid gap-5 sm:grid-cols-2">
          {WHY.map((w) => (
            <Card key={w.title} as="article">
              <h3 className="mb-2 font-bold text-foreground">{w.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="How engagements work" sub="Part-time alongside my role at Myntra: a few engagements at a time, so each gets proper attention." />
        <ol className="grid gap-8 md:grid-cols-3">
          {PROCESS.map((p) => (
            <li key={p.n}>
              <span className="mb-3 block text-5xl font-extrabold text-primary" aria-hidden="true">{p.n}</span>
              <h3 className="mb-2 font-bold text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 max-w-3xl">
          <BulletList items={["Remote, worldwide.", "Project, contract or consulting: we agree what fits your situation on the discovery call."]} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title="Technologies" />
        <ul className="mb-8 flex flex-wrap gap-2">{TECH.map((t) => (<li key={t}><Pill>{t}</Pill></li>))}</ul>
        <p className="text-sm text-muted-foreground">
          Looking for something specific?{" "}
          {SERVICE_PAGES.map((s, i) => (
            <span key={s.slug}>
              {i > 0 && " · "}
              <Link href={s.path} className="font-medium text-primary hover:underline">{s.metaTitle}</Link>
            </span>
          ))}
        </p>
      </Section>

      <Section>
        <SectionHeading title="FAQ" />
        <div className="max-w-3xl"><FaqList items={FAQ} /></div>
        <p className="mt-6 text-sm text-muted-foreground">
          Want to see the day job first? <Link href="/#experience" className="font-medium text-primary hover:underline">My experience at Myntra <ArrowUpRight size={12} className="inline" aria-hidden="true" /></Link>
        </p>
      </Section>

      <Contact />
    </>
  );
}
