import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPublishedPosts, getReadingTime } from "@/data/blog";
import { portfolio, SITE_URL } from "@/data/portfolio";

type PageProps = { params: Promise<{ slug: string }> };

const dateFormat = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPosts().find((item) => item.slug === slug);

  if (!post) return { title: `Yazı bulunamadı — ${portfolio.name}` };

  return {
    title: `${post.title} — ${portfolio.name}`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} — ${portfolio.name}`,
      description: post.description,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: new Date(`${post.date}T00:00:00Z`).toISOString(),
      authors: [portfolio.name],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const posts = getPublishedPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  const post = posts[index];

  if (!post) notFound();

  const nextPost = posts[index + 1];

  return (
    <>
      <Header />
      <main lang="tr" className="mx-auto min-h-[calc(100svh-9rem)] w-full max-w-5xl px-6 sm:px-10">
        <article className="mx-auto max-w-2xl py-12 md:py-20">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-fg">
            <ArrowLeft aria-hidden="true" size={14} />
            tüm yazılar
          </Link>

          <header className="mt-12 border-b border-border pb-9">
            <p className="text-xs uppercase tracking-wider text-muted">{post.category}</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-sm leading-7 text-muted sm:text-base">{post.description}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
              <time dateTime={post.date}>{dateFormat.format(new Date(`${post.date}T00:00:00Z`))}</time>
              <span aria-hidden="true">·</span>
              <span>{getReadingTime(post)} dk okuma</span>
              <span aria-hidden="true">·</span>
              <span>{portfolio.name}</span>
            </div>
          </header>

          <div className="blog-content py-9">
            {post.content.map((block, blockIndex) => {
              switch (block.type) {
                case "paragraph":
                  return <p key={blockIndex}>{block.text}</p>;
                case "heading":
                  return <h2 key={blockIndex}>{block.text}</h2>;
                case "quote":
                  return (
                    <blockquote key={blockIndex}>
                      <p>{block.text}</p>
                      {block.attribution && <cite>{block.attribution}</cite>}
                    </blockquote>
                  );
                case "list":
                  return (
                    <ul key={blockIndex}>
                      {block.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  );
                case "code":
                  return (
                    <pre key={blockIndex} data-language={block.language}>
                      <code>{block.code}</code>
                    </pre>
                  );
              }
            })}
          </div>

          {nextPost && (
            <nav aria-label="Yazı gezinme" className="border-t border-border pt-6">
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-center justify-between gap-4 text-sm text-muted transition-colors hover:text-fg"
              >
                <span>
                  <span className="block text-xs text-muted">Sıradaki yazı</span>
                  <span className="mt-1 block">{nextPost.title}</span>
                </span>
                <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </nav>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
