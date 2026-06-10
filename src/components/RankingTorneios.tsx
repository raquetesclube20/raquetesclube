import { useState } from "react";
import { RANKINGS } from "../data";
import { RankingCategory, PlayerRank } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, Flame, Swords, ArrowUpRight, TrendingUp, HelpCircle, X, MessageCircle, Star } from "lucide-react";

export default function RankingTorneios() {
  const [activeCategoryId, setActiveCategoryId] = useState("tenis-ranking");
  const [selectedPlayer, setSelectedPlayer] = useState<{ player: PlayerRank; category: string } | null>(null);

  const activeCategory = RANKINGS.find(c => c.id === activeCategoryId) || RANKINGS[0];

  const handleOpenChallenge = (player: PlayerRank, category: string) => {
    setSelectedPlayer({ player, category });
  };

  const handleCloseChallenge = () => {
    setSelectedPlayer(null);
  };

  const handleConfirmChallenge = () => {
    if (!selectedPlayer) return;
    
    const formattedPlayer = selectedPlayer.player.name;
    const formattedCategory = selectedPlayer.category;
    const phone = "5519999999999";
    
    const text = `Olá, Raquetes Clube! Gostaria de registrar um desafio oficial de Ranking contra o(a) atleta *${formattedPlayer}* na categoria *${formattedCategory}*. Podem nos auxiliar com o cruzamento oficial de chaves e reserva de quadra?`;
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
    setSelectedPlayer(null);
  };

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
            Entre no ranking, desafie novos adversários e viva a evolução jogo após jogo. Nosso sistema unifica as tabelas municipais mais disputadas de Americana.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
          {RANKINGS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all ${
                activeCategoryId === cat.id
                  ? "bg-court-neon border-court-neon text-dark-bg font-extrabold shadow-lg shadow-court-neon/15"
                  : "bg-panel-dark/50 border-white/5 text-gray-300 hover:border-white/15"
              }`}
            >
              {cat.modality}
            </button>
          ))}
        </div>

        {/* Main Ranking Table Card */}
        <div className="bg-panel-dark/40 border border-white/10 rounded-3xl p-4 md:p-8 backdrop-blur-md max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-white/5 pb-4 text-xs font-mono text-gray-400 uppercase tracking-widest">
                  <th className="py-4 pl-4 w-16">Pos</th>
                  <th className="py-4">Nome do Atleta</th>
                  <th className="py-4 text-center">Pontos</th>
                  <th className="py-4 text-center">Vitórias %</th>
                  <th className="py-4 text-center">Streak</th>
                  <th className="py-4 pr-4 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {activeCategory.players.map((item) => {
                  const isTop3 = item.position <= 3;
                  return (
                    <tr 
                      key={item.name}
                      className="group hover:bg-white/[0.02] transition-colors"
                    >
                      {/* Position */}
                      <td className="py-4 pl-4 font-display font-black text-sm text-left">
                        {item.position === 1 ? (
                          <span className="w-7 h-7 rounded-lg bg-yellow-400/20 text-yellow-400 flex items-center justify-center font-bold border border-yellow-400/30">1º</span>
                        ) : item.position === 2 ? (
                          <span className="w-7 h-7 rounded-lg bg-gray-300/20 text-gray-300 flex items-center justify-center font-bold border border-gray-300/30">2º</span>
                        ) : item.position === 3 ? (
                          <span className="w-7 h-7 rounded-lg bg-amber-600/20 text-amber-500 flex items-center justify-center font-bold border border-amber-600/30">3º</span>
                        ) : (
                          <span className="text-gray-400 pl-2 font-mono">{item.position}º</span>
                        )}
                      </td>

                      {/* Name & Initials avatar */}
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg outlineoutline-white/10 flex items-center justify-center font-mono text-[10px] font-bold ${
                            item.position === 1 ? "bg-gradient-to-br from-yellow-400 to-amber-500 text-dark-bg" : "bg-white/5 text-gray-300"
                          }`}>
                            {item.avatarUrl}
                          </div>
                          <div>
                            <span className="block font-sans font-bold text-sm text-white group-hover:text-court-neon transition-colors">{item.name}</span>
                            <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-0.5">Atleta federado</span>
                          </div>
                        </div>
                      </td>

                      {/* Points */}
                      <td className="py-4 text-center">
                        <span className="font-mono text-xs font-bold text-gray-300">{item.points} pts</span>
                      </td>

                      {/* Win Rate */}
                      <td className="py-4 text-center">
                        <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 font-mono">
                          <TrendingUp className="w-3.5 h-3.5 text-court-emerald" />
                          <span>{item.winRate}</span>
                        </div>
                      </td>

                      {/* Streak */}
                      <td className="py-4 text-center">
                        {item.streak > 0 ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-orange-400 bg-orange-400/5 py-0.5 px-2.5 rounded border border-orange-500/10">
                            <Flame className="w-3 h-3 fill-orange-400 stroke-none" />
                            {item.streak} vit
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-[10px] font-mono text-gray-500">
                            1 der
                          </span>
                        )}
                      </td>

                      {/* Action */}
                      <td className="py-4 pr-4 text-right">
                        <button
                          onClick={() => handleOpenChallenge(item, activeCategory.modality)}
                          className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-bold text-dark-bg bg-court-neon group-hover:bg-white py-1.5 px-3 rounded-lg transition-colors cursor-pointer"
                        >
                          <Swords className="w-3.5 h-3.5" />
                          Desafiar
                        </button>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Quick Notice about challenge terms */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-start gap-2 max-w-xl">
              <HelpCircle className="w-5 h-5 text-court-neon shrink-0 mt-0.5" />
              <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                *Regra de Desafios:* Qualquer jogador pode desafiar participantes até duas posições acima na tabela. A partida deve ser disputada em até 15 dias nas quadras do clube, com agendamento direto pelo aplicativo.
              </p>
            </div>
            <div className="shrink-0 bg-white/5 border border-white/5 py-1.5 px-3 rounded-xl flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="text-[10px] font-mono text-gray-300">Atualizado: Hoje</span>
            </div>
          </div>

        </div>

      </div>

      {/* Challenge confirmation prompt popup inside AnimatePresence */}
      <AnimatePresence>
        {selectedPlayer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseChallenge}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-md bg-panel-dark border border-white/10 rounded-2xl p-6 overflow-hidden shadow-2xl text-left"
              onClick={(e) => e.stopPropagation()}
            >
              
              <button
                onClick={handleCloseChallenge}
                className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-court-neon/15 text-court-neon flex items-center justify-center">
                  <Swords className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Lançar Desafiar Oficial</h3>
                  <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Regras de pirâmide Americana</p>
                </div>
              </div>

              {/* Informative text body */}
              <div className="space-y-4 mb-6">
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                  Você está desafiando formalmente o atleta <strong className="text-court-neon">{selectedPlayer.player.name}</strong> pelo ranking de <strong className="text-white">{selectedPlayer.category}</strong>.
                </p>

                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-court-neon" />
                    <span>A partida vale pontuação oficial para a tabela mensal.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-court-neon" />
                    <span>Ambos combinam a divisão da taxa horária da quadra.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-court-neon" />
                    <span>O resultado deve ser assinado na secretaria ao final.</span>
                  </div>
                </div>
              </div>

              {/* Action row CTAs */}
              <div className="flex gap-3">
                <button
                  onClick={handleConfirmChallenge}
                  className="flex-1 flex items-center justify-center gap-2 bg-court-neon hover:bg-white text-dark-bg font-bold py-3 px-4 rounded-xl transition-all font-sans text-xs uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Enviar no WhatsApp
                </button>
                <button
                  onClick={handleCloseChallenge}
                  className="py-3 px-4 rounded-xl border border-white/10 text-white font-semibold text-xs hover:bg-white/5 uppercase tracking-wider"
                >
                  Cancelar
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
