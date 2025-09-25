const GUIDES = [
  { slug:"zalivka-podle-svetla", title:"Zálivka podle světla", summary:"Jak zalévat stínomilky vs. světlomilky." },
  { slug:"presazovani-bez-stresu", title:"Přesazování bez stresu", summary:"15 minut klidu a čisté ruce." },
];
export default function CareList() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Péče</h1>
      <ul className="mt-6 space-y-3">
        {GUIDES.map(g => (
          <li key={g.slug} className="rounded-2xl bg-white ring-1 ring-black/5 p-4">
            <a href={`/care/${g.slug}`} className="font-medium">{g.title}</a>
            <p className="text-sm text-black/70">{g.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
