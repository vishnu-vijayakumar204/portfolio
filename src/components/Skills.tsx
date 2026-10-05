
const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    accent: "var(--primary)",
    skills: [
      { name: "React", level: 95 },
      { name: "React Native", level: 90 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    label: "Backend",
    accent: "var(--primary)",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "GoLang", level: 65 },
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 80 },
      { name: "Prisma", level: 75 },
    ],
  },
  {
    label: "SEO & Performance",
    accent: "var(--primary)",
    skills: [
      { name: "Core Web Vitals", level: 92 },
      { name: "FCP / LCP Tuning", level: 90 },
      { name: "Next.js SEO", level: 88 },
      { name: "Lighthouse", level: 85 },
    ],
  },
  {
    label: "Tools & Infra",
    accent: "var(--primary)",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "GitLab CI/CD", level: 78 },
      { name: "NGINX", level: 72 },
      { name: "PM2", level: 70 },
      { name: "AWS", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 px-4 py-20 sm:px-6 md:py-28 lg:px-8" style={{ backgroundColor: "var(--background)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Skills &amp; <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground">Technologies and tools I reach for on every project.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.label} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-5 text-base font-bold text-primary">{cat.label}</h3>
              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex justify-between">
                      <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div
                      className="h-1.5 overflow-hidden rounded-full bg-muted"
                      role="progressbar"
                      aria-label={skill.name}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={skill.level}
                    >
                      <div className="h-full rounded-full bg-primary" style={{ width: `${skill.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
