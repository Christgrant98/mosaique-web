export type ServiceSpikeItem = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  mediaLabel: string;
};

export const serviceSpikeItems = [
  {
    id: "service-01",
    eyebrow: "Service 01",
    title: "Producción integral de eventos",
    description:
      "Diseñamos, planificamos y producimos eventos de principio a fin. Coordinamos concepto, logística, tiempos, ambientación, mobiliario, montaje, proveedores y ejecución para bodas, cumpleaños, celebraciones privadas y eventos corporativos.",
    mediaLabel: "Evento completo producido por MOSAÏQUE, con ambientación, mobiliario, iluminación y montaje final.",
  },
  {
    id: "service-02",
    eyebrow: "Service 02",
    title: "Bodas y celebraciones privadas",
    description:
      "Creamos celebraciones íntimas, elegantes y memorables. Transformamos cada idea en una experiencia visual y emocionalmente coherente, cuidando la ambientación, el montaje, la logística y cada detalle del evento.",
    mediaLabel: "Mesa elegante para boda o celebración privada, con flores, velas, copas y detalles premium.",
  },
  {
    id: "service-03",
    eyebrow: "Service 03",
    title: "Eventos corporativos",
    description:
      "Producimos eventos para empresas, equipos y marcas que buscan conectar con sus invitados de una manera cuidada, profesional y memorable. Adaptamos el concepto, el espacio y la producción al objetivo de cada encuentro.",
    mediaLabel: "Cocktail corporativo o cena empresarial con ambiente sofisticado, invitados conversando y branding sutil.",
  },
  {
    id: "service-04",
    eyebrow: "Service 04",
    title: "Experiencias propias y alianzas con venues",
    description:
      "Creamos y promovemos experiencias en alianza con restaurantes, salones y venues que buscan aumentar su tráfico, visibilidad y posicionamiento. Desarrollamos el concepto, la producción, la promoción y la operación del evento.",
    mediaLabel: "Restaurante, salón o venue activado con invitados, iluminación cálida y atmósfera social premium.",
  },
  {
    id: "service-05",
    eyebrow: "Service 05",
    title: "Montaje, desmontaje y logística",
    description:
      "Ofrecemos apoyo operativo para eventos que requieren instalación, organización del espacio, movimiento de mobiliario, coordinación de recursos y desmontaje posterior. Nuestro enfoque es práctico, ordenado y eficiente.",
    mediaLabel: "Equipo preparando un montaje, ajustando mesas, sillas, mobiliario o detalles antes del evento.",
  },
  {
    id: "service-06",
    eyebrow: "Service 06",
    title: "Alquiler de mobiliario e insumos",
    description:
      "Disponemos de inventario propio para complementar eventos de diferentes formatos. Nuestro mobiliario, equipos e insumos pueden alquilarse de forma individual o integrarse dentro de paquetes personalizados.",
    mediaLabel: "Mobiliario, mesas, sillas, elementos decorativos e insumos presentados en un contexto elegante.",
  },
  {
    id: "service-07",
    eyebrow: "Service 07",
    title: "Paquetes personalizables",
    description:
      "Combinamos producción, montaje, logística, alquiler y ambientación según las necesidades reales de cada evento. Cada paquete se adapta al presupuesto, el espacio, la cantidad de invitados y el nivel de acompañamiento requerido.",
    mediaLabel: "Composición visual de detalles de evento: mesa, flores, luces, mobiliario, copas y elementos de montaje.",
  },
] satisfies ServiceSpikeItem[];