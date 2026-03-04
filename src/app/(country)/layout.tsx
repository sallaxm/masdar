import Sidebar from "@/components/Sidebar";

export default function CountryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 px-5 md:px-10 py-10">{children}</div>
    </div>
  );
}