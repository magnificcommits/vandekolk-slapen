import { NextRequest } from "next/server";
import { isValidSlot, notify, saveAppointment, type Appointment, type AppointmentType } from "@/lib/appointments";
import { clientIp, magDoor } from "@/lib/ratelimit";

const types: AppointmentType[] = ["showroom", "thuis", "telefonisch"];

export async function POST(req: NextRequest) {
  // Hooguit 5 aanvragen per 10 minuten per IP (limiter in het geheugen van de instantie).
  if (!magDoor(`afspraak:${clientIp(req)}`, 5, 10 * 60 * 1000)) {
    return Response.json({ error: "Te veel aanvragen. Bel ons gerust op 0573 251 761." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error();
  } catch {
    return Response.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  // Honeypot
  if (typeof body.website === "string" && body.website.length > 0) {
    return Response.json({ ok: true });
  }

  const str = (k: string) => (typeof body[k] === "string" ? (body[k] as string).trim() : "");
  const name = str("name");
  const email = str("email");
  const phone = str("phone");
  const date = str("date");
  const time = str("time");
  const type = str("type") as AppointmentType;
  const concerns = str("concerns").slice(0, 2000);
  const persons = Math.min(4, Math.max(1, Number(body.persons) || 1));
  const interests = Array.isArray(body.interests) ? (body.interests as unknown[]).filter((x): x is string => typeof x === "string").map((x) => x.slice(0, 60)).slice(0, 10) : [];
  const source = str("source").slice(0, 200);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Vul uw naam in.";
  else if (name.length > 80) errors.name = "Gebruik maximaal 80 tekens.";
  if (email.length > 254 || !/^[^\s@<>"(),;:]+@[^\s@<>"(),;:]+\.[^\s@<>"(),;:]+$/.test(email)) errors.email = "Vul een geldig e-mailadres in.";
  if (phone.length > 30 || phone.replace(/\D/g, "").length < 9) errors.phone = "Vul een telefoonnummer in.";
  if (!types.includes(type)) errors.type = "Kies een soort afspraak.";
  if (type !== "telefonisch" && !isValidSlot(date, time)) errors.time = "Kies een beschikbaar tijdstip.";
  if (type === "telefonisch" && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || (time && !/^\d{2}:\d{2}$/.test(time)))) errors.time = "Kies een dag.";
  if (Object.keys(errors).length) return Response.json({ errors }, { status: 422 });

  const a: Appointment = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    type,
    date,
    time: type === "telefonisch" ? time || "n.t.b." : time,
    persons,
    name,
    email,
    phone,
    interests,
    concerns,
    source: source || undefined,
    status: "nieuw",
  };

  try {
    await saveAppointment(a);
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Opslaan mislukt. Bel ons gerust op 0573 251 761." }, { status: 500 });
  }
  await notify(a).catch(console.error);

  return Response.json({ ok: true, id: a.id });
}
