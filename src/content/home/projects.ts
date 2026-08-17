import type { ContentLink } from "../types";

export const projectsContent = {
  title: "Experiencias que toman forma.",
  introduction:
    "Cada proyecto es una composición distinta. Algunos nacen para celebrar una historia personal; otros para activar un espacio, conectar una comunidad o posicionar una marca.",
  items: [
    {
      index: "01",
      title: "Celebraciones privadas",
      description:
        "Diseño, producción y montaje para momentos íntimos, elegantes y memorables.",
    },
    {
      index: "02",
      title: "Bodas y eventos familiares",
      description:
        "Experiencias cuidadas para celebrar con intención, belleza y organización.",
    },
    {
      index: "03",
      title: "Eventos corporativos",
      description:
        "Encuentros profesionales con estética, estructura y una ejecución confiable.",
    },
    {
      index: "04",
      title: "Activaciones con venues",
      description:
        "Eventos propios y alianzas estratégicas para generar tráfico, visibilidad y nuevas oportunidades comerciales.",
    },
    {
      index: "05",
      title: "Montajes y alquileres",
      description:
        "Soluciones prácticas para complementar eventos con mobiliario, equipos e insumos propios.",
    },
  ],
  cta: { label: "Ver próximos proyectos", href: "#experiences" } satisfies ContentLink,
} as const;
