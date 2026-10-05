/**
 * Blog infrastructure. Add a post by appending to POSTS: the index page, the
 * article route, the sitemap and the footer link all pick it up automatically.
 * Only publish articles built on real material (shipped work, real numbers).
 *
 * Planned topics (not written yet):
 *  - How I built TravelVisaStack
 *  - How I built an AI-powered expense tracker
 *  - Building a race-discovery platform with Next.js
 *  - Next.js performance optimisation for production applications
 *  - Migrating a React application to Next.js
 *  - Building AI-powered product experiences with Next.js
 */

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; code: string; lang?: string };

export interface Post {
  slug: string;
  title: string;
  description: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  updated?: string;
  body: PostBlock[];
  /** Service pages and case studies to link from the end of the article. */
  links?: { href: string; label: string }[];
}

export const POSTS: Post[] = [];

export const getPosts = () => [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
