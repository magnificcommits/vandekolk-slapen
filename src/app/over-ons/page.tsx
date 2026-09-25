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
                <p>Martin van de Kolk staat als derde generatie aan het roer. Hij brengt ieder bed zelf, of het nu om de hoek is of in Zwitserland. Karin Florijn doet de administratie, de social media en de inrichting van de winkel. Robert is bedrijfsleider en adviseur, met jarenlange ervaring in de beddenbranche. Hij kent elk bed in de zaak van binnen en van buiten.</p>
                <p>“Wij zijn adviseurs, geen verkopers,” zegt Robert. “Een kwart van je leven breng je door in bed. Daar mag je best een uur voor uittrekken.” Martin vult aan: “We hebben alles in eigen beheer, van het eerste gesprek tot het instellen van het bed in uw slaapkamer. Zo weten we zeker dat wat we beloven, ook gebeurt.”</p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5 lg:col-start-8 lg:aspect-[3/4]">
              <Image src="/images/j73a4991-25901.1920x0.jpg" alt="Martin en Robert" fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
            </div>
          </div>
        </Section>
        <Section tone="linen">
          <Eyebrow>Het team</Eyebrow>
          <Heading className="mt-4">Drie mensen, één zaak.</Heading>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Martin van de Kolk", "Eigenaar, derde generatie", "Kwam op zijn 23e in de zaak van zijn vader. Brengt ieder bed zelf, stelt het in en komt terug als er iets moet worden aangepast."],
              ["Robert", "Bedrijfsleider en adviseur", "Jarenlange ervaring in de beddenbranche. Doet de Sleep Scan, kent ieder merk en zegt eerlijk welk bed niet bij u past."],
              ["Karin Florijn", "Administratie, social media en inrichting", "Zorgt achter de schermen dat alles klopt: de planning, de facturen en hoe de winkel eruitziet."],
            ].map(([n, r, t]) => (
              <div key={n} className="bg-paper p-6">
                <p className="font-serif text-2xl">{n}</p>
                <p className="mt-1 text-xs tracking-[0.14em] uppercase text-sand-deep">{r}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-10"><Usps /></div>
        </Section>
        <Section>
          <Eyebrow>Sinds 1932</Eyebrow>
          <Heading className="mt-4">Ruim negentig jaar Lochem</Heading>
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
