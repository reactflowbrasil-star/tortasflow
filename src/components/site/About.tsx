import { motion } from "framer-motion";
import chef from "@/assets/about-chef.jpg";
import logoBlack from "@/assets/logo-black.png";

export function About() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold/30 via-transparent to-marsala/30 blur-2xl" />
          <img
            src={chef}
            alt="Chef confeiteira da Tortas Flow"
            loading="lazy"
            className="relative rounded-[2rem] shadow-luxe ring-1 ring-gold/30"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -right-4 bottom-8 rounded-2xl bg-card px-5 py-3 shadow-luxe"
          >
            <p className="text-[10px] uppercase tracking-widest text-marsala">+ de</p>
            <p className="font-display text-2xl text-chocolate">4.200 alunas</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src={logoBlack} alt="Tortas Flow" className="mb-6 h-12 w-auto" />
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-marsala">Quem é a Tortas Flow?</p>
          <h2 className="font-display text-4xl text-chocolate md:text-5xl">
            Receitas que viraram <span className="italic text-marsala">negócios reais</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            A Tortas Flow nasceu para ajudar pessoas a transformarem a confeitaria em uma
            fonte real de renda, utilizando receitas modernas, técnicas profissionais e
            estratégias de vendas altamente lucrativas.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Mais do que um curso — uma jornada completa do primeiro doce à sua marca consolidada
            na feira, no delivery e nas encomendas premium.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { k: "+ 4.2k", v: "Alunas" },
              { k: "+ 50", v: "Receitas" },
              { k: "4.9", v: "Avaliação" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card px-3 py-4 text-center">
                <p className="font-display text-2xl text-marsala">{s.k}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
