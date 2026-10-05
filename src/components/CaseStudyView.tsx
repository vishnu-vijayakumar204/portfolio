"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import { visible, todoStyle } from "@/components/Todo";

const EMAIL = "vishnu.vijayakumar204@gmail.com";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

function Block({
  index,
  label,
  children,
}: {
  index: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="mb-12"
    >
      <h2
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: "#a5b4fc" }}
      >
        {label}
      </h2>
      {children}
    </motion.section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-slate-300 leading-relaxed">
          <span
            aria-hidden="true"
            className="mt-2.5 h-1.5 w-1.5 rounded-full shrink-0"
            style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
          />
          <span style={todoStyle(item)}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyView({ study }: { study: CaseStudy }) {
  const problem = visible([study.problem].filter(Boolean));
  const whatIDid = visible(study.whatIDid);
  const decisions = visible(study.decisions);
  const outcomes = visible(study.outcomes);
  const whatItIs = visible([study.whatItIs]);
  const why = visible([study.whyItMatters].filter(Boolean));

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0a0a0f" }}>
      <div className="max-w-3xl mx-auto">
        <Link
          href="/work-with-me#work"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Back to selected work
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm mb-3" style={{ color: "#a5b4fc" }}>
            <span aria-hidden="true">{study.emoji}</span> Case study ·{" "}
            {study.category && <span style={todoStyle(study.category)}>{study.category}</span>}
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {study.title}
          </h1>
          {whatItIs.map((s) => (
            <p key={s} className="text-lg text-slate-400 leading-relaxed mb-6" style={todoStyle(s)}>
              {s}
            </p>
          ))}

          {study.tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {study.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    color: "#a5b4fc",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <motion.a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            View live site <ArrowUpRight size={16} />
          </motion.a>
        </motion.header>

        {problem.length > 0 && (
          <Block index={0} label="The problem">
            {problem.map((s) => (
              <p key={s} className="text-slate-300 leading-relaxed" style={todoStyle(s)}>
                {s}
              </p>
            ))}
          </Block>
        )}

        {whatIDid.length > 0 && (
          <Block index={1} label="What I did">
            <List items={whatIDid} />
          </Block>
        )}

        {decisions.length > 0 && (
          <Block index={2} label="Key decisions">
            <List items={decisions} />
          </Block>
        )}

        {outcomes.length > 0 && (
          <Block index={3} label="Outcomes">
            <List items={outcomes} />
          </Block>
        )}

        {why.length > 0 && (
          <Block index={4} label="Why this matters">
            {why.map((s) => (
              <p
                key={s}
                className="text-lg text-slate-200 leading-relaxed rounded-2xl p-6"
                style={{
                  background: "rgba(99,102,241,0.06)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  ...(todoStyle(s) ?? {}),
                }}
              >
                {s}
              </p>
            ))}
          </Block>
        )}

        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
            Have something similar in mind?
          </h2>
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Project enquiry: inspired by ${study.title}`)}`}
            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-white transition-colors"
            style={{ color: "#a5b4fc" }}
          >
            <Mail size={16} /> Tell me about it
          </a>
        </motion.div>
      </div>
    </div>
  );
}
