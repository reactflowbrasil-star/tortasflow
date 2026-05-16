import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-gold/40 bg-card p-8 text-center shadow-luxe md:p-14"
        >
          <div className="absolute -inset-1 -z-10 rounded-[2rem] bg-gradient-to-r from-gold/40 via-transparent to-marsala/40 blur-2xl" />
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-marsala-grad text-gold shadow-glow animate-pulse-glow"
          >
            <ShieldCheck className="h-10 w-10" />
          </motion.div>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-marsala">Garantia de 7 dias</p>
          <h2 className="mt-3 font-display text-3xl text-chocolate md:text-4xl">
            Risco zero para você
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Você possui <span className="font-semibold text-chocolate">7 dias de garantia incondicional</span>. Caso não goste do curso, devolvemos 100% do seu investimento — sem perguntas, sem burocracia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
