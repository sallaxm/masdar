"use client";

import { useMemo, useState } from "react";

type Props = {
  title: string;
  subtitle?: string;
  categories: string[];
  onSearch: (q: string) => void;
  onCategory: (c: string) => void;
};

export default function TopBar({ title, subtitle, categories, onSearch, onCategory }: Props) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState("All");

  const chips = useMemo(() => ["All", ...categories], [categories]);

  return (
    <div className="glass p-5 md:p-6 bg-glow">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</div>
          {subtitle ? <div className="text-sm text-white/50 mt-1">{subtitle}</div> : null}
        </div>

        <div className="flex gap-2">
          <a className="btn-ghost" href="/">Home</a>
          <button className="btn-primary" type="button">Verified-only</button>
        </div>
      </div>

      <div className="mt-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex-1">
          <input
            value={q}
            onChange={(e) => {
              const v = e.target.value;
              setQ(v);
              onSearch(v);
            }}
            placeholder="Search official updates…"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 placeholder:text-white/30 outline-none focus:border-white/20"
            aria-label="Search"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {chips.map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                type="button"
                className={["chip", isActive ? "border-white/30 bg-white/10 text-white" : ""].join(" ")}
                onClick={() => {
                  setActive(c);
                  onCategory(c);
                }}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}