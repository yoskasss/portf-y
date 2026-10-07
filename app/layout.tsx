import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { portfolio, SITE_URL } from "@/data/portfolio";
import "./globals.css";

const title = `${portfolio.name} — ${portfolio.title}`;
const description =
  "Personal website of Enes Aksoy — developer focused on low-level programming, security, cryptography and AI.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL.startsWith("http") && !SITE_URL.includes("YOUR_") ? SITE_URL : "https://example.com"),
  title,
  description,
  authors: [{ name: portfolio.name }],
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: { title, description, type: "website", siteName: portfolio.name, url: "/" },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = { themeColor: "#0a0a0a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistMono.variable}>
      <body>{children}</body>
    </html>
  );
}
