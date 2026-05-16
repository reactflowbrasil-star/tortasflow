import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function StickyCta() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 700));

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Mobile bottom bar */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-chocolate/95 px-4 py-3 backdrop-blur-md md:hidden"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-[11px] uppercase tracking-widest text-gold">Tortas Flow</p>
                <p className="truncate text-xs text-cream">Comece hoje com as Tortas de Feira</p>
              </div>
              <a
                href="#oferta"
                className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gradient-to-r from-gold to-[oklch(0.85_0.12_75)] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-chocolate shadow-glow"
              >
                Comprar
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Desktop floating */}
          <motion.a
            href="#oferta"
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 120, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-8 right-8 z-40 hidden items-center gap-3 rounded-full bg-chocolate/90 px-5 py-3 text-cream shadow-luxe ring-1 ring-gold/40 backdrop-blur-md transition hover:-translate-y-1 md:inline-flex"
          >
            <span className="flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <div className="leading-tight">
              <p className="text-[10px] uppercase tracking-widest text-gold">Comece hoje</p>
              <p className="text-sm font-semibold">Comprar Agora</p>
            </div>
            <ArrowRight className="h-4 w-4 text-gold" />
          </motion.a>
        </>
      )}
    </AnimatePresence>
  );
}
