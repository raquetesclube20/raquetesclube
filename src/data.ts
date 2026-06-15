import { Modality, CoachingPlan, CourtTimeSlot } from "./types";

export const MODALITIES: Modality[] = [
  {
    id: "tenis",
    name: "Tênis",
    description: "Quadras de saibro para aulas, jogos, locações e treinos com menor impacto nas articulações.",
    longDescription: "O tênis no saibro favorece trocas mais longas, controle de bola e evolução técnica com menor impacto para as articulações. No Raquetes Clube, a modalidade atende desde quem está começando até jogadores que buscam treino, competição e locação de quadra.",
    icon: "Activity",
    color: "from-squash-cyan to-court-emerald",
    courtCount: 4
  },
  {
    id: "beach-tennis",
    name: "Beach Tennis",
    description: "Esporte na areia que une diversão, atividade física e integração social.",
    longDescription: "O beach tennis combina diversão, condicionamento físico e interação social em um ambiente descontraído. Praticado na areia, fortalece pernas, abdômen e core, melhora equilíbrio e coordenação motora e tem impacto reduzido nas articulações.",
    icon: "Sun",
    color: "from-sand-warm to-clay-orange",
    courtCount: 6
  },
  {
    id: "squash",
    name: "Squash",
    description: "Modalidade indoor intensa para condicionamento, reflexos e velocidade de reação.",
    longDescription: "O squash é considerado um dos esportes que mais queimam calorias por hora de prática. Dinâmico e intenso, melhora condicionamento físico, capacidade cardiovascular, reflexos e velocidade de reação, com a vantagem de ser praticado em ambiente fechado.",
    icon: "Zap",
    color: "from-court-neon to-court-emerald",
    courtCount: 2
  },
  {
    id: "raquetinha",
    name: "Raquetinha",
    description: "Modalidade tradicional da região, disputada em duplas e com aprendizado acessível.",
    longDescription: "Tradicional na região metropolitana de Campinas e na Baixada Santista, a raquetinha é disputada em duplas nos moldes do tênis. A raquete e a dinâmica do jogo tornam a modalidade mais acessível, favorecendo jogabilidade, integração e aprendizado rápido.",
    icon: "Target",
    color: "from-court-emerald to-sand-warm",
    courtCount: 3
  },
  {
    id: "quadra-areia",
    name: "Quadras de Areia",
    description: "Espaço versátil para jogos, treinos, eventos e encontros esportivos na areia.",
    longDescription: "As quadras de areia ampliam a experiência do clube para jogos recreativos, treinos funcionais, encontros entre amigos, confraternizações e eventos esportivos. É uma estrutura preparada para receber grupos e fortalecer a convivência em torno do esporte.",
    icon: "Flame",
    color: "from-sand-warm to-court-neon",
    courtCount: 2
  },
  {
    id: "aulas-treinos",
    name: "Aulas & Treinos",
    description: "Aulas particulares, duplas, grupos, escolinha e equipe de competição.",
    longDescription: "Perfeito para quem deseja aprender, evoluir ou competir. A metodologia contempla aulas particulares com acompanhamento individualizado, treinos em duplas, aulas em grupo, escolinha infantil e preparação para equipe de competição.",
    icon: "Award",
    color: "from-squash-cyan to-sand-warm",
    courtCount: 0
  }
];

export const COACHING_PLANS: CoachingPlan[] = [
  {
    id: "iniciacao",
    level: "Aulas Particulares",
    description: "Acompanhamento individualizado para quem quer aprender, corrigir fundamentos ou evoluir com atenção total do professor.",
    benefits: [
      "Plano de evolução de acordo com o nível do aluno",
      "Correção técnica e leitura de jogo",
      "Atendimento para iniciantes, praticantes e atletas",
      "Disponível para diferentes modalidades do clube"
    ],
    duration: "Horários sob consulta",
    priceEstimate: "Consultar pacote"
  },
  {
    id: "intermediario",
    level: "Duplas e Grupos",
    description: "Treinos em duplas e aulas em grupo para desenvolvimento técnico, tático e integração entre alunos.",
    benefits: [
      "Turmas com foco em evolução e convivência",
      "Desenvolvimento de ritmo, posicionamento e tomada de decisão",
      "Ambiente acolhedor para diferentes idades",
      "Integração entre alunos e praticantes"
    ],
    duration: "Turmas sob consulta",
    priceEstimate: "Consultar pacote"
  },
  {
    id: "alta-performance",
    level: "Escolinha e Competição",
    description: "Formação esportiva para crianças e preparação de jogadores que desejam competir com mais consistência.",
    benefits: [
      "Escolinha infantil para desenvolvimento motor",
      "Equipe de competição e treinos orientados",
      "Preparação para rankings, desafios e torneios",
      "Professores qualificados e metodologia estruturada"
    ],
    duration: "Agenda sob consulta",
    priceEstimate: "Consultar pacote"
  }
];

export const COURT_SLOTS_SAMPLE: CourtTimeSlot[] = [
  { id: "s1", time: "07:00 - 08:30", isAvailable: true, courtName: "Quadra Central de Saibro (Tênis)" },
  { id: "s2", time: "08:30 - 10:00", isAvailable: false, courtName: "Quadra Central de Saibro (Tênis)" },
  { id: "s3", time: "10:00 - 11:30", isAvailable: true, courtName: "Quadra Central de Saibro (Tênis)" },
  { id: "s4", time: "17:30 - 19:00", isAvailable: false, courtName: "Quadra 2 Saibro (Tênis)" },
  { id: "s5", time: "19:00 - 20:30", isAvailable: true, courtName: "Quadra 2 Saibro (Tênis)" },
  { id: "s6", time: "20:30 - 22:00", isAvailable: true, courtName: "Quadra 2 Saibro (Tênis)" },
  { id: "s7", time: "16:00 - 17:30", isAvailable: true, courtName: "Quadra de Areia 1 (Beach Tennis)" },
  { id: "s8", time: "17:30 - 19:00", isAvailable: false, courtName: "Quadra de Areia 1 (Beach Tennis)" },
  { id: "s9", time: "19:00 - 20:30", isAvailable: true, courtName: "Quadra de Areia 2 (Beach Tennis)" },
  { id: "s10", time: "20:30 - 22:00", isAvailable: true, courtName: "Quadra de Areia 2 (Beach Tennis)" },
  { id: "s11", time: "18:00 - 19:00", isAvailable: true, courtName: "Quadra de Squash 1" },
  { id: "s12", time: "19:00 - 20:00", isAvailable: false, courtName: "Quadra de Squash 2" }
];
