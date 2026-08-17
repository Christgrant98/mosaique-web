# Movra Reference

Movra is a reference for behavior and composition, not a source to copy. Mosaïque Web should not copy Movra branding, photography, content, names, or identity. The goal is to learn from its editorial rhythm, scroll storytelling, hierarchy, sticky behavior, layered motion, and image synchronization.

Reference:

- Template: https://www.framer.com/community/marketplace/templates/movra/
- Live site: https://movra.framer.website/

## Reference Scope

Movra is useful for studying:

- Composition.
- Scroll rhythm.
- Visual hierarchy.
- Scroll storytelling.
- Sticky behavior.
- Layering.
- Motion design.
- Image synchronization.
- Editorial layout.

## 1. Hero Staged Typography

The hero uses large editorial typography with staged reveal behavior. The type should feel composed, paced, and cinematic, with image and navigation entering the hierarchy without fighting the headline.

For Mosaïque, this becomes a future pattern for a controlled first impression, not an instruction to copy Movra copy or layout exactly.

## 2. Sticky Navigation

Navigation remains accessible while the page scrolls. It should feel quiet, premium, and stable, with subtle state changes rather than heavy chrome.

Mosaïque should treat navigation as a persistent orientation layer.

## 3. Sticky Media + Scrolling Content

Movra pairs sticky media with content that scrolls beside or over time against it. This creates continuity while allowing text blocks to advance the story.

Implementation priority: define sticky boundaries clearly and keep the sticky element inside its owning section.

## 4. Services Intro Around 100vh

The services intro uses nearly a viewport of space to reset attention before the service-specific storytelling begins.

Mosaïque should use this as a pacing pattern: a calm intro before denser interactive content.

## 5. Panel Reveal

Panel reveal behavior creates a cinematic handoff between sections. It should be reserved for meaningful transitions, not used everywhere.

The implementation should prefer CSS or Motion first. GSAP is appropriate only if sequencing becomes too complex for Motion.

## 6. Sticky Services Composition

The services area behaves like a bounded scene. A media or visual column remains stable while service copy advances.

This will be one of the key Mosaïque reproduction targets.

## 7. Scroll Progress To Active Service

The important state relationship is:

`SCROLL -> PROGRESS -> ACTIVE SERVICE -> TITLE / DESCRIPTION / INDEX / IMAGE`

Scroll progress determines which service is active. The active service drives text, index, description, and corresponding media.

This relationship is a priority because it provides a clear technical model for synchronized editorial storytelling.

## 8. Scroll-Triggered Image Synchronization

Images update in response to the active service. The image change must feel connected to the text state, not independent.

The image transition should preserve native scroll and avoid arbitrary scroll listeners where browser APIs, Motion, or ScrollTrigger can express the relationship more cleanly.

## 9. Cinematic Image Transitions

Image changes should feel premium through opacity, transform, masking, or crossfade behavior. Movement should be restrained and avoid bounce or elastic effects.

Transitions should be token-driven:

- Cinematic duration.
- Cinematic easing.
- Controlled reveal distance.
- Reduced-motion fallback.

## 10. Scroll Storytelling

Movra uses scroll as narrative pacing. Sections do not simply stack; they create handoffs, pauses, and active states.

For Mosaïque, scroll storytelling should clarify content relationships and should never make important information inaccessible without motion.

## 11. Editorial Layouts

The reference uses large type, image scale, negative space, and asymmetry. Layouts feel designed for reading and looking, not only for component reuse.

Mosaïque should support editorial grids and full-bleed media without turning every section into a card.

## 12. Full-Bleed Photography

Photography often owns the full width or a major part of the viewport. Cropping and aspect ratio are intentional.

Mosaïque should treat photography as structural and load it through Astro Assets when local media becomes available.

## 13. Bento Grids

Bento grids appear as structured supporting content. They should be used sparingly for metrics, proof, or grouped editorial cards.

For Mosaïque, bento layouts should remain quiet and content-led, avoiding decorative density.

## 14. Marquee / Ticker

The marquee acts as a rhythm divider. It should be calm, readable, and optional under reduced motion.

CSS animation is preferred for simple marquees.

## 15. Manual Project Slider

Projects are browsed manually rather than forced through automatic motion. Embla Carousel is the planned engine when a real project slider is implemented.

Manual control supports accessibility and user agency.

## 16. Sticky Process

The process section uses sticky behavior to anchor a sequence. The pattern should clarify progression and should not trap scroll.

Mosaïque should implement this only when process content exists.

## 17. Spotlight + Floating Cards

Spotlight sections combine a strong focal image or area with compact supporting cards. Floating cards must remain legible, responsive, and purposeful.

Avoid decorative overlays that do not carry content.

## 18. FAQ Smooth Accordion

FAQ interaction should be native-feeling, keyboard-friendly, and smooth. Use semantic disclosure patterns before custom scripting.

Motion should enhance open/close state without hiding content from assistive technology.

## 19. Final CTA With Looping Gallery

The final CTA uses moving imagery to create energy near the close of the page. This should remain lightweight, avoid layout shift, and pause or simplify for reduced motion.

## 20. General Appear Effects

General appear effects should be subtle and consistent:

- Opacity.
- Small transform.
- Tokenized duration and easing.
- Sensible stagger.
- Reduced-motion support.

## Priority Sequence

Future implementation should prioritize:

`Services Intro -> Panel Reveal -> Sticky Services -> Active Service -> Image Synchronization -> Cinematic Transition`

No Movra sections are implemented in the foundation phase. These notes define behavior targets for future Mosaïque sections.
