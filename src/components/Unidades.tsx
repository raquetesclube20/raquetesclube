import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink, Calendar, Instagram, Heart, MessageSquare } from "lucide-react";

interface UnidadesProps {
  activeUnit: number;
  setActiveUnit: (unit: number) => void;
}

export default function Unidades({ activeUnit, setActiveUnit }: UnidadesProps) {
  const unidades = [
    {
      id: 1,
      name: "Unidade 1 - Americana",
      tagline: "Sede Principal • Tênis, Squash e Raquetinha",
      address: "Av. de Cillo, 4451 - Parque Novo Mundo, Americana - SP, 13467-600",
      phone: "(19) 99123-4451",
      phoneRaw: "5519991234451",
      description: "Nossa sede tradicional em Americana-SP oferece infraestrutura completa com focos em Tênis de Saibro, Squash climatizado e a tradicional Raquetinha. Conta com vestiários amplos, lanchonete gourmet com vista panorâmica para as quadras, estacionamento interno e ambiente familiar ideal para pós-jogo.",
      courts: ["4 Quadras de Saibro Premium", "2 Quadras de Squash Climatizadas", "3 Quadras de Raquetinha Rápida"],
      directionLink: "https://maps.google.com/?q=Av.+de+Cillo,+4451+-+Parque+Novo+Mundo,+Americana+-+SP,+13467-600",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Unidade 2 - Nova Odessa",
      tagline: "Eco Arena • Beach Tennis e Esportes de Areia",
      address: "Chácara Sol Nascente - Av. Cinco, 227 - Bosque dos Eucaliptos, Nova Odessa - SP, 13381-060",
      phone: "(19) 99765-0227",
      phoneRaw: "5519997650227",
      description: "Uma verdadeira chácara-arena integrada à natureza em Nova Odessa-SP. Totalmente dedicada a esportes de areia, como Beach Tennis, Futevôlei e Funcional de Areia. Oferece quiosques privativos equipados com churrasqueiras para eventos, lounge rústico avarandado, playground de areia para crianças e duchas refrescantes pós-treino.",
      courts: ["6 Quadras de Areia Premium Super Tratada", "Iluminação LED Antirreflexo", "Lounge Gourmet e Playground Infantil"],
      directionLink: "https://maps.google.com/?q=Av.+Cinco,+227+-+Bosque+dos+Eucaliptos,+Nova+Odessa+-+SP,+13381-060",
      image: "https://images.unsplash.com/photo-1547483238-f400e65ccd56?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const instagramPosts = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop",
      likes: 142,
      comments: 18,
      caption: "Mais um dia de treinos intensos aqui no Raquetes Clube! Que tal agendar a sua aula experimental com o diretor Rogério Kawakami nesta semana? 🎾🔥",
      date: "Há 1 dia"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=600&auto=format&fit=crop",
      likes: 218,
      comments: 32,
      caption: "A febre da raquetinha continua a todo vapor! Ralis de arrepiar na Arena de Americana. Venha participar do nosso ranking interno e subir no quadro de campeões. 🏆💪",
      date: "Há 3 dias"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1547483238-f400e65ccd56?q=80&w=600&auto=format&fit=crop",
      likes: 185,
      comments: 21,
      caption: "Fim de tarde ensolarado na Unidade 2 de Nova Odessa! Quadras de areia impecáveis aguardando você para aquele Beach Tennis sagrado com os amigos. ☀️🏖️",
      date: "Há 5 dias"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=600&auto=format&fit=crop",
      likes: 199,
      comments: 15,
      caption: "Clínica de Tênis exclusiva no saibro premium. Detalhes mecânicos e táticos sendo lapidados pelo professor Luciano Santos. Turmas cheias e muita energia! 🎾✨",
      date: "Há 1 semana"
    }
  ];

  const currentUnit = unidades.find(u => u.id === activeUnit) || unidades[0];

  const handleWhatsAppContact = (phoneRaw: string, unitName: string) => {
    const text = `Olá! Gostaria de falar com a secretaria do Raquetes Clube - *${unitName}*. Vim pelo site e gostaria de saber as informações sobre reserva de quadras e aulas livre de tênis.`;
    window.open(`https://wa.me/${phoneRaw}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="relative py-20 bg-dark-bg border-b border-white/5" id="unidades">
      {/* Decorative Lights */}
      <div className="absolute top-[20%] left-[-10%] w-[35%] h-[35%] bg-court-neon/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-court-emerald/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
            • MULTIPLATAFORMA ESPORTIVA NÚMERO 1 •
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Nossas <span className="text-gradient-neon font-extrabold">Duas Unidades</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Seja no tradicional saibro de Americana ou nas arenas ensolaradas de Nova Odessa, oferecemos estrutura impecável para você praticar o seu esporte favorito. Mude de unidade abaixo e confira o contato e endereço!
          </p>
        </div>

        {/* Tab Selection Switchers */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 bg-panel-dark/80 rounded-2xl border border-white/10 flex gap-2">
            {unidades.map((uni) => (
              <button
                key={uni.id}
                onClick={() => setActiveUnit(uni.id)}
                className={`py-3 px-5 sm:px-8 rounded-xl font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeUnit === uni.id
                    ? "bg-court-neon text-dark-bg shadow-lg shadow-court-neon/15"
                    : "text-gray-400 hover:text-white"
                }`}
                id={`btn-unit-tab-${uni.id}`}
              >
                {uni.id === 1 ? "🏡 Unidade Americana" : "🌴 Unidade Nova Odessa"}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeUnit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20"
            id={`unit-display-${activeUnit}`}
          >
            {/* Visual Image container */}
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[300px] lg:min-h-[450px]">
              <img
                src={currentUnit.image}
                alt={currentUnit.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/25 to-transparent" />
              
              {/* Overlaid quick badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                <span className="text-court-neon font-mono font-bold text-xs uppercase tracking-widest">{currentUnit.id === 1 ? "AMERICANA - SP" : "NOVA ODESSA - SP"}</span>
              </div>
            </div>

            {/* Informational Panel */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-panel-dark/30 border border-white/5 rounded-3xl p-6 sm:p-8 lg:p-10 text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-court-neon mb-2 block">CANAIS DE CONTATO ATIVOS</span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2 leading-tight">
                  {currentUnit.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-medium italic mb-6">
                  {currentUnit.tagline}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {currentUnit.description}
                </p>

                {/* Quadras List */}
                <div className="space-y-3 mb-8 border-t border-b border-white/5 py-6">
                  <h4 className="text-xs font-mono tracking-wider uppercase text-white font-bold">Estrutura de Quadras:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentUnit.courts.map((court, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-court-neon glow-neon" />
                        <span>{court}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Endereço box */}
                <div className="bg-black/30 p-4 rounded-2xl border border-white/5 mb-8 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-court-neon shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-gray-400 uppercase block">Endereço Oficial</span>
                    <p className="text-xs text-white leading-relaxed font-sans">{currentUnit.address}</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => handleWhatsAppContact(currentUnit.phoneRaw, currentUnit.name)}
                  className="w-full py-4 px-5 rounded-xl bg-court-neon hover:bg-white text-dark-bg font-bold font-sans text-xs uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-court-neon/10"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  WhatsApp {currentUnit.phone}
                </button>

                <a
                  href={currentUnit.directionLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold font-sans text-xs uppercase tracking-wider transition-colors border border-white/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-court-neon" />
                  Ver Direções / GPS
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* INSTAGRAM INTEGRATION */}
        <div className="mt-20 pt-16 border-t border-white/5 text-left" id="instagram-clube">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-pink-500 uppercase block mb-3">
                • CONEXÃO INSTAGRAM ONLINE •
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                Siga-nos <span className="text-pink-500">@raquetesclube</span> no Instagram
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
                Acompanhe o dia a dia do maior clube boutique de Americana! Publicamos diariamente ralis fantásticos, bastidores dos rankings, avisos de quadras cobertas das chuvas e novidades exclusivas.
              </p>
            </div>
            
            {/* Real link to Instagram profile */}
            <a
              href="https://www.instagram.com/raquetesclube"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-opacity shadow-lg shadow-pink-500/10 shrink-0"
            >
              <Instagram className="w-4.5 h-4.5" />
              Seguir no Instagram
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* SIMULATED FEED IFRAME/BENTO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://www.instagram.com/raquetesclube"
                target="_blank"
                rel="noreferrer"
                className="group relative h-[360px] bg-panel-dark/40 border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-pink-500/30 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt="Instagram Post"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                    <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                      <Heart className="w-5 h-5 fill-pink-500 text-pink-500" />
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                      <MessageSquare className="w-5 h-5 fill-white" />
                      {post.comments}
                    </div>
                  </div>
                  {/* Header Badge */}
                  <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[9px] font-mono font-bold uppercase py-1 px-3 rounded-full border border-pink-500/30 text-pink-500 flex items-center gap-1">
                    <Instagram className="w-3 h-3" />
                    @raquetesclube
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">
                    {post.caption}
                  </p>
                  
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5 text-[10px] font-mono text-gray-500">
                    <span>{post.date}</span>
                    <span className="text-pink-500 font-bold group-hover:underline flex items-center gap-0.5">
                      Ver no Instagram
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
