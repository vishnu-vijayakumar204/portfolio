import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/data/posts";
import { pageMetadata } from "@/lib/site";
import { Section, PageHero, Card } from "@/components/ui";

const posts = getPosts();

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Blog",
    description: "Engineering notes on building and shipping React, Next.js and React Native products.",
    path: "/blog",
  }),
  // An empty index is thin content: keep it out of search until there are articles.
  robots: posts.length === 0 ? { index: false, follow: true } : undefined,
};

export default function BlogIndex() {
  return (
    <>
      <PageHero>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Blog</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Engineering notes on building and shipping React, Next.js and React Native products.
        </p>
      </PageHero>
      <Section tone="muted">
        {posts.length === 0 ? (
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            No articles yet. I only publish write-ups of work I&apos;ve actually shipped, so the first
            ones will cover the products on the{" "}
            <Link href="/#projects" className="font-medium text-primary hover:underline">projects page</Link>.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((p) => (
              <Card key={p.slug} as="article">
                <time dateTime={p.date} className="text-xs text-muted-foreground">{p.date}</time>
                <h2 className="mb-2 mt-1 text-xl font-bold">
                  <Link href={`/blog/${p.slug}`} className="hover:text-primary">{p.title}</Link>
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </Card>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
