/** Configurator: vragen, scoring en uitkomsten. Client-safe (geen node-imports). */

export type Who = "alleen" | "samen" | "zorg";
export type Issue = "rug" | "schouders" | "warm" | "partner" | "geen";
export type Feel = "natuurlijk" | "zacht" | "degelijk" | "opmaat";
export type Size = "140x200" | "160x200" | "180x200" | "180x210" | "200x200" | "200x210";
export type Base = "vast" | "elektrisch";

export type Config = {
  who: Who | null;
  issues: Issue[];
  feel: Feel | null;
  size: Size | null;
  base: Base | null;
  headboard: boolean;
  budget: "tot5" | "5tot8" | "8plus" | "open" | null;
};

export const sizes: Size[] = ["140x200", "160x200", "180x200", "180x210", "200x200", "200x210"];

type Proposal = {
  slug: string;
  brand: string;
  title: string;
  why: string;
  includes: string[];
  from: number; // 180x200 basisprijs compleet
  to: number;
};

const catalog: Proposal[] = [
  { slug: "vispring", brand: "Vispring", title: "Vispring Regal of Elite", why: "Handgemaakt, natuurlijke vulling, twintig jaar meegaan. Twee losse matrassen met eigen stevigheid per kant.", includes: ["2 matrassen op maat van uw gewicht", "Divan in stof naar keuze", "Topper Heaven", "2 kussens"], from: 6500, to: 16000 },
  { slug: "duxiana", brand: "Duxiana", title: "DUX 6006 of 8008", why: "Meerlaags veersysteem. Per zone aan te passen, ook na jaren. De beste keuze bij rugklachten en bij twee heel verschillende slapers.", includes: ["Pascal-cassettes per zone", "Topper Xleep", "Hoofdbord", "2 kussens"], from: 5900, to: 12500 },
  { slug: "jensen", brand: "Jensen", title: "Jensen Prestige of Supreme Continental", why: "Zacht liggen zonder steun te verliezen. Diepe schouderzone. Strak Scandinavisch design, 25 jaar garantie.", includes: ["Continental met dubbele pocketvering", "Topper Softline", "Hoofdbord Fenix", "2 kussens"], from: 4500, to: 9500 },
  { slug: "avek", brand: "Avek", title: "Avek Ninety of Noflik", why: "Nederlands, beste uit de test, eerlijk geprijsd. Drie lagen comfort in bijna elke maat en stof.", includes: ["Boxspring met pocketvering", "Matras Ouro", "Topper", "2 kussens"], from: 2995, to: 5500 },
  { slug: "pullman", brand: "Pullman", title: "Pullman Original", why: "De klassieke Nederlandse boxspring. Meer dan 300 stoffen, snelle levering.", includes: ["Original boxen", "Matras Elan", "Topper", "2 kussens"], from: 3200, to: 6000 },
  { slug: "greensleep", brand: "Greensleep", title: "Greensleep Ergo of Vimala", why: "Natuurlatex, biologisch katoen en wol. Koel en zuiver slapen, kern per persoon aan te passen.", includes: ["Latex slaapsysteem", "Aanpasbare kern per slaper", "Wollen topper", "2 kussens"], from: 3900, to: 7500 },
  { slug: "equilli", brand: "Equilli", title: "Equilli matras op maat na Sleep Scan", why: "Gemeten, niet geschat. Zones precies op uw lichaam. Te combineren met bijna iedere boxspring of lattenbodem.", includes: ["Personal Sleep Scan", "Matras met zones op maat", "Hoofdkussen op maat"], from: 1800, to: 3600 },
  { slug: "tecfor-care", brand: "Tecfor Care", title: "Tecfor Care hoog-laag bed", why: "Elektrisch in hoogte verstelbaar, ziet eruit als een gewoon bed. Ook als tweepersoons naast een gewoon bed.", includes: ["Hoog-laag onderstel", "Verstelbaar hoofd- en voeteneind", "Matras naar keuze", "Advies aan huis"], from: 3500, to: 7000 },
];

const sizeFactor: Record<Size, number> = { "140x200": 0.85, "160x200": 0.92, "180x200": 1, "180x210": 1.06, "200x200": 1.08, "200x210": 1.14 };

export function score(c: Config) {
  const s: Record<string, number> = Object.fromEntries(catalog.map((p) => [p.slug, 0]));
  if (c.who === "zorg") {
    s["tecfor-care"] += 10;
    s.avek += 2;
    s.jensen += 1;
  }
  if (c.who === "samen") { s.vispring += 2; s.jensen += 2; s.duxiana += 2; s.avek += 1; }
  for (const i of c.issues) {
    if (i === "rug") { s.duxiana += 3; s.equilli += 3; s.jensen += 2; s.vispring += 1; }
    if (i === "schouders") { s.jensen += 3; s.vispring += 2; s.equilli += 2; s.duxiana += 1; }
    if (i === "warm") { s.vispring += 3; s.greensleep += 3; s.avek += 1; s.jensen += 1; }
    if (i === "partner") { s.vispring += 2; s.jensen += 2; s.avek += 2; s.duxiana += 1; }
  }
  if (c.feel === "natuurlijk") { s.vispring += 4; s.greensleep += 4; }
  if (c.feel === "zacht") { s.jensen += 4; s.duxiana += 2; }
  if (c.feel === "degelijk") { s.avek += 4; s.pullman += 4; }
  if (c.feel === "opmaat") { s.equilli += 5; s.duxiana += 2; }
  if (c.budget === "tot5") { s.avek += 3; s.pullman += 3; s.equilli += 2; s.greensleep += 1; s.vispring -= 4; s.duxiana -= 5; }
  if (c.budget === "5tot8") { s.jensen += 2; s.greensleep += 2; s.vispring += 1; s.duxiana -= 1; }
  if (c.budget === "8plus") { s.vispring += 3; s.duxiana += 3; s.jensen += 1; }
  if (c.base === "elektrisch") { s.jensen += 1; s.avek += 1; s.vispring += 1; s.pullman += 1; s.equilli -= 3; }
  if (c.who !== "zorg") s["tecfor-care"] -= 20;
  return s;
}

export function proposals(c: Config) {
  const s = score(c);
  const f = c.size ? sizeFactor[c.size] : 1;
  const extra = (c.base === "elektrisch" ? 1200 : 0) + (c.headboard ? 0 : -400);
  return [...catalog]
    .sort((a, b) => s[b.slug] - s[a.slug])
    .slice(0, 3)
    .map((p) => ({
      ...p,
      from: Math.round((p.from * f + extra) / 50) * 50,
      to: Math.round((p.to * f + extra) / 50) * 50,
    }));
}

export const issueLabels: Record<Issue, string> = {
  rug: "Rug of onderrug",
  schouders: "Schouders of nek",
  warm: "Te warm",
  partner: "Partner beweegt",
  geen: "Niets bijzonders",
};

export const feelLabels: Record<Feel, { t: string; s: string }> = {
  natuurlijk: { t: "Natuurlijk", s: "Wol, katoen, latex. Ademend, gaat lang mee." },
  zacht: { t: "Zacht en omhullend", s: "Scandinavisch: u zakt weg, uw rug blijft recht." },
  degelijk: { t: "Nederlands degelijk", s: "Stevige boxspring, bewezen kwaliteit, eerlijke prijs." },
  opmaat: { t: "Gemeten op maat", s: "Eerst de Sleep Scan, dan een matras met zones op uw lichaam." },
};
