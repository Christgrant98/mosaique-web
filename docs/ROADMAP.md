# Mosaïque Web Roadmap

Last verified against code and git history: 2026-08-17.

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

- **Implementation: complete.** Full-viewport media scene, initial title and CTA, scroll-linked brand-to-topbar morph, sticky handoff, and replaceable media contract.
- **Fidelity Pass: complete.** Initial, intermediate, final, and section-handoff states were compared against screenshots and recordings.
- Desktop, tablet, mobile, and reduced-motion states were validated.

### About

- **Implementation: complete.** Rendered through `AboutMilestones.astro` from `src/content/home/about.ts`.
- **Fidelity Pass: complete.** The two-column editorial composition, viewport proportions, divider, sticky media, and responsive reading order were compared against the Movra recording.

### Milestones

- **Implementation: complete.** Five semantic timeline items render from `src/content/home/milestones.ts`.
- **Fidelity Pass: complete.** Desktop label/description rows, sticky-media relationship, tablet split, and mobile linear flow were validated.

### Services

- **Implementation: complete.** ServicesIntro, PanelReveal, StickyServices, ServicesScene, and the neutral ScrollLinkedScene pattern are integrated.
- **Fidelity Pass: complete.** Sticky media, seven service states, panel transition, scroll pacing, responsive behavior, and reduced motion were validated.
- React is limited to the interactive Services scene and currently hydrates with `client:load`.

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

### SEO / Metadata Baseline

- **Implementation: partial baseline complete.** Spanish document language, page title, description, viewport metadata, and favicons are present.
- Full SEO work remains pending.

## Current

### Values / Spotlights - Implementation

- **Status: not started.** Content exists only in `src/content/home/values.ts`.
- Do not modify other validated sections during this phase.

## Next

### Values / Spotlights - Fidelity Pass

- **Status: blocked by implementation.** Movra spotlight/floating-card behavior remains the reference.

## Pending

### FAQ

- **Implementation: not started.** Content exists only in `src/content/home/faq.ts`.
- **Fidelity Pass: not started.** Use semantic disclosure before custom scripting.

### Final CTA

- **Implementation: not started.** Content exists only in `src/content/home/finalCta.ts`.
- **Fidelity Pass: not started.** Looping media behavior must include a reduced-motion alternative.

### Footer

- **Implementation: not started.** Content exists only in `src/content/home/footer.ts`.
- **Fidelity Pass: not started.**

### Storybook

- **Status: not started and not currently configured.** No Storybook dependency, stories, or build command exists.
- Add only under an explicit phase; it is not required for current section delivery.

### Performance

- **Status: pending full audit.** Static-first architecture and bounded hydration are in place, but Lighthouse/Core Web Vitals validation has not been completed.
- Approved and optimized production imagery is still required for meaningful LCP validation.

### Accessibility

- **Status: pending full audit.** Semantic markup, focus styles, keyboard navigation, and reduced-motion handling exist on implemented sections.
- Full keyboard, screen-reader, contrast, zoom, and automated accessibility regression checks remain pending.

### SEO / Metadata

- **Status: pending beyond baseline.** Social metadata, canonical strategy, structured data, production URLs, sitemap/robots decisions, and final content review have not been completed.

### QA

- **Status: pending full regression.** Section-level visual and technical validation has been performed.
- No automated unit, integration, end-to-end, or visual-regression suite is configured.

### Vercel

- **Status: not configured.** No repository Vercel project metadata, deployment configuration, or deployment workflow is present.

## Known Issues / Deferred Decisions

- Approved production photography is unavailable. Hero, About/Milestones, Metrics, Marquee, Services, Projects, and Process currently use lightweight replaceable placeholders.
- Approved self-hosted Cinzel and Montserrat font files are pending; see `docs/DESIGN_SYSTEM.md`.
- Services intentionally remains `client:load`; changing hydration strategy is deferred until an explicit performance phase.
- The working tree contained an uncommitted business-copy edit in `src/content/home/services.ts` when this roadmap was created. Preserve and review it before committing unrelated work.
- `README.md` remains the Astro starter README. New sessions should use `AGENTS.md` and this roadmap for project-specific guidance.
- Media models for future sections must not invent asset paths while approved assets are unavailable.
