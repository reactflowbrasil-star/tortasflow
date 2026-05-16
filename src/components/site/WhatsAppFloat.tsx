import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5562981321845?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20curso%20Tortas%20Flow";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Atendimento pelo WhatsApp"
      className="fixed right-3 top-1/2 z-50 inline-flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] ring-4 ring-white/20 transition hover:-translate-y-[calc(50%+0.25rem)] hover:scale-105 sm:right-5 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-45 motion-safe:animate-ping" />
      <span className="absolute -left-1 top-2 h-3 w-3 rounded-full bg-white/70 motion-safe:animate-pulse" />
      <MessageCircle className="relative h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}
