"use client";

import { useEffect, useMemo, useState } from "react";
import TopBar from "@/components/TopBar";
import TimelineCard from "@/components/TimelineCard";
import { FeedItem } from "@/types/item";

export default function UaePage() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["Government", "Transport", "Education", "Health", "Municipal", "Safety", "Events"],
    []
  );

  useEffect(() => {
    const params = new URLSearchParams({ country: "uae" });

    if (q) {
      params.set("q", q);
    }

    if (category !== "All") {
      params.set("category", category);
    }

    fetch(`/api/items?${params.toString()}`)
      .then((response) => response.json())
      .then((data) => setItems(data.items ?? []));
  }, [q, category]);

  return (
    <main data-theme="uae" className="space-y-6 bg-glow">
      <TopBar
        title="UAE"
        subtitle="UAE-only timeline from federal and emirate official channels"
        categories={categories}
        onSearch={setQ}
        onCategory={setCategory}
      />

      <section className="space-y-4">
        {items.map((item) => (
          <TimelineCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
