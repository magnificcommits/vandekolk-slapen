import { promises as fs } from "fs";
import path from "path";
export { isValidSlot } from "./slots";

export type AppointmentType = "showroom" | "thuis" | "telefonisch";

export type Appointment = {
  id: string;
  createdAt: string;
  type: AppointmentType;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  persons: number;
  name: string;
  email: string;
  phone: string;
  interests: string[];
  concerns: string;
  source?: string;
  status: "nieuw" | "bevestigd" | "afgerond" | "geannuleerd";
};

/**
 * Opslag. Zonder SUPABASE_URL wordt lokaal naar een JSON-bestand geschreven (preview).
 * Met SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY gaat het naar de tabel `appointments`.
 */
export async function saveAppointment(a: Appointment) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    const res = await fetch(`${url}/rest/v1/appointments`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        id: a.id,
        created_at: a.createdAt,
        type: a.type,
        date: a.date,
        time: a.time,
        persons: a.persons,
        name: a.name,
        email: a.email,
        phone: a.phone,
        interests: a.interests,
        concerns: a.concerns,
        source: a.source ?? null,
        status: a.status,
      }),
    });
    if (!res.ok) throw new Error(`Supabase ${res.status}: ${await res.text()}`);
    return;
  }
  const dir = path.join(process.cwd(), ".data");
  const file = path.join(dir, "appointments.json");
  try {
    await fs.mkdir(dir, { recursive: true });
    let list: Appointment[] = [];
    try {
      list = JSON.parse(await fs.readFile(file, "utf8"));
    } catch {}
    list.push(a);
    await fs.writeFile(file, JSON.stringify(list, null, 2));
  } catch {
    // Read-only filesystem (serverless preview): loggen is voldoende voor de preview.
    console.log("[afspraak]", JSON.stringify(a));
  }
}

/** Notificatie naar de winkel en bevestiging naar de klant via Resend (optioneel). */
export async function notify(a: Appointment) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_TO ?? "info@vandekolkslapen.nl";
  const from = process.env.NOTIFY_FROM ?? "Van de Kolk Slapen <afspraak@vandekolkslapen.nl>";
  if (!key) return;

  const typeLabel = { showroom: "Showroom, Markt 20 Lochem", thuis: "Advies aan huis", telefonisch: "Telefonisch gesprek" }[a.type];
  const when = new Date(a.date + "T" + a.time + ":00").toLocaleString("nl-NL", { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" });

  const send = (payload: object) =>
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

  await Promise.allSettled([
    send({
      from,
      to: [to],
      reply_to: a.email,
      subject: `Nieuwe afspraak: ${a.name}, ${when}`,
      text: `Nieuwe afspraak via de website.\n\nNaam: ${a.name}\nTelefoon: ${a.phone}\nE-mail: ${a.email}\n\nWanneer: ${when}\nWaar: ${typeLabel}\nPersonen: ${a.persons}\nInteresse: ${a.interests.join(", ") || "-"}\n\nSituatie:\n${a.concerns || "-"}\n\nID: ${a.id}`,
    }),
    send({
      from,
      to: [a.email],
      subject: `Uw afspraak bij Van de Kolk Slapen, ${when}`,
      text: `Beste ${a.name},\n\nDank voor uw aanvraag. Wij hebben de volgende afspraak voor u genoteerd:\n\n${when}\n${typeLabel}\n\nU krijgt binnen één werkdag een persoonlijke bevestiging van Martin of Robert. Neem gerust uw partner mee; een bed kies je samen.\n\nParkeren kan direct achter de winkel: stel uw navigatie in op Noorderwal 30, Lochem.\n\nTot dan,\nVan de Kolk Slapen\nMarkt 20, 7241 AA Lochem\n0573 251 761`,
      attachments: [{ filename: "afspraak.ics", content: Buffer.from(ics(a)).toString("base64") }],
    }),
  ]);
}

export function ics(a: Appointment) {
  const start = a.date.replace(/-/g, "") + "T" + a.time.replace(":", "") + "00";
  const endH = String(Number(a.time.slice(0, 2)) + 1).padStart(2, "0");
  const end = a.date.replace(/-/g, "") + "T" + endH + a.time.slice(3) + "00";
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Van de Kolk Slapen//Afspraak//NL",
    "BEGIN:VEVENT",
    `UID:${a.id}@vandekolkslapen.nl`,
    `DTSTART;TZID=Europe/Amsterdam:${start}`,
    `DTEND;TZID=Europe/Amsterdam:${end}`,
    "SUMMARY:Slaapadvies bij Van de Kolk Slapen",
    "LOCATION:Markt 20\\, 7241 AA Lochem",
    "DESCRIPTION:Parkeren achter de winkel\\, navigatie: Noorderwal 30 Lochem. Tel 0573 251 761",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
