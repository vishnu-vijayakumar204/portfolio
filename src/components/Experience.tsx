"use client";

import { useState } from "react";
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
    tech: ["React", "React Native", "Node.js", "MongoDB", "GoLang"],
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

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="experience"
      className="relative scroll-mt-20 px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      style={{ backgroundColor: "color-mix(in srgb, var(--muted) 50%, var(--background))" }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">6+ years of impact across product, scale, and performance.</p>
        </div>

        <ol className="relative space-y-6 sm:space-y-8">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-4 top-2 hidden w-px sm:block"
            style={{ background: "linear-gradient(to bottom, var(--primary), color-mix(in srgb, var(--primary) 15%, transparent))" }}
          />
          {EXPERIENCES.map((exp, index) => {
            const open = openIndex === index;
            const panelId = `exp-panel-${index}`;
            return (
              <li key={exp.company} className="relative sm:pl-14">
                <span aria-hidden="true" className="absolute left-0 top-5 hidden h-8 w-8 items-center justify-center sm:flex">
                  {exp.current ? (
                    <>
                      <span className="absolute inline-block h-4 w-4 rounded-full bg-primary/40 motion-safe:animate-ping" />
                      <span className="relative inline-block h-3 w-3 rounded-full bg-primary" />
                    </>
                  ) : (
                    <span className="inline-block h-3 w-3 rounded-full bg-muted-foreground" />
                  )}
                </span>

                <div className={`overflow-hidden rounded-2xl border bg-card ${exp.current ? "border-primary/30" : "border-border"}`}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : index)}
                      className="group flex w-full items-start justify-between gap-4 px-5 py-5 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary sm:px-6"
                      aria-expanded={open}
                      aria-controls={panelId}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="mb-1 flex flex-wrap items-center gap-2">
                          <span className="text-lg font-bold text-foreground">{exp.role}</span>
                          {exp.current && (
                            <span className="rounded-full border border-primary/30 bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">Current</span>
                          )}
                        </span>
                        <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                          <span className={exp.current ? "font-semibold text-primary" : ""}>{exp.company}</span>
                          <span aria-hidden="true">·</span>
                          <span>{exp.location}</span>
                          <span aria-hidden="true">·</span>
                          <span>{exp.period}</span>
                        </span>
                      </span>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`mt-1 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:text-foreground ${open ? "rotate-180" : ""}`}
                      />
                    </button>
                  </h3>

                  {/* Always in the DOM (crawlable); height animates with CSS only. */}
                  <div
                    id={panelId}
                    role="region"
                    aria-hidden={!open}
                    className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-border px-5 pb-6 sm:px-6">
                        <p className="mb-5 mt-4 text-sm leading-relaxed text-muted-foreground">{exp.summary}</p>
                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Key Achievements</h4>
                        <ul className="mb-6 space-y-2">
                          {exp.achievements.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-sm text-foreground/80">
                              <span aria-hidden="true" className="mt-1 shrink-0 text-primary">▹</span>
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Stack</h4>
                        <ul className="flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
                            <li key={t} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
