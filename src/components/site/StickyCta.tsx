import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { InstallPwaButton } from "./InstallPwaButton";

export function StickyCta() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 700));

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ y: 96, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 96, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-chocolate/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-20px_60px_rgba(0,0,0,0.28)] backdrop-blur-md md:hidden"
          >
            <div className="mx-auto flex max-w-md items-center gap-2.5">
              <a
                href="#oferta"
                className="btn-luxe inline-flex min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em]"
              >
                <ShoppingBag className="h-4 w-4 shrink-0" />
                Comprar agora
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
              <InstallPwaButton compact />
            </div>
          </motion.div>

          <motion.a
            href="#oferta"
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 120, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-8 right-8 z-40 hidden items-center gap-3 rounded-full bg-chocolate/90 px-5 py-3 text-cream shadow-luxe ring-1 ring-gold/40 backdrop-blur-md transition hover:-translate-y-1 md:inline-flex"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
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
