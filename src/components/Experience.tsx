"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Technical Lead",
    company: "Myntra Designs Pvt. Ltd.",
    location: "Bengaluru",
    period: "Apr 2023 – Present",
    current: true,
    summary:
      "Technical Lead in the Merchandising team — owning the full frontend of home, SIS, PLP, and PDP pages across Myntra app, mobile web, and internal tooling.",
    achievements: [
      "Built Algorithmic Store — reduced page deployment cycle from 1 month to 2 days, driving measurable CTR lift.",
      "Shipped Mnow (hyperlocal 2-hour delivery) — led React Native + web frontend, implemented lazy loading on product racks, resolving SLA discrepancies and improving FCP/LCP.",
      "Built Federator UI — real-time content configuration system with audience targeting across home, SIS, PLP, PDP.",
      "Drove measurable FCP, LCP, and Core Web Vitals improvements across Myntra's consumer surfaces.",
    ],
    tech: ["React", "React Native", "Next.js", "Node.js", "MongoDB", "GoLang", "SQL"],
  },
  {
    role: "Product Engineer",
    company: "Codingmart Technologies",
    location: "Remote / Coimbatore",
    period: "Sep 2019 – Mar 2023",
    current: false,
    summary:
      "Full-stack engineer building scalable web applications and backend infrastructure for early-stage startups across SaaS, fintech, and e-commerce verticals.",
    achievements: [
      "Architected backend with PostgreSQL and Prisma — optimised data operations for superior system performance.",
      "Built reusable React component library with ContextAPI, accelerating feature delivery across 3+ products.",
      "Set up production infrastructure on Digital Ocean: NGINX, PM2, GitLab CI/CD pipelines.",
      "Integrated Razorpay payment gateway for frictionless online booking flows.",
      "Built campaign management tool with SMS gateway and cloud call technology.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Prisma", "NGINX", "GitLab CI/CD"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.15 },
  }),
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20"
      style={{ backgroundColor: "#0d0d14" }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.4), transparent)" }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 18 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformPerspective: 800 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Work{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7)" }}
            >
              Experience
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            6+ years of impact across product, scale, and performance.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — draws in on scroll */}
          <motion.div
            aria-hidden="true"
            className="absolute left-4 top-2 bottom-2 w-px"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            style={{
              background:
                "linear-gradient(to bottom, #6366f1, #a855f7 50%, rgba(168,85,247,0.15))",
              transformOrigin: "top",
            }}
          />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.company}
                custom={index + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative pl-14"
              >
                {/* Dot — spring pop on scroll */}
                <motion.div
                  className="absolute left-0 top-5 flex items-center justify-center w-8 h-8"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 14,
                    delay: 0.5 + index * 0.3,
                  }}
                >
                  {exp.current ? (
                    <>
                      <span
                        className="absolute inline-block w-4 h-4 rounded-full animate-ping"
                        style={{ backgroundColor: "rgba(99,102,241,0.4)" }}
                      />
                      <span
                        className="relative inline-block w-3 h-3 rounded-full"
                        style={{ backgroundColor: "#6366f1" }}
                      />
                    </>
                  ) : (
                    <span
                      className="inline-block w-3 h-3 rounded-full"
                      style={{ backgroundColor: "#475569" }}
                    />
                  )}
                </motion.div>

                {/* Card */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${exp.current ? "rgba(99,102,241,0.25)" : "rgba(255,255,255,0.06)"}`,
                  }}
                >
                  {/* Header — always visible, acts as toggle */}
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3
                          className="text-lg font-bold text-white"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-semibold"
                            style={{
                              background: "rgba(99,102,241,0.15)",
                              color: "#a5b4fc",
                              border: "1px solid rgba(99,102,241,0.3)",
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
                        <span style={{ color: exp.current ? "#a5b4fc" : "#94a3b8" }}>
                          {exp.company}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span>{exp.location}</span>
                        <span className="text-slate-600">·</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      className="mt-1 shrink-0 text-slate-500 transition-transform duration-300 group-hover:text-slate-300"
                      style={{
                        transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          height: { type: "spring", stiffness: 120, damping: 22 },
                          opacity: { duration: 0.18 },
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-6 pb-6"
                          style={{
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          <p className="text-slate-400 text-sm leading-relaxed mt-4 mb-5">
                            {exp.summary}
                          </p>

                          <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {exp.achievements.map((a, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                <span className="mt-1 shrink-0" style={{ color: "#6366f1" }}>
                                  ▹
                                </span>
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>

                          <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                            Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="px-3 py-1 rounded-full text-xs font-medium"
                                style={{
                                  background: "rgba(99,102,241,0.1)",
                                  border: "1px solid rgba(99,102,241,0.2)",
                                  color: "#a5b4fc",
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
