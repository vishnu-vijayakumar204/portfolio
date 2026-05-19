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
      style={{ backgroundColor: "#0d0d14" }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.4), transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Freelance{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7)" }}
            >
              Services
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
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
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
              whileHover={{
                scale: 1.03,
                rotateX: -3,
                rotateY: 4,
                borderColor: "rgba(99,102,241,0.3)",
                transition: { type: "spring", stiffness: 250, damping: 18 },
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0" role="img" aria-label={svc.title}>
                  {svc.icon}
                </span>
                <div>
                  <h3
                    className="font-bold text-white text-lg leading-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-xs font-medium mt-0.5" style={{ color: "#a5b4fc" }}>
                    {svc.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {svc.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {svc.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(99,102,241,0.08)",
                      border: "1px solid rgba(99,102,241,0.15)",
                      color: "#a5b4fc",
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
              "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(168,85,247,0.12) 100%)",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          <h3
            className="text-2xl md:text-3xl font-extrabold text-white mb-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Have a project in mind?
          </h3>
          <p className="text-slate-400 mb-7 max-w-lg mx-auto">
            Tell me what you&apos;re building. I&apos;ll reply within 24 hours.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              boxShadow: "0 0 28px rgba(99,102,241,0.35)",
            }}
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
