"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { PLANTS } from "../data/plants";

export default function PlantQuickSearch() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return PLANTS
      .filter(p => p.name.toLowerCase().includes(s) || (p.latin?.toLowerCase().includes(s)))
      .slice(0, 6);
  }, [q]);

  return (
    <div className="mt-6 max-w-lg">
      <label className="block text-sm text-black/60 mb-1">Rychlé hledání rostliny</label>
      <input
        value={q} onChange={e => setQ(e.target.value)}
        placeholder="Napiš název (např. Calathea)…"
        className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 ring-sage/40"
      />
      {results.length > 0 && (
        <ul className="mt-2 rounded-xl bg-white shadow-soft ring-1 ring-black/5 divide-y">
          {results.map(p => (
            <li key={p.slug} className="p-2 hover:bg-cream/60">
              <Link href={`/pet-safe/${p.slug}`} className="flex justify-between">
                <span>{p.name}{p.latin ? <span className="text-black/50"> · {p.latin}</span>:null}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  p.safety === "SAFE" ? "bg-sage/10 text-sage" :
                  p.safety === "CAUTION" ? "bg-amber-100 text-amber-800" :
                  "bg-rose-100 text-rose-800"
                }`}>{p.safety}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
