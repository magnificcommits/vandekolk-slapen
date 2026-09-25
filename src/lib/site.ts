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
    short: "Met de hand gemaakt in Engeland, alleen natuurlijke materialen. Gaat twintig jaar mee.",
    description:
      "Vispring maakt elk bed met de hand in Engeland. De veren zijn van speciaal staal. De vulling is natuurlijk: wol, kasjmier, zijde, paardenhaar. Zo krijgt u een bed dat ademt en twintig jaar meegaat. In Oost-Nederland kunt u alleen bij ons op een Vispring proefliggen.",
    from: 6500,
    highlights: ["Handgemaakt in Engeland", "100% natuurlijke vullingen", "Levenslange garantie op de vering", "Volledig op maat: veerspanning, stof, hoogte"],
    image: "/images/vispring.1920x0.jpg",
    tier: "signature",
  },
  {
    slug: "duxiana",
    name: "Duxiana",
    origin: "Zweden · sinds 1926",
    short: "Zweeds bed dat u per zone kunt aanpassen. Ook na jaren nog.",
    description:
      "Een Duxiana heeft meerdere lagen veren in losse blokken. Die blokken kunt u per zone wisselen. Verandert uw lichaam, dan past u het bed aan. Een Duxiana koopt u één keer.",
    from: 5900,
    highlights: ["Uitwisselbare Pascal-cassettes", "Meerlaags veersysteem", "Zweeds design", "Ook elektrisch verstelbaar"],
    image: "/images/duxiana.1920x0.jpg",
    tier: "signature",
  },
  {
    slug: "jensen",
    name: "Jensen",
    origin: "Noorwegen · sinds 1947",
    short: "Noors bed met zones: uw schouders zakken weg, uw rug blijft recht.",
    description:
      "Jensen is het Noorse merk voor wie zacht wil liggen en toch goede steun wil. Dubbele pocketveren, een diepe schouderzone en een strak design. 25 jaar garantie op frame en veren.",
    from: 4500,
    highlights: ["Original Zone System", "Pocket-on-pocket vering", "25 jaar garantie op frame en veren", "Continental, Prestige en Supreme"],
    image: "/images/jensen-bed.1920x0.jpg",
    tier: "premium",
  },
  {
    slug: "avek",
    name: "Avek",
    origin: "Surhuisterveen, Friesland · sinds 1927",
    short: "Gemaakt in Friesland. Twee keer beste boxspring in de test van de Consumentenbond.",
    description:
      "Avek maakt in Friesland boxsprings met drie lagen: box, matras en topper. Degelijk, eerlijk geprijsd en in bijna elke maat en stof te krijgen.",
    from: 2995,
    highlights: ["Gemaakt in Nederland", "Beste uit de test (Consumentenbond)", "Drielaags comfort", "Maatwerk in maat en stof"],
    image: "/images/5e1a7027-2901.1920x0.jpg",
    tier: "premium",
  },
  {
    slug: "pullman",
    name: "Pullman",
    origin: "Nederland · sinds 1935",
    short: "De klassieke Nederlandse boxspring. Keuze uit meer dan 300 stoffen.",
    description:
      "Pullman maakt al sinds 1935 boxsprings in Nederland. De Original is een verende box met een goed matras. U stelt hem zelf samen in honderden stoffen en kleuren.",
    from: 3200,
    highlights: ["Meer dan 300 Linara-stoffen", "Original en Express programma", "Nederlands fabricaat", "Snelle levertijd"],
    image: "/images/ovii-fotografie-vandekolk-web-lr-3.1920x0.jpg",
    tier: "premium",
  },
  {
    slug: "equilli",
    name: "Equilli",
    origin: "België",
    short: "Een matras op maat van uw lichaam, na de Sleep Scan. Alleen bij ons in de regio.",
    description:
      "Equilli meet met de Sleep Scan hoe u ligt. Daarna maken ze een matras met zones die precies bij uw lichaam passen. Wij zijn de enige Equilli-winkel in de regio Lochem.",
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
    short: "Natuurlijk latex, biologisch katoen en wol. Voor wie koel en zuiver wil slapen.",
    description:
      "Greensleep gebruikt natuurlijk latex, biologisch katoen en wol. Geen kunststof schuim, geen lijm. Het bed ademt goed en de kern kunt u per persoon aanpassen.",
    from: 3900,
    highlights: ["100% natuurlatex", "Biologisch katoen en wol", "Aanpasbare kern per slaper", "Vrij van synthetisch schuim"],
    image: "/images/greensleep.1920x0.jpg",
    tier: "premium",
  },
  {
    slug: "tecfor-care",
    name: "Tecfor Care",
    origin: "Nederland",
    short: "Een bed dat omhoog en omlaag kan, maar eruitziet als een gewoon bed.",
    description:
      "Tecfor Care maakt bedden die elektrisch omhoog en omlaag gaan. Ze zien eruit als een gewoon ledikant of boxspring. Voor wie langer thuis wil blijven wonen, zonder ziekenhuisgevoel.",
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
  { slug: "rug-en-nek", title: "Rug- en nekklachten", short: "Wakker worden met pijn hoort niet bij ouder worden. Meestal ligt het aan uw matras." },
  { slug: "warm-slapen", title: "Warm slapen", short: "Natuurlijke materialen voeren warmte en vocht af. Kunststof schuim houdt ze vast." },
  { slug: "partner-beweegt", title: "Uw partner beweegt", short: "Met losse veren en twee matrassen slaapt u door als de ander draait." },
  { slug: "natuurlijk-slapen", title: "Natuurlijk slapen", short: "Wol, katoen, latex, paardenhaar. Geen schuim, geen lijm." },
  { slug: "zorg-en-comfort", title: "Zorg en comfort", short: "Een zorgbed dat eruitziet als een gewoon bed. Zo woont u langer thuis." },
];

export function euro(n: number) {
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}
