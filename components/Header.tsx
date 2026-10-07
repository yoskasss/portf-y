import { portfolio } from "@/data/portfolio";

const nav = [
  { href: "#about", label: "about" },
  { href: "#find-me", label: "find me" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 sm:px-10">
        <a href="#top" className="text-sm text-fg">~/ {portfolio.handle}</a>
        <nav aria-label="Sections">
          <ul className="flex gap-4 text-xs text-muted sm:gap-6">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="py-3 transition-colors hover:text-fg">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
