import { ArrowUpRight } from "lucide-react";
import { portfolio, isRealUrl } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-border py-16 md:py-24">
      <h2 id="projects-title" className="text-sm font-semibold"># Projects</h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {portfolio.projects.map((p) => {
          const live = isRealUrl(p.url);
          const body = (
            <>
              <span className="flex items-start justify-between gap-2">
                <span className="text-sm font-semibold text-fg">{p.name}</span>
                {live && (
                  <ArrowUpRight aria-hidden="true" size={14} className="mt-1 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                )}
              </span>
              <span className="mt-2 block text-xs leading-relaxed text-muted">{p.description}</span>
              <span className="mt-auto block pt-6 text-xs text-muted/70">#&nbsp;{p.tag}</span>
            </>
          );
          const cls = "group flex h-full min-h-36 flex-col border border-border p-4 transition-colors duration-200";
          return (
            <li key={p.name}>
              {live ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} (opens in a new tab)`} className={`${cls} hover:border-border-hover hover:bg-white/[0.02]`}>
                  {body}
                </a>
              ) : (
                <div className={cls}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
