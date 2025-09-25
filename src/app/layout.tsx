import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Paws & Plants",
  description: "Pokojovky, psi a ticho pro hlavu.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased [font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,'Apple Color Emoji','Segoe UI Emoji']">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
