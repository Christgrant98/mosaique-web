import { motion, useReducedMotion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  once?: boolean;
};

export function Reveal({ children, delay = 0, once = true, style, ...props }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: "var(--motion-reveal-distance)" }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.24 }}
      transition={{
        delay,
        duration: reducedMotion ? 0 : 0.64,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}
