import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-40 bg-gradient-to-r from-transparent via-gold/15 to-transparent blur-3xl" />
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-gold/40 bg-card p-6 shadow-luxe md:rounded-[2rem] md:p-10"
        >
          <div className="absolute -inset-1 -z-10 rounded-[2rem] bg-gradient-to-r from-gold/40 via-transparent to-marsala/40 blur-2xl" />
          <div className="grid items-center gap-7 md:grid-cols-[auto_1fr] md:gap-10">
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-marsala-grad text-center text-cream shadow-glow ring-8 ring-gold/20 md:h-52 md:w-52"
            >
              <div className="absolute inset-3 rounded-full border border-gold/45" />
              <div className="absolute -right-1 top-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-chocolate shadow-luxe">
                <BadgeCheck className="h-7 w-7" />
              </div>
              <div className="relative">
                <ShieldCheck className="mx-auto mb-2 h-10 w-10 text-gold" />
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
                  Garantia
                </p>
                <p className="font-display text-6xl leading-none text-cream">7</p>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">dias</p>
              </div>
            </motion.div>

            <div className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-marsala">
                Selo de garantia
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-chocolate md:text-5xl">
                7 dias de garantia
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Se, por algum motivo, você começar e perceber que não é para você, oferecemos uma
                garantia de 7 dias para o reembolso de 100% do seu investimento.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
