// Unified KV storage layer.
// Production (Vercel): Upstash Redis (REST) — set UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
// Local dev / VPS fallback: JSON file at .data/store.json (in-memory cache + fs write)

import { Redis } from "@upstash/redis";
import fs from "fs/promises";
import path from "path";

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

const FILE_PATH = path.join(process.cwd(), ".data", "store.json");
const memory: Record<string, unknown> = {};

export function usingRedis(): boolean {
  return !!redis;
}

async function readWholeFile(): Promise<Record<string, unknown>> {
  try {
    const raw = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function writeWholeFile(data: Record<string, unknown>): Promise<void> {
  await fs.mkdir(path.dirname(FILE_PATH), { recursive: true });
  await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export async function kvGet<T>(key: string): Promise<T | null> {
  if (redis) {
    try {
      return await redis.get<T>(key);
    } catch (err) {
      console.error(`[store] redis get failed for ${key}:`, err);
      return null;
    }
  }
  if (key in memory) return memory[key] as T;
  const file = await readWholeFile();
  if (key in file) {
    memory[key] = file[key];
    return file[key] as T;
  }
  return null;
}

export async function kvSet<T>(key: string, value: T): Promise<void> {
  if (redis) {
    try {
      await redis.set(key, JSON.parse(JSON.stringify(value)));
      return;
    } catch (err) {
      console.error(`[store] redis set failed for ${key}:`, err);
      return;
    }
  }
  memory[key] = value;
  const file = await readWholeFile();
  file[key] = value;
  await writeWholeFile(file);
}
