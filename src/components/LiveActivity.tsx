"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

/**
 * Simulated presence indicator — fluctuates client-side on a timer to
 * suggest live interest. Not backed by a real-time/websocket connection.
 */
export default function LiveActivity({ seed = 4 }: { seed?: number }) {
  const [count, setCount] = useState(seed);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = c + delta;
        return Math.min(11, Math.max(2, next));
      });
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-3.5 py-2 text-xs text-ink/70">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
      </span>
      <Eye size={13} className="text-ink/40" />
      <AnimatePresence mode="popLayout">
        <motion.span
          key={count}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="font-medium text-ink tabular-nums"
        >
          {count}
        </motion.span>
      </AnimatePresence>
      <span>viewing this listing right now</span>
    </div>
  );
}
