import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import {
  ContactLinks,
  ContactStrip,
  InformationFooter,
  InformationHeader,
} from "../components/InformationPage";

export const Route = createFileRoute("/nri-property-management-bengaluru")({
  component: NriPropertyManagement,
});
const WHATSAPP = "https://wa.me/919148338801";
const CALL = "tel:+919148338801";
const areas = [
  "Bellandur",
  "Kadubeesanahalli",
  "Marathahalli",
  "Yemalur",
  "Whitefield",
  "Hoodi",
  "ITPL",
  "HSR Layout",
  "Kudlu Gate",
  "Sarjapur Road",
  "Kasavanahalli",
  "Harlur",
  "Varthur",
  "Mahadevapura",
  "Panathur",
  "Koramangala",
];
function NriPropertyManagement() {
  return (
    <div className="ef-page">
      <InformationHeader />
      <section className="bg-brand-navy px-5 py-12 text-white sm:px-5 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3c976]">
            For owners living abroad
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
            Your Bengaluru property, looked after while you are abroad.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#e2eaee]">
            EasyFind coordinates access, tenants, repairs and handover for NRI owners in East
            Bengaluru, with a written scope, photo updates and one person to talk to.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#e3c976] px-5 py-3 font-semibold text-brand-navy"
            >
              WhatsApp us
            </a>
            <a
              href={CALL}
              className="rounded-full border border-white/40 px-5 py-3 font-semibold text-white"
            >
              Call EasyFind
            </a>
          </div>
        </div>
      </section>
      <main className="ef-container py-12 md:py-16">
        <div className="grid gap-12 xl:grid-cols-[1.08fr_.92fr]">
          <article className="space-y-10 sm:space-y-12">
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                The questions owners carry
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-navy">
                Who goes in, what gets done, and what comes back to you?
              </h2>
              <ul className="mt-6 space-y-3 text-brand-muted">
                {[
                  "Who goes to the flat, and who has the keys?",
                  "Who speaks to the tenant when something breaks?",
                  "Who approves a repair, and at what cost?",
                  "How do you know the work was actually done?",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <Check className="mt-1 shrink-0 text-brand-gold" size={17} />
                    {x}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                What we coordinate
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-navy">
                Practical actions, recorded clearly.
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Tenant or occupant communication and urgent-issue escalation",
                  "Inspections and access, with a photo record after each visit",
                  "Repair quotes, vendor visits and completion checks",
                  "Vacancy readiness and handover: keys, utilities, condition notes",
                  "Viewings and tenant coordination when you are ready to rent or sell",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-xl border border-brand-border ef-panel-soft p-4 text-sm leading-relaxed text-brand-muted"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </section>
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                How it works
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  [
                    "01",
                    "Tell us about the property.",
                    "Address, current status and what needs attention.",
                  ],
                  [
                    "02",
                    "Agree the brief in writing.",
                    "Update channel, approval limit, emergency contact and who may enter.",
                  ],
                  [
                    "03",
                    "We act, you decide.",
                    "We coordinate the agreed work and report back what needs your approval and what is done.",
                  ],
                ].map(([n, t, b]) => (
                  <div key={n} className="rounded-xl ef-panel-soft p-5">
                    <span className="font-serif text-2xl text-brand-gold">{n}</span>
                    <h3 className="mt-3 font-semibold text-brand-navy">{t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">{b}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Example of the format
              </p>
              <p className="mt-2 text-sm text-brand-muted">
                This is a generic example, not a real client message.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["Found", "Water seepage on the bedroom wall"],
                  ["Needs your approval", "Quote attached for your approval"],
                  ["Done", "Completion checked and recorded"],
                ].map(([t, b]) => (
                  <div key={t} className="border border-brand-border ef-panel-soft p-5">
                    <h3 className="font-semibold text-brand-navy">{t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">{b}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <p className="text-sm leading-relaxed text-brand-muted">
                We aim to acknowledge enquiries within one business day. The update method, approval
                limit and emergency contact are agreed in writing for each property before work
                starts.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                We do not give legal, tax, valuation or title advice, and we cannot guarantee rent,
                tenant quality or time-to-let. Fees and third-party costs are confirmed in writing
                before work begins.
              </p>
            </section>
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                East Bengaluru coverage
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-navy">
                The four local clusters we organise around.
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["Sarjapur Road", "/areas/sarjapur-road-cluster"],
                  ["Bellandur–Marathahalli", "/areas/bellandur-marathahalli-cluster"],
                  ["Whitefield–Mahadevapura", "/areas/whitefield-mahadevapura-cluster"],
                  ["HSR–Hosur Road", "/areas/hsr-hosur-road-cluster"],
                ].map(([name, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="rounded-xl border border-brand-border ef-panel-soft p-4 text-sm font-semibold text-brand-navy transition hover:-translate-y-0.5"
                  >
                    {name}
                    <span className="mt-1 block text-xs font-normal text-brand-muted">
                      Open the local cluster guide
                    </span>
                  </a>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-brand-muted">
                Current working areas include {areas.join(", ")}. Address-level coverage is confirmed before work starts.
              </p>
            </section>
          </article>
          <aside className="h-fit rounded-2xl ef-panel-soft p-5 shadow-sm sm:p-6 xl:sticky xl:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Start with the property
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-navy">
              Tell us what needs attention.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              Share the property situation, what is happening now, and how you want updates handled.
            </p>
            <a
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white"
            >
              Discuss property management <ArrowRight size={16} />
            </a>
            <a
              href="/guides/property-management-bengaluru"
              className="mt-5 block text-sm font-semibold text-brand-navy underline"
            >
              Read the owner guide
            </a>
            <a
              href="/customer-protection"
              className="mt-3 block text-sm font-semibold text-brand-navy underline"
            >
              Customer Protection
            </a>
          </aside>
        </div>
        <ContactStrip label="Tell us about your property" />
        <ContactLinks />
        <p className="mt-8 text-xs text-brand-muted">
          Last updated: October 2026. General guidance, not legal advice.
        </p>
      </main>
      <InformationFooter />
    </div>
  );
}
