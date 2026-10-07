import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <p className="mx-auto max-w-5xl px-6 py-8 text-xs text-muted sm:px-10">
        {"// "}
        <a href={`mailto:${portfolio.email}`} className="underline decoration-border-hover underline-offset-4 transition-colors hover:text-fg">
          {portfolio.email}
        </a>{" "}
        — no trackers
      </p>
    </footer>
  );
}
