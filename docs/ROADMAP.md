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

### SEO / Metadata Baseline

- **Implementation: partial baseline complete.** Spanish document language, page title, description, viewport metadata, and favicons are present.
- Full SEO work remains pending.

## Current

### Projects / Experiences - Fidelity Pass

- **Implementation: complete.** `Projects.astro` renders the five modeled experiences after Services with an Astro-first, manually controlled horizontal carousel.
- Native scroll snap preserves touch and trackpad interaction; local progressive enhancement adds previous/next controls, keyboard arrows, active-state announcements, and bounded control states without adding a dependency or React island.
- Desktop, tablet, mobile, page-overflow, browser-console, and initial/intermediate/final control states were validated. The reduced-motion fallback was verified in code; replaceable abstract panels remain in place while approved project photography is pending.
- **Fidelity Pass: not started.** Compare composition, project-media role, controls, viewport usage, manual interaction, responsive behavior, and reduced motion against supplied Movra references.

## Next

### Metrics - Implementation

- **Status: not started.** Content exists only in `src/content/home/metrics.ts`.
- Inspect the content, Movra bento-metrics reference, available primitives, and approved media status before implementation.

## Pending

### Why Choose Us

- **Implementation: not started.** Content exists only in `src/content/home/whyChooseUs.ts`.
- **Fidelity Pass: not started.**

### Marquee

- **Implementation: not started.** Content exists only in `src/content/home/marquee.ts`.
- **Fidelity Pass: not started.** CSS motion and reduced-motion behavior must be evaluated when implemented.

### Process

- **Implementation: not started.** Content exists only in `src/content/home/process.ts`.
- **Fidelity Pass: not started.** The Movra sticky-process behavior is a reference, not yet product code.

### Testimonials

- **Implementation: not started.** Content exists only in `src/content/home/testimonials.ts`.
- **Fidelity Pass: not started.**

### Values / Spotlights

- **Implementation: not started.** Content exists only in `src/content/home/values.ts`.
- **Fidelity Pass: not started.** Movra spotlight/floating-card behavior remains a reference.

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

- Approved production photography is unavailable. Hero, About/Milestones, Services, and Projects currently use lightweight replaceable placeholders.
- Approved self-hosted Cinzel and Montserrat font files are pending; see `docs/DESIGN_SYSTEM.md`.
- Services intentionally remains `client:load`; changing hydration strategy is deferred until an explicit performance phase.
- `README.md` remains the Astro starter README. New sessions should use `AGENTS.md` and this roadmap for project-specific guidance.
- Media models for future sections must not invent asset paths while approved assets are unavailable.
