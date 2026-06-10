import { useState, useMemo } from "react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Camera, X, ZoomIn, Calendar, Star, MapPin } from "lucide-react";

export default function Galeria() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filters = ["Todos", "Torneios", "Aulas", "Partidas", "Comunidade"];

  const filteredItems = useMemo(() => {
    if (activeFilter === "Todos") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="relative py-20 bg-dark-bg" id="galeria">
      <div className="absolute top-[30%] left-[-10%] w-[35%] h-[35%] bg-court-emerald/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
            • MOMENTOS EXTRAORDINÁRIOS •
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Vida no <span className="text-gradient-neon font-extrabold">Raquetes Clube</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Dê uma olhada na nossa atmosfera vibrante, treinos de ritmo acelerado e torneios inesquecíveis que moldam nossa comunidade esportiva em Americana.
          </p>
        </div>

        {/* Filter Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider border transition-all ${
                activeFilter === filter
                  ? "bg-court-neon border-court-neon text-dark-bg font-bold shadow-md shadow-court-neon/15"
                  : "bg-panel-dark/50 border-white/5 text-gray-400 hover:border-white/12 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightboxItem(item)}
                className="group relative h-[280px] rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 bg-panel-dark cursor-pointer shadow-lg"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                {/* Badge Category */}
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[9px] font-mono font-bold uppercase py-1 px-3.5 rounded-full border border-white/10 text-court-neon">
                  {item.category}
                </span>

                {/* Zoom Icon indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>

                {/* Information content inside card */}
                <div className="absolute bottom-4 inset-x-4 text-left transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="text-[10px] font-mono text-court-neon uppercase tracking-widest block mb-1">REGISTRO DIGITAL</span>
                  <h3 className="font-display font-black text-white text-base md:text-lg leading-snug truncate">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] mt-1 flex items-center gap-1.5 font-mono">
                    <Camera className="w-3.5 h-3.5" />
                    Boutique Americana • v2.0
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Popup Visual Overlay */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            id="lightbox-container"
          >
            <motion.div
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-3xl bg-panel-dark border border-white/15 shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button Lightbox */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-xl text-gray-400 hover:text-white bg-black/60 hover:bg-black/80 transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area */}
              <div className="w-full md:w-[60%] h-[300px] md:h-[500px]">
                <img
                  src={lightboxItem.imageUrl}
                  alt={lightboxItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Description sidebar inside Lightbox overlay */}
              <div className="w-full md:w-[40%] p-6 md:p-8 flex flex-col justify-between text-left">
                
                <div className="space-y-4">
                  <span className="inline-block bg-court-neon/15 text-court-neon text-[10px] font-mono uppercase tracking-widest py-1 px-3.5 rounded-full border border-court-neon/20">
                    {lightboxItem.category}
                  </span>
                  
                  <h3 className="font-display font-extrabold text-2xl text-white leading-tight">
                    {lightboxItem.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    Vivencie a verdadeira essência esportiva no Raquetes Clube. Nossas fotos retratam membros reais de Americana em partidas emocionantes, risadas genuínas e momentos de pura diversão sobre as quadras.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <MapPin className="w-4 h-4 text-court-neon" />
                    <span>Americana, SP • Sede Principal</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <Calendar className="w-4 h-4 text-court-neon" />
                    <span>Temporada Regular • 2026</span>
                  </div>

                  <button
                    onClick={() => {
                      setLightboxItem(null);
                      const el = document.getElementById("agenda");
                      if (el) window.scrollTo({ top: el.offsetTop - 85, behavior: "smooth" });
                    }}
                    className="w-full text-center bg-court-neon hover:bg-white text-dark-bg font-bold py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition-colors font-sans mt-2"
                  >
                    Agendar Horário na Arena
                  </button>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
