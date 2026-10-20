import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Links } from "@/components/Links";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import FollowerStats from "@/components/FollowerStats";
import VisitorCounter from "@/components/VisitorCounter";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-fg focus:px-3 focus:py-1 focus:text-bg">
        Skip to content
      </a>
      <Header />
      <main id="main" className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        <Hero />
        <section
          aria-label="Takipçi ve ziyaretçi"
          className="flex flex-col gap-4 border-t border-border pb-24 pt-12"
        >
          <FollowerStats />
          <VisitorCounter />
        </section>
        <div className="grid gap-16 border-t border-border py-16 md:grid-cols-[1.4fr_1fr] md:gap-20 md:py-24">
          <About />
          <Links />
        </div>
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}