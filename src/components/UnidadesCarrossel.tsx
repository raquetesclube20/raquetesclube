import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, MessageCircle, Navigation, ChevronLeft, ChevronRight, Check } from "lucide-react";
import americanaImg from "../../assets/americana.png";
import novaOdessaImg from "../../assets/nova_odessa.png";

export default function UnidadesCarrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const UNIDADES = [
    {
      id: 1,
      name: "Unidade Americana",
      tagline: "Sede Principal · Tênis, Squash e Raquetinha",
      address: "Av. de Cillo, 4451 - Parque Novo Mundo, Americana - SP, 13467-600",
      phone: "(19) 99123-4451",
      phoneRaw: "5519991234451",
      description: "Nossa sede tradicional em Americana-SP oferece infraestrutura completa com foco em Tênis de Saibro, Squash climatizado e a tradicional Raquetinha. Conta com vestiários amplos, lanchonete gourmet com vista panorâmica para as quadras, estacionamento interno e ambiente familiar ideal para pós-jogo.",
      courts: ["4 Quadras de Saibro Premium", "2 Quadras de Squash Climatizadas", "3 Quadras de Raquetinha Rápida"],
      directionLink: "https://maps.google.com/?q=Av.+de+Cillo,+4451+-+Parque+Novo+Mundo,+Americana+-+SP,+13467-600",
      image: americanaImg
    },
    {
      id: 2,
      name: "Unidade Nova Odessa",
      tagline: "Eco Arena · Beach Tennis e Esportes de Areia",
      address: "Chácara Sol Nascente - Av. Cinco, 227 - Bosque dos Eucaliptos, Nova Odessa - SP, 13381-060",
      phone: "(19) 99765-0227",
      phoneRaw: "5519997650227",
      description: "Uma verdadeira chácara-arena integrada à natureza em Nova Odessa-SP. Totalmente dedicada a esportes de areia, como Beach Tennis, Futevôlei e Funcional de Areia. Oferece quiosques privativos equipados com churrasqueiras para eventos, lounge rústico avarandado, playground de areia para crianças e duchas refrescantes pós-treino.",
      courts: ["6 Quadras de Areia Premium Tratada", "Iluminação LED Antirreflexo", "Lounge Gourmet e Playground Infantil"],
      directionLink: "https://maps.google.com/?q=Av.+Cinco,+227+-+Bosque+dos+Eucaliptos,+Nova+Odessa+-+SP,+13381-060",
      image: novaOdessaImg
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

  // Autoplay Logic
  useEffect(() => {
    if (!isHovered) {
      autoplayTimer.current = setInterval(() => {
        nextSlide();
      }, 7000); // changes slide every 7 seconds
    } else {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    }

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [isHovered]);

  const activeUnit = UNIDADES[currentIndex];

  return (
    <section 
      className="relative py-20 bg-dark-bg border-b border-white/5 overflow-hidden" 
      id="unidades"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background neon dynamic ambient spots */}
      <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] bg-court-neon/5 rounded-full blur-[120px] pointer-events-none transition-all duration-1000" />
      <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[45%] bg-court-emerald/5 rounded-full blur-[120px] pointer-events-none transition-all duration-1000" />

      {/* Decorative large active image blur in the absolute background (extremely premium effect) */}
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
            Conheça as sedes da maior rede esportiva de Americana e região. Navegue pelo carrossel abaixo e confira a localização e contatos rápidos.
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
                {/* Parallax Image Block */}
                <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[280px] sm:min-h-[350px] lg:min-h-[460px] group">
                  <img
                    src={activeUnit.image}
                    alt={activeUnit.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/95 via-dark-bg/15 to-transparent" />
                  
                  {/* Overlaid Badges */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-court-neon animate-pulse" />
                    <span className="text-court-neon font-mono font-bold text-xs uppercase tracking-widest">
                      {activeUnit.id === 1 ? "Americana - SP" : "Nova Odessa - SP"}
                    </span>
                  </div>
                </div>

                {/* Info Display Block */}
                <div className="lg:col-span-6 flex flex-col justify-between bg-panel-dark/40 border border-white/5 rounded-3xl p-6 sm:p-8 lg:p-10 text-left backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-court-neon mb-2 block">RAQUETES CLUBE AMERICANA v2.0</span>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                    <button
                      onClick={() => handleWhatsAppContact(activeUnit.phoneRaw, activeUnit.name)}
                      className="w-full py-3.5 px-4 rounded-xl bg-court-neon hover:bg-white text-dark-bg font-bold font-sans text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-white/5"
                    >
                      <MessageCircle className="w-4.5 h-4.5 fill-dark-bg" />
                      Falar no WhatsApp
                    </button>

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
