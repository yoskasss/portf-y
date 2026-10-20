"use client";

import { followers, isRealUrl } from "@/data/portfolio";

const nf = new Intl.NumberFormat("tr-TR");

export default function FollowerStats() {
  const total = followers.reduce((sum, f) => sum + f.count, 0);

  return (
    <div className="group relative w-full max-w-xs">
      <button
        type="button"
        className="block w-full border-2 border-[#8a1ad6] bg-[#1f1f23] px-6 py-5 text-left shadow-[10px_10px_0_#8a1ad6] outline-none transition-transform focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5"
        aria-label={`Toplam ${total} takipçi, platform detayı için tıkla`}
      >
        <span className="block font-mono text-5xl font-bold tracking-tight text-white">
          {nf.format(total)}
        </span>
        <span className="mt-1 block font-mono text-lg text-neutral-400">
          takipçi
        </span>
      </button>

      <div
        className="invisible absolute left-0 top-[calc(100%+16px)] z-20 w-full min-w-[17rem] border-2 border-[#8a1ad6] bg-[#131316] p-6 opacity-0 shadow-[10px_10px_0_#6d17b8] transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
        role="group"
        aria-label="Platform bazında takipçi"
      >
        <p className="mb-4 font-mono text-sm text-neutral-400">
          platform bazında
        </p>

        <ul>
          {followers.map((f, i) => (
            <li
              key={f.platform}
              className={`flex items-baseline justify-between py-3 ${
                i > 0 ? "border-t-2 border-neutral-800" : ""
              }`}
            >
              {isRealUrl(f.url) ? (
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white hover:underline"
                >
                  {f.platform}
                </a>
              ) : (
                <span className="text-lg text-white">{f.platform}</span>
              )}
              <span className="font-mono text-lg text-neutral-400">
                {nf.format(f.count)} takipçi
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}