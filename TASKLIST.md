Dobře, ať z toho není další žonglování s pětadvaceti míčky. Tady máš **jediný tasklist soubor**, který můžeš hodit do kořene repa jako `TASKLIST.md`. Je po krocích, s jasnými „Definition of done“, odkazy na soubory a závislostmi. Odškrtáváš `- [x]`.

---

# Název souboru: `TASKLIST.md`

> Cíl: postupně dorovnat UI k „zen, pokojovky & psi“, sjednotit barvy, zlepšit čitelnost a přístupnost.
> Jak: úkoly dělené do fází, každý má **DoD** (Definition of Done) a konkrétní soubory.

---

## FÁZE 0 — bezpečný základ (udělej první)

* [ ] **Záloha a čistý start**

  * [ ] Merge/commit aktuální stav do `main`.
  * [ ] Smaž cache: `.next/` a znovu `npm run dev` (jen ať víme, že běží).
  * **DoD:** `localhost:3000` běží bez chyb.

---

## FÁZE 1 — barvy a tokeny (single source of truth)

* [x] **Přidej CSS proměnné (barvy z loga)**

  * Soubor: `src/app/globals.css`
  * Vlož do `:root`:

    ```css
    --brand-spruce:#2F5E45; --brand-sage:#8DBF75; --brand-cream:#F7F4EE;
    --brand-sand:#EADBC8; --brand-clay:#B47C5C; --brand-chestnut:#8D5F47;
    --color-bg:var(--brand-cream); --color-surface:#FFFEFB; --color-ink:#1F312A;
    --color-muted:#5E7067; --color-border:rgba(0,0,0,.08);
    --color-ring:color-mix(in oklab, var(--brand-sage) 30%, transparent);
    ```
  * **DoD:** proměnné existují, stránka má `background: var(--color-bg)`.

* [x] **Namapuj proměnné do Tailwindu**

  * Soubor: `tailwind.config.js` → `theme.extend.colors`:

    * `brand.spruce/sage/cream/sand/clay/chestnut`
    * `bg, surface, ink, muted, border, ring`
  * **DoD:** třídy jako `bg-bg`, `text-ink`, `bg-brand-spruce` fungují.

* [x] **Vyčisti hexy**

  * Nahraď staré `bg-[#xxxxxx]`, `text-gray-*` za tokeny (minimálně home).
  * **DoD:** v `src/app/page.tsx` nejsou žádné hard-coded hexy pro základní barvy.

---

## FÁZE 2 — typografie a čitelnost

* [x] **H1 škála a drop-shadow**

  * Soubor: `src/app/page.tsx` (hero)
  * H1: `text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink drop-shadow-[0_1px_0_rgba(255,255,255,.75)]`
  * **DoD:** H1 je čitelné i na světlém snímku videa.

* [x] **Perex v „glass“ kapsičce**

  * Perex obal: `bg-white/70 backdrop-blur-sm ring-1 ring-black/5 rounded-xl px-3 py-2 text-ink`
  * **DoD:** Perex je čitelný bez přezávojování celé stránky.

---

## FÁZE 3 — header a logo (žádná vypraná zelená)

* [x] **Header bez parent opacity**

  * Soubor: `src/components/Header.tsx`
  * Wrapper: `bg-white/65 backdrop-blur supports-[backdrop-filter]:bg-white/45 border-b border-border`
  * **DoD:** logo má plné barvy; nav odkazy `text-ink/80 hover:text-ink`.

* [x] **Aktivní odkaz a a11y**

  * `aria-current="page"` na aktivním linku; `underline underline-offset-[6px]`
  * **DoD:** screenreader správně hlásí aktivní stránku.

---

## FÁZE 4 — hero scrim (lokální, ne globální mléko)

* [x] **Scrim pod textem**

  * Soubor: `src/app/page.tsx`
  * Přidej nad hero obsah:

    ```tsx
    <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-bg/95 via-bg/70 to-transparent" />
    ```
  * **DoD:** text v hero je čitelný, zbytek videa zůstává viditelný.

---

## FÁZE 5 — karty a boxy (jednotný vzhled)

* [ ] **Card utilita**

  * Soubor: `src/app/globals.css`
  * Přidej:

    ```css
    .card{ @apply bg-surface border border-border rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,.06)]; }
    ```
  * **DoD:** boxy „Pet-safe databáze“, „Péče bez stresu“, „Rituály klidu“, „Tento týden“ používají `.card`.

* [ ] **Texty v kartách**

  * Titulek: `text-ink font-medium`; popis: `text-muted`
  * **DoD:** karty jsou konzistentní, žádné náhodné stíny/rádiusy.

---

## FÁZE 6 — inputy, tlačítka, focus

