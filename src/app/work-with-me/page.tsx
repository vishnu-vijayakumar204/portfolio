import type { Metadata } from "next";
import WorkWithMe from "@/components/WorkWithMe";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Technical Lead at Myntra (React, React Native) who also builds and ships products with Next.js. I work with startups and businesses to build new products, ship complex features and improve existing applications.",
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
