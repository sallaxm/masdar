import { NextRequest } from "next/server";
import { mockItems } from "@/data/mockItems";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get("country");
  const q = (searchParams.get("q") || "").toLowerCase();
  const category = searchParams.get("category");

  const filtered = mockItems
    .filter((i) => (country ? i.country === country : true))
    .filter((i) => (category ? i.category === category : true))
    .filter((i) => (q ? (i.title + " " + i.summary).toLowerCase().includes(q) : true))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return Response.json({ items: filtered });
}