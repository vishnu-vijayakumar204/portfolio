import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";

/** Shared, server-rendered building blocks for the content pages (no client JS). */

export const CONTACT_HREF = "/freelance#contact";

export function Section({
  id,
  tone = "base",
  children,
  className = "",
}: {
  id?: string;
  tone?: "base" | "muted";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`px-4 py-16 sm:px-6 md:py-24 lg:px-8 scroll-mt-20 ${className}`}
      style={tone === "muted" ? { backgroundColor: "color-mix(in srgb, var(--muted) 50%, var(--background))" } : undefined}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  id,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl md:mb-12">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      )}
      <h2 id={id} className="text-3xl font-extrabold leading-tight md:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

const BUTTON_BASE =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-base";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}) {
  const style =
    variant === "primary"
      ? `${BUTTON_BASE} bg-primary text-primary-foreground shadow-lg hover:-translate-y-0.5 hover:shadow-xl`
      : `${BUTTON_BASE} border border-border text-foreground hover:border-primary hover:text-primary`;
  const cls = `${style} ${className}`;
  const track = { "data-track": external ? "external_product_click" : "cta_click", "data-track-label": href };
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...track}>
        {children}
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...track}>
      {children}
    </Link>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={`rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg ${className}`}
    >
      {children}
    </Tag>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-foreground/80">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Native <details>: accessible and keyboard-operable with zero JavaScript. */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((f) => (
        <details key={f.q} className="group px-5 py-4 sm:px-6">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
            {f.q}
            <ChevronRight
              size={18}
              aria-hidden="true"
              className="shrink-0 text-muted-foreground transition-transform group-open:rotate-90"
            />
          </summary>
          <p className="pb-2 pt-2 leading-relaxed text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {it.href ? (
              <Link href={it.href} className="hover:text-foreground hover:underline">
                {it.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground/80">
                {it.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CtaBand({
  title = "Need senior engineering capacity without hiring another full-time engineer?",
  body = "Tell me what you're building and what you need help with. I'll reply with an honest take on fit and scope.",
  label = "Start a project",
}: {
  title?: string;
  body?: string;
  label?: string;
}) {
  return (
    <Section tone="muted">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold leading-tight md:text-4xl">{title}</h2>
        <p className="mb-8 text-lg text-muted-foreground">{body}</p>
        <ButtonLink href={CONTACT_HREF}>
          {label} <ArrowRight size={16} aria-hidden="true" />
        </ButtonLink>
        <p className="mt-4 text-sm text-muted-foreground">
          Part-time freelance and contract engagements · Remote, worldwide
        </p>
      </div>
    </Section>
  );
}

/** Top-of-page wrapper that clears the fixed navbar. */
export function PageHero({ children }: { children: React.ReactNode }) {
  return (
    <header className="px-4 pb-14 pt-28 sm:px-6 md:pb-20 md:pt-36 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">{children}</div>
      </div>
    </header>
  );
}
