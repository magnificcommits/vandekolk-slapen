import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { CtaBand, Eyebrow, Heading, Section } from "@/components/ui";
import { concernPages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Waar zoekt u naar?",
  description: "Rugpijn, warm slapen, een partner die draait, natuurlijk slapen of een zorgbed. Begin bij uw nacht, niet bij een merk.",
};

export default function Page() {
  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-28">
        <Section className="!pb-8">
          <div className="max-w-3xl">
            <Eyebrow>Waar zoekt u naar?</Eyebrow>
            <Heading as="h1" className="mt-4">Begin bij uw nacht, niet bij een merk.</Heading>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">Vijf situaties die wij dagelijks zien. Kies de uwe; wij vertellen wat er meestal aan de hand is en welke bedden dan in aanmerking komen.</p>
          </div>
        </Section>
        <Section className="!pt-8">
          <div className="grid gap-8 md:grid-cols-2">
            {concernPages.map((c) => (
              <Link key={c.slug} href={`/waar-zoekt-u-naar/${c.slug}`} className="group">
                <div className="relative aspect-[16/10] overflow-hidden bg-linen">
                  <Image src={c.image} alt={c.title} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(min-width:768px) 50vw, 100vw" />
                </div>
                <h2 className="mt-5 font-serif text-2xl">{c.title}</h2>
                <p className="mt-2 text-ink-soft">{c.intro}</p>
              </Link>
            ))}
          </div>
        </Section>
        <CtaBand />
      </div>
    </>
  );
}
