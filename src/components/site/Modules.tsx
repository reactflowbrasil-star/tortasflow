import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Cookie, ChefHat, Heart, Crown, Snowflake, Sparkles, Layers, Calculator, Store, Megaphone, Gift, BookOpen } from "lucide-react";

const modules = [
  { icon: BookOpen, title: "Introdução ao Mercado de Tortas", desc: "Entenda o cenário, oportunidades e como se posicionar para vender muito." },
  { icon: ChefHat, title: "Massas Profissionais", desc: "Massas crocantes, amanteigadas e estáveis para qualquer tipo de torta." },
  { icon: Heart, title: "Recheios Cremosos", desc: "Cremes sedosos, estáveis e com sabor inesquecível." },
  { icon: Cookie, title: "Tortas Clássicas", desc: "Os campeões de venda em qualquer feira do Brasil." },
  { icon: Crown, title: "Tortas Premium", desc: "Receitas sofisticadas para ticket alto e encomendas." },
  { icon: Snowflake, title: "Tortas Geladas", desc: "Versões refrescantes perfeitas para o verão e delivery." },
  { icon: Sparkles, title: "Coberturas e Finalizações", desc: "Brilho, textura e acabamento profissional em cada fatia." },
  { icon: Layers, title: "Montagem Profissional", desc: "Camadas equilibradas, cortes perfeitos e apresentação impecável." },
  { icon: Calculator, title: "Precificação e Lucro", desc: "Planilha exclusiva para precificar sem perder margem." },
  { icon: Store, title: "Vendas em Feiras", desc: "Como montar sua banca, atrair clientes e vender tudo." },
  { icon: Megaphone, title: "Marketing para Confeitaria", desc: "Instagram, WhatsApp e fotos que vendem todos os dias." },
  { icon: Gift, title: "Bônus Exclusivos", desc: "E-books, planilhas e receitas extras liberados para alunas." },
];

export function Modules() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="modulos" className="relative bg-gradient-to-b from-cream-soft via-cream to-cream-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-marsala">12 módulos completos</p>
          <h2 className="font-display text-4xl text-chocolate md:text-5xl">
            Uma jornada do <span className="italic text-marsala">zero ao lucro</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Cada módulo foi desenhado para você aplicar e ver resultado já na próxima feira.</p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2">
          {modules.map((m, i) => {
            const active = open === i;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className={`group rounded-2xl border bg-card transition-all ${active ? "border-gold shadow-luxe" : "border-border hover:border-gold/60"}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(active ? null : i)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left"
                  aria-expanded={active}
                >
                  <span className="font-display text-sm text-gold/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-marsala-grad text-cream">
                    <m.icon className="h-4 w-4" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-lg text-chocolate">{m.title}</span>
                  </span>
                  <ChevronDown className={`h-5 w-5 text-marsala transition-transform ${active ? "rotate-180" : ""}`} />
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
                      <p className="px-5 pb-5 pl-[4.5rem] text-sm text-muted-foreground">{m.desc}</p>
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
