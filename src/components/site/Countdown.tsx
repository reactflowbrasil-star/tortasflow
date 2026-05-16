import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function getTarget() {
  if (typeof window === "undefined") return Date.now() + 72 * 3600 * 1000;
  const key = "tortas-flow-deadline";
  const saved = window.localStorage.getItem(key);
  if (saved) return parseInt(saved, 10);
  const t = Date.now() + 72 * 3600 * 1000;
  window.localStorage.setItem(key, String(t));
  return t;
}

export function Countdown() {
  const [target, setTarget] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    setTarget(getTarget());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, (target ?? Date.now()) - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);

  const units = [
    { label: "Dias", val: d },
    { label: "Horas", val: h },
    { label: "Min", val: m },
    { label: "Seg", val: s },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {units.map((u) => (
        <div
          key={u.label}
          className="flex min-w-[68px] flex-col items-center rounded-2xl glass-dark px-3 py-3 sm:min-w-[80px] sm:px-4 sm:py-4"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={u.val}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="font-display text-3xl tabular-nums text-gold sm:text-4xl"
            >
              {String(u.val).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-cream/70">{u.label}</span>
        </div>
      ))}
    </div>
  );
}
