import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Faq from "@/components/Faq";
import { CtaBand, Eyebrow, Heading, Section } from "@/components/ui";
import { categories } from "@/lib/assortiment";
import { brands, euro, site, textileBrands } from "@/lib/site";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/assortiment/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = categories.find((x) => x.slug === slug);
  return c ? { title: `${c.title} kopen in Lochem`, description: `${c.intro} ${euro(c.priceFrom)} tot ${euro(c.priceTo)} ${c.priceNote}. Advies in de winkel aan de Markt in Lochem.` } : {};
}

export default async function Page({ params }: PageProps<"/assortiment/[slug]">) {
  const { slug } = await params;
  const c = categories.find((x) => x.slug === slug);
  if (!c) notFound();
  const names = c.brands.map((s) => brands.find((b) => b.slug === s)?.name ?? textileBrands.find((t) => t.slug === s)?.name ?? s);
  const cta = c.cta === "kussenadvies"
    ? { href: "/afspraak?merk=Kussens" as const, label: "Plan gratis kussenadvies" }
    : c.cta === "afspraak"
    ? { href: "/afspraak" as const, label: "Plan een afspraak" }
    : { href: "/contact" as const, label: "Openingstijden en route" };

  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-28">
        <Section className="!pb-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>Assortiment</Eyebrow>
              <Heading as="h1" className="mt-4">{c.title}</Heading>
              <p className="mt-6 text-xl leading-relaxed text-ink-soft">{c.intro}</p>
              <div className="prose-lg mt-8 text-ink-soft">{c.body.map((p) => <p key={p}>{p}</p>)}</div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href={cta.href} className="btn btn-primary">{cta.label}</Link>
                <a href={site.phoneHref} className="btn btn-outline">Bel {site.phone}</a>
              </div>
            </div>
            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={c.image} alt={c.title} fill className="object-cover" sizes="(min-width:1024px) 30vw, 100vw" />
              </div>
              <div className="mt-5 bg-linen p-6">
                <p className="eyebrow">Prijs</p>
                <p className="mt-2 font-serif text-3xl">{euro(c.priceFrom)} <span className="text-lg text-stone">tot {euro(c.priceTo)}</span></p>
                <p className="mt-1 text-sm text-stone">{c.priceNote}, indicatie</p>
                <p className="mt-4 text-sm text-ink-soft">Merken: {names.join(", ")}</p>
              </div>
            </aside>
          </div>
        </Section>
        <Section tone="linen"><Faq items={c.faq} /></Section>
        <CtaBand />
      </div>
    </>
  );
}
