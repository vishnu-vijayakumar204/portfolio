"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};


export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden"
      style={{ backgroundColor: "#0a0a0f" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.07), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.4), transparent)" }}
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
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            About{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7)" }}
            >
              Me
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Technical Lead by day, product builder by night.
          </p>
        </motion.div>

        {/* Bio card */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover={{
            scale: 1.01,
            rotateX: -2,
            rotateY: 2,
            transition: { type: "spring", stiffness: 200, damping: 20 },
          }}
          style={{ transformPerspective: 1200 }}
          className="mb-10"
        >
          <div
            className="rounded-2xl p-8 md:p-10 max-w-3xl mx-auto"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <h3
              className="text-lg font-bold mb-5"
              style={{ fontFamily: "'Syne', sans-serif", color: "#a5b4fc" }}
            >
              My Story
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed text-[15px]">
              <p>
                I&apos;m a <strong className="text-white">Technical Lead at Myntra</strong> with
                6+ years of experience building web and mobile products at scale. I own the
                full frontend of home, SIS, PLP, and PDP pages used by millions of shoppers
                across India.
              </p>
              <p>
                Before Myntra, I spent nearly four years at{" "}
                <strong className="text-white">Codingmart Technologies</strong> as a Product
                Engineer — architecting backends, setting up CI/CD, and shipping full products
                for early-stage startups.
              </p>
              <p>
                Outside work, I run side projects under{" "}
                <strong className="text-white">Deviza Labs</strong> — an AI-powered visa
                planner and an LLM-based expense tracker. I also take freelance projects for
                teams who need fast, high-performance web &amp; mobile apps.
              </p>
              <p className="text-sm" style={{ color: "#a5b4fc" }}>
                React · React Native · Next.js · Node.js · GoLang · MongoDB · SQL
              </p>
            </div>
          </div>
        </motion.div>

        {/* Competency cards */}
        <div className="grid sm:grid-cols-3 gap-5" style={{ perspective: "1000px" }}>
          {[
            {
              icon: "⚡",
              title: "Performance First",
              desc: "FCP/LCP optimisation, lazy loading, Core Web Vitals — measurable wins at Myntra scale.",
            },
            {
              icon: "📱",
              title: "Cross-Platform",
              desc: "React Native apps shipped to millions; web + mobile parity is a given, not a goal.",
            },
            {
              icon: "🏗️",
              title: "Scalable Systems",
              desc: "Real-time content config across Myntra's entire consumer surface — home, SIS, PLP, PDP.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              custom={2 + i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.04,
                rotateX: -3,
                rotateY: 4,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="rounded-2xl p-6 cursor-default"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="text-3xl mb-3" aria-hidden="true">
                {card.icon}
              </div>
              <h3
                className="font-bold mb-2 text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
