import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { CtaBand, Eyebrow, Heading, Section } from "@/components/ui";
import { articles } from "@/lib/kennis";

export const metadata: Metadata = {
  title: "Kennis over slapen, matrassen en bedden",
  description: "Eerlijke uitleg van de specialisten van Van de Kolk Slapen: wanneer een matras vervangen, hard of zacht bij rugklachten, welk kussen, samen slapen.",
};

const fmt = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });

export default function Page() {
  const [first, ...rest] = articles;
  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-28">
        <Section className="!pb-4">
          <div className="max-w-3xl">
            <Eyebrow>Kennis</Eyebrow>
            <Heading as="h1" className="mt-4">Wat wij in de winkel elke dag uitleggen.</Heading>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">Zonder verkooppraat. Korte stukken over slapen, matrassen en bedden, geschreven door de mensen die u ook in de showroom treft.</p>
          </div>
        </Section>
        <Section className="!pt-4">
          <Link href={`/kennis/${first.slug}`} className="group grid gap-8 lg:grid-cols-12">
            <div className="relative aspect-[16/10] overflow-hidden bg-linen lg:col-span-7">
              <Image src={first.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(min-width:1024px) 60vw, 100vw" />
            </div>
            <div className="lg:col-span-5 lg:self-center">
              <p className="text-xs tracking-[0.14em] uppercase text-stone">{fmt(first.date)} · {first.readMinutes} min</p>
              <h2 className="mt-3 font-serif text-3xl">{first.title}</h2>
              <p className="mt-3 text-ink-soft">{first.excerpt}</p>
              <p className="mt-4 text-xs tracking-[0.14em] uppercase text-sand-deep underline underline-offset-4">Lees verder</p>
            </div>
          </Link>
          <div className="mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-2 lg:grid-cols-4">
            {rest.map((a) => (
              <Link key={a.slug} href={`/kennis/${a.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-linen">
                  <Image src={a.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="25vw" />
                </div>
                <p className="mt-4 text-xs tracking-[0.14em] uppercase text-stone">{fmt(a.date)} · {a.readMinutes} min</p>
                <h2 className="mt-2 font-serif text-xl">{a.title}</h2>
                <p className="mt-2 text-sm text-ink-soft">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </Section>
        <CtaBand title="Liever meteen goed advies? Kom langs." />
      </div>
    </>
  );
}
