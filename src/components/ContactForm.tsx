import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { NAVY, GOLD } from "@/routes/index";
import { submitLead } from "@/lib/submitLead";

const serviceGuidance: Record<string, { areaLabel:string; areaPlaceholder:string; propertyLabel:string; propertyPlaceholder:string; detailsLabel:string; detailsPlaceholder:string; helper:string }> = {
  "Find a property": {
    areaLabel:"Preferred area", areaPlaceholder:"Area or neighbourhood",
    propertyLabel:"Budget and property preferences", propertyPlaceholder:"Budget, property type, bedrooms...",
    detailsLabel:"Move-in timing and requirements", detailsPlaceholder:"Tell us when you need to move and what matters most",
    helper:"Share the area, budget, and move-in timeline you are considering.",
  },
  "Rent out my property": {
    areaLabel:"Property area", areaPlaceholder:"Where is the property located?",
    propertyLabel:"Property details", propertyPlaceholder:"Property type, bedrooms, furnishing...",
    detailsLabel:"Rent-out timing and requirements", detailsPlaceholder:"Tell us when it will be available and what support you need",
    helper:"Share the location, property basics, and when you want to rent it out.",
  },
  "Manage my property": {
    areaLabel:"Property location", areaPlaceholder:"Area or neighbourhood",
    propertyLabel:"Current property details", propertyPlaceholder:"Property type, occupancy, current status...",
    detailsLabel:"Management support needed", detailsPlaceholder:"Tell us what needs coordinating and how we can help",
    helper:"Share the location and the coordination you need.",
  },
  "Prepare and care for my property": {
    areaLabel:"Property location", areaPlaceholder:"Area or neighbourhood",
    propertyLabel:"Work or property details", propertyPlaceholder:"Property type, current condition, scope...",
    detailsLabel:"Preparation or care required", detailsPlaceholder:"Tell us what needs arranging and your preferred timing",
    helper:"Share what needs preparing, checking, repairing, or coordinating.",
  },
};

