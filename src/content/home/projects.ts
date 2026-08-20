import type { ContentLink } from "../types";

export const eventGalleryContent = {
  status: "placeholder",
  title: "Eventos que ya tomaron forma.",
  introduction:
    "Una selección de celebraciones, producciones y experiencias que hemos llevado de la idea a la realidad.",
  items: [
    {
      id: "event-slot-01",
      index: "01",
      title: "Evento pendiente de documentar",
      context: "Nombre y contexto pendientes de confirmación.",
      status: "placeholder",
      media: { status: "pending" },
    },
    {
      id: "event-slot-02",
      index: "02",
      title: "Evento pendiente de documentar",
      context: "Nombre y contexto pendientes de confirmación.",
      status: "placeholder",
      media: { status: "pending" },
    },
    {
      id: "event-slot-03",
      index: "03",
      title: "Evento pendiente de documentar",
      context: "Nombre y contexto pendientes de confirmación.",
      status: "placeholder",
      media: { status: "pending" },
    },
    {
      id: "event-slot-04",
      index: "04",
      title: "Evento pendiente de documentar",
      context: "Nombre y contexto pendientes de confirmación.",
      status: "placeholder",
      media: { status: "pending" },
    },
    {
      id: "event-slot-05",
      index: "05",
      title: "Evento pendiente de documentar",
      context: "Nombre y contexto pendientes de confirmación.",
      status: "placeholder",
      media: { status: "pending" },
    },
    {
      id: "event-slot-06",
      index: "06",
      title: "Evento pendiente de documentar",
      context: "Nombre y contexto pendientes de confirmación.",
      status: "placeholder",
      media: { status: "pending" },
    },
  ],
  cta: { label: "Explorar eventos", href: "#experiences" } satisfies ContentLink,
} as const;
