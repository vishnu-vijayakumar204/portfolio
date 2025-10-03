"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fanspace",
    description:
      "Indian e-sports fan engagement platform launched by Esports Collective, providing comprehensive news, statistics, and tournament updates for the gaming community.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    technologies: ["React Native", "MobX"],
    liveUrl: "https://fanspace.gg",
    highlights: [
      "Developed the Display page with seamless user experience",
      "Integrated website modules with webview for hybrid functionality",
      "Built for Esports Collective's fan engagement platform",
    ],
  },
  {
    title: "House of 30ML",
    description:
      "Innovative party app designed to elevate the bar hopping experience, currently live in Pune with plans for rapid expansion across major cities.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    technologies: ["React Native", "React", "Node.js"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.houseof30ml",
    highlights: [
      "Designed and architected the entire frontend structure and tech stack",
      "Implemented core modules and production-ready features",
      "Collaborated closely with founder for end-to-end app development",
    ],
  },
  {
    title: "Vartalabh",
    description:
      "AI-powered mental health companion platform that leverages artificial intelligence to provide supportive chat experiences for users seeking mental wellness support.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    technologies: ["React", "Vite", "Chakra UI", "Zustand"],
    liveUrl: "https://vartalabh.in",
    highlights: [
      "Designed and developed the entire website from scratch",
      "Built responsive UI with modern design principles",
      "Integrated AI chat functionality for mental health support",
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden hover-glow group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4 space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-slate-500"
                    >
                      <span className="text-purple-400">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all text-sm font-semibold w-full justify-center"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
