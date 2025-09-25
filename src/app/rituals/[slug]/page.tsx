const RITUALS: Record<string,{title:string; steps:string[]; audio?:string; }> = {
  "vecerni-reset": { title:"Večerní reset", steps:["Otři 3 listy.","Zalij jen prosící květináč.","3 tiché nádechy."], audio:"/audio/leaf-ambience.mp3" }
};
export default function Ritual({params}:{params:{slug:string}}){
  const r = RITUALS[params.slug]; if(!r) return null;
  return (
    <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold">{r.title}</h1>
      <ol className="mt-4 list-decimal pl-6 space-y-2 text-black/80">{r.steps.map(s=><li key={s}>{s}</li>)}</ol>
      {r.audio && <audio className="mt-4 w-full" controls src={r.audio} />}
    </section>
  );
}
