"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/lib/site";
import { type Config, type Issue, feelLabels, issueLabels, proposals, sizes } from "@/lib/configurator";

const empty: Config = { who: null, issues: [], feel: null, size: null, base: null, headboard: true, budget: null };
const KEY = "vdk-configurator";

function Choice({ on, onClick, title, text, small = false }: { on: boolean; onClick: () => void; title: string; text?: string; small?: boolean }) {
  return (
    <button type="button" onClick={onClick} className={`text-left border transition ${small ? "px-4 py-3" : "p-5"} ${on ? "border-ink bg-linen" : "border-line hover:border-ink/40"}`}>
      <p className={small ? "text-sm" : "font-serif text-lg"}>{title}</p>
      {text && <p className="mt-1 text-sm text-stone">{text}</p>}
    </button>
  );
}

const sideNotes = [
  { t: "Waarom deze vraag", s: "Twee slapers vragen om twee stevigheden onder één topper. Bij een zorgsituatie kijken we naar hoog-laag en in- en uitstappen." },
  { t: "Waarom deze vraag", s: "Rug, schouders, warmte en een bewegende partner vragen elk om een andere opbouw. Dit bepaalt welke merken afvallen." },
  { t: "Waarom deze vraag", s: "Natuurlijk, Scandinavisch zacht, Nederlands degelijk of gemeten op maat: vier manieren van bouwen, vier heel verschillende liggevoelens." },
  { t: "Waarom deze vraag", s: "Maat en verstelbaarheid bepalen welke modellen in aanmerking komen en of het bed uw trap op kan. Wij meten dat bij advies aan huis." },
  { t: "Waarom deze vraag", s: "Zodat we de juiste merken klaarzetten. Een goed bed is er in elke prijsklasse; wij zeggen eerlijk wat het verschil is." },
  { t: "Wat er nu gebeurt", s: "Deze drie bedden zetten we klaar. Bij uw bezoek doet Robert eerst de Sleep Scan, dan ligt u zo lang als u wilt." },
];

