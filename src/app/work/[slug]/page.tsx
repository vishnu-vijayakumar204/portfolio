import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyView from "@/components/CaseStudyView";
import { PUBLISHED_STUDIES, getCaseStudy, isTodo, sanitize } from "@/data/caseStudies";

export const dynamicParams = false;

export function generateStaticParams() {
  return PUBLISHED_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  const description = isTodo(study.whatItIs)
    ? `Case study: ${study.title}`
    : study.whatItIs;
  return {
    title: `${study.title} – Case Study`,
    description,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { title: `${study.title} – Case Study`, description },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();
  return <CaseStudyView study={sanitize(study)} />;
}
