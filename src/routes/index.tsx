import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import ContactForm from "../components/ContactForm";

export const Route = createFileRoute("/")({ component: Index });

export const NAVY = "#23435f";
const HERO = NAVY;
export const GOLD = "#b89445";
const CREAM = "#f7f5ef";
const INK = "#223044";
const MUTED = "#667384";
const WHATSAPP = "https://wa.me/919148338801";
const CALL = "tel:+919148338801";
const MAPS = "https://maps.app.goo.gl/aFny22T8D57v5dzK8?g_st=ac";

const routes = [
  {
    number: "01",
    title: "Find a property",
    text: "Looking to rent or purchase? Tell us your area, budget, preferences, and timeline so we can help you take the next step with Bengaluru context.",
    id: "find-a-property",
    eyebrow: "For people looking to rent or purchase",
    heading: "A clearer way to find the right Bengaluru property.",
    detail:
      "Whether you are looking to rent or buy, share the area you have in mind, your budget, property preferences, and timeline. We help you frame the requirement properly, understand the Bengaluru context, and decide on the next practical step.",
    points: [
      "Rental or purchase requirement",
      "Area, commute, and budget context",
      "A practical next step based on your timeline",
    ],
    cta: "Start my property search",
    note: "We start with your actual requirement—not a generic list of properties.",
  },
  {
    number: "02",
    title: "Rent out or sell my property",
    text: "Coordinate enquiries, visits, documentation-related steps, and the next stage for your Bengaluru property.",
    id: "rent-out-my-property",
    eyebrow: "For owners ready to rent or sell",
    heading: "A more considered route to rent out or sell.",
    detail:
      "When you are ready to rent out or sell, we help coordinate the early conversations, property visits, documentation-related steps, and handover or next-stage details. The scope is agreed with you before work begins.",
    points: [
      "Enquiry, visit, and buyer or tenant coordination",
      "Documentation-related follow-up",
      "A clearer handover or transaction next step",
    ],
    cta: "Discuss my property",
    note: "You stay clear on what is happening, what is needed, and what comes next.",
  },
  {
    number: "03",
    title: "Manage my property",
    text: "A dependable Bengaluru point of coordination for owners here, elsewhere in India, or abroad—with agreed updates.",
    id: "manage-my-property",
    eyebrow: "For owners in Bengaluru, India, and abroad",
    heading: "A Bengaluru-based property partner for owners near and far.",
    detail:
      "Whether you live in Bengaluru, elsewhere in India, or abroad, we help coordinate the day-to-day property actions that are difficult to handle from a distance. That can include tenant or occupant coordination, inspections, maintenance follow-up, vacancy readiness, and agreed updates.",
    points: [
      "Tenant, occupant, inspection, and access coordination",
      "Maintenance and issue follow-up with suitable professionals",
      "Agreed updates, records, and clear closure",
    ],
    subsections: [
      {
        title: "For owners in Bengaluru and elsewhere in India",
        text: "Stay close to the property without having to chase every day-to-day detail.",
        points: [
          "Tenant or occupant coordination, visits, and inspections",
          "Maintenance requests, vendor follow-up, and work checks",
          "Vacancy, handover, readiness, and agreed progress updates",
        ],
      },
      {
        title: "For NRI owners and owners living abroad",
        text: "A dependable Bengaluru point of contact across distance and time zones.",
        points: [
          "On-the-ground checks, access, repairs, and urgent issue coordination",
          "Photo and update-led visibility before and after agreed work",
          "A clear responsibility, scope, and escalation path",
        ],
      },
    ],
    cta: "Discuss property management",
    note: "The exact responsibilities, response expectations, and vendor scope are agreed with you first.",
  },
  {
    number: "04",
    title: "Prepare and care for my property",
    text: "Coordinate cleaning, painting, pest control, repairs, inspections, documentation support, and other property needs.",
    id: "prepare-and-care",
    eyebrow: "For properties that need practical care",
    heading: "Property care, coordinated from one clear plan.",
    detail:
      "For a move-in, handover, sale, tenant change, or simply a property that needs attention, we coordinate the agreed work: cleaning, painting, pest control, repairs, inspections, documentation support, utility or access follow-up, and other practical requirements.",
    points: [
      "Cleaning, painting, pest control, repairs, and inspections",
      "Documentation, access, utility, and readiness support",
      "Coordination with suitable professionals and agreed updates",
    ],
    categories: [
      {
        title: "Clean and reset",
        text: "Deep cleaning, kitchen and bathroom attention, waste removal, and move-in readiness.",
      },
      {
        title: "Repair and restore",
        text: "Plumbing, electrical, carpentry, fixtures, appliances, doors, locks, and general repairs.",
      },
      {
        title: "Refresh and improve",
        text: "Painting, touch-ups, wall preparation, polishing, and presentation work.",
      },
      {
        title: "Protect and inspect",
        text: "Pest control, dampness or leakage checks, inspection visits, and preventive follow-up.",
      },
      {
        title: "Document and make ready",
        text: "Condition notes, photos, inventory or readiness checks, access, utilities, and documentation support.",
      },
      {
        title: "Coordinate to closure",
        text: "Suitable professionals, agreed scope, progress visibility, issue escalation, and handover confirmation.",
      },
    ],
    cta: "Plan property care",
    note: "EasyFind coordinates the agreed work and keeps the scope, progress, and next action visible.",
  },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        scrollTo("#top");
      }}
      className="flex items-center"
      aria-label="EasyFind home"
    >
      <span
        className="flex h-10 w-[7.5rem] items-center overflow-hidden rounded-lg"
        style={{ background: light ? "white" : "transparent", padding: light ? "4px 8px" : 0 }}
      >
        <img
          src="/easyfind-logo.jpg"
          alt="EasyFind Property Solutions"
          className="h-full w-full object-contain"
        />
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "#services"],
    ["How it works", "#how-it-works"],
    ["Areas", "#areas"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium" style={{ color: NAVY }}>
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border px-4 py-2 text-sm font-semibold"
            style={{ borderColor: GOLD, color: NAVY }}
          >
            WhatsApp us
          </a>
          <button
            onClick={() => scrollTo("#contact")}
            className="rounded-full px-5 py-2.5 text-sm font-semibold"
            style={{ background: NAVY, color: "white" }}
          >
            Start an enquiry
          </button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{ color: NAVY }}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-white px-5 pb-6 pt-3 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b py-4 font-medium"
              style={{ color: NAVY }}
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              scrollTo("#contact");
            }}
            className="mt-4 w-full rounded-full py-3 font-semibold"
            style={{ background: NAVY, color: "white" }}
          >
            Start an enquiry
          </button>
        </div>
      )}
    </header>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div
      className="mb-4 text-xs font-semibold uppercase"
      style={{ color: light ? "#e3c976" : GOLD, letterSpacing: ".2em" }}
    >
      {children}
    </div>
  );
}
function SectionTitle({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      className="font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
      style={{ color: light ? "white" : NAVY }}
    >
      {children}
    </h2>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32" style={{ background: HERO }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "34px 34px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 pb-20 md:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-28">
        <div className="mx-auto max-w-2xl pt-2 text-center lg:mx-0 lg:pt-12 lg:text-left">
          <Eyebrow light>EasyFind Property Solutions</Eyebrow>
          <h1 className="font-serif text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl">
            Your On-Ground
            <br />
            <span style={{ color: "#e3c976" }}>Property Partner</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/75 lg:mx-0">
            We help people find homes in Bengaluru and help property owners manage what matters—with
            a clear point of contact and practical support.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <button
              onClick={() => scrollTo("#find-a-property")}
              className="rounded-full px-6 py-3.5 font-semibold"
              style={{ background: "#e3c976", color: NAVY }}
            >
              I’m looking to rent or buy <ArrowRight className="ml-2 inline" size={17} />
            </button>
            <button
              onClick={() => scrollTo("#rent-out-my-property")}
              className="rounded-full border border-white/35 px-6 py-3.5 font-semibold text-white"
            >
              I own a property
            </button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[440px] rounded-2xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-sm lg:mx-0 lg:mt-8 lg:justify-self-end">
          <Eyebrow light>One clear next step</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-white">
            Tell us what your property needs.
          </h2>
          <p className="mt-4 leading-relaxed text-white/70">
            Share the situation once and we’ll help you choose the right next route.
          </p>
          <div className="mt-7 space-y-3">
            {routes.map((route) => (
              <button
                key={route.number}
                type="button"
                onClick={() => scrollTo(`#${route.id}`)}
                className="flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-left transition hover:bg-white/15"
              >
                <span className="flex items-center gap-3 text-sm font-semibold text-white">
                  <span style={{ color: "#e3c976" }}>{route.number}</span>
                  {route.title}
                </span>
                <ArrowRight size={16} className="text-white/70" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRoute({ route, index }: { route: (typeof routes)[number]; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <section
      id={route.id}
      className="scroll-mt-24 py-20 md:py-28"
      style={{ background: index % 2 === 0 ? "white" : CREAM }}
    >
      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 ${
          reversed ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div>
          <div className="flex items-center gap-4">
            <span className="font-serif text-4xl" style={{ color: GOLD }}>
              {route.number}
            </span>
            <span className="h-px w-12" style={{ background: GOLD }} />
          </div>
          <Eyebrow>{route.eyebrow}</Eyebrow>
          <SectionTitle>{route.heading}</SectionTitle>
          <p className="mt-6 max-w-xl text-base leading-relaxed" style={{ color: MUTED }}>
            {route.detail}
          </p>
          {route.id === "manage-my-property" && (
            <div
              className="mt-8 rounded-xl border bg-[#eef2f2] p-5"
              style={{ borderColor: "#dce4e5" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[.2em]"
                style={{ color: GOLD }}
              >
                Owner guide
              </p>
              <p className="mt-2 text-base font-semibold" style={{ color: NAVY }}>
                Before you appoint property-management help
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                Use our practical guide to agree access, repairs, updates, approvals, and handover
                before the work starts.
              </p>
              <a
                href="/guides/property-management-bengaluru"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
                style={{ color: NAVY }}
              >
                Read the owner guide <ArrowRight size={15} />
              </a>
            </div>
          )}
          {route.subsections && (
            <div className="mt-8 space-y-4">
              {route.subsections.map((subsection) => (
                <div
                  key={subsection.title}
                  className="rounded-xl border bg-white/65 p-5"
                  style={{ borderColor: "#e4e8ed" }}
                >
                  <h3 className="text-base font-semibold" style={{ color: NAVY }}>
                    {subsection.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                    {subsection.text}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {subsection.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-relaxed"
                        style={{ color: INK }}
                      >
                        <Check className="mt-0.5 shrink-0" size={16} style={{ color: GOLD }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {route.categories && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {route.categories.map((category) => (
                <div
                  key={category.title}
                  className="rounded-xl border bg-white/65 p-4"
                  style={{ borderColor: "#e4e8ed" }}
                >
                  <h3 className="text-sm font-semibold" style={{ color: NAVY }}>
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                    {category.text}
                  </p>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-8 rounded-full px-6 py-3.5 font-semibold"
            style={{ background: NAVY, color: "white" }}
          >
            {route.cta} <ArrowRight className="ml-2 inline" size={17} />
          </button>
        </div>
        <div
          className="rounded-2xl border p-7 shadow-sm md:p-9"
          style={{ borderColor: "#e4e8ed", background: "rgba(255,255,255,.72)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[.2em]" style={{ color: GOLD }}>
            What this can include
          </p>
          <ul className="mt-6 space-y-4">
            {route.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check className="mt-0.5 shrink-0" size={19} style={{ color: GOLD }} />
                <span className="leading-relaxed" style={{ color: INK }}>
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t pt-6" style={{ borderColor: "#e4e8ed" }}>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              {route.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <div id="services" className="scroll-mt-24">
      {routes.map((route, index) => (
        <ServiceRoute key={route.id} route={route} index={index} />
      ))}
    </div>
  );
}

function Areas() {
  return (
    <section id="areas" className="py-20 md:py-28" style={{ background: NAVY }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <Eyebrow light>Local where it matters</Eyebrow>
            <SectionTitle light>Bengaluru areas, understood in context.</SectionTitle>
            <p className="mt-5 leading-relaxed text-white/70">
              EasyFind works across key residential and employment corridors in Bengaluru. Tell us
              your preferred area, property need, and timeline—we’ll help you understand the right
              next step.
            </p>
            <p className="mt-6 border-l border-[#b89445] pl-4 text-sm leading-relaxed text-white/60">
              Coverage is focused on confirmed areas where commute, access, and property needs can
              be discussed with useful context.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="border border-white/15 bg-white/5 p-6 md:p-7">
              <h3 className="font-serif text-xl text-white">Close to work</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Bellandur · Kadubeesanahalli · Marathahalli · Yemalur · Whitefield · Hoodi · ITPL
              </p>
            </div>
            <div className="border border-white/15 bg-white/5 p-6 md:p-7">
              <h3 className="font-serif text-xl text-white">The South-East choice</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                HSR Layout · Kudlu Gate · Sarjapur Road · Kasavanahalli · Harlur · Varthur
              </p>
            </div>
            <div className="border border-white/15 bg-white/5 p-6 md:p-7">
              <h3 className="font-serif text-xl text-white">Connected Bengaluru</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Mahadevapura · Panathur · Koramangala
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    ["Very helpful and professional.", "Rishabh Kejariwal"],
    ["Prompt service.", "Kirit"],
    ["Professional and dependable.", "Shameer Ayyappan"],
  ];
  return (
    <section className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Eyebrow>What clients say</Eyebrow>
        <SectionTitle>On-the-ground help, noticed by the people who use it.</SectionTitle>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map(([quote, name]) => (
            <blockquote key={name} className="border p-6" style={{ borderColor: "#e4e8ed" }}>
              <p className="font-serif text-2xl leading-tight" style={{ color: NAVY }}>
                “{quote}”
              </p>
              <footer className="mt-7 text-xs leading-relaxed" style={{ color: MUTED }}>
                — {name}
                <br />
                Google Business Profile
              </footer>
            </blockquote>
          ))}
        </div>
        <a
          href={MAPS}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: NAVY }}
        >
          Read more on Google <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

function WhyEasyFind() {
  const points = [
    [
      "Enquiry-led, not a listing portal",
      "Start with your requirement and get a practical next step.",
    ],
    [
      "On-the-ground coordination",
      "We agree the scope, coordinate the next action, and share updates as agreed.",
    ],
    [
      "Clear service routes",
      "Find, rent out, manage, or prepare and care for a Bengaluru property.",
    ],
  ];
  return (
    <section
      className="border-y py-20 md:py-24"
      style={{ background: CREAM, borderColor: "#e4e8ed" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Why EasyFind</Eyebrow>
          <SectionTitle>Property support, clearly handled.</SectionTitle>
          <p className="mt-5 leading-relaxed" style={{ color: MUTED }}>
            A straightforward starting point for people looking for a home and owners who need
            practical support on the ground.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {points.map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border bg-white p-6"
              style={{ borderColor: "#e4e8ed" }}
            >
              <Check size={20} style={{ color: GOLD }} />
              <h3 className="mt-5 text-lg font-semibold" style={{ color: NAVY }}>
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <Eyebrow>How it works</Eyebrow>
          <SectionTitle>Clear from the first conversation.</SectionTitle>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
          {[
            [
              "01",
              "Share the situation",
              "Tell us what you’re looking for or what your property needs.",
            ],
            [
              "02",
              "Agree the direction",
              "We clarify the requirement, scope, and responsibilities.",
            ],
            [
              "03",
              "Coordinate the next step",
              "EasyFind keeps the agreed action moving and the follow-up clear.",
            ],
          ].map(([n, t, b]) => (
            <div key={n} className="text-center">
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 font-serif text-xl"
                style={{ borderColor: GOLD, color: GOLD }}
              >
                {n}
              </div>
              <h3 className="mt-5 text-lg font-semibold" style={{ color: NAVY }}>
                {t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                {b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const questions = [
    [
      "Do you list properties on the website?",
      "No. We keep the website enquiry-led. Share your area, budget, preferences, or property need and we will guide the next conversation.",
    ],
    [
      "Can owners who live away get property support from Bengaluru?",
      "Yes, where the requirement and responsibilities are agreed in advance. We coordinate the next action and share agreed updates.",
    ],
    [
      "When will I hear back after an enquiry?",
      "We aim to acknowledge enquiries within one business day. Completion timelines depend on the requirement and the agreed scope.",
    ],
    [
      "How are fees handled?",
      "Fees and any third-party or vendor charges are agreed case by case according to the requirement and scope. We do not publish a universal price list.",
    ],
    [
      "Which Bengaluru areas do you cover?",
      "We focus on confirmed areas across Bengaluru’s South-East and employment corridors. See the Areas section for the current coverage.",
    ],
  ];
  return (
    <section
      className="border-y py-20 md:py-24"
      style={{ background: CREAM, borderColor: "#e4e8ed" }}
    >
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="text-center">
          <Eyebrow>Good to know</Eyebrow>
          <SectionTitle>A clearer conversation starts here.</SectionTitle>
        </div>
        <div
          className="mt-10 divide-y rounded-2xl border bg-white px-6"
          style={{ borderColor: "#e4e8ed" }}
        >
          {questions.map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold"
                style={{ color: NAVY }}
              >
                {question}
                <ChevronDown
                  className="shrink-0 transition group-open:rotate-180"
                  style={{ color: GOLD }}
                  size={18}
                />
              </summary>
              <p className="max-w-2xl pt-3 leading-relaxed" style={{ color: MUTED }}>
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: CREAM }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <Eyebrow>Start a conversation</Eyebrow>
            <SectionTitle>Tell us what you need from Bengaluru property.</SectionTitle>
            <p className="mt-5 max-w-xl leading-relaxed" style={{ color: MUTED }}>
              Share the basics and we’ll help you identify the right next step. No listings
              catalogue—just a practical conversation about your requirement.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#e9f7ee", color: "#176b3a" }}
                >
                  <MessageCircle size={20} />
                </span>
                <span>
                  <span
                    className="block text-xs font-semibold uppercase tracking-wider"
                    style={{ color: MUTED }}
                  >
                    WhatsApp
                  </span>
                  <span className="mt-1 block font-semibold" style={{ color: NAVY }}>
                    Start an enquiry
                  </span>
                </span>
              </a>
              <a
                href="mailto:info@easyfindprops.com"
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#eef3f8", color: NAVY }}
                >
                  <Mail size={20} />
                </span>
                <span>
                  <span
                    className="block text-xs font-semibold uppercase tracking-wider"
                    style={{ color: MUTED }}
                  >
                    Email
                  </span>
                  <span className="mt-1 block font-semibold" style={{ color: NAVY }}>
                    info@easyfindprops.com
                  </span>
                </span>
              </a>
              <a
                href={CALL}
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5"
                aria-label="Call EasyFind"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#fbf4df", color: GOLD }}
                >
                  <Phone size={20} />
                </span>
                <span>
                  <span
                    className="block text-xs font-semibold uppercase tracking-wider"
                    style={{ color: MUTED }}
                  >
                    Phone
                  </span>
                  <span className="mt-1 block font-semibold" style={{ color: NAVY }}>
                    Call EasyFind
                  </span>
                </span>
              </a>
            </div>
            <div
              className="mt-8 flex items-start gap-4 rounded-xl border bg-white/60 p-5"
              style={{ borderColor: "#e4e8ed" }}
            >
              <MapPin className="mt-0.5 shrink-0" style={{ color: GOLD }} size={22} />
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: MUTED }}
                >
                  Find EasyFind
                </p>
                <p className="mt-2 leading-relaxed" style={{ color: INK }}>
                  East Bengaluru, Karnataka
                </p>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: NAVY }}
                >
                  View Google Business Profile <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[440px] rounded-2xl bg-white p-2 shadow-xl lg:mx-0 lg:justify-self-end">
            <ContactForm onPrivacyClick={() => scrollTo("#privacy")} />
          </div>
        </div>
        <div
          className="mt-10 overflow-hidden rounded-2xl border bg-white shadow-lg"
          style={{ borderColor: "#e4e8ed" }}
        >
          <div
            className="flex flex-col justify-between gap-3 border-b px-6 py-5 sm:flex-row sm:items-center"
            style={{ borderColor: "#e4e8ed" }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
                Our Bengaluru presence
              </p>
              <h3 className="mt-1 font-serif text-2xl font-semibold" style={{ color: NAVY }}>
                Find us in Bengaluru
              </h3>
            </div>
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: NAVY }}
            >
              Open in Google Maps <ArrowRight size={15} />
            </a>
          </div>
          <iframe
            title="EasyFind Property Solutions on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4847368668495!2d77.62215847587636!3d12.94079861555562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15229e6c1a61%3A0x26a05f018e301661!2sEasyFind%20Property%20Solutions!5e0!3m2!1sen!2sin!4v1710321234567!5m2!1sen!2sin"
            width="100%"
            height="240"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <Logo />
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
            style={{ background: "#e9f7ee", color: "#176b3a" }}
          >
            <MessageCircle size={17} /> WhatsApp EasyFind
          </a>
        </div>
        <div
          className="mt-8 flex flex-col justify-between gap-4 border-t pt-6 text-sm sm:flex-row"
          style={{ borderColor: "#e4e8ed", color: MUTED }}
        >
          <span>© {new Date().getFullYear()} EasyFind Property Solutions</span>
          <span>Find a property · Rent out · Manage · Prepare and care</span>
        </div>
        <p className="mt-4 text-xs" style={{ color: MUTED }}>
          Customer-facing brand of EASYFIND REALTY SOLUTIONS PRIVATE LIMITED.
        </p>
        <div
          className="mt-8 grid gap-8 border-t pt-8 sm:grid-cols-3"
          style={{ borderColor: "#e4e8ed" }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
              Our services
            </p>
            <p className="mt-3 text-sm leading-7" style={{ color: MUTED }}>
              Find a property
              <br />
              Rent out my property
              <br />
              Manage my property
              <br />
              Prepare and care
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
              Property support
            </p>
            <p className="mt-3 text-sm leading-7" style={{ color: MUTED }}>
              Practical property support across confirmed Bengaluru areas.{" "}
              <a
                href="#areas"
                className="font-semibold underline underline-offset-2"
                style={{ color: NAVY }}
              >
                Explore areas
              </a>
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
              Contact
            </p>
            <p className="mt-3 text-sm leading-7" style={{ color: MUTED }}>
              <a
                href={CALL}
                className="font-semibold underline underline-offset-2"
                style={{ color: NAVY }}
              >
                Call EasyFind
              </a>
              <br />
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: NAVY }}
              >
                WhatsApp us
              </a>
              <br />
              info@easyfindprops.com
            </p>
          </div>
        </div>
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs" aria-label="Legal">
          <a href="/legal/privacy" className="underline underline-offset-2" style={{ color: NAVY }}>
            Privacy
          </a>
          <a href="/legal/terms" className="underline underline-offset-2" style={{ color: NAVY }}>
            Terms
          </a>
          <a href="/legal/cookies" className="underline underline-offset-2" style={{ color: NAVY }}>
            Cookies
          </a>
          <a
            href="/legal/legal-notice"
            className="underline underline-offset-2"
            style={{ color: NAVY }}
          >
            Legal notice
          </a>
          <a
            href="/legal/accessibility"
            className="underline underline-offset-2"
            style={{ color: NAVY }}
          >
            Accessibility
          </a>
          <a
            href="/customer-protection"
            className="underline underline-offset-2"
            style={{ color: NAVY }}
          >
            Customer protection
          </a>
          <a
            href="/guides/property-management-bengaluru"
            className="underline underline-offset-2"
            style={{ color: NAVY }}
          >
            Property management guide
          </a>
        </nav>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div style={{ color: INK, fontFamily: "Inter, sans-serif" }}>
      <Helmet>
        <title>EasyFind Property Solutions | Your On-Ground Property Partner in Bengaluru</title>
        <meta
          name="description"
          content="EasyFind helps people find homes in Bengaluru and helps property owners manage what matters—with a clear point of contact and practical support."
        />
        <link rel="canonical" href="https://easyfindprops.com" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Services />
        <Areas />
        <Reviews />
        <WhyEasyFind />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
