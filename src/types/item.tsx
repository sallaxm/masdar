export type Country = "qatar" | "uae" | "oman" | "saudi";
export type Category =
  | "Government"
  | "Transport"
  | "Education"
  | "Health"
  | "Energy"
  | "Immigration"
  | "Municipal"
  | "Safety"
  | "Events";

export type FeedItem = {
  id: string;
  country: Country;
  category: Category;
  title: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  publishedAt: string; // ISO
};