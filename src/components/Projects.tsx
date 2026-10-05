import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { OWN_PRODUCTS, CLIENT_WORK, caseStudyPath } from "@/data/caseStudies";

const LABEL = "mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I don&apos;t just code tickets. I can take a product from idea to production. These three I
            built and shipped myself, under Deviza Labs.
          </p>
        </div>

        {/* Own products */}
        <div className="grid gap-6 lg:grid-cols-3">
          {OWN_PRODUCTS.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="text-4xl" aria-hidden="true">{p.emoji}</span>
                <div className="flex flex-wrap justify-end gap-2">
                  {p.wip && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-[var(--amber-border)] bg-[var(--amber-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--amber)]">
                      <Clock size={11} aria-hidden="true" /> WIP
                    </span>
                  )}
                  <span className="rounded-full border border-[var(--amber-border)] bg-[var(--amber-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--amber)]">
                    Own Product
                  </span>
                </div>
              </div>

              <h3 className="mb-1 text-xl font-bold text-foreground">{p.title}</h3>
              <p className="mb-4 text-xs font-medium text-primary">{p.category}</p>

              <div className="mb-4 flex-1 space-y-3 text-sm leading-relaxed">
                <div>
                  <p className={LABEL}>What it does</p>
                  <p className="text-muted-foreground">{p.whatItIs}</p>
                </div>
                {p.cardBuilt && (
                  <div>
                    <p className={LABEL}>What I built</p>
                    <p className="text-muted-foreground">{p.cardBuilt}</p>
                  </div>
                )}
                {p.cardDecision && (
                  <div>
                    <p className={LABEL}>Key decision</p>
                    <p className="text-muted-foreground">{p.cardDecision}</p>
                  </div>
                )}
              </div>

              <ul className="mb-5 flex flex-wrap gap-2" aria-label={`${p.title} technologies`}>
                {p.tech.map((t) => (
                  <li key={t} className="rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{t}</li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="external_product_click"
                  data-track-label={p.title}
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  aria-label={`View ${p.title} live (opens in a new tab)`}
                >
                  View live <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <Link
                  href={caseStudyPath(p.slug)}
                  data-track="project_click"
                  data-track-label={p.title}
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-foreground"
                  aria-label={`Read the ${p.title} case study`}
                >
                  Case study <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Client work */}
        <div className="mt-16">
          <h3 className="mb-2 text-2xl font-extrabold">Client work</h3>
          <p className="mb-8 text-muted-foreground">Problem, what I did, technology, outcome.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CLIENT_WORK.map((w) => (
              <article
                key={w.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">{w.emoji}</span>
                  <h4 className="text-lg font-bold text-foreground">{w.title}</h4>
                </div>
                <dl className="mb-4 flex-1 space-y-3 text-sm leading-relaxed">
                  {w.problem && (
                    <div>
                      <dt className={LABEL}>Problem</dt>
                      <dd className="text-muted-foreground">{w.problem}</dd>
                    </div>
                  )}
                  <div>
                    <dt className={LABEL}>What I did</dt>
                    <dd className="text-muted-foreground">{w.whatIDid}</dd>
                  </div>
                  <div>
                    <dt className={LABEL}>Technology</dt>
                    <dd className="text-muted-foreground">{w.tech.join(" · ")}</dd>
                  </div>
                  {w.outcome && (
                    <div>
                      <dt className={LABEL}>Outcome</dt>
                      <dd className="text-muted-foreground">{w.outcome}</dd>
                    </div>
                  )}
                </dl>
                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1">
                  {w.liveUrl && (
                    <a
                      href={w.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track="external_product_click"
                      data-track-label={w.title}
                      className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      aria-label={`View ${w.title} live (opens in a new tab)`}
                    >
                      View live <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}
                  {w.caseStudy && (
                    <Link
                      href={w.caseStudy}
                      data-track="project_click"
                      data-track-label={w.title}
                      className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-foreground"
                      aria-label={`Read the ${w.title} case study`}
                    >
                      Case study <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
