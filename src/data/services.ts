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
    title: "Discovery system",
    description:
      "Placeholder copy for validating how a service title, description, index, and media state respond to scroll progress.",
    mediaLabel: "Placeholder media state for service 01",
  },
  {
    id: "service-02",
    eyebrow: "Service 02",
    title: "Narrative structure",
    description:
      "Placeholder copy for testing sticky reading rhythm, active state changes, and responsive stacking without final content.",
    mediaLabel: "Placeholder media state for service 02",
  },
  {
    id: "service-03",
    eyebrow: "Service 03",
    title: "Visual direction",
    description:
      "Placeholder copy for proving synchronized media transitions while keeping imagery and business language replaceable.",
    mediaLabel: "Placeholder media state for service 03",
  },
] satisfies ServiceSpikeItem[];
