import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { CtaBand, Eyebrow, Heading, Section } from "@/components/ui";
import { brands, euro } from "@/lib/site";

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
  const others = brands.filter((x) => x.slug !== b.slug && x.tier === b.tier).slice(0, 3);

  return (
    <>
      <Header dark />
      <section className="relative flex min-h-[70vh] items-end bg-night text-white">
        <Image src={b.image} alt={b.name} fill priority className="object-cover opacity-75" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-40 lg:px-8">
          <p className="eyebrow !text-sand">{b.origin}</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">{b.name}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">{b.short}</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Heading>Waarom {b.name}</Heading>
            <div className="prose-lg mt-6 text-ink-soft">
              <p>{b.description}</p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {b.highlights.map((h) => (
                <li key={h} className="flex gap-3 border-t border-line pt-3 text-sm"><span className="text-sand">—</span>{h}</li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="bg-linen p-8">
              <p className="eyebrow">Indicatie</p>
              <p className="mt-3 font-serif text-4xl">{euro(b.from)}</p>
              <p className="mt-1 text-sm text-stone">{b.fromNote ?? "compleet tweepersoonsbed 180 x 200"}, vanaf</p>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                De exacte prijs hangt af van maat, stevigheid, stof en hoofdbord. Na een afspraak krijgt u een offerte op maat, zonder verrassingen.
              </p>
              <Link href={`/afspraak?merk=${encodeURIComponent(b.name)}`} className="btn btn-primary mt-6 w-full">Proefliggen op afspraak</Link>
              <p className="mt-4 text-center text-xs text-stone">Sleep Scan inbegrepen · geen verplichtingen</p>
            </div>
          </aside>
        </div>
      </Section>

      {others.length > 0 && (
        <Section tone="linen">
          <Eyebrow>Vergelijk</Eyebrow>
          <Heading className="mt-4">Ook in deze klasse</Heading>
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

      <CtaBand title={`${b.name} ligt bij ons klaar. Kom het voelen.`} />
    </>
  );
}
