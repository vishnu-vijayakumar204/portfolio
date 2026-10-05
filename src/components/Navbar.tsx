"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const WORK_WITH_ME = "/work-with-me";

const MotionLink = motion(Link);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On the homepage, smooth-scroll. Elsewhere, let Next navigate to "/#section".
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);
    if (!isHome) return;
    e.preventDefault();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={
        scrolled
          ? {
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              backgroundColor: "color-mix(in srgb, var(--background) 88%, transparent)",
              borderBottom: "1px solid var(--border)",
            }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            aria-label="Home"
          >
            <span
              className="text-2xl font-extrabold text-primary"
            >
              VV
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link, i) => (
              <MotionLink
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--primary)" }}
                />
              </MotionLink>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <MotionLink
              href={WORK_WITH_ME}
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--primary)" }}
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-lg)" }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Work With Me
            </MotionLink>
            <button
              className="md:hidden text-muted-foreground hover:text-foreground transition-colors p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden"
            style={{
              overflow: "hidden",
              borderTop: "1px solid var(--border)",
              backgroundColor: "color-mix(in srgb, var(--background) 97%, transparent)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <motion.div
              className="px-5 py-5 flex flex-col gap-1"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {navLinks.map((link) => (
                <MotionLink
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-foreground/80 hover:text-foreground text-base py-3 px-2 rounded-lg hover:bg-muted transition-colors block"
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
                  }}
                >
                  {link.label}
                </MotionLink>
              ))}
              <MotionLink
                href={WORK_WITH_ME}
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-primary-foreground"
                style={{ background: "var(--primary)" }}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
                }}
                whileTap={{ scale: 0.97 }}
              >
                Work With Me
              </MotionLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
