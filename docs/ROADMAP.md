# Mosaïque Web Roadmap

Last verified against code and git history: 2026-08-18.

This document is the source of truth for implementation status. The existence of a module in `src/content/home/` does not mean its section has been implemented.

## Completed

### Foundation

- **Implementation: complete.** Astro static site foundation, React integration, Tailwind token consumption, linting, type checking, and production build are configured.
- **Validation: complete for the current implemented surface.** Build, lint, typecheck, and diff-check have passed during completed phases.

### Design System

- **Implementation: complete for the current foundation.** Primitive and semantic color, typography, spacing, layout, z-index, and motion tokens exist in `src/styles/tokens/`.
- CSS and TypeScript runtime motion tokens are documented and synchronized.
- UI primitives exist for Button, Container, Grid, Heading, Media, Section, Stack, and Text.
- Motion primitives exist for Reveal, StaggerText, MediaCrossfade, StickyScene, PanelReveal, and ScrollLinkedScene.
- **Production asset completion: deferred.** Approved self-hosted Cinzel and Montserrat files are still pending.

### Content Foundation

- **Implementation: complete.** `base_content.txt` is the business input; typed executable content lives in `src/content/home/`.
- Content modules exist for navigation, hero, about, milestones, metrics, why choose us, marquee, services, projects, process, testimonials, values, FAQ, final CTA, and footer.
- Only implemented sections consume their modules. Content-only modules are not treated as rendered product work.

### Navigation

- **Implementation: complete.** Astro navigation with contact action, centered brand, semantic menu disclosure, keyboard Escape handling, and outside-click close behavior.
- **Fidelity Pass: complete.** Composition and Hero integration were compared against Movra reference states.
- Responsive mobile compaction is implemented.

### Hero

- **Implementation: complete.** Full-viewport media scene, initial title and CTA, scroll-linked brand-to-topbar morph, sticky handoff, replaceable media contract, and a CSS-only PanelReveal handoff into About.
- **Fidelity Pass: complete.** Initial, intermediate, final, and section-handoff states were compared against screenshots and recordings.
- Desktop, tablet, mobile, and reduced-motion states were validated.

### About

- **Implementation: complete.** Rendered through `AboutMilestones.astro` from `src/content/home/about.ts`; the section remains in normal flow while revealing over the temporarily sticky Hero.
- **Fidelity Pass: complete.** The two-column editorial composition, viewport proportions, divider, sticky media, and responsive reading order were compared against the Movra recording.

### Milestones

- **Implementation: complete.** Five semantic timeline items render from `src/content/home/milestones.ts`.
- **Fidelity Pass: complete.** Desktop label/description rows, sticky-media relationship, tablet split, and mobile linear flow were validated.

### Services

- **Implementation: complete.** StickyServices, ServicesScene, PanelReveal, and the neutral ScrollLinkedScene pattern are integrated. ServicesIntro was removed from the page; Marquee remains an independent preceding section while a panel-only overlap lets Services reveal over its final viewport.
- **Fidelity Pass: complete.** Section overlap, sticky media, seven service states, scroll pacing, responsive behavior, and reduced motion were validated.
- React is limited to the interactive Services scene and hydrates with `client:visible`.

### Projects / Experiences

- **Implementation: complete.** Five project categories render from `src/content/home/projects.ts` in an Astro section.
- **Fidelity Pass: complete.** Desktop now follows the Movra editorial split with project context and manual controls beside a portrait-media carousel; tablet and mobile use static two-column and single-column reading flows.
- The desktop carousel uses native horizontal scrolling, scroll snap, touch/keyboard scrolling, accessible previous/next controls, announced active state, and no automatic advance.
- Placeholder media remains lightweight and replaceable while approved photography is pending.
- Desktop, tablet, mobile, reduced-motion behavior, overflow, and all five navigation states were validated.

### Metrics

- **Implementation: complete.** Three active metrics render from `src/content/home/metrics.ts` inside `AboutMilestones.astro`, immediately after the milestone list rather than as a standalone page section.
- **Fidelity Pass: complete.** The existing sticky About media accompanies the metric tiles, the redundant Metrics media placeholder was removed, and the responsive composition follows the supplied Movra reference.
- Numeric values count from zero once when the block enters the viewport using IntersectionObserver, requestAnimationFrame, and the shared runtime motion duration; reduced motion preserves final values without animation.
- Desktop, tablet, mobile, overflow, count states, content completeness, and reduced-motion behavior were validated.

### Why Choose Us

- **Implementation: complete.** Four numbered reasons render from `src/content/home/whyChooseUs.ts` in a static Astro section positioned after About/Milestones according to the Content Foundation.
- The section uses a quiet editorial proof band with semantic articles, four columns on desktop, two columns on tablet, and a linear mobile flow.
- **Fidelity Pass: complete.** Desktop uses the Movra proof-band hierarchy with centered icon-led items, compact utility labels, body-led descriptions, lower vertical density, and vertical dividers between four columns without a visible section title.
- Compact desktop and tablet retain the two-column divided layout; mobile remains linear for readability.
- Desktop, desktop-minimum, tablet, mobile, overflow, content completeness, and the motion-free reduced-motion state were validated.

