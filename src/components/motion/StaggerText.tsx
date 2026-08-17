import { motion, useReducedMotion } from "motion/react";
import type { HTMLAttributes } from "react";

type StaggerTextProps = HTMLAttributes<HTMLSpanElement> & {
  text: string;
};

export function StaggerText({ text, ...props }: StaggerTextProps) {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (reducedMotion) {
    return <span {...props}>{text}</span>;
  }

  return (
    <span aria-label={text} {...props}>
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0, y: "0.35em" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.08,
            duration: 0.48,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: "inline-block" }}
          key={`${word}-${index}`}
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </span>
  );
}
