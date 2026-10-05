import { isTodo } from "@/data/caseStudies";

const SHOW_TODOS = process.env.NODE_ENV !== "production";

/** Keep real content; keep TODO placeholders only outside production. */
export function visible(items: string[]): string[] {
  return items.filter((s) => SHOW_TODOS || !isTodo(s));
}

/** Dashed destructive styling for placeholders so they're obvious in dev. */
export function todoStyle(s: string): React.CSSProperties | undefined {
  return isTodo(s)
    ? {
        border: "1px dashed var(--destructive)",
        color: "var(--destructive)",
        borderRadius: 8,
        padding: "2px 8px",
      }
    : undefined;
}
