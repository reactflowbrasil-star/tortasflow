import { motion } from "framer-motion";
import matilda from "@/assets/cake-matilda.jpg";
import ninho from "@/assets/cake-ninho.jpg";
import banoffee from "@/assets/cake-banoffee.jpg";
import prestigio from "@/assets/cake-prestigio.jpg";
import sensacao from "@/assets/cake-sensacao.jpg";
import bombom from "@/assets/cake-bombom.jpg";
import tiramisu from "@/assets/cake-tiramisu.jpg";
import ferrero from "@/assets/cake-ferrero.jpg";
import limao from "@/assets/cake-limao.jpg";

const cakes = [
  { src: matilda, name: "Torta Matilda", tone: "Chocolate intenso com ganache aveludada" },
  { src: ninho, name: "Torta Ninho com Nutella", tone: "Cremosa, doce na medida" },
  { src: banoffee, name: "Torta Banoffee", tone: "Caramelo, banana e chantilly" },
  { src: prestigio, name: "Torta Prestígio", tone: "Coco, brigadeiro e chocolate" },
  { src: sensacao, name: "Torta Sensação", tone: "Chocolate ao leite com morango" },
  { src: bombom, name: "Torta Bombom de Morango", tone: "Morangos cobertos de chocolate" },
  { src: tiramisu, name: "Torta Tiramisù", tone: "Mascarpone, café e cacau" },
  { src: ferrero, name: "Torta Ferrero", tone: "Avelã, crocância e chocolate belga" },
  { src: limao, name: "Torta Limão Siciliano", tone: "Refrescante com merengue maçaricado" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative overflow-hidden bg-chocolate py-24 text-cream md:py-32">
      <div className="absolute inset-0 bg-marsala-radial opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Catálogo de receitas</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Tortas que <span className="italic text-gradient-gold">vendem sozinhas</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Você vai dominar todas as receitas abaixo — e muitas outras dentro do curso.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {cakes.map((c, i) => (
            <motion.figure
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-gold/20 bg-chocolate/80 shadow-luxe"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-black sm:aspect-[5/6]">
                <img
                  src={c.src}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-chocolate/45 to-transparent" />
              </div>
              <figcaption className="p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold">Receita inclusa</p>
                <p className="mt-2 font-display text-3xl leading-tight sm:text-2xl">{c.name}</p>
                <p className="mt-2 text-sm leading-6 text-cream/72 sm:text-xs sm:leading-5">
                  {c.tone}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
