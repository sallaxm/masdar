import { FeedItem } from "@/types/item";

function timeAgo(iso: string) {
  const d = new Date(iso).getTime();
  const diff = Date.now() - d;
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 48) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

export default function TimelineCard({ item }: { item: FeedItem }) {
  return (
    <article className="glass glass-hover p-5 md:p-6">
      <div className="flex items-start gap-3">
        <div
          className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 grid place-items-center text-sm text-white/70"
          aria-hidden="true"
        >
          ✓
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <div className="text-sm text-white/70">{item.sourceName}</div>
            <span className="text-white/30">•</span>
            <div className="text-sm text-white/40">{timeAgo(item.publishedAt)}</div>
            <span className="text-white/30">•</span>
            <div className="text-sm text-white/60">{item.category}</div>
          </div>

          <h3 className="mt-2 text-lg md:text-xl font-semibold tracking-tight">
            {item.title}
          </h3>

          <p className="mt-2 text-white/65 leading-relaxed">
            {item.summary}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Open official source →
            </a>
            <button className="btn-ghost" type="button">Save</button>
            <button className="btn-ghost" type="button">Copy</button>
          </div>
        </div>
      </div>
    </article>
  );
}