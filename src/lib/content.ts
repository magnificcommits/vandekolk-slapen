export type Concern = {
  slug: string;
  title: string;
  intro: string;
  body: string[];
  brands: string[];
  image: string;
};

export const concernPages: Concern[] = [
  {
    slug: "rug-en-nek",
    title: "Wakker worden met rug- of nekpijn",
    intro: "Negen van de tien keer ligt het niet aan uw rug, maar aan de zonering van uw matras.",
    body: [
      "Een matras moet op twee plaatsen anders reageren: bij de schouders moet het wegzakken, bij de heupen en de onderrug moet het dragen. Doet het dat niet, dan ligt uw wervelkolom de hele nacht gebogen. Dat voelt u om zeven uur 's ochtends.",
      "Daarom meten wij eerst. De Sleep Scan laat zien waar uw lichaam drukt. Pas daarna kiezen we een systeem: een gezoneerd pocketveermatras (Jensen, Pullman), een op maat gebouwde Equilli, of een Duxiana waarvan de cassettes per zone gewisseld kunnen worden.",
      "Wat u niet nodig heeft: een 'orthopedisch' hard matras. Hard is niet hetzelfde als ondersteunend. Meestal is het het tegenovergestelde.",
    ],
    brands: ["jensen", "equilli", "duxiana"],
    image: "/images/jensen-bed.1920x0.jpg",
  },
  {
    slug: "warm-slapen",
    title: "Te warm slapen",
    intro: "Warmte is meestal een vochtprobleem. Synthetisch schuim houdt vocht vast; natuurlijke vezels voeren het af.",
    body: [
      "Een mens verliest per nacht een halve liter vocht. Een traagschuimmatras houdt dat vast en warmt op. Wol, katoen, paardenhaar en natuurlatex ademen: ze nemen vocht op en geven het overdag weer af.",
      "Vispring en Greensleep bouwen volledig met natuurlijke materialen. Jensen en Avek werken met open pocketveren waar lucht doorheen stroomt. In combinatie met een wollen of zijden dekbed van Brinkhaus slaapt u merkbaar koeler.",
      "Bij de afspraak kijken we ook naar wat er nu op uw bed ligt. Vaak is het topmatras de boosdoener, niet het bed.",
    ],
    brands: ["vispring", "greensleep", "avek"],
    image: "/images/greensleep.1920x0.jpg",
  },
  {
    slug: "partner-beweegt",
    title: "Uw partner draait, u wordt wakker",
    intro: "Twee mensen, twee lichamen, één bed. Dat vraagt om twee losse systemen die eruitzien als één.",
    body: [
      "Bij een goed tweepersoonsbed beweegt de ene helft niet mee met de andere. Dat lukt met losse pocketveren (iedere veer in een eigen zakje) en met twee aparte matrassen, eventueel onder één doorlopend topmatras zodat u geen naad voelt.",
      "Ook de stevigheid kan per kant verschillen. Weegt u 20 kilo meer dan uw partner, dan hoort uw kant anders te reageren. Bij Jensen, Vispring en Avek is dat standaard mogelijk.",
      "Neem uw partner mee naar de afspraak. Wij meten u allebei en laten u samen liggen. Alleen zo weet u of het klopt.",
    ],
    brands: ["vispring", "jensen", "avek"],
    image: "/images/duxiana.1920x0.jpg",
  },
  {
    slug: "natuurlijk-slapen",
    title: "Natuurlijk slapen, zonder schuim en lijm",
    intro: "Wol, katoen, latex, paardenhaar, zijde. Materialen die ademen, die decennia meegaan en die u aan het einde niet hoeft weg te gooien.",
    body: [
      "Een Vispring-matras bestaat uit vanadiumstalen veren, met de hand gevuld met Shetlandwol, katoen, kasjmier of zijde. Geen schuim, geen lijm. Greensleep werkt met natuurlatex uit de rubberboom en biologisch katoen.",
      "Het verschil merkt u in de ventilatie, in de veerkracht na tien jaar, en in de geur: er is geen geur.",
      "Natuurlijk is niet automatisch zacht of hard. Ook hier geldt: eerst meten, dan de juiste veerspanning en vulling kiezen.",
    ],
    brands: ["vispring", "greensleep"],
    image: "/images/vispring.1920x0.jpg",
  },
  {
    slug: "zorg-en-comfort",
    title: "Langer thuis, met een bed dat meewerkt",
    intro: "Een hoog-laag bed hoeft er niet uit te zien als een ziekenhuisbed. Tecfor Care bouwt ze als een gewoon ledikant of boxspring.",
    body: [
      "Elektrisch in hoogte verstelbaar voor wie moeilijk in of uit bed komt, of voor de thuiszorg. Verstelbaar hoofd- en voeteneind. En toch een bed dat past in een mooie slaapkamer, ook als tweepersoons naast een gewoon bed.",
      "Wij adviseren regelmatig samen met de fysiotherapeut of ergotherapeut, en weten wat via de Wmo of zorgverzekeraar vergoed kan worden.",
      "Advies aan huis is hier de regel: wij komen kijken naar de ruimte, de trap en het huidige bed.",
    ],
    brands: ["tecfor-care", "avek"],
    image: "/images/tecfor-care-elba-royal.1920x0.jpg",
  },
];

export type ShowroomItem = {
  slug: string;
  title: string;
  brand: string;
  specs: string[];
  listPrice: number;
  price: number;
  image: string;
  status: "beschikbaar" | "gereserveerd" | "verkocht";
};

export const showroomItems: ShowroomItem[] = [
  {
    slug: "jensen-supreme-continental",
    title: "Jensen Supreme Continental",
    brand: "Jensen",
    specs: ["180 x 210 cm", "Topmatras Starrose", "Matrassen medium + firm", "Hoofdbord Fenix Manor", "Poten Triangel"],
    listPrice: 12285,
    price: 9795,
    image: "/images/supreme1.480x0.jpg",
    status: "beschikbaar",
  },
  {
    slug: "jensen-prestige-continental",
    title: "Jensen Prestige Continental",
    brand: "Jensen",
    specs: ["180 x 210 cm", "Topmatras Softline III", "Matrassen medium + firm", "Hoofdbord Fenix Plus", "Poten Eicon zwart"],
    listPrice: 9705,
    price: 7295,
    image: "/images/jensen1.480x0.jpg",
    status: "beschikbaar",
  },
];
