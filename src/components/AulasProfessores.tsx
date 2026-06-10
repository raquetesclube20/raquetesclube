import { useState } from "react";
import { COACHING_PLANS } from "../data";
import { CoachingPlan } from "../types";
import { motion } from "motion/react";
import { Check, Calendar, MessageCircle, HelpCircle, Star, Sparkles, Smile, ArrowRight, BookOpen } from "lucide-react";
import rogerioImg from "../../assets/rogerio.png";
import lucianoImg from "../../assets/luciano.png";


export default function AulasProfessores() {
  const [selectedPlanLevel, setSelectedPlanLevel] = useState<string>("Iniciação");

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
            Professores credenciados e experientes prontos para impulsionar seu jogo sob qualquer modalidade de raquete ou areia. Encontre a turma perfecta!
          </p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
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

        {/* NEW SECTION: Directors & Coach CV Profiles */}
        <div className="border-t border-white/5 pt-16 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
              • EXPERIÊNCIA E AUTORIDADE •
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-4">
              Nossos Diretores & Professores
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Liderança técnica comprometida com a sua evolução na quadra. Conheça a trajetória de quem gerencia e eleva o nível do Raquetes Clube.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Rogério Kawakami Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-panel-dark/40 border border-white/10 rounded-3xl p-6 sm:p-8 text-left flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden group hover:border-court-neon/30 transition-all duration-300"
            >
              {/* Decorative radial spot */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-court-neon/5 rounded-full blur-2xl pointer-events-none group-hover:bg-court-neon/10 transition-colors" />

              {/* Portrait Image */}
              <div className="w-full sm:w-44 h-56 rounded-2xl overflow-hidden shrink-0 border border-white/10 relative">
                <img
                  src={rogerioImg}
                  alt="Rogério Kawakami"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/85 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 bg-court-neon/20 backdrop-blur-md text-[9px] font-mono tracking-widest text-court-neon font-bold uppercase py-0.5 px-2 border border-court-neon/30 rounded">
                  DIRETOR I
                </span>
              </div>

              {/* CV Body */}
              <div className="flex-grow flex flex-col justify-between h-full space-y-4">
                <div>
                  <h4 className="font-display font-black text-xl text-white">Rogério Kawakami</h4>
                  <span className="text-[11px] font-mono tracking-wider font-bold text-court-neon uppercase">Diretor · Professor de Tênis</span>
                  
                  {/* CV bullets */}
                  <ul className="space-y-1.5 mt-3.5 text-xs text-gray-300">
                    <li className="flex items-start gap-1.5">
                      <span className="text-court-neon mt-0.5">•</span>
                      <span>Formado em Educação Física e Administração, com MBA e Mestrado.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-court-neon mt-0.5">•</span>
                      <span>Tenista de 1ª classe pela Federação Paulista de Tênis (FPT).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-court-neon mt-0.5">•</span>
                      <span>Possui pontuação na ATP na categoria de duplas internacionais.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-court-neon mt-0.5">•</span>
                      <span>Especialista na formação de atletas de alta performance.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-court-neon mt-0.5">•</span>
                      <span>Treinou e formou diversos professores renomados em Americana e região.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-court-neon mt-0.5">•</span>
                      <span>Atua também como excelente professor universitário acadêmico.</span>
                    </li>
                  </ul>
                </div>

                {/* Badges/Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["1ª classe FPT", "Pontos ATP", "MBA + Mestrado", "Prof. universitário", "Alto rendimento"].map(tag => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 text-gray-400 text-[9px] font-mono uppercase px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Luciano Santos Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-panel-dark/40 border border-white/10 rounded-3xl p-6 sm:p-8 text-left flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden group hover:border-court-emerald/30 transition-all duration-300"
            >
              {/* Decorative radial spot */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-court-emerald/5 rounded-full blur-2xl pointer-events-none group-hover:bg-court-emerald/10 transition-colors" />

              {/* Portrait Image */}
              <div className="w-full sm:w-44 h-56 rounded-2xl overflow-hidden shrink-0 border border-white/10 relative">
                <img
                  src={lucianoImg}
                  alt="Luciano Santos"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/85 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 bg-court-emerald/20 backdrop-blur-md text-[9px] font-mono tracking-widest text-court-emerald font-bold uppercase py-0.5 px-2 border border-court-emerald/30 rounded">
                  DIRETOR II
                </span>
              </div>

              {/* CV Body */}
              <div className="flex-grow flex flex-col justify-between h-full space-y-4">
                <div>
                  <h4 className="font-display font-black text-xl text-white">Luciano Santos</h4>
                  <span className="text-[11px] font-mono tracking-wider font-bold text-court-emerald uppercase">Diretor · Professor de Tênis</span>
                  
                  {/* CV bullets */}
                  <ul className="space-y-1.5 mt-3.5 text-xs text-gray-300">
                    <li className="flex items-start gap-1.5">
                      <span className="text-court-emerald mt-0.5">•</span>
                      <span>Iniciou sua trajetória bem jovem, atuando como pegador de bola em quadra.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-court-emerald mt-0.5">•</span>
                      <span>Trajetória completa no tênis, com profunda experiência prática e técnica.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-court-emerald mt-0.5">•</span>
                      <span>Atuou no desenvolvimento de atletas como respeitado rebatedor.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-court-emerald mt-0.5">•</span>
                      <span>Aulas consolidadas com bagagem em SP-Capital e cidade de Americana.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-court-emerald mt-0.5">•</span>
                      <span>Reconhecido como um dos professores com a maior base de alunos da região.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-court-emerald mt-0.5">•</span>
                      <span>Jogador competitivo de altíssimo nível na categoria de 1ª classe.</span>
                    </li>
                  </ul>
                </div>

                {/* Badges/Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["1ª classe", "Maior base de alunos", "SP & Americana", "Todas as fases"].map(tag => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 text-gray-400 text-[9px] font-mono uppercase px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