### Marquee

- **Implementation: complete.** A full-viewport Astro scene renders content from `src/content/home/marquee.ts` between Why Choose Us and Services.
- **Fidelity Pass: complete.** The scene enters through a three-step media reveal and remains sticky for a bounded scroll interval, while its oversized ticker runs independently as a token-driven CSS autoplay loop.
- The bounded reveal uses one passive scroll listener only while the scene is near the viewport, batches updates with requestAnimationFrame, and writes only transform and opacity styles without React hydration.
- Approved photography remains pending, so the full-bleed media contract currently renders a lightweight branded placeholder.
- Reduced motion removes the sticky scroll distance and staged reveal, hides the visual duplicate, and presents the statement and ticker as a static full-viewport composition.
- Desktop, tablet, mobile, document overflow, scroll-linked stability, section handoff, content duplication semantics, and reduced-motion behavior were validated.

### Process

- **Implementation: complete.** Five semantic steps render from `src/content/home/process.ts` after Projects / Experiences.
- **Fidelity Pass: complete.** Desktop follows the Movra editorial split with a bounded sticky media contract on the left, compact process rows on the right, and a quiet central divider.
- The Testimonials collection is integrated directly below the process steps in the right column, so the sticky Process media accompanies both content groups as one continuous composition.
- Tablet preserves the split while stacking each row's title and description; mobile removes the placeholder media and uses a single-column reading flow.
- The section remains Astro-only with CSS sticky and no React, JavaScript, scroll listeners, or active-state machinery.
- Reduced motion returns the media to normal document flow. Desktop, tablet, mobile, sticky boundaries, content completeness, and document overflow were validated.

### Testimonials

- **Implementation: complete.** Five semantic blockquotes render from `src/content/home/testimonials.ts` inside Process, immediately below its final step rather than as a standalone page section.
- **Fidelity Pass: complete.** Five alternating media/testimonial rows follow the supplied Movra composition, with a compact name above each quote.
- Desktop and tablet alternate one-third media and two-thirds testimonial panels; mobile preserves a consistent media-then-testimonial reading order.
- The section remains Astro-only and motion-free. Replaceable CSS media placeholders are used while approved photography is pending.
- Names, quotes, and the explicit content status remain provisional; the internal editorial note is not rendered to visitors.

### FAQ

- **Implementation: complete.** Eight native disclosure items render from `src/content/home/faq.ts` after Process.
- The section uses semantic `details` and `summary` elements, so pointer and keyboard interaction work without React, custom JavaScript, or event listeners.
- **Fidelity Pass: complete.** Desktop follows Movra's quiet split composition with a compact label and replaceable media contract in the left rail, a central divider, and a dense disclosure list on the right.
- Questions use compact sans-serif hierarchy and circular chevrons; answers open below their question without changing the native disclosure contract.
- Supporting browsers receive a token-driven CSS open/close transition through `::details-content`; other browsers retain immediate native disclosure behavior without JavaScript.
- Tablet and mobile remove the decorative media and use a constrained linear flow. Reduced motion removes the disclosure and chevron transitions while preserving immediate state changes.
- Desktop, tablet, mobile, pointer, keyboard, long-copy constraints, document overflow, and reduced-motion code paths were validated.

### Final CTA

- **Implementation: complete.** The closing section renders its title, supporting copy, two actions, and closing statement from `src/content/home/finalCta.ts` after FAQ.
- **Fidelity Pass: complete.** The composition follows Movra's closing rhythm with centered copy and actions above a continuously moving gallery at the lower edge.
- The gallery is a CSS-only infinite loop driven by the existing `--motion-marquee-duration` token, with two identical visual groups and no hover pause, JavaScript, listeners, or React hydration.
- Approved photography remains pending, so five replaceable CSS media states are duplicated only for visual continuity and remain hidden from assistive technology.
- Reduced motion stops the animation, removes the duplicate group, and presents three static media panels without changing content or actions.
- Desktop, tablet, mobile, loop movement, action constraints, content completeness, document overflow, and reduced-motion code paths were validated.

### Footer

- **Implementation: complete.** A semantic footer landmark renders brand, description, seven navigation links, six service labels, contact details, closing statement, and legal copy from `src/content/home/footer.ts` after `main`.
- **Fidelity Pass: complete.** Final CTA now hands off through a compact edge-padded visual strip into Movra's two-row footer composition: aligned 50/50 desktop grids, inset vertical dividers, full-width horizontal dividers, three navigation groups, the framed Mosaïque brand grid, contact CTA and verified contact details, a six-item service grid, and the closing copy at opposite lower edges.
- Desktop uses paired information bands, tablet stacks those bands, and mobile follows a linear reading order without introducing reference-only newsletter, partner brands, social links, or legal destinations.
- The footer is Astro-only and contains no runtime JavaScript or motion; reduced motion therefore preserves the same static experience.
- Handoff color, link destinations, mail link, content completeness, desktop, tablet, mobile, long-copy constraints, and document overflow were validated.

