import { useEffect } from "react";
import { motion } from "framer-motion";
import logoWhite from "@/assets/logo-white.png";
import heroTorta from "@/assets/hero-torta.jpg";

type IntroSplashProps = {
  onFinish: () => void;
};

export function IntroSplash({ onFinish }: IntroSplashProps) {
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

  return (
    <motion.section
      aria-label="Introducao Tortas Flow"
      className="fixed inset-0 left-0 top-0 z-[100] isolate flex h-dvh w-screen items-center justify-center overflow-hidden bg-chocolate text-cream"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
    >
      <img
        src={heroTorta}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,12,12,0.96),rgba(109,15,27,0.88)_55%,rgba(59,31,31,0.94))]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-chocolate to-transparent" />

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
          className="h-auto w-[min(92vw,680px)] drop-shadow-[0_28px_70px_rgba(0,0,0,0.55)]"
          initial={{ opacity: 0, scale: 0.86, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.div
          className="mt-10 h-1 w-full max-w-sm overflow-hidden rounded-full bg-cream/20"
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
