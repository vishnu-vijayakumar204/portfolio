import { SITE_URL, SITE_NAME, EMAIL, GITHUB_URL, LINKEDIN_URL, absoluteUrl } from "@/lib/site";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SERVICE_ID = `${SITE_URL}/#professional-service`;

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: SITE_NAME,
  jobTitle: "Technical Lead",
  description:
    "Technical Lead at Myntra and freelance React, Next.js and React Native developer for startups and product teams.",
  url: SITE_URL,
  email: EMAIL,
  telephone: "+917598110694",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: "Myntra Designs Pvt. Ltd." },
  sameAs: [GITHUB_URL, LINKEDIN_URL],
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "Frontend architecture",
    "Web performance and Core Web Vitals",
    "Technical SEO for Next.js",
    "AI-powered product development",
  ],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: `${SITE_NAME}: Technical Lead & Freelance React / Next.js Developer`,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
};

export const professionalServiceSchema = {
  "@type": "ProfessionalService",
  "@id": SERVICE_ID,
  name: "Deviza Labs: Part-time Product Engineering",
  url: absoluteUrl("/freelance"),
  description:
    "Part-time freelance and contract product engineering by Vishnu Vijayakumar, a Technical Lead at Myntra: React, Next.js and React Native development, SaaS and AI-powered products, Next.js migrations, performance engineering and technical consulting.",
  provider: { "@id": PERSON_ID },
  founder: { "@id": PERSON_ID },
  areaServed: "Worldwide",
  serviceType: [
    "Product development",
    "React and Next.js engineering",
    "React Native development",
    "AI-powered product development",
    "Performance engineering",
    "Technical consulting",
  ],
};

export const siteGraph = (...extra: object[]) => ({
  "@context": "https://schema.org",
  "@graph": extra,
});

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
