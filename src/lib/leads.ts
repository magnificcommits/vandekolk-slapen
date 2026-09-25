import { promises as fs } from "fs";
import path from "path";
import { brands, euro } from "./site";

export type Lead = {
  id: string;
  createdAt: string;
  kind: "configurator";
  name: string;
  email: string;
  phone: string;
  config: Record<string, unknown>;
  proposals: unknown[];
};

export async function saveLead(l: Lead) {
  const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    const res = await fetch(`${url}/rest/v1/leads`, {
      method: "POST",
      headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({ id: l.id, created_at: l.createdAt, kind: l.kind, name: l.name, email: l.email, phone: l.phone, config: l.config, proposals: l.proposals }),
    });
    if (!res.ok) throw new Error(`Supabase ${res.status}`);
    return;
  }
  try {
    const dir = path.join(process.cwd(), ".data");
    await fs.mkdir(dir, { recursive: true });
    const file = path.join(dir, "leads.json");
    let list: Lead[] = [];
    try { list = JSON.parse(await fs.readFile(file, "utf8")); } catch {}
    list.push(l);
    await fs.writeFile(file, JSON.stringify(list, null, 2));
  } catch {
    console.log("[lead]", JSON.stringify(l));
  }
}

export async function notifyLead(l: Lead) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;
  const to = process.env.NOTIFY_TO ?? "info@vandekolkslapen.nl";
  const from = process.env.NOTIFY_FROM ?? "Van de Kolk Slapen <afspraak@vandekolkslapen.nl>";
  const lines = (l.proposals as { slug: string; from: number; to: number }[]).map((p) => {
    const b = brands.find((x) => x.slug === p.slug);
    return `${b?.name ?? p.slug}: ${euro(p.from)} tot ${euro(p.to)}`;
  });
  const send = (payload: object) => fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  await Promise.allSettled([
    send({ from, to: [to], reply_to: l.email, subject: `Nieuwe configuratie: ${l.name}`, text: `Naam: ${l.name}\nTelefoon: ${l.phone}\nE-mail: ${l.email}\n\nKeuzes: ${JSON.stringify(l.config)}\n\nVoorstel:\n${lines.join("\n")}\n\nBel binnen één werkdag.` }),
    send({ from, to: [l.email], subject: "Uw voorstel van Van de Kolk Slapen", text: `Beste ${l.name},\n\nDank voor het samenstellen van uw bed. Dit zijn de drie bedden die bij uw antwoorden passen:\n\n${lines.join("\n")}\n\nDe prijzen zijn een indicatie voor een compleet bed. Martin of Robert belt u binnen één werkdag om het door te nemen. Wilt u sneller? Plan een afspraak op vandekolkslapen.nl/afspraak of bel 0573 251 761.\n\nMet vriendelijke groet,\nVan de Kolk Slapen\nMarkt 20, Lochem` }),
  ]);
}
