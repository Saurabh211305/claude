"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Logo from "@/components/Logo";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [percent, setPercent] = useState(0);
  const progress = useMotionValue(0);
  const spring = useSpring(progress, { damping: 24, stiffness: 60 });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    progress.set(100);
    const unsub = spring.on("change", (v) => setPercent(Math.round(v)));
    const t = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1900);
    return () => {
      clearTimeout(t);
      unsub();
    };
  }, [progress, spring]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-paper"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <Logo variant="dark" className="scale-125" />
            </motion.div>
          </div>
          <p className="font-display mt-6 text-sm text-ink/50 tabular-nums">{percent}%</p>
          <div className="mt-4 h-px w-40 overflow-hidden bg-ink/10">
            <motion.div
              className="h-full bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
