"use client";

import { useMemo, useState } from "react";
import { byAppointmentOnly, eveningSlots, slotsByDay } from "@/lib/slots";
import { brands, site } from "@/lib/site";

type Type = "showroom" | "thuis" | "telefonisch";

const typeOptions: { value: Type; title: string; text: string }[] = [
  { value: "showroom", title: "In de showroom", text: "Markt 20, Lochem. Sleep Scan, proefliggen, koffie. Reken op ongeveer een uur." },
  { value: "thuis", title: "Advies aan huis", text: "Wij komen bij u thuis kijken naar de slaapkamer, de maten en uw huidige bed. Binnen 45 km van Lochem." },
  { value: "telefonisch", title: "Eerst even bellen", text: "Een kort gesprek van een kwartier. Daarna weet u of een bezoek zinvol is." },
];

const dayNames = ["zo", "ma", "di", "wo", "do", "vr", "za"];
const monthNames = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];

function toISO(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function BookingForm({ preset, note, initialType }: { preset?: string; note?: string; initialType?: Type }) {
  const [type, setType] = useState<Type>(initialType ?? "showroom");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState(2);
  const [interests, setInterests] = useState<string[]>(preset ? preset.split(",").map((x) => x.trim()).filter(Boolean) : []);
  const [form, setForm] = useState({ name: "", email: "", phone: "", concerns: "", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "busy" | "done" | "fail">("idle");
  const [weekOffset, setWeekOffset] = useState(0);

  const days = useMemo(() => {
    const out: Date[] = [];
    const start = new Date();
    start.setHours(12, 0, 0, 0);
    start.setDate(start.getDate() + 1 + weekOffset * 7);
    for (let i = 0; i < 14; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      if (d.getDay() !== 0) out.push(d);
    }
    return out;
  }, [weekOffset]);

  const selected = date ? new Date(date + "T12:00:00") : null;
  const slots = selected ? slotsByDay[selected.getDay()] ?? [] : [];

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("busy");
    setErrors({});
    const res = await fetch("/api/afspraak", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, type, date, time, persons, interests, source: typeof window !== "undefined" ? window.location.pathname : "" }),
    });
    if (res.status === 422) {
      const j = await res.json();
      setErrors(j.errors ?? {});
      setState("idle");
      return;
    }
    if (!res.ok) {
      setState("fail");
      return;
    }
    setState("done");
  }

  if (state === "done") {
    return (
      <div className="bg-linen p-8 lg:p-12">
        <p className="eyebrow">Aanvraag ontvangen</p>
        <h3 className="mt-3 font-serif text-3xl">Dank u, {form.name.split(" ")[0]}.</h3>
        <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
          Martin of Robert bevestigt uw afspraak binnen één werkdag, per e-mail of telefoon. Neem gerust uw partner mee. Een bed kies je samen.
        </p>
        <p className="mt-4 text-sm text-stone">{site.address.navigation}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-12" noValidate>
      {note && <p className="bg-linen p-4 text-sm text-ink-soft">{note}</p>}
      {/* Stap 1: soort */}
      <fieldset>
        <legend className="eyebrow">01 · Soort afspraak</legend>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {typeOptions.map((o) => (
            <label key={o.value} className={`cursor-pointer border p-5 transition ${type === o.value ? "border-ink bg-linen" : "border-line hover:border-ink/40"}`}>
              <input type="radio" name="type" value={o.value} checked={type === o.value} onChange={() => setType(o.value)} className="sr-only" />
              <p className="font-serif text-lg">{o.title}</p>
              <p className="mt-1 text-sm text-stone">{o.text}</p>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Stap 2: moment */}
      <fieldset>
        <legend className="eyebrow">02 · Wanneer</legend>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-stone">Kies een dag. Dinsdag- en donderdagavond zijn ook mogelijk.</p>
          <div className="flex gap-2 text-sm">
            <button type="button" disabled={weekOffset === 0} onClick={() => setWeekOffset(weekOffset - 1)} className="px-2 disabled:opacity-30">←</button>
            <button type="button" disabled={weekOffset >= 5} onClick={() => setWeekOffset(weekOffset + 1)} className="px-2 disabled:opacity-30">→</button>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
          {days.map((d) => {
            const iso = toISO(d);
            const active = iso === date;
            const onlyByAppt = byAppointmentOnly.includes(d.getDay());
            return (
              <button
                type="button"
                key={iso}
                onClick={() => { setDate(iso); setTime(""); }}
                className={`flex flex-col items-center border py-3 text-sm transition ${active ? "border-ink bg-ink text-white" : "border-line hover:border-ink/40"}`}
              >
                <span className="text-[0.65rem] uppercase tracking-wider opacity-70">{dayNames[d.getDay()]}</span>
                <span className="font-serif text-lg leading-tight">{d.getDate()}</span>
                <span className="text-[0.65rem] opacity-70">{monthNames[d.getMonth()]}</span>
                {onlyByAppt && <span className="mt-1 text-[0.55rem] uppercase tracking-wider text-sand-deep">op afspraak</span>}
              </button>
            );
          })}
        </div>

        {date && type !== "telefonisch" && (
          <div className="mt-6">
            <p className="text-sm text-stone">Tijdstip</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {slots.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setTime(s)}
                  className={`border px-4 py-2 text-sm transition ${time === s ? "border-ink bg-ink text-white" : "border-line hover:border-ink/40"}`}
                >
                  {s}
                  {eveningSlots.includes(s) && <span className="ml-1 text-[0.6rem] uppercase tracking-wider opacity-60">avond</span>}
                </button>
              ))}
            </div>
          </div>
        )}
        {date && type === "telefonisch" && (
          <div className="mt-6">
            <p className="text-sm text-stone">Voorkeur</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Ochtend", "Middag", "Begin van de avond"].map((s) => (
                <button type="button" key={s} onClick={() => setTime(s)} className={`border px-4 py-2 text-sm transition ${time === s ? "border-ink bg-ink text-white" : "border-line hover:border-ink/40"}`}>{s}</button>
              ))}
            </div>
          </div>
        )}
        {errors.time && <p className="mt-3 text-sm text-red-700">{errors.time}</p>}
      </fieldset>

      {/* Stap 3: over u */}
      <fieldset>
        <legend className="eyebrow">03 · Over u</legend>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          <div>
            <label className="label" htmlFor="name">Naam</label>
            <input id="name" className="field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" />
            {errors.name && <p className="mt-1 text-sm text-red-700">{errors.name}</p>}
          </div>
          <div>
            <label className="label" htmlFor="phone">Telefoon</label>
            <input id="phone" className="field" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} autoComplete="tel" inputMode="tel" />
            {errors.phone && <p className="mt-1 text-sm text-red-700">{errors.phone}</p>}
          </div>
          <div>
            <label className="label" htmlFor="email">E-mail</label>
            <input id="email" className="field" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" />
            {errors.email && <p className="mt-1 text-sm text-red-700">{errors.email}</p>}
          </div>
          <div>
            <label className="label">Met hoeveel personen</label>
            <div className="flex gap-2">
              {[1, 2].map((n) => (
                <button type="button" key={n} onClick={() => setPersons(n)} className={`flex-1 border py-3 text-sm ${persons === n ? "border-ink bg-ink text-white" : "border-line"}`}>
                  {n === 1 ? "Alleen" : "Samen met partner"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="label">Interesse (optioneel)</label>
          <div className="flex flex-wrap gap-2">
            {[...brands.map((b) => b.name), "Matras", "Kussens", "Nog geen idee"].map((n) => {
              const on = interests.includes(n);
              return (
                <button type="button" key={n} onClick={() => setInterests(on ? interests.filter((x) => x !== n) : [...interests, n])} className={`border px-3 py-1.5 text-sm transition ${on ? "border-ink bg-ink text-white" : "border-line hover:border-ink/40"}`}>
                  {n}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6">
          <label className="label" htmlFor="concerns">Wat speelt er nu? (optioneel)</label>
          <textarea id="concerns" rows={3} className="field" placeholder="Bijvoorbeeld: ik word wakker met pijn in mijn onderrug, mijn partner draait veel, ons bed is 15 jaar oud." value={form.concerns} onChange={(e) => setForm({ ...form, concerns: e.target.value })} />
        </div>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
      </fieldset>

      <div className="flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
        <p className="max-w-md text-sm text-stone">
          U zit nergens aan vast. U krijgt binnen één werkdag een bevestiging. Uw gegevens delen wij met niemand.
        </p>
        <button type="submit" disabled={state === "busy"} className="btn btn-primary disabled:opacity-60">
          {state === "busy" ? "Versturen…" : "Afspraak aanvragen"}
        </button>
      </div>
      {state === "fail" && <p className="text-sm text-red-700">Er ging iets mis. Bel ons gerust op {site.phone}, dan plannen we het direct in.</p>}
    </form>
  );
}
