"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Clock, ArrowRight } from "lucide-react";
import { PUBLISHED_STUDIES } from "@/data/caseStudies";

type Tag = "Own Product" | "Production" | "Client";

interface Project {
  emoji: string;
  title: string;
  tag: Tag;
  wip?: boolean;
  description: string;
  tech: string[];
  liveUrl?: string;
  caseStudy?: string;
}

const CLIENT_PROJECTS: Project[] = [
  {
    emoji: "🎮",
    title: "Fanspace",
    tag: "Production",
    description:
      "Indian e-sports fan engagement platform by Esports Collective — news, stats, tournaments. Built the Display page and bridged website modules with webview.",
    tech: ["React Native", "MobX"],
  },
  {
    emoji: "💼",
    title: "Technomanagers.in",
    tag: "Client",
    description:
      "Migrated from Lovable to Next.js with full SEO overhaul — structured data, sitemap, robots, og:image, and Core Web Vitals improvements.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    liveUrl: "https://technomanagers.in",
  },
  {
    emoji: "🍹",
    title: "House of 30ML",
    tag: "Client",
    description:
      "Bar-hopping platform live in Pune — full-stack build with React Native + React web. Architected the entire frontend and collaborated directly with the founder.",
    tech: ["React Native", "React", "Node.js"],
    liveUrl: "https://www.houseof30ml.in/",
  },
];

// The products I built myself: each links to its case study.
const OWN_PROJECTS: Project[] = PUBLISHED_STUDIES.map((c) => ({
  emoji: c.emoji,
  title: c.title,
  tag: "Own Product",
  wip: c.wip,
  description: c.whatItIs,
  tech: c.tech,
  liveUrl: c.liveUrl,
  caseStudy: `/work/${c.slug}`,
}));

const PROJECTS: Project[] = [...OWN_PROJECTS, ...CLIENT_PROJECTS];

const TAG_STYLES: Record<Tag, { bg: string; color: string; border: string }> = {
  Production: {
    bg: "color-mix(in srgb, var(--primary) 10%, transparent)",
    color: "var(--primary)",
    border: "color-mix(in srgb, var(--primary) 25%, transparent)",
  },
  Client: {
    bg: "color-mix(in srgb, var(--primary) 10%, transparent)",
    color: "var(--primary)",
    border: "color-mix(in srgb, var(--primary) 25%, transparent)",
  },
  "Own Product": {
    bg: "color-mix(in srgb, var(--primary) 10%, transparent)",
    color: "var(--primary)",
    border: "color-mix(in srgb, var(--primary) 25%, transparent)",
  },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: "linear-gradient(to bottom, color-mix(in srgb, var(--primary) 40%, transparent), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
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
            Featured{" "}
            <span
              className="text-primary"
            >
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Products I built end to end, plus client and production work.
          </p>
        </motion.div>

        {/* Grid with perspective for 3D child effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
          {PROJECTS.map((project, index) => {
            const tagStyle = TAG_STYLES[project.tag];
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: index * 0.09 }}
                whileHover={{
                  scale: 1.03,
                  rotateX: -3,
                  rotateY: 4,
                  transition: { type: "spring", stiffness: 250, damping: 18 },
                }}
                className="group relative rounded-2xl flex flex-col overflow-hidden cursor-default"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "color-mix(in srgb, var(--primary) 28%, transparent)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "var(--shadow-lg)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Top row */}
                <div className="p-6 pb-0 flex items-start justify-between gap-3">
                  <span className="text-4xl" role="img" aria-label={project.title}>
                    {project.emoji}
                  </span>
                  <div className="flex items-center gap-2 mt-1 flex-wrap justify-end">
                    {project.wip && (
                      <span
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: "color-mix(in srgb, var(--primary) 10%, transparent)",
                          color: "var(--primary)",
                          border: "1px solid color-mix(in srgb, var(--primary) 30%, transparent)",
                        }}
                      >
                        <Clock size={11} />
                        WIP
                      </span>
                    )}
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: tagStyle.bg,
                        color: tagStyle.color,
                        border: `1px solid ${tagStyle.border}`,
                      }}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <h3
                    className="text-lg font-bold text-foreground"
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "color-mix(in srgb, var(--primary) 8%, transparent)",
                          border: "1px solid color-mix(in srgb, var(--primary) 15%, transparent)",
                          color: "var(--primary)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex items-center gap-5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:text-foreground"
                        style={{ color: "var(--primary)" }}
                        aria-label={`View ${project.title} live`}
                      >
                        <ExternalLink size={14} />
                        View live
                      </a>
                    )}
                    {project.caseStudy && (
                      <Link
                        href={project.caseStudy}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/80 transition-colors duration-200 hover:text-foreground"
                        aria-label={`Read the ${project.title} case study`}
                      >
                        Case study
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
