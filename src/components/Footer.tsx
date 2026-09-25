import Link from "next/link";
import { brands, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-2xl">van de kolk <span className="text-[0.6rem] tracking-[0.35em] uppercase text-white/60">slapen</span></p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Slaapkamerspeciaalzaak aan de Markt in Lochem. Sinds 1932, derde generatie. Vispring, Duxiana, Jensen en meer, op afspraak te proefliggen.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
              <span className="text-sand">★★★★★</span>
              <span>{site.google.rating.toString().replace(".", ",")} op Google · {site.google.count} beoordelingen</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow !text-white/50">Collectie</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {brands.map((b) => (
                <li key={b.slug}>
                  <Link href={`/collectie/${b.slug}`} className="hover:text-white">{b.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow !text-white/50">Winkel</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link href="/configurator" className="hover:text-white">Stel uw bed samen</Link></li>
              <li><Link href="/assortiment" className="hover:text-white">Matrassen, toppers, kussens</Link></li>
              <li><Link href="/slaapadvies" className="hover:text-white">Slaapadvies</Link></li>
              <li><Link href="/afspraak" className="hover:text-white">Afspraak plannen</Link></li>
              <li><Link href="/waar-zoekt-u-naar" className="hover:text-white">Waar zoekt u naar?</Link></li>
              <li><Link href="/showroomcollectie" className="hover:text-white">Showroomcollectie</Link></li>
              <li><Link href="/over-ons" className="hover:text-white">Ons verhaal</Link></li>
              <li><Link href="/vergelijk/vispring-duxiana-hastens" className="hover:text-white">Vispring, Duxiana of Hästens?</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact en route</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow !text-white/50">Bezoek</p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-white/80">
              {site.address.street}<br />
              {site.address.zip} {site.address.city}<br />
              <a href={site.phoneHref} className="mt-2 block hover:text-white">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="block hover:text-white">{site.email}</a>
            </address>
            <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm text-white/80">
              {site.hours.map((h) => (
                <div key={h.day} className="contents">
                  <dt className="text-white/50">{h.day}</dt>
                  <dd>{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Van de Kolk Slapen · Lochem · voor <Link href="/regio/zutphen" className="hover:text-white">Zutphen</Link>, <Link href="/regio/deventer" className="hover:text-white">Deventer</Link>, <Link href="/regio/apeldoorn" className="hover:text-white">Apeldoorn</Link>, <Link href="/regio/twente" className="hover:text-white">Twente</Link> en <Link href="/regio/achterhoek" className="hover:text-white">de Achterhoek</Link></p>
          <div className="flex gap-5">
            <a href={site.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
            <a href={site.social.facebook} target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </div>
      <div className="h-14 md:hidden" />
    </footer>
  );
}
