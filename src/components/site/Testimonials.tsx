import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  {
    name: "Camila R.",
    role: "Aluna desde 2023",
    initials: "CR",
    text: "Comecei vendendo fatias na feira e hoje já tenho minha própria clientela fixa! Saí do zero e em 3 meses dobrei minha renda.",
  },
  {
    name: "Juliana M.",
    role: "Confeiteira em casa",
    initials: "JM",
    text: "As receitas são incríveis e muito fáceis de fazer. A precificação foi o que mudou meu jogo — finalmente sei o quanto cobrar.",
  },
  {
    name: "Patrícia L.",
    role: "Empreendedora",
    initials: "PL",
    text: "Consegui recuperar meu investimento na primeira semana. A Torta Matilda virou a queridinha das encomendas.",
  },
  {
    name: "Aline F.",
    role: "Mãe e confeiteira",
    initials: "AF",
    text: "Trabalho de casa, cuido das crianças e ainda faturo todo final de semana na feira. Mudou minha vida.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = items[i];

  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-marsala">Depoimentos</p>
          <h2 className="font-display text-4xl text-chocolate md:text-5xl">
            Histórias <span className="italic text-marsala">reais</span> de transformação
          </h2>
        </div>

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto max-w-3xl rounded-3xl bg-card p-8 shadow-luxe md:p-12"
            >
              <Quote className="absolute -top-5 left-8 h-10 w-10 text-gold" />
              <div className="mb-4 flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-display text-2xl leading-relaxed text-chocolate md:text-3xl">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-marsala-grad font-display text-cream">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-chocolate">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setI((p) => (p - 1 + items.length) % items.length)}
              className="rounded-full border border-border bg-card p-2 text-chocolate transition hover:border-gold hover:text-marsala"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-marsala" : "w-2 bg-marsala/30"}`}
                  aria-label={`Depoimento ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((p) => (p + 1) % items.length)}
              className="rounded-full border border-border bg-card p-2 text-chocolate transition hover:border-gold hover:text-marsala"
              aria-label="Próximo"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
