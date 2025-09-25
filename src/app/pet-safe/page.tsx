"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { PLANTS, Plant } from "../../data/plants";

export default function PetSafePage() {
  const [safety, setSafety] = useState<""|"SAFE"|"CAUTION"|"TOXIC">("");
  const [light, setLight] = useState<""|"SHADE"|"INDIRECT"|"BRIGHT">("");
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    return PLANTS.filter(p =>
      (!safety || p.safety === safety) &&
      (!light || p.light === light) &&
      (!q || p.name.toLowerCase().includes(q.toLowerCase()))
    );
  }, [safety, light, q]);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Pet-safe databáze</h1>

      <div className="mt-4 flex flex-wrap gap-3">
        <select value={safety} onChange={e=>setSafety(e.target.value as any)} className="rounded-xl border px-3 py-2">
          <option value="">Bezpečnost</option><option>SAFE</option><option>CAUTION</option><option>TOXIC</option>
        </select>
        <select value={light} onChange={e=>setLight(e.target.value as any)} className="rounded-xl border px-3 py-2">
          <option value="">Světlo</option><option value="SHADE">Stín</option><option value="INDIRECT">Polostín</option><option value="BRIGHT">Světlé</option>
        </select>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Hledat…" className="rounded-xl border px-3 py-2" />
      </div>

      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(p => (
          <li key={p.slug} className="rounded-2xl bg-white ring-1 ring-black/5 p-4 shadow-soft">
            <Link href={`/pet-safe/${p.slug}`} className="font-medium">{p.name}</Link>
            <div className="mt-2 text-xs text-black/70">
              {p.latin ? <div>{p.latin}</div> : null}
              <div>Bezpečnost: {p.safety}</div>
              <div>Světlo: {p.light}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
