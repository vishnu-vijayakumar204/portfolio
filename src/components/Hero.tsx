import Link from "next/link";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

/**
 * Server component: no client JS, no canvas, no animation loop. The LCP element is the
 * H1 and it paints with the HTML.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-0px)] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      {/* Static grid, same visual identity as before, minus the animated blobs and particles. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(color-mix(in srgb, var(--primary) 4%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--primary) 4%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary motion-safe:animate-pulse" />
          Open to a few part-time engagements
        </p>

        <h1 className="mb-3 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Vishnu <span className="text-primary">Vijayakumar</span>
        </h1>

        <p className="mb-6 text-xl font-semibold text-primary sm:text-2xl">
          Technical Lead at Myntra · React, Next.js &amp; React Native
        </p>

        <p className="mx-auto mb-4 max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg">
          I build high-scale web &amp; mobile products as a Technical Lead at Myntra. Alongside that, I
          help startups ship production-ready products and features on a part-time basis.
        </p>

        <p className="mx-auto mb-9 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Need senior engineering capacity without hiring another full-time engineer? I take on
          React / Next.js and React Native builds, SaaS and AI-powered product features, Next.js
          migrations, performance work and frontend architecture.
        </p>

        <div className="mb-4 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="#contact">
            Start a project <ArrowRight size={16} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="#projects" variant="secondary">View my work</ButtonLink>
        </div>

        <p className="mb-10 text-sm text-muted-foreground">
          Remote, worldwide · <Link href="/freelance" className="font-medium text-primary hover:underline">How part-time engagements work</Link>
        </p>

        <div className="flex items-center justify-center gap-2">
          {[
            { href: GITHUB_URL, label: "GitHub profile", Icon: Github, external: true },
            { href: LINKEDIN_URL, label: "LinkedIn profile", Icon: Linkedin, external: true },
            { href: `mailto:${EMAIL}`, label: "Send email", Icon: Mail, external: false },
          ].map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
            >
              <Icon size={22} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
