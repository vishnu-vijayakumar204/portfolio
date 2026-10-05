"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  {
    icon: "💻",
    title: "Web App Development",
    subtitle: "React / Next.js",
    description:
      "New builds and feature enhancements for SaaS products, e-commerce, and content platforms. Server components, App Router, API routes — the full modern Next.js stack.",
    highlights: ["New builds", "Feature enhancements", "API integrations"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    subtitle: "React Native",
    description:
      "Cross-platform iOS & Android apps with a native feel. From greenfield projects to adding screens to an existing codebase — production-ready and optimised.",
    highlights: ["iOS & Android", "Greenfield & brownfield", "Production-ready"],
  },
  {
    icon: "🔍",
    title: "SEO & Next.js Migrations",
    subtitle: "SEO optimisation",
    description:
      "Migrate legacy apps to Next.js with structured data, sitemaps, OG tags, and Core Web Vitals improvements. I've done it for client sites — measurable ranking gains.",
    highlights: ["Next.js migrations", "Structured data", "Core Web Vitals"],
  },
  {
    icon: "⚡",
    title: "Performance Engineering",
    subtitle: "FCP / LCP / CLS",
    description:
      "Deep-dive into slow pages — lazy loading, bundle analysis, image optimisation, critical CSS. Backed by real Myntra-scale experience improving FCP and LCP metrics.",
    highlights: ["Lighthouse audits", "Lazy loading", "Bundle optimisation"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20"
      style={{ backgroundColor: "color-mix(in srgb, var(--muted) 50%, var(--background))" }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: "linear-gradient(to bottom, color-mix(in srgb, var(--primary) 40%, transparent), transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 18 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformPerspective: 800 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Freelance{" "}
            <span
              className="text-primary"
            >
              Services
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Quality work, no hidden rates. Enquire to discuss fit and budget.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12" style={{ perspective: "1000px" }}>
          {SERVICES.map((svc, index) => (
            <motion.div
              key={svc.title}
              custom={index + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="rounded-2xl p-7 flex flex-col gap-4 group cursor-default"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
              whileHover={{
                scale: 1.03,
                rotateX: -3,
                rotateY: 4,
                borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)",
                transition: { type: "spring", stiffness: 250, damping: 18 },
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0" role="img" aria-label={svc.title}>
                  {svc.icon}
                </span>
                <div>
                  <h3
                    className="font-bold text-foreground text-lg leading-tight"
                  >
                    {svc.title}
                  </h3>
                  <p className="text-xs font-medium mt-0.5" style={{ color: "var(--primary)" }}>
                    {svc.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {svc.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {svc.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 8%, transparent)",
                      border: "1px solid color-mix(in srgb, var(--primary) 15%, transparent)",
                      color: "var(--primary)",
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-2xl px-8 py-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--primary) 12%, transparent) 0%, color-mix(in srgb, var(--primary) 12%, transparent) 100%)",
            border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
          }}
        >
          <h3
            className="text-2xl md:text-3xl font-extrabold text-foreground mb-3"
          >
            Have a project in mind?
          </h3>
          <p className="text-muted-foreground mb-7 max-w-lg mx-auto">
            Tell me what you&apos;re building. I&apos;ll reply within 24 hours.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3 rounded-full font-semibold text-primary-foreground transition-all duration-200 hover:scale-105"
            style={{
              background: "var(--primary)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
