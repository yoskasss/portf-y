import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowLeft, BookOpenText } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPublishedPosts, getReadingTime } from "@/data/blog";
import { portfolio, SITE_URL } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Yazılar — ${portfolio.name}`,
  description: `${portfolio.name}'in yazılım, güvenlik ve üretme üzerine notları.`,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Yazılar — ${portfolio.name}`,
    description: `${portfolio.name}'in yazılım, güvenlik ve üretme üzerine notları.`,
    type: "website",
    url: `${SITE_URL}/blog`,
  },
};

const dateFormat = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <Header />
      <main lang="tr" className="mx-auto min-h-[calc(100svh-9rem)] w-full max-w-5xl px-6 sm:px-10">
        <div className="py-12 md:py-20">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-fg">
            <ArrowLeft aria-hidden="true" size={14} />
            ana sayfa
          </Link>
          <div className="mt-12 flex items-center gap-3 text-xs text-muted">
            <span className="h-px w-8 bg-border-hover" />
            <span>YAZILAR / NOTLAR</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">Aklımdan geçenler.</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Yazılım, güvenlik ve bir şeyleri sıfırdan inşa etme üzerine notlar.
            Öğrendiklerimi ve denediklerimi burada biriktiriyorum.
          </p>

          {posts.length > 0 ? (
            <section aria-label="Tüm yazılar" className="mt-14 border-t border-border">
              <ul>
                {posts.map((post) => (
                  <li key={post.slug} className="border-b border-border">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group grid gap-3 py-7 transition-colors sm:grid-cols-[7rem_1fr_auto] sm:items-start sm:gap-8 sm:py-9"
                    >
                      <time dateTime={post.date} className="pt-1 text-xs text-muted">
                        {dateFormat.format(new Date(`${post.date}T00:00:00Z`))}
                      </time>
                      <span>
                        <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.65rem] uppercase tracking-wider text-muted">
                          <span>{post.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{getReadingTime(post)} dk okuma</span>
                        </span>
                        <span className="mt-2 block text-lg font-medium leading-snug text-fg transition-colors group-hover:text-white sm:text-xl">
                          {post.title}
                        </span>
                        <span className="mt-2 block max-w-2xl text-sm leading-6 text-muted">{post.description}</span>
                      </span>
                      <ArrowDownRight
                        aria-hidden="true"
                        size={18}
                        className="hidden text-muted transition-transform group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-fg sm:block"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <section className="mt-14 border-y border-border py-10 sm:py-14">
              <div className="flex max-w-xl gap-5">
                <BookOpenText aria-hidden="true" size={21} strokeWidth={1.4} className="mt-1 shrink-0 text-muted" />
                <div>
                  <h2 className="text-sm font-medium">İlk yazı yolda.</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Yeni bir yazı yayımlandığında burada görünecek. Yazı eklemek için
                    <code className="mx-1 border border-border px-1.5 py-0.5 text-xs text-fg">data/blog.ts</code>
                    dosyasına bir içerik eklemen yeterli.
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
