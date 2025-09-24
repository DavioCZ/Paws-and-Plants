import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Paws & Plants",
  description: "Pokojovky, psi a ticho pro hlavu.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="min-h-screen flex flex-col">
        <header className="border-b border-black/5 bg-cream sticky top-0 z-50">
          <nav className="container-pad h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-wide">
              <Image src="/logo.png" alt="Paws & Plants logo" width={32} height={32} className="rounded-full" />
              Paws & Plants
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/pet-safe">Pet-safe</Link>
              <Link href="/care">Péče</Link>
              <Link href="/rituals">Rituály</Link>
              <Link href="/dog-interior">Pes & interiér</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/about">O projektu</Link>
            </div>
          </nav>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-black/5 bg-cream">
          <div className="container-pad py-10 text-sm text-black/70">
            <div className="flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Paws & Plants</p>
              <div className="flex gap-4">
                <Link href="/legal/terms">Obchodní podmínky</Link>
                <Link href="/legal/privacy">Ochrana soukromí</Link>
                <Link href="/legal/returns">Reklamace & vrácení</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
