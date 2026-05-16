import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { InstallPwaButton } from "./InstallPwaButton";
import { CHECKOUT_URL } from "@/lib/checkout";

export function StickyCta() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 700));

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 32, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-x-3 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-40 rounded-full border border-gold/35 bg-chocolate/92 p-1.5 shadow-[0_18px_48px_rgba(0,0,0,0.35)] backdrop-blur-md sm:inset-x-4 md:hidden"
          >
            <div className="mx-auto grid max-w-md grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-luxe inline-flex min-w-0 items-center justify-center gap-1.5 whitespace-nowrap px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.06em] min-[380px]:gap-2 min-[380px]:px-4 min-[380px]:text-xs min-[380px]:tracking-[0.08em]"
              >
                <ShoppingBag className="h-4 w-4 shrink-0" />
                Comprar agora
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
              <InstallPwaButton compact />
            </div>
          </motion.div>

          <motion.a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noreferrer"
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
