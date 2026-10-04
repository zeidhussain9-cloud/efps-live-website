import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import {
  ContactLinks,
  ContactStrip,
  InformationFooter,
  InformationHeader,
} from "../components/InformationPage";
const data = {
  bellandur: {
    name: "Bellandur",
    facts:
      "Bellandur sits on the Outer Ring Road corridor, close to the tech parks along that stretch and Sarjapur Road. Bellandur Lake is nearby.",
  },
  "hsr-layout": {
    name: "HSR Layout",
    facts:
      "HSR Layout is a planned neighbourhood divided into sectors, between the Sarjapur Road side and the Hosur Road side, with Agara Lake nearby.",
  },
  whitefield: {
    name: "Whitefield",
    facts:
      "Whitefield includes ITPL and the large technology parks around it. Exact property and address coverage should be confirmed before work starts.",
  },
  koramangala: {
    name: "Koramangala",
    facts:
      "Koramangala is a long-established neighbourhood divided into numbered blocks, next to HSR Layout. Exact property and address coverage should be confirmed before work starts.",
  },
} as const;
export const Route = createFileRoute("/areas/$area")({ component: AreaPage });
function AreaPage() {
  const { area } = Route.useParams();
  const item = data[area as keyof typeof data] ?? data.bellandur;
  const title = `Renting & Property Management in ${item.name}, Bengaluru | EasyFind`;
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#223044]">
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={`Looking to rent, buy or manage a property in ${item.name}? EasyFind helps renters and owners with visits, tenants, repairs and handover.`}
        />
        <link rel="canonical" href={`https://www.easyfindprops.com/areas/${area}`} />
      </Helmet>
      <InformationHeader />
      <section className="bg-[#23435f] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3c976]">
            Area guidance
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">
            Property help in {item.name}, Bengaluru
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#e2eaee]">
            EasyFind works across {item.name} for people looking to rent or buy and for owners who
            need someone on the ground. Tell us your budget, preferred pocket and timeline, and we
            will help with the next practical step.
          </p>
        </div>
      </section>
      <main className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
        <section className="rounded-2xl border border-[#e4e8ed] bg-white p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
            {item.name} at a glance
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#23435f]">
            A useful starting point, not a listing catalogue.
          </h2>
          <p className="mt-4 leading-relaxed text-[#667384]">{item.facts}</p>
        </section>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-[#e4e8ed] bg-white p-6">
            <h2 className="font-serif text-2xl font-semibold text-[#23435f]">
              Looking to rent or buy?
            </h2>
            <p className="mt-3 leading-relaxed text-[#667384]">
              Share your budget, preferred pocket, commute and timeline. We frame the requirement
              and arrange the next practical conversation. We do not publish a listing catalogue.
            </p>
          </section>
          <section className="rounded-2xl border border-[#e4e8ed] bg-white p-6">
            <h2 className="font-serif text-2xl font-semibold text-[#23435f]">
              Own a property here?
            </h2>
            <p className="mt-3 leading-relaxed text-[#667384]">
              We coordinate viewings, tenants, repairs, inspections and handover, with a written
              scope and updates as agreed. See the NRI owner page if you live abroad.
            </p>
            <a
              href="/nri-property-management-bengaluru"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#23435f] underline"
            >
              NRI owner page <ArrowRight size={15} />
            </a>
          </section>
        </div>
        <section className="mt-10 rounded-2xl bg-[#eef2f2] p-6">
          <h2 className="font-serif text-2xl font-semibold text-[#23435f]">Questions</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#667384]">
            <li>
              <strong>Do you cover my exact address?</strong> We confirm address-level coverage
              before you rely on it.
            </li>
            <li>
              <strong>How soon will you reply?</strong> We aim to acknowledge enquiries within one
              business day.
            </li>
            <li>
              <strong>How are fees handled?</strong> Fees and third-party costs are confirmed in
              writing before work begins.
            </li>
          </ul>
        </section>
        <ContactStrip label={`Discuss property in ${item.name}`} />
        <ContactLinks />
        <p className="mt-8 text-xs text-[#667384]">
          Last updated: October 2026. General guidance, not legal advice.
        </p>
      </main>
      <InformationFooter />
    </div>
  );
}
