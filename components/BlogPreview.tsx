import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPublishedPosts, getReadingTime } from "@/data/blog";

const dateFormat = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function BlogPreview() {
  const posts = getPublishedPosts().slice(0, 2);

  return (
    <section aria-labelledby="writing-title" className="border-t border-border py-16 md:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs text-muted"># Writing</p>
          <h2 id="writing-title" className="mt-2 text-sm font-semibold">Not defteri</h2>
        </div>
        <Link href="/blog" className="group inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-fg">
          tüm yazılar
          <ArrowRight aria-hidden="true" size={13} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      {posts.length ? (
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-fg transition-colors group-hover:text-white">{post.title}</span>
                <span className="flex gap-3 text-xs text-muted">
                  <time dateTime={post.date}>{dateFormat.format(new Date(`${post.date}T00:00:00Z`))}</time>
                  <span>{getReadingTime(post)} dk</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-5 text-xs text-muted">Yeni notlar burada yer alacak.</p>
      )}
    </section>
  );
}
