import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, MapPin } from "lucide-react";
import {
  ContactLinks,
  ContactStrip,
  InformationFooter,
  InformationHeader,
} from "../components/InformationPage";

type Cluster = {
  name: string;
  shortName: string;
  areas: string;
  summary: string;
  fit: string;
  decision: string;
  signals: string[];
  pockets: { name: string; detail: string }[];
  questions: string[];
};

const clusters: Record<string, Cluster> = {
  "sarjapur-road-cluster": {
    name: "Sarjapur Road",
    shortName: "Sarjapur",
    areas: "Sarjapur Road · Harlur · Kasavanahalli · Kaikondrahalli · Gunjur-side pockets",
    summary:
      "A south-east residential corridor where the right home depends heavily on the exact road, office direction and daily routine around it.",
    fit:
      "A strong starting point when your search sits between Sarjapur Road, Harlur and the Outer Ring Road side of East Bengaluru.",
    decision:
      "Do not choose on the Sarjapur Road label alone. Compare the exact pocket, access road, destination and the last part of the journey.",
    signals: [
      "Harlur and Kasavanahalli connect the Sarjapur Road side with the Bellandur/ORR direction through a network of local roads.",
      "Kaikondrahalli and Kasavanahalli are established residential reference points within this corridor.",
      "BBMP records identify local road and lake works around Harlur, Kasavanahalli and Kaikondrahalli, reinforcing why address-level access matters.",
    ],
    pockets: [
      {
        name: "Harlur",
        detail: "Useful for people comparing Sarjapur Road with the Bellandur side. Check the exact internal road and peak-hour exit before deciding.",
      },
      {
        name: "Kasavanahalli",
        detail: "A practical residential pocket with several connecting roads. The exact building location matters more than the locality label.",
      },
      {
        name: "Kaikondrahalli",
        detail: "A recognisable Sarjapur Road-side pocket with the lake as a local reference point. Treat distance claims as address-specific.",
      },
      {
        name: "Gunjur side",
        detail: "A different decision from inner Harlur/Kasavanahalli. Check the actual route to work, school and daily services before choosing.",
      },
    ],
    questions: [
      "Which road will you use to reach the office each morning?",
      "Is the property practical during your actual travel window, not just on a map?",
      "Do you need quick access towards Bellandur/ORR or towards the Sarjapur side?",
    ],
  },
  "bellandur-marathahalli-cluster": {
    name: "Bellandur–Marathahalli",
    shortName: "Bellandur–Marathahalli",
    areas:
      "Bellandur · Kadubeesanahalli · Panathur · Yemalur · Marathahalli · Varthur-side pockets",
    summary:
      "A major east-side employment and residential corridor where office location, access roads and daily travel time can change the value of a property decision.",
    fit:
      "A natural starting point for people working around the Outer Ring Road and for owners whose property sits in the Bellandur–Marathahalli belt.",
    decision:
      "Use the actual office gate, school route or daily destination as the anchor. Bellandur, Panathur and Marathahalli are not interchangeable simply because they are nearby.",
    signals: [
      "The Devarabisanahalli/Bellandur side is closely associated with the Outer Ring Road office corridor.",
      "Kadubeesanahalli, Panathur and Yemalur create different access patterns even when the map distance looks small.",
      "Marathahalli and Varthur-side routes can change the practical balance between home, work and daily errands.",
    ],
    pockets: [
      {
        name: "Bellandur",
        detail: "Best evaluated against the exact ORR access point, office destination and internal approach road.",
      },
      {
        name: "Kadubeesanahalli",
        detail: "Useful for ORR-side employment access, but the exact building-to-road connection matters.",
      },
      {
        name: "Panathur",
        detail: "A residential choice that should be tested against the actual work destination and peak-hour route.",
      },
      {
        name: "Marathahalli",
        detail: "A long-established east-side reference point with many daily-use connections; property selection still depends on the exact pocket.",
      },
    ],
    questions: [
      "Which office campus or gate are you travelling to?",
      "Would you rather optimise for ORR access, a particular residential pocket, or daily services?",
      "For an owner, what access, inspection and tenant coordination does the property actually need?",
    ],
  },
  "whitefield-mahadevapura-cluster": {
    name: "Whitefield–Mahadevapura",
    shortName: "Whitefield–Mahadevapura",
    areas: "Whitefield · Hoodi · ITPL · Mahadevapura · surrounding pockets",
    summary:
      "A large east Bengaluru employment and residential cluster shaped by technology campuses, established neighbourhoods and the Whitefield–Mahadevapura transit corridor.",
    fit:
      "A strong starting point when your work, family routine or property is tied to Whitefield, Hoodi, ITPL or Mahadevapura.",
    decision:
      "Whitefield is too large to treat as one neighbourhood. Start with the destination, then compare the exact pocket, road and last-mile connection.",
    signals: [
      "Whitefield has an established technology and commercial ecosystem around landmarks such as ITPL.",
      "Namma Metro's operational east–west corridor currently runs from Whitefield to Challaghatta, making station proximity a relevant factor in parts of this cluster.",
      "Hoodi, Mahadevapura and Whitefield offer different combinations of residential, work and daily-service access.",
    ],
    pockets: [
      {
        name: "Whitefield",
        detail: "Compare the property against the actual work destination and nearest practical transit/road connection.",
      },
      {
        name: "Hoodi",
        detail: "A useful middle ground for people balancing Whitefield and Mahadevapura-side destinations.",
      },
      {
        name: "ITPL side",
        detail: "A strong work-location anchor. The right home still depends on the exact office, station and daily routine.",
      },
      {
        name: "Mahadevapura",
        detail: "A strategic east-side choice for people comparing Whitefield with the ORR/inner-east direction.",
      },
    ],
    questions: [
      "Is your destination closer to Whitefield, ITPL, Hoodi or Mahadevapura?",
      "Would metro access materially change your daily routine?",
      "For an owner, is the priority tenant coordination, inspection, repairs or preparing the property for the next occupant?",
    ],
  },
  "hsr-hosur-road-cluster": {
    name: "HSR–Hosur Road",
    shortName: "HSR–Hosur Road",
    areas: "HSR Layout · Koramangala · Bommanahalli · Kudlu · parts of Hosur Road",
    summary:
      "A south-east corridor that is better understood as several different residential decisions: HSR's numbered sectors, the ORR edge, Koramangala's inner-city side, and the Hosur Road–Bommanahalli–Kudlu stretch.",
    fit:
      "Useful for renters, buyers and owners who need to decide between HSR's interior sectors, ORR access, Koramangala and the Hosur Road side rather than treating them as one neighbourhood.",
    decision:
      "We would split this corridor before advising: first choose the side of HSR or Hosur Road that fits the daily destination; then compare the exact sector, road and property.",
    signals: [
      "HSR Layout is organised into numbered sectors and main/cross roads; the sector can change the practical relationship to ORR, Sarjapur Road, Hosur Road and local services.",
      "BBMP road records specifically identify HSR routes such as 5th Main and 9th Main connecting the ORR side towards Yellukunte through Sectors 3 and 2.",
      "The southward side is not the same decision: Bommanahalli, Hongasandra, Mangammanapalya and Kudlu sit on a different road pattern and should be compared by destination.",
    ],
    pockets: [
      {
        name: "HSR — interior sectors",
        detail: "Best considered by sector, road and the exact destination. Sector 1, 2, 3, 6 and 7 can create different daily routes and local-service patterns.",
      },
      {
        name: "HSR — ORR / Agara side",
        detail: "A natural fit for some ORR-oriented routines. Check the actual approach road and the destination rather than assuming every HSR address has the same access.",
      },
      {
        name: "Koramangala edge",
        detail: "A more inner-city choice, with a different balance of access and neighbourhood character from HSR's southern and outer edges.",
      },
      {
        name: "Hosur Road — Bommanahalli / Hongasandra / Kudlu",
        detail: "A distinct south-east route. Compare the actual workplace, road connection and last-mile travel before choosing a home here.",
      },
    ],
    questions: [
      "Which side of HSR or Hosur Road fits the actual daily destination?",
      "Would an interior HSR sector, ORR edge, Koramangala side or south-east route make the bigger difference to your routine?",
      "For an owner, does the property need tenant support, inspections, repairs, access or vacancy readiness?",
    ],
  },
};

