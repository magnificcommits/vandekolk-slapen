import type { Faq } from "./assortiment";

export type BrandDeep = {
  forWho: string[];
  notFor: string;
  build: { h: string; p: string }[];
  models: { name: string; text: string }[];
  priceDrivers: string[];
  faq: Faq[];
};

export const brandDeep: Record<string, BrandDeep> = {
  vispring: {
    forWho: [
      "U slaapt warm en wilt een bed dat ademt in plaats van schuim dat warmte vasthoudt.",
      "U wilt één keer goed kopen: een Vispring gaat twintig jaar mee, niet tien.",
      "U slaapt samen en wilt per kant een eigen veerspanning, zonder naad te voelen.",
      "U hecht aan vakmanschap: elk matras wordt met de hand gevuld en aan de zijkant met de hand doorgestikt.",
    ],
    notFor: "Wie een heel zacht, omhullend gevoel zoekt zoals bij Jensen, of wie het bed maar een paar jaar gebruikt. Dan is een Avek of Jensen de eerlijker keuze.",
    build: [
      { h: "De veren", p: "Vispring maakt eigen veren van vanadiumstaal, elk in een katoenen zakje, met de hand genest in een honingraatpatroon. Meer veren per vierkante meter dan welk fabrieksmatras ook. Daarom veert het na vijftien jaar nog als nieuw." },
      { h: "De vulling", p: "Shetlandwol, katoen, paardenhaar, kasjmier, zijde. Laag voor laag met de hand gelegd. Natuurlijke vezels nemen per nacht een halve liter vocht op en geven het overdag weer af. Daarom slaapt u koeler en droger." },
      { h: "De divan", p: "Het onderstel is zelf ook geveerd, met dezelfde vanadiumveren. Zo werkt het hele bed als één verend systeem, in plaats van een matras op een harde kist. In de stof en de hoogte die u kiest." },
      { h: "Op maat", p: "Drie veerspanningen per matras, per kant te kiezen op basis van uw gewicht. Tientallen stoffen. Hoofdborden in elke breedte. Ook ronde of afgeschuinde matrassen voor bijzondere bedden." },
    ],
    models: [
      { name: "Baronet en Regal", text: "De instap in de Vispring-collectie. Al met handgeneste veren en natuurlijke vulling. Compleet bed vanaf circa € 6.500." },
      { name: "Elite en Herald Superb", text: "Meer veren, rijkere vulling met paardenhaar en kasjmier. Het model dat de meeste van onze klanten kiezen. Vanaf circa € 8.500." },
      { name: "Signatory en Magnificence", text: "De top van de collectie. Dubbele veerlagen, zijde en mohair. Voor wie het beste wil dat er te koop is. Vanaf circa € 14.000." },
    ],
    priceDrivers: ["Het model: van Baronet tot Magnificence", "Maat en lengte", "Divanhoogte en stof", "Hoofdbord, poten, topper Heaven of Opulence", "Elektrisch verstelbaar (Emerald, Topaz)"],
    faq: [
      { q: "Waarom is Vispring zo duur?", a: "Eigen veren van vanadiumstaal, honderd procent natuurlijke vulling en handwerk in Plymouth. Een Vispring gaat twintig jaar mee. Per nacht is het vaak goedkoper dan een fabrieksmatras dat u twee keer koopt." },
      { q: "Is Vispring hard of zacht?", a: "U kiest per kant uit drie veerspanningen. Een Vispring ligt veerkrachtig en ondersteunend, niet omhullend. Wilt u dieper wegzakken, dan is Jensen een betere match." },
      { q: "Hoe lang gaat een Vispring mee?", a: "Twintig jaar is normaal. Vispring geeft levenslange garantie op de vering." },
      { q: "Waar kan ik Vispring proberen in Gelderland of Overijssel?", a: "Bij ons in Lochem. Wij zijn de enige Vispring-dealer in Oost-Nederland en hebben meerdere modellen in de showroom." },
    ],
  },
  duxiana: {
    forWho: [
      "U heeft rugklachten en wilt een bed dat de onderrug draagt en de schouders laat wegzakken.",
      "U slaapt naast iemand met een heel ander gewicht of een andere voorkeur.",
      "U wilt een bed dat u na jaren nog kunt aanpassen, in plaats van vervangen.",
      "U wilt zacht liggen zonder de hangmat van een zacht matras.",
    ],
    notFor: "Wie een veerkrachtig, licht liggevoel zoekt zoals bij Vispring, of wie het bed vooral om het design kiest. Duxiana is een technisch bed.",
    build: [
      { h: "Meerdere lagen veren", p: "Een DUX bestaat uit drie lagen: een geveerde onderbouw, een middenlaag met Pascal-cassettes en een topmatras. De lagen werken samen; daardoor zakt u diep weg en wordt u toch gedragen." },
      { h: "Pascal-cassettes", p: "De middenlaag bestaat uit losse veerblokken die u per zone kunt wisselen: zachter bij de schouders, steviger bij de heupen. Verandert uw lichaam, dan wisselt u een cassette. Geen nieuw bed." },
      { h: "Per kant anders", p: "Elke kant heeft eigen cassettes. Twee heel verschillende slapers liggen ieder goed, zonder naad te voelen door het doorlopende topmatras." },
      { h: "Zweeds vakwerk", p: "DUX bouwt sinds 1926 in Zweden. Het frame is van massief hout, de veren zijn van eigen staal, de stoffen zijn te kiezen uit de hele collectie." },
    ],
    models: [
      { name: "DUX 1001", text: "De instap: twee veerlagen, al met de kenmerkende diepe ondersteuning. Compleet vanaf circa € 5.900." },
      { name: "DUX 6006", text: "Drie lagen met Pascal-cassettes per zone. Het model voor rugklachten en voor stellen die verschillen. Vanaf circa € 8.500." },
      { name: "DUX 8008", text: "De top: extra hoge cassettes, meer zones, rijkere afwerking. Vanaf circa € 11.500." },
    ],
    priceDrivers: ["Het model: 1001, 6006 of 8008", "Maat", "Topmatras Xleep in latex of natuurlijk", "Hoofdbord en poten", "Elektrisch verstelbaar"],
    faq: [
      { q: "Is Duxiana goed bij rugklachten?", a: "Ja. De Pascal-cassettes dragen de onderrug en laten de schouders wegzakken, per zone instelbaar. Het is het merk dat wij het vaakst adviseren bij rugklachten." },
      { q: "Kan ik een DUX later nog aanpassen?", a: "Ja. De cassettes zijn los te wisselen, per zone en per kant. Dat doen wij bij u thuis." },
      { q: "Wat kost een Duxiana bed?", a: "Bij ons vanaf circa € 5.900 voor een DUX 1001, tot circa € 12.000 voor een DUX 8008, compleet met topper en hoofdbord." },
    ],
  },
  jensen: {
    forWho: [
      "U slaapt op uw zij en wilt dat uw schouder wegzakt zonder dat uw rug doorhangt.",
      "U houdt van zacht en omhullend, met steun waar het nodig is.",
      "U wilt Scandinavisch design: strak, laag, in een stof die bij uw slaapkamer past.",
      "U wilt zekerheid: 25 jaar garantie op frame en vering.",
    ],
    notFor: "Wie stevig en veerkrachtig wil liggen, of wie het snel warm heeft en volledig natuurlijk wil slapen. Dan past Vispring of Greensleep beter.",
    build: [
      { h: "Original Zone System", p: "Het matras heeft een diepe schouderzone en een steviger heup- en onderrugzone. Zo ligt uw wervelkolom recht, in zij- en rugligging. Ontwikkeld met Noorse fysiotherapeuten." },
      { h: "Pocket-on-pocket", p: "Twee lagen pocketveren op elkaar: een dragende laag en een fijnere comfortlaag. Dat geeft het kenmerkende zachte, maar niet slappe Jensen-gevoel." },
      { h: "Aloy-vering", p: "In de Prestige en Supreme zit het Aloy-systeem met extra zachte schouderzone en ingebouwde onderrugsteun. Merkbaar bij zijslapers met brede schouders." },
      { h: "Continental", p: "Boxspring, matras en topper vormen visueel één geheel, met een Seamless-hoes zodat het bed er als één blok uitziet. Stoffen van Beaulieu, gerecycled en recyclebaar." },
    ],
    models: [
      { name: "Diplomat en Ambassador", text: "De instap in Continental-uitvoering. Dubbele pocketvering, topper Softline. Compleet vanaf circa € 4.500." },
      { name: "Prestige", text: "Met Aloy-vering en diepere schouderzone. Het model dat wij het meest verkopen. Vanaf circa € 6.500." },
      { name: "Supreme", text: "De top van Jensen: hoogste opbouw, rijkste vulling, topper Starrose. Vanaf circa € 9.000." },
    ],
    priceDrivers: ["Het model: Diplomat, Ambassador, Prestige of Supreme", "Maat, ook 210 en 220 lang", "Topper Softline I, II, III of Starrose", "Hoofdbord Fenix, Manor of Plus", "Vast of elektrisch verstelbaar"],
    faq: [
      { q: "Is Jensen zacht?", a: "Ja, zachter dan de meeste boxsprings. De zones zorgen dat u ondanks het zachte gevoel goed ondersteund wordt. Wij hebben medium en firm naast elkaar staan." },
      { q: "Hoeveel garantie geeft Jensen?", a: "Vijf jaar volledig, en 25 jaar tegen frame- en veerbreuk." },
      { q: "Wat kost een Jensen boxspring?", a: "Bij ons vanaf circa € 4.500 voor een Diplomat Continental 180 x 200, tot circa € 9.500 voor een Supreme." },
    ],
  },
  avek: {
    forWho: [
      "U wilt een eerlijke, degelijke boxspring van Nederlandse makelij.",
      "U wilt maatwerk in maat en stof zonder de prijs van een handgemaakt bed.",
      "U vertrouwt op de test: de Ninety werd twee keer beste boxspring bij de Consumentenbond.",
      "U zoekt een bed voor een logeerkamer of tweede woning dat toch goed ligt.",
    ],
    notFor: "Wie volledig natuurlijk wil slapen of een bed voor twintig jaar zoekt. Avek is uitstekend voor tien tot vijftien jaar.",
    build: [
      { h: "Drie lagen", p: "Box met pocketvering, matras en topper. Elke laag doet zijn werk: de box veert, het matras draagt, de topper bepaalt het gevoel." },
      { h: "Geharde veren", p: "Avek hardt zijn pocketveren elektrothermisch. Daardoor behouden ze hun lengte en veerkracht, ook na jaren." },
      { h: "Gemaakt in Surhuisterveen", p: "Sinds 1927 in Friesland. Korte levertijden, eigen stoffencollectie, en een fabriek die maatwerk gewend is: extra lang, extra breed, aangepaste hoogte." },
    ],
    models: [
      { name: "1927", text: "Het instapmodel, compleet met matras en topper. Vanaf circa € 2.995." },
      { name: "Fier en Noflik", text: "Luchtiger ontwerp (Fier) of luxer afgewerkt (Noflik). Vanaf circa € 3.800." },
      { name: "Ninety", text: "De jubileumboxspring, beste uit de test. Vanaf circa € 4.400." },
    ],
    priceDrivers: ["Het programma: 1927, Fier, Noflik of Ninety", "Maat en lengte", "Matras Ouro in pocketvering of latex", "Hoofdbord Original, Border of Block", "Vast of elektrisch"],
    faq: [
      { q: "Is Avek een goed merk?", a: "Ja. De Ninety werd in 2021 en 2022 door de Consumentenbond als beste boxspring getest, op ligeigenschappen en levensduur." },
      { q: "Wat kost een Avek boxspring?", a: "Bij ons vanaf circa € 2.995 voor een complete 1927 van 180 x 200, tot circa € 5.500 voor een Ninety in luxe uitvoering." },
    ],
  },
  pullman: {
    forWho: [
      "U wilt de klassieke boxspring, in precies de stof en kleur die bij uw slaapkamer past.",
      "U wilt snel geleverd: Pullman levert de meeste combinaties binnen enkele weken.",
      "U zoekt een bewezen Nederlands merk met een eenvoudige, goede opbouw.",
    ],
    notFor: "Wie een specifiek liggevoel zoekt (heel zacht, heel natuurlijk) of rugklachten heeft die om zonering vragen. Dan adviseren wij Jensen, Duxiana of Equilli.",
    build: [
      { h: "Original", p: "Een verende box met het Elan-matras, in standaard of firm. De combinatie die Pullman al decennia maakt en verfijnt." },
      { h: "Express", p: "Vaste combinaties (Leeds, London, Liverpool) uit voorraad. Goed slapen, zonder toeters en bellen, snel in huis." },
      { h: "Stoffen", p: "Meer dan 300 Linara-kleuren en andere stoffen. Hoofdborden Boston, Detroit en meer. Poten in eiken, zwart of chroom." },
    ],
    models: [
      { name: "Express", text: "Vaste combinaties uit voorraad. Compleet vanaf circa € 3.200." },
      { name: "Original", text: "Zelf samengesteld: box, matras Elan, topper, hoofdbord en stof naar keuze. Vanaf circa € 4.000." },
    ],
    priceDrivers: ["Express of Original", "Maat", "Matras Elan standaard of firm", "Hoofdbord en poten", "Topper"],
    faq: [
      { q: "Wat is het verschil tussen Pullman Express en Original?", a: "Express zijn vaste combinaties uit voorraad. Original stelt u zelf samen in stof, hoofdbord en matras." },
      { q: "Hoe snel kan Pullman leveren?", a: "Express vaak binnen twee weken, Original binnen vier tot zes weken. Martin brengt het zelf." },
    ],
  },
  equilli: {
    forWho: [
      "U wilt niet gokken maar meten: de Sleep Scan laat zien waar uw lichaam steun nodig heeft.",
      "U heeft rug- of nekklachten en een matras van de plank helpt niet.",
      "U wilt uw bestaande boxspring of lattenbodem houden en alleen het matras vervangen.",
      "U en uw partner verschillen sterk in gewicht of bouw.",
    ],
    notFor: "Wie een compleet bed inclusief onderstel in één merk wil, of een elektrisch verstelbaar systeem. Equilli is in de eerste plaats een matrasmerk.",
    build: [
      { h: "De Sleep Scan", p: "U ligt tien minuten op een meetmat met honderden sensoren. Die meet in zij- en rugligging waar uw lichaam drukt. Het resultaat ziet u direct op het scherm." },
      { h: "Zones op maat", p: "Op basis van de meting bouwt Equilli een matras met zones die precies bij u passen: zachter waar u drukt, steviger waar u steun mist. Per kant, ook bij een tweepersoonsmatras." },
      { h: "Belgisch, wetenschappelijk", p: "Equilli werkt samen met universiteiten en fysiotherapeuten. Het matras wordt in België gemaakt en binnen enkele weken geleverd." },
      { h: "Kussen op maat", p: "Uit dezelfde meting volgt de juiste kussenhoogte. Vaak lost dat de nekklacht op die u aan het matras toeschreef." },
    ],
    models: [
      { name: "Matras op maat", text: "Één model, oneindig veel uitvoeringen: het matras wordt op uw meting gebouwd. Vanaf circa € 1.800 per matras." },
      { name: "Hoofdkussen op maat", text: "Hoogte en stevigheid uit de meting. Vanaf circa € 150." },
    ],
    priceDrivers: ["Maat en dikte", "Eén- of tweepersoons met aparte zones", "Afdeklaag", "Combinatie met bestaande of nieuwe boxspring"],
    faq: [
      { q: "Wat is de Equilli Sleep Scan?", a: "Een meting van tien minuten op een sensormat. Die laat zien waar uw lichaam druk geeft en waar het steun nodig heeft. Bij ons inbegrepen bij elke afspraak." },
      { q: "Past een Equilli-matras op mijn huidige bed?", a: "Meestal wel, op een boxspring of lattenbodem in goede staat. Neem een foto van het onderstel mee." },
      { q: "Waar kan ik een Equilli Sleep Scan doen?", a: "Bij Van de Kolk Slapen in Lochem. Wij zijn de exclusieve Equilli-partner voor Lochem en omstreken." },
    ],
  },
  greensleep: {
    forWho: [
      "U wilt slapen zonder synthetisch schuim, lijm of brandvertragers.",
      "U heeft het snel warm: natuurlatex en wol ademen en voeren vocht af.",
      "U bent gevoelig voor huisstofmijt of allergieën.",
      "U wilt een bed dat aan het einde van zijn leven niet op de afvalberg hoeft.",
    ],
    notFor: "Wie het klassieke veergevoel van een boxspring zoekt. Latex ligt anders: veerkrachtig en omsluitend, zonder verend onderstel.",
    build: [
      { h: "Natuurlatex", p: "Getapt uit de rubberboom, zonder synthetische bijmenging. Veerkrachtig, drukverdelend en van nature onaantrekkelijk voor huisstofmijt." },
      { h: "Biologisch katoen en wol", p: "De hoezen en comfortlagen zijn van gecertificeerd biologisch katoen en wol. Wol regelt temperatuur en vocht, katoen voelt fris." },
      { h: "Aanpasbare kern", p: "De latexkern bestaat uit lagen die u per persoon kunt wisselen of omdraaien. Zo stelt u de stevigheid zelf bij, ook na jaren." },
      { h: "Geen lijm, geen schuim", p: "De lagen liggen los in de hoes. Geen lijm, geen chemische geur, en elk onderdeel is los te vervangen of te recyclen." },
    ],
    models: [
      { name: "Ergo", text: "Het latex slaapsysteem met aanpasbare kern, op een houten lattenbodem. Compleet vanaf circa € 3.900." },
      { name: "Vimala", text: "De luxere uitvoering met dikkere kern en wollen topper. Vanaf circa € 5.500." },
    ],
    priceDrivers: ["Ergo of Vimala", "Maat", "Dikte van de latexkern", "Lattenbodem of boxspring", "Wollen of katoenen topper"],
    faq: [
      { q: "Is een latex matras goed bij warm slapen?", a: "Ja. Natuurlatex heeft een open celstructuur en wol voert vocht af. Dit is ons eerste advies voor wie het warm heeft." },
      { q: "Hoe lang gaat een Greensleep mee?", a: "Vijftien tot twintig jaar. De losse lagen kunt u tussentijds omdraaien of vervangen." },
    ],
  },
  "tecfor-care": {
    forWho: [
      "U of uw partner heeft moeite met in- en uitstappen en wilt een bed dat in hoogte verstelt.",
      "De thuiszorg komt over de vloer en het bed moet op werkhoogte kunnen.",
      "U wilt langer thuis blijven wonen, in een slaapkamer die er niet als een ziekenhuis uitziet.",
      "U wilt naast uw partner blijven slapen: het bed is er ook als tweepersoons.",
    ],
    notFor: "Wie alleen een elektrisch verstelbaar hoofd- en voeteneind zoekt zonder hoogteverstelling. Dat kan bij alle andere merken ook.",
    build: [
      { h: "Hoog-laag", p: "Het onderstel gaat elektrisch van circa 40 tot 80 centimeter. Laag om veilig in te stappen, hoog voor de verzorging." },
      { h: "Uitstraling van een gewoon bed", p: "Bekleed als een boxspring of ledikant, in stof of hout. Het mechaniek is weggewerkt. Bezoek ziet een mooi bed, geen zorgbed." },
      { h: "Tweepersoons", p: "Als twee losse helften of als één bed met één verstelbare kant. Zo blijft u samen slapen." },
      { h: "Matras naar keuze", p: "Het onderstel combineert met de matrassen van Avek, Jensen of Equilli. Comfort en zorg sluiten elkaar niet uit." },
    ],
    models: [
      { name: "Elba en Elba Royal", text: "Hoog-laag onderstel met stoffen bekleding, in alle maten. Compleet vanaf circa € 3.500." },
      { name: "Tweepersoons combinatie", text: "Eén verstelbare helft naast een vaste helft, of twee verstelbare. Vanaf circa € 6.000." },
    ],
    priceDrivers: ["Eén- of tweepersoons", "Matraskeuze", "Bekleding en hoofdbord", "Extra functies: zijhekken, verlichting, afstandsbediening"],
    faq: [
      { q: "Wordt een hoog-laag bed vergoed?", a: "Soms, via de Wmo van uw gemeente of de zorgverzekeraar, afhankelijk van de indicatie. Wij helpen u met de aanvraag en werken samen met ergotherapeuten in de regio." },
      { q: "Ziet een Tecfor Care eruit als een ziekenhuisbed?", a: "Nee. Het is bekleed als een gewone boxspring of ledikant. Het mechaniek zit onder het bed." },
      { q: "Komen jullie thuis kijken?", a: "Ja, bij zorgbedden is advies aan huis de regel. Wij kijken naar de ruimte, de trap en het huidige bed." },
    ],
  },
};

export const promises = [
  { t: "Eerst meten, dan adviseren", s: "Elke afspraak begint met de Sleep Scan. Wij adviseren op basis van uw meting, niet op basis van wat er in de aanbieding is." },
  { t: "Martin brengt het zelf", s: "Levering, montage en instellen in uw slaapkamer door de eigenaar. Uw oude bed nemen we mee." },
  { t: "Ligt het niet goed? Dan komen we terug", s: "Binnen drie maanden na levering stellen we het bed gratis bij: stevigheid, topper of kussen." },
  { t: "Eerlijk over merken", s: "Wij voeren acht merken en zeggen het als een ander merk beter bij u past. Ook als wij dat niet verkopen." },
  { t: "Nazorg", s: "Na een jaar bellen we om te vragen hoe u slaapt. Toppers en kussens vervangen we op tijd; we houden de aankoopdatum bij." },
];

export const deliveredIn = ["Lochem", "Zutphen", "Deventer", "Apeldoorn", "Enschede", "Doetinchem", "Arnhem", "Amsterdam", "Zwitserland", "Corsica", "Spanje"];
