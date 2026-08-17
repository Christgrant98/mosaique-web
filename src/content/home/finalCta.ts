import type { ContentLink } from "../types";

export const finalCtaContent = {
  title: "Construyamos una experiencia memorable.",
  text: "Ya sea una boda, una celebración privada, un evento corporativo, una alianza con un venue o un montaje puntual, MOSAÏQUE puede ayudarte a darle forma a cada detalle.",
  actions: {
    primary: { label: "Cotizar mi evento", href: "#contact" } satisfies ContentLink,
    secondary: { label: "Crear una alianza", href: "#contact" } satisfies ContentLink,
  },
  closingStatement:
    "Eventos cuidadosamente compuestos. Experiencias diseñadas para permanecer.",
} as const;
