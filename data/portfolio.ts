/**
 * Single source of truth for all editable content and URLs.
 * Replace any value that starts with "YOUR_" — items with a placeholder
 * URL render without a link until you fill them in.
 */
export const SITE_URL = "https://YOUR_DOMAIN"; // canonical URL placeholder

export const portfolio = {
  name: "Enes Aksoy",
  handle: "yoskass",
  title: "Developer",
  tagline: "18 y/o · 7 years writing code · low-level, security & AI",
  email: "contact@yoskass.dev",

  about: [
    "I'm Enes, 18. I've been writing software since I was 11 — 7 years now.",
    "I work mainly in C, Golang and Python, across cybersecurity, cryptography, game development and AI. Low-level programming is where I spend most of my time — memory, syscalls, bootloaders.",
    "I've written code at T3 AI, competed in the TÜBİTAK Science Olympiads, and built my own operating system from scratch.",
  ],

  links: {
    github: "https://github.com/yoskasss",
    githubSecurity: "https://github.com/HeJo-1",
    linkedin: "https://www.linkedin.com/in/enes-aksoy54/",
    instagram: "https://www.instagram.com/enes.aksoy69",
  },

  projects: [
    { name: "VioletOS", tag: "low-level", description: "Operating system built from scratch.", url: "YOUR_PROJECT_URL" },
    { name: "ZekaNet Labs", tag: "startup", description: "A small startup venture.", url: "YOUR_PROJECT_URL" },
    { name: "ShitMyWeb", tag: "security", description: "Anonymous, no-log media sharing site.", url: "YOUR_PROJECT_URL" },
    { name: "YoskFunc", tag: "tools", description: "A function analysis application.", url: "YOUR_PROJECT_URL" },
  ],

  skills: [
    "C", "Golang", "Python", "Cybersecurity", "Cryptography",
    "Game Development", "AI", "Low-Level Programming",
  ],
};

/** A URL counts as real only if it is an absolute http(s) URL. */
export const isRealUrl = (url: string) => /^https?:\/\//.test(url);
