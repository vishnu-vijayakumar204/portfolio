"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const ROLES = [
  "Technical Lead",
  "React Native Engineer",
  "Frontend Architect",
  "Freelance Developer",
];

function useTypewriter(
  words: string[],
  typingSpeed = 75,
  deletingSpeed = 40,
  pause = 1600
) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    if (pausing) return;
    const current = words[wordIndex];
    if (phase === "typing") {
      if (display.length < current.length) {
        const t = setTimeout(
          () => setDisplay(current.slice(0, display.length + 1)),
          typingSpeed
        );
        return () => clearTimeout(t);
      } else {
        setPausing(true);
        const t = setTimeout(() => {
          setPausing(false);
          setPhase("deleting");
        }, pause);
        return () => clearTimeout(t);
      }
    } else {
      if (display.length > 0) {
        const t = setTimeout(
          () => setDisplay(display.slice(0, -1)),
          deletingSpeed
        );
        return () => clearTimeout(t);
      } else {
        setWordIndex((prev) => (prev + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [display, phase, wordIndex, pausing, words, typingSpeed, deletingSpeed, pause]);

  return display;
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    };

    const particles: Particle[] = [];
    let animId = 0;

    // Canvas can't resolve CSS variables, so read the theme's primary colour
    // directly and refresh it whenever the theme class on <html> changes.
    const readColor = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() ||
      "#256bf7";
    let color = readColor();
    const observer = new MutationObserver(() => {
      color = readColor();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = color;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.globalAlpha = 0.07 * (1 - dist / 100);
            ctx.strokeStyle = color;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.65 }}
    />
  );
}

export default function Hero() {
  const role = useTypewriter(ROLES);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentY = useSpring(rawY, { stiffness: 60, damping: 20 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-200, 200], [6, -6]);
  const rotateY = useTransform(mouseX, [-200, 200], [-6, 6]);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-0"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(color-mix(in srgb, var(--primary) 3.5%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--primary) 3.5%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow blobs — animated float */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 18%, transparent), transparent 65%)",
          }}
        />
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-60 -right-60 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 14%, transparent), transparent 65%)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(ellipse, color-mix(in srgb, var(--primary) 6%, transparent), transparent 60%)",
          }}
        />
      </div>

      <ParticleField />

      <motion.div
        style={{ y: contentY, opacity: rawOpacity }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      >
        <motion.div
          style={{
            rotateX: springX,
            rotateY: springY,
            transformPerspective: 1200,
          }}
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              border: "1px solid color-mix(in srgb, var(--primary) 35%, transparent)",
              backgroundColor: "color-mix(in srgb, var(--primary) 7%, transparent)",
              color: "var(--primary)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for freelance projects
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight"
          >
            <span className="text-foreground">Vishnu </span>
            <span
              className="text-primary"
            >
              Vijayakumar
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-xl sm:text-2xl font-semibold mb-5 h-9 flex items-center justify-center gap-1"
            style={{ color: "var(--primary)" }}
          >
            <span>{role}</span>
            <span
              className="inline-block w-0.5 h-6 animate-pulse"
              style={{ backgroundColor: "var(--primary)" }}
            />
          </motion.div>

          {/* Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-9 leading-relaxed"
          >
            6+ years building high-performance web &amp; mobile products at scale.
            Currently Technical Lead at Myntra, shipping for millions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <a
              href="#projects"
              className="px-7 py-3 rounded-full font-semibold text-primary-foreground transition-all duration-200 hover:scale-105"
              style={{
                background: "var(--primary)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
              style={{
                border: "1px solid color-mix(in srgb, var(--primary) 45%, transparent)",
                color: "var(--primary)",
                backgroundColor: "color-mix(in srgb, var(--primary) 6%, transparent)",
              }}
            >
              Start a Project
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="flex items-center justify-center gap-7 mb-16"
          >
            <a
              href="https://github.com/vishnu-vijayakumar204"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub profile"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishnu-vijayakumar-0529b3162"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:vishnu.vijayakumar204@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Send email"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-muted-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
