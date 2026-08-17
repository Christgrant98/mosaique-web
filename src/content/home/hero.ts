import type { ContentLink } from "../types";

export const heroContent = {
  eyebrow: "EVENTOS · PRODUCCIÓN · EXPERIENCIAS",
  title: "Creamos eventos que se viven, se recuerdan y se comparten.",
  subtitle:
    "MOSAÏQUE EVENTS es una empresa integral de eventos en Montréal, especializada en la organización, producción, montaje y creación de experiencias para celebraciones privadas, bodas, cumpleaños, eventos corporativos y alianzas con venues.",
  supportingText:
    "Diseñamos cada evento como una composición única: concepto, logística, ambientación, mobiliario, producción y ejecución reunidos en una experiencia fluida, elegante y memorable.",
  actions: {
    primary: { label: "Planear mi evento", href: "#contact" } satisfies ContentLink,
    secondary: { label: "Ver servicios", href: "#services" } satisfies ContentLink,
  },
  overlay: "Every detail has its place.",
} as const;
