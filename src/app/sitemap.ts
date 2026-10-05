import { MetadataRoute } from "next";
import { PUBLISHED_STUDIES, caseStudyPath } from "@/data/caseStudies";
import { SERVICE_PAGES } from "@/data/services";
import { getPosts } from "@/data/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const paths = [
    "/",
    "/freelance",
    ...SERVICE_PAGES.map((s) => s.path),
    ...PUBLISHED_STUDIES.map((c) => caseStudyPath(c.slug)),
    // The blog index is noindex until there is at least one article.
    ...(posts.length > 0 ? ["/blog", ...posts.map((p) => `/blog/${p.slug}`)] : []),
  ];
  return [...new Set(paths)].map((p) => ({ url: absoluteUrl(p) }));
}
