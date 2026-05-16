import { motion } from "framer-motion";
import { Sprout, Wallet, ChefHat, Home, Crown } from "lucide-react";

const items = [
  { icon: Sprout, title: "Iniciantes", desc: "Mesmo quem nunca fez torta sai dominando as receitas." },
  { icon: Wallet, title: "Renda extra", desc: "Para complementar o salário em pouco tempo." },
  { icon: ChefHat, title: "Confeiteiras profissionais", desc: "Eleve seu cardápio com técnicas premium." },
  { icon: Home, title: "Trabalhar em casa", desc: "Monte seu próprio negócio na sua cozinha." },
  { icon: Crown, title: "Independência financeira", desc: "Para quem quer viver da confeitaria com lucro real." },
];

export function Audience() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-marsala">Para quem é</p>
          <h2 className="font-display text-4xl text-chocolate md:text-5xl">
            Feito para quem quer <span className="italic text-marsala">resultado real</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition hover:border-gold hover:shadow-luxe"
            >
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-marsala-grad text-cream shadow-glow">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg text-chocolate">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
