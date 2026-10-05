import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { PUBLISHED_STUDIES, getCaseStudy, caseStudyPath, sanitize } from "@/data/caseStudies";
import { visible, todoStyle } from "@/components/Todo";
import { pageMetadata } from "@/lib/site";
import { JsonLd, siteGraph, breadcrumbSchema } from "@/lib/jsonld";
import { Section, PageHero, Breadcrumbs, ButtonLink, Pill, CtaBand, CONTACT_HREF } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return PUBLISHED_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return pageMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: caseStudyPath(study.slug),
  });
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-extrabold">{label}</h2>
      {children}
    </section>
  );
}

function Items({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-foreground/80">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span style={todoStyle(item)}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const found = getCaseStudy(params.slug);
  if (!found) notFound();
  const study = sanitize(found);

  const problem = visible([study.problem].filter(Boolean));
  const built = visible(study.whatIDid);
  const decisions = visible(study.decisions);
  const seo = visible(study.seo ?? []);
  const outcomes = visible(study.outcomes);
  const why = visible([study.whyItMatters].filter(Boolean));

  return (
    <>
      <JsonLd
        data={siteGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case studies", path: "/#projects" },
            { name: study.title, path: caseStudyPath(study.slug) },
          ]),
        )}
      />
      <PageHero>
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Projects", href: "/#projects" }, { name: study.title }]} />
        <p className="mb-4 text-sm font-semibold text-primary">
          <span aria-hidden="true">{study.emoji}</span> Case study · {study.category}
          {study.wip && (
            <span className="ml-3 inline-flex items-center gap-1 rounded-full border border-[var(--amber-border)] bg-[var(--amber-bg)] px-2.5 py-0.5 align-middle text-[11px] font-semibold text-[var(--amber)]">
              <Clock size={11} aria-hidden="true" /> WIP
            </span>
          )}
        </p>
        <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{study.title}</h1>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">{study.whatItIs}</p>
        <ButtonLink href={study.liveUrl} external>View live site</ButtonLink>
      </PageHero>

      <Section tone="muted" className="!pt-14">
        <div className="max-w-3xl">
          {problem.length > 0 && (
            <Block label="The problem">
              {problem.map((s) => (<p key={s} className="leading-relaxed text-foreground/80" style={todoStyle(s)}>{s}</p>))}
            </Block>
          )}
          {built.length > 0 && (<Block label="What I built"><Items items={built} /></Block>)}
          {decisions.length > 0 && (<Block label="Technical decisions"><Items items={decisions} /></Block>)}
          {seo.length > 0 && (<Block label="Performance and SEO"><Items items={seo} /></Block>)}
          {outcomes.length > 0 && (<Block label="Outcome"><Items items={outcomes} /></Block>)}
          {why.length > 0 && (
            <Block label="Why this matters">
              {why.map((s) => (
                <p key={s} className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-lg leading-relaxed text-foreground/80" style={todoStyle(s)}>{s}</p>
              ))}
            </Block>
          )}

          <Block label="Technology">
            <ul className="flex flex-wrap gap-2">
              {study.tech.map((t) => (<li key={t}><Pill>{t}</Pill></li>))}
            </ul>
          </Block>

          <aside className="rounded-2xl border border-border bg-card p-6" aria-label="Related pages">
            <p className="mb-3 text-sm font-semibold text-foreground">Need something similar?</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={study.service.href} className="inline-flex min-h-8 items-center gap-1.5 font-medium text-primary hover:underline">
                  {study.service.label} <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </li>
              {study.related?.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="inline-flex min-h-8 items-center gap-1.5 font-medium text-primary hover:underline">
                    {r.label} <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href={CONTACT_HREF} className="inline-flex min-h-8 items-center gap-1.5 font-medium text-primary hover:underline">
                  Discuss a project <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </Section>

      <CtaBand title="Have something like this in mind?" />
    </>
  );
}
