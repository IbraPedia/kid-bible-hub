import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import noahImg from "@/assets/story-noah.jpg";
import davidImg from "@/assets/story-david.jpg";
import logoAsset from "@/assets/logo.jpg.asset.json";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.biblia.bibliayawatoto";

const SITE_URL = "https://bibliayawatoto.com";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Biblia ya Watoto — Hadithi za Biblia kwa Watoto (App ya Bure)";
    const description =
      "Pakua Biblia ya Watoto bure: hadithi za Biblia kwa Kiswahili na Kiingereza zenye picha, sauti na maswali. App salama kwa watoto wa miaka 3–12 kwenye Google Play.";
    const image = logoAsset.url;
    const url = `${SITE_URL}/`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content:
            "Biblia ya Watoto, hadithi za Biblia, Biblia kwa Kiswahili, Bible stories for kids, Swahili Bible app, kids Bible app, hadithi za Biblia kwa watoto, Christian kids app",
        },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "og:image:alt", content: "Biblia ya Watoto logo" },
        { property: "og:site_name", content: "Biblia ya Watoto" },
        { property: "og:locale", content: "sw_TZ" },
        { property: "og:locale:alternate", content: "en_US" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
        { name: "twitter:image:alt", content: "Biblia ya Watoto logo" },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "sw", href: `${SITE_URL}/` },
        { rel: "alternate", hrefLang: "en", href: `${SITE_URL}/en` },
        { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MobileApplication",
                name: "Biblia ya Watoto",
                operatingSystem: "ANDROID",
                applicationCategory: "EducationalApplication",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "10000" },
                downloadUrl: PLAY_STORE_URL,
                installUrl: PLAY_STORE_URL,
                inLanguage: ["sw", "en"],
                image,
                description,
              },
              { "@type": "WebSite", url: SITE_URL, name: "Biblia ya Watoto", inLanguage: "sw" },
              { "@type": "Organization", name: "Biblia ya Watoto", url: SITE_URL, logo: image },
              {
                "@type": "FAQPage",
                mainEntity: [
                  { "@type": "Question", name: "Je, programu ni bure?", acceptedAnswer: { "@type": "Answer", text: "Ndiyo, Biblia ya Watoto inapatikana bure kwenye Google Play Store." } },
                  { "@type": "Question", name: "Inafanya kazi bila intaneti?", acceptedAnswer: { "@type": "Answer", text: "Baada ya kupakua hadithi, mtoto wako anaweza kusoma na kusikiliza bila intaneti." } },
                  { "@type": "Question", name: "Inafaa kwa umri gani?", acceptedAnswer: { "@type": "Answer", text: "Imeundwa kwa watoto wa miaka 3 hadi 12, na ni nzuri kwa familia nzima." } },
                  { "@type": "Question", name: "Itapatikana kwa iPhone?", acceptedAnswer: { "@type": "Answer", text: "Toleo la iOS linakuja hivi karibuni. Kwa sasa lipo kwenye Google Play." } },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: Landing,
});

function PlayBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background shadow-pop transition-transform hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path fill="#34A853" d="M3.6 20.5 14 12 3.6 3.5C3.2 3.8 3 4.3 3 5v14c0 .7.2 1.2.6 1.5z" />
        <path fill="#FBBC04" d="M17.6 8.6 14 12l3.6 3.4 3.6-2.1c1-.6 1-2 0-2.6L17.6 8.6z" />
        <path fill="#EA4335" d="M3.6 3.5 14 12l3.6-3.4-12-7C5.1 1.3 4.3 1.3 3.6 1.7c0 0-.4.3 0 1.8z" />
        <path fill="#4285F4" d="M3.6 20.5c-.4 1.5 0 1.8 0 1.8.7.4 1.5.4 2-.1l12-7L14 12 3.6 20.5z" />
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-wider opacity-80">Pakua kwenye</span>
        <span className="font-display text-lg font-bold">Google Play</span>
      </span>
    </a>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Biblia ya Watoto logo" width={44} height={44} className="h-11 w-11 rounded-2xl object-cover shadow-card" />

            <span className="flex flex-col leading-tight">
              <span className="font-display text-[10px] tracking-[0.2em] text-muted-foreground">BIBLIA YA</span>
              <span className="font-display text-lg font-bold text-primary">WATOTO</span>
            </span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {[
              ["Hadithi", "#stories"],
              ["Vipengele", "#features"],
              ["Wazazi", "#parents"],
              ["Maswali", "#faq"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="font-display text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/en"
              className="hidden sm:inline-flex rounded-full border border-border px-3 py-1.5 text-xs font-bold text-foreground/70 hover:text-primary transition"
              hrefLang="en"
            >
              EN
            </Link>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-coral px-4 py-2 text-sm font-bold text-coral-foreground shadow-card hover:brightness-110 transition"
            >
              Pakua
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative bg-gradient-hero">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 left-10 h-24 w-40 rounded-full bg-white/70 blur-2xl" />
          <div className="absolute top-20 right-20 h-16 w-32 rounded-full bg-white/60 blur-xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pt-12 pb-20 md:grid-cols-2 md:items-center md:pt-20 md:pb-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sunshine px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sunshine-foreground shadow-card">
              <Sparkle className="h-3.5 w-3.5" /> Bure kwenye Google Play
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              Hadithi za <span className="text-primary">Biblia</span> zinazoishi kwa{" "}
              <span className="text-coral">watoto</span>.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Picha za rangi, sauti za hadithi, na maswali ya kufurahisha — yote katika
              programu moja salama ya watoto kujifunza Neno la Mungu.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PlayBadge />
              <a href="#stories" className="font-display text-sm font-bold text-primary underline-offset-4 hover:underline">
                Ona hadithi ↓
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {["#fbbf24", "#60a5fa", "#f472b6", "#34d399"].map((c) => (
                  <span key={c} className="h-8 w-8 rounded-full border-2 border-background" style={{ background: c }} />
                ))}
              </div>
              <span>Wazazi & watoto 10,000+ wanaipenda</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-sunshine shadow-pop animate-float" />
            <div className="absolute -bottom-6 -right-4 h-16 w-16 rounded-full bg-mint shadow-pop animate-float" style={{ animationDelay: "1.2s" }} />
            <div className="absolute top-10 -right-8 h-12 w-12 rounded-2xl bg-coral shadow-pop animate-wiggle" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-pop">
              <img
                src={heroImg}
                alt="Watoto wakisoma Biblia ya Watoto kwa furaha"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl md:text-5xl">Kwa nini watoto wanaipenda</h2>
          <p className="mt-3 text-muted-foreground">
            Imeundwa kwa upendo ili kufanya kusoma Biblia kuwe rahisi, salama na cha kufurahisha.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Picha za Rangi",
              d: "Kila hadithi ina michoro nzuri inayofufua matukio ya Biblia.",
              bg: "bg-sunshine",
              fg: "text-sunshine-foreground",
              icon: "🎨",
            },
            {
              t: "Hadithi za Sauti",
              d: "Bonyeza kitufe na sikiliza hadithi zikisomwa kwa sauti rafiki.",
              bg: "bg-mint",
              fg: "text-mint-foreground",
              icon: "🔊",
            },
            {
              t: "Maswali ya Kujifunza",
              d: "Maswali mafupi baada ya kila hadithi husaidia kukumbuka.",
              bg: "bg-coral",
              fg: "text-coral-foreground",
              icon: "🧠",
            },
            {
              t: "Kiswahili & Kiingereza",
              d: "Badilisha lugha kwa mguso mmoja — kamili kwa wanafunzi wadogo.",
              bg: "bg-grape",
              fg: "text-grape-foreground",
              icon: "🌍",
            },
            {
              t: "Mzazi Zone",
              d: "Wazazi wanaweza kuweka muda wa kusoma na kudhibiti maudhui.",
              bg: "bg-primary",
              fg: "text-primary-foreground",
              icon: "👨‍👩‍👧",
            },
            {
              t: "Siku za Mfululizo",
              d: "Watoto hupata moto wa kila siku wanaposoma — kujifunza kila siku!",
              bg: "bg-accent",
              fg: "text-accent-foreground",
              icon: "🔥",
            },
          ].map((f) => (
            <div key={f.t} className="rounded-3xl bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-pop">
              <div className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl ${f.bg} ${f.fg} shadow-card`}>
                {f.icon}
              </div>
              <h3 className="mt-4 font-display text-xl">{f.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="bg-accent/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">Hadithi Zote</span>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">Hadithi unazozipenda zaidi</h2>
            </div>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="font-display text-sm font-bold text-primary hover:underline">
              Ona zote katika app →
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { img: noahImg, t: "Safina ya Nuhu", b: "Mwanzo", color: "bg-primary text-primary-foreground" },
              { img: davidImg, t: "Daudi na Goliath", b: "1 Samweli", color: "bg-coral text-coral-foreground" },
            ].map((s) => (
              <article key={s.t} className="overflow-hidden rounded-3xl bg-card shadow-card transition hover:-translate-y-1 hover:shadow-pop">
                <div className="aspect-square overflow-hidden">
                  <img src={s.img} alt={s.t} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${s.color}`}>{s.b}</span>
                  <h3 className="mt-3 font-display text-xl">{s.t}</h3>
                  <div className="mt-2 flex text-sunshine">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Sparkle key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Parents */}
      <section id="parents" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 rounded-[2.5rem] bg-gradient-primary p-8 text-primary-foreground shadow-pop md:grid-cols-2 md:p-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              Mzazi Zone
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Salama, na unaidhibiti wewe.</h2>
            <p className="mt-4 text-primary-foreground/85">
              Weka muda wa kusoma, chagua aina ya maandishi, na uone maendeleo ya mtoto
              wako — yote kutoka eneo moja la wazazi.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Hakuna matangazo wala ununuzi ndani ya app",
                "Kioo kinasalia wazi wakati wa kusoma",
                "Maandishi yanayobadilika (saizi & nafasi)",
                "Ripoti rahisi ya hadithi zilizokamilika",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sunshine text-sunshine-foreground">✓</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 self-center">
            {[
              { n: "50+", l: "Hadithi" },
              { n: "2", l: "Lugha" },
              { n: "100%", l: "Salama" },
              { n: "★ 4.8", l: "Ukadiriaji" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-white/12 p-6 backdrop-blur-sm">
                <div className="font-display text-4xl">{s.n}</div>
                <div className="mt-1 text-sm text-primary-foreground/80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-accent/30 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">Maoni ya Wazazi</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Wazazi wanasema nini</h2>
            <div className="mt-4 flex items-center justify-center gap-2 text-sunshine">
              {Array.from({ length: 5 }).map((_, i) => (
                <Sparkle key={i} className="h-5 w-5" />
              ))}
              <span className="ml-2 font-display text-sm font-bold text-foreground">4.8 / 5 — wazazi 10,000+</span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                q: "Watoto wangu wanaomba kusoma kila jioni! Picha na sauti zinawavutia sana.",
                n: "Neema M.",
                r: "Mama wa watoto 3, Dar es Salaam",
                c: "bg-sunshine text-sunshine-foreground",
              },
              {
                q: "Ni salama kabisa — hakuna matangazo, na binti yangu anajifunza Kiingereza pia.",
                n: "Joseph K.",
                r: "Baba, Nairobi",
                c: "bg-mint text-mint-foreground",
              },
              {
                q: "Ninaipenda kwa sababu naweza kudhibiti muda wa kusoma. Ni zawadi kubwa!",
                n: "Grace T.",
                r: "Mama & Mwalimu, Mwanza",
                c: "bg-coral text-coral-foreground",
              },
            ].map((r) => (
              <figure key={r.n} className="rounded-3xl bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-pop">
                <div className="flex text-sunshine">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Sparkle key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-3 text-foreground">"{r.q}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-full font-display text-lg font-bold ${r.c}`}>
                    {r.n.charAt(0)}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="font-display font-bold text-foreground">{r.n}</span>
                    <span className="text-xs text-muted-foreground">{r.r}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 pb-20">
        <h2 className="text-center font-display text-4xl md:text-5xl">Maswali ya Mara kwa Mara</h2>
        <div className="mt-10 space-y-3">
          {[
            { q: "Je, programu ni bure?", a: "Ndiyo! Biblia ya Watoto inapatikana bure kwenye Google Play Store." },
            { q: "Inafanya kazi bila intaneti?", a: "Baada ya kupakua hadithi, mtoto wako anaweza kusoma na kusikiliza bila intaneti." },
            { q: "Inafaa kwa umri gani?", a: "Imeundwa kwa watoto wa miaka 3 hadi 12, na pia ni nzuri kwa familia nzima." },
            { q: "Itapatikana kwa iPhone?", a: "Toleo la iOS linakuja hivi karibuni. Kwa sasa, ipo kwenye Google Play." },
          ].map((f) => (
            <details key={f.q} className="group rounded-2xl bg-card p-5 shadow-card open:shadow-pop transition">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg">
                {f.q}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-sunshine p-10 text-center shadow-pop md:p-16">
          <h2 className="font-display text-4xl text-sunshine-foreground md:text-6xl">Anza safari ya hadithi leo!</h2>
          <p className="mx-auto mt-4 max-w-xl text-sunshine-foreground/85">
            Pakua Biblia ya Watoto bure kwenye Google Play na uwape watoto wako
            zawadi ya hadithi za Biblia zinazovutia.
          </p>
          <div className="mt-8 flex justify-center">
            <PlayBadge />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Biblia ya Watoto logo" width={32} height={32} className="h-8 w-8 rounded-xl object-cover" />

            <span className="font-display font-bold text-primary">Biblia ya Watoto</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Biblia ya Watoto. Imetengenezwa kwa upendo. ❤️</p>
        </div>
      </footer>
    </div>
  );
}
