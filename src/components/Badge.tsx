export function Badge({ children, tone = "default" }:{children:React.ReactNode; tone?: "default"|"safe"|"caution"|"toxic"}) {
  const map = {
    default: "bg-black/5 text-black/70",
    safe: "bg-sage/10 text-sage",
    caution: "bg-amber-100 text-amber-800",
    toxic: "bg-rose-100 text-rose-800",
  } as const;
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${map[tone]}`}>{children}</span>;
}
