import { Instagram, Mail } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

export function Footer() {
  return (
    <footer className="relative bg-chocolate pt-16 pb-24 text-cream/80 md:pb-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logoWhite} alt="Tortas Flow" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-cream/60">
              Transformando paixão por confeitaria em renda real, com receitas testadas e
              estratégias de venda comprovadas.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Navegação</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#beneficios" className="hover:text-gold">Benefícios</a></li>
              <li><a href="#modulos" className="hover:text-gold">Módulos</a></li>
              <li><a href="#galeria" className="hover:text-gold">Receitas</a></li>
              <li><a href="#oferta" className="hover:text-gold">Oferta</a></li>
              <li><a href="#faq" className="hover:text-gold">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Contato</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> contato@tortasflow.com.br</li>
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-gold" /> @tortasflow</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Tortas Flow. Todos os direitos reservados.</p>
          <p>Feito com carinho para confeiteiras.</p>
        </div>
      </div>
    </footer>
  );
}
