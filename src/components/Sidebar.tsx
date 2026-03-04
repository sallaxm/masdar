"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Overview" },
  { href: "/qatar", label: "Qatar" },
  { href: "/uae", label: "UAE" },
  { href: "/oman", label: "Oman" },
  { href: "/saudi", label: "Saudi" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-72 flex-col p-6 border-r border-white/10">
      <div className="mb-8">
        <div className="text-xl font-semibold tracking-tight">Masdar</div>
        <div className="text-sm text-white/50">Official sources. One feed.</div>
      </div>

      <nav className="flex flex-col gap-2">
        {nav.map((n) => {
          const active = pathname === n.href;
          return (
            <Link
              key={n.href}
              href={n.href}
              className={[
                "rounded-2xl px-4 py-2 text-white/70 hover:bg-white/5 hover:text-white",
                active ? "bg-white/10 text-white border border-white/10" : "",
              ].join(" ")}
            >
              {n.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 text-xs text-white/40">
        “Masdar” = source. Only whitelisted official publishers.
      </div>
    </aside>
  );
}