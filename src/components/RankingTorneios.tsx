import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Trophy, HelpCircle, ArrowUpRight, CalendarDays, ImagePlus } from "lucide-react";
import {
  fetchTournamentContent,
  type TournamentContent,
} from "../services/tournamentContent";

function formatEventDate(value?: string) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

export default function RankingTorneios() {
  const fallbackBannerUrl = `${import.meta.env.BASE_URL}torneios/proximo-torneio.png`;
  const [tournament, setTournament] = useState<TournamentContent | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchTournamentContent(controller.signal)
      .then(setTournament)
      .catch(() => setTournament(null));
    return () => controller.abort();
  }, []);

  const tournamentBannerUrl = tournament?.bannerUrl ?? fallbackBannerUrl;
  const tournamentAlt =
    tournament?.altText ?? "Banner do próximo torneio do Raquetes Clube";
  const eventDate = formatEventDate(tournament?.eventDate);

  return (
    <section className="relative py-20 bg-dark-bg/95 border-b border-white/5" id="rankings">
      {/* Background neon dots */}
      <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-court-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
            • TORNEIOS & RANKINGS •
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Competições e <span className="text-gradient-neon font-extrabold">Evolução de Jogo</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Acompanhe rankings, torneios abertos, chaves e resultados oficiais do Raquetes Clube pela plataforma LetzPlay.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 max-w-6xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 self-start bg-panel-dark/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="relative aspect-[20/7] bg-black/40">
              <img
                src={tournamentBannerUrl}
                alt={tournamentAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/75 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5 right-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-black/50 border border-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-court-neon backdrop-blur-md">
                  <ImagePlus className="w-3.5 h-3.5" />
                  {eventDate ?? "Próximo torneio"}
                </span>
              </div>
              {tournament?.registrationUrl && (
                <a
                  href={tournament.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${tournament.buttonLabel ?? "Inscreva-se"}: ${tournament.title}`}
                  className="absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-court-neon"
                />
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-5 bg-gradient-to-b from-panel-dark to-dark-bg border border-white/10 rounded-3xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-court-neon/15 text-court-neon flex items-center justify-center mb-5">
                <CalendarDays className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-court-neon uppercase tracking-widest">Próximos eventos</span>
              <h3 className="font-display font-bold text-2xl text-white mt-2">Torneios abertos</h3>
              <p className="text-sm text-gray-400 leading-relaxed mt-3">
                Consulte inscrições, categorias e chaves dos torneios oficiais do clube diretamente na LetzPlay.
              </p>
            </div>

            <a
              href="https://letzplay.me/raquetes-clube/tournaments?filter=open"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-court-neon hover:bg-white text-dark-bg px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Ver torneios
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
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
