import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { CtaBand, Eyebrow, Heading, Section } from "@/components/ui";
import { brands, euro, textileBrands } from "@/lib/site";

export const metadata: Metadata = {
  title: "Collectie · Vispring, Duxiana, Jensen, Avek, Pullman",
  description: "Acht merken, met zorg gekozen. Van de handgemaakte Vispring tot de Nederlandse Avek. Indicatieve vanaf-prijzen per merk. Proefliggen op afspraak in Lochem.",
};

export default function Page() {
  const groups: { title: string; text: string; tier: string }[] = [
    { tier: "signature", title: "Signature", text: "Handgemaakt, natuurlijk, een leven lang. Nergens anders in Oost-Nederland naast elkaar te proefliggen." },
    { tier: "premium", title: "Premium", text: "Nederlandse en Scandinavische topmerken. Eerlijk geprijsd, in vrijwel iedere maat en stof leverbaar." },
    { tier: "care", title: "Zorg en comfort", text: "Hoog-laag bedden die eruitzien als een gewoon bed. Langer thuis wonen, zonder ziekenhuisgevoel." },
  ];

  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-28">
        <Section className="!pb-8">
          <div className="max-w-3xl">
            <Eyebrow>Collectie</Eyebrow>
            <Heading as="h1" className="mt-4">Acht merken. Geen veertig.</Heading>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Wij voeren alleen wat we zelf zouden kopen. Ieder merk in deze collectie heeft een eigen filosofie, een eigen liggevoel en een eigen prijs. Welk merk bij u past, blijkt bij het proefliggen.
            </p>
            <p className="mt-4 text-sm text-stone">Prijzen zijn indicatief voor een compleet tweepersoonsbed 180 x 200 cm, inclusief matrassen en hoofdbord. Exacte prijzen hangen af van uitvoering, maat en stof.</p>
          </div>
        </Section>

        {groups.map((g) => (
          <Section key={g.tier} className="!pt-8">
            <div className="flex flex-col gap-3 border-t border-line pt-8 md:flex-row md:items-baseline md:justify-between">
              <h2 className="font-serif text-3xl">{g.title}</h2>
              <p className="max-w-xl text-sm text-stone">{g.text}</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {brands.filter((b) => b.tier === g.tier).map((b) => (
                <Link key={b.slug} href={`/collectie/${b.slug}`} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-linen">
                    <Image src={b.image} alt={b.name} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" />
                  </div>
                  <div className="pt-5">
                    <p className="text-xs tracking-[0.14em] uppercase text-stone">{b.origin}</p>
                    <h3 className="mt-2 font-serif text-2xl">{b.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.short}</p>
                    <p className="mt-3 text-sm text-stone">
                      {b.fromNote ? `${b.fromNote[0].toUpperCase()}${b.fromNote.slice(1)}` : "Compleet bed"} vanaf <span className="text-ink">{euro(b.from)}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        ))}

        <Section tone="linen">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Beddengoed</Eyebrow>
              <Heading className="mt-4">Wat er op het bed ligt, telt mee.</Heading>
              <p className="mt-5 leading-relaxed text-ink-soft">Dekbedden, kussens en linnen van twee makers die net zo over kwaliteit denken als wij.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {textileBrands.map((t) => (
                <div key={t.slug} className="bg-paper p-7">
                  <h3 className="font-serif text-2xl">{t.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.short}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <CtaBand title="Twijfelt u tussen twee merken? Kom ze naast elkaar proberen." />
      </div>
    </>
  );
}
