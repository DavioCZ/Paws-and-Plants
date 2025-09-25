import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CalmProvider from "../components/CalmProvider";

export const metadata: Metadata = {
  title: "Paws & Plants",
  description: "Pokojovky, psi a ticho pro hlavu.",
  openGraph: { title:"Paws & Plants", description:"Pokojovky, psi a ticho pro hlavu.", images:["/brand/png/pp-og-1200x630.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased [font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,'Apple Color Emoji','Segoe UI Emoji']">
        <CalmProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CalmProvider>
      {/* Plausible */}
      <script defer data-domain="tvoje-domena.cz" src="https://plausible.io/js/script.js" />
      </body>
    </html>
  );
}
