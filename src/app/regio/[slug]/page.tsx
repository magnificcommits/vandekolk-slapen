import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Faq from "@/components/Faq";
import { CtaBand, Eyebrow, Heading, Section, Usps } from "@/components/ui";
import { regions } from "@/lib/assortiment";
import { brands, euro, site } from "@/lib/site";

export function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/regio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const r = regions.find((x) => x.slug === slug);
  return r ? { title: `Beddenspeciaalzaak voor ${r.name}: Vispring, Duxiana, Jensen`, description: r.intro } : {};
}

export default async function Page({ params }: PageProps<"/regio/[slug]">) {
  const { slug } = await params;
  const r = regions.find((x) => x.slug === slug);
  if (!r) notFound();
  const top = brands.filter((b) => ["vispring", "duxiana", "jensen"].includes(b.slug));
  const faq = [
    { q: `Waar kan ik in de buurt van ${r.name} een Vispring of Duxiana proberen?`, a: `Bij Van de Kolk Slapen, Markt 20 in Lochem, ${r.drive} rijden. Op afspraak, ook 's avonds.` },
    { q: `Leveren jullie in ${r.name}?`, a: `Ja. Martin van de Kolk brengt het bed zelf, zet het in uw slaapkamer en stelt het in. Ook in ${r.nearby.slice(0, 3).join(", ")}.` },
    { q: "Kan ik ook advies aan huis krijgen?", a: `Ja, binnen 45 km van Lochem. Wij komen kijken naar uw slaapkamer, de maten en uw huidige bed.` },
  ];

  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-28">
        <Section className="!pb-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>{r.drive} van {r.name}</Eyebrow>
              <Heading as="h1" className="mt-4">De slaapboutique voor {r.name}.</Heading>
              <p className="mt-6 text-xl leading-relaxed text-ink-soft">{r.intro}</p>
              <div className="prose-lg mt-8 text-ink-soft">{r.body.map((p) => <p key={p}>{p}</p>)}</div>
              <p className="text-sm text-stone">Ook voor {r.nearby.join(", ")}.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/afspraak" className="btn btn-primary">Plan een afspraak</Link>
                <a href={site.address.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-outline">Route naar Lochem</a>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
              <Image src="/images/j73a4991-25901.1920x0.jpg" alt="Martin en Robert van Van de Kolk Slapen" fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
            </div>
          </div>
        </Section>
        <Section tone="linen"><Usps /></Section>
        <Section>
          <Eyebrow>Alleen in Lochem</Eyebrow>
          <Heading className="mt-4">Drie merken naast elkaar</Heading>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {top.map((b) => (
              <Link key={b.slug} href={`/collectie/${b.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden"><Image src={b.image} alt={b.name} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="33vw" /></div>
                <h3 className="mt-4 font-serif text-2xl">{b.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{b.short}</p>
                <p className="mt-2 text-sm text-stone">vanaf <span className="text-ink">{euro(b.from)}</span></p>
              </Link>
            ))}
          </div>
        </Section>
        <Section tone="linen"><Faq items={faq} /></Section>
        <CtaBand title={`Vanuit ${r.name} bent u er in ${r.drive}. Plan uw uur.`} />
      </div>
    </>
  );
}
