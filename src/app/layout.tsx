import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paws & Plants",
  description: "Pokojovky, psi a ticho pro hlavu.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased [font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,'Apple Color Emoji','Segoe UI Emoji']">
        <header className="border-b border-black/5 bg-cream/70 backdrop-blur supports-[backdrop-filter]:bg-cream/60 sticky top-0 z-50">
          <nav className="container-pad h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <span className="inline-block h-6 w-6 rounded-full bg-blush"></span>
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
