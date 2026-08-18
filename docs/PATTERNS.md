# Mosaïque Interaction Patterns

This document defines reusable interaction and composition patterns owned by Mosaïque. Visual foundations and motion rules live in `DESIGN_SYSTEM.md`; external reference analysis and fidelity notes live in `MOVRA_REFERENCE.md`.

Patterns should be promoted here only after a real section demonstrates a reusable need. The governing principle is: generalize from evidence, not imagination.

## Scroll-Linked Scene

### Relationship

```text
SCROLL
   ↓
PROGRESS
   ↓
ACTIVE ITEM
   ├── INDEX
   ├── COPY
   └── MEDIA
```

### Purpose

Scroll-Linked Scene coordinates a bounded editorial sequence in which the reader's scroll position selects an active item and keeps its content and media states synchronized. It preserves native scrolling and keeps every item available in the document flow.

The pattern originated in the study of Movra's scroll storytelling, but it is now part of Mosaïque's internal interaction language. Movra remains a fidelity reference, not an implementation dependency.

### When to use

Use this pattern when a real content sequence needs a persistent visual context and a clearly synchronized active state. It is appropriate when advancing through copy should update an index, media state, or another directly related representation.

### When not to use

Do not use it for ordinary stacked content, decorative motion, short lists that do not benefit from synchronization, or experiences where sticky behavior harms reading order. It should not be used to trap scroll, hide information, or reproduce a desktop composition on small screens at the expense of natural reading.

### Primitive responsibilities

`ScrollLinkedScene` is a small React island responsible for:

- observing the bounded scene's normalized scroll progress;
- determining the active item from the visible content blocks;
- exposing the active item and index to synchronized renderers;
- exposing progress through `--scroll-linked-progress` without rerendering on every scroll update.

The primitive understands items and synchronized rendering only. It does not know Services, business content, visual hierarchy, media dimensions, typography, spacing, or sticky layout.

### Consumer responsibilities

The consumer owns:

- content and item identifiers;
- semantic markup and accessible labels;
- copy, index formatting, and media rendering;
- section layout, sticky boundaries, responsive composition, and visual transitions;
- the meaning communicated by active and inactive states.

Services is the first consumer. Its section layer supplies service data, renders the copy and placeholder media, and owns every `services-spike` class. After removing ServicesIntro from the page, Marquee remains an independent preceding section while the neutral Astro `PanelReveal` primitive gives Services a panel-only overlap across the final viewport. Services retains its own sticky-media behavior inside that revealed panel.

### Responsive behavior

The interaction state may remain synchronized at every viewport, but the composition adapts to the reading context. The current Services consumer uses sticky media from tablet widths upward. On mobile, media remains relative and content follows the natural document flow without artificial viewport-height steps or forced sticky takeover.

Responsive layout belongs to each consumer because column proportions, media ratios, spacing, and sticky thresholds are composition decisions rather than orchestration concerns.

### Reduced motion

The active item, copy, index, and media remain available when `prefers-reduced-motion: reduce` is enabled. Consumers remove non-essential transitions and transforms while preserving immediate state changes. Information must never depend exclusively on animation.

### Performance considerations

- Keep the island bounded to the interactive scene.
- Use one progress source and one intersection observer per scene.
- Update the progress CSS custom property directly instead of triggering a React render for every scroll change.
- Limit React state updates to active-item changes.
- Prefer opacity and transform for consumer transitions and avoid layout-triggering animation.
- Keep static page and section wrappers in Astro unless client-side orchestration requires React.

### Conceptual Services example

```tsx
<ScrollLinkedScene
  items={services}
  renderContent={({ items, activeIndex, registerItem }) =>
    renderServiceCopy({ items, activeIndex, registerItem })
  }
  renderMedia={({ activeItem, activeIndex }) => renderServiceMedia({ activeItem, activeIndex })}
/>
```

This example is conceptual. Services retains its own markup and styles; the primitive supplies only the synchronized state.
