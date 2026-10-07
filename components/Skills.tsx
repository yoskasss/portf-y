import { portfolio } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-border py-16 md:py-24">
      <h2 id="skills-title" className="text-sm font-semibold"># Skills</h2>
      <ul className="mt-8 flex flex-wrap gap-2">
        {portfolio.skills.map((s) => (
          <li key={s} className="border border-border px-3 py-1 text-xs text-fg/80 transition-colors duration-200 hover:border-border-hover hover:text-fg">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
