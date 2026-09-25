import type { Metadata } from "next";
import Header from "@/components/Header";
import Configurator from "@/components/Configurator";
import { Eyebrow, GoogleBadge, Heading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Stel uw bed samen",
  description: "In vijf stappen naar drie bedden die bij u passen, met een eerlijke prijsindicatie. Vispring, Duxiana, Jensen, Avek, Pullman, Equilli of Greensleep.",
};

export default function Page() {
  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-28">
        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <Eyebrow>Stel uw bed samen</Eyebrow>
            <Heading as="h1" className="mt-4 !text-4xl lg:!text-5xl">Vijf vragen. Drie bedden die bij u passen. Een eerlijke prijs.</Heading>
            <p className="mt-5 text-ink-soft leading-relaxed">Geen webshop. Wel een goed voorbereid gesprek: u weet waar u aan toe bent voordat u naar Lochem rijdt. Twee minuten.</p>
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
