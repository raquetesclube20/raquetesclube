import { motion } from "motion/react";
import { Calendar, Trophy, Users, Shield, ArrowRight, MessageCircle, Play } from "lucide-react";

export default function Hero() {
  const floatingCards = [
    {
      icon: Calendar,
      title: "Agenda Online",
      desc: "Reserve quadras em tempo real via celular.",
      color: "border-court-neon/20 hover:border-court-neon/50 text-court-neon bg-court-neon/5",
      delay: 0.1
    },
    {
      icon: Trophy,
      title: "Rankings Ativos",
      desc: "Competição amigável o ano inteiro.",
      color: "border-orange-500/20 hover:border-orange-500/50 text-orange-400 bg-orange-500/5",
      delay: 0.2
    },
    {
      icon: Users,
      title: "Aulas para todos",
      desc: "Iniciante ao avançado com profissionais.",
      color: "border-cyan-400/20 hover:border-cyan-400/50 text-cyan-400 bg-cyan-400/5",
      delay: 0.3
    },
    {
      icon: Shield,
      title: "Torneios e Club",
      desc: "Eventos exclusivos e bar gourmet.",
      color: "border-purple-400/20 hover:border-purple-400/50 text-purple-400 bg-purple-400/5",
      delay: 0.4
    }
  ];

  const handleScrollToSec = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/5" id="hero-sec">
      {/* Visual background gradient layers simulating spot lights on a dark court */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-court-neon/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-court-emerald/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[30%] right-[10%] w-[35%] h-[35%] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Indicator Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-court-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-court-neon"></span>
              </span>
              <span className="text-[11px] font-mono font-medium tracking-wider text-gray-300 uppercase">
                Ambiente Boutique • Americana / SP
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6 leading-[1.05]"
            >
              O novo ponto de encontro dos <span className="text-gradient-neon font-extrabold">esportes de raquete</span> em Americana
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8"
            >
              Tênis, beach tennis, squash, raquetinha, aulas estruturadas, rankings dinâmicos e torneios integrados em uma experiência esportiva e social sem precedentes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <button
                onClick={() => handleScrollToSec("agenda")}
                className="flex items-center justify-center gap-3 bg-court-neon hover:bg-white text-dark-bg font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer shadow-lg shadow-court-neon/15 hover:shadow-white/10 group text-base uppercase tracking-wider font-sans"
              >
                <Calendar className="w-5 h-5" />
                Reservar uma quadra
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>

              <button
                onClick={() => handleScrollToSec("modalidades")}
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all border border-white/10 hover:border-court-neon/40 cursor-pointer text-base uppercase tracking-wider"
              >
                Conhecer Modalidades
              </button>
            </motion.div>

            {/* Fast Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-3 gap-6 pt-4 border-t border-white/5 w-full max-w-md"
            >
              <div>
                <span className="block font-display font-extrabold text-2xl md:text-3xl text-court-neon">17+</span>
                <span className="block text-xs font-mono text-gray-400 mt-1 uppercase tracking-widest">Quadras Modernas</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-2xl md:text-3xl text-white">450+</span>
                <span className="block text-xs font-mono text-gray-400 mt-1 uppercase tracking-widest">Atletas Ativos</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-2xl md:text-3xl text-court-neon">100%</span>
                <span className="block text-xs font-mono text-gray-400 mt-1 uppercase tracking-widest">Drenagem Rápida</span>
              </div>
            </motion.div>

          </div>

          {/* Interactive Visual Right Side representing physical action */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] lg:h-[480px]">
            
            {/* Ambient Background Panel Card with premium tennis ball illustration / styled mesh */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-0 bg-gradient-to-br from-panel-dark to-dark-bg/80 border border-white/15 rounded-3xl overflow-hidden glow-neon"
            >
              <div 
                className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none" 
                style={{ backgroundImage: `radial-gradient(ellipse at 50% 50%, #ffffff 1px, transparent 1px)`, backgroundSize: '16px 16px' }}
              />

              {/* Court Net Graphic styled with purely tailwind elements */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-white/20 border-t border-dashed border-white/30" />
              
              {/* Glowing tennis and sand colored orbits */}
              <div className="absolute top-[20%] left-[30%] w-48 h-48 rounded-full border border-court-neon/10 animate-[spin_12s_linear_infinite]" />
              <div className="absolute bottom-[10%] right-[15%] w-60 h-60 rounded-full border border-clay-orange/10 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Decorative premium sport visual elements */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-court-neon" />
                    <div>
                      <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Status das Quadras</p>
                      <p className="text-xs font-bold text-white">Excelente estadia (Secas)</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono py-1 px-2.5 rounded bg-court-neon/15 text-court-neon uppercase">Aberto</span>
                </div>

                {/* Animated interactive ball widget */}
                <div className="relative self-center my-auto flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      y: [-12, 12, -12], 
                      scale: [0.93, 1.05, 0.93],
                      rotate: [0, 90, 180, 270, 360]
                    }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
                      scale: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
                      rotate: { repeat: Infinity, duration: 15, ease: "linear" }
                    }}
                    className="w-24 h-24 rounded-full bg-gradient-to-tr from-court-neon to-yellow-300 flex items-center justify-center shadow-2xl relative cursor-pointer group"
                    id="hero-ball-node"
                    onClick={() => handleScrollToSec("agenda")}
                  >
                    {/* Shadow underneath */}
                    <div className="absolute bottom-[-10px] w-12 h-2.5 bg-black/30 rounded-full blur-md" />
                    <Play className="w-8 h-8 text-dark-bg fill-dark-bg translate-x-0.5 group-hover:scale-110 transition-transform" />
                  </motion.div>
                </div>

                <div className="flex justify-between items-end gap-3">
                  <div className="bg-black/50 p-3 rounded-xl border border-white/5">
                    <p className="text-[10px] font-mono text-gray-400 uppercase">Partida do Dia</p>
                    <p className="text-xs font-bold text-white">Desafio de Saibro às 19h</p>
                  </div>
                  
                  {/* Digital community stats badge */}
                  <div className="bg-court-neon text-dark-bg py-2 px-3.5 rounded-xl font-display font-extrabold text-xs flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    +40 Reservas Hoje
                  </div>
                </div>
              </div>

            </motion.div>

          </div>

        </div>

        {/* Structured Floating Quick features list (Desktop: absolute overlaying section break, Mobile: standard grid flow) */}
        <div className="mt-16 lg:mt-24">
          <p className="text-center text-xs font-mono tracking-[0.25em] text-gray-400 uppercase mb-8">
            • O QUE VOCÊ ENCONTRA NO CLUBE •
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {floatingCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: card.delay }}
                  onClick={() => {
                    const scrolls: { [key: string]: string } = {
                      "Agenda Online": "agenda",
                      "Rankings Ativos": "rankings",
                      "Aulas para todos": "aulas",
                      "Torneios e Club": "experiencia"
                    };
                    handleScrollToSec(scrolls[card.title] || "modalidades");
                  }}
                  className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 bg-panel-dark/50 hover:bg-panel-dark backdrop-blur-sm group select-none ${card.color}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5 text-inherit" />
                    </div>
                    <h3 className="font-display font-bold text-white leading-tight text-base group-hover:text-court-neon transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs font-normal leading-relaxed pl-1">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
