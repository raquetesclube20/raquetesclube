import { motion } from "motion/react";
import { Users, BookOpen, Trophy, Sparkles, Smile, Flame, ShieldCheck, Heart } from "lucide-react";

export default function Experiencia() {
  const values = [
    {
      icon: Users,
      title: "Ambiente Familiar",
      desc: "Um espaço seguro e acolhedor para reunir a família, integrar diferentes gerações e criar memórias de finais de semana inesquecíveis.",
      badge: "Integração"
    },
    {
      icon: BookOpen,
      title: "Professores Especializados",
      desc: "Metodologia estruturada que atende do iniciante absoluto ao competidor de torneios de alta performance. Evolução técnica contínua.",
      badge: "Metodologia"
    },
    {
      icon: Trophy,
      title: "Rankings & Desafios",
      desc: "Estímulo ideal para manter-se ativo jogando contra novos oponentes no seu exato nível de jogo todos os meses com premiações periódicas.",
      badge: "Performance"
    },
    {
      icon: Sparkles,
      title: "Eventos & Torneios",
      desc: "Torneios internos animados, clínicas técnicas com convidados de destaque nacional, happy hours comunitários e um bar gourmet completo.",
      badge: "Networking"
    },
    {
      icon: Heart,
      title: "Saúde & Estilo de Vida",
      desc: "Mais disposição, queima calórica intensa e condicionamento cardiovascular no esporte que você escolheu como seu estilo de vida diário.",
      badge: "Bem-estar"
    },
    {
      icon: Smile,
      title: "Conexões Reais",
      desc: "Crie novas amizades no melhor clube boutique de Americana. Desligue das telas e entre em movimento com parceiros que amam o esporte.",
      badge: "Comunidade"
    }
  ];

  return (
    <section className="relative py-20 bg-dark-bg/90 border-t border-b border-white/5" id="experiencia">
      {/* Background radial highlight */}
      <div className="absolute top-[20%] left-[-10%] w-[45%] h-[45%] bg-court-neon/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-sand-warm/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Grid: Heading left, concept right */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 pb-6 border-b border-white/5">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
              • PROPÓSITO & ESTILO DE VIDA •
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1]">
              Mais que quadras.<br />
              Uma <span className="text-gradient-neon font-extrabold">comunidade</span> em movimento.
            </h2>
          </div>
          <div className="lg:col-span-5 text-left lg:border-l lg:border-white/10 lg:pl-8 pb-1">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              No Raquetes Clube 2.0, acreditamos no esporte de raquete e areia como um poderoso integrador social. Oferecemos infraestrutura de ponta, em uma atmosfera boutique que prioriza o bem-estar físico, a saúde mental e as conexões humanas autênticas.
            </p>
          </div>
        </div>

        {/* Values Bento-like layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, idx) => {
            const IconComp = v.icon;
            
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-panel-dark/30 hover:bg-panel-dark/60 border border-white/5 hover:border-court-neon/15 p-6 rounded-2xl transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative spotlight inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-[25px] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-court-neon/10 group-hover:border-court-neon/20 text-court-neon transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">
                      {v.badge}
                    </span>
                  </div>

                  {/* Body Copy */}
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-court-neon transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-normal leading-relaxed">
                    {v.desc}
                  </p>
                </div>

                {/* Aesthetic status or quote indicator */}
                <div className="mt-4 pt-3 border-t border-dashed border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span className="flex items-center gap-1.5 text-gray-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-court-emerald" />
                    Raquetes v2.0
                  </span>
                  <span className="text-gray-600">Americana-SP</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
