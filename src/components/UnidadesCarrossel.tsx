import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, MessageCircle, Navigation, ChevronLeft, ChevronRight, Check } from "lucide-react";
import americanaImg from "../../assets/americana.png";
import novaOdessaImg from "../../assets/nova_odessa.png";
import americanaVideo1 from "../../assets/americana/vids/1am_torneio.MP4";
import americanaVideo2 from "../../assets/americana/vids/2am_torneio2.MP4";
import americanaPhoto2 from "../../assets/americana/asrfotografiaesportiva-217_2250743_224563.jpg";
import americanaPhoto3 from "../../assets/americana/raquetes aerea.png";
import americanaPhoto4 from "../../assets/americana/raquetes2.jpeg";
import americanaPhoto5 from "../../assets/americana/WhatsApp Image 2024-11-13 at 08.59.00 (2).jpeg";
import novaOdessaVideo3 from "../../assets/nova-odessa/vids/13no_por do sol.mp4";
import novaOdessaVideo4 from "../../assets/nova-odessa/vids/14nodrone.mp4";
import novaOdessaVideo5 from "../../assets/nova-odessa/vids/WhatsApp Video 2026-06-06 at 16.52.45.mp4";
import novaOdessaPhoto1 from "../../assets/nova-odessa/no.jpeg";
import novaOdessaPhoto2 from "../../assets/nova-odessa/WhatsApp Image 2026-05-28 at 17.52.19 (1).jpeg";

type UnitMedia = {
  type: "video" | "image";
  src: string;
  label: string;
};

