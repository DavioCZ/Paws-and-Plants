import Link from "next/link";
export default function NotFound() {
  return (
    <section className="text-center py-24">
      <h1 className="text-3xl font-semibold">Ticho. Tady nic neroste.</h1>
      <p className="text-black/70 mt-2">Zkus domů nebo Pet-safe databázi.</p>
      <Link href="/pet-safe" className="inline-block mt-6 rounded-xl border px-4 py-2">Pet-safe</Link>
    </section>
  );
}
