const DB: Record<string,{title:string; goal:string; material:string[]; steps:string[]; mistakes:string[]; minute:string; }> = {
  "zalivka-podle-svetla": {
    title:"Zálivka podle světla",
    goal:"Udržet rytmus bez přelití.",
    material:["Konev s úzkým hrdlem","Prst a trpělivost"],
    steps:["Zkontroluj vrchní 2–3 cm zeminy.","Stínomilky zalévej méně, světlomilky častěji.","Vodu lij pomalu dokola květináče."],
    mistakes:["Zálivka ve stresu (rychle a hodně).","Ponechání vody v misce."],
    minute:"3 pomalé nádechy. Nic víc."
  },
  // ...
};

export default function Guide({params}:{params:{slug:string}}){
  const g = DB[params.slug]; if(!g) return null;
  return (
   <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
     <h1 className="text-3xl font-semibold">{g.title}</h1>
     <p className="mt-2 text-black/70">{g.goal}</p>

     <h2 className="mt-6 font-medium">Materiál</h2>
     <ul className="list-disc pl-6 text-sm text-black/80">{g.material.map(m=><li key={m}>{m}</li>)}</ul>

     <h2 className="mt-6 font-medium">Kroky</h2>
     <ol className="list-decimal pl-6 text-sm text-black/80 space-y-1">{g.steps.map(s=><li key={s}>{s}</li>)}</ol>

     <h2 className="mt-6 font-medium">Časté chyby</h2>
     <ul className="list-disc pl-6 text-sm text-black/80">{g.mistakes.map(m=><li key={m}>{m}</li>)}</ul>

     <div className="mt-6 rounded-2xl bg-cream/70 p-4 text-sm">{g.minute}</div>
   </section>
  );
}
