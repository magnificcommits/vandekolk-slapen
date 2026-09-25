export type Faq = { q: string; a: string };

export type Category = {
  slug: string;
  title: string;
  nav: string;
  intro: string;
  body: string[];
  brands: string[];
  priceFrom: number;
  priceTo: number;
  priceNote: string;
  image: string;
  faq: Faq[];
  cta: "afspraak" | "kussenadvies" | "winkel";
};

export const categories: Category[] = [
  {
    slug: "matrassen",
    title: "Matrassen",
    nav: "Matrassen",
    intro: "Een nieuw matras op uw bestaande bed. Vaak de slimste stap als het bed zelf nog goed is.",
    body: [
      "Een matras gaat acht tot tien jaar mee. Wordt u wakker met pijn, ligt er een kuil of is het matras ouder dan tien jaar? Dan is het tijd. Uw boxspring of lattenbodem kan meestal blijven.",
      "Wij voeren matrassen van Vispring, Jensen, Avek, Pullman, Greensleep en Equilli. Pocketveren, natuurlatex of op maat gemeten na de Sleep Scan. In alle standaardmaten en op maat.",
      "Neem de maat van uw bed mee, of een foto van het onderstel. Dan weten we direct welke matrassen erop passen.",
    ],
    brands: ["vispring", "jensen", "avek", "pullman", "greensleep", "equilli"],
    priceFrom: 900,
    priceTo: 4000,
    priceNote: "per matras 90 x 200",
    image: "/images/ovii-fotografie-vandekolk-okt24-6753.480x0.jpg",
    faq: [
      { q: "Hoe weet ik of mijn matras aan vervanging toe is?", a: "Na acht tot tien jaar, bij een zichtbare kuil, of als u wakker wordt met pijn die overdag wegtrekt. Kom langs met de maat van uw bed; wij meten en adviseren." },
      { q: "Past een nieuw matras op mijn oude boxspring?", a: "Meestal wel. Neem een foto van het onderstel mee of stuur die vooraf. Bij een oude spiraalbodem adviseren we soms ook de bodem te vervangen." },
      { q: "Wat kost een goed matras?", a: "Bij ons tussen € 900 en € 4.000 per matras van 90 x 200. Een Equilli op maat vanaf € 1.800, een Vispring vanaf circa € 2.500." },
      { q: "Kan ik het matras thuis proberen?", a: "U ligt in de showroom zo lang als u wilt, na de Sleep Scan. Ligt het na levering toch niet goed, dan komt Martin langs om bij te stellen." },
    ],
    cta: "afspraak",
  },
  {
    slug: "toppers",
    title: "Toppers",
    nav: "Toppers",
    intro: "De bovenste laag bepaalt hoe uw bed voelt. Een goede topper maakt een goed bed af en gaat vijf jaar mee.",
    body: [
      "Een topper is het matras van zes tot acht centimeter bovenop uw matras of boxspring. Het bepaalt het eerste gevoel: zacht, veerkrachtig of koel. En het beschermt het matras eronder.",
      "Wij hebben toppers van latex, traagschuim, wol en natuurlijke vezels van Vispring, Jensen, Avek, Pullman en Greensleep. Voor bijna ieder merk bed, ook als u het bed elders kocht.",
      "Een topper vervangt u elke vijf jaar. Dat is de goedkoopste manier om een goed bed goed te houden.",
    ],
    brands: ["vispring", "jensen", "avek", "pullman", "greensleep"],
    priceFrom: 400,
    priceTo: 1500,
    priceNote: "per topper 180 x 200",
    image: "/images/ovii-fotografie-vandekolk-okt24-7297.480x0.jpg",
    faq: [
      { q: "Past een topper ook op een bed van een ander merk?", a: "Ja. Neem de maat mee. Alleen bij een verstelbaar bed letten we op de flexibiliteit van de topper." },
      { q: "Welke topper bij warm slapen?", a: "Wol of natuurlatex. Geen traagschuim; dat houdt warmte vast." },
      { q: "Hoe vaak vervang ik een topper?", a: "Elke vijf jaar. Wij noteren de aankoopdatum en herinneren u eraan." },
    ],
    cta: "winkel",
  },
  {
    slug: "kussens",
    title: "Hoofdkussens",
    nav: "Kussens",
    intro: "25 soorten kussens in de winkel. Twintig minuten kussenadvies, gratis, en u weet welk kussen bij uw nek past.",
    body: [
      "Een verkeerd kussen geeft nekpijn, hoofdpijn en een scheve wervelkolom. Het juiste kussen hangt af van uw slaaphouding, uw schouderbreedte en de hardheid van uw matras.",
      "Wij hebben dons, wol, latex, traagschuim en verstelbare kussens van Brinkhaus en de beddenmerken. U probeert ze liggend, op een matras dat lijkt op het uwe.",
      "Kussenadvies is gratis en duurt twintig minuten. Plan het online of loop binnen.",
    ],
    brands: ["brinkhaus", "equilli", "jensen"],
    priceFrom: 60,
    priceTo: 350,
    priceNote: "per kussen",
    image: "/images/ovii-fotografie-vandekolk-okt24-6685-lr.480x0.jpg",
    faq: [
      { q: "Welk kussen bij zijslapen?", a: "Een hoger, steviger kussen dat de ruimte tussen schouder en hoofd vult. Bij brede schouders hoger dan bij smalle." },
      { q: "Welk kussen bij nekpijn?", a: "Meestal een kussen dat te hoog of te laag is. Wij meten uw schouderbreedte en laten u liggend proberen." },
      { q: "Hoe vaak vervang ik een kussen?", a: "Elke twee tot drie jaar. Dons kan langer mee als u het regelmatig laat reinigen." },
    ],
    cta: "kussenadvies",
  },
  {
    slug: "dekbedden",
    title: "Dekbedden",
    nav: "Dekbedden",
    intro: "Dons, zijde, wol of kameelhaar van Brinkhaus. Een dekbed dat ademt, slaapt koeler in de zomer en warmer in de winter.",
    body: [
      "Een goed dekbed regelt vocht en warmte. Natuurlijke vullingen doen dat beter dan synthetische: dons is licht en warm, zijde koel, kameelhaar zelfregulerend.",
      "Brinkhaus maakt dekbedden in Duitsland, in vier warmteklassen en alle maten. Ook als vierseizoenendekbed, of met twee verschillende helften voor partners die anders slapen.",
      "In oktober en november is het rustig kiezen, met de hele collectie in de winkel.",
    ],
    brands: ["brinkhaus"],
    priceFrom: 300,
    priceTo: 1500,
    priceNote: "per dekbed 240 x 220",
    image: "/images/ovii-fotografie-vandekolk-okt24-7124.0x640.jpg",
    faq: [
      { q: "Dons of zijde?", a: "Dons als u het snel koud heeft, zijde als u het snel warm heeft. Kameelhaar voor wie het allebei heeft." },
      { q: "Kan ik twee verschillende helften krijgen?", a: "Ja, Brinkhaus maakt combinatiedekbedden met een warme en een koele helft." },
      { q: "Hoe lang gaat een donzen dekbed mee?", a: "Tien tot vijftien jaar, mits u het jaarlijks laat reinigen of goed lucht." },
    ],
    cta: "winkel",
  },
  {
    slug: "beddengoed",
    title: "Beddengoed",
    nav: "Beddengoed",
    intro: "Dekbedovertrekken, hoeslakens en moltons van Dommelin. Nederlands, katoensatijn, percal of linnen.",
    body: [
      "Dommelin maakt sinds 1912 bedlinnen in Nederland. Zacht, sterk en in kleuren die bij elkaar passen. Katoensatijn voor glans, percal voor koel en fris, linnen voor wie het natuurlijk wil.",
      "Hoeslakens in alle maten, ook voor toppers en voor hoge matrassen tot 40 centimeter. Moltons beschermen het matras en verlengen de levensduur.",
      "Bij levering van een nieuw bed maken we het compleet: molton, hoeslaken en overtrek passend bij uw slaapkamer.",
    ],
    brands: ["dommelin"],
    priceFrom: 100,
    priceTo: 400,
    priceNote: "per dekbedovertrek 240 x 220",
    image: "/images/ovii-vandekolk-lr-9587.480x0.jpg",
    faq: [
      { q: "Welk hoeslaken bij een topper?", a: "Een topperhoeslaken van 5 tot 10 cm hoog. Voor het matras eronder een gewoon hoeslaken tot 40 cm." },
      { q: "Katoensatijn of percal?", a: "Satijn is zachter en glanst licht, percal is koeler en knisperend. Linnen ademt het best en wordt mooier met wassen." },
    ],
    cta: "winkel",
  },
];

