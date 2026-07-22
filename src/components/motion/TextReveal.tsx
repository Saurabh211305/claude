"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function TextReveal({
  lines,
  className,
  delay = 0,
  stagger = 0.12,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <motion.span
          key={i}
          className="reveal-mask"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={{ hidden: {}, show: {} }}
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              show: {
                y: "0%",
                transition: {
                  duration: 0.95,
                  ease: [0.22, 1, 0.36, 1],
                  delay: delay + i * stagger,
                },
              },
            }}
          >
            {line}
          </motion.span>
        </motion.span>
      ))}
    </span>
  );
}
