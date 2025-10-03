"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">VV</h3>
            <p className="text-slate-400 text-sm">
              Building digital experiences
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/vishnu-vijayakumar204"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishnu-vijayakumar-0529b3162"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:vishnu.vijayakumar204@gmail.com"
              className="p-3 glass rounded-full hover-glow transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              © {currentYear} Vishnu Vijayakumar
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