export type Comparison = {
  slug: string;
  title: string;
  metaTitle: string;
  intro: string;
  rows: { label: string; cells: string[] }[];
  heads: string[];
  verdict: string;
  faq: Faq[];
};

export const comparisons: Comparison[] = [
  {
    slug: "vispring-duxiana-hastens",
    title: "Vispring, Duxiana of Hästens?",
    metaTitle: "Vispring, Duxiana of Hästens: het eerlijke verschil",
    intro: "Drie merken in de top van de markt. Ze lijken op elkaar in prijs, maar niet in hoe ze slapen. Wij voeren Vispring en Duxiana; Hästens niet. Daarom kunnen we er open over zijn.",
    heads: ["", "Vispring", "Duxiana", "Hästens"],
    rows: [
      { label: "Land en sinds", cells: ["Engeland, 1901", "Zweden, 1926", "Zweden, 1852"] },
      { label: "Opbouw", cells: ["Handgeneste pocketveren, natuurlijke vulling", "Meerdere lagen verende cassettes, per zone te wisselen", "Handgemaakt, paardenhaar, wol, katoen, vlas"] },
      { label: "Liggevoel", cells: ["Veerkrachtig, ademend, per kant instelbaar", "Diep en ondersteunend, aanpasbaar na aankoop", "Zacht en omhullend, veerkrachtig"] },
      { label: "Sterk bij", cells: ["Warm slapen, partner die beweegt, lang meegaan", "Rugklachten, twee heel verschillende slapers", "Zacht willen liggen, uitstraling"] },
      { label: "Aanpasbaar na aankoop", cells: ["Topper wisselen", "Ja, cassettes per zone", "Topper wisselen"] },
      { label: "Compleet bed 180 x 200, vanaf", cells: ["Circa € 6.500", "Circa € 7.900", "Circa € 8.000 tot € 10.000 (dealerprijzen, indicatie)"] },
      { label: "Proefliggen in Oost-Nederland", cells: ["Van de Kolk, Lochem", "Van de Kolk, Lochem", "Dichtstbijzijnde Hästens-winkel: Amersfoort"] },
    ],
    verdict: "Wilt u koel en veerkrachtig liggen met een bed dat twintig jaar meegaat, kies Vispring. Heeft u rugklachten of slaapt u naast iemand met een heel ander gewicht, kies Duxiana. Hästens is een prachtig bed voor wie zacht en omhuld wil liggen; het ligt dicht bij Vispring in gevoel en prijs. Kom beide bij ons proberen, dan weet u binnen een uur welk gevoel bij u past.",
    faq: [
      { q: "Is Vispring beter dan Hästens?", a: "Niet beter, anders. Vispring ligt veerkrachtiger en koeler, Hästens zachter. Beide zijn handgemaakt van natuurlijke materialen en gaan decennia mee. De prijs ligt dicht bij elkaar." },
      { q: "Waar kan ik in Gelderland of Overijssel een Vispring of Duxiana proberen?", a: "Bij Van de Kolk Slapen aan de Markt in Lochem, op afspraak. Wij zijn de enige zaak in Oost-Nederland met beide merken naast elkaar." },
      { q: "Wat kost een Duxiana bed?", a: "Een compleet DUX-bed van 180 x 200 begint bij ons rond € 7.900, inclusief topper en hoofdbord." },
    ],
  },
  {
    slug: "jensen-auping",
    title: "Jensen of Auping?",
    metaTitle: "Jensen of Auping: welk bed past bij u",
    intro: "Auping is het bekendste Nederlandse merk, Jensen de Noorse referentie voor zacht en ondersteunend. Wij voeren Jensen, geen Auping. Dit is het verschil zoals wij het in de showroom uitleggen.",
    heads: ["", "Jensen", "Auping"],
    rows: [
      { label: "Land en sinds", cells: ["Noorwegen, 1947", "Nederland, 1888"] },
      { label: "Opbouw", cells: ["Continental boxspring: dubbele pocketvering, zoneverdeling, topper", "Spiraalbodem (mesh) of boxspring met matras naar keuze"] },
      { label: "Liggevoel", cells: ["Zacht, schouders zakken diep weg, rug blijft recht", "Steviger, veerkrachtig, luchtig door de open bodem"] },
      { label: "Sterk bij", cells: ["Schouder- en rugklachten, zijslapers, twee slapers", "Ventilatie, verstelbaarheid, Nederlands design"] },
      { label: "Garantie", cells: ["5 jaar, 25 jaar op frame en veren", "5 jaar, tot 15 jaar op bodem"] },
      { label: "Compleet bed 180 x 200, vanaf", cells: ["Circa € 4.500", "Circa € 3.500 tot € 5.000 (indicatie)"] },
      { label: "Proefliggen in de regio", cells: ["Van de Kolk, Lochem", "Diverse winkels in Deventer, Apeldoorn en Enschede"] },
    ],
    verdict: "Slaapt u op uw zij, heeft u last van schouders of onderrug, of wilt u zacht liggen met steun? Dan is Jensen de betere keuze. Wilt u een stevig, luchtig bed met Nederlands design, dan past Auping beter. Twijfelt u? Kom bij ons op een Jensen liggen; wij zeggen het eerlijk als Auping beter bij u past.",
    faq: [
      { q: "Is Jensen zachter dan Auping?", a: "Ja. Jensen laat schouders en heupen dieper wegzakken door de zoneverdeling. Auping ligt steviger en luchtiger." },
      { q: "Waar kan ik een Jensen bed proberen in Gelderland?", a: "Bij Van de Kolk Slapen in Lochem, op afspraak. Wij hebben de Prestige en Supreme in de showroom." },
    ],
  },
];

