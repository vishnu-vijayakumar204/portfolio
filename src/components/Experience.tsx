"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Myntra",
    period: "Apr 2023 - Present",
    description:
      "Frontend developer in the merchandising team, responsible for developing and maintaining the home page and SIS (Search & Item Selection) pages across Myntra&apos;s app, mobile web, and internal applications that power these customer-facing pages.",
    achievements: [
      "Designed and implemented Federator UI - a real-time configuration system for dynamic content across app pages (home, SIS, PLP, PDP) with advanced targeting capabilities",
      "Built Algorithmic Store for personalized user experience, reducing page deployment time from 1 month to 2 days",
      "Implemented lazy loading for product racks on Mnow pages to optimize performance and address SLA discrepancies",
      "Developed Mnow - a hyperlocal speed delivery platform for fashion and beauty products with 2-hour delivery in select cities",
    ],
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "MongoDB",
      "GoLang",
      "SQL",
    ],
  },
  {
    role: "Product Engineer",
    company: "Codingmart Technologies",
    period: "Sep 2019 - Mar 2023",
    description:
      "Full-stack developer responsible for building scalable web applications and backend infrastructure. Led development of multiple products from conception to deployment.",
    achievements: [
      "Architected resilient backend framework with PostgreSQL and Prisma, optimizing data operations for superior system performance",
      "Developed reusable React.js components with ContextAPI for seamless backend integration, enhancing code reusability and scalability",
      "Led server infrastructure setup on Digital Ocean with NGINX and PM2, implementing GitLab CI/CD for efficient deployment across staging and production",
      "Integrated Razorpay payment gateway for frictionless online vehicle booking experience",
      "Built comprehensive campaign management tool with SMS gateway and cloud call technology for streamlined communication processes",
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 bg-slate-950/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            My professional journey and the impact I&apos;ve made
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-3xl p-8 hover-glow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <Briefcase className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-lg text-purple-400">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-slate-300"
                    >
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 text-sm border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
