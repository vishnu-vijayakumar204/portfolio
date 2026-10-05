"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const CTA_HREF = "/freelance";
const CTA_LABEL = "Work with me";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // Close the drawer after navigating.
  useEffect(() => setMobileOpen(false), [pathname]);

  // The page's section anchors only exist on the homepage; elsewhere link to "/#section".
  const hrefFor = (href: string) => (isHome ? href : `/${href}`);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-200 ${
        scrolled || mobileOpen ? "border-b border-border bg-background/90 backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="Vishnu Vijayakumar, home" className="inline-flex min-h-11 items-center">
            <span className="text-2xl font-extrabold text-primary">VV</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={hrefFor(link.href)}
                className="group relative inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
                <span aria-hidden="true" className="absolute bottom-2 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href={CTA_HREF}
              data-track="cta_click"
              data-track-label="navbar"
              className="hidden items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:inline-flex"
            >
              {CTA_LABEL}
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary md:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-5 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={hrefFor(link.href)}
                onClick={() => setMobileOpen(false)}
                className="block min-h-11 rounded-lg px-2 py-3 text-base text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={CTA_HREF}
              data-track="cta_click"
              data-track-label="navbar"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              {CTA_LABEL}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
