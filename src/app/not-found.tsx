import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-pad py-24 text-center">
      <h1 className="text-3xl font-semibold">Ticho. Tady nic neroste.</h1>
      <p className="mt-2 text-black/70">Stránka nenalezena.</p>
      <Link href="/" className="inline-block mt-6 rounded-lg bg-sage px-4 py-2 text-white">
        Zpět domů
      </Link>
    </section>
  );
}
