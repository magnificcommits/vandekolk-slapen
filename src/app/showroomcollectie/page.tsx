import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { CtaBand, Eyebrow, Heading, Section } from "@/components/ui";
import { showroomItems } from "@/lib/content";
import { euro, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Showroomcollectie",
  description: "Showroommodellen van Jensen en andere topmerken, direct leverbaar met showroomvoordeel. Reserveer op naam.",
};

export default function Page() {
  const items = showroomItems.filter((i) => i.status !== "verkocht");
  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-28">
        <Section className="!pb-8">
          <div className="max-w-3xl">
            <Eyebrow>Showroomcollectie</Eyebrow>
            <Heading as="h1" className="mt-4">Bedden die in de showroom stonden. Eén keer beschikbaar.</Heading>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">Complete opstellingen, in nieuwstaat, direct leverbaar. Reserveer op naam, dan houden we het bed een week voor u vast.</p>
          </div>
        </Section>
        <Section className="!pt-8">
          {items.length === 0 ? (
            <p className="text-ink-soft">Op dit moment zijn er geen showroommodellen beschikbaar. Bel ons gerust op {site.phone}; regelmatig komen er nieuwe bij.</p>
          ) : (
            <div className="grid gap-10 md:grid-cols-2">
              {items.map((i) => (
                <article key={i.slug} className="grid gap-6 sm:grid-cols-2">
                  <div className="relative aspect-[3/4] overflow-hidden bg-linen">
                    <Image src={i.image} alt={i.title} fill className="object-cover" sizes="(min-width:768px) 25vw, 50vw" />
                    {i.status === "gereserveerd" && <span className="absolute left-3 top-3 bg-paper px-3 py-1 text-xs tracking-wider uppercase">Gereserveerd</span>}
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.14em] uppercase text-stone">{i.brand}</p>
                    <h2 className="mt-2 font-serif text-2xl">{i.title}</h2>
                    <ul className="mt-4 space-y-1 text-sm text-ink-soft">{i.specs.map((s) => <li key={s}>{s}</li>)}</ul>
                    <p className="mt-5 text-sm text-stone line-through">{euro(i.listPrice)}</p>
                    <p className="font-serif text-3xl">{euro(i.price)}</p>
                    <Link href={`/afspraak?merk=${encodeURIComponent(i.title)}`} className="btn btn-outline mt-5">Reserveer op naam</Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Section>
        <CtaBand title="Liever een bed op maat? Dat kan ook." />
      </div>
    </>
  );
}
