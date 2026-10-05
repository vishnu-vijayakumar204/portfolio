import Link from "next/link";

const CARDS = [
            {
              icon: "⚡",
              title: "Performance First",
              desc: "FCP/LCP optimisation, lazy loading, Core Web Vitals — measurable wins at Myntra scale.",
            },
            {
              icon: "📱",
              title: "Cross-Platform",
              desc: "React Native apps shipped to millions; web + mobile parity is a given, not a goal.",
            },
            {
              icon: "🏗️",
              title: "Scalable Systems",
              desc: "Real-time content config across Myntra's entire consumer surface — home, SIS, PLP, PDP.",
            },
          ];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 px-4 py-20 sm:px-6 md:py-28 lg:px-8" style={{ backgroundColor: "var(--background)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground">Technical Lead by day, product builder by night.</p>
        </div>

        <div className="mx-auto mb-10 max-w-3xl rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-10">
          <h3 className="mb-5 text-lg font-bold text-primary">My Story</h3>
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground/80">
            <p>
              I&apos;m a <strong className="text-foreground">Technical Lead at Myntra</strong> with
              6+ years of experience building web and mobile products at scale. I own the
              full frontend of home, SIS, PLP, and PDP pages used by millions of shoppers
              across India.
            </p>
            <p>
              Before Myntra, I spent nearly four years at{" "}
              <strong className="text-foreground">Codingmart Technologies</strong> as a Product
              Engineer — architecting backends, setting up CI/CD, and shipping full products
              for early-stage startups.
            </p>
            <p>
              Outside work, I run side projects under{" "}
              <strong className="text-foreground">Deviza Labs</strong> — an AI-powered visa
              planner and an LLM-based expense tracker. I also take on a small number of
              part-time freelance and contract projects alongside my role, for teams who need
              senior engineering capacity for fast, high-performance web &amp; mobile apps.{" "}
              <Link href="/freelance" className="font-medium text-primary hover:underline">How that works</Link>.
            </p>
            <p className="text-sm text-primary">React · React Native · Next.js · Node.js · GoLang · MongoDB · SQL</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {CARDS.map((card) => (
            <div key={card.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 text-3xl" aria-hidden="true">{card.icon}</div>
              <h3 className="mb-2 font-bold text-foreground">{card.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
