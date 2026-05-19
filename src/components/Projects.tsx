"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Tag = "Production" | "Client" | "Side Project";

interface Project {
  emoji: string;
  title: string;
  tag: Tag;
  description: string;
  tech: string[];
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    emoji: "🛍️",
    title: "Mnow",
    tag: "Production",
    description:
      "Hyperlocal 2-hour fashion delivery platform built for Myntra. Led the React Native and web frontend — lazy loading, FCP/LCP optimisation, and real-time rack updates for millions of users.",
    tech: ["React Native", "React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    emoji: "🎮",
    title: "Fanspace",
    tag: "Production",
    description:
      "Indian e-sports fan engagement platform by Esports Collective — news, stats, tournaments. Built the Display page and bridged website modules with webview.",
    tech: ["React Native", "MobX"],
    liveUrl: "https://fanspace.gg",
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
    liveUrl: "https://play.google.com/store/apps/details?id=com.houseof30ml",
  },
  {
    emoji: "✈️",
    title: "travelvisastack.com",
    tag: "Side Project",
    description:
      "AI-powered visa requirements checker and trip itinerary generator. Built under Deviza Labs — Next.js with LLM integration and structured SEO.",
    tech: ["Next.js", "AI/LLM", "TypeScript"],
    liveUrl: "https://travelvisastack.com",
  },
  {
    emoji: "💰",
    title: "Deviza Expense Tracker",
    tag: "Side Project",
    description:
      "LLM-based expense parser that accepts natural language inputs via Telegram and WhatsApp. No manual categorisation — just send a message.",
    tech: ["Node.js", "LLM", "Telegram Bot", "WhatsApp API"],
  },
];

const TAG_STYLES: Record<Tag, { bg: string; color: string; border: string }> = {
  Production: {
    bg: "rgba(99,102,241,0.1)",
    color: "#a5b4fc",
    border: "rgba(99,102,241,0.25)",
  },
  Client: {
    bg: "rgba(245,158,11,0.1)",
    color: "#fcd34d",
    border: "rgba(245,158,11,0.25)",
  },
  "Side Project": {
    bg: "rgba(168,85,247,0.1)",
    color: "#d8b4fe",
    border: "rgba(168,85,247,0.25)",
  },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#0a0a0f" }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.4), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Featured{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7)" }}
            >
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Production apps, client builds, and side experiments.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => {
            const tagStyle = TAG_STYLES[project.tag];
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl flex flex-col overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 0 0 0 rgba(99,102,241,0)",
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 32px rgba(99,102,241,0.12)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(99,102,241,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 0 rgba(99,102,241,0)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.07)";
                }}
              >
                {/* Top */}
                <div className="p-6 pb-0 flex items-start justify-between gap-3">
                  <span className="text-4xl" role="img" aria-label={project.title}>
                    {project.emoji}
                  </span>
                  <span
                    className="mt-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: tagStyle.bg,
                      color: tagStyle.color,
                      border: `1px solid ${tagStyle.border}`,
                    }}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(99,102,241,0.08)",
                          border: "1px solid rgba(99,102,241,0.15)",
                          color: "#a5b4fc",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:text-white"
                      style={{ color: "#a5b4fc" }}
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={14} />
                      View live
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
