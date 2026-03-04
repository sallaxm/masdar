"use client";
import { useEffect, useMemo, useState } from "react";
import TopBar from "@/components/TopBar";
import TimelineCard from "@/components/TimelineCard";
import { FeedItem } from "@/types/item";

export default function OmanPage() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const categories = useMemo(
    () => ["Government", "Transport", "Education", "Health", "Municipal", "Safety", "Events"],
    []
  );

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("country", "oman");
    if (q) params.set("q", q);
    if (category !== "All") params.set("category", category);
    fetch(`/api/items?${params.toString()}`).then(r=>r.json()).then(d=>setItems(d.items ?? []));
  }, [q, category]);

  return (
    <main data-theme="oman" className="space-y-6 bg-glow">
      <TopBar title="Oman" subtitle="Official updates timeline (mock data for now)" categories={categories} onSearch={setQ} onCategory={setCategory} />
      <section className="space-y-4">{items.map((item) => <TimelineCard key={item.id} item={item} />)}</section>
    </main>
  );
}