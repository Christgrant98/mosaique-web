import { ScrollLinkedScene } from "../motion/ScrollLinkedScene";
import type { ServiceSpikeItem } from "../../data/services";

type ServicesSceneProps = {
  services: ServiceSpikeItem[];
};

export default function ServicesScene({ services }: ServicesSceneProps) {
  return (
    <ScrollLinkedScene
      className="services-spike__scene"
      items={services}
      renderMedia={({ activeIndex }) => (
        <div className="services-spike__media" aria-live="polite">
          <div className="services-spike__media-frame">
            {services.map((service, index) => (
              <div
                aria-hidden={index !== activeIndex}
                aria-label={service.mediaLabel}
                className={[
                  "services-spike__media-panel",
                  index === activeIndex ? "is-active" : "",
                ].join(" ")}
                data-tone={String(index + 1).padStart(2, "0")}
                key={service.id}
                role="img"
              >
                <span className="services-spike__media-label">{service.eyebrow}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      renderContent={({ activeIndex, activeItem, itemCount, items, registerItem }) => (
        <div className="services-spike__list">
          <div className="services-spike__progress" aria-hidden="true">
            <div className="services-spike__progress-bar" />
          </div>

          <h2 className="visually-hidden" id="services-spike-title">
            Services technical spike
          </h2>

          {items.map((service, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                aria-current={isActive ? "step" : undefined}
                className={["services-spike__item", isActive ? "is-active" : ""].join(" ")}
                key={service.id}
                ref={(element) => registerItem({ element, item: service })}
              >
                <div className="services-spike__item-grid">
                  <span className="services-spike__index">
                    {String(index + 1).padStart(2, "0")} / {String(itemCount).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[length:var(--text-caption-size)] font-[var(--text-caption-weight)] leading-[var(--text-caption-line-height)] text-accent">
                      {service.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-[length:var(--text-heading-md-size)] font-[var(--text-heading-md-weight)] leading-[var(--text-heading-md-line-height)] text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-5 max-w-[var(--layout-max-reading)] text-[length:var(--text-body-lg-size)] leading-[var(--text-body-lg-line-height)] text-secondary">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}

          <p className="visually-hidden" aria-live="polite">
            Active service {activeIndex + 1} of {itemCount}: {activeItem.title}
          </p>
        </div>
      )}
    />
  );
}
