# Consolidated Quality Review — Evidence-Backed Improvement Backlog

Date: 2026-10-05
Branch: development
Status: working execution backlog

## Purpose

This document consolidates the supplied EasyFind search-quality, E-E-A-T, trust, UX and technical reviews into one execution backlog.

The reviews agree that the development version is materially stronger in information architecture and East Bengaluru local framing, but still lacks sufficient verifiable first-hand experience, identifiable expertise, independent authority and visible business accountability.

This backlog deliberately rejects recommendations that conflict with the approved EasyFind positioning. EasyFind remains an enquiry-led property support business, not a live listings marketplace, investment adviser, generic broker directory, or business making unsupported guarantees.

## Evidence rule

No implementation should be made from an audit claim alone when the claim can be checked in the repository, development deployment, production deployment, official business records, official regulatory sources, or another authoritative source.

For each item:
- VERIFY = establish the underlying fact first.
- IMPLEMENT = change only after the fact is established.
- USER INPUT = stop and ask if the truth cannot be established from available sources/tools.

Do not invent people, credentials, RERA status, ratings, reviews, client counts, deal counts, prices, market ranges, case studies, timelines, partnerships or local claims.

## Consolidated priority backlog

### Set 1 — Technical truth and deployment hygiene
1. Verify production and development crawlability/rendering using served HTML, route status, canonical, sitemap and robots.
2. Verify whether development is indexable. If true, prevent development indexing without affecting production.
3. Verify that production-only canonical/sitemap signals are not incorrectly emitted from development.
4. Verify all important routes return 200 and have unique metadata.
5. Verify whether critical content is present in generated HTML; do not rebuild architecture unless evidence requires it.
6. Verify and correct sitemap/robots/canonical relationships.
7. Verify structured data placement and completeness.
8. Re-test development after fixes.

### Set 2 — Business identity, history and regulatory truth
9. Establish the factual operating-history timeline versus April 2026 incorporation.
10. Establish the correct legal/trading name, registered office, phone, email and service-area presentation.
11. Establish EasyFind's actual Karnataka/K-RERA position for each service offered.
12. Only after verification, publish the correct regulatory explanation/registration.
13. Surface accountable person/contact and complaint escalation information.

### Set 3 — Authentic experience proof
14. Identify genuine completed work that can legally/ethically be published.
15. Build 3–5 evidence-backed case studies from real work only.
16. Add original property/work photography where permission exists.
17. Replace hypothetical examples where real evidence can be shown.
18. Add responsible person attribution to genuine work.

### Set 4 — Expertise and authority
19. Establish named authors/reviewers and their real qualifications/experience.
20. Add methodology/source notes to guides.
21. Add primary-source links for BBMP/Metro/infrastructure claims.
22. Establish genuine third-party authority signals.
23. Verify Google Business Profile review/rating information before displaying any number.
24. Add an About/Trust layer based only on verified facts.

### Set 5 — Local evidence
25. Strengthen the four existing cluster pages with dated practical evidence.
26. Add local market/rent information only where a defensible source/method exists.
27. Add current practical notes with dates and source/methodology.
28. Avoid scaled/thin locality pages.
29. Connect each cluster guide to the relevant customer journey.

### Set 6 — Search intent and conversion
30. Create only the service landing pages supported by actual EasyFind services.
31. Improve the non-listing-portal explanation with a useful alternative path.
32. Replace generic CTAs with route-specific outcomes.
33. Reduce hero CTA competition.
34. Review enquiry form friction and data handling.
35. Prefer an on-domain enquiry experience if technically and operationally justified.

### Set 7 — UX, visual and performance QA
36. Verify map rendering on real browser/device conditions.
37. Verify mobile CTA placement.
38. Check hero image performance and LCP.
39. Verify all internal links and CTA destinations.
40. Perform desktop/tablet/mobile visual QA after each related set.

## Explicitly rejected unless new evidence changes the decision

- Building a live inventory marketplace merely to satisfy transactional search queries.
- Publishing invented property listings, prices, rent yields, deal counts, timelines or client counts.
- Claiming RERA registration without verification.
- Publishing fabricated reviews, testimonials, partnerships or credentials.
- Creating large numbers of thin locality pages.
- Rebuilding the site architecture solely because a crawler failed to execute JavaScript.
- Adding unsupported guarantees such as fixed response-to-shortlist times or guaranteed outcomes.

## Execution protocol

Work chronologically in small sets.

For each set:
1. Establish facts.
2. Implement only verified changes on development.
3. Build/deploy development.
4. Test affected routes and devices.
5. Record evidence and remaining uncertainty.
6. Present the set for review before moving to unrelated work when the result materially changes the site.

Production/main remains untouched until explicit approval.

## Current known evidence

- Development Render service: `srv-db19vcvavr4c73auv3c0`
- Development branch: `development`
- Production branch: `main`
- Current repository uses Vite + React/TanStack Router.
- Current `vite.config.ts` already generates route-specific static HTML files, sitemap.xml and robots.txt during build.
- Current generated robots configuration allows all crawlers and points to the production sitemap URL.
- Current root HTML is an SPA shell, while the build plugin creates static route HTML after Vite build.
- Current root runtime metadata includes a production canonical.
- These technical facts must be verified against the served development deployment before deciding whether a rendering/rebuild change is necessary.

## Set 1 execution record — Technical truth and deployment hygiene

### Verified before change
- The repository is a Vite + React/TanStack Router application.
- `vite.config.ts` already creates route-specific static HTML files for the declared pages during build. Therefore a full framework rebuild/SSR migration was **not** justified by the supplied crawler complaints alone.
- The build already creates `robots.txt` and `sitemap.xml`.
- Before this set, the generated robots policy was indexable and explicitly pointed to the production sitemap.
- The development Render service is correctly attached to the `development` branch.

### Implemented
- Added environment-aware indexing control to the Vite static-page generation.
- Development Render now has `VITE_SITE_INDEXABLE=false`.
- Development builds now emit `noindex,nofollow,noarchive` on generated route HTML and `Disallow: /` in development `robots.txt`.
- Production behaviour remains indexable by default unless the production environment explicitly sets the variable to false.
- No `main` or production Render changes were made.

### Deployment evidence
- Development commit: `88ea7c6f82e7687a0335522db2cb74650a6c6a57`
- Development deployment: `dep-db1cnvekemhc73fat0m0`
- Deployment status: live
- Development service: `srv-db19vcvavr4c73auv3c0`

### Remaining verification
The current tool session cannot directly fetch the Render subdomain response body, so served-header/response verification of the deployed `robots.txt` and HTML meta tag remains an explicit verification item. The code path and Render environment are established; the final HTTP-level check must be completed when a browser/fetch surface can access the deployment.

## Source basis

This backlog is derived from the supplied EasyFind quality reviews and the project source-of-truth instructions. Conflicting recommendations have been retained only as verification questions, not as facts.

