import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONTACT_HREF } from "@/components/ui";

const SERVICES = [
  {
    icon: "🚀",
    title: "Product Development",
    description: "Build production-ready web products, SaaS applications and MVPs.",
    highlights: ["MVPs", "SaaS", "End to end"],
    href: "/nextjs-developer",
  },
  {
    icon: "⚛️",
    title: "React / Next.js Engineering",
    description:
      "Build new features, applications, migrations and frontend architecture. Next.js migrations include the SEO groundwork: structured data, sitemaps, OG tags.",
    highlights: ["Features", "Migrations", "Architecture"],
    href: "/react-developer",
  },
  {
    icon: "📱",
    title: "React Native",
    description: "Build or extend cross-platform mobile applications, from greenfield apps to new screens in an existing codebase.",
    highlights: ["iOS & Android", "Greenfield & brownfield"],
    href: "/react-native-developer",
  },
  {
    icon: "✨",
    title: "AI-Powered Products",
    description: "Integrate AI workflows, APIs and AI-driven product experiences, shipped as real products rather than demos.",
    highlights: ["LLM integrations", "AI workflows"],
    href: "/nextjs-developer",
  },
  {
    icon: "⚡",
    title: "Performance Engineering",
    description:
      "Improve Core Web Vitals, rendering performance, bundle size and frontend architecture. Backed by real Myntra-scale experience improving FCP and LCP.",
    highlights: ["Core Web Vitals", "Bundle size", "Rendering"],
    href: "/performance",
  },
  {
    icon: "🧭",
    title: "Technical Consulting",
    description: "Architecture reviews, frontend modernisation and technical direction.",
    highlights: ["Architecture reviews", "Modernisation"],
    href: CONTACT_HREF,
    cta: "Discuss it",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      style={{ backgroundColor: "color-mix(in srgb, var(--muted) 50%, var(--background))" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
            How I can <span className="text-primary">help</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            All of it can be delivered as a part-time engagement, alongside my role as Technical Lead at Myntra.
          </p>
        </div>

        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc) => (
            <article
              key={svc.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="text-3xl" aria-hidden="true">{svc.icon}</span>
              <h3 className="text-lg font-bold leading-tight text-foreground">{svc.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{svc.description}</p>
              <ul className="flex flex-wrap gap-2">
                {svc.highlights.map((h) => (
                  <li key={h} className="rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{h}</li>
                ))}
              </ul>
              <Link href={svc.href} className="inline-flex min-h-8 items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                {svc.cta ?? "Learn more"} <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/10 px-6 py-10 text-center sm:px-8">
          <h3 className="mb-3 text-2xl font-extrabold text-foreground md:text-3xl">
            Need senior engineering capacity without another full-time hire?
          </h3>
          <p className="mx-auto mb-7 max-w-lg text-muted-foreground">
            I take on a small number of part-time freelance and contract projects. Tell me what you&apos;re building.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link href="#contact" data-track="cta_click" data-track-label="services-banner" className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Start a project
            </Link>
            <Link href="/freelance" className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-7 py-3 font-semibold text-foreground transition-colors hover:border-primary hover:text-primary">
              How engagements work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
