import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { CtaBand, Eyebrow, Heading, Section } from "@/components/ui";
import { concernPages } from "@/lib/content";
import { brands, euro } from "@/lib/site";

export function generateStaticParams() {
  return concernPages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/waar-zoekt-u-naar/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = concernPages.find((x) => x.slug === slug);
  return c ? { title: c.title, description: c.intro } : {};
}

export default async function Page({ params }: PageProps<"/waar-zoekt-u-naar/[slug]">) {
  const { slug } = await params;
  const c = concernPages.find((x) => x.slug === slug);
  if (!c) notFound();
  const rel = brands.filter((b) => c.brands.includes(b.slug));

  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-32">
        <Section className="!pb-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>Waar zoekt u naar?</Eyebrow>
              <Heading as="h1" className="mt-4">{c.title}</Heading>
              <p className="mt-6 text-xl leading-relaxed text-ink-soft">{c.intro}</p>
              <div className="prose-lg mt-8 text-ink-soft">
                {c.body.map((p) => <p key={p}>{p}</p>)}
              </div>
              <Link href="/afspraak" className="btn btn-primary mt-6">Plan een afspraak met Sleep Scan</Link>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
              <Image src={c.image} alt={c.title} fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
            </div>
          </div>
        </Section>
        <Section tone="linen">
          <Eyebrow>Komt in aanmerking</Eyebrow>
          <Heading className="mt-4">Deze merken passen hier meestal bij</Heading>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {rel.map((b) => (
              <Link key={b.slug} href={`/collectie/${b.slug}`} className="group bg-paper">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={b.image} alt={b.name} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="33vw" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl">{b.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{b.short}</p>
                  <p className="mt-3 text-sm text-stone">vanaf <span className="text-ink">{euro(b.from)}</span></p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
        <CtaBand />
      </div>
    </>
  );
}
