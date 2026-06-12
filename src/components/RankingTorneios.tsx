import { motion } from "motion/react";
import { Trophy, HelpCircle, ArrowUpRight } from "lucide-react";

export default function RankingTorneios() {
  return (
    <section className="relative py-20 bg-dark-bg/95 border-b border-white/5" id="rankings">
      {/* Background neon dots */}
      <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-court-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
            • ARENA COMPETITIVA •
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Rankings & <span className="text-gradient-neon font-extrabold">Evolução de Jogo</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Acompanhe sua posição, chaves e resultados em tempo real. Nosso ranking é gerido oficialmente pela plataforma LetzPlay.
          </p>
        </div>

        {/* Main Ranking Card with Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-panel-dark/40 border border-white/10 rounded-3xl p-4 md:p-6 backdrop-blur-md max-w-5xl mx-auto overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-court-neon/15 text-court-neon flex items-center justify-center">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white">Rankings em Andamento</h3>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Sincronizado via LetzPlay</p>
              </div>
            </div>
            
            <a
              href="https://letzplay.me/raquetes-clube/rankings?filter=ongoing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-court-neon hover:text-white transition-colors self-start sm:self-auto bg-white/5 hover:bg-white/10 py-2 px-4 rounded-xl border border-white/5"
            >
              <span>Abrir no LetzPlay</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Iframe container */}
          <div className="relative rounded-2xl overflow-hidden bg-white h-[650px] shadow-inner">
            <iframe
              src="https://embed.letzplay.me/raquetes-clube/rankings?filter=ongoing"
              className="w-full h-full border-0"
              title="Rankings Oficiais Raquetes Clube LetzPlay"
              allowFullScreen
            />
          </div>
          
          {/* Quick Notice about challenge terms */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-start gap-2 max-w-xl">
              <HelpCircle className="w-5 h-5 text-court-neon shrink-0 mt-0.5" />
              <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                *Nota:* A tabela acima é atualizada de forma dinâmica e automática. Para participar das ligas e registrar partidas, acesse sua conta no LetzPlay ou fale com a secretaria da unidade mais próxima.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
