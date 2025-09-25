import Link from "next/link";

export default function Page() {
  return (
    <section className="container-pad py-20 sm:py-24">
      <div className="inline-flex items-center gap-2 rounded-2xl bg-white shadow-soft ring-1 ring-black/5 px-3 py-1 text-xs text-black/60">
        <span className="h-2 w-2 rounded-full bg-sage"></span>
        Klidný web pro lidi a psy, co nemají rádi chaos
      </div>

      <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight">
        Pokojovky, psi a ticho pro hlavu.
      </h1>

      <div className="debug-badge">
        Tailwind OK
      </div>

      <p className="mt-4 text-black/70 prose-narrow">
        Pet-friendly tipy, jednoduchá péče a malé rituály. Žádný křik, žádné
        zbytečné komplikace.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/pet-safe" className="btn btn-primary">Najít bezpečné rostliny</Link>
        <Link href="/care" className="btn btn-ghost">Péče podle sezony</Link>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-soft">
          <h3 className="font-medium">Pet-safe databáze</h3>
          <p className="mt-1 text-sm text-black/70">Rychlé filtry, jasné značení bezpečnosti.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-soft">
          <h3 className="font-medium">Péče bez stresu</h3>
          <p className="mt-1 text-sm text-black/70">Zálivka, světlo a přesazování v pár krocích.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-soft">
          <h3 className="font-medium">Rituály klidu</h3>
          <p className="mt-1 text-sm text-black/70">Krátké pauzy a 1-min videa bez křiku.</p>
        </div>
      </div>
    </section>
  );
}
