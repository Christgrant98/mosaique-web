import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";
import { motionTokens } from "../../tokens/motion";

type MediaCrossfadeItem = {
  id: string;
  alt: string;
  className?: string;
  decoding?: "async" | "auto" | "sync";
  loading?: "eager" | "lazy";
  sizes?: string;
  src: string;
  srcSet?: string;
  style?: CSSProperties;
};

type MediaCrossfadeProps = {
  activeId: string;
  className?: string;
  items: MediaCrossfadeItem[];
};

export function MediaCrossfade({ activeId, className, items }: MediaCrossfadeProps) {
  const reducedMotion = useReducedMotion();
  const active = items.find((item) => item.id === activeId) ?? items[0];

  if (!active) {
    return null;
  }

  return (
    <div className={className} style={{ position: "relative", overflow: "hidden" }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={active.id}
          {...active}
          initial={reducedMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0, scale: 1.02 }}
          transition={{
            duration: reducedMotion ? 0 : motionTokens.duration.slow,
            ease: motionTokens.easing.cinematic,
          }}
          style={{
            blockSize: "100%",
            inlineSize: "100%",
            objectFit: "cover",
            ...active.style,
          }}
        />
      </AnimatePresence>
    </div>
  );
}
