import { cn } from "../lib/utils"; // když nemáš util, klidně vyhoď cn a spoj className ručně

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-soft", className)}>
      {children}
    </div>
  );
}