### QA - Full Regression

- **Status: complete.** The approved page surface was validated on the production build across desktop, tablet, and mobile.
- Section anchors, unique IDs, landmarks, horizontal overflow, Navigation focus containment and Escape behavior, Projects controls, FAQ disclosure semantics, Services hydration, Footer constraints, and runtime console output passed.
- Reduced-motion CSS and JavaScript paths were reviewed across every animated section; static sections remain motion-free.
- Values / Spotlights remains outside the approved regression scope pending business review.

### Performance - Audit

- **Status: baseline complete.** The production build ships approximately 27 KB gzip of initial HTML and CSS and approximately 96 KB gzip for the complete core payload after the interactive Services scene hydrates.
- Services now uses `client:visible`: its complete server-rendered content remains available immediately, while React and Motion hydration is deferred until the section approaches the viewport.
- Desktop and mobile confirmed that Services remains unhydrated at the top of the page, hydrates correctly on entry, preserves all seven states, and produces no runtime console errors or horizontal overflow.
- Scroll work remains bounded through passive listeners, requestAnimationFrame batching, IntersectionObserver, and transform/opacity updates. No additional runtime dependency was introduced.
- Final Lighthouse and field Core Web Vitals conclusions remain pending approved production imagery, self-hosted fonts, and a production deployment.

### Accessibility - Audit

- **Status: complete for the current implemented surface.** Document language, landmarks, heading hierarchy, accessible names, references, unique IDs, image alternatives, and hidden-content focus safety passed semantic review.
- A keyboard-visible skip link now targets the main content, the title-less Why Choose Us proof band retains a visually hidden section heading, and the Navigation menu preserves focus containment and Escape close behavior.
- Small accent text on light surfaces and the global focus indicator now use a dedicated contrast-safe semantic token; key Navigation actions meet a 44 px minimum target height.
- Services uses one dedicated polite live region for state changes instead of two competing announcements.
- Desktop, tablet, mobile, 320 px reflow, menu-open containment, document overflow, and reduced-motion code paths were validated. Final assistive-technology testing with real users remains part of production acceptance.

### SEO / Metadata

- **Implementation: complete for the current single-page surface.** Spanish document language, descriptive title, description, robots directives, Open Graph metadata, Twitter card metadata, favicons, and Organization JSON-LD are present.
- `SITE_URL` is the single production URL source. Canonical, `og:url`, the Organization URL, sitemap generation, and the sitemap reference in robots are emitted only when it is configured, preventing localhost or speculative domains from entering production metadata.
- The official Astro sitemap integration generates the sitemap index and page sitemap. `robots.txt` remains valid without a configured domain and adds the absolute sitemap URL when one exists.
- Social image tags remain intentionally absent until an approved production image is available.

## Current

### Deployment Sync / Verification

- **Status: initial Vercel deployment live.** `https://mosaique-web.vercel.app` responds successfully over HTTPS.
- The live deployment currently predates the completed SEO work: redeploy the current code and configure `SITE_URL` after the definitive public domain is confirmed, then verify canonical, robots, sitemap, metadata, and runtime behavior on the deployed revision.

## Next

### Business Asset Brief

- **Status: pending business instruction.** Obtain approved photography, self-hosted font files, social sharing artwork, and any final content decisions before the production asset pass.

## Pending

### Values / Spotlights

- **Status: deferred for business review.** The attempted implementation was fully removed; content remains only in `src/content/home/values.ts`.
- Revisit implementation and the Movra spotlight/floating-card reference only after business approval.

### Production Assets

- **Status: deferred pending business instruction.** Placeholder replacement, approved fonts, responsive image optimization, and social artwork will be completed when final assets are supplied.

### Storybook

- **Status: not started and not currently configured.** No Storybook dependency, stories, or build command exists.
- Add only under an explicit phase; it is not required for current section delivery.

### Vercel

- **Status: initial deployment complete.** The Vercel URL is live; synchronization of the current SEO revision, final domain configuration, and production acceptance checks remain pending.

## Known Issues / Deferred Decisions

- Approved production photography is unavailable. Hero, About/Milestones, Metrics, Marquee, Services, Projects, Process, Testimonials, FAQ, and Final CTA currently use lightweight replaceable placeholders.
- Approved self-hosted Cinzel and Montserrat font files are pending; see `docs/DESIGN_SYSTEM.md`.
- Approved social sharing artwork is pending; `og:image` and `twitter:image` should be enabled through the existing layout prop when it is delivered.
- The final public domain remains unconfirmed. Production must define `SITE_URL` before deployment acceptance so canonical and sitemap URLs are emitted.
- Services uses `client:visible`; preserve its server-rendered fallback and verify hydration again when production media is introduced.
- The working tree contained an uncommitted business-copy edit in `src/content/home/services.ts` when this roadmap was created. Preserve and review it before committing unrelated work.
- `README.md` remains the Astro starter README. New sessions should use `AGENTS.md` and this roadmap for project-specific guidance.
- Media models for future sections must not invent asset paths while approved assets are unavailable.
