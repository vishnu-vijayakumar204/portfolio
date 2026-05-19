import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = "https://portfolio-two-peach-13.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vishnu Vijayakumar – Technical Lead & Freelance Developer",
    template: "%s | Vishnu Vijayakumar",
  },
  description:
    "Technical Lead at Myntra with 5+ years building high-performance web & mobile products at scale. React, React Native, Next.js specialist. Available for freelance projects in India.",
  keywords: [
    "React developer Bangalore",
    "React Native freelancer India",
    "hire React developer India",
    "Next.js developer",
    "Core Web Vitals expert",
    "Technical Lead Myntra",
    "frontend engineer Bengaluru",
    "React Native developer India",
    "performance engineering",
    "web development freelancer India",
    "Vishnu Vijayakumar",
  ],
  authors: [{ name: "Vishnu Vijayakumar" }],
  openGraph: {
    title: "Vishnu Vijayakumar – Technical Lead & Freelance Developer",
    description:
      "Technical Lead at Myntra with 5+ years building high-performance web & mobile products at scale.",
    type: "website",
    url: BASE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vishnu Vijayakumar – Technical Lead & Freelance Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishnu Vijayakumar – Technical Lead & Freelance Developer",
    description:
      "Technical Lead at Myntra with 5+ years building high-performance web & mobile products at scale.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Vishnu Vijayakumar",
      jobTitle: "Technical Lead",
      worksFor: {
        "@type": "Organization",
        name: "Myntra Designs Pvt. Ltd.",
      },
      url: BASE_URL,
      email: "vishnu.vijayakumar204@gmail.com",
      telephone: "+917598110694",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/vishnu-vijayakumar204",
        "https://www.linkedin.com/in/vishnu-vijayakumar-0529b3162",
      ],
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#services`,
      provider: { "@id": `${BASE_URL}/#person` },
      serviceType: [
        "Web Application Development",
        "Mobile App Development",
        "SEO Optimization",
        "Performance Engineering",
      ],
      areaServed: "IN",
      description:
        "Freelance web and mobile development services including React, React Native, Next.js, SEO optimization, and Core Web Vitals performance engineering.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased"
        style={{ backgroundColor: "#0a0a0f", color: "#f1f5f9" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
