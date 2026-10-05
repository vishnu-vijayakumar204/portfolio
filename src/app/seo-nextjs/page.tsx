import type { Metadata } from "next";
import ServicePageView from "@/components/ServicePageView";
import { getServicePage } from "@/data/services";
import { pageMetadata } from "@/lib/site";

const page = getServicePage("seo-nextjs")!;

export const metadata: Metadata = pageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
});

export default function Page() {
  return <ServicePageView page={page} />;
}
