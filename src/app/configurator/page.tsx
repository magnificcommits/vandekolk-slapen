import type { Metadata } from "next";
import Header from "@/components/Header";
import Configurator from "@/components/Configurator";
import { Eyebrow, GoogleBadge, Heading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Welk bed past bij u? Vijf vragen",
  description: "Vijf vragen over hoe u slaapt. Daarna staan de juiste bedden voor u klaar in de showroom in Lochem. Vispring, Duxiana, Jensen, Avek, Pullman, Equilli of Greensleep.",
};

export default function Page() {
  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-32">
        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <Eyebrow>Stel uw bed samen</Eyebrow>
            <Heading as="h1" className="mt-4 !text-4xl lg:!text-5xl">Vijf vragen. Dan weten wij welke drie bedden voor u klaar moeten staan.</Heading>
            <p className="mt-5 text-ink-soft leading-relaxed">Geen webshop, geen prijslijst. Wel een goed voorbereide afspraak: als u binnenkomt, liggen de bedden klaar die bij uw antwoorden passen. Twee minuten invullen.</p>
            <div className="mt-5"><GoogleBadge /></div>
          </div>
          <div className="mt-12 border-t border-line pt-10">
            <Configurator />
          </div>
        </section>
      </div>
    </>
  );
}
