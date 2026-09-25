import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { CtaBand, Eyebrow, GoogleBadge, Heading, Section, Usps } from "@/components/ui";
import { brands, concerns, euro, site } from "@/lib/site";

export default function Home() {
  const signature = brands.filter((b) => b.tier === "signature");
  const premium = brands.filter((b) => b.tier !== "signature");

  return (
    <>
      <Header dark />

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end bg-night text-white">
        <Image
          src="/images/vispring.jpg"
          alt="Showroom van Van de Kolk Slapen in Lochem"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 lg:px-8 lg:pb-24">
          <p className="eyebrow fade-up !text-sand">Slaapboutique · Markt 20, Lochem</p>
          <h1 className="fade-up-2 mt-5 max-w-3xl font-serif text-4xl leading-[1.08] md:text-6xl lg:text-7xl">
            Het beste bed van Oost-Nederland ligt aan de Markt in Lochem.
          </h1>
          <p className="fade-up-3 mt-6 max-w-xl text-lg text-white/80">
            Vispring, Duxiana en Jensen, naast elkaar, in alle rust te proefliggen. Familiebedrijf sinds 1932. De eigenaar levert zelf.
          </p>
          <div className="fade-up-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/afspraak" className="btn btn-sand">Plan een privé-afspraak</Link>
            <Link href="/collectie" className="btn btn-light">Bekijk de collectie</Link>
          </div>
          <div className="fade-up-3 mt-10">
            <GoogleBadge light />
          </div>
        </div>
      </section>

      {/* USP */}
      <div className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <Usps />
        </div>
      </div>

      {/* Intro */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <Image src="/images/j73a4991-25901.1920x0.jpg" alt="Martin en Robert in de winkel" fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Eyebrow>Sinds 1932</Eyebrow>
            <Heading className="mt-4">Een bed koopt u eens in de twintig jaar. Neem er een uur voor.</Heading>
            <div className="prose-lg mt-7 text-ink-soft">
              <p>
                Bij ons staat geen verkoper met een stopwatch. U ligt, wij kijken, en samen komen we uit bij het bed dat bij uw lichaam past. Niet bij het bed dat toevallig in de aanbieding is.
              </p>
              <p>
                Martin van de Kolk leidt de zaak in de derde generatie. Hij is bij iedere levering zelf aanwezig, stelt het bed af in uw slaapkamer en komt terug als er iets bijgesteld moet worden. Zo werkten zijn vader en opa ook.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/over-ons" className="btn btn-outline">Ons verhaal</Link>
              <Link href="/slaapadvies" className="btn btn-primary">Hoe een afspraak werkt</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Signature brands */}
      <Section tone="linen">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>De signature-collectie</Eyebrow>
            <Heading className="mt-4">Drie merken die u in deze regio nergens anders naast elkaar vindt.</Heading>
          </div>
          <Link href="/collectie" className="text-sm tracking-[0.12em] uppercase underline underline-offset-4">Alle merken</Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[...signature, brands.find((b) => b.slug === "jensen")!].map((b) => (
            <Link key={b.slug} href={`/collectie/${b.slug}`} className="group block bg-paper">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={b.image} alt={b.name} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(min-width:768px) 33vw, 100vw" />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-[0.14em] uppercase text-stone">{b.origin}</p>
                <h3 className="mt-2 font-serif text-2xl">{b.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.short}</p>
                <p className="mt-4 text-sm text-stone">
                  Compleet bed vanaf <span className="text-ink">{euro(b.from)}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-stone">
          {premium.filter((b) => b.slug !== "jensen").map((b) => (
            <Link key={b.slug} href={`/collectie/${b.slug}`} className="underline-offset-4 hover:underline">
              {b.name} <span className="text-stone/60">vanaf {euro(b.from)}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Sleep advice / appointment */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow>Slaapadvies op afspraak</Eyebrow>
            <Heading className="mt-4">Eerst meten, dan pas kiezen.</Heading>
            <div className="prose-lg mt-7 text-ink-soft">
              <p>
                Wij zijn de exclusieve Equilli-partner voor Lochem en omstreken. De Personal Sleep Scan meet in tien minuten hoe uw lichaam drukt en waar het steun nodig heeft. Daarna weten we welke bedden voor u in aanmerking komen, en welke niet.
              </p>
            </div>
            <ol className="mt-8 space-y-5">
              {[
                ["U plant een afspraak", "Overdag, 's avonds of op maandag. Alleen u, of samen met uw partner."],
                ["Sleep Scan en gesprek", "Slaaphouding, klachten, warmte, de bewegingen van uw partner. Tien minuten meten, tien minuten luisteren."],
                ["Proefliggen zonder haast", "Drie tot vier bedden die bij u passen. U ligt zo lang als u wilt."],
                ["Levering door Martin", "Hij zet het bed af in uw slaapkamer, stelt het af en komt terug als iets moet worden bijgesteld."],
              ].map(([t, s], i) => (
                <li key={t} className="flex gap-5">
                  <span className="font-serif text-2xl text-sand">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-medium">{t}</p>
                    <p className="mt-1 text-sm text-stone">{s}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link href="/afspraak" className="btn btn-primary mt-10">Plan een afspraak</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-6">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/images/equilli-sleep-scan.480x0.jpg" alt="Equilli Sleep Scan" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden">
              <Image src="/images/ovii-fotografie-vandekolk-okt24-6668.960x0.jpg" alt="Persoonlijk slaapadvies" fill className="object-cover" sizes="25vw" />
            </div>
          </div>
        </div>
      </Section>

      {/* Concerns */}
      <Section tone="linen">
        <Eyebrow>Waar zoekt u naar?</Eyebrow>
        <Heading className="mt-4 max-w-2xl">Begin bij uw nacht, niet bij een merk.</Heading>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
          {concerns.map((c) => (
            <Link key={c.slug} href={`/waar-zoekt-u-naar/${c.slug}`} className="group bg-linen p-7 transition hover:bg-paper">
              <h3 className="font-serif text-xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{c.short}</p>
              <p className="mt-5 text-xs tracking-[0.14em] uppercase text-sand-deep group-hover:underline">Lees verder</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Klanten</Eyebrow>
            <Heading className="mt-4">Wat men zegt.</Heading>
            <div className="mt-6"><GoogleBadge /></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:col-span-8">
            {[
              ["Zeer prettige ervaring. De winkel biedt een ruime keuze aan slaapoplossingen en neemt de tijd om goed advies te geven.", "Tonnetje, Google"],
              ["Sinds enkele weken zijn wij de zeer tevreden eigenaren van een geweldig Jensen bed. Vakkundige adviezen en tips.", "Frank Derksen, Google"],
            ].map(([q, a]) => (
              <blockquote key={a} className="border-l border-sand pl-6">
                <p className="font-serif text-xl leading-relaxed">“{q}”</p>
                <footer className="mt-4 text-sm text-stone">{a}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </Section>

      {/* Location */}
      <Section tone="linen">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7">
            <Image src="/images/bekijk-onze-showroom-van-de-kolk-slapen.1920x0.jpg" alt="De nieuwe zaak aan de Markt 20 in Lochem" fill className="object-cover" sizes="(min-width:1024px) 60vw, 100vw" />
          </div>
          <div className="lg:col-span-5">
            <Eyebrow>Nieuw sinds zomer 2026</Eyebrow>
            <Heading className="mt-4">Aan de Markt, in het hart van Lochem.</Heading>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Na ruim negentig jaar aan de Nieuwstad zijn we verhuisd naar Markt 20. Vier grote etalages, een koffiehoek, een rustige studio achterin en parkeren direct achter de winkel.
            </p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-ink-soft">
              {site.address.street}, {site.address.zip} {site.address.city}<br />
              {site.address.navigation}
            </address>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-outline">Route en openingstijden</Link>
              <a href={site.address.mapsUrl} target="_blank" rel="noreferrer" className="text-sm tracking-[0.12em] uppercase underline underline-offset-4 self-center">Open in Google Maps</a>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
