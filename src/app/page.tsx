import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
      
      <h1 className="text-5xl font-semibold mb-6">
        Masdar
      </h1>

      <p className="text-white/60 max-w-xl mb-10">
        A single timeline built from official sources across the GCC.
        No rumors. No noise. Just the source.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Link href="/qatar" className="p-6 border border-white/10 rounded-3xl hover:bg-white/5">
          Qatar
        </Link>

        <Link href="/uae" className="p-6 border border-white/10 rounded-3xl hover:bg-white/5">
          UAE
        </Link>

        <Link href="/oman" className="p-6 border border-white/10 rounded-3xl hover:bg-white/5">
          Oman
        </Link>

        <Link href="/saudi" className="p-6 border border-white/10 rounded-3xl hover:bg-white/5">
          Saudi
        </Link>
      </div>

    </main>
  );
}