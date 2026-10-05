import type { Metadata } from "next";

/** Canonical origin. Hard-coded on purpose: a stray env var must not change canonicals. */
export const SITE_URL = "https://about.devizalabs.com";

export const SITE_NAME = "Vishnu Vijayakumar";
export const EMAIL = "vishnu.vijayakumar204@gmail.com";
export const GITHUB_URL = "https://github.com/vishnu-vijayakumar204";
export const LINKEDIN_URL = "https://www.linkedin.com/in/vishnu-vijayakumar-0529b3162";

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Vishnu Vijayakumar: Technical Lead at Myntra. React, Next.js, React Native. Product engineering.",
};

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path === "/" ? "/" : path.replace(/\/$/, "")}`;

/**
 * One place that builds per-page metadata so every page gets a canonical URL,
 * Open Graph and Twitter tags (a child `openGraph` replaces the parent's, so
 * each page has to restate them).
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is, without the " | Vishnu Vijayakumar" suffix. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
