import { ArrowUpRight, Camera, Code2, Mail, Play, ShieldCheck, User, type LucideIcon } from "lucide-react";
import { portfolio, isRealUrl } from "@/data/portfolio";

type Item = { label: string; desc: string; href: string; icon: LucideIcon; external: boolean };

const { links, email } = portfolio;
const items: Item[] = [
  { label: "Email", desc: email, href: `mailto:${email}`, icon: Mail, external: false },
  { label: "GitHub — main", desc: "Main GitHub profile", href: links.github, icon: Code2, external: true },
  { label: "GitHub — security", desc: "Security focused repositories", href: links.githubSecurity, icon: ShieldCheck, external: true },
  { label: "LinkedIn", desc: "Professional profile", href: links.linkedin, icon: User, external: true },
  { label: "Instagram", desc: "Personal account", href: links.instagram, icon: Camera, external: true },
  { label: "YouTube", desc: "@yoskasss", href: links.youtube, icon: Play, external: true },
];

export function Links() {
  return (
    <section id="find-me" aria-labelledby="find-title">
      <h2 id="find-title" className="text-sm font-semibold"># Find Me</h2>
      <ul className="mt-6 divide-y divide-border border-y border-border">
        {items.map(({ label, desc, href, icon: Icon, external }) => {
          const live = !external || isRealUrl(href);
          const inner = (
            <>
              <Icon aria-hidden="true" size={16} strokeWidth={1.5} className="mt-1 shrink-0 text-muted transition-colors group-hover:text-fg" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-fg">{label}</span>
                <span className="block break-words text-xs text-muted">{desc}</span>
              </span>
              {external && (
                <ArrowUpRight aria-hidden="true" size={14} className="mt-1 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
              )}
            </>
          );
          return (
            <li key={label}>
              {live ? (
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-start gap-3 py-4"
                >
                  {inner}
                </a>
              ) : (
                <div className="group flex items-start gap-3 py-4 opacity-60">
                  {inner}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}