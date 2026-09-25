import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vandekolkslapen.nl"),
  title: {
    default: "Van de Kolk Slapen · Slaapboutique in Lochem · Vispring, Duxiana, Jensen",
    template: "%s · Van de Kolk Slapen",
  },
  description:
    "Beddenspeciaalzaak aan de Markt in Lochem. Vispring, Duxiana, Jensen, Avek en Pullman proefliggen op afspraak. Familiebedrijf sinds 1932, eigenaar levert zelf.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: site.name,
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: site.name,
  image: "https://www.vandekolkslapen.nl/images/j73a4991-25901.1920x0.jpg",
  telephone: "+31573251761",
  email: site.email,
  url: "https://www.vandekolkslapen.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: "NL",
  },
  geo: { "@type": "GeoCoordinates", latitude: 52.1624684, longitude: 6.4155755 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "16:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: site.google.rating, reviewCount: site.google.count },
  brand: ["Vispring", "Duxiana", "Jensen", "Avek", "Pullman", "Equilli", "Greensleep", "Tecfor Care"],
  areaServed: ["Lochem", "Zutphen", "Deventer", "Apeldoorn", "Twente", "Achterhoek"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className="h-full">
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
