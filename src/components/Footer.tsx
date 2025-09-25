import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-black/70">
        <div className="flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <div className="mb-6">
            <p className="text-sm mb-2">Úterní klid: jednou týdně 3 řádky bez křiku.</p>
            <NewsletterForm />
          </div>
          <p>© {new Date().getFullYear()} Paws & Plants</p>
          <div className="flex gap-4">
            <Link href="/legal/terms">Obchodní podmínky</Link>
            <Link href="/legal/privacy">Ochrana soukromí</Link>
            <Link href="/legal/returns">Reklamace & vrácení</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
