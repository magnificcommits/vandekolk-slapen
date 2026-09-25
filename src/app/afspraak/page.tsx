import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import BookingForm from "@/components/BookingForm";
import { Eyebrow, GoogleBadge, Heading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan een privé-afspraak",
  description: "Plan een slaapadvies in de showroom aan de Markt in Lochem, advies aan huis of een telefonisch gesprek. Ook 's avonds. Sleep Scan inbegrepen.",
};

export default async function Page({ searchParams }: PageProps<"/afspraak">) {
  const sp = await searchParams;
  const preset = typeof sp.merk === "string" ? sp.merk : undefined;

  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-28">
        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <Eyebrow>Op afspraak</Eyebrow>
              <Heading as="h1" className="mt-4 !text-4xl lg:!text-5xl">Een uur voor uw nachtrust.</Heading>
              <p className="mt-6 leading-relaxed text-ink-soft">
                De showroom is een uur van u. Geen andere klanten, geen haast. Martin of Robert neemt de tijd, doet de Sleep Scan en laat u drie of vier bedden proberen die echt bij u passen.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {[
                  "Sleep Scan van Equilli is inbegrepen (t.w.v. € 49)",
                  "Ook op dinsdag- en donderdagavond, en op maandag",
                  "Advies aan huis binnen 45 km van Lochem",
                  "Gratis parkeren achter de winkel",
                ].map((t) => (
                  <li key={t} className="flex gap-3"><span className="text-sand">—</span>{t}</li>
                ))}
              </ul>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden">
                <Image src="/images/slaapcomfort.jpg" alt="Showroom Van de Kolk Slapen" fill className="object-cover" sizes="(min-width:1024px) 30vw, 100vw" />
              </div>
              <div className="mt-8"><GoogleBadge /></div>
              <p className="mt-8 text-sm text-stone">
                Liever bellen? <a href={site.phoneHref} className="text-ink underline underline-offset-4">{site.phone}</a>
              </p>
            </aside>
            <div className="lg:col-span-7 lg:col-start-6">
              <BookingForm preset={preset} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
