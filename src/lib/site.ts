export const site = {
  name: "Van de Kolk Slapen",
  tagline: "De slaapboutique van Oost-Nederland",
  phone: "0573 251 761",
  phoneHref: "tel:+31573251761",
  email: "info@vandekolkslapen.nl",
  whatsapp: "", // later invullen: internationaal formaat zonder plus, bv 31612345678
  address: {
    street: "Markt 20",
    zip: "7241 AA",
    city: "Lochem",
    navigation: "Parkeren achter de winkel: stel uw navigatie in op Noorderwal 30, Lochem.",
    mapsUrl:
      "https://www.google.com/maps/place/Markt+20,+7241+AA+Lochem/@52.1624684,6.4155755,17z",
  },
  hours: [
    { day: "Maandag", value: "Gesloten" },
    { day: "Dinsdag t/m vrijdag", value: "10:00 – 17:30" },
    { day: "Zaterdag", value: "10:00 – 16:00" },
    { day: "Op afspraak", value: "Ook 's avonds en op maandag" },
  ],
  google: {
    rating: 4.6,
    count: 18,
    reviewUrl: "https://www.google.com/search?q=van+de+kolk+slapen+reviews",
  },
  social: {
    instagram: "https://www.instagram.com/vandekolkslapen/",
    facebook: "https://www.facebook.com/vandekolkslapen/",
  },
};

export type Brand = {
  slug: string;
  name: string;
  origin: string;
  short: string;
  description: string;
  from: number; // indicatieve vanaf-prijs compleet 2-persoons bed (180x200)
  fromNote?: string;
  highlights: string[];
  image: string;
  tier: "signature" | "premium" | "care";
};

