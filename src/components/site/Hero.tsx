import { motion } from "framer-motion";
import { ShieldCheck, Infinity as InfinityIcon, Award, Wifi } from "lucide-react";
import heroTorta from "@/assets/hero-torta.jpg";

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
      className="relative grain isolate overflow-hidden bg-marsala-radial pt-28 pb-24 md:pt-32 md:pb-32"
    >
      {/* Decorative orbs */}
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

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Especialista em Tortas de Feira
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl leading-[1.05] text-cream md:text-6xl lg:text-7xl"
          >
            Transforme Tortas em uma{" "}
            <span className="text-gradient-gold italic">Fonte de Renda</span> Lucrativa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-cream/80 md:text-lg"
          >
            Aprenda a produzir Tortas de Feira irresistíveis e fature alto vendendo fatias,
            encomendas e sobremesas premium — mesmo começando do absoluto zero.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#oferta"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-gold via-[oklch(0.85_0.12_75)] to-gold bg-[length:200%_100%] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-chocolate shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-luxe animate-shimmer"
            >
              Quero começar agora
            </a>
            <a
              href="#oferta"
              className="inline-flex items-center justify-center rounded-full border border-gold/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream transition hover:bg-gold/10"
            >
              Garantir minha vaga
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {badges.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2 rounded-xl glass-dark px-3 py-2.5"
              >
                <b.icon className="h-4 w-4 text-gold" />
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
          className="relative mx-auto w-full max-w-lg"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold/30 via-transparent to-marsala/40 blur-2xl" />
            <img
              src={heroTorta}
              alt="Torta artesanal premium com frutas vermelhas e ganache"
              width={1024}
              height={1024}
              className="relative rounded-[2rem] shadow-luxe ring-1 ring-gold/30"
            />
            <motion.div
              className="absolute -left-6 -top-6 rounded-2xl glass-dark px-4 py-3 text-cream shadow-luxe"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
              <p className="text-[10px] uppercase tracking-widest text-gold/80">Margem média</p>
              <p className="font-display text-2xl text-gold">+ 280%</p>
            </motion.div>
            <motion.div
              className="absolute -right-4 bottom-6 rounded-2xl glass-dark px-4 py-3 text-cream shadow-luxe"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            >
              <p className="text-[10px] uppercase tracking-widest text-gold/80">Alunas ativas</p>
              <p className="font-display text-2xl text-gold">+ 4.200</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
