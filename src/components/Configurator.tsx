"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { site } from "@/lib/site";
import { type Config, type Issue, feelLabels, issueLabels, proposals, sizes } from "@/lib/configurator";

const empty: Config = { who: null, issues: [], feel: null, size: null, base: null, headboard: true, budget: null };

function Choice({ on, onClick, title, text, small = false }: { on: boolean; onClick: () => void; title: string; text?: string; small?: boolean }) {
  return (
    <button type="button" onClick={onClick} className={`text-left border transition ${small ? "px-4 py-3" : "p-5"} ${on ? "border-ink bg-linen" : "border-line hover:border-ink/40"}`}>
      <p className={small ? "text-sm" : "font-serif text-lg"}>{title}</p>
      {text && <p className="mt-1 text-sm text-stone">{text}</p>}
    </button>
  );
}

export default function Configurator() {
  const [c, setC] = useState<Config>(empty);
  const [step, setStep] = useState(0);
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });
  const [state, setState] = useState<"idle" | "busy" | "done" | "fail">("idle");
  const result = useMemo(() => proposals(c), [c]);

  const steps = ["Voor wie", "Wat speelt er", "Liggevoel", "Maat en uitvoering", "Budget", "Uw voorstel"];
  const canNext = [c.who !== null, c.issues.length > 0, c.feel !== null, c.size !== null && c.base !== null, c.budget !== null, true][step];

  function toggleIssue(i: Issue) {
    if (i === "geen") return setC({ ...c, issues: ["geen"] });
    const rest = c.issues.filter((x) => x !== "geen");
    setC({ ...c, issues: rest.includes(i) ? rest.filter((x) => x !== i) : [...rest, i] });
  }

  async function send(e: React.FormEvent) {
    e.preventDefault();
    setState("busy");
    const res = await fetch("/api/configurator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, config: c, proposals: result.map((p) => ({ slug: p.slug, from: p.from, to: p.to })) }),
    });
    setState(res.ok ? "done" : "fail");
  }

  const summary = [
    c.who === "alleen" ? "Alleen" : c.who === "samen" ? "Samen" : "Zorgsituatie",
    c.issues.map((i) => issueLabels[i]).join(", "),
    c.feel ? feelLabels[c.feel].t : "",
    c.size,
    c.base === "elektrisch" ? "Elektrisch verstelbaar" : "Vast",
    c.headboard ? "Met hoofdbord" : "Zonder hoofdbord",
  ].filter(Boolean);

  return (
    <div>
      {/* Voortgang */}
      <ol className="flex flex-wrap gap-x-5 gap-y-2 text-[0.7rem] tracking-[0.12em] uppercase">
        {steps.map((s, i) => (
          <li key={s} className={i === step ? "text-ink" : i < step ? "text-sand-deep" : "text-stone/50"}>
            {String(i + 1).padStart(2, "0")} {s}
          </li>
        ))}
      </ol>

      <div className="mt-8 min-h-[22rem]">
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
              <Choice small on={c.base === "elektrisch"} onClick={() => setC({ ...c, base: "elektrisch" })} title="Elektrisch verstelbaar" text="Lezen, tv kijken, benen omhoog. Vanaf circa € 1.200 extra." />
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
            <p className="mt-2 text-sm text-stone">Voor een compleet bed met matrassen, topper en hoofdbord. Dit helpt ons de juiste merken te kiezen.</p>
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
            <h2 className="font-serif text-3xl">Deze drie bedden passen bij u. Nu nog het juiste.</h2>
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
            <div className="mt-8 grid gap-6 bg-linen p-6 md:grid-cols-3 md:p-8">
              <div>
                <p className="font-serif text-lg">Welk van de drie? Dat voelt u.</p>
                <p className="mt-1 text-sm text-stone">Op papier lijken ze op elkaar. Liggend niet. Daarom eindigt dit niet met een prijs, maar met een uur in de showroom.</p>
              </div>
              <div>
                <p className="font-serif text-lg">Elk bed wordt voor u gemaakt.</p>
                <p className="mt-1 text-sm text-stone">Stevigheid per kant, stof, hoofdbord, maat. Robert meet dat met de Sleep Scan en stelt het samen. De prijs hoort bij die samenstelling.</p>
              </div>
              <div>
                <p className="font-serif text-lg">Uw antwoorden liggen klaar.</p>
                <p className="mt-1 text-sm text-stone">Wij nemen ze mee in de afspraak. U hoeft niets opnieuw uit te leggen.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={`/afspraak?merk=${encodeURIComponent(result.map((p) => p.brand).join(", "))}&bron=configurator`} className="btn btn-primary">Reserveer mijn uur in de showroom</Link>
              <a href={site.phoneHref} className="btn btn-outline">Bel {site.phone}</a>
            </div>
            <p className="mt-3 text-sm text-stone">Ook 's avonds en op maandag. Advies aan huis kan ook.</p>

            {state === "done" ? (
              <div className="mt-8 bg-linen p-8">
                <p className="eyebrow">Ontvangen</p>
                <h3 className="mt-2 font-serif text-2xl">Robert belt u binnen één werkdag.</h3>
                <p className="mt-3 text-ink-soft">Hij neemt uw antwoorden door en plant met u een moment in de showroom. Liever zelf een tijd kiezen? Dat kan direct.</p>
                <Link href="/afspraak?bron=configurator" className="btn btn-primary mt-5">Kies zelf een moment</Link>
              </div>
            ) : (
              <form onSubmit={send} className="mt-10 grid gap-4 border-t border-line pt-8 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
                <p className="text-sm text-ink-soft md:col-span-4">Liever dat wij u bellen om een moment te plannen? Laat uw gegevens achter.</p>
                <div>
                  <label className="label" htmlFor="cname">Naam</label>
                  <input id="cname" required className="field" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
                </div>
                <div>
                  <label className="label" htmlFor="cemail">E-mail</label>
                  <input id="cemail" required type="email" className="field" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
                </div>
                <div>
                  <label className="label" htmlFor="cphone">Telefoon</label>
                  <input id="cphone" required className="field" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} />
                </div>
                <button type="submit" disabled={state === "busy"} className="btn btn-primary disabled:opacity-60">{state === "busy" ? "Versturen…" : "Bel mij voor een afspraak"}</button>
                <p className="text-xs text-stone md:col-span-4">Wij delen uw gegevens met niemand en sturen geen nieuwsbrieven.</p>
                {state === "fail" && <p className="text-sm text-red-700 md:col-span-4">Versturen mislukt. Bel ons gerust op {site.phone}.</p>}
              </form>
            )}
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
      {step === 5 && (
        <div className="mt-6">
          <button type="button" onClick={() => setStep(0)} className="text-sm tracking-[0.12em] uppercase underline underline-offset-4">Opnieuw beginnen</button>
        </div>
      )}
    </div>
  );
}
