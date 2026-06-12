import { ExternalLink, Facebook, Heart, Instagram, MessageCircle, Play, Twitter } from "lucide-react";
import avatar from "../../assets/instagram/avatar.jpg";
import post1 from "../../assets/instagram/post-1.jpg";
import post2 from "../../assets/instagram/post-2.jpg";
import post3 from "../../assets/instagram/post-3.jpg";
import post4 from "../../assets/instagram/post-4.jpg";
import post5 from "../../assets/instagram/post-5.jpg";
import post6 from "../../assets/instagram/post-6.jpg";
import post7 from "../../assets/instagram/post-7.jpg";
import post8 from "../../assets/instagram/post-8.jpg";

const instagramUrl = "https://www.instagram.com/raquetesclube/";
const facebookUrl =
  "https://www.facebook.com/RaquetesClubeOficial?mibextid=wwXIfr&rdid=rO7ehlzKvfHZCHgi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18LCEnKdEW%2F%3Fmibextid%3DwwXIfr#";
const xUrl = "https://x.com/raquetesclube?s=21&t=Vt2mciEOyBs4Bd-tXAbt2Q";

const posts = [
  {
    image: post1,
    type: "Reel",
    likes: "162",
    comments: "61",
    caption: "A familia Raquetes Clube esta crescendo. Vem ai a segunda unidade em Nova Odessa.",
  },
  {
    image: post2,
    type: "Post",
    likes: "238",
    comments: "34",
    caption: "Torneio de tenis com categorias para todos os niveis. Inscricoes abertas.",
  },
  {
    image: post3,
    type: "Carrossel",
    likes: "421",
    comments: "48",
    caption: "Ganhadores do torneio de duplas: parabens aos atletas e parceiros de quadra.",
  },
  {
    image: post4,
    type: "Carrossel",
    likes: "319",
    comments: "27",
    caption: "Agradecimento especial a todos que fizeram parte do Squad Open.",
  },
  {
    image: post5,
    type: "Reel",
    likes: "287",
    comments: "22",
    caption: "Raquetes Clube em movimento: treino, energia e muita evolucao em quadra.",
  },
  {
    image: post6,
    type: "Reel",
    likes: "195",
    comments: "18",
    caption: "One Point Slam: experiencia Ray Ban Meta dentro da rotina do tenis.",
  },
  {
    image: post7,
    type: "Reel",
    likes: "244",
    comments: "31",
    caption: "Bastidores de jogo e treino com professores do clube.",
  },
  {
    image: post8,
    type: "Carrossel",
    likes: "173",
    comments: "16",
    caption: "Momentos do clube, agenda e eventos para acompanhar de perto.",
  },
];

const socialLinks = [
  { href: facebookUrl, label: "Facebook", icon: Facebook },
  { href: instagramUrl, label: "Instagram", icon: Instagram },
  { href: xUrl, label: "X", icon: Twitter },
];

export default function InstagramSection() {
  return (
    <section className="relative py-20 bg-dark-bg border-b border-white/5 overflow-hidden" id="instagram">
      <div className="absolute top-[18%] right-[-12%] w-[42%] h-[42%] bg-court-neon/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-12%] w-[38%] h-[38%] bg-sand-warm/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
              • Instagram •
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Acompanhe o dia a dia do clube
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-4 max-w-2xl">
              Publicações, torneios, aulas e bastidores do Raquetes Clube no perfil oficial.
            </p>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="flex items-center gap-3 rounded-2xl bg-panel-dark/70 border border-white/10 p-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="w-11 h-11 rounded-xl bg-white/5 hover:bg-court-neon hover:text-dark-bg text-white border border-white/10 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto rounded-[2rem] border border-white/10 bg-[#121c23]/95 shadow-2xl overflow-hidden">
          <div className="relative px-5 sm:px-8 lg:px-10 py-7 border-b border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-court-neon/10 via-transparent to-sand-warm/10 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="shrink-0">
                <span className="w-20 h-20 rounded-full ring-2 ring-court-neon/80 shadow-[0_0_24px_rgba(8,174,234,0.35)] bg-black/55 flex items-center justify-center overflow-hidden">
                  <img
                    src={avatar}
                    alt="Raquetes Clube no Instagram"
                    className="w-[92%] h-[92%] rounded-full object-cover object-center"
                  />
                </span>
              </a>

              <div className="min-w-0 text-left flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                  <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-block">
                    <h3 className="font-display font-black text-white text-2xl leading-tight">
                      Raquetes Clube
                    </h3>
                  </a>
                  <span className="w-fit rounded-full border border-court-neon/30 bg-court-neon/10 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-court-neon">
                    Perfil oficial
                  </span>
                </div>
                <p className="text-gray-300 text-sm font-semibold">
                  Tênis, Raquetinha, Squash e Beach Tennis
                </p>
                <p className="text-gray-500 text-sm mt-1">@raquetesclube</p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:w-auto">
                {[
                  ["1.2K", "publicações"],
                  ["5K", "seguidores"],
                  ["6K", "seguindo"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3 text-center">
                    <span className="block text-white font-black text-lg">{value}</span>
                    <span className="block text-gray-400 text-[11px]">{label}</span>
                  </div>
                ))}
              </div>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-court-neon to-sand-warm px-5 py-3 text-dark-bg text-xs font-black uppercase tracking-wider hover:bg-white transition-colors shrink-0"
              >
                <Instagram className="w-4 h-4" />
                Seguir
              </a>
            </div>
          </div>

          <div className="p-3 sm:p-4 bg-[#0c1419]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {posts.map((post, index) => (
                <a
                  key={post.image}
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-black border border-white/10 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-court-neon/35 hover:shadow-court-neon/10"
                  aria-label={`Abrir publicação ${index + 1} no Instagram do Raquetes Clube`}
                >
                  <img
                    src={post.image}
                    alt={`Publicação ${index + 1} do Instagram do Raquetes Clube`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/15 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 rounded-full bg-black/55 border border-white/15 backdrop-blur-md p-1.5 text-white z-10">
                    {post.type === "Reel" ? <Play className="w-4 h-4 fill-current" /> : <Instagram className="w-4 h-4" />}
                  </div>

                  <div className="absolute inset-0 bg-black/72 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex items-center gap-4 text-white">
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold">
                        <Heart className="w-5 h-5" />
                        {post.likes}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold">
                        <MessageCircle className="w-5 h-5" />
                        {post.comments}
                      </span>
                    </div>

                    <div>
                      <p className="text-white text-xs sm:text-sm font-semibold leading-snug line-clamp-4">
                        {post.caption}
                      </p>
                      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-court-neon">
                          {post.type}
                        </span>
                        <ExternalLink className="w-4 h-4 text-court-neon" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
