import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const pages = {
  privacy: {
    title: "Privacy Policy",
    intro: "How EasyFind Property Solutions handles information shared through this website.",
    sections: [
      [
        "Information we collect",
        "When you submit an enquiry, we may collect your name, phone number, preferred area, budget or property details, service selection, and message. We may also receive basic technical information needed to operate and protect the website.",
      ],
      [
        "How we use it",
        "We use enquiry information to respond to you, understand your requirement, coordinate the next agreed step, maintain records, and improve service handling. We do not publish your details as property listings or sell them.",
      ],
      [
        "Service providers and third parties",
        "We may share relevant information with a vendor or service provider only when needed to carry out a requested and agreed service. Google Forms, Google Maps, WhatsApp, hosting providers, and other linked services operate under their own terms and policies.",
      ],
      [
        "Retention and your choices",
        "We retain information for as long as reasonably needed for enquiry handling, records, safety, and legal obligations. To ask about, update, or remove your enquiry data, email info@easyfindprops.com.",
      ],
    ],
  },
  terms: {
    title: "Terms of Use",
    intro: "The terms that apply when you use the EasyFind website.",
    sections: [
      [
        "Website purpose",
        "This website provides general information about EasyFind Property Solutions and enables enquiries. It is enquiry-led and does not maintain or publish a live property listing inventory.",
      ],
      [
        "No guarantee",
        "Information is not a guarantee of availability, price, outcome, inspection frequency, or service completion. Any service, vendor coordination, responsibilities, fees, and timelines are confirmed separately according to the requirement and agreed scope.",
      ],
      [
        "Your responsibilities",
        "You agree to provide accurate information and not use this website for unlawful, abusive, fraudulent, or unauthorised activity. Do not submit another person's information without permission.",
      ],
      [
        "Contact",
        "Questions about these terms can be sent to info@easyfindprops.com. These website terms do not replace the separate terms agreed for a particular service engagement.",
      ],
    ],
  },
  cookies: {
    title: "Cookies and Similar Technologies",
    intro: "A plain-language explanation of website storage and third-party services.",
    sections: [
      [
        "How the site uses technology",
        "This website is designed to use only the storage and technologies needed to operate the site, remember basic interaction state, protect forms, and understand technical performance where enabled by the hosting or embedded services.",
      ],
      [
        "Embedded and linked services",
        "Google Maps, Google Business Profile links, WhatsApp, Google Forms, and other third-party destinations may set or access information under their own policies when you use them. EasyFind does not control those third-party practices.",
      ],
      [
        "Your controls",
        "You can control cookies and similar technologies through your browser settings. Disabling some technologies or blocking third-party services may affect site functionality, maps, or enquiry submission.",
      ],
      ["Questions", "For questions about this notice, contact info@easyfindprops.com."],
    ],
  },
  "legal-notice": {
    title: "Legal Notice",
    intro: "Important information about EasyFind Property Solutions and this website.",
    sections: [
      [
        "Business identity",
        "EasyFind Property Solutions is the customer-facing name of EASYFIND REALTY SOLUTIONS PRIVATE LIMITED.",
      ],
      [
        "Legal identity and registered office",
        "EasyFind Property Solutions is the customer-facing name of EASYFIND REALTY SOLUTIONS PRIVATE LIMITED. CIN: U68100KA2026PTC219755. Registered office: 154, 1st Main, Vinayaka Layout, Silver County Road, HSR Layout, Bangalore South, Bangalore 560102, Karnataka, India.",
      ],
      [
        "History",
        "EasyFind has served customers in East Bengaluru for about 5 years. The business was incorporated as EASYFIND REALTY SOLUTIONS PRIVATE LIMITED in April 2026.",
      ],
      [
        "Nature of information",
        "References to areas, services, reviews, maps, or local context are provided for practical guidance. They do not constitute a valuation, investment recommendation, legal advice, tax advice, or promise of a particular result.",
      ],
      [
        "Enquiry-led service",
        "The website does not maintain or publish a live property listing inventory. Services, fees, third-party charges, responsibilities, and timelines are discussed and confirmed according to the requirement and agreed scope.",
      ],
      [
        "Contact",
        "For questions about this website or the business identity shown here, email info@easyfindprops.com.",
      ],
    ],
  },
  accessibility: {
    title: "Accessibility",
    intro: "Our approach to making the website usable across common devices and needs.",
    sections: [
      [
        "Current approach",
        "We aim to keep this website readable and usable across common devices, with labelled form controls, keyboard-accessible actions, responsive layouts, and visible focus and error states.",
      ],
      [
        "Getting help",
        "If you have difficulty using a page, reaching a control, reading content, or submitting an enquiry, email info@easyfindprops.com and describe the issue. We will use the information to help and improve the experience.",
      ],
      [
        "Third-party content",
        "Maps, linked profiles, WhatsApp, and other external services may have their own accessibility features and policies. EasyFind cannot control the presentation of those external destinations.",
      ],
    ],
  },
} as const;

export const Route = createFileRoute("/legal/$slug")({ component: LegalPage });

function LegalPage() {
  const { slug } = Route.useParams();
  const page = pages[slug as keyof typeof pages] ?? pages.privacy;

  useEffect(() => {
    document.title = `${page.title} | EasyFind Property Solutions`;
  }, [page.title]);

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#223044]">
      <Helmet>
        <title>{page.title} | EasyFind Property Solutions</title>
        <meta name="description" content={page.intro} />
        <link rel="canonical" href={`https://www.easyfindprops.com/legal/${slug}`} />
      </Helmet>
      <header className="border-b border-[#e4e8ed] bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 md:px-8">
          <a
            href="/#contact"
            className="flex items-center gap-3 text-sm font-semibold text-[#23435f]"
          >
            <img
              src="/easyfind-logo.webp"
              alt="EasyFind Property Solutions"
              className="h-9 w-auto"
            />
            EasyFind Property Solutions
          </a>
          <a
            href="/#contact"
            className="text-sm font-semibold text-[#23435f] underline underline-offset-4"
          >
            Back to contact section
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
          EasyFind Property Solutions
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#23435f] md:text-5xl">
          {page.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#667384]">{page.intro}</p>
        <div className="mt-12 space-y-10 rounded-2xl border border-[#e4e8ed] bg-white p-6 shadow-sm md:p-10">
          {page.sections.map(([heading, text]) => (
            <section key={heading}>
              <h2 className="text-lg font-semibold text-[#23435f]">{heading}</h2>
              <p className="mt-3 leading-relaxed text-[#667384]">{text}</p>
            </section>
          ))}
        </div>
        <p className="mt-8 text-xs leading-relaxed text-[#667384]">
          This is general website information, not legal advice. Please obtain professional legal
          review before relying on it for a specific legal or regulatory obligation.
        </p>
      </main>
    </div>
  );
}
