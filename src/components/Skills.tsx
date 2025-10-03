"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "React Native", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "MongoDB", level: 90 },
      { name: "GoLang", level: 50 },
      { name: "SQL", level: 50 },
      { name: "PostgreSQL", level: 50 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 50 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 bg-slate-950/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Technologies and tools I work with to build amazing products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass rounded-3xl p-8 hover-glow"
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 glass rounded-3xl p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            Other Technologies & Methodologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Agile/Scrum",
              "Responsive Design",
              "Mobile App Development",
              "Cross-platform Development",
              "API Integration",
              "State Management",
              "Performance Optimization",
              "UI/UX Design",
              "Web Security",
              "CI/CD",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
