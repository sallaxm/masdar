import { FeedItem } from "@/types/item";

export const mockItems: FeedItem[] = [
  {
    id: "qa-1",
    country: "qatar",
    category: "Government",
    title: "Official announcement placeholder",
    summary: "This is mock data. Replace with official-source ingestion later.",
    sourceName: "Official Source (Mock)",
    sourceUrl: "https://example.com",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "qa-2",
    country: "qatar",
    category: "Transport",
    title: "Service update placeholder",
    summary: "Timeline card layout matches the final product UI.",
    sourceName: "Official Source (Mock)",
    sourceUrl: "https://example.com",
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "uae-1",
    country: "uae",
    category: "Municipal",
    title: "Municipal notice placeholder",
    summary: "Mock UAE item for layout/testing.",
    sourceName: "Official Source (Mock)",
    sourceUrl: "https://example.com",
    publishedAt: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
  },
];