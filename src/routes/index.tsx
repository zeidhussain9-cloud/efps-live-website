import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import ContactForm from "../components/ContactForm";

export const Route = createFileRoute("/")({ component: Index });

export const NAVY = "#23435f";
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
    text: "Rent or purchase support shaped around your area, budget, preferences, and timeline.",
    id: "find-a-property",
    eyebrow: "For renters and buyers",
    heading: "A clearer route to the right property.",
    detail:
      "Share the area you have in mind, your budget, property preferences, and timeline. We help frame the requirement properly and decide on the next practical step.",
    points: ["Rental or purchase requirement", "Area, commute, and budget context", "A practical next step based on your timeline"],
    cta: "Start my property search",
    note: "We start with your actual requirement—not a generic list of properties.",
  },
  {
    number: "02",
    title: "Rent out or sell my property",
    text: "Coordinate enquiries, visits, documentation-related steps, and the next stage for your property.",
    id: "rent-out-my-property",
    eyebrow: "For owners ready to transact",
    heading: "A more considered route to rent out or sell.",
    detail:
      "We help coordinate the early conversations, property visits, documentation-related steps, and handover or next-stage details. The scope is agreed before work begins.",
    points: ["Enquiry, visit, and buyer or tenant coordination", "Documentation-related follow-up", "A clearer handover or transaction next step"],
    cta: "Discuss my property",
    note: "You stay clear on what is happening, what is needed, and what comes next.",
  },
  {
    number: "03",
    title: "Manage my property",
    text: "A dependable point of coordination for owners here, elsewhere in India, or abroad—with agreed updates.",
    id: "manage-my-property",
    eyebrow: "For owners in India and abroad",
    heading: "A property partner for owners near and far.",
    detail:
      "We coordinate the day-to-day property actions that are difficult to handle from a distance: tenant or occupant coordination, inspections, maintenance follow-up, vacancy readiness, and agreed updates.",
    points: ["Tenant, occupant, inspection, and access coordination", "Maintenance and issue follow-up with suitable professionals", "Agreed updates, records, and clear closure"],
    subsections: [
      { title: "For owners nearby and elsewhere in India", text: "Stay close to the property without chasing every day-to-day detail.", points: ["Tenant or occupant coordination, visits, and inspections", "Maintenance requests, vendor follow-up, and work checks", "Vacancy, handover, readiness, and agreed progress updates"] },
      { title: "For NRI owners and owners living abroad", text: "A dependable point of contact across distance and time zones.", points: ["On-the-ground checks, access, repairs, and urgent issue coordination", "Photo and update-led visibility before and after agreed work", "A clear responsibility, scope, and escalation path"] },
    ],
    cta: "Discuss property management",
    note: "The exact responsibilities, response expectations, and vendor scope are agreed with you first.",
  },
  {
    number: "04",
    title: "Prepare and care for my property",
    text: "Coordinate cleaning, painting, pest control, repairs, inspections, documentation support, and other practical property needs.",
    id: "prepare-and-care",
    eyebrow: "For properties that need attention",
    heading: "Property care, coordinated from one clear plan.",
    detail:
      "For a move-in, handover, sale, tenant change, or simply a property that needs attention, we coordinate the agreed work and keep the scope, progress, and next action visible.",
    points: ["Cleaning, painting, pest control, repairs, and inspections", "Documentation, access, utility, and readiness support", "Coordination with suitable professionals and agreed updates"],
    categories: [
      { title: "Clean and reset", text: "Deep cleaning, kitchen and bathroom attention, waste removal, and move-in readiness." },
      { title: "Repair and restore", text: "Plumbing, electrical, carpentry, fixtures, appliances, doors, locks, and general repairs." },
      { title: "Refresh and improve", text: "Painting, touch-ups, wall preparation, polishing, and presentation work." },
      { title: "Protect and inspect", text: "Pest control, dampness or leakage checks, inspection visits, and preventive follow-up." },
      { title: "Document and make ready", text: "Condition notes, photos, inventory or readiness checks, access, utilities, and documentation support." },
      { title: "Coordinate to closure", text: "Suitable professionals, agreed scope, progress visibility, issue escalation, and handover confirmation." },
    ],
    cta: "Plan property care",
    note: "EasyFind coordinates the agreed work and keeps the scope, progress, and next action visible.",
  },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo() {
  return (
    <a href="#top" onClick={(e) => { e.preventDefault(); scrollTo("#top"); }} className="flex items-center" aria-label="EasyFind home">
      <span className="flex h-10 w-[8.25rem] items-center overflow-hidden rounded-lg bg-white px-1.5">
        <img src="/easyfind-logo.jpg" alt="EasyFind Property Solutions" className="h-full w-full object-contain" />
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Services","#services"],["How it works","#how-it-works"],["Areas","#areas"],["Contact","#contact"]];
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-brand-border/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-5 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Primary">
          {links.map(([label, href]) => <a key={href} href={href} className="rounded-md px-1 py-2 text-sm font-semibold text-brand-navy transition hover:text-brand-gold focus-visible:outline-2">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-2 lg:gap-3 md:flex">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="ef-button border border-brand-gold bg-white text-brand-navy">WhatsApp us</a>
          <button onClick={() => scrollTo("#contact")} className="ef-button bg-brand-navy text-white shadow-sm">Start an enquiry</button>
        </div>
        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-white md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} style={{ color: NAVY }}>
          {open ? <X size={21}/> : <Menu size={21}/>}
        </button>
      </div>
      {open && (
        <div className="border-t border-brand-border bg-white px-4 pb-5 pt-2 md:hidden">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-brand-border py-4 text-sm font-semibold text-brand-navy">{label}</a>)}
          <button onClick={() => { setOpen(false); scrollTo("#contact"); }} className="ef-button mt-4 w-full bg-brand-navy text-white">Start an enquiry</button>
        </div>
      )}
    </header>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className="ef-eyebrow mb-4" style={{ color: light ? "#e3c976" : GOLD }}>{children}</div>;
}
function SectionTitle({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <h2 className="ef-display text-[clamp(2rem,3.6vw,3rem)]" style={{ color: light ? "white" : NAVY }}>{children}</h2>;
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-navy pt-20 sm:pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true"><img src="/og-image.jpg" alt="" className="absolute inset-y-0 right-0 hidden h-full w-[52%] object-cover opacity-[0.16] lg:block" /><div className="absolute inset-y-0 right-0 hidden w-[58%] bg-gradient-to-l from-brand-navy/20 via-brand-navy/75 to-brand-navy lg:block" />
        <div className="absolute right-[-10%] top-12 h-[32rem] w-[32rem] rounded-full border border-white/10" />
        <div className="absolute right-[5%] top-28 h-[23rem] w-[23rem] rounded-full border border-[#d8bd73]/15" />
        <div className="absolute inset-y-0 left-0 w-[44%] bg-gradient-to-r from-[#19364f]/55 to-transparent" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-12 sm:px-5 sm:pb-16 md:px-8 md:pb-20 lg:grid-cols-[1.02fr_.98fr] lg:items-end lg:gap-14">
        <div className="max-w-2xl pt-6 text-center lg:pt-12 lg:text-left">
          <Eyebrow light>EasyFind Property Solutions</Eyebrow>
          <h1 className="ef-display text-[clamp(2.6rem,6.1vw,4.9rem)] text-white">
            Bengaluru Property,
            <br />
            <span style={{ color: "#e3c976" }}>Handled Properly.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/78 sm:text-lg lg:mx-0">
            From finding your next home to managing your property from abroad, EasyFind helps. Choose the route that matches what you need today.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <button onClick={() => scrollTo("#contact")} className="ef-button bg-[#d8bd73] text-[#19364f]">Start an enquiry <ArrowRight className="ml-2 inline" size={16}/></button>
            <a href="#areas" className="ef-button border border-white/25 bg-white/[.04] text-white">Explore areas</a>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 text-left sm:max-w-lg">
            <div className="border-t border-white/15 pt-3">
              <p className="font-serif text-2xl text-[#e3c976]">04</p>
              <p className="mt-1 text-xs uppercase tracking-[.14em] text-white/55">clear service routes</p>
            </div>
            <div className="border-t border-white/15 pt-3">
              <p className="font-serif text-2xl text-[#e3c976]">East Bengaluru</p>
              <p className="mt-1 text-xs uppercase tracking-[.14em] text-white/55">current working focus</p>
            </div>
          </div>
        </div>

        <div className="relative grid gap-3 sm:grid-cols-2">
          {routes.map((route) => (
            <button key={route.number} type="button" onClick={() => scrollTo("#"+route.id)}
              className="group min-h-[158px] rounded-[1.2rem] border border-white/15 bg-white/[.07] p-5 text-left shadow-[0_20px_55px_rgba(0,0,0,.10)] transition duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[.11] focus-visible:outline-2 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="font-serif text-2xl text-[#e3c976]">{route.number}</span>
                <ArrowRight size={17} className="mt-1 text-white/45 transition group-hover:translate-x-1 group-hover:text-white"/>
              </div>
              <h2 className="mt-5 font-serif text-xl font-semibold leading-tight text-white">{route.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/62">{route.text}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRoute({ route, index }: { route: (typeof routes)[number]; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <section id={route.id} className="scroll-mt-24 border-b border-brand-border py-[clamp(4rem,7vw,6.5rem)]" style={{ background: index % 2 === 0 ? "#fff" : CREAM }}>
      <div className={`mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <div>
          <div className="flex items-center gap-4"><span className="font-serif text-4xl text-brand-gold">{route.number}</span><span className="h-px w-12 bg-brand-gold"/></div>
          <Eyebrow>{route.eyebrow}</Eyebrow>
          <SectionTitle>{route.heading}</SectionTitle>
          <p className="mt-6 max-w-xl text-base leading-7 text-brand-muted">{route.detail}</p>
          {route.id === "manage-my-property" && (
            <div className="ef-panel-soft mt-8 p-5 sm:p-6">
              <p className="ef-eyebrow">Owner guide</p>
              <p className="mt-2 text-base font-semibold text-brand-navy">Before you appoint property-management help</p>
              <p className="mt-2 text-sm leading-6 text-brand-muted">Use our practical guide to agree access, repairs, updates, approvals, and handover before the work starts.</p>
              <a href="/guides/property-management-bengaluru" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy underline underline-offset-4">Read the owner guide <ArrowRight size={15}/></a>
            </div>
          )}
          {route.subsections && (
            <div className="mt-8 grid gap-4 xl:grid-cols-2">
              {route.subsections.map(sub => (
                <div key={sub.title} className="ef-panel-soft p-5 sm:p-6">
                  <h3 className="text-base font-semibold text-brand-navy">{sub.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{sub.text}</p>
                  <ul className="mt-3 space-y-2">
                    {sub.points.map(point => <li key={point} className="flex gap-2 text-sm leading-6 text-brand-text"><Check size={16} className="mt-1 shrink-0 text-brand-gold"/><span>{point}</span></li>)}
                  </ul>
                  {sub.title.startsWith("For NRI owners") && <a href="/nri-property-management-bengaluru" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy underline underline-offset-4">NRI property management <ArrowRight size={15}/></a>}
                </div>
              ))}
            </div>
          )}
          {route.categories && (
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {route.categories.map(category => <div key={category.title} className="ef-panel-soft p-4"><h3 className="text-sm font-semibold text-brand-navy">{category.title}</h3><p className="mt-2 text-sm leading-6 text-brand-muted">{category.text}</p></div>)}
            </div>
          )}
          <button onClick={() => scrollTo("#contact")} className="ef-button mt-8 bg-brand-navy text-white">{route.cta}<ArrowRight className="ml-2 inline" size={16}/></button>
        </div>
        <div className="ef-panel p-6 sm:p-7 md:p-9">
          <p className="ef-eyebrow">What this can include</p>
          <ul className="mt-6 space-y-4">
            {route.points.map(point => <li key={point} className="flex gap-3"><Check size={19} className="mt-0.5 shrink-0 text-brand-gold"/><span className="leading-7 text-brand-text">{point}</span></li>)}
          </ul>
          <div className="ef-rule mt-8 pt-6"><p className="text-sm leading-6 text-brand-muted">{route.note}</p></div>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  const facts = [
    ["01", "Four clear service routes", "Find, rent out or sell, manage, or prepare and care."],
    ["02", "Scope agreed before work", "Responsibilities, updates, and third-party coordination are clarified first."],
    ["03", "One-business-day acknowledgement target", "Enquiries are acknowledged on that target; completion timing depends on scope."],
  ];
  return <section className="border-y border-brand-border bg-brand-cream py-7"><div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-5 md:px-8">{facts.map(([n,t,b])=><div key={n} className="border-l border-brand-border pl-5 first:border-l-0 sm:first:border-l sm:first:pl-5"><span className="font-serif text-2xl text-brand-gold">{n}</span><strong className="mt-2 block text-sm text-brand-navy">{t}</strong><span className="mt-2 block text-xs leading-5 text-brand-muted">{b}</span></div>)}</div></section>;
}

function Services() { return <div id="services">{routes.map((route,index)=><ServiceRoute key={route.id} route={route} index={index}/>)}</div>; }

function Areas() {
  const clusters = [
    ["01","Bellandur–Marathahalli","ORR work belt · Bellandur · Kadubeesanahalli · Panathur · Marathahalli","For people balancing office access, residential choice and east Bengaluru day-to-day movement.","/areas/bellandur-marathahalli-cluster"],
    ["02","Sarjapur Road","Harlur · Kasavanahalli · Kaikondrahalli · Gunjur-side pockets","For people comparing the exact pocket, road connection and destination—not just the locality label.","/areas/sarjapur-road-cluster"],
    ["03","Whitefield–Mahadevapura","Whitefield · Hoodi · ITPL · Mahadevapura","For people whose work, family routine or property sits in the wider east Bengaluru corridor.","/areas/whitefield-mahadevapura-cluster"],
    ["04","HSR–Hosur Road","HSR Layout · Koramangala · Bommanahalli · Kudlu","For people deciding between HSR sectors, the ORR edge, Koramangala and the Hosur Road side.","/areas/hsr-hosur-road-cluster"],
  ];
  return (
    <section id="areas" className="relative overflow-hidden bg-brand-navy py-[clamp(4.5rem,8vw,7rem)] text-white">
      <div className="pointer-events-none absolute right-[-6rem] top-[-5rem] h-72 w-72 rounded-full border border-white/10" aria-hidden="true"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <div className="max-w-2xl"><Eyebrow light>East Bengaluru</Eyebrow><SectionTitle light>Local coverage organised around real property decisions.</SectionTitle><p className="mt-5 leading-7 text-white/65">Four working clusters give the site a practical local structure. Each guide goes one level deeper into pockets, roads and decision points.</p></div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{clusters.map(([n,title,areas,text,href])=><a key={href} href={href} className="group rounded-2xl border border-white/15 bg-white/[.06] p-5 transition hover:-translate-y-0.5 hover:bg-white/[.1] focus-visible:outline-2"><div className="flex items-start justify-between"><span className="font-serif text-xl text-[#e3c976]">{n}</span><ArrowRight size={17} className="text-white/40 transition group-hover:translate-x-1 group-hover:text-white"/></div><h3 className="mt-5 font-serif text-2xl text-white">{title}</h3><p className="mt-3 text-xs font-semibold uppercase tracking-[.12em] text-white/45">{areas}</p><p className="mt-4 text-sm leading-6 text-white/65">{text}</p><span className="mt-5 inline-flex text-sm font-semibold text-white underline underline-offset-4">Explore the local guide</span></a>)}</div>
      </div>
    </section>
  );
}

function Reviews() {
  return <section className="ef-section bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8"><Eyebrow>Google Business Profile</Eyebrow><div className="ef-panel-soft flex flex-col gap-6 p-6 sm:p-7 md:flex-row md:items-center md:justify-between md:p-9"><div className="max-w-2xl"><SectionTitle>Read what customers have shared.</SectionTitle><p className="mt-4 leading-7 text-brand-muted">We do not reproduce a fixed rating or review count here. The public Google Business Profile is the source for current customer feedback.</p></div><a href={MAPS} target="_blank" rel="noreferrer" className="ef-button shrink-0 bg-brand-navy text-white">Read reviews on Google <ArrowRight size={15}/></a></div></div></section>;
}

function WhyEasyFind() {
  const points = [
    ["Enquiry-led, not a listing portal","Start with your requirement and get a practical next step."],
    ["On-the-ground coordination","We coordinate agreed visits, inspections, maintenance follow-up, access, readiness, and other practical actions."],
    ["Clear service routes","Find, rent out, manage, or prepare and care for a property."],
  ];
  return <section className="ef-section border-y border-brand-border bg-brand-cream"><div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8"><div className="max-w-2xl"><Eyebrow>Why EasyFind</Eyebrow><SectionTitle>Property support, clearly handled.</SectionTitle><p className="mt-5 leading-7 text-brand-muted">A straightforward starting point for people looking for a home and owners who need practical support on the ground.</p></div><div className="mt-8 grid gap-4 md:grid-cols-3">{points.map(([title,text])=><div key={title} className="ef-panel-soft p-6"><div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-gold/40 bg-[#faf6eb]"><Check size={17} className="text-brand-gold"/></div><h3 className="mt-5 text-lg font-semibold text-brand-navy">{title}</h3><p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p></div>)}</div></div></section>;
}

function HowItWorks() {
  const steps = [
    ["01","Share the situation","Tell us what you are looking for, what the property needs, and what timing matters."],
    ["02","Agree the scope","We clarify responsibilities, approvals, update expectations, and any third-party work before it starts."],
    ["03","Coordinate the agreed action","EasyFind follows up with the relevant people or professionals and keeps the next decision visible."],
    ["04","Close the loop","You receive the agreed update, outcome, or next action. Enquiries are acknowledged within one business day as our target."],
  ];
  return <section id="how-it-works" className="ef-section bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8"><div className="mx-auto max-w-2xl text-center"><Eyebrow>How it works</Eyebrow><SectionTitle>From enquiry to a clear next action.</SectionTitle><p className="mt-5 leading-7 text-brand-muted">The exact work varies by requirement. The way we start stays consistent: understand the situation, agree what is in scope, coordinate the agreed action, and report back.</p></div><div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">{steps.map(([n,t,b],i)=><div key={n} className="relative ef-panel-soft p-6"><div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-gold font-serif text-lg text-brand-gold">{n}</div><h3 className="mt-5 text-base font-semibold text-brand-navy">{t}</h3><p className="mt-2 text-sm leading-6 text-brand-muted">{b}</p>{i<3&&<div className="pointer-events-none absolute right-[-1rem] top-11 hidden w-8 border-t border-dashed border-brand-gold/40 lg:block" />}</div>)}</div><div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-brand-border bg-brand-cream p-5 text-center"><p className="text-sm leading-6 text-brand-text"><strong className="text-brand-navy">Fees are case by case.</strong> Any EasyFind fee and relevant third-party or vendor charges are agreed with you according to the requirement and scope.</p></div></div></section>;
}

function FAQ() {
  const questions = [
    ["Can you help me find a rental or purchase property?","Yes. Start with the area, budget, property preferences and timing. EasyFind is enquiry-led rather than a live listings portal, so the first step is understanding the requirement."],
    ["Can you manage a property while I live elsewhere?","Yes, where the requirement and responsibilities are agreed in advance. Depending on scope, this can include access, inspections, tenant coordination, repairs and agreed updates."],
    ["What happens after I send an enquiry?","We aim to acknowledge enquiries within one business day. We then clarify the requirement, agree the scope and responsibilities, and identify the next practical action."],
    ["How are fees and third-party costs handled?","Fees are case by case. Any EasyFind fee and relevant vendor or third-party charges are agreed according to the requirement and scope before work begins."],
    ["Which East Bengaluru areas do you cover?","Our current area structure is organised around Sarjapur Road, Bellandur–Marathahalli, Whitefield–Mahadevapura, and HSR–Hosur Road. Exact address-level coverage is confirmed for the requirement."],
  ];
  return <section className="ef-section border-y border-brand-border bg-brand-cream"><div className="mx-auto max-w-4xl px-4 sm:px-5 md:px-8"><div className="text-center"><Eyebrow>Good to know</Eyebrow><SectionTitle>A clearer conversation starts here.</SectionTitle></div><div className="ef-panel mt-8 overflow-hidden px-4 sm:px-6">{questions.map(([q,a])=><details key={q} className="group border-b border-brand-border py-1 last:border-b-0"><summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold leading-6 text-brand-navy"><span>{q}</span><ChevronDown size={18} className="shrink-0 text-brand-gold transition group-open:rotate-180"/></summary><p className="max-w-3xl pb-5 pr-8 text-sm leading-6 text-brand-muted">{a}</p></details>)}</div></div></section>;
}

function Contact() {
  return <section id="contact" className="ef-section bg-brand-cream"><div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8"><div className="grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-14"><div><Eyebrow>Start a conversation</Eyebrow><SectionTitle>Tell us what you need for your property.</SectionTitle><p className="mt-5 max-w-xl leading-7 text-brand-muted">Share the basics and we’ll help you identify the right next step. No listings catalogue—just a practical conversation about your requirement.</p><div className="ef-panel-soft mt-7 p-5 sm:p-6"><p className="ef-eyebrow">What to expect</p><div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1"><div className="flex gap-3 text-sm leading-6 text-brand-text"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-gold"/><span>We aim to acknowledge enquiries within one business day.</span></div><div className="flex gap-3 text-sm leading-6 text-brand-text"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-gold"/><span>Scope, responsibilities, and update expectations are agreed before work begins.</span></div><div className="flex gap-3 text-sm leading-6 text-brand-text"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-gold"/><span>Fees and third-party charges are handled case by case.</span></div></div></div><a href={WHATSAPP} target="_blank" rel="noreferrer" className="ef-button mt-5 flex w-full items-center justify-center gap-2 bg-brand-navy text-white sm:max-w-md"><MessageCircle size={18}/> Start on WhatsApp <ArrowRight size={15}/></a><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm"><a href={CALL} className="font-semibold text-brand-navy underline underline-offset-4">Call EasyFind</a><a href="mailto:info@easyfindprops.com" className="font-semibold text-brand-navy underline underline-offset-4">Email EasyFind</a></div><div className="ef-panel-soft mt-7 flex items-start gap-4 p-5"><MapPin className="mt-0.5 shrink-0 text-brand-gold" size={22}/><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-brand-muted">Find EasyFind</p><p className="mt-2 text-sm leading-6 text-brand-text">East Bengaluru, Karnataka</p><a href={MAPS} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy underline underline-offset-4">View Google Business Profile <ArrowRight size={15}/></a></div></div></div><div className="w-full"><div className="ef-panel overflow-hidden p-1"><ContactForm onPrivacyClick={() => scrollTo("#privacy")} /></div></div></div><div className="ef-panel mt-10 p-6 sm:p-7"><div className="flex items-start gap-4"><MapPin className="mt-0.5 shrink-0 text-brand-gold" size={22}/><div><p className="ef-eyebrow">Service area</p><h3 className="mt-1 font-serif text-2xl font-semibold text-brand-navy">East Bengaluru, Karnataka</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-brand-muted">EasyFind works on an enquiry-led basis across its confirmed service areas. Address-level coverage is confirmed before work begins.</p><a href={MAPS} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy underline underline-offset-4">View Google Business Profile <ArrowRight size={15}/></a></div></div></div></div></section>;
}

function Footer() {
  return <footer className="border-t border-brand-border bg-white py-10"><div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Logo/><a href={WHATSAPP} target="_blank" rel="noreferrer" className="ef-button inline-flex self-start border border-brand-gold bg-white text-brand-navy"><MessageCircle size={17}/> WhatsApp EasyFind</a></div><div className="ef-rule mt-8 pt-7"><p className="text-xs uppercase tracking-[.14em] text-brand-gold">EasyFind Property Solutions</p><p className="mt-3 max-w-2xl text-sm leading-6 text-brand-muted">Customer-facing brand of EASYFIND REALTY SOLUTIONS PRIVATE LIMITED.</p></div><div className="mt-8 grid gap-8 border-t border-brand-border pt-8 sm:grid-cols-3"><div><p className="ef-eyebrow">Our services</p><div className="mt-3 space-y-1.5 text-sm leading-6 text-brand-muted"><p>Find a property</p><p>Rent out my property</p><p>Manage my property</p><p>Prepare and care</p></div></div><div><p className="ef-eyebrow">Property support</p><p className="mt-3 max-w-sm text-sm leading-6 text-brand-muted">Practical property support across confirmed areas. <a href="#areas" className="font-semibold text-brand-navy underline underline-offset-2">Explore areas</a></p></div><div><p className="ef-eyebrow">Contact</p><div className="mt-3 space-y-1.5 text-sm leading-6"><a href={CALL} className="font-semibold text-brand-navy underline underline-offset-2">Call EasyFind</a><br/><a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-semibold text-brand-navy underline underline-offset-2">WhatsApp us</a><br/><span className="text-brand-muted">info@easyfindprops.com</span></div><p className="mt-4 text-xs leading-5 text-brand-muted">Registered office: 154, 1st Main, Vinayaka Layout, Silver County Road, HSR Layout, Bengaluru 560102, Karnataka, India.</p></div></div><nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-brand-border pt-6 text-xs" aria-label="Legal"><a href="/legal/privacy" className="text-brand-navy underline underline-offset-2">Privacy</a><a href="/legal/terms" className="text-brand-navy underline underline-offset-2">Terms</a><a href="/legal/cookies" className="text-brand-navy underline underline-offset-2">Cookies</a><a href="/legal/legal-notice" className="text-brand-navy underline underline-offset-2">Legal notice</a><a href="/legal/accessibility" className="text-brand-navy underline underline-offset-2">Accessibility</a><a href="/customer-protection" className="text-brand-navy underline underline-offset-2">Customer protection</a><a href="/guides/property-management-bengaluru" className="text-brand-navy underline underline-offset-2">Property management guide</a></nav><div className="mt-6 flex flex-col gap-2 border-t border-brand-border pt-5 text-xs text-brand-muted sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} EasyFind Property Solutions</span><span>East Bengaluru · Bengaluru, Karnataka</span></div></div></footer>;
}

function Index() {
  return (
    <div className="ef-page">
      <Helmet>
        <title>EasyFind | Rent, Manage & Care for Property in East Bengaluru</title>
        <meta name="description" content="EasyFind helps people find homes and helps property owners manage what matters—with a clear point of contact and practical support." />
        <link rel="canonical" href="https://www.easyfindprops.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org","@type":"RealEstateAgent","name":"EasyFind Property Solutions","legalName":"EASYFIND REALTY SOLUTIONS PRIVATE LIMITED",
          "url":"https://www.easyfindprops.com/","logo":"https://www.easyfindprops.com/easyfind-logo.jpg","image":"https://www.easyfindprops.com/og-image.jpg",
          "telephone":"+919148338801","email":"info@easyfindprops.com","areaServed":["Bellandur","Whitefield","HSR Layout","Marathahalli","Sarjapur Road","Koramangala"],"sameAs":["https://maps.app.goo.gl/aFny22T8D57v5dzK8"]
        })}</script>
      </Helmet>
      <Header />
      <main><Hero/><Services/><Areas/><Reviews/><WhyEasyFind/><ProofStrip/><HowItWorks/><FAQ/><Contact/></main>
      <Footer />
    </div>
  );
}
