import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Faq from "@/components/Faq";
import { CtaBand, Eyebrow, GoogleBadge, Heading, Section } from "@/components/ui";
import { brands, euro, site } from "@/lib/site";
import { brandDeep, promises } from "@/lib/brandDeep";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/collectie/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const b = brands.find((x) => x.slug === slug);
  if (!b) return {};
  return {
    title: `${b.name} proefliggen in Lochem`,
    description: `${b.name} dealer voor de Achterhoek, Zutphen, Deventer, Apeldoorn en Twente. ${b.short} Compleet bed vanaf ${euro(b.from)}. Op afspraak proefliggen.`,
  };
}

export default async function Page({ params }: PageProps<"/collectie/[slug]">) {
  const { slug } = await params;
  const b = brands.find((x) => x.slug === slug);
  if (!b) notFound();
  const d = brandDeep[b.slug];
  const others = brands.filter((x) => x.slug !== b.slug && x.tier === b.tier).slice(0, 3);
  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${b.name} bed`,
    brand: { "@type": "Brand", name: b.name },
    description: b.short,
    image: `https://www.vandekolkslapen.nl${b.image}`,
    offers: { "@type": "AggregateOffer", priceCurrency: "EUR", lowPrice: b.from, offerCount: d?.models.length ?? 1, availability: "https://schema.org/InStoreOnly", seller: { "@type": "Organization", name: site.name } },
  };

  return (
    <>
      <Header dark />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <section className="relative flex min-h-[70vh] items-end bg-night text-white">
        <Image src={b.image} alt={b.name} fill priority className="object-cover opacity-75" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-44 lg:px-8">
          <p className="eyebrow !text-sand">{b.origin}</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">{b.name}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">{b.short}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={`/afspraak?merk=${encodeURIComponent(b.name)}`} className="btn btn-sand">Proefliggen op afspraak</Link>
            <GoogleBadge light />
          </div>
        </div>
      </section>

      {/* Intro + prijs */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Heading>Waarom {b.name}</Heading>
            <div className="prose-lg mt-6 text-ink-soft"><p>{b.description}</p></div>
            {d && (
              <>
                <h3 className="mt-8 font-serif text-2xl">Voor wie {b.name} de juiste keuze is</h3>
                <ul className="mt-4 space-y-3">
                  {d.forWho.map((x) => <li key={x} className="flex gap-3 text-ink-soft"><span className="text-sand">—</span>{x}</li>)}
                </ul>
                <div className="mt-6 border-l-2 border-sand pl-5">
                  <p className="text-sm tracking-[0.12em] uppercase text-stone">Voor wie niet</p>
                  <p className="mt-1 text-ink-soft">{d.notFor}</p>
                </div>
              </>
            )}
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="bg-linen p-8 lg:sticky lg:top-36">
              <p className="eyebrow">Compleet bed 180 x 200</p>
              <p className="mt-3 font-serif text-4xl">vanaf {euro(b.from)}</p>
              <p className="mt-1 text-sm text-stone">{b.fromNote ?? "inclusief matrassen en hoofdbord"}, indicatie</p>
              {d && (
                <>
                  <p className="mt-5 text-xs tracking-[0.12em] uppercase text-stone">Wat de prijs bepaalt</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-soft">{d.priceDrivers.map((x) => <li key={x}>· {x}</li>)}</ul>
                </>
              )}
              <Link href={`/afspraak?merk=${encodeURIComponent(b.name)}`} className="btn btn-primary mt-6 w-full">Proefliggen op afspraak</Link>
              <p className="mt-3 text-center text-xs text-stone">Sleep Scan inbegrepen · ook 's avonds</p>
              <p className="mt-5 border-t border-line pt-4 text-sm text-ink-soft">U wordt geholpen door Robert of Martin. Liever eerst bellen? <a href={site.phoneHref} className="underline underline-offset-4">{site.phone}</a></p>
            </div>
          </aside>
        </div>
      </Section>

      {/* Opbouw */}
      {d && (
        <Section tone="linen">
          <Eyebrow>Zo is het gebouwd</Eyebrow>
          <Heading className="mt-4">Wat u niet ziet, maar wel voelt.</Heading>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {d.build.map((x) => (
              <div key={x.h} className="border-t border-line pt-5">
                <h3 className="font-serif text-2xl">{x.h}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{x.p}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Modellen */}
      {d && (
        <Section>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>In onze showroom</Eyebrow>
              <Heading className="mt-4">De modellen die bij ons staan.</Heading>
              <p className="mt-5 text-ink-soft">Prijzen zijn een indicatie voor een compleet tweepersoonsbed van 180 x 200. Welk model bij u past, blijkt bij het liggen.</p>
            </div>
            <div className="lg:col-span-8">
              <dl className="divide-y divide-line border-y border-line">
                {d.models.map((m) => (
                  <div key={m.name} className="grid gap-2 py-5 md:grid-cols-12 md:gap-8">
                    <dt className="font-serif text-xl md:col-span-4">{m.name}</dt>
                    <dd className="text-ink-soft leading-relaxed md:col-span-8">{m.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>
      )}

      {/* Beloften */}
      <Section tone="night">
        <Eyebrow light>Zo kopen wij</Eyebrow>
        <Heading className="mt-4">Vijf dingen die u van ons mag verwachten.</Heading>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {promises.map((p, i) => (
            <div key={p.t} className="border-t border-white/20 pt-5">
              <p className="font-serif text-2xl text-sand">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-medium">{p.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{p.s}</p>
            </div>
          ))}
        </div>
      </Section>

      {d && <Section><Faq items={d.faq} title={`Vragen over ${b.name}`} /></Section>}

      {others.length > 0 && (
        <Section tone="linen">
          <Eyebrow>Vergelijk</Eyebrow>
          <Heading className="mt-4">Ook in deze prijsklasse</Heading>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/collectie/${o.slug}`} className="group bg-paper">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={o.image} alt={o.name} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="33vw" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl">{o.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{o.short}</p>
                  <p className="mt-3 text-sm text-stone">vanaf <span className="text-ink">{euro(o.from)}</span></p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CtaBand title={`${b.name} staat bij ons klaar. Kom het voelen.`} />
    </>
  );
}
