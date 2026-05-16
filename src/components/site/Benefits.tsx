import { motion } from "framer-motion";
import { TrendingUp, BookHeart, Store, Sparkles, Infinity as InfinityIcon, MessageCircleHeart } from "lucide-react";

const items = [
  { icon: TrendingUp, title: "Alta margem de lucro", desc: "Receitas com custo baixo e ticket alto — multiplique seu investimento." },
  { icon: BookHeart, title: "Receitas exclusivas", desc: "Fórmulas testadas em feiras, com texturas e sabores que viciam." },
  { icon: Store, title: "Venda em feiras e delivery", desc: "Estratégias prontas para fatias, encomendas e entregas." },
  { icon: Sparkles, title: "Produção simples", desc: "Sem equipamentos caros. Comece direto na cozinha de casa." },
  { icon: InfinityIcon, title: "Acesso vitalício", desc: "Aulas sempre disponíveis, com atualizações constantes." },
  { icon: MessageCircleHeart, title: "Suporte exclusivo", desc: "Tire dúvidas com nossa equipe e cresça com a comunidade." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-marsala">Por que a Tortas Flow</p>
          <h2 className="font-display text-4xl text-chocolate md:text-5xl">
            Tudo o que você precisa para <span className="italic text-marsala">faturar de verdade</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:shadow-luxe"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/0 blur-2xl transition-all group-hover:bg-gold/40" />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-marsala-grad text-cream shadow-glow">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-chocolate">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
              <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
