import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Loader2, LockKeyhole, X } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/checkout";

const LEAD_EMAIL = "reactflowbrasil@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${LEAD_EMAIL}`;

const encodeForm = (data: Record<string, string>) =>
  new URLSearchParams(data).toString();

const openCheckout = () => {
  const checkoutWindow = window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");

  if (!checkoutWindow) {
    window.location.assign(CHECKOUT_URL);
  }
};

export function CheckoutLeadModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ nome: "", whatsapp: "", instagram: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleCheckoutClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>(`a[href="${CHECKOUT_URL}"]`);

      if (!link) {
        return;
      }

      event.preventDefault();
      setOpen(true);
    };

    document.addEventListener("click", handleCheckoutClick);

    return () => document.removeEventListener("click", handleCheckoutClick);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const lead = {
      nome: form.nome.trim(),
      whatsapp: form.whatsapp.trim(),
      instagram: form.instagram.trim(),
      email_destino: LEAD_EMAIL,
      origem: "Landing Page Tortas Flow",
    };

    try {
      const emailResponse = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...lead,
          _captcha: "false",
          _subject: "Novo lead para compra do curso Tortas Flow",
          _template: "table",
        }),
      });

      if (!emailResponse.ok) {
        throw new Error("email-submit-failed");
      }
    } catch {
      const netlifyResponse = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({
          "form-name": "checkout-lead",
          ...lead,
        }),
      });

      if (!netlifyResponse.ok) {
        setSubmitting(false);
        setError("Não foi possível enviar seus dados. Verifique os campos e tente novamente.");
        return;
      }
    }

    openCheckout();
    setSubmitting(false);
    setOpen(false);
  };

  return (
    <>
      <form name="checkout-lead" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="checkout-lead" />
        <input type="text" name="nome" />
        <input type="text" name="whatsapp" />
        <input type="text" name="instagram" />
        <input type="text" name="email_destino" />
        <input type="text" name="origem" />
      </form>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-black/70 px-4 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-lead-title"
          >
            <motion.form
              onSubmit={submitLead}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-gold/35 bg-chocolate p-6 text-cream shadow-[0_28px_90px_rgba(0,0,0,0.55)]"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <div className="absolute inset-0 grain pointer-events-none" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 bg-black/20 text-cream transition hover:border-gold hover:bg-gold/15"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                  Último passo
                </p>
                <h2 id="checkout-lead-title" className="mt-3 font-display text-3xl leading-tight">
                  Preencha seus dados para acessar a compra
                </h2>
                <p className="mt-3 text-sm leading-6 text-cream/72">
                  Vamos salvar seu contato e te levar direto para o checkout seguro.
                </p>

                <div className="mt-6 grid gap-4">
                  <label className="grid gap-2 text-sm font-medium text-cream/86">
                    Nome
                    <input
                      required
                      name="nome"
                      value={form.nome}
                      onChange={(event) => updateField("nome", event.target.value)}
                      className="h-12 rounded-2xl border border-gold/25 bg-black/24 px-4 text-cream outline-none transition placeholder:text-cream/35 focus:border-gold"
                      placeholder="Seu nome completo"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-medium text-cream/86">
                    WhatsApp
                    <input
                      required
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={(event) => updateField("whatsapp", event.target.value)}
                      className="h-12 rounded-2xl border border-gold/25 bg-black/24 px-4 text-cream outline-none transition placeholder:text-cream/35 focus:border-gold"
                      placeholder="(62) 98132-1845"
                      inputMode="tel"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-medium text-cream/86">
                    Instagram
                    <input
                      required
                      name="instagram"
                      value={form.instagram}
                      onChange={(event) => updateField("instagram", event.target.value)}
                      className="h-12 rounded-2xl border border-gold/25 bg-black/24 px-4 text-cream outline-none transition placeholder:text-cream/35 focus:border-gold"
                      placeholder="@seuinstagram"
                    />
                  </label>
                </div>

                {error && <p className="mt-4 text-sm text-red-200">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-luxe mt-6 inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <LockKeyhole className="h-4 w-4" />}
                  {submitting ? "Enviando..." : "Ir para compra"}
                  {!submitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
