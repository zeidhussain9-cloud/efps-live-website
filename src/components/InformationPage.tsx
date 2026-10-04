import { ArrowRight, Check, Mail, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";

const NAVY = "#23435f";
const GOLD = "#b89445";
const CREAM = "#f7f5ef";
const INK = "#223044";
const MUTED = "#667384";
const WHATSAPP = "https://wa.me/919148338801";
const CALL = "tel:+919148338801";

export function InformationHeader() {
  return (
    <header className="border-b border-brand-border bg-white">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-5 md:px-8">
        <a href="/" className="flex items-center gap-3">
          <img src="/easyfind-logo.webp" alt="EasyFind Property Solutions" className="h-8 w-auto sm:h-9" />
          <span className="hidden text-sm font-semibold text-brand-navy sm:inline">
            EasyFind Property Solutions
          </span>
        </a>
        <a
          href="/#contact"
          className="whitespace-nowrap text-sm font-semibold text-brand-navy underline underline-offset-4"
        >
          Start an enquiry
        </a>
      </div>
    </header>
  );
}

export function InformationFooter() {
  return (
    <footer className="border-t border-brand-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 text-sm sm:px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-semibold text-brand-navy">EasyFind Property Solutions</p>
          <p className="mt-1 text-xs text-brand-muted">
            Customer-facing brand of EASYFIND REALTY SOLUTIONS PRIVATE LIMITED.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-brand-navy">
          <a href="/guides/property-management-bengaluru" className="underline underline-offset-2">
            Property guides
          </a>
          <a href="/nri-property-management-bengaluru" className="underline underline-offset-2">
            NRI owner support
          </a>
          <a href="/legal/privacy" className="underline underline-offset-2">
            Privacy
          </a>
          <a href="/legal/terms" className="underline underline-offset-2">
            Terms
          </a>
          <a href="/legal/legal-notice" className="underline underline-offset-2">
            Legal notice
          </a>
          <a href="/" className="underline underline-offset-2">
            Back to home
          </a>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy px-5 py-16 text-white md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3c976]">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-base leading-relaxed text-[#e2eaee] md:text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}

export function ContactStrip({ label = "Have a question before you start?" }: { label?: string }) {
  return (
    <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-brand-border bg-[#e9eff1] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
      <div>
        <p className="font-serif text-2xl font-semibold text-brand-navy">{label}</p>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">
          Share the situation and we will help you identify the right next step.
        </p>
      </div>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white"
      >
        Talk to EasyFind <ArrowRight size={16} />
      </a>
    </div>
  );
}

export function ContactLinks() {
  return (
    <div className="mt-10 grid gap-3 sm:grid-cols-3">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 rounded-xl border border-brand-border ef-panel-soft p-4"
      >
        <MessageCircle size={18} style={{ color: "#176b3a" }} />
        <span className="text-sm font-semibold text-brand-navy">WhatsApp us</span>
      </a>
      <a
        href={CALL}
        className="flex items-center gap-3 rounded-xl border border-brand-border ef-panel-soft p-4"
      >
        <Phone size={18} style={{ color: NAVY }} />
        <span className="text-sm font-semibold text-brand-navy">Call EasyFind</span>
      </a>
      <a
        href="mailto:info@easyfindprops.com"
        className="flex items-center gap-3 rounded-xl border border-brand-border ef-panel-soft p-4"
      >
        <Mail size={18} style={{ color: GOLD }} />
        <span className="text-sm font-semibold text-brand-navy">Email us</span>
      </a>
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-brand-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check className="mt-0.5 shrink-0 text-brand-gold" size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export const pageStyles = {
  background: CREAM,
  ink: INK,
  muted: MUTED,
  navy: NAVY,
  gold: GOLD,
};
