import type { NextConfig } from "next";

// CSP staat bewust in Report-Only: de browser meldt overtredingen in de
// console maar blokkeert niets. Pas na controle omzetten naar een echte CSP.
const cspReportOnly = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://vercel.live",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://vercel.live https://vercel.com",
  "font-src 'self' data: https://vercel.live",
  "connect-src 'self' https://vercel.live wss://ws-us3.pusher.com",
  "frame-src 'self' https://vercel.live https://www.google.com https://maps.google.com https://www.openstreetmap.org",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy-Report-Only", value: cspReportOnly },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  images: { formats: ["image/avif", "image/webp"] },
  typedRoutes: true,
  async redirects() {
    // Oude URL's van vandekolkslapen.nl
    const brand = (o: string, n: string) => ({ source: `/merken/${o}`, destination: `/collectie/${n}`, permanent: true });
    return [
      { source: "/onze-merken", destination: "/collectie", permanent: true },
      brand("avek", "avek"), brand("duxiana", "duxiana"), brand("equilli", "equilli"), brand("greensleep", "greensleep"),
      brand("jensen", "jensen"), brand("pullman", "pullman"), brand("tecfor-care", "tecfor-care"), brand("vispring", "vispring"),
      { source: "/merken/dommelin", destination: "/assortiment/beddengoed", permanent: true },
      { source: "/merken/brinkhaus", destination: "/assortiment/dekbedden", permanent: true },
      { source: "/beddengoed", destination: "/assortiment/beddengoed", permanent: true },
      { source: "/verbouwing", destination: "/over-ons", permanent: true },
      { source: "/showroom-modellen", destination: "/showroomcollectie", permanent: true },
      { source: "/over-ons/beddenspeciaalzaak", destination: "/over-ons", permanent: true },
      { source: "/over-ons/slaapadvies", destination: "/slaapadvies", permanent: true },
      { source: "/beddenspecialist", destination: "/slaapadvies", permanent: true },
      { source: "/beddenwinkel", destination: "/contact", permanent: true },
      { source: "/slaapcomfort", destination: "/waar-zoekt-u-naar", permanent: true },
    ];
  },
};

export default nextConfig;
