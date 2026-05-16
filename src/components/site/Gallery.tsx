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

        <div className="mt-14 columns-2 gap-5 lg:columns-3 [column-fill:_balance]">
          {cakes.map((c, i) => (
            <motion.figure
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative mb-5 break-inside-avoid overflow-hidden rounded-3xl ring-1 ring-gold/20"
            >
              <img
                src={c.src}
                alt={c.name}
                loading="lazy"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/95 via-chocolate/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold">Receita inclusa</p>
                <p className="mt-1 font-display text-2xl">{c.name}</p>
                <p className="mt-1 text-xs text-cream/70">{c.tone}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
