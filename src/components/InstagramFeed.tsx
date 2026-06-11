import { Instagram, ExternalLink, Heart, MessageSquare } from "lucide-react";

export default function InstagramFeed() {
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

  return (
    <section className="relative py-20 bg-dark-bg border-b border-white/5" id="instagram-clube">
      {/* Background radial spotlight */}
      <div className="absolute top-[30%] right-[-10%] w-[35%] h-[35%] bg-court-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <span className="text-xs font-mono tracking-[0.2em] text-court-neon uppercase block mb-3 animate-pulse">
              • CONEXÃO INSTAGRAM ONLINE •
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Siga-nos <span className="text-court-neon font-extrabold">@raquetesclube</span> no Instagram
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
              Acompanhe o dia a dia do maior clube boutique de Americana! Publicamos diariamente ralis fantásticos, bastidores dos rankings, avisos de quadras cobertas das chuvas e novidades exclusivas.
            </p>
          </div>
          
          <a
            href="https://www.instagram.com/raquetesclube"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-court-neon to-sand-warm hover:opacity-90 text-dark-bg text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-lg shadow-court-neon/10 shrink-0"
          >
            <Instagram className="w-4.5 h-4.5" />
            Seguir no Instagram
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Bento Grid Feed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/raquetesclube"
              target="_blank"
              rel="noreferrer"
              className="group relative h-[360px] bg-panel-dark/40 border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-court-neon/30 transition-all duration-300"
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
                    <Heart className="w-5 h-5 fill-sand-warm text-sand-warm" />
                    {post.likes}
                  </div>
                  <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                    <MessageSquare className="w-5 h-5 fill-white" />
                    {post.comments}
                  </div>
                </div>
                {/* Header Badge */}
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[9px] font-mono font-bold uppercase py-1 px-3 rounded-full border border-court-neon/30 text-court-neon flex items-center gap-1">
                  <Instagram className="w-3 h-3" />
                  @raquetesclube
                </span>
              </div>

              {/* Content Section */}
              <div className="p-4 flex-grow flex flex-col justify-between text-left">
                <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">
                  {post.caption}
                </p>
                
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5 text-[10px] font-mono text-gray-500">
                  <span>{post.date}</span>
                  <span className="text-court-neon font-bold group-hover:underline flex items-center gap-0.5">
                    Ver no Instagram
                    <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
