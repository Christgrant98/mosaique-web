# Mosaïque Content Architecture

Content follows this flow:

```text
base_content.txt
  -> src/content/
  -> components/sections/
  -> UI and motion primitives
```

`base_content.txt` is the original document received from business. The application does not read it at runtime. `src/content/` is the reviewed, typed, semantic representation consumed by the website.

Homepage content lives in `src/content/home/`, with one module per significant editorial section or concept. Content modules describe what Mosaïque says; section components decide how that content is composed; UI primitives represent reusable interface elements; motion primitives own behavior; pages choose which sections appear and in what order.

CTAs and navigation destinations are modeled as labels plus `href` values. Anchors may target sections planned for later implementation, but content modules do not create routes or navigation behavior.

Media remains explicitly pending until approved local assets exist. Future media entries may add `src` and `alt` without coupling content to presentation or inventing asset paths.

Business copy must not be hardcoded in UI or motion primitives. A future CMS may replace the TypeScript content modules as the executable source without requiring sections to be rewritten.

Updates follow: business update -> `base_content.txt` -> review/diff -> `src/content/` -> website.
