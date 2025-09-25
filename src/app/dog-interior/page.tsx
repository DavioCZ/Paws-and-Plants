const TIPS = [
  { title:"Pes okusuje listy", solve:["Vol vyšší stojan nebo závěsné květináče.","SAFE rostliny do podlahové zóny.","Hračky/žvýkací alternativy."] },
  { title:"Hluk u dveří", solve:["„Klidný kout“ mimo průvan.","Měkký koberec, tlumí kroky i hlavu."] },
];
export default function DogInterior(){
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Pes & interiér</h1>
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {TIPS.map(t=>(
          <div key={t.title} className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
            <h3 className="font-medium">{t.title}</h3>
            <ul className="list-disc pl-5 text-sm text-black/70 mt-2">{t.solve.map(s=><li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
