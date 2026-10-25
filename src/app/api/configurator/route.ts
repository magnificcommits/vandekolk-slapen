import { NextRequest } from "next/server";
import { saveLead, notifyLead } from "@/lib/leads";
import { clientIp, magDoor } from "@/lib/ratelimit";

export async function POST(req: NextRequest) {
  if (!magDoor(`configurator:${clientIp(req)}`, 5, 10 * 60 * 1000)) return Response.json({ error: "Te veel aanvragen" }, { status: 429 });
  let b: Record<string, unknown>;
  try { b = await req.json(); if (!b || typeof b !== "object" || Array.isArray(b)) throw new Error(); } catch { return Response.json({ error: "Ongeldig" }, { status: 400 }); }
  const str = (k: string) => (typeof b[k] === "string" ? (b[k] as string).trim() : "");
  const name = str("name"), email = str("email"), phone = str("phone");
  if (typeof b.website === "string" && b.website.length > 0) return Response.json({ ok: true });
  if (JSON.stringify(b.config ?? {}).length > 4000) return Response.json({ error: "Ongeldig" }, { status: 400 });
  if (name.length < 2 || name.length > 80 || email.length > 254 || phone.length > 30 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.replace(/\D/g, "").length < 9) {
    return Response.json({ error: "Vul naam, e-mail en telefoon in." }, { status: 422 });
  }
  const lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    kind: "configurator" as const,
    name, email, phone,
    config: (b.config ?? {}) as Record<string, unknown>,
    proposals: Array.isArray(b.proposals) ? (b.proposals as unknown[]).slice(0, 3) : [],
  };
  try { await saveLead(lead); } catch (e) { console.error(e); return Response.json({ error: "Opslaan mislukt" }, { status: 500 }); }
  await notifyLead(lead).catch(console.error);
  return Response.json({ ok: true, id: lead.id });
}
