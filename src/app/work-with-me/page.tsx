import type { Metadata } from "next";
import WorkWithMe from "@/components/WorkWithMe";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Technical Lead at Myntra specializing in React, Next.js and React Native. I work with startups and businesses to build new products, ship complex features and improve existing applications.",
  alternates: { canonical: "/work-with-me" },
  openGraph: {
    title: "Work With Me – Senior React / Next.js Engineer",
    description:
      "Need a senior engineer to ship your product? Technical Lead at Myntra, available for selective projects.",
  },
};

export default function WorkWithMePage() {
  return <WorkWithMe />;
}
