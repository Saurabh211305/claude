"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <motion.div
        key={`curtain-${pathname}`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "bottom" }}
        className="pointer-events-none fixed inset-0 z-[900] bg-paper"
      />
      <motion.div
        key={`sweep-${pathname}`}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
        transition={{ duration: 0.75, times: [0, 0.55, 1], ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "left" }}
        className="pointer-events-none fixed inset-x-0 top-0 z-[901] h-[2px] bg-gold"
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
