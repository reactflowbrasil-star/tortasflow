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

const typewriterPhrases = [
  "uma fonte de renda lucrativa",
  "vendas todos os dias",
  "sobremesas premium",
  "um negócio doce",
];

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
    let phraseIndex = 0;
    let cursor = 0;
    let deleting = false;
    let pauseTicks = 0;

    const typeTimer = window.setInterval(() => {
      const phrase = typewriterPhrases[phraseIndex];

      if (!deleting && cursor < phrase.length) {
        cursor += 1;
      } else if (!deleting && pauseTicks < 18) {
        pauseTicks += 1;
      } else if (!deleting) {
        deleting = true;
        pauseTicks = 0;
      } else if (cursor > 0) {
        cursor -= 1;
      } else {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
      }

      setTypedText(phrase.slice(0, cursor));
    }, 58);

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
          animate={{ opacity: [0, 0.5, 0.5, 0], scale: [1, 1.07] }}
          transition={{
            duration: 5.5,
            delay: index * 2,
            repeat: Infinity,
            repeatDelay: slideImages.length * 2 - 5.5,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,8,8,0.78),rgba(109,15,27,0.56)_52%,rgba(59,31,31,0.76))]" />
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
          className="mt-8 flex min-h-[8rem] max-w-4xl flex-col items-center justify-center text-balance drop-shadow-[0_18px_38px_rgba(0,0,0,0.72)] sm:min-h-[7rem]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold sm:text-xs">
            Especialista em Tortas de Feira
          </p>
          <p className="font-display text-4xl leading-none text-cream sm:text-6xl">
            Transforme tortas em
            <span className="mt-2 block min-h-[1.05em] italic text-gradient-gold">
              {typedText}
              <motion.span
                aria-hidden="true"
                className="ml-1 inline-block h-[0.82em] w-0.5 translate-y-1 bg-gold"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </span>
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
