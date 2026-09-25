import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { CtaBand, Eyebrow, Heading, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Slaapadvies met Sleep Scan",
  description: "Hoe een slaapadvies bij Van de Kolk Slapen werkt: meten met de Equilli Sleep Scan, proefliggen zonder haast, levering en afstelling door de eigenaar.",
};

const steps = [
  {
    n: "01",
    t: "Het gesprek",
    s: "Hoe slaapt u nu? Waar wordt u wakker van? Rug, schouders, warmte, een partner die draait? We beginnen met luisteren, niet met bedden aanwijzen.",
    img: "/images/persoonlijk-slaapadvies.480x0.jpg",
  },
  {
    n: "02",
    t: "De Sleep Scan",
    s: "U ligt tien minuten op de meetmat van Equilli. Die brengt in kaart waar uw lichaam drukt en waar het steun nodig heeft. Objectief, niet op gevoel.",
    img: "/images/equilli-sleep-scan.480x0.jpg",
  },
  {
    n: "03",
    t: "Proefliggen",
    s: "Op basis van de meting kiezen we drie tot vier bedden. U ligt zo lang als u wilt, in uw eigen slaaphouding, met uw partner. Wij lopen weg als u dat prettig vindt.",
    img: "/images/ovii-fotografie-vandekolk-okt24-6685-lr.480x0.jpg",
  },
  {
    n: "04",
    t: "Levering en afstelling",
    s: "Martin is bij iedere levering. Hij zet het bed af, stelt het in en legt uit hoe het werkt. Ligt het na drie weken toch niet goed, dan komt hij terug om bij te stellen.",
    img: "/images/ovii-fotografie-vandekolk-okt24-7179.480x0.jpg",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-28">
        <Section className="!pb-0">
          <div className="max-w-3xl">
            <Eyebrow>Slaapadvies</Eyebrow>
            <Heading as="h1" className="mt-4">Een goed bed is niet het duurste bed. Het is het bed dat bij uw lichaam past.</Heading>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Daarom meten wij voordat we adviseren. En daarom werken we op afspraak: een uur waarin u de enige klant bent.
            </p>
          </div>
        </Section>

        <Section>
          <div className="space-y-20">
            {steps.map((st, i) => (
              <div key={st.n} className={`grid items-center gap-10 lg:grid-cols-12 ${i % 2 ? "" : ""}`}>
                <div className={`relative aspect-[4/3] overflow-hidden lg:col-span-5 ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`}>
                  <Image src={st.img} alt={st.t} fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
                </div>
                <div className={`lg:col-span-6 ${i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
                  <p className="font-serif text-4xl text-sand">{st.n}</p>
                  <h2 className="mt-3 font-serif text-3xl">{st.t}</h2>
                  <p className="mt-4 leading-relaxed text-ink-soft">{st.s}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="linen">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              ["In de showroom", "Markt 20, Lochem. Sleep Scan, proefliggen, koffie. Overdag, op dinsdag- en donderdagavond, en op maandag op afspraak."],
              ["Advies aan huis", "Wij komen langs, kijken naar de slaapkamer, de maten en het huidige bed. Handig bij een verbouwing of een moeilijke trap. Binnen 45 km."],
              ["Eerst even bellen", "Vijftien minuten om te bepalen of een bezoek zinvol is en wat u kunt verwachten. Vrijblijvend."],
            ].map(([t, s]) => (
              <div key={t}>
                <h3 className="font-serif text-2xl">{t}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/afspraak" className="btn btn-primary">Plan een afspraak</Link>
          </div>
        </Section>

        <CtaBand title="Neem uw partner mee. Een bed kies je samen." text="Een uur, alleen voor u. Plan het moment dat u schikt." />
      </div>
    </>
  );
}
