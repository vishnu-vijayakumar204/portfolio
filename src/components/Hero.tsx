"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full glass text-sm">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">Vishnu Vijayakumar</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl"
          >
            Senior Software Engineer crafting exceptional digital experiences
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-slate-500 mb-12 max-w-2xl"
          >
            I build innovative web applications and help businesses transform
            their ideas into reality through clean code and modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all hover-glow font-semibold"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full glass hover-glow font-semibold"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-6 mb-16"
          >
            <a
              href="https://github.com/vishnu-vijayakumar204"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishnu-vijayakumar-0529b3162"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:vishnu.vijayakumar204@gmail.com"
              className="p-3 glass rounded-full hover-glow"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="animate-bounce"
          >
            <ArrowDown size={32} className="text-slate-500" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
