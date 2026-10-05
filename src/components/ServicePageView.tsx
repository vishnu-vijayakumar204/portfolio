import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServicePage, getServicePage } from "@/data/services";
import { getCaseStudy, caseStudyPath } from "@/data/caseStudies";
import { absoluteUrl } from "@/lib/site";
import { JsonLd, siteGraph, breadcrumbSchema, faqSchema, SERVICE_ID, PERSON_ID } from "@/lib/jsonld";
import {
  Section, SectionHeading, PageHero, Breadcrumbs, ButtonLink, Card, BulletList, Pill, FaqList, CtaBand, CONTACT_HREF,
} from "@/components/ui";

export default function ServicePageView({ page }: { page: ServicePage }) {
  const studies = page.caseStudies.map(getCaseStudy).filter((c) => !!c);
  const related = page.related.map(getServicePage).filter((s) => !!s);

  return (
    <>
      <JsonLd
        data={siteGraph(
          {
            "@type": "Service",
            "@id": absoluteUrl(page.path) + "#service",
            name: page.h1,
            description: page.metaDescription,
            url: absoluteUrl(page.path),
            provider: { "@id": PERSON_ID },
            isPartOf: { "@id": SERVICE_ID },
            areaServed: "Worldwide",
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Freelance", path: "/freelance" },
            { name: page.h1, path: page.path },
          ]),
          faqSchema(page.faq),
        )}
      />

      <PageHero>
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Freelance", href: "/freelance" }, { name: page.metaTitle }]} />
        <p className="mb-4 text-sm font-semibold text-primary">{page.eyebrow}</p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{page.h1}</h1>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{page.intro}</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={CONTACT_HREF}>
            Discuss a project <ArrowRight size={16} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/freelance" variant="secondary">How part-time engagements work</ButtonLink>
        </div>
      </PageHero>

      <Section tone="muted">
        <SectionHeading title="What I build" />
        <div className="grid gap-5 sm:grid-cols-2">
          {page.build.map((b) => (
            <Card key={b.title} as="article">
              <h3 className="mb-2 font-bold text-foreground">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="When you should hire me" />
        <div className="max-w-3xl">
          <BulletList items={page.when} />
        </div>
      </Section>

      {page.approach && (
        <Section tone="muted">
          <SectionHeading title={page.approach.title} />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.approach.steps.map((s, i) => (
              <li key={s.title}>
                <span className="mb-2 block text-4xl font-extrabold text-primary" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mb-1 font-bold text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      <Section tone={page.approach ? "base" : "muted"}>
        <SectionHeading title="Relevant experience" />
        <div className="grid gap-5 md:grid-cols-2">
          {page.experience.map((e) => (
            <Card key={e.title} as="article">
              <h3 className="mb-2 font-bold text-foreground">{e.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {studies.length > 0 && (
        <Section tone={page.approach ? "muted" : "base"}>
          <SectionHeading title="Selected projects" sub="The full write-ups, including what I decided and why." />
          <div className="grid gap-5 md:grid-cols-2">
            {studies.map((c) => (
              <Card key={c!.slug} as="article" className="flex flex-col">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">{c!.category}</p>
                <h3 className="mb-2 text-lg font-bold text-foreground">{c!.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{c!.whatItIs}</p>
                <Link href={caseStudyPath(c!.slug)} data-track="project_click" data-track-label={c!.title} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                  Read the case study <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <Section tone={page.approach ? "base" : "muted"}>
        <SectionHeading title="Technologies" />
        <ul className="flex flex-wrap gap-2">
          {page.tech.map((t) => (<li key={t}><Pill>{t}</Pill></li>))}
        </ul>
      </Section>

      <Section tone={page.approach ? "muted" : "base"}>
        <SectionHeading title="FAQ" />
        <div className="max-w-3xl">
          <FaqList items={page.faq} />
        </div>
      </Section>

      <CtaBand />

      {related.length > 0 && (
        <Section>
          <p className="text-sm text-muted-foreground">
            Related:{" "}
            {related.map((r, i) => (
              <span key={r!.slug}>
                {i > 0 && " · "}
                <Link href={r!.path} className="font-medium text-primary hover:underline">{r!.metaTitle}</Link>
              </span>
            ))}
            {" · "}
            <Link href="/freelance" className="font-medium text-primary hover:underline">All part-time engagements</Link>
          </p>
        </Section>
      )}
    </>
  );
}

