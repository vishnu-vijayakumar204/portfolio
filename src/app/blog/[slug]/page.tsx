import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { POSTS, getPost } from "@/data/posts";
import { pageMetadata, absoluteUrl } from "@/lib/site";
import { JsonLd, siteGraph, breadcrumbSchema, PERSON_ID } from "@/lib/jsonld";
import { Section, PageHero, Breadcrumbs, CtaBand } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}`, type: "article" });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const url = absoluteUrl(`/blog/${post.slug}`);

  return (
    <>
      <JsonLd
        data={siteGraph(
          {
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated ?? post.date,
            mainEntityOfPage: url,
            author: { "@id": PERSON_ID },
          },
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]),
        )}
      />
      <PageHero>
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title }]} />
        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-muted-foreground">{post.date}</time>
      </PageHero>
      <Section tone="muted">
        <article className="mx-auto max-w-3xl space-y-5 leading-relaxed text-foreground/85">
          {post.body.map((b, i) => {
            if (b.type === "h2") return <h2 key={i} className="pt-4 text-2xl font-extrabold">{b.text}</h2>;
            if (b.type === "ul") return (<ul key={i} className="list-disc space-y-2 pl-6">{b.items.map((it) => (<li key={it}>{it}</li>))}</ul>);
            if (b.type === "code") return (<pre key={i} className="overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm"><code>{b.code}</code></pre>);
            return <p key={i}>{b.text}</p>;
          })}
          {post.links && post.links.length > 0 && (
            <p className="border-t border-border pt-6 text-sm text-muted-foreground">
              Related:{" "}
              {post.links.map((l, i) => (<span key={l.href}>{i > 0 && " · "}<Link href={l.href} className="font-medium text-primary hover:underline">{l.label}</Link></span>))}
            </p>
          )}
        </article>
      </Section>
      <CtaBand />
    </>
  );
}
