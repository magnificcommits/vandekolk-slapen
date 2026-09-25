import Link from "next/link";
import { site } from "@/lib/site";

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "linen" | "night";
  id?: string;
}) {
  const bg = tone === "linen" ? "bg-linen" : tone === "night" ? "bg-night text-white" : "bg-paper";
  return (
    <section id={id} className={bg}>
      <div className={`mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16 ${className}`}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "!text-white/60" : ""}`}>{children}</p>;
}

export function Heading({ children, className = "", as: Tag = "h2" }: { children: React.ReactNode; className?: string; as?: "h1" | "h2" | "h3" }) {
  const size = Tag === "h1" ? "text-4xl md:text-5xl lg:text-6xl" : Tag === "h3" ? "text-2xl" : "text-3xl md:text-4xl lg:text-[2.75rem]";
  return <Tag className={`font-serif leading-[1.1] ${size} ${className}`}>{children}</Tag>;
}

export function Stars({ className = "" }: { className?: string }) {
  return <span className={`tracking-[0.1em] text-sand ${className}`}>★★★★★</span>;
}

export function GoogleBadge({ light = false }: { light?: boolean }) {
  return (
    <a
      href={site.google.reviewUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-3 text-sm ${light ? "text-white/85" : "text-ink-soft"}`}
    >
      <Stars />
      <span>
        <strong className="font-medium">{site.google.rating.toString().replace(".", ",")}</strong> op Google · {site.google.count} beoordelingen
      </span>
    </a>
  );
}

export function CtaBand({ title = "Kom rustig proefliggen.", text = "Plan een afspraak in de showroom of vraag advies aan huis. Kan ook 's avonds." }: { title?: string; text?: string }) {
  return (
    <Section tone="night">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow light>Op afspraak</Eyebrow>
          <Heading className="mt-4">{title}</Heading>
          <p className="mt-5 max-w-xl text-white/75">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <Link href="/afspraak" className="btn btn-sand">Plan een afspraak</Link>
          <a href={site.phoneHref} className="btn btn-light">Bel {site.phone}</a>
        </div>
      </div>
    </Section>
  );
}

export function Usps({ light = false }: { light?: boolean }) {
  const items = [
    ["Sinds 1932", "Familiebedrijf, derde generatie"],
    ["Eigenaar levert zelf", "Martin is bij iedere bezorging"],
    ["Uniek in de regio", "Vispring, Duxiana en Jensen naast elkaar"],
    ["Sleep Scan", "Eerst meten, dan kiezen"],
  ];
  return (
    <ul className={`grid grid-cols-2 gap-6 lg:grid-cols-4 ${light ? "text-white" : "text-ink"}`}>
      {items.map(([t, s]) => (
        <li key={t} className={`border-l pl-4 ${light ? "border-white/20" : "border-line"}`}>
          <p className="font-serif text-lg">{t}</p>
          <p className={`mt-1 text-sm ${light ? "text-white/60" : "text-stone"}`}>{s}</p>
        </li>
      ))}
    </ul>
  );
}
