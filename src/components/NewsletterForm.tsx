export default function NewsletterForm() {
  return (
    <form
      action="https://example-embedded-form-url" /* sem vlož action z poskytovatele */
      method="post"
      className="flex gap-2"
    >
      <input
        name="email"
        type="email"
        required
        placeholder="Tvůj e-mail"
        className="rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 ring-sage/40"
      />
      <button className="rounded-xl bg-sage px-4 py-2 text-white">Přijímat v úterý</button>
    </form>
  );
}
