import { motion, useScroll, useTransform } from "framer-motion";
import logoWhite from "@/assets/logo-white.png";

const links = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#modulos", label: "Módulos" },
  { href: "#galeria", label: "Receitas" },
  { href: "#oferta", label: "Oferta" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 120], ["rgba(59,31,31,0)", "rgba(30,12,12,0.85)"]);
  const blur = useTransform(scrollY, [0, 120], ["blur(0px)", "blur(14px)"]);

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: blur }}
      className="fixed inset-x-0 top-0 z-50 transition-colors"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoWhite} alt="Tortas Flow" className="h-8 md:h-10 w-auto" />
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-cream/80 transition hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#oferta"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-gold to-[oklch(0.85_0.12_75)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-chocolate shadow-glow transition hover:-translate-y-0.5"
        >
          Garantir minha vaga
        </a>
      </nav>
    </motion.header>
  );
}
