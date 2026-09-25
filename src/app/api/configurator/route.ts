import { NextRequest } from "next/server";
import { saveLead, notifyLead } from "@/lib/leads";

export async function POST(req: NextRequest) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return Response.json({ error: "Ongeldig" }, { status: 400 }); }
  const str = (k: string) => (typeof b[k] === "string" ? (b[k] as string).trim() : "");
  const name = str("name"), email = str("email"), phone = str("phone");
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.replace(/\D/g, "").length < 9) {
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
