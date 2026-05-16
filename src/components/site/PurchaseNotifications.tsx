import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ShoppingBag } from "lucide-react";

const purchases = [
  { name: "Ana Paula", location: "Goiânia, GO" },
  { name: "Mariana", location: "Brasília, DF" },
  { name: "Camila", location: "Anápolis, GO" },
  { name: "Juliana", location: "Aparecida de Goiânia, GO" },
  { name: "Renata", location: "Uberlândia, MG" },
  { name: "Patrícia", location: "Cuiabá, MT" },
  { name: "Larissa", location: "Palmas, TO" },
  { name: "Fernanda", location: "Ribeirão Preto, SP" },
];

const randomBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export function PurchaseNotifications() {
  const [purchaseIndex, setPurchaseIndex] = useState<number | null>(null);
  const hideTimer = useRef<number | null>(null);
  const showTimer = useRef<number | null>(null);
  const lastIndex = useRef<number | null>(null);

  const purchase = useMemo(
    () => (purchaseIndex === null ? null : purchases[purchaseIndex]),
    [purchaseIndex],
  );

  useEffect(() => {
    const clearTimers = () => {
      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current);
      }
      if (showTimer.current) {
        window.clearTimeout(showTimer.current);
      }
    };

    const scheduleNext = (delay = randomBetween(9000, 16000)) => {
      showTimer.current = window.setTimeout(() => {
        let nextIndex = randomBetween(0, purchases.length - 1);

        if (purchases.length > 1) {
          while (nextIndex === lastIndex.current) {
            nextIndex = randomBetween(0, purchases.length - 1);
          }
        }

        lastIndex.current = nextIndex;
        setPurchaseIndex(nextIndex);

        hideTimer.current = window.setTimeout(() => {
          setPurchaseIndex(null);
          scheduleNext(randomBetween(18000, 32000));
        }, 6200);
      }, delay);
    };

    scheduleNext();

    return clearTimers;
  }, []);

  return (
    <AnimatePresence>
      {purchase && (
        <motion.aside
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed left-6 bottom-[calc(6.5rem+env(safe-area-inset-bottom))] z-50 max-w-[calc(100vw-3rem)] rounded-2xl border border-gold/35 bg-chocolate/94 p-3 text-cream shadow-[0_18px_48px_rgba(0,0,0,0.35)] backdrop-blur-md sm:left-5 sm:max-w-sm md:bottom-6"
          aria-live="polite"
        >
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-chocolate">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 rounded-full bg-emerald-500 p-0.5 text-white ring-2 ring-chocolate">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </span>
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                Compra confirmada
              </p>
              <p className="mt-0.5 text-sm font-semibold leading-snug">
                {purchase.name} garantiu o curso completo
              </p>
              <p className="mt-0.5 text-xs text-cream/70">{purchase.location} • agora há pouco</p>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
