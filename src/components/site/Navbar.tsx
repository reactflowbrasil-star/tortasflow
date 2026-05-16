import { motion, useScroll, useTransform } from "framer-motion";
import logoWhite from "@/assets/logo-white.png";
import { InstallPwaButton } from "./InstallPwaButton";

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
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3.5 md:px-8 md:py-4">
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
        <div className="hidden items-center gap-2 md:flex">
          <InstallPwaButton compact />
          <a
            href="#oferta"
            className="btn-luxe inline-flex min-h-0 items-center px-5 py-2.5 text-xs font-bold uppercase tracking-[0.13em]"
          >
            Garantir minha vaga
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
