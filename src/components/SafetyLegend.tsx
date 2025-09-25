const Dot = ({ className }:{className:string}) => <span className={`h-2 w-2 rounded-full inline-block ${className}`} />;
export default function SafetyLegend() {
  return (
    <div className="mt-4 flex gap-4 text-xs text-black/70">
      <span><Dot className="bg-sage" /> SAFE</span>
      <span><Dot className="bg-amber-500" /> POZOR</span>
      <span><Dot className="bg-rose-500" /> TOXIC</span>
    </div>
  );
}
