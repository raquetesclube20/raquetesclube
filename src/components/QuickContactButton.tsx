import React, { useState, useEffect } from "react";
import { MessageCircle, X, CheckCircle2, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function QuickContactButton() {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show floating button after scrolling 200px
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Pop-up panel block */}
            {expanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="mb-4 w-80 bg-panel-dark border border-white/10 rounded-2xl p-5 shadow-2xl text-left overflow-hidden relative"
              >
                {/* Visual spot decorative light */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-court-neon/10 rounded-full blur-[20px] pointer-events-none" />

                {/* Header widget */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Raquetes Clube Atendimento</h4>
                    <span className="text-[10px] font-mono tracking-widest text-court-neon uppercase">Selecione uma Unidade</span>
                  </div>
                  <button
                    onClick={() => setExpanded(false)}
                    className="p-1.5 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Body details */}
                <div className="space-y-3 mb-5">
                  
                  {/* Active Status Row */}
                  <div className="flex items-center gap-2.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-court-emerald shrink-0" />
                    <div>
                      <span className="block font-semibold text-white">Secretarias Online</span>
                      <span className="block text-[10px] text-gray-400 font-mono">Suporte Direto WhatsApp</span>
                    </div>
                  </div>

                  {/* Hour row */}
                  <div className="flex items-start gap-2.5 text-xs text-gray-300">
                    <MapPin className="w-4 h-4 text-court-neon shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium">Americana ou Nova Odessa</span>
                      <p className="text-[10px] text-gray-400 leading-tight">Escolha qual unidade você deseja contatar abaixo:</p>
                    </div>
                  </div>

                </div>

                {/* Direct Action triggers */}
                <div className="space-y-2.5">
                  <a
                    href="https://wa.me/5519991234451?text=Ol%C3%A1%21+Gostaria+de+falar+com+a+secretaria+do+Raquetes+Clube+-+Unidade+Americana+que+vi+no+site."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-between py-3 px-3.5 rounded-xl bg-court-neon hover:bg-white text-dark-bg font-extrabold text-[11px] uppercase tracking-wider transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                      <span>🏡 Americana</span>
                    </div>
                    <span className="text-[9px] font-mono opacity-80">(19) 99123-4451</span>
                  </a>

                  <a
                    href="https://wa.me/5519997650227?text=Ol%C3%A1%21+Gostaria+de+falar+com+a+secretaria+do+Raquetes+Clube+-+Unidade+Nova+Odessa+que+vi+no+site."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-between py-3 px-3.5 rounded-xl bg-court-emerald hover:bg-white text-dark-bg font-extrabold text-[11px] uppercase tracking-wider transition-colors cursor-pointer group border border-court-emerald"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                      <span>🌴 Nova Odessa</span>
                    </div>
                    <span className="text-[9px] font-mono opacity-80">(19) 99765-0227</span>
                  </a>
                </div>

              </motion.div>
            )}

            {/* Main Floating Circle Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setExpanded(!expanded)}
              className="w-14 h-14 rounded-full bg-court-neon hover:bg-white text-dark-bg flex items-center justify-center shadow-2xl shadow-court-neon/25 cursor-pointer glow-neon relative border border-court-neon"
              id="floating-quick-contact"
              aria-label="Atendimento Rápido"
            >
              <AnimatePresence mode="wait">
                {expanded ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 stroke-[2.5]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="chat"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    {/* Live notification dot */}
                    <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-dark-bg flex items-center justify-center text-[8px] font-bold text-white leading-none">1</span>
                    <MessageCircle className="w-6 h-6 stroke-[2.5] fill-current" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