export default function UnidadesCarrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);
  const mediaAutoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const americanaMedia: UnitMedia[] = [
    { type: "video", src: americanaVideo1, label: "Raquetes Clube Americana" },
    { type: "video", src: americanaVideo2, label: "Torneio em quadra" },
    { type: "image", src: americanaPhoto5, label: "Familia Raquetes" },
    { type: "image", src: americanaPhoto2, label: "Jogos Americana" },
    { type: "image", src: americanaPhoto3, label: "Quadras Americana" },
    { type: "video", src: americanaVideo2, label: "Vista aerea" },
    { type: "image", src: americanaPhoto4, label: "Raquetes Clube Americana" },
  ];

  const novaOdessaMedia: UnitMedia[] = [
    { type: "video", src: novaOdessaVideo4, label: "Raquetes Clube Nova Odessa" },
    { type: "video", src: novaOdessaVideo3, label: "Por do sol" },
    { type: "video", src: novaOdessaVideo5, label: "Bastidores Nova Odessa" },
    { type: "image", src: novaOdessaPhoto1, label: "Estrutura Nova Odessa" },
    { type: "image", src: novaOdessaPhoto2, label: "Unidade Nova Odessa" },
  ];

  const UNIDADES = [
    {
      id: 1,
      name: "Unidade Americana",
      tagline: "Tênis, raquetinha, squash, beach tennis e quadra de areia",
      address: "Av. de Cillo, 4451 - Pq Novo Mundo, Americana - SP",
      phone: "(19) 98152-2647",
      phoneRaw: "5519981522647",
      description: "Nossa unidade em Americana-SP reúne tênis, raquetinha, squash, beach tennis e quadra de areia em uma estrutura completa para treinos, aulas, partidas e convivência no clube.",
      courts: ["Tênis", "Raquetinha", "Squash", "Beach Tennis", "Quadra de Areia"],
      directionLink: "https://maps.google.com/?q=Av.+de+Cillo,+4451+-+Pq+Novo+Mundo,+Americana+-+SP",
      pagePath: `${import.meta.env.BASE_URL}americana`,
      heroVideo: americanaVideo1,
      image: americanaImg,
      media: americanaMedia
    },
    {
      id: 2,
      name: "Unidade Nova Odessa",
      tagline: "Tênis e raquetinha",
      address: "Av. Cinco, 227 - Bosque dos Eucaliptos, Nova Odessa - SP",
      phone: "(19) 92012-7054",
      phoneRaw: "5519920127054",
      description: "Nossa unidade em Nova Odessa-SP atende jogadores de tênis e raquetinha com estrutura objetiva, acolhedora e preparada para partidas, treinos e aulas.",
      courts: ["Tênis", "Raquetinha"],
      directionLink: "https://maps.google.com/?q=Av.+Cinco,+227+-+Bosque+dos+Eucaliptos,+Nova+Odessa+-+SP",
      pagePath: `${import.meta.env.BASE_URL}nova-odessa`,
      heroVideo: novaOdessaVideo4,
      image: novaOdessaImg,
      media: novaOdessaMedia
    }
  ];

  const handleWhatsAppContact = (phoneRaw: string, unitName: string) => {
    const text = `Olá! Gostaria de falar com a secretaria do Raquetes Clube - *${unitName}*. Vim pelo site e gostaria de saber as informações sobre reserva de quadras e aulas livres.`;
    window.open(`https://wa.me/${phoneRaw}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % UNIDADES.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + UNIDADES.length) % UNIDADES.length);
  };

  const nextMedia = () => {
    setMediaIndex((prevIndex) => (prevIndex + 1) % activeUnit.media.length);
  };

  const prevMedia = () => {
    setMediaIndex((prevIndex) => (prevIndex - 1 + activeUnit.media.length) % activeUnit.media.length);
  };

  // Autoplay Logic
  useEffect(() => {
    if (!isHovered) {
      autoplayTimer.current = setInterval(() => {
        nextSlide();
      }, 18000);
    } else {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    }

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [isHovered]);

  const activeUnit = UNIDADES[currentIndex];
  const activeMedia = activeUnit.media[mediaIndex] || activeUnit.media[0];

  useEffect(() => {
    setMediaIndex(0);
  }, [currentIndex]);

  useEffect(() => {
    if (!isHovered) {
      mediaAutoplayTimer.current = setInterval(() => {
        setMediaIndex((prevIndex) => (prevIndex + 1) % activeUnit.media.length);
      }, 9000);
    } else if (mediaAutoplayTimer.current) {
      clearInterval(mediaAutoplayTimer.current);
    }

    return () => {
      if (mediaAutoplayTimer.current) clearInterval(mediaAutoplayTimer.current);
    };
  }, [currentIndex, isHovered]);

  return (
    <section 
      className="relative py-20 bg-dark-bg border-b border-white/5 overflow-hidden" 
      id="unidades"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        key={`unit-bg-${activeUnit.id}`}
        src={activeUnit.heroVideo}
        poster={activeUnit.image}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-45 saturate-125"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/85 via-dark-bg/58 to-dark-bg/88 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/78 via-dark-bg/35 to-dark-bg/80 pointer-events-none" />

      {/* Background neon dynamic ambient spots */}
      <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] bg-court-neon/5 rounded-full blur-[120px] pointer-events-none transition-all duration-1000" />
      <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[45%] bg-court-emerald/5 rounded-full blur-[120px] pointer-events-none transition-all duration-1000" />

      {/* Active image blur in the background */}
      <div className="absolute inset-0 opacity-10 blur-[150px] scale-110 pointer-events-none transition-all duration-1000">
        <img 
          src={activeUnit.image} 
          alt="blur background" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3 animate-pulse">
            • ESTRUTURA E UNIDADES BOUTIQUE •
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight">
            Nossas <span className="text-gradient-neon font-extrabold">Unidades Clube</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Conheça nossas unidades em Americana e Nova Odessa. Navegue pelo carrossel abaixo e confira localização, modalidades e contatos rápidos.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-12">
          
          {/* Slides Carousel wrapper */}
          <div className="relative min-h-[580px] lg:min-h-[500px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full"
              >
                {/* Media Carousel Block */}
                <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[280px] sm:min-h-[350px] lg:min-h-[460px] group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeUnit.id}-${mediaIndex}`}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                      className="absolute inset-0"
                    >
                      {activeMedia.type === "video" ? (
                        <video
                          src={activeMedia.src}
                          poster={activeUnit.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          aria-label={`${activeUnit.name}: ${activeMedia.label}`}
                        />
                      ) : (
                        <img
                          src={activeMedia.src}
                          alt={`${activeUnit.name}: ${activeMedia.label}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/95 via-dark-bg/15 to-transparent" />
                  
                  {/* Overlaid Badges */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-court-neon animate-pulse" />
                    <span className="text-court-neon font-mono font-bold text-xs uppercase tracking-widest">
                      {activeUnit.id === 1 ? "Americana - SP" : "Nova Odessa - SP"}
                    </span>
                  </div>

                  <div className="absolute top-6 right-6 px-3 py-2 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                    <span className="text-white font-mono font-bold text-[10px] uppercase tracking-widest">
                      {activeMedia.type === "video" ? "Video" : "Foto"} {mediaIndex + 1}/{activeUnit.media.length}
                    </span>
                  </div>

                  <div className="absolute bottom-10 left-6 right-6 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-court-neon block mb-1">
                        {activeMedia.type === "video" ? "Midia em destaque" : "Galeria da unidade"}
                      </span>
                      <p className="text-white text-sm font-bold truncate">{activeMedia.label}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={prevMedia}
                        className="w-9 h-9 rounded-full bg-black/50 hover:bg-court-neon text-white hover:text-dark-bg border border-white/10 hover:border-court-neon transition-colors flex items-center justify-center"
                        aria-label="Midia anterior"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextMedia}
                        className="w-9 h-9 rounded-full bg-black/50 hover:bg-court-neon text-white hover:text-dark-bg border border-white/10 hover:border-court-neon transition-colors flex items-center justify-center"
                        aria-label="Proxima midia"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-6 right-6 flex gap-1.5">
                    {activeUnit.media.map((media, idx) => (
                      <button
                        key={`${media.type}-${idx}`}
                        onClick={() => setMediaIndex(idx)}
                        className={`h-3 rounded-full transition-all duration-300 ${
                          mediaIndex === idx
                            ? "w-9 bg-court-neon shadow-[0_0_8px_rgba(8,174,234,0.8)]"
                            : media.type === "video"
                              ? "w-5 bg-white/35 hover:bg-white/60"
                              : "w-4 bg-white/15 hover:bg-white/35"
                        }`}
                        aria-label={`Ver ${media.type === "video" ? "video" : "foto"} ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Info Display Block */}
                <div className="lg:col-span-6 flex flex-col justify-between bg-panel-dark/40 border border-white/5 rounded-3xl p-6 sm:p-8 lg:p-10 text-left backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-court-neon mb-2 block">RAQUETES CLUBE</span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2 leading-tight">
                      {activeUnit.name}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-medium italic mb-6">
                      {activeUnit.tagline}
                    </p>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {activeUnit.description}
                    </p>

                    {/* Courts and Structure Grid */}
                    <div className="space-y-3 mb-6 border-t border-b border-white/5 py-5">
                      <h4 className="text-xs font-mono tracking-wider uppercase text-white font-bold">Estrutura do Local:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeUnit.courts.map((court, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                            <Check className="w-4 h-4 text-court-neon shrink-0" />
                            <span>{court}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Location Card */}
                    <div className="bg-black/35 p-4 rounded-2xl border border-white/5 mb-6 flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-court-neon shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-mono text-gray-500 uppercase block">Endereço Oficial</span>
                        <p className="text-xs text-white leading-relaxed font-sans">{activeUnit.address}</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
                    <button
                      onClick={() => handleWhatsAppContact(activeUnit.phoneRaw, activeUnit.name)}
                      className="w-full py-3.5 px-4 rounded-xl bg-court-neon hover:bg-white text-dark-bg font-bold font-sans text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-white/5"
                    >
                      <MessageCircle className="w-4.5 h-4.5 fill-dark-bg" />
                      Falar no WhatsApp
                    </button>

                    <a
                      href={activeUnit.pagePath}
                      className="w-full py-3.5 px-4 rounded-xl bg-sand-warm hover:bg-white text-dark-bg font-bold font-sans text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Ver unidade
                    </a>

                    <a
                      href={activeUnit.directionLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold font-sans text-xs uppercase tracking-wider transition-all border border-white/10 hover:border-court-neon/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Navigation className="w-4 h-4 text-court-neon" />
                      Ver Mapa / Rota
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] sm:left-[-15px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-panel-dark border border-white/10 hover:border-court-neon text-gray-400 hover:text-white transition-all shadow-2xl cursor-pointer z-20 focus:outline-none"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-[-20px] sm:right-[-15px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-panel-dark border border-white/10 hover:border-court-neon text-gray-400 hover:text-white transition-all shadow-2xl cursor-pointer z-20 focus:outline-none"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2.5 mt-8">
            {UNIDADES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx 
                    ? "w-8 bg-court-neon shadow-[0_0_8px_#08aeea]" 
                    : "w-2.5 bg-white/10 hover:bg-white/25"
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
