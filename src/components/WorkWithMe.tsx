"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Rocket,
  Layers,
  Gauge,
  Sparkles,
  Network,
} from "lucide-react";
import { PUBLISHED_STUDIES, OTHER_WORK, isTodo } from "@/data/caseStudies";

const EMAIL = "vishnu.vijayakumar204@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Project enquiry")}`;
const PRIMARY_BG = "var(--primary)";

const SERVICES = [
  {
    icon: Rocket,
    title: "Build an MVP",
    body: "From idea to production. Scope, architecture, build and launch, with a fixed scope you can plan around.",
  },
  {
    icon: Layers,
    title: "Build features",
    body: "Need someone to own a feature end to end rather than hand you a pile of PRs? That's the point.",
  },
  {
    icon: Gauge,
    title: "Improve an existing product",
    body: "Performance, architecture, UX and technical debt. Core Web Vitals work is something I do for a living.",
  },
  {
    icon: Sparkles,
    title: "AI-powered products",
    body: "LLM integrations, workflows and AI-enabled interfaces, shipped as real products rather than demos.",
  },
  {
    icon: Network,
    title: "React / Next.js architecture",
    body: "Technical direction, component architecture, rendering strategy and scalability.",
  },
];

const PROCESS = [
  { n: "01", title: "Discovery call", body: "30 minutes. You describe the problem; I tell you honestly whether I'm the right person." },
  { n: "02", title: "Fixed-scope proposal", body: "Clear deliverables, timeline and price before any work starts." },
  { n: "03", title: "Build & ship", body: "Regular demos, working software early, production deployment included." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

const reveal = {
  variants: fadeUp,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-60px" },
} as const;

function Heading({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <motion.div {...reveal} custom={0} className="mb-12">
      <h2
        className="text-3xl md:text-4xl font-extrabold mb-3"
      >
        {children}
      </h2>
      {sub && <p className="text-muted-foreground text-lg max-w-2xl">{sub}</p>}
    </motion.div>
  );
}

function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.a
      href={MAILTO}
      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-primary-foreground"
      style={{ background: PRIMARY_BG }}
      whileHover={{ scale: 1.05, boxShadow: "var(--shadow-lg)" }}
      whileTap={{ scale: 0.97 }}
    >
      <Mail size={16} /> {children}
    </motion.a>
  );
}

export default function WorkWithMe() {
  return (
    <div style={{ backgroundColor: "var(--background)" }}>
      {/* Hero */}
      <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 18%, transparent), transparent 65%)" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold mb-5"
            style={{ color: "var(--primary)" }}
          >
            Technical Lead at Myntra · Senior React / Next.js engineer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Need a senior engineer to{" "}
            <span className="text-primary">
              ship your product?
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-9 leading-relaxed"
          >
            I&apos;m a Technical Lead at Myntra, working in React and React Native at scale. On my own
            projects I build and ship with React, Next.js and React Native. I work with startups and
            businesses to build new products, ship complex features and improve existing applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <CtaButton>Book a discovery call</CtaButton>
            <a
              href="#work"
              className="px-7 py-3.5 rounded-full font-semibold text-foreground/80 hover:text-foreground transition-colors"
              style={{ border: "1px solid var(--border)" }}
            >
              See the products I&apos;ve shipped
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "color-mix(in srgb, var(--muted) 50%, var(--background))" }}>
        <div className="max-w-6xl mx-auto">
          <Heading sub="Ownership of the outcome, not just the ticket.">What I can help with</Heading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                {...reveal}
                custom={i}
                whileHover={{ y: -6 }}
                className="rounded-2xl p-6"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <s.icon size={22} style={{ color: "var(--primary)" }} className="mb-4" />
                <h3 className="font-bold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <Heading sub="Products I built and shipped myself. Open the live site and judge for yourself.">
            Selected work
          </Heading>
          <div className="space-y-6">
            {PUBLISHED_STUDIES.map((c, i) => (
              <motion.article
                key={c.slug}
                {...reveal}
                custom={0}
                whileHover={{ scale: 1.01 }}
                className="rounded-3xl p-8 md:p-10 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <span className="text-5xl font-extrabold text-muted-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>
                    {isTodo(c.category) ? "In progress" : c.category}
                    {c.wip && (
                      <span
                        className="ml-3 px-2 py-0.5 rounded-full text-[10px] font-semibold align-middle"
                        style={{
                          background: "color-mix(in srgb, var(--primary) 10%, transparent)",
                          color: "var(--primary)",
                          border: "1px solid color-mix(in srgb, var(--primary) 30%, transparent)",
                        }}
                      >
                        WIP
                      </span>
                    )}
                  </p>
                  <h3 className="text-2xl font-bold mb-2">
                    {c.emoji} {c.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">{c.whatItIs}</p>
                  {c.tech.length > 0 && (
                    <p className="text-xs text-muted-foreground">{c.tech.join(" · ")}</p>
                  )}
                </div>
                <div className="flex md:flex-col gap-3">
                  <a
                    href={c.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-primary-foreground"
                    style={{ background: PRIMARY_BG }}
                  >
                    View live <ArrowUpRight size={14} />
                  </a>
                  <Link
                    href={`/work/${c.slug}`}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    Case study
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div {...reveal} custom={0} className="mt-12">
            <p className="text-sm text-muted-foreground mb-3">Also built for clients</p>
            <div className="flex flex-wrap gap-4">
              {OTHER_WORK.map((w) => (
                <a
                  key={w.title}
                  href={w.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl p-5 max-w-sm transition-colors hover:bg-muted"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <span className="font-semibold text-foreground inline-flex items-center gap-1.5">
                    {w.title}
                    <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </span>
                  <span className="block text-sm text-muted-foreground mt-1 leading-relaxed">{w.blurb}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Myntra credibility */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "color-mix(in srgb, var(--muted) 50%, var(--background))" }}>
        <motion.div
          {...reveal}
          custom={0}
          className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12"
          style={{ background: "color-mix(in srgb, var(--primary) 6%, transparent)", border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)" }}
        >
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
            Day job
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Technical Lead, Myntra
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Leading frontend engineering for a large-scale e-commerce platform, in React and React
            Native, with a focus on performance, Core Web Vitals and app vitals. The same standards
            go into the projects I take on independently.
          </p>
        </motion.div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Heading>How we&apos;d work together</Heading>
          <div className="grid md:grid-cols-3 gap-6">
            {PROCESS.map((p, i) => (
              <motion.div key={p.n} {...reveal} custom={i} className="relative">
                <span
                  className="text-5xl font-extrabold text-primary block mb-3"
                >
                  {p.n}
                </span>
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center" style={{ backgroundColor: "color-mix(in srgb, var(--muted) 50%, var(--background))" }}>
        <motion.div {...reveal} custom={0} className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
            Got a product to ship?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Tell me what you&apos;re building. I&apos;ll reply with an honest take on scope and fit.
          </p>
          <CtaButton>Email me</CtaButton>
          <p className="text-sm text-muted-foreground mt-4">{EMAIL}</p>
        </motion.div>
      </section>
    </div>
  );
}
