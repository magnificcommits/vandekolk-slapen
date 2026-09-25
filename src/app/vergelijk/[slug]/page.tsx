import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Faq from "@/components/Faq";
import { CtaBand, Eyebrow, Heading, Section } from "@/components/ui";
import { comparisons } from "@/lib/assortiment";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/vergelijk/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = comparisons.find((x) => x.slug === slug);
  return c ? { title: c.metaTitle, description: c.intro } : {};
}

export default async function Page({ params }: PageProps<"/vergelijk/[slug]">) {
  const { slug } = await params;
  const c = comparisons.find((x) => x.slug === slug);
  if (!c) notFound();
  const others = comparisons.filter((x) => x.slug !== c.slug);

  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-28">
        <Section className="!pb-2">
          <div className="max-w-3xl">
            <Eyebrow>Eerlijk vergeleken</Eyebrow>
            <Heading as="h1" className="mt-4">{c.title}</Heading>
            <p className="mt-6 text-xl leading-relaxed text-ink-soft">{c.intro}</p>
          </div>
        </Section>
        <Section className="!pt-2">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink">
                  {c.heads.map((h, i) => <th key={i} className="py-3 pr-6 text-left font-serif text-xl font-normal">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.label} className="border-b border-line align-top">
                    <th className="py-4 pr-6 text-left font-medium text-stone">{r.label}</th>
                    {r.cells.map((cell, i) => <td key={i} className="py-4 pr-6 leading-relaxed text-ink-soft">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 max-w-3xl bg-linen p-8">
            <p className="eyebrow">Ons advies</p>
            <p className="mt-3 text-lg leading-relaxed">{c.verdict}</p>
            <Link href="/afspraak" className="btn btn-primary mt-6">Kom ze naast elkaar proberen</Link>
          </div>
        </Section>
        <Section tone="linen"><Faq items={c.faq} /></Section>
        {others.length > 0 && (
          <Section className="!py-6">
            <p className="text-sm text-stone">Ook lezen: {others.map((o) => <Link key={o.slug} href={`/vergelijk/${o.slug}`} className="ml-2 underline underline-offset-4 text-ink">{o.title}</Link>)}</p>
          </Section>
        )}
        <CtaBand />
      </div>
    </>
  );
}
