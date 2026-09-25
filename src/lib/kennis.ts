import type { Faq } from "./assortiment";

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  readMinutes: number;
  image: string;
  sections: { h: string; p: string[] }[];
  faq: Faq[];
  related: string[]; // brand slugs
};

export const articles: Article[] = [
  {
    slug: "wanneer-matras-vervangen",
    title: "Wanneer is uw matras aan vervanging toe? Zes signalen",
    metaTitle: "Matras vervangen: zes signalen dat het tijd is",
    excerpt: "Een matras gaat acht tot tien jaar mee. Maar de kalender zegt niet alles. Dit zijn de signalen die wij in de winkel elke week horen.",
    date: "2026-09-20",
    readMinutes: 4,
    image: "/images/ovii-fotografie-vandekolk-okt24-6753.480x0.jpg",
    sections: [
      { h: "1. U wordt wakker met pijn die overdag wegtrekt", p: ["Pijn in de onderrug, de schouders of de nek die na een uur op is, komt bijna altijd van het bed. Uw lichaam ligt de hele nacht in een houding die het niet wil. Een matras dat te zacht is geworden laat de heupen wegzakken; een te hard matras drukt de schouders omhoog."] },
      { h: "2. Er ligt een kuil, ook als u er niet in ligt", p: ["Draai het matras om en kijk van opzij. Een kuil van meer dan twee centimeter betekent dat de vulling of de vering het heeft opgegeven. Een topper erop verbergt dat een paar maanden, maar lost het niet op."] },
      { h: "3. U slaapt beter in een hotel of bij familie", p: ["Het eerlijkste signaal. Als u ergens anders uitgerust wakker wordt en thuis niet, dan ligt het niet aan u."] },
      { h: "4. Het matras is ouder dan tien jaar", p: ["Ook zonder klachten. Een matras neemt jaarlijks liters vocht op en verliest langzaam veerkracht. Na tien jaar is het uit oogpunt van hygiëne tijd. Natuurlijke matrassen zoals Vispring gaan langer mee, tot twintig jaar, omdat ze beter ventileren."] },
      { h: "5. U heeft het 's nachts te warm", p: ["Schuim dat ouder wordt, ventileert slechter. Als u de laatste jaren warmer bent gaan slapen zonder dat er iets anders veranderde, is het matras verzadigd."] },
      { h: "6. Uw partner beweegt en u voelt alles", p: ["Oude vering geeft beweging door. Bij een matras met losse pocketveren of twee losse matrassen merkt u niets van een draaiende partner."] },
      { h: "Wat u nu kunt doen", p: ["Neem de maat van uw bed op en kom langs. Meestal kan het onderstel blijven; u vervangt alleen het matras. Wij doen de Sleep Scan van Equilli en laten u drie matrassen proberen die bij uw lichaam passen. Dat kost een uur en niets."] },
    ],
    faq: [
      { q: "Hoe lang gaat een matras mee?", a: "Acht tot tien jaar bij schuim en gewone pocketveren. Handgemaakte matrassen met natuurlijke vulling, zoals Vispring, tot twintig jaar." },
      { q: "Kan ik alleen het matras vervangen?", a: "Meestal wel. Neem een foto van het onderstel mee. Alleen bij een versleten spiraalbodem adviseren we ook de bodem." },
    ],
    related: ["equilli", "jensen", "vispring"],
  },
  {
    slug: "hard-of-zacht-matras-bij-rugklachten",
    title: "Hard of zacht matras bij rugklachten? Het antwoord is: geen van beide",
    metaTitle: "Matras bij rugklachten: hard of zacht?",
    excerpt: "Het advies 'neem een hard matras' is hardnekkig en meestal fout. Wat uw rug nodig heeft is een matras dat op de juiste plekken meegeeft.",
    date: "2026-09-12",
    readMinutes: 5,
    image: "/images/jensen-bed.480x0.jpg",
    sections: [
      { h: "Waarom hard niet hetzelfde is als ondersteunend", p: ["Op een hard matras blijven schouders en heupen boven liggen. Uw wervelkolom hangt daartussen door, als een hangmat. Dat voelt stevig, maar het is het tegenovergestelde van steun.", "Op een goed matras zakken schouders en heupen precies genoeg weg en wordt de onderrug gedragen. Uw ruggengraat ligt dan recht, in zij- en in rugligging."] },
      { h: "Zones doen het werk", p: ["Daarom werken goede matrassen met zones: zachter bij de schouders, steviger bij de heupen en de onderrug. Jensen doet dat met het Original Zone System, Duxiana met losse cassettes die u per zone kunt wisselen, Equilli met een matras dat na de Sleep Scan op uw lichaam wordt gebouwd."] },
      { h: "Twee mensen, twee ruggen", p: ["Slaapt u samen? Dan hoort ieder een eigen stevigheid. Twee losse matrassen onder één topper voelen als één bed, maar reageren per persoon anders. Bij Vispring, Jensen en Avek is dat standaard."] },
      { h: "Zo pakken wij het aan", p: ["Eerst tien minuten op de meetmat van Equilli. Die laat zien waar uw lichaam drukt. Dan drie matrassen die daarbij passen, in uw eigen slaaphouding, zo lang als u wilt. Wij lopen weg als u even alleen wilt liggen."] },
    ],
    faq: [
      { q: "Is een hard matras beter voor je rug?", a: "Nee. Een hard matras laat de wervelkolom doorhangen tussen schouders en heupen. Een gezoneerd matras dat op de juiste plekken meegeeft, houdt de rug recht." },
      { q: "Welk merk is goed bij rugklachten?", a: "Duxiana, Jensen en Equilli hebben alle drie een zonering die de onderrug draagt. Welke bij u past, blijkt bij het proefliggen na de Sleep Scan." },
    ],
    related: ["duxiana", "jensen", "equilli"],
  },
  {
    slug: "handgemaakt-bed-wat-krijg-je-ervoor",
    title: "Wat krijgt u voor een handgemaakt bed van 8.000 euro?",
    metaTitle: "Handgemaakt bed: wat het kost en wat u krijgt",
    excerpt: "Een Vispring of Duxiana kost meer dan een boxspring uit de winkelstraat. Dit is precies waar het verschil in zit, zonder verkooppraat.",
    date: "2026-09-05",
    readMinutes: 6,
    image: "/images/vispring.960x0.jpg",
    sections: [
      { h: "De vering", p: ["Een fabrieksmatras heeft veren van standaardstaal, in kunststof zakjes, machinaal gelegd. Vispring maakt eigen veren van vanadiumstaal, in katoenen zakjes, met de hand genest in een honingraatpatroon. Dat verschil voelt u niet in de winkel. U voelt het in jaar twaalf, als het fabrieksmatras een kuil heeft en de Vispring niet."] },
      { h: "De vulling", p: ["Schuim is goedkoop, licht en houdt warmte en vocht vast. Wol, katoen, paardenhaar, kasjmier en zijde ademen, voeren een halve liter vocht per nacht af en veren terug. Een handgemaakt matras wordt laag voor laag met de hand gevuld en aan de zijkant met de hand doorgestikt, zodat de rand na twintig jaar nog recht staat."] },
      { h: "De aanpasbaarheid", p: ["Een fabrieksbed koopt u zoals het is. Een Vispring kiest u per kant in veerspanning, in stof, in hoogte van de divan. Een Duxiana past u na aankoop nog aan, per zone, door cassettes te wisselen. Verandert uw lichaam, dan verandert het bed mee."] },
      { h: "De rekensom", p: ["Een boxspring van 2.000 euro die tien jaar meegaat, kost 200 euro per jaar. Een handgemaakt bed van 8.000 euro dat twintig jaar meegaat, kost 400 euro per jaar. Voor dat verschil van 55 cent per nacht slaapt u koeler, ligt u beter en koopt u één keer in plaats van twee keer."] },
      { h: "Wanneer het niet de moeite is", p: ["Als u het bed korter dan tien jaar gebruikt, of als u vooral een bepaald design wilt. Dan is een Avek of Pullman de eerlijker keuze. Dat zeggen we ook in de showroom."] },
    ],
    faq: [
      { q: "Wat kost een Vispring bed?", a: "Bij ons vanaf circa € 6.500 voor een compleet bed van 180 x 200. De duurste modellen gaan ver boven € 15.000. De prijs hangt af van veerspanning, vulling en stof." },
      { q: "Waarom is een handgemaakt matras duurder?", a: "Eigen veren van vanadiumstaal, natuurlijke vulling die met de hand wordt gelegd, en een levensduur van twintig jaar in plaats van tien." },
    ],
    related: ["vispring", "duxiana", "avek"],
  },
  {
    slug: "welk-kussen-past-bij-mij",
    title: "Welk hoofdkussen past bij mij? Drie vragen die het bepalen",
    metaTitle: "Welk hoofdkussen past bij mij",
    excerpt: "Nekpijn, hoofdpijn, een tintelende arm. Vaker het kussen dan het matras. Drie vragen die wij stellen bij het kussenadvies.",
    date: "2026-08-28",
    readMinutes: 3,
    image: "/images/ovii-fotografie-vandekolk-okt24-6685-lr.480x0.jpg",
    sections: [
      { h: "1. Hoe slaapt u meestal?", p: ["Op uw zij: dan moet het kussen de ruimte tussen schouder en oor vullen. Hoe breder de schouders, hoe hoger het kussen. Op uw rug: lager, met steun in de nek. Op uw buik: zo plat mogelijk, of geen kussen."] },
      { h: "2. Hoe hard is uw matras?", p: ["Op een zacht matras zakt de schouder weg en heeft u een lager kussen nodig dan op een hard matras. Daarom proberen wij kussens liggend, op een matras dat lijkt op het uwe."] },
      { h: "3. Heeft u het warm?", p: ["Dons en wol ademen. Traagschuim houdt warmte vast. Latex zit ertussenin en houdt jaren zijn vorm."] },
      { h: "Gratis kussenadvies", p: ["Twintig minuten, 25 kussens, liggend proberen. Plan het online of loop binnen. Vaak is het kussen de goedkoopste oplossing voor een nek die 's ochtends vastzit."] },
    ],
    faq: [
      { q: "Hoe vaak vervang ik mijn kussen?", a: "Elke twee tot drie jaar. Een donzen kussen langer als u het regelmatig laat reinigen." },
      { q: "Wat kost een goed kussen?", a: "Tussen € 60 en € 350. Verstelbare kussens en dons zitten aan de bovenkant." },
    ],
    related: ["equilli", "jensen"],
  },
  {
    slug: "twee-slapers-een-bed",
    title: "Samen slapen zonder elkaar wakker te maken",
    metaTitle: "Samen slapen: bed voor twee verschillende slapers",
    excerpt: "Hij weegt 95 kilo en slaapt op zijn rug. Zij 62 en op haar zij. Eén bed dat voor allebei klopt bestaat, maar niet van de plank.",
    date: "2026-08-15",
    readMinutes: 4,
    image: "/images/duxiana.480x0.jpg",
    sections: [
      { h: "Twee matrassen, één gevoel", p: ["De basis is twee losse matrassen, ieder in de eigen stevigheid. Daaroverheen één doorlopend topmatras, zodat u geen naad voelt. Zo voelt het bed als één, maar reageert het per persoon anders."] },
      { h: "Losse veren geven geen beweging door", p: ["Pocketveren zitten elk in een eigen zakje en bewegen onafhankelijk. Draait de ene, dan merkt de ander niets. Bij Vispring, Jensen en Avek is dat standaard; bij Duxiana zorgen de losse cassettes ervoor."] },
      { h: "Ieder een eigen klimaat", p: ["Heeft de een het warm en de ander koud? Twee dekbedden, of een combinatiedekbed van Brinkhaus met een warme en een koele helft. Dat lost meer huwelijksproblemen op dan u denkt."] },
      { h: "Kom samen", p: ["Wij meten u allebei met de Sleep Scan en laten u samen liggen. Alleen zo weet u of het klopt. Neem een uur; het is voor twintig jaar."] },
    ],
    faq: [
      { q: "Kan een tweepersoonsbed per kant een andere stevigheid hebben?", a: "Ja. Twee losse matrassen onder één topper. Bij vrijwel alle merken die wij voeren is dat standaard." },
      { q: "Voel je de naad tussen twee matrassen?", a: "Niet met een doorlopende topper erover. Die maakt van twee matrassen één ligvlak." },
    ],
    related: ["vispring", "jensen", "avek"],
  },
];
