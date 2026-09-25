import type { Metadata } from "next";
import Header from "@/components/Header";
import { Heading, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy", robots: { index: false } };

export default function Page() {
  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-28">
        <Section>
          <div className="prose-lg max-w-2xl text-ink-soft">
            <Heading as="h1" className="!text-ink mb-8">Privacy</Heading>
            <p>Van de Kolk Slapen, {site.address.street}, {site.address.zip} {site.address.city}, verwerkt uw gegevens uitsluitend om uw afspraak of aanvraag af te handelen en om contact met u op te nemen over uw bestelling.</p>
            <p>Wij gebruiken uw naam, e-mailadres en telefoonnummer voor de bevestiging en planning van uw afspraak. Wij delen deze gegevens niet met derden, behalve met onze e-maildienst voor het versturen van bevestigingen. Wij bewaren aanvragen maximaal twee jaar.</p>
            <p>Deze website gebruikt geen tracking-cookies van derden. Voor bezoekstatistieken gebruiken wij een cookieloze meting.</p>
            <p>U kunt inzage, correctie of verwijdering van uw gegevens vragen via {site.email}.</p>
          </div>
        </Section>
      </div>
    </>
  );
}
