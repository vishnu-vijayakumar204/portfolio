"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#0a0a0f",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <span
            className="text-xl font-extrabold bg-clip-text text-transparent block"
            style={{
              fontFamily: "'Syne', sans-serif",
              backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7)",
            }}
          >
            VV
          </span>
          <p className="text-slate-500 text-xs mt-1">
            Technical Lead · Freelance Developer
          </p>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vishnu-vijayakumar204"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-300 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/vishnu-vijayakumar-0529b3162"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-300 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={19} />
          </a>
          <a
            href="mailto:vishnu.vijayakumar204@gmail.com"
            className="text-slate-600 hover:text-slate-300 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={19} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-slate-600 text-xs text-center sm:text-right">
          © {year} Vishnu Vijayakumar
        </p>
      </div>
    </footer>
  );
}
