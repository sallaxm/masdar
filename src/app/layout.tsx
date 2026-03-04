import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masdar",
  description: "Official sources. One feed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}