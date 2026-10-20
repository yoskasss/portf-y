import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const REDIS_URL =
  process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const REDIS_TOKEN =
  process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
const KEY = "portf-y:visits";

async function redis(command: string): Promise<number | null> {
  if (!REDIS_URL || !REDIS_TOKEN) return null;
  try {
    const res = await fetch(`${REDIS_URL}/${command}`, {
      headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json = await res.json();
    return Number(json.result ?? 0);
  } catch {
    return null;
  }
}

export async function GET() {
  const count = await redis(`get/${KEY}`);
  if (count === null) {
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }
  return NextResponse.json({ count });
}

export async function POST(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "";
  const isBot = /bot|crawl|spider|preview|headless/i.test(ua);

  const count = await redis(isBot ? `get/${KEY}` : `incr/${KEY}`);
  if (count === null) {
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }
  return NextResponse.json({ count });
}