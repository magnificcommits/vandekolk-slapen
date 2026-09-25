import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { Eyebrow, GoogleBadge, Heading, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact en route · Markt 20, Lochem",
  description: "Van de Kolk Slapen, Markt 20 in Lochem. Openingstijden, parkeren achter de winkel (Noorderwal 30), telefoon en e-mail.",
};

export default function Page() {
  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-32">
        <Section>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Contact</Eyebrow>
              <Heading as="h1" className="mt-4">Aan de Markt in Lochem.</Heading>
              <address className="mt-8 not-italic leading-relaxed">
                <p className="font-serif text-2xl">{site.address.street}</p>
                <p className="text-ink-soft">{site.address.zip} {site.address.city}</p>
                <p className="mt-5"><a href={site.phoneHref} className="font-serif text-2xl">{site.phone}</a></p>
                <p><a href={`mailto:${site.email}`} className="text-ink-soft underline underline-offset-4">{site.email}</a></p>
              </address>

              <dl className="mt-10 grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 border-t border-line pt-6 text-sm">
                {site.hours.map((h) => (
                  <div key={h.day} className="contents">
                    <dt className="text-stone">{h.day}</dt>
                    <dd>{h.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 bg-linen p-6 text-sm leading-relaxed">
                <p className="eyebrow">Parkeren</p>
                <p className="mt-2">{site.address.navigation} Wij zitten rechts naast het appartementencomplex, met de ingang aan de Markt.</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/afspraak" className="btn btn-primary">Plan een afspraak</Link>
                <a href={site.address.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-outline">Route in Google Maps</a>
              </div>
              <div className="mt-8"><GoogleBadge /></div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-28">
                <Image src="/images/j73a4991-25901.1920x0.jpg" alt="Martin van de Kolk en Robert van Haaften" fill className="object-cover" sizes="(min-width:1024px) 45vw, 100vw" />
              </div>
              <p className="mt-4 text-sm text-stone">Martin van de Kolk en Robert van Haaften. U treft één van hen altijd in de zaak.</p>
            </div>
          </div>
        </Section>
        <div className="aspect-[16/7] w-full bg-linen">
          <iframe
            title="Kaart"
            className="h-full w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Markt+20,+7241+AA+Lochem&output=embed"
          />
        </div>
      </div>
    </>
  );
}
