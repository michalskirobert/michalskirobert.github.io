"use client";

export default function imageLoader({ src, width, quality }: any) {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}
