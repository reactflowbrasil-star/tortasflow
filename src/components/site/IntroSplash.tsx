import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoWhite from "@/assets/logo-white.png";
import heroTorta from "@/assets/hero-torta.jpg";
import matilda from "@/assets/cake-matilda.jpg";
import bombom from "@/assets/cake-bombom.jpg";
import banoffee from "@/assets/cake-banoffee.jpg";
import ferrero from "@/assets/cake-ferrero.jpg";

type IntroSplashProps = {
  onFinish: () => void;
};

const slideImages = [heroTorta, matilda, bombom, banoffee, ferrero];

const heroText =
  "Transforme Tortas em uma Fonte de Renda Lucrativa. Aprenda a produzir Tortas de Feira irresistíveis e fature alto mesmo começando do absoluto zero.";

export function IntroSplash({ onFinish }: IntroSplashProps) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0, left: 0 });

    const timer = window.setTimeout(onFinish, 10000);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onFinish]);

  useEffect(() => {
    let cursor = 0;

    const typeTimer = window.setInterval(() => {
      cursor += 1;
      setTypedText(heroText.slice(0, cursor));

      if (cursor >= heroText.length) {
        window.clearInterval(typeTimer);
      }
    }, 34);

    return () => window.clearInterval(typeTimer);
  }, []);

  return (
    <motion.section
      aria-label="Introducao Tortas Flow"
      className="fixed inset-0 left-0 top-0 z-[100] isolate flex h-dvh w-screen items-center justify-center overflow-hidden bg-chocolate text-cream"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
    >
      {slideImages.map((image, index) => (
        <motion.img
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-0"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: [0, 0.34, 0.34, 0], scale: [1, 1.07] }}
          transition={{
            duration: 5.5,
            delay: index * 2,
            repeat: Infinity,
            repeatDelay: slideImages.length * 2 - 5.5,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,8,8,0.92),rgba(109,15,27,0.74)_52%,rgba(59,31,31,0.88))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,232,213,0.12),transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-chocolate via-chocolate/55 to-transparent" />

      <button
        type="button"
        onClick={onFinish}
        className="absolute right-5 top-5 z-10 rounded-full border border-gold/45 bg-black/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition hover:border-gold hover:bg-gold/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold md:right-8 md:top-8"
      >
        Pular intro
      </button>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <motion.img
          src={logoWhite}
          alt="Tortas Flow"
          className="h-auto w-[min(82vw,560px)] drop-shadow-[0_28px_80px_rgba(0,0,0,0.68)]"
          initial={{ opacity: 0, scale: 0.86, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.div
          className="mt-8 min-h-[8rem] max-w-3xl rounded-2xl border border-gold/25 bg-black/22 px-5 py-5 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-sm sm:min-h-[7rem] sm:px-7"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold sm:text-xs">
            Especialista em Tortas de Feira
          </p>
          <p className="font-display text-2xl leading-tight text-cream sm:text-4xl">
            {typedText}
            <motion.span
              aria-hidden="true"
              className="ml-1 inline-block h-[1em] w-0.5 translate-y-1 bg-gold"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </p>
        </motion.div>

        <motion.div
          className="mt-8 h-1 w-full max-w-sm overflow-hidden rounded-full bg-cream/20"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.div
            className="h-full origin-left rounded-full bg-gradient-to-r from-gold-soft via-gold to-cream"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 10, ease: "linear" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
