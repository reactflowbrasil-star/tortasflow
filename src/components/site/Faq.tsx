import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "O curso é online?", a: "Sim, 100% online. Você assiste quando e onde quiser, no seu ritmo." },
  { q: "Terei acesso vitalício?", a: "Sim. Após a compra você tem acesso para sempre, incluindo todas as atualizações futuras." },
  { q: "Posso assistir pelo celular?", a: "Pode sim — a plataforma é totalmente responsiva e funciona em celular, tablet e computador." },
  { q: "O curso possui certificado?", a: "Sim, ao concluir você recebe um certificado digital de conclusão." },
  { q: "Preciso ter experiência?", a: "Não. O curso começa do absoluto zero e te leva até o nível profissional." },
  { q: "Terei suporte?", a: "Sim, você terá suporte exclusivo da nossa equipe para tirar todas as suas dúvidas." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-marsala">Perguntas frequentes</p>
          <h2 className="font-display text-4xl text-chocolate md:text-5xl">
            Tudo o que você <span className="italic text-marsala">precisa saber</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border bg-card transition ${active ? "border-gold shadow-luxe" : "border-border"}`}
              >
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={active}
                >
                  <span className="font-display text-lg text-chocolate md:text-xl">{f.q}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-marsala transition-transform ${active ? "rotate-45" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground md:text-base">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
