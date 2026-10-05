"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    accent: "var(--primary)",
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
    accent: "var(--primary)",
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
    accent: "var(--primary)",
    skills: [
      { name: "Core Web Vitals", level: 92 },
      { name: "FCP / LCP Tuning", level: 90 },
      { name: "Next.js SEO", level: 88 },
      { name: "Lighthouse", level: 85 },
    ],
  },
  {
    label: "Tools & Infra",
    accent: "var(--primary)",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "GitLab CI/CD", level: 78 },
      { name: "NGINX", level: 72 },
      { name: "PM2", level: 70 },
      { name: "AWS", level: 70 },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
      delay: i * 0.12,
    },
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
      style={{ backgroundColor: "var(--background)" }}
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
            Skills &amp;{" "}
            <span
              className="text-primary"
            >
              Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I reach for on every project.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              custom={catIndex + 1}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.03,
                rotateX: -3,
                rotateY: 3,
                transition: { type: "spring", stiffness: 260, damping: 18 },
              }}
              className="rounded-2xl p-6 cursor-default"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <h3
                className="font-bold text-base mb-5"
                style={{
                  
                  color: cat.accent,
                }}
              >
                {cat.label}
              </h3>

              <div className="space-y-4">
                {cat.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-foreground/80 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-xs">{skill.level}%</span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ backgroundColor: "var(--muted)" }}
                    >
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={
                          inView
                            ? {
                                width: [
                                  "0%",
                                  `${Math.min(skill.level + 7, 100)}%`,
                                  `${skill.level}%`,
                                ],
                              }
                            : {}
                        }
                        transition={{
                          duration: 1.3,
                          times: [0, 0.72, 1],
                          delay: catIndex * 0.15 + skillIndex * 0.08,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: cat.accent,
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