* [ ] **Inputy: stejná výška a focus**

  * Třídy:

    ```tsx
    className="h-11 w-full rounded-xl border border-border bg-white/90
               text-ink placeholder:text-muted/60 px-3
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    ```
  * **DoD:** input a přilehlé tlačítko mají stejnou výšku `h-11`.

* [ ] **Tlačítka (bez přesunů)**

  * Primární: `bg-brand-spruce text-white hover:bg-[#284F3B] focus-visible:ring-2 focus-visible:ring-ring rounded-xl h-11 px-4 font-medium`
  * Sekundární (ghost): `bg-white/70 border border-border text-ink hover:bg-white focus-visible:ring-2 focus-visible:ring-ring rounded-xl h-11 px-4`
  * **DoD:** konzistentní vzhled tlačítek na celé stránce.

---

## FÁZE 7 — SAFE/POZOR/TOXIC (čitelné chips)

* [ ] **Nahradit tečky za chipsy**

  * V místě legendy vlož:

    ```tsx
    <ul className="flex gap-2 text-[12px]">
      <li className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 bg-brand-sage/15 text-brand-spruce ring-1 ring-brand-sage/30">● SAFE</li>
      <li className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 bg-brand-sand/35 text-brand-clay ring-1 ring-brand-sand/50">● POZOR</li>
      <li className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 bg-brand-clay/18 text-brand-chestnut ring-1 ring-brand-clay/30">● TOXIC</li>
    </ul>
    ```
  * **DoD:** legenda je čitelná i bez lupy.

---

## FÁZE 8 — přístupnost (ať je to klidné i pro klávesnici)

* [ ] **Skip link viditelný**

  * Soubor: `src/components/SkipLink.tsx` (už máš) → ujisti se o třídách `top-2 left-2 bg-white ring-1 ring-black/10` při focusu.
  * **DoD:** `Tab` na prvním kroku nabídne „Přeskočit na obsah“.

* [ ] **Focus-visible všude**

  * Zkontroluj anchor/buton/input → `focus-visible:ring-2 focus-visible:ring-ring`.
  * **DoD:** tabbing jasně viditelný.

* [ ] **Video a reduced motion**

  * Video má `muted playsInline loop autoPlay` a při `prefers-reduced-motion: reduce` se pauzne.
  * **DoD:** žádné nucené animace pro uživatele s citlivostí na pohyb.

---

## FÁZE 9 — SEO & metadata (rychlá výhra)

* [ ] **Metadata v `layout.tsx`**

  * `title`, `description`, `themeColor: '#F7F4EE'`, OpenGraph, Twitter, `icons`.
  * **DoD:** stránka má smysluplný titulek a popisek ve zdroji.

* [ ] **robots / sitemap**

  * Soubor: `src/app/robots.ts`, `src/app/sitemap.ts` – zkontroluj base URL a `lastModified`.
  * **DoD:** `https://…/robots.txt` a `/sitemap.xml` vrací obsah.

---

## FÁZE 10 — výkon (bez hysterie)

* [ ] **Fonts přes `next/font`**

  * Jen 1–2 řezy, `latin-ext`, bez externích CDN.
  * **DoD:** žádný FOUT, font se načítá lokálně.

* [ ] **Obrázky přes `next/image`**

  * Logo `priority`, správné `sizes`.
  * **DoD:** Lighthouse image diagnostic bez varování.

* [ ] **Video preload**

  * `preload="metadata"`; žádné 4K, stačí 1080p MP4 (WebM později přes CI).
  * **DoD:** First Load se nezadusí videem.

---

## FÁZE 11 — DX & disciplína

* [ ] **Skripty v `package.json`**

  * `lint`, `format`, `typecheck`: `eslint .`, `prettier --write .`, `tsc --noEmit`
  * **DoD:** `npm run lint && npm run typecheck` projde.

* [ ] **Utility `cn`**

  * Soubor: `src/lib/cn.ts` s `clsx` + `tailwind-merge` (volitelné, ale zachraňuje nervy).
  * **DoD:** duplicity tříd se nerozjíždí.

---

## FÁZE 12 — nice-to-have (až po všem)

* [ ] **Structured data (Organization/WebSite)**
* [ ] **Legend chips jako sdílená komponenta `Badge`**
* [ ] **GitHub Actions na převod MP4 → WebM + poster**
* [ ] **Playwright: 3 smoke testy (load, nav, focus)**

---

## POZNÁMKY

* **Neměň pozice tlačítek**: úkoly drží vzhled, ne rozložení.
* **Žádné `opacity-*` na rodičích** (header, hero). Vždy barva s alfou.
* **Žádné náhodné hexy**. Jen tokeny: `bg-bg`, `text-ink`, `border-border`, `bg-brand-spruce`…

---

Konec souboru.
Až to začneš odškrtávat, dýchej nosem. Tenhle web má být místo klidu, ne sprint na kyslíkový dluh.