const ContactForm: React.FC<{onPrivacyClick:()=>void}> = ({onPrivacyClick}) => {
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [requirement,setRequirement]=useState("");
  const [location,setLocation]=useState("");
  const [budget,setBudget]=useState("");
  const [details,setDetails]=useState("");
  const [isSubmitting,setIsSubmitting]=useState(false);
  const [succeeded,setSucceeded]=useState(false);
  const [error,setError]=useState<string|null>(null);

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    if(isSubmitting) return;
    const trimmedName=name.trim();
    const digits=phone.replace(/\D/g,"");
    if(!trimmedName){setError("Please enter your name.");return;}
    if(digits.length!==10){setError("Please enter a valid 10-digit mobile number.");return;}
    if(!requirement){setError("Please select how we can help.");return;}
    setError(null); setIsSubmitting(true);
    try{
      const res=await submitLead({name:trimmedName,phone:"+91 "+digits,requirement,location:location.trim(),budget:budget.trim(),details:details.trim(),source:"Website Hero Form"});
      if(res.success){setSucceeded(true);setName("");setPhone("");setRequirement("");setLocation("");setBudget("");setDetails("");}
      else setError(res.error||"Something went wrong. Please try again or call us.");
    }catch(err){console.error("Hero form submission failed:",err);setError("Something went wrong. Please try again or call us.");}
    finally{setIsSubmitting(false);}
  };

  const inputBase="w-full min-h-11 rounded-xl border bg-white px-3.5 py-3 text-sm text-slate-900 shadow-none outline-none transition focus:border-brand-gold/80 focus:ring-2 focus:ring-brand-gold/20 disabled:opacity-60";
  const guidance=serviceGuidance[requirement];

  if(succeeded) return (
    <div className="rounded-2xl border border-brand-border bg-white p-7 text-center shadow-sm" role="status" aria-live="polite">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f3f7f4] text-[#3c7a52]"><CheckCircle2 size={28}/></div>
      <h3 className="font-serif text-xl font-semibold text-brand-navy">Thank you — we received your enquiry.</h3>
      <p className="mt-3 text-sm leading-6 text-brand-muted">We aim to acknowledge enquiries within one business day. If you need to add context, WhatsApp us using the contact option on this page.</p>
      <button type="button" onClick={()=>setSucceeded(false)} className="mt-6 min-h-11 rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white">Send another enquiry</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full rounded-2xl border border-brand-border bg-white p-5 shadow-sm sm:p-6" aria-label="Talk to our expert">
      <div className="border-b border-brand-border pb-4">
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-brand-gold">Start here</p>
        <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-brand-navy">Tell us what you need.</h3>
        <p className="mt-2 text-sm leading-6 text-brand-muted" aria-live="polite">{guidance?.helper ?? "Choose a service and we’ll tailor the questions to your requirement."}</p>
      </div>
      <div className="space-y-4 pt-5">
        <div><label htmlFor="hero-name" className="mb-1.5 block text-xs font-semibold text-brand-text">Name <span className="text-[#a33]">*</span></label><input id="hero-name" type="text" autoComplete="name" value={name} onChange={e=>setName(e.target.value)} onBlur={e=>setName(e.target.value.trim())} disabled={isSubmitting} required aria-required="true" className={inputBase}/></div>
        <div><label htmlFor="hero-phone" className="mb-1.5 block text-xs font-semibold text-brand-text">Phone Number <span className="text-[#a33]">*</span></label>
          <div className="flex items-stretch gap-2">
            <span className="inline-flex min-w-14 items-center justify-center rounded-xl border border-brand-border bg-brand-surface px-3 text-sm font-semibold text-brand-text">+91</span>
            <input id="hero-phone" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={10} placeholder="10-digit mobile" value={phone} onChange={e=>{const val=e.target.value.replace(/\D/g,"").slice(0,10);if(val!==phone)setPhone(val);}} disabled={isSubmitting} required aria-required="true" className={inputBase}/>
          </div>
        </div>
        <div><label htmlFor="hero-requirement" className="mb-1.5 block text-xs font-semibold text-brand-text">How can we help? <span className="text-[#a33]">*</span></label>
          <select id="hero-requirement" value={requirement} onChange={e=>setRequirement(e.target.value)} disabled={isSubmitting} required aria-required="true" className={inputBase}><option value="">Select a service...</option><option>Find a property</option><option>Rent out my property</option><option>Manage my property</option><option>Prepare and care for my property</option></select>
        </div>
        <div><label htmlFor="hero-location" className="mb-1.5 block text-xs font-semibold text-brand-text">{guidance?.areaLabel ?? "Preferred area"}</label><input id="hero-location" type="text" autoComplete="address-level2" placeholder={guidance?.areaPlaceholder ?? "Area or neighbourhood"} value={location} onChange={e=>setLocation(e.target.value)} disabled={isSubmitting} className={inputBase}/></div>
        <div><label htmlFor="hero-budget" className="mb-1.5 block text-xs font-semibold text-brand-text">{guidance?.propertyLabel ?? "Budget or property details"}</label><input id="hero-budget" type="text" placeholder={guidance?.propertyPlaceholder ?? "Budget, property type, bedrooms..."} value={budget} onChange={e=>setBudget(e.target.value)} disabled={isSubmitting} className={inputBase}/></div>
        <div><label htmlFor="hero-details" className="mb-1.5 block text-xs font-semibold text-brand-text">{guidance?.detailsLabel ?? "What would you like help with?"}</label><textarea id="hero-details" rows={3} placeholder={guidance?.detailsPlaceholder ?? "Tell us what you need and any timing or urgency"} value={details} onChange={e=>setDetails(e.target.value)} disabled={isSubmitting} className={inputBase+" resize-y"}/></div>
        {error && <p className="text-sm font-medium text-[#a33]" role="alert">{error}</p>}
        <button type="submit" disabled={isSubmitting} className="min-h-12 w-full rounded-full bg-brand-navy px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-navy-deep disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting?"Sending...":"Submit enquiry"}</button>
        <p className="text-center text-xs leading-5 text-brand-muted">By submitting, you agree to our <button type="button" onClick={onPrivacyClick} className="font-semibold text-brand-navy underline decoration-brand-gold underline-offset-2">Privacy Policy</button>.</p>
      </div>
    </form>
  );
};

export default ContactForm;
