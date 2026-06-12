import React, { useState } from "react";
import { MODALITIES } from "../data";
import { Modality } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Activity, Sun, Zap, Target, Flame, Award, ChevronRight, X, Calendar, MapPin, CheckCircle, Info } from "lucide-react";

// Map string representation of icons to real React Lucide components safely
const IconMapping: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Activity: Activity,
  Sun: Sun,
  Zap: Zap,
  Target: Target,
  Flame: Flame,
  Award: Award,
};

export default function Modalidades() {
  const [selectedSport, setSelectedSport] = useState<Modality | null>(null);

  const handleOpenDetail = (sport: Modality) => {
    setSelectedSport(sport);
  };

  const handleCloseDetail = () => {
    setSelectedSport(null);
  };

  const handleScrollToAgenda = () => {
    setSelectedSport(null);
    const el = document.getElementById("agenda");
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 85,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative py-20 bg-dark-bg" id="modalidades">
      {/* Background radial effects */}
      <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-clay-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[45%] bg-court-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
            • ESTRUTURA COMPLETA •
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Nossas <span className="text-gradient-neon font-extrabold">Modalidades Esportivas</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            Selecione uma modalidade para ver onde jogar e seguir para a reserva pelo WhatsApp.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODALITIES.map((modality, idx) => {
            const IconComponent = IconMapping[modality.icon] || Activity;
            
            return (
              <motion.div
                key={modality.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => handleOpenDetail(modality)}
                className="group relative rounded-3xl bg-panel-dark/40 border border-white/5 hover:border-white/15 p-6 md:p-8 transition-all duration-300 hover:bg-panel-dark/70 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
                id={`card-modality-${modality.id}`}
              >
                {/* Glow bar top on card hover */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r opacity-40 group-hover:opacity-100 transition-opacity ${
                  modality.id === 'tenis' ? 'from-squash-cyan to-court-emerald' :
                  modality.id === 'beach-tennis' ? 'from-sand-warm to-clay-orange' :
                  modality.id === 'squash' ? 'from-court-neon to-court-emerald' :
                  'from-court-emerald to-sand-warm'
                }`} />

                <div>
                  {/* Icon + Court Count Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-court-neon/10 group-hover:border-court-neon/30 transition-all">
                      <IconComponent className="w-6 h-6 text-court-neon group-hover:scale-110 transition-transform" />
                    </div>
                    {modality.courtCount > 0 && (
                      <span className="text-[10px] font-mono tracking-wider text-gray-400 bg-white/5 border border-white/5 py-1 px-3 rounded-full">
                        {modality.courtCount} {modality.courtCount === 1 ? "QUADRA" : "QUADRAS"}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-court-neon transition-colors">
                    {modality.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-normal leading-relaxed mb-6">
                    {modality.description}
                  </p>
                </div>

                {/* Subtle Discrete CTA */}
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-court-neon font-medium mt-auto group-hover:translate-x-1.5 transition-transform">
                  Ver detalhes do esporte
                  <ChevronRight className="w-4 h-4" />
                </span>
                
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Sport Detail Drawer / Modal Block inside AnimatePresence */}
      <AnimatePresence>
        {selectedSport && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            onClick={handleCloseDetail}
            id="sport-modal-container"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl rounded-3xl bg-panel-dark border border-white/10 p-6 md:p-8 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Corner Graphic spot lights */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-court-neon/10 rounded-full blur-[40px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={handleCloseDetail}
                className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                id="close-sport-modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-court-neon/10 flex items-center justify-center text-court-neon">
                  {(() => {
                    const IconComponent = IconMapping[selectedSport.icon] || Activity;
                    return <IconComponent className="w-6 h-6" />;
                  })()}
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    {selectedSport.name}
                  </h3>
                  <p className="text-[10px] font-mono tracking-widest text-court-neon uppercase">
                    Raquetes Clube
                  </p>
                </div>
              </div>

              {/* Text content structure */}
              <div className="space-y-4 mb-8 text-left">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedSport.longDescription}
                </p>

                {/* Unit details */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">Estrutura</span>
                    <span className="text-xs font-semibold text-white">Modalidades por unidade</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">Atendimento</span>
                    <span className="text-xs font-semibold text-white">Confirmação via WhatsApp</span>
                  </div>
                </div>

                {/* Benefits checked checklist */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle className="w-4 h-4 text-court-neon shrink-0 mt-0.5" />
                    <span>Estrutura preparada para treinos, aulas e jogos nas unidades do clube</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle className="w-4 h-4 text-court-neon shrink-0 mt-0.5" />
                    <span>Atendimento para aulas, treinos e jogos avulsos</span>
                  </div>
                </div>
              </div>

              {/* Modal footer CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/5">
                <button
                  onClick={handleScrollToAgenda}
                  className="flex-1 flex items-center justify-center gap-2 bg-court-neon hover:bg-white text-dark-bg font-bold py-3 px-6 rounded-xl transition-all font-sans text-xs uppercase tracking-wider shadow-lg"
                  id="book-sport-modal"
                >
                  <Calendar className="w-4 h-4" />
                  Ir para reserva de horário
                </button>
                <button
                  onClick={handleCloseDetail}
                  className="flex-1 py-3 px-6 rounded-xl border border-white/10 text-white font-semibold text-xs hover:bg-white/5 uppercase tracking-wider"
                >
                  Fechar detalhes
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
