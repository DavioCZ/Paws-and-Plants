"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-black/5 bg-cream/70 backdrop-blur supports-[backdrop-filter]:bg-cream/60 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <Image
            src="/logo.png"        // dej do /public/logo.png
            alt="Paws & Plants"
            width={28} height={28} // fixní rozměry = stabilní layout
            priority               // ať se logo načte hned
          />
          <span className="font-semibold tracking-wide">Paws & Plants</span>
        </Link>
        <div className="hidden sm:flex gap-5 text-sm">
          <Link href="/pet-safe" aria-current={pathname==="/pet-safe" ? "page" : undefined} className="no-underline hover:underline">Pet-safe</Link>
          <Link href="/care" aria-current={pathname==="/care" ? "page" : undefined} className="no-underline hover:underline">Péče</Link>
          <Link href="/rituals" aria-current={pathname==="/rituals" ? "page" : undefined} className="no-underline hover:underline">Rituály</Link>
          <Link href="/dog-interior" aria-current={pathname==="/dog-interior" ? "page" : undefined} className="no-underline hover:underline">Pes & interiér</Link>
          <Link href="/shop" aria-current={pathname==="/shop" ? "page" : undefined} className="no-underline hover:underline">Shop</Link>
          <Link href="/about" aria-current={pathname==="/about" ? "page" : undefined} className="no-underline hover:underline">O projektu</Link>
        </div>
      </nav>
    </header>
  );
}