export const Route = createFileRoute("/areas/$area")({ component: ClusterPage });

function ClusterPage() {
  const { area } = Route.useParams();
  const cluster = clusters[area] ?? clusters["sarjapur-road-cluster"];

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#223044]">
      <Helmet>
        <title>{cluster.name} Property Guide | EasyFind</title>
        <meta
          name="description"
          content={
            cluster.name +
            ": practical property context, local pockets, decision points and support for renters and owners in Bengaluru."
          }
        />
        <link rel="canonical" href={"https://www.easyfindprops.com/areas/" + area} />
      </Helmet>

      <InformationHeader />

      <section className="overflow-hidden bg-[#23435f] px-5 py-14 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3c976]">
                East Bengaluru · local property guide
              </p>
              <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-[1.04] md:text-6xl">
                {cluster.name}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#e2eaee]">
                {cluster.summary}
              </p>
              <p className="mt-7 max-w-3xl border-l border-[#e3c976] pl-4 text-sm leading-relaxed text-[#d4e0e5]">
                {cluster.areas}
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3c976]">
                The EasyFind view
              </p>
              <p className="mt-4 font-serif text-2xl leading-snug text-white">
                {cluster.decision}
              </p>
              <a
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e3c976] px-5 py-3 text-sm font-semibold text-[#23435f]"
              >
                Discuss {cluster.shortName} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-start">
          <article className="space-y-12">
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                Why this cluster matters
              </p>
              <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight text-[#23435f] md:text-4xl">
                Local context that helps you make a property decision.
              </h2>
              <p className="mt-5 max-w-3xl leading-relaxed text-[#667384]">{cluster.fit}</p>
            </section>

            <section>
              <div className="grid gap-4 md:grid-cols-3">
                {cluster.signals.map((signal, index) => (
                  <div key={signal} className="rounded-2xl border border-[#e4e8ed] bg-white p-6">
                    <span className="font-serif text-2xl text-[#b89445]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-4 text-sm leading-relaxed text-[#667384]">{signal}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                    The pockets
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold text-[#23435f]">
                    Where the decision changes
                  </h2>
                </div>
                <MapPin className="hidden text-[#b89445] sm:block" size={28} />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {cluster.pockets.map((pocket) => (
                  <div key={pocket.name} className="rounded-2xl border border-[#e4e8ed] bg-white p-6">
                    <h3 className="font-serif text-2xl font-semibold text-[#23435f]">
                      {pocket.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#667384]">{pocket.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl bg-[#eef2f2] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                Before you decide
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#23435f]">
                Ask these questions about the exact property.
              </h2>
              <div className="mt-6 space-y-3">
                {cluster.questions.map((question) => (
                  <div key={question} className="flex gap-3 text-sm leading-relaxed text-[#667384]">
                    <Check className="mt-0.5 shrink-0 text-[#b89445]" size={17} />
                    <span>{question}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#e4e8ed] bg-white p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                What EasyFind can help with
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#23435f]">
                The area guide is only the start.
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["Find a property", "Share your area, budget, destination and timing."],
                  ["Rent out or sell", "Coordinate enquiries, visits and the next owner-side action."],
                  ["Manage a property", "Coordinate tenants, inspections, access and maintenance follow-up."],
                  ["Prepare and care", "Coordinate cleaning, repairs, painting, pest control and readiness work."],
                ].map(([title, text]) => (
                  <a
                    key={title}
                    href="/#contact"
                    className="group rounded-xl border border-[#e4e8ed] bg-[#fbfaf6] p-5 transition hover:-translate-y-0.5"
                  >
                    <h3 className="font-semibold text-[#23435f]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#667384]">{text}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#23435f] underline underline-offset-4">
                      Discuss your requirement <ArrowRight size={14} />
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                Start with the address
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#23435f]">
                Tell us the pocket and the next destination.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#667384]">
                Share the property address or preferred pocket, your budget or property situation,
                and the destination that matters most. We will confirm the practical next step.
              </p>
              <a
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#23435f] px-5 py-3 text-sm font-semibold text-white"
              >
                Start an enquiry <ArrowRight size={16} />
              </a>
              <a
                href="/guides/property-management-bengaluru"
                className="mt-5 block text-sm font-semibold text-[#23435f] underline underline-offset-4"
              >
                Read the owner guide
              </a>
              <a
                href="/nri-property-management-bengaluru"
                className="mt-3 block text-sm font-semibold text-[#23435f] underline underline-offset-4"
              >
                NRI owner support
              </a>
            </div>

            <div className="rounded-2xl border border-[#e4e8ed] bg-[#f1eee6] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                Local, not generic
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#667384]">
                Area guidance is a starting point. Availability, travel time, property condition,
                vendor scope and address-level coverage are confirmed for the actual requirement.
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                Explore another cluster
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#23435f]">
                Compare the broader East Bengaluru picture.
              </h2>
            </div>
            <a
              href="/#areas"
              className="hidden items-center gap-2 text-sm font-semibold text-[#23435f] underline underline-offset-4 sm:inline-flex"
            >
              All areas <ArrowRight size={15} />
            </a>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(clusters)
              .filter(([key]) => key !== area)
              .map(([key, value]) => (
                <a
                  key={key}
                  href={"/areas/" + key}
                  className="group rounded-2xl border border-[#e4e8ed] bg-white p-5 transition hover:-translate-y-0.5"
                >
                  <h3 className="font-serif text-2xl font-semibold text-[#23435f]">{value.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#667384]">{value.areas}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#23435f] underline underline-offset-4">
                    Open guide <ArrowRight size={14} />
                  </span>
                </a>
              ))}
          </div>
        </section>

        <ContactStrip label={"Discuss " + cluster.name + " with EasyFind"} />
        <ContactLinks />
        <p className="mt-8 text-xs text-[#667384]">
          Last updated: October 2026. General guidance, not legal advice.
        </p>
      </main>
      <InformationFooter />
    </div>
  );
}
