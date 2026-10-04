import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
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
    <div className="min-h-screen bg-[#f7f5ef] text-[#223044]">
      <Helmet>
        <title>NRI Property Management in Bengaluru | EasyFind</title>
        <meta
          name="description"
          content="On-the-ground property support for NRI owners in East Bengaluru: tenant coordination, inspections, repairs and handover, with photo updates."
        />
        <link
          rel="canonical"
          href="https://www.easyfindprops.com/nri-property-management-bengaluru"
        />
      </Helmet>
      <InformationHeader />
      <section className="bg-[#23435f] px-5 py-16 text-white md:px-8 md:py-24">
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
              className="rounded-full bg-[#e3c976] px-5 py-3 font-semibold text-[#23435f]"
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
      <main className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <article className="space-y-12">
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                The questions owners carry
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#23435f]">
                Who goes in, what gets done, and what comes back to you?
              </h2>
              <ul className="mt-6 space-y-3 text-[#667384]">
                {[
                  "Who goes to the flat, and who has the keys?",
                  "Who speaks to the tenant when something breaks?",
                  "Who approves a repair, and at what cost?",
                  "How do you know the work was actually done?",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <Check className="mt-1 shrink-0 text-[#b89445]" size={17} />
                    {x}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                What we coordinate
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#23435f]">
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
                    className="rounded-xl border border-[#e4e8ed] bg-white p-4 text-sm leading-relaxed text-[#667384]"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </section>
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                How it works
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
                  <div key={n} className="rounded-xl bg-white p-5">
                    <span className="font-serif text-2xl text-[#b89445]">{n}</span>
                    <h3 className="mt-3 font-semibold text-[#23435f]">{t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#667384]">{b}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                Example of the format
              </p>
              <p className="mt-2 text-sm text-[#667384]">
                This is a generic example, not a real client message.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["Found", "Water seepage on the bedroom wall"],
                  ["Needs your approval", "Quote attached for your approval"],
                  ["Done", "Completion checked and recorded"],
                ].map(([t, b]) => (
                  <div key={t} className="border border-[#e4e8ed] bg-white p-5">
                    <h3 className="font-semibold text-[#23435f]">{t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#667384]">{b}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <p className="text-sm leading-relaxed text-[#667384]">
                We aim to acknowledge enquiries within one business day. The update method, approval
                limit and emergency contact are agreed in writing for each property before work
                starts.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#667384]">
                We do not give legal, tax, valuation or title advice, and we cannot guarantee rent,
                tenant quality or time-to-let. Fees and third-party costs are confirmed in writing
                before work begins.
              </p>
            </section>
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                Areas we cover
              </p>
              <p className="mt-3 leading-relaxed text-[#667384]">
                {areas.join(", ")}. Address-level coverage is confirmed before work starts.
              </p>
            </section>
          </article>
          <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
              Start with the property
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#23435f]">
              Tell us what needs attention.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#667384]">
              Share the property situation, what is happening now, and how you want updates handled.
            </p>
            <a
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#23435f] px-5 py-3 text-sm font-semibold text-white"
            >
              Discuss property management <ArrowRight size={16} />
            </a>
            <a
              href="/guides/property-management-bengaluru"
              className="mt-5 block text-sm font-semibold text-[#23435f] underline"
            >
              Read the owner guide
            </a>
            <a
              href="/customer-protection"
              className="mt-3 block text-sm font-semibold text-[#23435f] underline"
            >
              Customer Protection
            </a>
          </aside>
        </div>
        <ContactStrip label="Tell us about your property" />
        <ContactLinks />
        <p className="mt-8 text-xs text-[#667384]">
          Last updated: October 2026. General guidance, not legal advice.
        </p>
      </main>
      <InformationFooter />
    </div>
  );
}
