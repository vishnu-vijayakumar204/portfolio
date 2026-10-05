import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SERVICE_PAGES } from "@/data/services";
import { getPosts } from "@/data/posts";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

const linkCls = "inline-flex min-h-8 items-center text-sm text-muted-foreground transition-colors hover:text-foreground";

export default function Footer() {
  const year = new Date().getFullYear();
  const hasPosts = getPosts().length > 0;

  return (
    <footer className="border-t border-border bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <span className="block text-xl font-extrabold text-primary">VV</span>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Technical Lead at Myntra. Part-time freelance &amp; contract product engineering through Deviza Labs.
          </p>
          <div className="mt-4 flex items-center gap-1">
            {[
              { href: GITHUB_URL, label: "GitHub", Icon: Github, ext: true },
              { href: LINKEDIN_URL, label: "LinkedIn", Icon: Linkedin, ext: true },
              { href: `mailto:${EMAIL}`, label: "Email", Icon: Mail, ext: false },
            ].map(({ href, label, Icon, ext }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Services">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">Services</p>
          <ul className="space-y-1">
            <li><Link href="/freelance" className={linkCls}>Part-time engagements</Link></li>
            {SERVICE_PAGES.map((s) => (
              <li key={s.slug}><Link href={s.path} className={linkCls}>{s.metaTitle}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Explore">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">Explore</p>
          <ul className="space-y-1">
            <li><Link href="/#projects" className={linkCls}>Projects</Link></li>
            <li><Link href="/case-studies/travelvisastack" className={linkCls}>TravelVisaStack case study</Link></li>
            <li><Link href="/case-studies/technomanagers-nextjs-migration" className={linkCls}>Next.js migration case study</Link></li>
            {hasPosts && <li><Link href="/blog" className={linkCls}>Blog</Link></li>}
            <li><Link href="/freelance#contact" className={linkCls}>Start a project</Link></li>
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">© {year} Vishnu Vijayakumar</p>
    </footer>
  );
}
