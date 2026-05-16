import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calculator,
  Check,
  ChefHat,
  Gift,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { Countdown } from "./Countdown";
import { CHECKOUT_URL } from "@/lib/checkout";

const includes = [
  "12 módulos completos em vídeo HD",
  "Comunidade exclusiva de alunas",
  "Acesso vitalício às atualizações",
  "Suporte direto com a equipe",
];

const bonuses = [
  { icon: ChefHat, title: "Mais de 50 receitas exclusivas" },
  { icon: Calculator, title: "Planilha de precificação profissional" },
  { icon: BookOpen, title: "E-book de marketing para confeitaria" },
  { icon: Award, title: "Certificado de conclusão" },
];

export function Offer() {
  return (
    <section
      id="oferta"
      className="relative isolate overflow-hidden bg-marsala-radial py-20 text-cream md:py-32"
    >
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-marsala/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Oferta especial</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Sua nova fonte de renda <br className="hidden md:block" />
            começa <span className="italic text-gradient-gold">hoje</span>
          </h2>
          <p className="mt-4 text-sm uppercase tracking-widest text-cream/70">
            Oferta especial termina em:
          </p>
          <div className="mt-5">
            <Countdown />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-[oklch(0.22_0.06_30)] to-[oklch(0.18_0.05_20)] p-1 shadow-luxe md:mt-12 md:rounded-[2rem]"
        >
          <div className="grid gap-0 rounded-[1.45rem] bg-chocolate/60 backdrop-blur md:grid-cols-[1.1fr_1fr] md:rounded-[1.75rem]">
            <div className="p-6 md:p-12">
              <p className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-widest text-gold">
                <Sparkles className="h-3.5 w-3.5" /> Plano Completo
              </p>
              <h3 className="mt-5 font-display text-3xl leading-tight text-cream">
                Tortas Flow — Especialista em Tortas de Feira
              </h3>
              <p className="mt-3 text-sm leading-6 text-cream/75">
                Na compra do curso completo você recebe todo o treinamento e ainda leva
                inteiramente grátis:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:block md:space-y-3">
                {includes.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-cream/85">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                      <Check className="h-3 w-3" />
                    </span>
                    {i}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-gold/35 bg-gold/10 p-4">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  <Gift className="h-4 w-4" />
                  Bônus grátis
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {bonuses.map((bonus) => (
                    <div key={bonus.title} className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-chocolate/50 text-gold">
                        <bonus.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium leading-snug text-cream">
                        {bonus.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative border-t border-gold/20 bg-marsala-grad/60 p-6 md:border-t-0 md:border-l md:p-12">
              <div className="absolute inset-0 grain pointer-events-none" />
              <div className="relative">
                <p className="text-xs uppercase tracking-widest text-cream/60">Curso completo</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-gold">
                  Oferta por tempo limitado
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-cream/70">
                  12x de
                </p>
                <p className="font-display text-6xl leading-none text-cream sm:text-7xl">
                  R$ 13<span className="text-3xl text-cream/70">,44</span>
                </p>
                <div className="mt-4 rounded-2xl border border-gold/30 bg-black/20 px-4 py-3">
                  <p className="text-xs uppercase tracking-widest text-cream/60">ou no Pix por</p>
                  <p className="mt-1 font-display text-3xl leading-none text-gold">
                    R$ 129<span className="text-xl text-gold/80">,90</span>
                  </p>
                </div>

                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-luxe mt-8 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] sm:px-6 sm:text-sm sm:tracking-[0.13em]"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Quero acessar o curso
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-3 text-center text-[11px] uppercase tracking-widest text-cream/60">
                  Pagamento 100% seguro
                </p>

                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold/30 bg-black/20 p-4">
                  <ShieldCheck className="h-8 w-8 shrink-0 text-gold" />
                  <p className="text-xs text-cream/80">
                    <span className="font-semibold text-gold">
                      7 dias de garantia incondicional.
                    </span>{" "}
                    Não gostou? Devolvemos 100% do valor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
