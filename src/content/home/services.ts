import type { ContentLink } from "../types";

export const servicesContent = {
  intro: {
    title: "Todo lo que un evento necesita, compuesto en un solo lugar.",
    text: "MOSAÏQUE ofrece servicios integrales y modulares. Podemos encargarnos de la producción completa de un evento o apoyar etapas específicas como montaje, desmontaje, logística, mobiliario, insumos, ambientación o coordinación con venues.",
    highlight:
      "Tú eliges el nivel de acompañamiento. Nosotros nos encargamos de que cada pieza encaje.",
  },
  panelReveal: {
    title: "Servicios diseñados para adaptarse a cada ocasión.",
    text: "Cada evento tiene una escala, un propósito y una dinámica distinta. Por eso nuestros servicios pueden contratarse de forma independiente o combinarse en paquetes personalizados según las necesidades del cliente, el espacio y el tipo de experiencia.",
    cta: { label: "Explorar servicios", href: "#services-list" } satisfies ContentLink,
  },
  items: [
    {
      id: "service-01",
      index: "01",
      category: "Organización y producción de eventos",
      title: "Organización y producción integral",
      description:
        "Diseñamos, planificamos y producimos eventos de principio a fin. Coordinamos concepto, logística, tiempos, ambientación, montaje, proveedores y ejecución para bodas, cumpleaños, celebraciones privadas y eventos corporativos.",
      idealFor:
        "Clientes que quieren delegar la planeación completa de su evento y contar con una producción organizada, estética y confiable.",
      cta: { label: "Cotizar producción integral", href: "#contact" } satisfies ContentLink,
      media: { status: "pending" },
    },
    {
      id: "service-02",
      index: "02",
      category: "Bodas y celebraciones privadas",
      title: "Bodas y momentos privados",
      description:
        "Creamos celebraciones íntimas, elegantes y memorables. Nos encargamos de transformar una idea en una experiencia visual y emocionalmente coherente, cuidando cada detalle del ambiente, el montaje y la ejecución.",
      idealFor:
        "Bodas íntimas, aniversarios, cumpleaños especiales, cenas privadas, showers, compromisos y celebraciones familiares.",
      cta: { label: "Planear una celebración", href: "#contact" } satisfies ContentLink,
      media: { status: "pending" },
    },
    {
      id: "service-03",
      index: "03",
      category: "Eventos corporativos",
      title: "Eventos corporativos y experiencias de marca",
      description:
        "Producimos eventos para empresas, equipos y marcas que buscan conectar con sus invitados de una manera cuidada, profesional y memorable. Adaptamos el concepto, el espacio y la producción al objetivo de cada encuentro.",
      idealFor:
        "Lanzamientos, cenas corporativas, activaciones, celebraciones internas, networking, reuniones privadas y experiencias de marca.",
      cta: { label: "Crear un evento corporativo", href: "#contact" } satisfies ContentLink,
      media: { status: "pending" },
    },
    {
      id: "service-04",
      index: "04",
      category: "Experiencias propias y alianzas con venues",
      title: "Eventos propios y alianzas estratégicas",
      description:
        "Creamos y promovemos experiencias en alianza con restaurantes, salones y venues que buscan aumentar su tráfico, visibilidad y posicionamiento. MOSAÏQUE puede desarrollar el concepto, la producción, la promoción y la operación del evento.",
      idealFor:
        "Restaurantes, bares, salones, terrazas, hoteles, galerías y espacios que quieren activar su venue con experiencias memorables.",
      cta: { label: "Proponer una alianza", href: "#contact" } satisfies ContentLink,
      media: { status: "pending" },
    },
    {
      id: "service-05",
      index: "05",
      category: "Montaje, desmontaje y logística",
      title: "Montaje, desmontaje y soporte logístico",
      description:
        "Ofrecemos apoyo operativo para eventos que requieren instalación, organización del espacio, movimiento de mobiliario, coordinación de recursos y desmontaje posterior. Nuestro enfoque es práctico, ordenado y eficiente.",
      idealFor:
        "Clientes, planners, venues o proveedores que necesitan soporte puntual antes, durante o después de un evento.",
      cta: { label: "Solicitar soporte logístico", href: "#contact" } satisfies ContentLink,
      media: { status: "pending" },
    },
    {
      id: "service-06",
      index: "06",
      category: "Alquiler de mobiliario, equipos e insumos",
      title: "Alquiler de mobiliario e insumos para eventos",
      description:
        "Disponemos de inventario propio para complementar eventos de diferentes formatos. Nuestro mobiliario, equipos e insumos pueden alquilarse de forma individual o integrarse dentro de paquetes personalizados.",
      idealFor:
        "Eventos que necesitan mobiliario, decoración, elementos funcionales, equipos o insumos específicos sin contratar una producción completa.",
      cta: { label: "Ver opciones de alquiler", href: "#contact" } satisfies ContentLink,
      media: { status: "pending" },
    },
    {
      id: "service-07",
      index: "07",
      category: "Paquetes personalizables",
      title: "Paquetes hechos a la medida",
      description:
        "Combinamos servicios de producción, montaje, logística, alquiler y ambientación según las necesidades reales del evento. Cada paquete se adapta al presupuesto, el espacio, la cantidad de invitados y el nivel de acompañamiento requerido.",
      idealFor:
        "Clientes que buscan flexibilidad y una solución clara, sin pagar por servicios que no necesitan.",
      cta: { label: "Crear mi paquete", href: "#contact" } satisfies ContentLink,
      media: { status: "pending" },
    },
  ],
  transitionCta: {
    title: "¿Tienes una idea, un espacio o una celebración en mente?",
    text: "Podemos ayudarte a convertirla en una experiencia completa. Cuéntanos qué quieres crear y te guiaremos con una propuesta adaptada a tu evento, presupuesto y objetivos.",
    actions: {
      primary: { label: "Solicitar cotización", href: "#contact" } satisfies ContentLink,
      secondary: { label: "Hablar con nosotros", href: "#contact" } satisfies ContentLink,
    },
  },
} as const;

export type ServiceContentItem = (typeof servicesContent.items)[number];
export type ServicesPanelRevealContent = typeof servicesContent.panelReveal;
