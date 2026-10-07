import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title" className="text-sm font-semibold"># About</h2>
      <div className="mt-6 max-w-[62ch] space-y-5 text-fg/80">
        {portfolio.about.map((p) => <p key={p}>{p}</p>)}
      </div>
    </section>
  );
}
