"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    accent: "#6366f1",
    skills: [
      { name: "React", level: 95 },
      { name: "React Native", level: 90 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    label: "Backend",
    accent: "#a855f7",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "GoLang", level: 65 },
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 80 },
      { name: "Prisma", level: 75 },
    ],
  },
  {
    label: "SEO & Performance",
    accent: "#f59e0b",
    skills: [
      { name: "Core Web Vitals", level: 92 },
      { name: "FCP / LCP Tuning", level: 90 },
      { name: "Next.js SEO", level: 88 },
      { name: "Lighthouse", level: 85 },
    ],
  },
  {
    label: "Tools & Infra",
    accent: "#10b981",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "GitLab CI/CD", level: 78 },
      { name: "NGINX", level: 72 },
      { name: "PM2", level: 70 },
      { name: "AWS", level: 70 },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12 },
  }),
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20"
      style={{ backgroundColor: "#0a0a0f" }}
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
            Skills &amp;{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7)" }}
            >
              Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Technologies and tools I reach for on every project.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              custom={catIndex + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3
                className="font-bold text-base mb-5"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: cat.accent,
                }}
              >
                {cat.label}
              </h3>

              <div className="space-y-4">
                {cat.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-slate-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 text-xs">{skill.level}%</span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.15 + skillIndex * 0.08,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${cat.accent}, ${cat.accent}cc)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
