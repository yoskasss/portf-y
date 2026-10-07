export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language: string; code: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: BlogBlock[];
};

/**
 * Add a post here to publish it. Use a URL-safe, unique slug and an ISO date.
 * Posts are rendered as static pages; no CMS, database, or admin panel is needed.
 */
export const blogPosts: BlogPost[] = [];

export function getPublishedPosts() {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getReadingTime(post: BlogPost) {
  const text = post.content
    .map((block) => {
      if (block.type === "list") return block.items.join(" ");
      if (block.type === "code") return "";
      return block.text;
    })
    .join(" ");
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).filter(Boolean).length / 200));
}
