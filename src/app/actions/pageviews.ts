"use server";

import redis from "@/app/cache";

const keyFor = (id: number) => `pageviews:article${id}`;

export async function incrementPageviews(articleId: number) {
  const articleKey = keyFor(articleId);
  const newVal = await redis.incr(articleKey);
  return +newVal;
}
