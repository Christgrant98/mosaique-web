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
                <span className="services-spike__media-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="services-spike__media-label">{service.mediaLabel}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      renderContent={({ activeIndex, activeItem, itemCount, items, registerItem }) => (
        <div className="services-spike__list">
          <header className="services-spike__scene-heading">
            <p className="services-spike__scene-eyebrow">Nuestros servicios</p>
            <h2 id="services-spike-title">Una producción completa, a la medida de cada ocasión.</h2>
            <div className="services-spike__progress" aria-hidden="true">
              <div className="services-spike__progress-bar" />
            </div>
          </header>

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
                    <p className="services-spike__eyebrow">
                      {service.eyebrow}
                    </p>
                    <h3 className="services-spike__title">
                      {service.title}
                    </h3>
                    <p className="services-spike__description">
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