export const brands: Brand[] = [
  {
    slug: "vispring",
    name: "Vispring",
    origin: "Plymouth, Engeland · sinds 1901",
    short: "Handgemaakt, uitsluitend natuurlijke vullingen. De uitvinder van de pocketveer.",
    description:
      "Vispring maakt ieder bed met de hand in Engeland. Iedere veer is van vanadiumstaal, iedere vulling is natuurlijk: Shetlandwol, kasjmier, zijde, paardenhaar. Het resultaat is een bed dat ademt, dat twintig jaar meegaat en dat u nergens anders in Oost-Nederland kunt proefliggen.",
    from: 6500,
    highlights: ["Handgemaakt in Engeland", "100% natuurlijke vullingen", "Levenslange garantie op de vering", "Volledig op maat: veerspanning, stof, hoogte"],
    image: "/images/vispring.1920x0.jpg",
    tier: "signature",
  },
  {
    slug: "duxiana",
    name: "Duxiana",
    origin: "Zweden · sinds 1926",
    short: "Het Zweedse veersysteem met de Pascal-cassettes: per zone instelbaar, ook na jaren.",
    description:
      "DUX werkt met meerdere lagen verende cassettes die u per lichaamszone kunt wisselen. Verandert uw lichaam, dan verandert het bed mee. Een DUX koopt u één keer.",
    from: 7900,
    highlights: ["Uitwisselbare Pascal-cassettes", "Meerlaags veersysteem", "Zweeds design", "Ook elektrisch verstelbaar"],
    image: "/images/duxiana.1920x0.jpg",
    tier: "signature",
  },
  {
    slug: "jensen",
    name: "Jensen",
    origin: "Noorwegen · sinds 1947",
    short: "Scandinavisch comfort met het Original Zone System: schouders zakken weg, de rug blijft recht.",
    description:
      "Jensen is de Noorse referentie voor wie zacht wil liggen zonder steun te verliezen. Pocket-on-pocket veren, een diepe schouderzone en een strak Scandinavisch design. 25 jaar garantie op frame en vering.",
    from: 4500,
    highlights: ["Original Zone System", "Pocket-on-pocket vering", "25 jaar garantie op frame en veren", "Continental, Prestige en Supreme"],
    image: "/images/jensen-bed.1920x0.jpg",
    tier: "premium",
  },
  {
    slug: "avek",
    name: "Avek",
    origin: "Surhuisterveen, Friesland · sinds 1927",
    short: "Nederlands vakwerk. De Ninety werd twee keer als beste boxspring getest door de Consumentenbond.",
    description:
      "Avek bouwt in Friesland drielaagse boxsprings met elektrothermisch geharde pocketveren. Degelijk, eerlijk geprijsd en in vrijwel iedere maat en stof leverbaar.",
    from: 2995,
    highlights: ["Gemaakt in Nederland", "Beste uit de test (Consumentenbond)", "Drielaags comfort", "Maatwerk in maat en stof"],
    image: "/images/5e1a7027-2901.1920x0.jpg",
    tier: "premium",
  },
  {
    slug: "pullman",
    name: "Pullman",
    origin: "Nederland · sinds 1935",
    short: "De Original: de klassieke Nederlandse boxspring, in meer dan 300 stoffen.",
    description:
      "Pullman is het merk van de tijdloze boxspring. Het Original-programma combineert een verende box met het Elan-matras en laat zich in honderden stoffen en kleuren samenstellen.",
    from: 3200,
    highlights: ["Meer dan 300 Linara-stoffen", "Original en Express programma", "Nederlands fabricaat", "Snelle levertijd"],
    image: "/images/ovii-fotografie-vandekolk-web-lr-3.1920x0.jpg",
    tier: "premium",
  },
  {
    slug: "equilli",
    name: "Equilli",
    origin: "België",
    short: "Een matras op maat van uw lichaam, na een wetenschappelijke Sleep Scan. Exclusief in Lochem.",
    description:
      "Equilli meet uw slaapprofiel met de Personal Sleep Scan en bouwt daarop een matras met zones die precies bij uw lichaam passen. Wij zijn de exclusieve Equilli-partner voor Lochem en omstreken.",
    from: 1800,
    fromNote: "matras op maat",
    highlights: ["Personal Sleep Scan in onze showroom", "Matras per zone op maat", "Wetenschappelijk onderbouwd", "Exclusief in de regio"],
    image: "/images/slaapcomfort.jpg",
    tier: "premium",
  },
  {
    slug: "greensleep",
    name: "Greensleep",
    origin: "België",
    short: "Natuurlatex, biologisch katoen en wol. Voor wie zuiver en koel wil slapen.",
    description:
      "Greensleep bouwt slaapsystemen van natuurlatex, biologisch katoen en wol, zonder synthetische schuimen of lijmen. Ademend, veerkrachtig en met een aanpasbare kern per slaper.",
    from: 3900,
    highlights: ["100% natuurlatex", "Biologisch katoen en wol", "Aanpasbare kern per slaper", "Vrij van synthetisch schuim"],
    image: "/images/greensleep.1920x0.jpg",
    tier: "premium",
  },
  {
    slug: "tecfor-care",
    name: "Tecfor Care",
    origin: "Nederland",
    short: "Hoog-laag bedden met de uitstraling van een gewoon bed. Comfortabel slapen, ook als zorg nodig is.",
    description:
      "Tecfor Care maakt elektrisch hoog-laag verstelbare bedden die er uitzien als een normaal ledikant of boxspring. Voor wie langer thuis wil blijven wonen, met alle comfort en zonder ziekenhuisgevoel.",
    from: 3500,
    highlights: ["Hoog-laag verstelbaar", "Uitstraling van een gewoon bed", "Ook als tweepersoons", "Thuis wonen met zorg"],
    image: "/images/tecfor-care-elba-royal.1920x0.jpg",
    tier: "care",
  },
];

export const textileBrands = [
  { slug: "brinkhaus", name: "Brinkhaus", short: "Duitse dekbedden en kussens van dons, zijde en kameelhaar." },
  { slug: "dommelin", name: "Dommelin", short: "Nederlands bedlinnen van katoensatijn, percal en linnen." },
];

export const concerns = [
  { slug: "rug-en-nek", title: "Rug- en nekklachten", short: "Wakker worden met pijn is geen kwestie van ouder worden. Meestal ligt het aan de zonering." },
  { slug: "warm-slapen", title: "Warm slapen", short: "Natuurlijke vullingen voeren vocht en warmte af. Synthetisch schuim doet dat niet." },
  { slug: "partner-beweegt", title: "Uw partner beweegt", short: "Losse pocketveren en gescheiden matrassen laten u doorslapen als de ander draait." },
  { slug: "natuurlijk-slapen", title: "Natuurlijk slapen", short: "Wol, katoen, latex, paardenhaar. Geen schuim, geen lijm, wel ventilatie." },
  { slug: "zorg-en-comfort", title: "Zorg en comfort", short: "Hoog-laag bedden die eruitzien als een gewoon bed. Langer thuis, met stijl." },
];

export function euro(n: number) {
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}
