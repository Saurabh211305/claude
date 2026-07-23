"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

const LINE_TRANSITION = { duration: 0.7, ease: [0.65, 0, 0.35, 1] as const };

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
          <svg width="34" height="34" viewBox="0 0 30 30" fill="none" aria-hidden>
            <motion.line
              x1="6" y1="3" x2="6" y2="27" stroke="#14151d" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={LINE_TRANSITION}
            />
            <motion.line
              x1="15" y1="3" x2="15" y2="27" stroke="#14151d" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...LINE_TRANSITION, delay: 0.08 }}
            />
            <motion.line
              x1="6" y1="15" x2="15" y2="15" stroke="#dd8a3b" strokeWidth="2.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...LINE_TRANSITION, delay: 0.3 }}
            />
            <motion.line
              x1="21" y1="6" x2="21" y2="24" stroke="#14151d" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...LINE_TRANSITION, delay: 0.16 }}
            />
            <motion.line
              x1="27" y1="6" x2="27" y2="24" stroke="#14151d" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...LINE_TRANSITION, delay: 0.24 }}
            />
            <motion.line
              x1="21" y1="15" x2="27" y2="15" stroke="#dd8a3b" strokeWidth="2.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ ...LINE_TRANSITION, delay: 0.36 }}
            />
          </svg>

          <div className="mt-4 flex gap-2 overflow-hidden font-display text-lg tracking-[0.12em] text-ink">
            {["T", "R", "I", "X", "I", "S", " ", "H", "O", "M", "E", "S"].map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.55 + i * 0.035 }}
                className={ch === " " ? "w-1" : i >= 7 ? "text-gold" : undefined}
              >
                {ch}
              </motion.span>
            ))}
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
