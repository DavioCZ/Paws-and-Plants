export default function ThisWeek() {
  const items = [
    "Zkontroluj prstem: zalít jen když je vrch suchý.",
    "Otři 3 listy vlhkým hadříkem.",
    "Prohoď rostliny u okna kvůli rovnoměrnému světlu.",
  ];
  return (
    <div className="mt-10 rounded-2xl bg-white p-4 ring-1 ring-black/5 shadow-soft max-w-lg">
      <p className="text-sm font-medium">Tento týden</p>
      <ul className="mt-2 list-disc pl-5 text-sm text-black/70 space-y-1">
        {items.map(i => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}
