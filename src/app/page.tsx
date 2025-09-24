import Link from "next/link";

export default function Page() {
  return (
    <section className="container-pad py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        Pokojovky, psi a ticho pro hlavu.
      </h1>
      <p className="mt-3 text-black/70 prose-narrow">
        Klidný web o pokojovkách bezpečných pro psy, jednoduché péči a malých
        rituálech. Bez křiku, bez spěchu.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/pet-safe" className="rounded-lg bg-sage px-4 py-2 text-white">
          Najít bezpečné rostliny
        </Link>
        <Link href="/care" className="rounded-lg border px-4 py-2">
          Péče podle sezony
        </Link>
      </div>
    </section>
  );
}