export type Region = {
  slug: string;
  name: string;
  drive: string;
  intro: string;
  body: string[];
  nearby: string[];
};

export const regions: Region[] = [
  { slug: "zutphen", name: "Zutphen", drive: "20 minuten", intro: "Vanuit Zutphen bent u in twintig minuten aan de Markt in Lochem. Dichterbij dan Deventer of Apeldoorn, en de enige plek in de regio met Vispring, Duxiana en Jensen naast elkaar.", body: ["In Zutphen zelf vindt u vooral ketens en volumewinkels. Wie een bed in het hogere segment zoekt, rijdt tot nu toe naar de Randstad. Dat hoeft niet meer.", "Via de N346 rijdt u in twintig minuten naar Lochem. Parkeren kan gratis achter de winkel aan de Noorderwal."], nearby: ["Warnsveld", "Eefde", "Brummen", "Vorden"] },
  { slug: "deventer", name: "Deventer", drive: "25 minuten", intro: "Vanuit Deventer rijdt u in 25 minuten naar Lochem. Voor Vispring, Duxiana en Jensen is dat de dichtstbijzijnde showroom.", body: ["Deventer heeft goede beddenwinkels voor het middensegment. Voor handgemaakte bedden en de Sleep Scan van Equilli komt u bij ons.", "Via de N348 en Gorssel bent u er in 25 minuten. Wij leveren in heel Salland en de IJsselstreek, Martin zelf."], nearby: ["Diepenveen", "Bathmen", "Gorssel", "Twello", "Olst"] },
  { slug: "apeldoorn", name: "Apeldoorn", drive: "35 minuten", intro: "Vanuit Apeldoorn is Lochem 35 minuten rijden. Dichterbij dan de Hästens- en Vispring-winkels in de Randstad, en met parkeren voor de deur.", body: ["Apeldoorn heeft veel keus in het middensegment. Voor Vispring, Duxiana of Jensen, in alle rust op afspraak, is Lochem de dichtstbijzijnde plek.", "Plan een avondafspraak, dan rijdt u na het werk over de A1 en de N346 en bent u om zeven uur bij ons. Wij leveren in Apeldoorn en de Veluwe."], nearby: ["Beekbergen", "Loenen", "Voorst", "Eerbeek"] },
  { slug: "twente", name: "Twente", drive: "30 tot 45 minuten", intro: "Vanuit Goor, Delden, Hengelo en Enschede bent u in een half uur tot drie kwartier in Lochem. Voor Duxiana en Vispring de dichtstbijzijnde showroom.", body: ["Twente heeft goede Jensen-dealers. Voor Vispring en Duxiana, en om de merken naast elkaar te proberen, komt u bij ons.", "Via de N346 vanuit Goor bent u in dertig minuten in Lochem. Wij leveren in heel Twente."], nearby: ["Goor", "Delden", "Markelo", "Hengelo", "Enschede", "Haaksbergen", "Neede", "Borculo"] },
  { slug: "achterhoek", name: "de Achterhoek", drive: "20 tot 40 minuten", intro: "Vanuit Ruurlo, Borculo, Doetinchem en Winterswijk bent u binnen drie kwartier in Lochem. Wij zijn de enige beddenzaak in de Achterhoek met Vispring, Duxiana en Jensen.", body: ["De Achterhoek heeft prima beddenwinkels voor het middensegment. Voor het topsegment was u tot nu toe aangewezen op Arnhem of de Randstad.", "Wij leveren in de hele Achterhoek, van Doetinchem tot Winterswijk. Martin brengt het bed zelf en stelt het in."], nearby: ["Ruurlo", "Borculo", "Vorden", "Doetinchem", "Winterswijk", "Lichtenvoorde", "Groenlo"] },
];
