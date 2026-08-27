import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Temporary diagnostic endpoint — reports whether Redis env/config works.
// Returns booleans only, never secrets.
export async function GET() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  const result: Record<string, unknown> = {
    urlSet: !!url,
    tokenSet: !!token,
    urlPreview: url ? `${url.slice(0, 30)}...` : null,
  };

  if (url && token) {
    try {
      const redis = new Redis({ url, token });
      const testKey = `diag-${Date.now()}`;
      await redis.set(testKey, "ok");
      const readBack = await redis.get(testKey);
      await redis.del(testKey);
      result.redisWriteRead = readBack === "ok";
    } catch (err) {
      result.redisWriteRead = false;
      result.error = err instanceof Error ? err.message.slice(0, 200) : String(err).slice(0, 200);
    }
  }

  return NextResponse.json(result);
}
