"use client";
import Link from "next/link";
import { useCalm } from "./CalmProvider";

export default function Header() {
  const { calm, toggle } = useCalm();
  return (
    <header className="border-b border-black/5 bg-cream/70 backdrop-blur supports-[backdrop-filter]:bg-cream/60 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="inline-block h-6 w-6 rounded-full bg-blush" aria-hidden />
          <span className="font-semibold tracking-wide">Paws & Plants</span>
        </Link>
        <div className="hidden sm:flex gap-5 text-sm">
          <Link href="/pet-safe" className="no-underline hover:underline">Pet-safe</Link>
          <Link href="/care" className="no-underline hover:underline">Péče</Link>
          <Link href="/rituals" className="no-underline hover:underline">Rituály</Link>
          <Link href="/dog-interior" className="no-underline hover:underline">Pes & interiér</Link>
          <Link href="/shop" className="no-underline hover:underline">Shop</Link>
          <Link href="/about" className="no-underline hover:underline">O projektu</Link>
        </div>
        <button onClick={toggle} className="text-xs rounded-lg border px-2 py-1">
          {calm ? "Calm on" : "Calm off"}
        </button>
      </nav>
    </header>
  );
}
