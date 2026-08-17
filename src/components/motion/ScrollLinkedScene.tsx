import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { ConsumerProps, CSSProperties, Dispatch } from "react";

type ScrollLinkedItem = {
  id: string;
};

export type ScrollLinkedSceneState<T> = {
  activeIndex: number;
  activeItem: T;
  itemCount: number;
};

type ItemRegistration<T> = Dispatch<{
  element: HTMLElement | null;
  item: T;
}>;
type SceneRenderer<T> = ConsumerProps<ScrollLinkedSceneState<T>>["children"];
type ContentRenderer<T> = ConsumerProps<ScrollLinkedSceneContentState<T>>["children"];

export type ScrollLinkedSceneContentState<T> = ScrollLinkedSceneState<T> & {
  items: readonly T[];
  registerItem: ItemRegistration<T>;
};

type ScrollLinkedSceneProps<T extends ScrollLinkedItem> = {
  className?: string;
  items: readonly T[];
  renderContent: ContentRenderer<T>;
  renderMedia: SceneRenderer<T>;
};

const observerOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: "-35% 0px -35% 0px",
  threshold: [0.15, 0.35, 0.55, 0.75],
};

export function ScrollLinkedScene<T extends ScrollLinkedItem>({
  className,
  items,
  renderContent,
  renderMedia,
}: ScrollLinkedSceneProps<T>) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const sceneRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef(new Map<string, HTMLElement>());
  const itemIds = useRef(new WeakMap<Element, string>());
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "end start"],
  });

  const matchedIndex = items.findIndex((item) => item.id === activeId);
  const activeIndex = Math.max(0, matchedIndex);
  const activeItem = items[activeIndex];

  useEffect(() => {
    const elements = Array.from(itemRefs.current.values());

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver((observedEntries) => {
      const visibleEntry = observedEntries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      const id = visibleEntry ? itemIds.current.get(visibleEntry.target) : undefined;

      if (id) {
        setActiveId(id);
      }
    }, observerOptions);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [items]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    sceneRef.current?.style.setProperty("--scroll-linked-progress", String(progress));
  });

  if (!activeItem) {
    return null;
  }

  const sceneState: ScrollLinkedSceneState<T> = {
    activeIndex,
    activeItem,
    itemCount: items.length,
  };

  return (
    <div
      className={className}
      ref={sceneRef}
      style={{ "--scroll-linked-progress": 0 } as CSSProperties}
    >
      {renderMedia(sceneState)}
      {renderContent({
        ...sceneState,
        items,
        registerItem: ({ element, item }) => {
          if (element) {
            itemRefs.current.set(item.id, element);
            itemIds.current.set(element, item.id);
          } else {
            itemRefs.current.delete(item.id);
          }
        },
      })}
    </div>
  );
}