export default function Configurator() {
  const [c, setC] = useState<Config>(empty);
  const [step, setStep] = useState(0);
  const [ready, setReady] = useState(false);
  const result = useMemo(() => proposals(c), [c]);

  // Bewaar keuzes zodat "terug" vanaf een merkpagina op de uitkomst uitkomt.
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { c: Config; step: number };
        setC({ ...empty, ...saved.c });
        setStep(saved.step);
      }
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { sessionStorage.setItem(KEY, JSON.stringify({ c, step })); } catch {}
  }, [c, step, ready]);

  const steps = ["Voor wie", "Wat speelt er", "Liggevoel", "Maat en uitvoering", "Budget", "Uw voorstel"];
  const canNext = [c.who !== null, c.issues.length > 0, c.feel !== null, c.size !== null && c.base !== null, c.budget !== null, true][step];

  function toggleIssue(i: Issue) {
    if (i === "geen") return setC({ ...c, issues: ["geen"] });
    const rest = c.issues.filter((x) => x !== "geen");
    setC({ ...c, issues: rest.includes(i) ? rest.filter((x) => x !== i) : [...rest, i] });
  }

  const summary = [
    c.who === "alleen" ? "Alleen" : c.who === "samen" ? "Samen" : "Zorgsituatie",
    c.issues.map((i) => issueLabels[i]).join(", "),
    c.feel ? feelLabels[c.feel].t : "",
    c.size,
    c.base === "elektrisch" ? "Elektrisch verstelbaar" : c.base === "vast" ? "Vast" : "",
    c.headboard ? "Met hoofdbord" : "Zonder hoofdbord",
  ].filter(Boolean);

  const appointmentHref = `/afspraak?merk=${encodeURIComponent(result.map((p) => p.brand).join(", "))}&bron=configurator` as const;

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <ol className="flex flex-wrap gap-x-5 gap-y-2 text-[0.7rem] tracking-[0.12em] uppercase">
          {steps.map((s, i) => (
            <li key={s} className={i === step ? "text-ink" : i < step ? "text-sand-deep" : "text-stone/50"}>
              {String(i + 1).padStart(2, "0")} {s}
            </li>
          ))}
        </ol>

        <div className="mt-8">
          {step === 0 && (
            <>
              <h2 className="font-serif text-3xl">Voor wie is het bed?</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <Choice on={c.who === "alleen"} onClick={() => setC({ ...c, who: "alleen" })} title="Voor mijzelf" text="Eén slaper." />
                <Choice on={c.who === "samen"} onClick={() => setC({ ...c, who: "samen" })} title="Samen" text="Twee slapers, ieder een eigen stevigheid." />
                <Choice on={c.who === "zorg"} onClick={() => setC({ ...c, who: "zorg" })} title="Zorgsituatie" text="Hoog-laag of extra hulp bij in- en uitstappen." />
              </div>
            </>
          )}
          {step === 1 && (
            <>
              <h2 className="font-serif text-3xl">Waar heeft u nu last van?</h2>
              <p className="mt-2 text-sm text-stone">Meerdere antwoorden mogelijk.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {(Object.keys(issueLabels) as Issue[]).map((i) => (
                  <Choice key={i} small on={c.issues.includes(i)} onClick={() => toggleIssue(i)} title={issueLabels[i]} />
                ))}
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <h2 className="font-serif text-3xl">Hoe wilt u liggen?</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {(Object.keys(feelLabels) as (keyof typeof feelLabels)[]).map((f) => (
                  <Choice key={f} on={c.feel === f} onClick={() => setC({ ...c, feel: f })} title={feelLabels[f].t} text={feelLabels[f].s} />
                ))}
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <h2 className="font-serif text-3xl">Maat en uitvoering</h2>
              <p className="label mt-6">Maat</p>
              <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
                {sizes.map((s) => (
                  <Choice key={s} small on={c.size === s} onClick={() => setC({ ...c, size: s })} title={s.replace("x", " × ")} />
                ))}
              </div>
              <p className="label mt-6">Onderstel</p>
              <div className="grid gap-2 md:grid-cols-2">
                <Choice small on={c.base === "vast"} onClick={() => setC({ ...c, base: "vast" })} title="Vast" text="Rustig, tijdloos, minder onderhoud." />
                <Choice small on={c.base === "elektrisch"} onClick={() => setC({ ...c, base: "elektrisch" })} title="Elektrisch verstelbaar" text="Lezen, tv kijken, benen omhoog." />
              </div>
              <p className="label mt-6">Hoofdbord</p>
              <div className="grid gap-2 md:grid-cols-2">
                <Choice small on={c.headboard} onClick={() => setC({ ...c, headboard: true })} title="Met hoofdbord" />
                <Choice small on={!c.headboard} onClick={() => setC({ ...c, headboard: false })} title="Zonder hoofdbord" text="Ik heb al een wand of bedombouw." />
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <h2 className="font-serif text-3xl">Wat wilt u ongeveer besteden?</h2>
              <p className="mt-2 text-sm text-stone">Voor een compleet bed met matrassen, topper en hoofdbord. Dit helpt ons de juiste merken klaar te zetten.</p>
              <div className="mt-6 grid gap-3 md:grid-cols-4">
                <Choice on={c.budget === "tot5"} onClick={() => setC({ ...c, budget: "tot5" })} title="Tot € 5.000" />
                <Choice on={c.budget === "5tot8"} onClick={() => setC({ ...c, budget: "5tot8" })} title="€ 5.000 tot € 8.000" />
                <Choice on={c.budget === "8plus"} onClick={() => setC({ ...c, budget: "8plus" })} title="Meer dan € 8.000" />
                <Choice on={c.budget === "open"} onClick={() => setC({ ...c, budget: "open" })} title="Weet ik nog niet" />
              </div>
            </>
          )}
          {step === 5 && (
            <>
              <h2 className="font-serif text-3xl">Deze drie bedden zetten wij voor u klaar.</h2>
              <p className="mt-2 text-sm text-stone">{summary.join(" · ")}</p>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {result.map((p, i) => (
                  <div key={p.slug} className={`border p-6 ${i === 0 ? "border-ink bg-linen" : "border-line"}`}>
                    {i === 0 && <p className="eyebrow">Ons eerste advies</p>}
                    <p className="mt-2 text-xs tracking-[0.14em] uppercase text-stone">{p.brand}</p>
                    <h3 className="mt-1 font-serif text-xl">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.why}</p>
                    <ul className="mt-4 space-y-1 text-sm text-stone">{p.includes.map((x) => <li key={x}>· {x}</li>)}</ul>
                    <Link href={`/collectie/${p.slug}`} className="mt-4 inline-block text-xs tracking-[0.12em] uppercase underline underline-offset-4">Meer over {p.brand}</Link>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-night p-8 text-white">
                <p className="eyebrow !text-sand">De volgende stap</p>
                <h3 className="mt-2 font-serif text-2xl md:text-3xl">Welk van de drie? Dat voelt u pas liggend.</h3>
                <p className="mt-3 max-w-2xl text-white/80">
                  Op papier lijken ze op elkaar. Daarom eindigt dit niet met een prijs, maar met een uur in de showroom: Robert doet de Sleep Scan, deze drie bedden staan klaar, u ligt zo lang als u wilt. Uw antwoorden nemen we mee.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link href={appointmentHref} className="btn btn-sand">Plan mijn uur in de showroom</Link>
                  <span className="text-sm text-white/70">Ook 's avonds en op maandag. Liever bellen? <a href={site.phoneHref} className="text-white underline underline-offset-4">{site.phone}</a></span>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between text-sm">
                <button type="button" onClick={() => { setStep(0); setC(empty); }} className="tracking-[0.12em] uppercase underline underline-offset-4">Opnieuw beginnen</button>
                <Link href="/afspraak?type=thuis" className="text-stone underline-offset-4 hover:underline">Liever advies aan huis?</Link>
              </div>
            </>
          )}
        </div>

        {step < 5 && (
          <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
            <button type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="text-sm tracking-[0.12em] uppercase disabled:opacity-30">← Terug</button>
            <button type="button" onClick={() => setStep(step + 1)} disabled={!canNext} className="btn btn-primary disabled:opacity-40">
              {step === 4 ? "Toon mijn voorstel" : "Volgende"}
            </button>
          </div>
        )}
      </div>

      <aside className="lg:col-span-4">
        <div className="lg:sticky lg:top-36">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/j73a4991-25901.1920x0.jpg" alt="Martin en Robert" fill className="object-cover object-top" sizes="(min-width:1024px) 30vw, 100vw" />
          </div>
          <div className="bg-linen p-6">
            <p className="eyebrow">{sideNotes[step].t}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{sideNotes[step].s}</p>
            <div className="mt-5 border-t border-line pt-5 text-sm text-ink-soft">
              <p className="font-medium text-ink">Wat u hierna krijgt</p>
              <ul className="mt-2 space-y-1">
                <li>· Een uur in de showroom, alleen voor u</li>
                <li>· Sleep Scan door Robert, inbegrepen</li>
                <li>· Drie bedden klaar op basis van uw antwoorden</li>
                <li>· Een eerlijke prijs, op maat van uw samenstelling</li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
