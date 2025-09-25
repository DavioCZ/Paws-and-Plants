import { notFound } from "next/navigation";
import { PLANTS } from "../../../data/plants";

export default function PlantDetail({ params }:{ params:{ slug:string }}) {
  const plant = PLANTS.find(p => p.slug === params.slug);
  if (!plant) return notFound();

  const safetyColor =
    plant.safety === "SAFE" ? "bg-sage/10 text-sage" :
    plant.safety === "CAUTION" ? "bg-amber-100 text-amber-800" :
    "bg-rose-100 text-rose-800";

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className={`inline-block rounded-full px-2.5 py-0.5 text-xs ${safetyColor}`}>{plant.safety}</div>
      <h1 className="text-3xl font-semibold mt-3">{plant.name}</h1>
      {plant.latin && <p className="text-black/60">{plant.latin}</p>}

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
          <p className="text-sm font-medium">Světlo</p><p className="text-sm text-black/70">{plant.light}</p>
        </div>
        <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
          <p className="text-sm font-medium">Zálivka</p><p className="text-sm text-black/70">Podle vyschnutí vrchní vrstvy.</p>
        </div>
        <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
          <p className="text-sm font-medium">Obtížnost</p><p className="text-sm text-black/70">{plant.difficulty}</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-4 ring-1 ring-black/5 text-sm">
        <p className="font-medium">Se psem doma</p>
        <p className="text-black/70 mt-1">Umísti mimo dosah, ideálně vyšší stojan nebo polička. Při potížích kontaktuj veterináře.</p>
      </div>

      <div className="mt-8 rounded-2xl bg-white p-4 ring-1 ring-black/5">
        <p className="text-sm font-medium mb-2">Klidné doplňky</p>
        <div className="flex gap-3 text-sm">
          <a href="/shop/jezevcik-monstera" className="rounded-xl border px-3 py-2">Kšiltovka Jezevčík & Monstera</a>
          <a href="/shop/tote-repot-day" className="rounded-xl border px-3 py-2">Tote „Repot Day“</a>
        </div>
      </div>

      {/* Mini JSON-LD pro SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"Thing","name":plant.name,
        "additionalProperty":[{"@type":"PropertyValue","name":"petSafe","value":plant.safety}]
      })}} />
    </section>
  );
}
