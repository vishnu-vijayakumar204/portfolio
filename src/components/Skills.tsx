
const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "GoLang",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
    ],
  },
  {
    label: "SEO & Performance",
    skills: [
      "Core Web Vitals",
      "FCP / LCP Tuning",
      "Next.js SEO",
      "Lighthouse",
    ],
  },
  {
    label: "Tools & Infra",
    skills: [
      "Git / GitHub",
      "GitLab CI/CD",
      "NGINX",
      "PM2",
      "AWS",
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
              <h3 className="mb-4 text-base font-bold text-primary">{cat.label}</h3>
              <ul className="flex flex-wrap gap-2" aria-label={`${cat.label} skills`}>
                {cat.skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {skill}
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
