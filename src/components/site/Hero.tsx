import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Infinity as InfinityIcon,
  ShieldCheck,
  ShoppingBag,
  Wifi,
} from "lucide-react";
import heroTorta from "@/assets/hero-torta.jpg";
import { CHECKOUT_URL } from "@/lib/checkout";

const badges = [
  { icon: InfinityIcon, label: "Acesso Vitalício" },
  { icon: Wifi, label: "Curso Online" },
  { icon: Award, label: "Certificado Incluso" },
  { icon: ShieldCheck, label: "Garantia de 7 Dias" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative grain isolate overflow-hidden bg-marsala-radial pt-24 pb-20 md:pt-32 md:pb-32"
    >
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-marsala/40 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-12">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full glass-dark px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-gold sm:text-xs sm:tracking-[0.2em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Especialista em Tortas de Feira
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[2.65rem] leading-[0.98] text-cream sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Transforme Tortas em uma{" "}
            <span className="text-gradient-gold italic">Fonte de Renda</span> Lucrativa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg lg:mx-0"
          >
            Aprenda a produzir Tortas de Feira irresistíveis e fature alto vendendo fatias,
            encomendas e sobremesas premium, mesmo começando do absoluto zero.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-luxe inline-flex w-full items-center justify-center gap-2 whitespace-nowrap px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.13em]"
            >
              <ShoppingBag className="h-4 w-4" />
              Quero começar agora
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-luxe inline-flex w-full items-center justify-center gap-2 whitespace-nowrap px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.13em]"
            >
              Garantir minha vaga
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-9 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3"
          >
            {badges.map((b) => (
              <li
                key={b.label}
                className="flex min-h-14 items-center gap-2 rounded-xl glass-dark px-3 py-2.5 text-left"
              >
                <b.icon className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-[11px] font-medium uppercase tracking-wider text-cream/90">
                  {b.label}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[22rem] sm:max-w-md lg:max-w-lg"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/30 via-transparent to-marsala/40 blur-2xl sm:rounded-[2.5rem]" />
            <img
              src={heroTorta}
              alt="Torta artesanal premium com frutas vermelhas e ganache"
              width={1024}
              height={1024}
              className="relative aspect-square w-full rounded-[1.5rem] object-cover shadow-luxe ring-1 ring-gold/30 sm:rounded-[2rem]"
            />
            <motion.div
              className="absolute -left-2 -top-4 rounded-2xl glass-dark px-3 py-2.5 text-cream shadow-luxe sm:-left-6 sm:-top-6 sm:px-4 sm:py-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
              <p className="text-[10px] uppercase tracking-widest text-gold/80">Margem média</p>
              <p className="font-display text-xl text-gold sm:text-2xl">+ 280%</p>
            </motion.div>
            <motion.div
              className="absolute -right-2 bottom-4 rounded-2xl glass-dark px-3 py-2.5 text-cream shadow-luxe sm:-right-4 sm:bottom-6 sm:px-4 sm:py-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            >
              <p className="text-[10px] uppercase tracking-widest text-gold/80">Alunas ativas</p>
              <p className="font-display text-xl text-gold sm:text-2xl">+ 4.200</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
