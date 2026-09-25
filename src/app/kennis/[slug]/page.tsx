import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Faq from "@/components/Faq";
import { CtaBand, Eyebrow, Section } from "@/components/ui";
import { articles } from "@/lib/kennis";
import { brands, euro } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/kennis/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a ? { title: a.metaTitle, description: a.excerpt, openGraph: { type: "article", publishedTime: a.date, images: [a.image] } } : {};
}

export default async function Page({ params }: PageProps<"/kennis/[slug]">) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  const rel = brands.filter((b) => a.related.includes(b.slug));
  const others = articles.filter((x) => x.slug !== a.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    datePublished: a.date,
    author: { "@type": "Organization", name: "Van de Kolk Slapen" },
    publisher: { "@type": "Organization", name: "Van de Kolk Slapen" },
    image: `https://www.vandekolkslapen.nl${a.image}`,
  };
  const fmt = new Date(a.date + "T12:00:00").toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="pt-24 lg:pt-28">
        <Section className="!pb-6">
          <div className="max-w-3xl">
            <Eyebrow><Link href="/kennis">Kennis</Link> · {fmt} · {a.readMinutes} min lezen</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">{a.title}</h1>
            <p className="mt-5 text-xl leading-relaxed text-ink-soft">{a.excerpt}</p>
          </div>
          <div className="relative mt-8 aspect-[16/8] max-w-5xl overflow-hidden">
            <Image src={a.image} alt="" fill priority className="object-cover" sizes="(min-width:1024px) 70vw, 100vw" />
          </div>
        </Section>
        <Section className="!pt-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <article className="max-w-2xl lg:col-span-8">
              {a.sections.map((s) => (
                <section key={s.h} className="mb-8">
                  <h2 className="font-serif text-2xl">{s.h}</h2>
                  <div className="prose-lg mt-3 text-ink-soft">{s.p.map((p) => <p key={p}>{p}</p>)}</div>
                </section>
              ))}
              <Link href="/afspraak" className="btn btn-primary">Plan een afspraak met Sleep Scan</Link>
            </article>
            <aside className="lg:col-span-4">
              <div className="bg-linen p-6">
                <p className="eyebrow">Genoemd in dit stuk</p>
                <ul className="mt-4 space-y-3">
                  {rel.map((b) => (
                    <li key={b.slug}>
                      <Link href={`/collectie/${b.slug}`} className="font-serif text-lg underline-offset-4 hover:underline">{b.name}</Link>
                      <p className="text-sm text-stone">vanaf {euro(b.from)}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 border-t border-line pt-6">
                <p className="eyebrow">Ook lezen</p>
                <ul className="mt-4 space-y-3">
                  {others.map((o) => (
                    <li key={o.slug}><Link href={`/kennis/${o.slug}`} className="text-sm underline-offset-4 hover:underline">{o.title}</Link></li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Section>
        <Section tone="linen" className="!py-10"><Faq items={a.faq} /></Section>
        <CtaBand />
      </div>
    </>
  );
}
