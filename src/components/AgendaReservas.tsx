import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Calendar, Check, MessageCircle, Users, Trophy, Building2, Clock, Sparkles } from "lucide-react";

const REQUEST_TYPES = [
  {
    id: "locacao-avulsa",
    title: "Locação avulsa",
    description: "Para jogos recreativos, treinos pontuais e encontros entre amigos.",
    icon: Calendar,
    bullets: ["Flexibilidade de horários", "Quadras para diferentes modalidades", "Confirmação direta com a secretaria"],
  },
  {
    id: "plano-mensal",
    title: "Plano mensal",
    description: "Para praticantes frequentes que querem organizar uma rotina fixa de jogo.",
    icon: Clock,
    bullets: ["Praticidade para jogar toda semana", "Consulta de disponibilidade por unidade", "Atendimento conforme modalidade"],
  },
  {
    id: "aulas-treinos",
    title: "Aulas e treinos",
    description: "Aulas particulares, duplas, grupos, escolinha e equipe de competição.",
    icon: Trophy,
    bullets: ["Professores qualificados", "Metodologia por idade e nível", "Pacotes definidos sob consulta"],
  },
  {
    id: "eventos",
    title: "Eventos e grupos",
    description: "Confraternizações, eventos corporativos, universitários e torneios internos.",
    icon: Building2,
    bullets: ["Estrutura para receber grupos", "Organização de eventos esportivos", "Ambiente seguro e acolhedor"],
  },
];

const UNITS = [
  { id: "americana", label: "Americana", phone: "5519981522647" },
  { id: "nova-odessa", label: "Nova Odessa", phone: "5519920127054" },
];

const MODALITIES = ["Tênis", "Raquetinha", "Beach Tennis", "Squash", "Quadra de Areia"];

export default function AgendaReservas() {
  const [requestType, setRequestType] = useState(REQUEST_TYPES[0].id);
  const [unit, setUnit] = useState(UNITS[0].id);
  const [modality, setModality] = useState(MODALITIES[0]);
  const [name, setName] = useState("");

  const selectedType = REQUEST_TYPES.find((item) => item.id === requestType) || REQUEST_TYPES[0];
  const selectedUnit = UNITS.find((item) => item.id === unit) || UNITS[0];

  const whatsAppLink = useMemo(() => {
    const message = [
      "Olá, Raquetes Clube!",
      `Gostaria de atendimento para: ${selectedType.title}.`,
      `Unidade: ${selectedUnit.label}.`,
      `Modalidade/interesse: ${modality}.`,
      name.trim() ? `Meu nome: ${name.trim()}.` : "",
      "Pode me passar horários, disponibilidade e próximos passos?",
    ].filter(Boolean).join("\n");

    return `https://wa.me/${selectedUnit.phone}?text=${encodeURIComponent(message)}`;
  }, [selectedType.title, selectedUnit.label, selectedUnit.phone, modality, name]);

  return (
    <section className="relative py-20 bg-dark-bg" id="agenda">
      <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] bg-court-neon/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[45%] bg-clay-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
            • ATENDIMENTO & RESERVAS •
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Reservas e <span className="text-gradient-neon font-extrabold">Locações de Quadras</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Estrutura completa para prática esportiva, encontros entre amigos, eventos e competições. Escolha seu interesse e fale com a secretaria pelo WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {REQUEST_TYPES.map((item, idx) => {
              const Icon = item.icon;
              const isActive = requestType === item.id;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.38, delay: idx * 0.06 }}
                  onClick={() => setRequestType(item.id)}
                  className={`text-left rounded-3xl border p-6 transition-all ${
                    isActive
                      ? "bg-court-neon/10 border-court-neon/45 shadow-[0_0_28px_rgba(8,174,234,0.13)]"
                      : "bg-panel-dark/35 border-white/5 hover:border-white/15 hover:bg-panel-dark/60"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                      isActive ? "bg-court-neon text-dark-bg" : "bg-white/5 text-court-neon"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">{item.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed mt-2">{item.description}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-court-neon shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-4 bg-gradient-to-b from-panel-dark to-dark-bg border border-white/10 rounded-3xl p-6 relative overflow-hidden sticky lg:top-28"
          >
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-court-neon via-court-emerald to-sand-warm" />

            <div className="text-left mb-6">
              <span className="text-[10px] font-mono text-court-neon uppercase tracking-widest">Secretaria online</span>
              <h4 className="font-display font-bold text-2xl text-white mt-1">Montar atendimento</h4>
              <p className="text-xs text-gray-400 mt-2">A mensagem já sai organizada para a unidade escolhida.</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Unidade</label>
                <div className="grid grid-cols-2 gap-2">
                  {UNITS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setUnit(item.id)}
                      className={`rounded-xl border px-3 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                        unit === item.id
                          ? "bg-court-neon text-dark-bg border-court-neon"
                          : "bg-white/5 text-gray-300 border-white/10 hover:border-white/20"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Modalidade ou interesse</label>
                <select
                  value={modality}
                  onChange={(e) => setModality(e.target.value)}
                  className="w-full bg-panel-dark text-white text-sm font-medium border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-court-neon transition-colors"
                >
                  {MODALITIES.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Seu nome</label>
                <input
                  type="text"
                  placeholder="Ex: Paulo Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-panel-dark text-white text-sm font-medium border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-court-neon transition-colors"
                />
              </div>

              <div className="rounded-2xl bg-black/35 border border-white/5 p-4 text-left">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-court-neon mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Resumo
                </div>
                <p className="text-sm font-bold text-white">{selectedType.title}</p>
                <p className="text-xs text-gray-400 mt-1">{selectedUnit.label} · {modality}</p>
              </div>
            </div>

            <a
              href={whatsAppLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2.5 text-center font-bold py-3.5 px-5 rounded-xl uppercase tracking-wider text-xs transition-all bg-court-neon hover:bg-white text-dark-bg shadow-lg shadow-court-neon/15"
              id="confirm-booking-cta"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Falar pelo WhatsApp
            </a>

            <p className="text-[11px] text-gray-500 leading-relaxed mt-4">
              Reserve sua quadra e aproveite o melhor dos esportes de raquete com confirmação direta pela secretaria.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
