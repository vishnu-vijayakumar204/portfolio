"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { track } from "@vercel/analytics";
import { EMAIL } from "@/lib/site";

const HELP_OPTIONS = [
  "Build a product / MVP",
  "React / Next.js feature work",
  "React Native app",
  "AI-powered feature or product",
  "Performance / Core Web Vitals",
  "Next.js migration / SEO",
  "Technical consulting / architecture review",
  "Not sure yet",
];

const TIMELINE_OPTIONS = ["As soon as possible", "Within a month", "In 1–3 months", "Just exploring"];

const FIELD =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/50";
const LABEL = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground";

const INITIAL = { name: "", email: "", company: "", building: "", help: "", timeline: "", budget: "" };

export default function Contact({ headingLevel = 2 }: { headingLevel?: 2 | 3 }) {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);
  const H = `h${headingLevel}` as "h2" | "h3";

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Email-based on purpose: there is no backend, so this opens the visitor's mail client
  // with the enquiry pre-filled. The address is shown beside the form as a fallback.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project enquiry${form.company ? `: ${form.company}` : ""} (${form.name})`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "-"}`,
      `Timeline: ${form.timeline || "-"}`,
      `Budget: ${form.budget || "-"}`,
      `Needs help with: ${form.help || "-"}`,
      "",
      "What I'm building:",
      form.building,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      track("contact_submit", { help: form.help, timeline: form.timeline });
    } catch {}
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      style={{ backgroundColor: "color-mix(in srgb, var(--muted) 50%, var(--background))" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <H className="mb-4 text-4xl font-extrabold md:text-5xl">
            Tell me about <span className="text-primary">your project</span>
          </H>
          <p className="text-lg text-muted-foreground">
            Need senior engineering capacity without hiring another full-time engineer? Tell me what
            you&apos;re building.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-5 lg:col-span-2">
            <p className="text-sm leading-relaxed text-muted-foreground">
              I take on a small number of part-time freelance and contract projects alongside my role
              as Technical Lead at Myntra. Available for remote part-time engagements worldwide. Fill
              in the form and I&apos;ll respond within 24 hours.
            </p>

            {[
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: MapPin, label: "Based in", value: "Bengaluru, India · working remotely", href: undefined },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <div className="shrink-0 rounded-lg bg-primary/10 p-2.5">
                  <Icon size={18} className="text-primary" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="break-words text-sm text-foreground/80 transition-colors hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground/80">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
              <p className="text-sm text-primary">
                Open to a few part-time engagements. Not available for full-time roles.
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-5 lg:col-span-3" aria-describedby="contact-note">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={LABEL}>Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={onChange} placeholder="Your name" className={FIELD} />
              </div>
              <div>
                <label htmlFor="email" className={LABEL}>Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={onChange} placeholder="you@company.com" className={FIELD} />
              </div>
            </div>

            <div>
              <label htmlFor="company" className={LABEL}>Company</label>
              <input id="company" name="company" type="text" autoComplete="organization" value={form.company} onChange={onChange} placeholder="Company or product name" className={FIELD} />
            </div>

            <div>
              <label htmlFor="building" className={LABEL}>What are you building?</label>
              <textarea id="building" name="building" required rows={4} value={form.building} onChange={onChange} placeholder="A sentence or two is plenty: the product, who it's for, and where you are with it." className={`${FIELD} resize-y`} />
            </div>

            <div>
              <label htmlFor="help" className={LABEL}>What do you need help with?</label>
              <select id="help" name="help" required value={form.help} onChange={onChange} className={FIELD}>
                <option value="" disabled>Select one</option>
                {HELP_OPTIONS.map((o) => (<option key={o} value={o}>{o}</option>))}
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="timeline" className={LABEL}>Expected timeline</label>
                <select id="timeline" name="timeline" required value={form.timeline} onChange={onChange} className={FIELD}>
                  <option value="" disabled>Select one</option>
                  {TIMELINE_OPTIONS.map((o) => (<option key={o} value={o}>{o}</option>))}
                </select>
              </div>
              <div>
                <label htmlFor="budget" className={LABEL}>Approx. budget (optional)</label>
                <input id="budget" name="budget" type="text" value={form.budget} onChange={onChange} placeholder="e.g. $3k–5k, or per month" className={FIELD} />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Start a project <Send size={16} aria-hidden="true" />
            </button>

            <p id="contact-note" role="status" className="text-sm text-muted-foreground">
              {sent ? (
                <>
                  Your email app should have opened with the details filled in. If nothing happened, email{" "}
                  <a className="text-primary underline" href={`mailto:${EMAIL}`}>{EMAIL}</a> directly.
                </>
              ) : (
                "This opens your email app with your details pre-filled. Nothing is sent until you press send there."
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
