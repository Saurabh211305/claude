"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.9);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-between gap-4 rounded-full border border-line-strong bg-ink/90 px-5 py-3 backdrop-blur-md lg:hidden"
        >
          <p className="text-xs text-paper/70">
            Explore fewer than 20 residences released this year.
          </p>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-gold px-5 py-2.5 text-xs font-medium tracking-wide text-ink"
          >
            Enquire
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
