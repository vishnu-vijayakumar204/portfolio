import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { pageMetadata } from "@/lib/site";
import { JsonLd, siteGraph, professionalServiceSchema } from "@/lib/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "Vishnu Vijayakumar | Freelance React & Next.js Developer | Myntra Tech Lead",
  description:
    "Technical Lead at Myntra and freelance React, Next.js & React Native developer. I help startups build high-performance web, mobile, SaaS and AI-powered products.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <JsonLd data={siteGraph(professionalServiceSchema)} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Skills />
      <Contact />
    </>
  );
}
