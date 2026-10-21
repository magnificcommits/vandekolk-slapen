// Eenvoudige limiter in het geheugen van de serverless-instantie. Let op: elke
// Vercel-instantie heeft zijn eigen geheugen en een koude start begint leeg.
// Dit remt een script af, maar is geen harde garantie. Een gedeelde limiter
// (Upstash of Supabase) of Cloudflare Turnstile is de echte oplossing.

type Emmer = { aantal: number; reset: number };
const emmers = new Map<string, Emmer>();

function opruimen(nu: number) {
  if (emmers.size < 5000) return;
  for (const [k, v] of emmers) if (v.reset <= nu) emmers.delete(k);
}

/** true als de actie mag, false als de limiet voor deze sleutel bereikt is. */
export function magDoor(sleutel: string, max: number, vensterMs: number): boolean {
  const nu = Date.now();
  opruimen(nu);
  const e = emmers.get(sleutel);
  if (!e || e.reset <= nu) {
    emmers.set(sleutel, { aantal: 1, reset: nu + vensterMs });
    return true;
  }
  if (e.aantal >= max) return false;
  e.aantal += 1;
  return true;
}

/** IP van de bezoeker zoals Vercel het doorgeeft. */
export function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "onbekend";
}
