"use client";

import { useEffect, useMemo, useState } from "react";
import { Country, FeedItem } from "@/types/item";
import TopBar from "@/components/TopBar";
import TimelineCard from "@/components/TimelineCard";

const DEFAULT_CATEGORIES = [
  "Government",
  "Transport",
  "Education",
  "Health",
  "Municipal",
  "Safety",
  "Events",
];

type Props = {
  country: Country;
  title: string;
};

export default function CountryTimelinePage({ country, title }: Props) {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => DEFAULT_CATEGORIES, []);

  useEffect(() => {
    const params = new URLSearchParams({ country });

    if (q) {
      params.set("q", q);
    }

    if (category !== "All") {
      params.set("category", category);
    }

    fetch(`/api/items?${params.toString()}`)
      .then((response) => response.json())
      .then((data) => setItems(data.items ?? []));
  }, [country, q, category]);

  return (
    <main data-theme={country} className="space-y-6 bg-glow">
      <TopBar
        title={title}
        subtitle="Official updates timeline (mock data for now)"
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
