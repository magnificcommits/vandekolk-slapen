import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import { CtaBand, Eyebrow, Heading, Section, Usps } from "@/components/ui";

export const metadata: Metadata = {
  title: "Ons verhaal · Sinds 1932, derde generatie",
  description: "Van kinderwagens tot slaapsystemen. Drie generaties Van de Kolk in Lochem. Sinds 2022 volledig slaapspeciaalzaak, sinds 2026 aan de Markt.",
};

const timeline = [
  ["1932", "Reijer van de Kolk begint in Lochem, eerst met kinderwagens, al snel met vloerbedekking en wonen."],
  ["1995", "Martin en Karin nemen over en kiezen voor stoffering en hoogwaardige slaapsystemen."],
  ["2022", "De stoffering gaat de deur uit. Van de Kolk wordt volledig slaapkamerspeciaalzaak."],
  ["2026", "Na ruim negentig jaar aan de Nieuwstad verhuist de zaak naar Markt 20, in het hart van Lochem."],
];

export default function Page() {
  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-28">
        <Section>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow>Ons verhaal</Eyebrow>
              <Heading as="h1" className="mt-4">Klanten zijn bij ons geen nummer. Dat is geen slogan, dat is hoe we de zaak runnen.</Heading>
              <div className="prose-lg mt-8 text-ink-soft">
                <p>Martin van de Kolk staat in de derde generatie aan het roer. Hij is bij iedere levering zelf aanwezig, of het nu om de hoek is of in Zwitserland. Robert staat in de zaak en kent ieder bed uit de collectie van binnen en van buiten. Karin doet de administratie en zorgt dat alles klopt.</p>
                <p>We hebben alles in eigen beheer, van het eerste gesprek tot de afstelling in uw slaapkamer. Zo weten we zeker dat wat we beloven, ook gebeurt.</p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5 lg:col-start-8 lg:aspect-[3/4]">
              <Image src="/images/j73a4991-25901.1920x0.jpg" alt="Martin en Robert" fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
            </div>
          </div>
        </Section>
        <Section tone="linen">
          <Usps />
        </Section>
        <Section>
          <Eyebrow>Sinds 1932</Eyebrow>
          <Heading className="mt-4">Vier generaties Lochem</Heading>
          <ol className="mt-12 grid gap-10 md:grid-cols-4">
            {timeline.map(([y, t]) => (
              <li key={y} className="border-t border-line pt-5">
                <p className="font-serif text-3xl text-sand">{y}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t}</p>
              </li>
            ))}
          </ol>
        </Section>
        <Section tone="linen">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7">
              <Image src="/images/bekijk-onze-showroom-van-de-kolk-slapen.1920x0.jpg" alt="De showroom" fill className="object-cover" sizes="(min-width:1024px) 60vw, 100vw" />
            </div>
            <div className="lg:col-span-5">
              <Eyebrow>Markt 20</Eyebrow>
              <Heading className="mt-4">Een voormalige Blokker, een jaar verbouwen, en toen dit.</Heading>
              <p className="mt-6 leading-relaxed text-ink-soft">Vier grote etalages aan de Noorderwal, een PVC-vloer in Hongaarse punt, een koffiehoek en achterin een rustige studio voor de Sleep Scan. Bedden per merk gepresenteerd, zodat u kunt vergelijken zonder te worden afgeleid.</p>
            </div>
          </div>
        </Section>
        <CtaBand />
      </div>
    </>
  );
}
