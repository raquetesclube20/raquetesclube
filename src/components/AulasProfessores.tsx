import { useState } from "react";
import { COACHING_PLANS } from "../data";
import { CoachingPlan } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Check, Calendar, MessageCircle, HelpCircle, Star, Sparkles, Smile, ArrowRight, BookOpen, X } from "lucide-react";
import rogerioImg from "../../assets/rogerio.png";
import lucianoImg from "../../assets/luciano.png";

export default function AulasProfessores() {
  const [selectedPlanLevel, setSelectedPlanLevel] = useState<string>("Iniciação");
  const [activeTeacher, setActiveTeacher] = useState<any | null>(null);

  const TEACHERS = [
    {
      id: "rogerio",
      name: "Rogério Kawakami",
      title: "Diretor · Professor de Tênis",
      label: "DIRETOR I",
      image: rogerioImg,
      badgeColor: "text-court-neon bg-court-neon/20 border-court-neon/30",
      hoverColor: "hover:border-court-neon/30",
      radialColor: "bg-court-neon/5 group-hover:bg-court-neon/10",
      bullets: [
        "Formado em Educação Física e Administração, com MBA e Mestrado.",
        "Tenista de 1ª classe pela Federação Paulista de Tênis (FPT).",
        "Possui pontuação na ATP na categoria de duplas internacionais.",
        "Especialista na formação de atletas de alta performance.",
        "Treinou e formou diversos professores renomados em Americana e região.",
        "Atua também como excelente professor universitário acadêmico."
      ],
      tags: ["1ª classe FPT", "Pontos ATP", "MBA + Mestrado", "Prof. universitário", "Alto rendimento"]
    },
    {
      id: "luciano",
      name: "Luciano Santos",
      title: "Diretor · Professor de Tênis",
      label: "DIRETOR II",
      image: lucianoImg,
      badgeColor: "text-court-emerald bg-court-emerald/20 border-court-emerald/30",
      hoverColor: "hover:border-court-emerald/30",
      radialColor: "bg-court-emerald/5 group-hover:bg-court-emerald/10",
      bullets: [
        "Iniciou sua trajetória bem jovem, atuando como pegador de bola em quadra.",
        "Trajetória completa no tênis, com profunda experiência prática e técnica.",
        "Atuou no desenvolvimento de atletas como respeitado rebatedor.",
        "Aulas consolidadas com bagagem em SP-Capital e cidade de Americana.",
        "Reconhecido como um dos professores com a maior base de alunos da região.",
        "Jogador competitivo de altíssimo nível na categoria de 1ª classe."
      ],
      tags: ["1ª classe", "Maior base de alunos", "SP & Americana", "Todas as fases"]
    }
  ];

  const otherSpecialties = [
    {
      title: "Treinos Personalizados (VIP)",
      desc: "Aulas individuais com 100% de foco no seu desenvolvimento biomecânico e tático. Ideal para correções rápidas.",
      ctaText: "Consultar Personal",
      icon: Star
    },
    {
      title: "Clínicas & Aulas em Grupo",
      desc: "Aulas descontraídas de até 5 pessoas. Perfeitas para fazer novos amigos e treinar dinâmica de voleios.",
      ctaText: "Ver Agenda de Grupos",
      icon: Smile
    }
  ];

  const handleOpenCoachInquiry = (planName: string) => {
    const phone = "5519999999999";
    const text = `Olá, Raquetes Clube! Gostaria de receber informações de turmas, horários livres e valores para o plano de aulas: *${planName}* em Americana.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="relative py-20 bg-dark-bg/90 border-t border-b border-white/5" id="aulas">
      {/* Background radial spotlights */}
      <div className="absolute top-[40%] right-[-10%] w-[45%] h-[45%] bg-court-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
            • ACADEMIA DE ALTO RENDIMENTO •
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Nossa Academia de <span className="text-gradient-neon font-extrabold">Aulas & Treinos</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Professores credenciados e experientes prontos para impulsionar seu jogo sob qualquer modalidade de raquete ou areia. Encontre a turma perfeita!
          </p>
        </div>

        {/* Directors & Teachers Section (Moved Up!) */}
        <div className="mb-20 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
              • EXPERIÊNCIA E AUTORIDADE •
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-4">
              Nossos Diretores & Professores
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Clique na foto de cada diretor para conhecer sua trajetória profissional, formação e especialidades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto justify-center">
            {TEACHERS.map((teacher) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveTeacher(teacher)}
                className={`bg-panel-dark/40 border border-white/10 rounded-3xl p-4 text-center cursor-pointer relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${teacher.hoverColor}`}
              >
                {/* Decorative radial spot */}
                <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl pointer-events-none transition-colors ${teacher.radialColor}`} />

                {/* Portrait Image */}
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative mb-4">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60" />
                  <span className={`absolute bottom-3 left-3 backdrop-blur-md text-[9px] font-mono tracking-widest font-bold uppercase py-0.5 px-2 border rounded ${teacher.badgeColor}`}>
                    {teacher.label}
                  </span>
                </div>

                {/* Info */}
                <h4 className="font-display font-black text-lg text-white group-hover:text-court-neon transition-colors">
                  {teacher.name}
                </h4>
                <p className="text-gray-400 text-xs mt-1 font-medium">
                  {teacher.title}
                </p>
                
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-court-neon font-bold uppercase mt-3 hover:translate-x-0.5 transition-transform">
                  Ver Perfil Completo →
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-16 max-w-5xl mx-auto" />

        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
            • NOSSOS PLANOS •
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-4">
            Planos de Aula & Treinamentos
          </h3>
        </div>

        {/* Major Grid: Main Progressive Levels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {COACHING_PLANS.map((plan, idx) => {
            const isFeatured = plan.id === "intermediario";
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`relative rounded-3xl p-6 md:p-8 border flex flex-col justify-between overflow-hidden shadow-2xl ${
                  isFeatured 
                    ? "bg-gradient-to-b from-panel-dark to-[#0f172a]/70 border-court-neon/40 shadow-court-neon/5" 
                    : "bg-panel-dark/40 border-white/5 hover:border-white/10"
                }`}
                id={`plan-card-${plan.id}`}
              >
                {/* Popularity indicator badge */}
                {isFeatured && (
                  <div className="absolute top-4 right-4 bg-court-neon text-dark-bg font-mono font-bold text-[9px] uppercase py-1 px-2.5 rounded-full tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-current" />
                    Mais Procurado
                  </div>
                )}

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-court-neon mb-2 block">PLANO EVOLUÇÃO • v2.0</span>
                  <h3 className="font-display font-extrabold text-2xl text-white mb-3">{plan.level}</h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6 border-b border-white/5 pb-5">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-court-neon shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  {/* Prices & CTAs */}
                  <div className="bg-black/35 p-4 rounded-2xl border border-white/5 mb-5 flex justify-between items-center text-left">
                    <div>
                      <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-wider">Pacote Mensal</span>
                      <span className="text-sm font-bold text-white">{plan.priceEstimate || "Sob Consulta"}</span>
                    </div>
                    <span className="text-[9px] font-mono text-gray-400 bg-white/5 py-1 px-2 border border-white/5 rounded">
                      {plan.duration}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOpenCoachInquiry(plan.level)}
                    className={`w-full py-3.5 px-4 rounded-xl text-center font-bold font-sans text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isFeatured 
                        ? "bg-court-neon hover:bg-white text-dark-bg shadow-lg hover:shadow-white/10" 
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-court-neon/30"
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    Agendar Aula Experimental
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Specialized and Custom Formats Row (Bento Bottom Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {otherSpecialties.map((spec, idx) => {
            const SpecIcon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-panel-dark/20 border border-white/5 p-6 rounded-2xl text-left flex items-start gap-4 transition-all hover:border-court-neon/10"
              >
                <div className="p-3 bg-court-neon/15 text-court-neon rounded-xl shrink-0 mt-1">
                  <SpecIcon className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-base text-white">{spec.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{spec.desc}</p>
                  <button
                    onClick={() => handleOpenCoachInquiry(spec.title)}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-court-neon font-bold hover:translate-x-1 transition-transform mt-2 cursor-pointer uppercase"
                  >
                    {spec.ctaText}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Teacher Detail Modal */}
      <AnimatePresence>
        {activeTeacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveTeacher(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-2xl bg-panel-dark border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveTeacher(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Photo in Modal */}
                <div className="w-full sm:w-48 aspect-[4/5] sm:h-64 rounded-2xl overflow-hidden shrink-0 border border-white/10 relative">
                  <img
                    src={activeTeacher.image}
                    alt={activeTeacher.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/85 via-transparent to-transparent opacity-80" />
                  <span className={`absolute bottom-3 left-3 backdrop-blur-md text-[9px] font-mono tracking-widest font-bold uppercase py-0.5 px-2 border rounded ${activeTeacher.badgeColor}`}>
                    {activeTeacher.label}
                  </span>
                </div>

                {/* CV Content in Modal */}
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="font-display font-black text-2xl text-white">{activeTeacher.name}</h3>
                    <p className="text-xs font-mono tracking-wider font-bold text-court-neon uppercase mt-1">
                      {activeTeacher.title}
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-gray-300 border-t border-b border-white/5 py-4">
                    {activeTeacher.bullets.map((bullet: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-court-neon mt-0.5 shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {activeTeacher.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-white/5 border border-white/10 text-gray-400 text-[9px] font-mono uppercase px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
