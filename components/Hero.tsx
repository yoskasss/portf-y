import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pb-16 pt-20 sm:pt-28 md:pb-24">
      <p className="rise text-xs text-muted" style={{ ["--i" as string]: 0 }}>
        [ 01 ] <span aria-hidden="true">~/{portfolio.handle}</span>
      </p>
      <h1 id="hero-title" className="rise mt-6 text-3xl font-semibold tracking-tight sm:text-5xl" style={{ ["--i" as string]: 1 }}>
        {portfolio.name.toUpperCase()}
        <span aria-hidden="true" className="cursor ml-1 inline-block h-[0.8em] w-[0.5ch] translate-y-[0.08em] bg-fg" />
      </h1>
      <p className="rise mt-3 text-lg text-fg/90" style={{ ["--i" as string]: 2 }}>{portfolio.title}</p>
      <p className="rise mt-6 max-w-[60ch] text-sm text-muted" style={{ ["--i" as string]: 3 }}>{portfolio.tagline}</p>
    </section>
  );
}
