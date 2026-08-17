# Mosaïque Web Agent Protocol

## Starting a new session

Before changing code:

1. Read this file.
2. Read `docs/ROADMAP.md`.
3. Read the documentation relevant to the roadmap's `Current` phase.
4. Inspect the affected code and its consumers.
5. Confirm that the code matches the roadmap.
6. Run the base validations.
7. Only then begin implementation.

Code has priority over stale documentation. If code and `docs/ROADMAP.md` disagree, report the discrepancy and correct the roadmap before continuing.

## Architecture

The current hierarchy is:

```text
Design Tokens
  -> UI / Motion Primitives
  -> Interaction Patterns
  -> Sections
  -> Pages
```

Responsibilities:

- `src/content/`: what Mosaïque says. Business copy and semantic content models.
- `src/components/sections/`: how a page section composes content and primitives.
- `src/components/ui/`: small, reusable, content-agnostic representations.
- `src/components/motion/`: reusable behavior and motion orchestration.
- `src/pages/`: which sections participate and in what order.
- `src/styles/tokens/`: executable CSS design-token source of truth.
- `src/tokens/motion.ts`: synchronized runtime motion values for React/Motion.

Do not hardcode business copy in UI or motion primitives. Sections connect content to presentation and behavior.

## Technology principle

**Static by default, interactive by exception.**

- Use Astro for pages, layouts, sections, and static components.
- Use React islands only for interaction that needs client-side state or orchestration.
- The current React island is the Services `ScrollLinkedScene` consumer.
- Prefer CSS and native browser APIs for layout, sticky behavior, simple transitions, and local interactions.
- Use Motion for established React motion primitives and scroll-linked orchestration.
- Do not introduce GSAP or another dependency unless the current stack cannot express a confirmed requirement.
- Preserve native scrolling and prefer `transform` and `opacity` for animated changes.

## Required workflow

Every product phase follows this sequence:

```text
INSPECT
  -> COMPARE
  -> IMPLEMENT
  -> VISUAL VALIDATION
  -> FIDELITY PASS
  -> RESPONSIVE VALIDATION
  -> TECHNICAL VALIDATION
  -> UPDATE ROADMAP
  -> STOP
```

Work one phase at a time. Do not automatically start the next section after completing the current phase.

## Fidelity

Movra is the primary reference for behavior and composition. Mosaïque keeps its own branding, copy, colors, typography, and photography.

`Implementation complete` and `Fidelity complete` are separate states. A section is not fidelity-complete merely because it compiles, is responsive, has no overflow, or resembles the reference conceptually.

When screenshots or recordings are available, compare:

- composition and proportions;
- viewport occupation and spacing;
- typography and media roles;
- layering and sticky boundaries;
- motion and scroll states;
- transitions between sections.

Use `docs/MOVRA_REFERENCE.md` for reference behavior and `docs/PATTERNS.md` for Mosaïque-owned interaction patterns.

## Architectural constraints

- Do not make preventive refactors.
- Do not create abstractions for hypothetical reuse.
- Do not add dependencies without a demonstrated need.
- Do not modify a shared pattern to solve a local section problem unless the pattern is actually at fault.
- Do not rebuild validated sections without a regression or explicit requirement.
- Preserve unrelated working-tree changes and never revert user changes.
- Keep media replaceable while approved assets remain pending; do not invent image paths.
- Keep content modules presentation-agnostic.

## Documentation map

- `docs/ROADMAP.md`: implementation status and next authorized phase.
- `docs/DESIGN_SYSTEM.md`: visual foundation, tokens, typography, layout, motion, accessibility, and performance principles.
- `docs/PATTERNS.md`: reusable interaction ownership and boundaries.
- `docs/MOVRA_REFERENCE.md`: external fidelity targets and behavior analysis.
- `docs/CONTENT.md`: business-source-to-application-content workflow.

Consult the relevant document; do not duplicate its full rules elsewhere.

For Astro framework work, use the official documentation at `https://docs.astro.build` and consult the relevant routing, components, framework islands, content, styling, or internationalization guide.

## Development

Install and run commands from the repository root with `pnpm`.

Start the development server in background mode:

```sh
pnpm dev
```

The script runs `astro dev --background`. Manage it with:

```sh
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

## Validation

For each phase, validate when applicable:

- desktop;
- tablet;
- mobile;
- `prefers-reduced-motion`;
- horizontal and vertical overflow;
- browser console errors;
- initial, intermediate, and final scroll states.

Always run:

```sh
pnpm build
pnpm lint
pnpm typecheck
git diff --check
```

## Completing a phase

At the end of a phase:

1. Report modified files.
2. Explain important decisions.
3. Report implementation and fidelity status separately.
4. Report responsive and reduced-motion validation.
5. Report technical validation results.
6. Update `docs/ROADMAP.md` in the same change when project status changed.
7. Show the summarized roadmap with status emojis.
8. Stop. Do not begin `Next` automatically.

Modify this `AGENTS.md` only when the project's architecture, working method, or permanent rules actually change. Do not update it after every section.
