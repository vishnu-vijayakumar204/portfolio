"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/next";

/**
 * Vercel Web Analytics plus custom events. Any element with data-track="<event>" (and an
 * optional data-track-label) is reported on click via one delegated listener, so server
 * components stay server components. Events: cta_click, project_click, external_product_click.
 */
export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const props: Record<string, string> = { path: window.location.pathname };
      if (el.dataset.trackLabel) props.label = el.dataset.trackLabel;
      try {
        track(el.dataset.track!, props);
      } catch {}
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return <Analytics />;
}
