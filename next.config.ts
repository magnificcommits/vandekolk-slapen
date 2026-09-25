import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
