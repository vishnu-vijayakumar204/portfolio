import { isTodo } from "@/data/caseStudies";

const SHOW_TODOS = process.env.NODE_ENV !== "production";

/** Keep real content; keep TODO placeholders only outside production. */
export function visible(items: string[]): string[] {
  return items.filter((s) => SHOW_TODOS || !isTodo(s));
}

/** Amber dashed styling for placeholders so they're obvious in dev. */
export function todoStyle(s: string): React.CSSProperties | undefined {
  return isTodo(s)
    ? {
        border: "1px dashed rgba(245,158,11,0.5)",
        color: "#fcd34d",
        borderRadius: 8,
        padding: "2px 8px",
      }
    : undefined;
}
