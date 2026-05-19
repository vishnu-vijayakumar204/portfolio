"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { target: 5, suffix: "+", label: "Years Experience" },
  { target: 15, suffix: "+", label: "Projects Shipped" },
  { target: 3, suffix: "", label: "Products at Scale" },
  { target: 10, suffix: "K+", label: "Coding Hours" },
];

function CountUp({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const duration = 1400;
    const intervalMs = Math.ceil(duration / target);
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#0a0a0f" }}
    >
      {/* Subtle section separator glow */}
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
          className="text-center mb-16"
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
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technical Lead by day, product builder by night.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div
              className="rounded-2xl p-8 h-full"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3
                className="text-xl font-bold mb-5"
                style={{ fontFamily: "'Syne', sans-serif", color: "#a5b4fc" }}
              >
                My Story
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed text-[15px]">
                <p>
                  I&apos;m a <strong className="text-white">Technical Lead at Myntra</strong>,
                  recently promoted from Senior Software Engineer — building features used by
                  millions of fashion shoppers across India. My work spans hyperlocal delivery
                  platforms, real-time config systems, and FCP/LCP performance engineering.
                </p>
                <p>
                  Before Myntra, I spent nearly four years at{" "}
                  <strong className="text-white">Codingmart Technologies</strong> as a Product
                  Engineer, where I architected backends, set up CI/CD pipelines, and integrated
                  payment gateways for early-stage startups.
                </p>
                <p>
                  Outside of my day job, I run side projects under{" "}
                  <strong className="text-white">Deviza Labs</strong> — including an AI-powered
                  visa planner and an LLM-based expense tracker. I also take on freelance work
                  for clients who need high-performance web &amp; mobile apps.
                </p>
                <p>
                  Stack: <span className="text-indigo-400">React · React Native · Next.js · Node.js · GoLang · MongoDB · SQL</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-5"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-7 text-center"
                style={{
                  background: "rgba(99,102,241,0.06)",
                  border: "1px solid rgba(99,102,241,0.18)",
                }}
              >
                <div
                  className="text-4xl font-extrabold mb-2 bg-clip-text text-transparent"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7)",
                  }}
                >
                  <CountUp target={stat.target} suffix={stat.suffix} inView={inView} />
                </div>
                <div className="text-slate-400 text-sm leading-snug">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Competency highlights */}
        <div className="grid sm:grid-cols-3 gap-5">
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
              desc: "Real-time content config for home, SIS, PLP, PDP pages across Myntra's entire surface.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              custom={3 + i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="text-3xl mb-3" aria-hidden="true">{card.icon}</div>
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
