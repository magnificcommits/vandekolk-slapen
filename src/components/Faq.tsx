import type { Faq as FaqItem } from "@/lib/assortiment";

export default function Faq({ items, title = "Veelgestelde vragen" }: { items: FaqItem[]; title?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h2 className="font-serif text-3xl">{title}</h2>
      <dl className="mt-8 divide-y divide-line border-y border-line">
        {items.map((f) => (
          <div key={f.q} className="grid gap-2 py-5 md:grid-cols-12 md:gap-8">
            <dt className="font-medium md:col-span-5">{f.q}</dt>
            <dd className="text-ink-soft leading-relaxed md:col-span-7">{f.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
