import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo"; // Import the new component

export const metadata: Metadata = {
  title: "Paws & Plants",
  description: "Your one-stop shop for pet-safe plants and expert care advice.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <BackgroundVideo /> {/* ← tady, jedno jediné místo */}

        <main id="content" className="relative z-10 flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
