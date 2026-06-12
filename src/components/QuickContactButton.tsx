import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Instagram, MapPin, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../assets/logo.png";

export default function QuickContactButton() {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!expanded) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [expanded]);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            className="mb-4 w-80 bg-panel-dark border border-white/10 rounded-2xl p-5 shadow-2xl text-left overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-24 h-24 bg-court-neon/10 rounded-full blur-[20px] pointer-events-none" />

            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
              <div>
                <h4 className="font-display font-bold text-sm text-white">Raquetes Clube Atendimento</h4>
                <span className="text-[10px] font-mono tracking-widest text-court-neon uppercase">
                  Selecione uma unidade
                </span>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="p-1.5 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                aria-label="Fechar atendimento"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-2.5 text-xs">
                <CheckCircle2 className="w-4 h-4 text-court-emerald shrink-0" />
                <div>
                  <span className="block font-semibold text-white">Secretarias online</span>
                  <span className="block text-[10px] text-gray-400 font-mono">Contato direto pelo WhatsApp</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <MapPin className="w-4 h-4 text-court-neon shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium">Americana ou Nova Odessa</span>
                  <p className="text-[10px] text-gray-400 leading-tight">
                    Escolha a unidade que deseja contatar.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <a
                href="https://wa.me/5519981522647?text=Ol%C3%A1%21+Gostaria+de+falar+com+a+secretaria+do+Raquetes+Clube+-+Unidade+Americana+que+vi+no+site."
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between py-3 px-3.5 rounded-xl bg-court-neon hover:bg-white text-dark-bg font-extrabold text-[11px] uppercase tracking-wider transition-colors cursor-pointer group"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  Americana
                </span>
                <span className="text-[9px] font-mono opacity-80">(19) 98152-2647</span>
              </a>

              <a
                href="https://wa.me/5519920127054?text=Ol%C3%A1%21+Gostaria+de+falar+com+a+secretaria+do+Raquetes+Clube+-+Unidade+Nova+Odessa+que+vi+no+site."
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between py-3 px-3.5 rounded-xl bg-court-emerald hover:bg-white text-dark-bg font-extrabold text-[11px] uppercase tracking-wider transition-colors cursor-pointer group border border-court-emerald"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  Nova Odessa
                </span>
                <span className="text-[9px] font-mono opacity-80">(19) 92012-7054</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setExpanded((value) => !value)}
        className="w-16 h-16 rounded-full bg-dark-bg/90 hover:bg-panel-dark flex items-center justify-center shadow-2xl shadow-court-neon/25 cursor-pointer glow-neon relative border border-court-neon/60 backdrop-blur-md"
        id="floating-quick-contact"
        aria-label="Atendimento rápido pelo WhatsApp"
      >
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full rounded-full bg-court-neon text-dark-bg flex items-center justify-center"
            >
              <X className="w-6 h-6 stroke-[2.5]" />
            </motion.span>
          ) : (
            <motion.span
              key="brand"
              initial={{ rotate: 12, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -12, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img
                src={logo}
                alt=""
                className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(8,174,234,0.45)]"
              />
              <span className="absolute -right-1 -bottom-1 w-7 h-7 rounded-full bg-court-neon border-2 border-dark-bg flex items-center justify-center text-dark-bg shadow-lg">
                <MessageCircle className="w-4 h-4 fill-current stroke-[2.5]" />
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <a
        href="https://www.instagram.com/raquetesclube/"
        target="_blank"
        rel="noreferrer"
        className="mt-3 w-14 h-14 rounded-full bg-panel-dark/95 hover:bg-white text-court-neon hover:text-dark-bg flex items-center justify-center shadow-2xl shadow-court-neon/10 cursor-pointer border border-court-neon/40 backdrop-blur-md transition-colors"
        aria-label="Instagram Raquetes Clube"
      >
        <Instagram className="w-6 h-6" />
      </a>
    </div>
  );
}
