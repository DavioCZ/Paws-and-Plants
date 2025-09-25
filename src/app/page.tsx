import Link from "next/link";
import { Card } from "../components/Card";
import AnimatedInView from "../components/AnimatedInView";
import { Badge } from "../components/Badge";

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <AnimatedInView>
        <div className="inline-flex items-center gap-2 rounded-2xl bg-white shadow-soft ring-1 ring-black/5 px-3 py-1 text-xs text-black/60">
          <span className="h-2 w-2 rounded-full bg-sage" aria-hidden />
          Klidný web pro lidi a psy, co nemají rádi chaos
        </div>
      </AnimatedInView>

      <AnimatedInView delay={0.05}>
        <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
          Pokojovky, psi a ticho pro hlavu.
        </h1>
      </AnimatedInView>

      <AnimatedInView delay={0.1}>
        <p className="mt-4 text-black/70 max-w-prose">
          Pet-friendly tipy, jednoduchá péče a malé rituály. Žádný křik, žádné zbytečné komplikace.
        </p>
      </AnimatedInView>

      <AnimatedInView delay={0.15}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/pet-safe" className="inline-flex items-center rounded-xl bg-sage px-4 py-2 text-white">Najít bezpečné rostliny</Link>
          <Link href="/care" className="inline-flex items-center rounded-xl border border-black/10 px-4 py-2 hover:border-black/20">Péče podle sezony</Link>
        </div>
      </AnimatedInView>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <AnimatedInView><Card><h3 className="font-medium">Pet-safe databáze</h3><p className="mt-1 text-sm text-black/70">Rychlé filtry, jasné značení bezpečnosti. <Badge tone="safe">SAFE</Badge></p></Card></AnimatedInView>
        <AnimatedInView delay={0.05}><Card><h3 className="font-medium">Péče bez stresu</h3><p className="mt-1 text-sm text-black/70">Zálivka, světlo a přesazování v pár krocích.</p></Card></AnimatedInView>
        <AnimatedInView delay={0.1}><Card><h3 className="font-medium">Rituály klidu</h3><p className="mt-1 text-sm text-black/70">Krátké pauzy a 1-min videa bez křiku.</p></Card></AnimatedInView>
      </div>
    </section>
  );
}
