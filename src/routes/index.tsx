import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { IntroSplash } from "@/components/site/IntroSplash";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Modules } from "@/components/site/Modules";
import { Gallery } from "@/components/site/Gallery";
import { Audience } from "@/components/site/Audience";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { Offer } from "@/components/site/Offer";
import { Guarantee } from "@/components/site/Guarantee";
import { Faq } from "@/components/site/Faq";
import { StickyCta } from "@/components/site/StickyCta";
import { PurchaseNotifications } from "@/components/site/PurchaseNotifications";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CheckoutLeadModal } from "@/components/site/CheckoutLeadModal";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tortas Flow — Especialista em Tortas de Feira | Curso Online" },
      {
        name: "description",
        content:
          "Aprenda a produzir Tortas de Feira irresistíveis e fature alto vendendo fatias, encomendas e sobremesas premium. Curso 100% online com acesso vitalício e 7 dias de garantia.",
      },
      { property: "og:title", content: "Tortas Flow — Especialista em Tortas de Feira" },
      {
        property: "og:description",
        content:
          "Transforme tortas em uma fonte de renda lucrativa com receitas exclusivas e estratégias de venda comprovadas.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Tortas Flow — Especialista em Tortas de Feira",
          description: "Curso online completo para produzir e vender tortas de feira lucrativas.",
          provider: { "@type": "Organization", name: "Tortas Flow" },
          inLanguage: "pt-BR",
          offers: { "@type": "Offer", price: "49.90", priceCurrency: "BRL" },
        }),
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [showIntro, setShowIntro] = useState(true);
  const finishIntro = useCallback(() => setShowIntro(false), []);

  return (
    <>
      <AnimatePresence>{showIntro && <IntroSplash onFinish={finishIntro} />}</AnimatePresence>
      <main className="bg-background text-foreground">
        <Navbar />
        <Hero />
        <Benefits />
        <Modules />
        <Gallery />
        <Audience />
        <Testimonials />
        <About />
        <Offer />
        <Guarantee />
        <Faq />
        <Footer />
        <StickyCta />
        <PurchaseNotifications />
        <WhatsAppFloat />
        <CheckoutLeadModal />
      </main>
    </>
  );
}
