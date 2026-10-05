import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  CheckList,
  ContactLinks,
  ContactStrip,
  InformationFooter,
  InformationHeader,
  PageIntro,
} from "../components/InformationPage";

export const Route = createFileRoute("/customer-protection")({ component: CustomerProtection });

function CustomerProtection() {
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#223044]">
      <InformationHeader />
      <PageIntro
        eyebrow="A clearer way to work with EasyFind"
        title="Know what happens before you say yes."
      >
        <p>
          This page explains our service scope, fees, documents, payment steps, and escalation
          route. We want the next step to be clear before any work or payment begins.
        </p>
      </PageIntro>
      <main className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="font-serif text-3xl font-semibold leading-tight text-[#23435f]">
            Clear expectations protect everyone.
          </p>
          <p className="mt-4 leading-relaxed text-[#667384]">
            Whether you are finding a home, renting out a property, or asking us to coordinate
            property care, you should know what we do, what we do not guarantee, and what happens
            next.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <InfoCard title="Before any payment">
            <CheckList
              items={[
                "The requirement and relevant property details are shared in writing.",
                "The fee, timing, and any applicable third-party cost are confirmed before work begins.",
                "The recipient, payment purpose, amount, and receipt are clear.",
                "Any token or advance terms, including cancellation or refund conditions, are recorded in writing.",
              ]}
            />
          </InfoCard>
          <InfoCard title="What EasyFind coordinates">
            <CheckList
              items={[
                "Enquiries, visits, and communication with the relevant parties.",
                "Agreed documentation follow-up and practical next steps.",
                "Handover, inspection, readiness, and update coordination where included in scope.",
                "Vendor work only within the scope and approval agreed with the owner or customer.",
              ]}
            />
          </InfoCard>
          <InfoCard title="What we do not guarantee">
            <CheckList
              items={[
                "Property availability, final price, landlord or tenant acceptance, or transaction completion.",
                "The actions of a landlord, tenant, vendor, society, government office, or other third party.",
                "Legal, tax, valuation, or title advice. Seek independent professional advice where needed.",
              ]}
            />
          </InfoCard>
          <InfoCard title="If something needs attention">
            <CheckList
              items={[
                "Write to info@easyfindprops.com with the requirement, payment or enquiry reference, and the issue.",
                "We will acknowledge the concern and explain the next action or the responsible party.",
                "Keep copies of quotes, receipts, approvals, messages, and the final agreement.",
              ]}
            />
          </InfoCard>
        </div>
        <section className="mt-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
            For property owners
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#23435f]">
            Agree the management scope first.
          </h2>
          <p className="mt-4 leading-relaxed text-[#667384]">
            If you ask EasyFind to manage or care for a property, the written scope should set out
            the update rhythm, inspection or access expectations, maintenance approvals, vendor
            coordination, escalation route, records, fees, and how the arrangement can end.
          </p>
        </section>
        <ContactStrip />
        <ContactLinks />
        <p className="mt-8 text-xs leading-relaxed text-[#667384]">
          Last updated: October 2026. This page is general service information, not legal advice. A
          specific engagement is governed by the terms agreed for that engagement.
        </p>
      </main>
      <InformationFooter />
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-[#e4e8ed] bg-white p-6 shadow-sm md:p-7">
      <h2 className="font-serif text-2xl font-semibold text-[#23435f]">{title}</h2>
      {children}
    </section>
  );
}
