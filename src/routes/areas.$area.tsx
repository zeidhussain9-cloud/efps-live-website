import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import {
  ContactLinks,
  ContactStrip,
  InformationFooter,
  InformationHeader,
} from "../components/InformationPage";

const clusters = {
  "sarjapur-road-cluster": {
    name: "Sarjapur Road Cluster",
    areas: "Sarjapur Road · Harlur · Kasavanahalli · Kaikondrahalli · Gunjur-side pockets",
    summary:
      "A south-east residential belt for people comparing access to the Outer Ring Road, Sarjapur Road and the neighbourhoods between them.",
    why: [
      [
        "Work access",
        "A practical starting point for people whose daily route runs towards the Outer Ring Road, Bellandur or the Sarjapur Road employment belt.",
      ],
      [
        "Neighbourhood choice",
        "Harlur, Kasavanahalli and nearby pockets vary street by street. The useful question is not only the apartment, but the road, access and daily routine around it.",
      ],
      [
        "Everyday open space",
        "Kaikondrahalli Lake sits off Sarjapur Road and is a recognised public landmark in this cluster. Check the exact distance from any property rather than assuming the whole cluster is equally close.",
      ],
    ],
    context:
      "Kaikondrahalli Lake is a restored urban lake off Sarjapur Road. Exact roads, schools, healthcare and commute times vary by pocket, so EasyFind confirms the address and requirement before arranging the next step.",
    sources: [
      ["Bengaluru lake context", "https://en.wikipedia.org/wiki/Kaikondrahalli_Lake"],
      [
        "Area on Google Maps",
        "https://www.google.com/maps/search/Sarjapur+Road+Harlur+Kasavanahalli+Bengaluru",
      ],
    ],
  },
  "bellandur-marathahalli-cluster": {
    name: "Bellandur–Marathahalli Cluster",
    areas:
      "Bellandur · Kadubeesanahalli · Panathur · Yemalur · Marathahalli · Varthur-side pockets",
    summary:
      "The east-side work corridor around the Outer Ring Road, with major office campuses, residential pockets and several different daily-commute patterns.",
    why: [
      [
        "Major employment corridor",
        "Embassy TechVillage is in Devarabisanahalli, Bellandur, on the Outer Ring Road. It is one of the major office anchors people use when choosing this cluster.",
      ],
      [
        "Different kinds of access",
        "Bellandur and Kadubeesanahalli sit closer to the ORR office belt; Panathur, Yemalur, Marathahalli and Varthur-side pockets can offer a different balance of road access, home type and daily travel.",
      ],
      [
        "What to check before choosing",
        "Check the actual office gate, school or childcare route, road access during your travel time and the last part of the journey. A short map distance does not always mean a short peak-hour trip.",
      ],
    ],
    context:
      "The cluster is anchored by the Outer Ring Road and office campuses such as Embassy TechVillage. Bellandur Lake, Varthur-side roads and the residential pockets around Panathur and Yemalur are useful reference points, but address-level context matters.",
    sources: [
      [
        "Embassy TechVillage",
        "https://www.embassyofficeparks.com/properties/bengaluru/embassy-techvillage/",
      ],
      [
        "Cluster on Google Maps",
        "https://www.google.com/maps/search/Bellandur+Marathahalli+Panathur+Bengaluru",
      ],
    ],
  },
  "whitefield-mahadevapura-cluster": {
    name: "Whitefield–Mahadevapura Cluster",
    areas: "Whitefield · Hoodi · ITPL · Mahadevapura · surrounding pockets",
    summary:
      "An east Bengaluru cluster shaped by large technology campuses, established residential areas and the Whitefield–Mahadevapura daily commute.",
    why: [
      [
        "Technology and office hubs",
        "International Tech Park Bangalore (ITPB/ITPL) is a major office landmark on Whitefield Road. The wider cluster includes several technology and commercial campuses.",
      ],
      [
        "A more established urban routine",
        "Whitefield, Hoodi and Mahadevapura have a mix of apartments, local shopping, schools, healthcare and work-focused destinations. The right pocket depends on where you travel every day.",
      ],
      [
        "Transit and road choices",
        "Metro and road access are both relevant in this cluster, but the useful station, road and travel time depend on the exact address. Confirm the last-mile route before deciding.",
      ],
    ],
    context:
      "ITPL is an established technology-park landmark in Whitefield. This page avoids promising a commute or listing every school and facility: those details change by pocket and should be checked against the exact property and destination.",
    sources: [
      [
        "International Tech Park Bangalore",
        "https://www.capitaland.com/in/en/shop/malls-and-commercial/itpb.html",
      ],
      [
        "Cluster on Google Maps",
        "https://www.google.com/maps/search/Whitefield+Hoodi+ITPL+Mahadevapura+Bengaluru",
      ],
    ],
  },
  "hsr-hosur-road-cluster": {
    name: "HSR–Hosur Road Cluster",
    areas: "HSR Layout · Koramangala · Bommanahalli · Kudlu · parts of Hosur Road",
    summary:
      "An established south-east cluster linking planned residential sectors, inner-city access and the Hosur Road side of Bengaluru.",
    why: [
      [
        "Planned neighbourhood structure",
        "HSR Layout is divided into numbered sectors with main roads and cross roads. That makes the exact sector and road important when comparing homes.",
      ],
      [
        "Established daily life",
        "HSR Layout and Koramangala have a strong mix of homes, food, services, schools and healthcare. The experience changes quickly between a main road, an interior sector and the Hosur Road edge.",
      ],
      [
        "South-side connections",
        "Bommanahalli, Kudlu and parts of Hosur Road extend the cluster towards the south. Check the actual work route, metro or bus connection and school run rather than relying on a neighbourhood label alone.",
      ],
    ],
    context:
      "HSR Layout's sector structure and its position between the Sarjapur Road and Hosur Road sides are useful starting points. Koramangala, Bommanahalli and Kudlu are included as connected decision areas, not as a claim that every pocket has the same service depth.",
    sources: [
      [
        "HSR Layout map context",
        "https://www.google.com/maps/search/HSR+Layout+Koramangala+Bommanahalli+Kudlu+Bengaluru",
      ],
      ["Hosur Road corridor", "https://www.google.com/maps/search/Hosur+Road+Bengaluru"],
    ],
  },
} as const;

