"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 350, mass: 0.5 });
  const springY = useSpring(y, { damping: 30, stiffness: 350, mass: 0.5 });

  const ringX = useSpring(x, { damping: 22, stiffness: 150, mass: 0.6 });
  const ringY = useSpring(y, { damping: 22, stiffness: 150, mass: 0.6 });

  useEffect(() => {
    function move(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);

      const el = e.target as HTMLElement;
      const target = el.closest<HTMLElement>("[data-cursor]");
      if (target) {
        setActive(true);
        setLabel(target.getAttribute("data-cursor") || null);
      } else {
        setActive(false);
        setLabel(null);
      }
    }

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <div className="cursor-layer">
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[999] h-1.5 w-1.5 rounded-full bg-gold"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[998] flex items-center justify-center rounded-full border border-ink/40 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: active ? 88 : 34,
          height: active ? 88 : 34,
          backgroundColor: active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-eyebrow whitespace-nowrap text-[9px] text-ink"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
