import { useEffect, useState } from "react";
import { Download } from "lucide-react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

type InstallPwaButtonProps = {
  compact?: boolean;
};

export function InstallPwaButton({ compact = false }: InstallPwaButtonProps) {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    const handleInstalled = () => {
      setInstalled(true);
      setInstallPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  if (!installPrompt || installed) {
    return null;
  }

  const installApp = async () => {
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;

    if (choice.outcome !== "dismissed") {
      setInstallPrompt(null);
    }
  };

  return (
    <button
      type="button"
      onClick={installApp}
      className={
        compact
          ? "inline-flex items-center justify-center gap-1.5 rounded-full border border-gold/35 bg-cream/8 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-cream transition hover:border-gold hover:bg-gold/12"
          : "btn-ghost-luxe inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.13em]"
      }
    >
      <Download className="h-3.5 w-3.5" />
      {compact ? "Instalar" : "Instalar app"}
    </button>
  );
}