export const Route = createFileRoute("/areas/$area")({ component: ClusterPage });

function ClusterPage() {
  const { area } = Route.useParams();
  const cluster = clusters[area as keyof typeof clusters] ?? clusters["sarjapur-road-cluster"];
  const title = `${cluster.name} Property Guide | EasyFind`;
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#223044]">
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={`${cluster.name}: areas, work hubs, daily-life context and practical questions for renters and property owners.`}
        />
        <link rel="canonical" href={`https://www.easyfindprops.com/areas/${area}`} />
      </Helmet>
      <InformationHeader />
      <section className="bg-[#23435f] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3c976]">
            East Bengaluru area guide
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
            {cluster.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#e2eaee]">{cluster.summary}</p>
          <p className="mt-6 max-w-3xl border-l border-[#e3c976] pl-4 text-sm leading-relaxed text-[#d4e0e5]">
            {cluster.areas}
          </p>
        </div>
      </section>
      <main className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-start">
          <article className="space-y-12">
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                What this cluster is
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#23435f]">
                A group of connected decisions, not a listing catalogue.
              </h2>
              <p className="mt-5 max-w-3xl leading-relaxed text-[#667384]">{cluster.context}</p>
            </section>
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                Why people consider it
              </p>
              <div className="mt-5 grid gap-4">
                {cluster.why.map(([heading, text]) => (
                  <div key={heading} className="rounded-2xl border border-[#e4e8ed] bg-white p-6">
                    <h3 className="font-serif text-2xl font-semibold text-[#23435f]">{heading}</h3>
                    <p className="mt-3 leading-relaxed text-[#667384]">{text}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-2xl bg-[#eef2f2] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                Before you decide
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#23435f]">
                Use the exact destination, not just the area name.
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#667384]">
                <li className="flex gap-3">
                  <Check className="mt-0.5 shrink-0 text-[#b89445]" size={17} />
                  Where will you travel each day, and at what time?
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 shrink-0 text-[#b89445]" size={17} />
                  Which school, office, hospital or daily destination matters to you?
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 shrink-0 text-[#b89445]" size={17} />
                  What road, access point and last-mile route does the exact property use?
                </li>
              </ul>
            </section>
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                Public context checked
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {cluster.sources.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#23435f] underline underline-offset-4"
                  >
                    {label}
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[#667384]">
                Area context is general guidance, not a guarantee of availability, travel time,
                school admission or service coverage at every address.
              </p>
            </section>
          </article>
          <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
              Start with your requirement
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#23435f]">
              Tell us the pocket and the next destination.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#667384]">
              Share the area, budget, work or school destination and timeline. EasyFind will confirm
              the practical next step and address-level coverage.
            </p>
            <a
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#23435f] px-5 py-3 text-sm font-semibold text-white"
            >
              Discuss this area <ArrowRight size={16} />
            </a>
            <a
              href="/guides/property-management-bengaluru"
              className="mt-5 block text-sm font-semibold text-[#23435f] underline"
            >
              Read the owner guide
            </a>
            <a
              href="/nri-property-management-bengaluru"
              className="mt-3 block text-sm font-semibold text-[#23435f] underline"
            >
              NRI owner support
            </a>
          </aside>
        </div>
        <section className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
            Other cluster guides
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {Object.entries(clusters)
              .filter(([key]) => key !== area)
              .map(([key, value]) => (
                <a
                  key={key}
                  href={`/areas/${key}`}
                  className="group rounded-2xl border border-[#e4e8ed] bg-white p-5 transition hover:-translate-y-0.5"
                >
                  <h3 className="font-serif text-2xl font-semibold text-[#23435f]">{value.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#667384]">{value.areas}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#23435f] underline">
                    Open guide <ArrowRight size={14} />
                  </span>
                </a>
              ))}
          </div>
        </section>
        <ContactStrip label={`Discuss ${cluster.name}`} />
        <ContactLinks />
        <p className="mt-8 text-xs text-[#667384]">
          Last updated: October 2026. General guidance, not legal advice.
        </p>
      </main>
      <InformationFooter />
    </div>
  );
}
