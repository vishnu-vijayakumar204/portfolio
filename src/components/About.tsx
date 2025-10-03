"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    description:
      "Proficient in React, React Native, Node.js, and modern web technologies",
  },
  {
    icon: Rocket,
    title: "Innovation Focus",
    description:
      "Building cutting-edge solutions from e-sports platforms to AI companions",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description:
      "Creating intuitive experiences that solve real-world problems",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Senior Software Engineer passionate about building innovative
            solutions that make a real impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a Senior Software Engineer with over 5 years of experience
                  building scalable web and mobile applications. Currently
                  working at Myntra, I specialize in frontend development and
                  have a strong foundation in full-stack technologies.
                </p>
                <p>
                  My journey began at Codingmart Technologies as a Product
                  Engineer, where I architected backend systems and developed
                  reusable React components. This experience taught me the
                  importance of clean code, scalable architecture, and
                  user-centric design.
                </p>
                <p>
                  I'm passionate about creating innovative solutions that solve
                  real-world problems. From e-sports platforms to mental health
                  companions, I've worked on diverse projects that impact users'
                  lives. When I'm not coding, you'll find me traveling to new
                  places, playing with my dog, and exploring new technologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Fun Facts About Me
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    Offbeat
                  </div>
                  <div className="text-slate-400 text-sm">
                    Favorite Travel Destinations
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    Zara
                  </div>
                  <div className="text-slate-400 text-sm">My Dog's Name</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    10K+
                  </div>
                  <div className="text-slate-400 text-sm">Coding Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    React
                  </div>
                  <div className="text-slate-400 text-sm">
                    Favorite Framework
                  </div>
                </div>
              </div>
              <p className="text-slate-500 text-sm text-center mt-4 italic">
                * These are my personal interests outside of work
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="glass rounded-3xl p-8 hover-glow text-center"
            >
              <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4">
                <item.icon size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
