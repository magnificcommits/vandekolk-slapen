import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { CtaBand, Eyebrow, Heading, Section } from "@/components/ui";
import { categories } from "@/lib/assortiment";
import { euro } from "@/lib/site";

export const metadata: Metadata = {
  title: "Matrassen, toppers, kussens, dekbedden en beddengoed",
  description: "Los matras, topper, hoofdkussen, dekbed of beddengoed kopen in Lochem. Vispring, Jensen, Avek, Equilli, Brinkhaus en Dommelin. Gratis kussenadvies.",
};

export default function Page() {
  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-28">
        <Section className="!pb-2">
          <div className="max-w-3xl">
            <Eyebrow>Assortiment</Eyebrow>
            <Heading as="h1" className="mt-4">Niet alleen bedden. Alles wat erop en erin ligt.</Heading>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">Een nieuw matras op uw bestaande bed, een topper die het comfort terugbrengt, het juiste kussen voor uw nek. Los te koop, met hetzelfde advies als bij een compleet bed.</p>
          </div>
        </Section>
        <Section className="!pt-2">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link key={c.slug} href={`/assortiment/${c.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-linen">
                  <Image src={c.image} alt={c.title} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" />
                </div>
                <h2 className="mt-5 font-serif text-2xl">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.intro}</p>
                <p className="mt-3 text-sm text-stone">{euro(c.priceFrom)} tot {euro(c.priceTo)} <span className="text-stone/60">{c.priceNote}</span></p>
              </Link>
            ))}
          </div>
        </Section>
        <CtaBand title="Weet u niet zeker wat u nodig heeft? Kom langs met de maat van uw bed." text="Loop binnen tijdens openingstijden of plan een afspraak. Kussenadvies is gratis." />
      </div>
    </>
  );
}
