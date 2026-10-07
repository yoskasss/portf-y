import { portfolio } from "@/data/portfolio";
import Link from "next/link";

const nav = [
  { href: "/#about", label: "about" },
  { href: "/#find-me", label: "find me" },
  { href: "/#projects", label: "projects" },
  { href: "/#skills", label: "skills" },
  { href: "/blog", label: "blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 sm:px-10">
        <Link href="/" className="text-sm text-fg">~/ {portfolio.handle}</Link>
        <nav aria-label="Sections">
          <ul className="flex gap-3 text-[0.65rem] text-muted sm:gap-6 sm:text-xs">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="py-3 transition-colors hover:text-fg">{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
