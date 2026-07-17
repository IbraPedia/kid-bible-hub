import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import noahImg from "@/assets/story-noah.jpg";
import davidImg from "@/assets/story-david.jpg";
import logoAsset from "@/assets/logo.jpg.asset.json";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.biblia.bibliayawatoto";

const SITE_URL = "https://bibliayawatoto.com";

export const Route = createFileRoute("/en")({
  head: () => {
    const title = "Biblia ya Watoto — Bible Stories for Kids (Free App)";
    const description =
      "Download Biblia ya Watoto free: illustrated Bible stories in English and Swahili with audio narration and fun quizzes. A safe Bible app for kids ages 3–12 on Google Play.";
    const image = logoAsset.url;
    const url = `${SITE_URL}/en`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content:
            "Bible stories for kids, kids Bible app, Christian kids app, Swahili Bible app, Bible app for children, free Bible app, Biblia ya Watoto",
        },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "og:image:alt", content: "Biblia ya Watoto logo" },
        { property: "og:site_name", content: "Biblia ya Watoto" },
        { property: "og:locale", content: "en_US" },
        { property: "og:locale:alternate", content: "sw_TZ" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
        { name: "twitter:image:alt", content: "Biblia ya Watoto logo" },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "en", href: `${SITE_URL}/en` },
        { rel: "alternate", hrefLang: "sw", href: `${SITE_URL}/` },
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
                inLanguage: ["en", "sw"],
                image,
                description,
              },
              { "@type": "WebSite", url: SITE_URL, name: "Biblia ya Watoto", inLanguage: "en" },
              { "@type": "Organization", name: "Biblia ya Watoto", url: SITE_URL, logo: image },
              {
                "@type": "FAQPage",
                mainEntity: [
                  { "@type": "Question", name: "Is the app free?", acceptedAnswer: { "@type": "Answer", text: "Yes, Biblia ya Watoto is completely free on the Google Play Store." } },
                  { "@type": "Question", name: "Does it work offline?", acceptedAnswer: { "@type": "Answer", text: "Once a story is downloaded, your child can read and listen without an internet connection." } },
                  { "@type": "Question", name: "What ages is it for?", acceptedAnswer: { "@type": "Answer", text: "Designed for kids ages 3 to 12 — and enjoyable for the whole family." } },
                  { "@type": "Question", name: "Is it available on iPhone?", acceptedAnswer: { "@type": "Answer", text: "The iOS version is coming soon. For now it's available on Google Play." } },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: LandingEn,
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
        <span className="text-[10px] uppercase tracking-wider opacity-80">Get it on</span>
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

function LandingEn() {
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
              ["Stories", "#stories"],
              ["Features", "#features"],
              ["Parents", "#parents"],
              ["FAQ", "#faq"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="font-display text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="hidden sm:inline-flex rounded-full border border-border px-3 py-1.5 text-xs font-bold text-foreground/70 hover:text-primary transition"
              hrefLang="sw"
            >
              SW
            </Link>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-coral px-4 py-2 text-sm font-bold text-coral-foreground shadow-card hover:brightness-110 transition"
            >
              Download
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
              <Sparkle className="h-3.5 w-3.5" /> Free on Google Play
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              <span className="text-primary">Bible</span> stories that come alive for{" "}
              <span className="text-coral">kids</span>.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Colorful illustrations, narrated audio, and fun quizzes — all in one safe
              app to help children fall in love with God's Word.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PlayBadge />
              <a href="#stories" className="font-display text-sm font-bold text-primary underline-offset-4 hover:underline">
                See stories ↓
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {["#fbbf24", "#60a5fa", "#f472b6", "#34d399"].map((c) => (
                  <span key={c} className="h-8 w-8 rounded-full border-2 border-background" style={{ background: c }} />
                ))}
              </div>
              <span>Loved by 10,000+ parents & kids</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-sunshine shadow-pop animate-float" />
            <div className="absolute -bottom-6 -right-4 h-16 w-16 rounded-full bg-mint shadow-pop animate-float" style={{ animationDelay: "1.2s" }} />
            <div className="absolute top-10 -right-8 h-12 w-12 rounded-2xl bg-coral shadow-pop animate-wiggle" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-pop">
              <img
                src={heroImg}
                alt="Kids happily reading Biblia ya Watoto"
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
          <h2 className="font-display text-4xl md:text-5xl">Why kids love it</h2>
          <p className="mt-3 text-muted-foreground">
            Designed with love to make reading the Bible simple, safe, and fun.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { t: "Colorful Art", d: "Every story comes with beautiful illustrations that bring the Bible to life.", bg: "bg-sunshine", fg: "text-sunshine-foreground", icon: "🎨" },
            { t: "Audio Stories", d: "Tap play and listen to stories read aloud in a friendly voice.", bg: "bg-mint", fg: "text-mint-foreground", icon: "🔊" },
            { t: "Learning Quizzes", d: "Short quizzes after each story help kids remember what they read.", bg: "bg-coral", fg: "text-coral-foreground", icon: "🧠" },
            { t: "Swahili & English", d: "Switch languages with one tap — perfect for young learners.", bg: "bg-grape", fg: "text-grape-foreground", icon: "🌍" },
            { t: "Parent Zone", d: "Parents can set reading time and control what their kids see.", bg: "bg-primary", fg: "text-primary-foreground", icon: "👨‍👩‍👧" },
            { t: "Daily Streaks", d: "Kids earn a streak every day they read — keeping the habit going!", bg: "bg-accent", fg: "text-accent-foreground", icon: "🔥" },
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
              <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">All Stories</span>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">Favorite Bible stories</h2>
            </div>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="font-display text-sm font-bold text-primary hover:underline">
              See all in the app →
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { img: noahImg, t: "Noah's Ark", b: "Genesis", color: "bg-primary text-primary-foreground" },
              { img: davidImg, t: "David and Goliath", b: "1 Samuel", color: "bg-coral text-coral-foreground" },
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
              Parent Zone
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Safe, and you're in control.</h2>
            <p className="mt-4 text-primary-foreground/85">
              Set reading time, choose fonts, and see your child's progress — all from
              one simple parent area.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "No ads or in-app purchases",
                "Screen stays awake while reading",
                "Adjustable text (size & spacing)",
                "Simple report of completed stories",
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
              { n: "50+", l: "Stories" },
              { n: "2", l: "Languages" },
              { n: "100%", l: "Kid-safe" },
              { n: "★ 4.8", l: "Rating" },
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
            <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">Parent Reviews</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">What parents are saying</h2>
            <div className="mt-4 flex items-center justify-center gap-2 text-sunshine">
              {Array.from({ length: 5 }).map((_, i) => (
                <Sparkle key={i} className="h-5 w-5" />
              ))}
              <span className="ml-2 font-display text-sm font-bold text-foreground">4.8 / 5 — 10,000+ parents</span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { q: "My kids ask to read every evening! The art and audio really pull them in.", n: "Neema M.", r: "Mom of 3, Dar es Salaam", c: "bg-sunshine text-sunshine-foreground" },
              { q: "Completely safe — no ads, and my daughter is picking up English too.", n: "Joseph K.", r: "Dad, Nairobi", c: "bg-mint text-mint-foreground" },
              { q: "I love that I can control screen time. It's such a beautiful gift!", n: "Grace T.", r: "Mom & Teacher, Mwanza", c: "bg-coral text-coral-foreground" },
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
        <h2 className="text-center font-display text-4xl md:text-5xl">Frequently Asked Questions</h2>
        <div className="mt-10 space-y-3">
          {[
            { q: "Is the app free?", a: "Yes! Biblia ya Watoto is completely free on the Google Play Store." },
            { q: "Does it work offline?", a: "Once a story is downloaded, your child can read and listen without an internet connection." },
            { q: "What ages is it for?", a: "Designed for kids ages 3 to 12 — and enjoyable for the whole family." },
            { q: "Is it available on iPhone?", a: "The iOS version is coming soon. For now it's available on Google Play." },
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
          <h2 className="font-display text-4xl text-sunshine-foreground md:text-6xl">Start the story journey today!</h2>
          <p className="mx-auto mt-4 max-w-xl text-sunshine-foreground/85">
            Download Biblia ya Watoto free on Google Play and give your kids the gift
            of Bible stories that come alive.
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
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/" hrefLang="sw" className="hover:text-primary">Kiswahili</Link>
            <span>© {new Date().getFullYear()} Biblia ya Watoto. Made with love. ❤️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
