import { Modality, CoachingPlan, CourtTimeSlot } from "./types";

export const MODALITIES: Modality[] = [
  {
    id: "tenis",
    name: "Tênis",
    description: "Tradição, tática e precisão para jogos e aulas de tênis.",
    longDescription: "Nossas quadras de saibro oferecem a drenagem ideal e são impecavelmente mantidas para garantir o salto perfeito da bola. Venha disputar partidas casuais, aprimorar seu forehand ou competir em nossos rankings integrados.",
    icon: "Activity",
    color: "from-squash-cyan to-court-emerald",
    courtCount: 4
  },
  {
    id: "beach-tennis",
    name: "Beach Tennis",
    description: "Modalidade na areia para jogos rápidos, aulas e grupos.",
    longDescription: "Esporte que mais cresce no Brasil, o beach tennis une simplicidade, queima calórica e um ambiente relaxado de amizade. Nossas quadras têm areia tratada antitérmica com iluminação LED de última geração.",
    icon: "Sun",
    color: "from-sand-warm to-clay-orange",
    courtCount: 6
  },
  {
    id: "squash",
    name: "Squash",
    description: "Dinâmico, estratégico e de alto gasto calórico em arenas climatizadas.",
    longDescription: "Acelere suas decisões, treine seus reflexos e divirta-se em quadras fechadas com tecnologia avançada de amortecimento no piso. Perfeita para quem busca performance e eficiência no treino.",
    icon: "Zap",
    color: "from-court-neon to-court-emerald",
    courtCount: 2
  },
  {
    id: "raquetinha",
    name: "Raquetinha",
    description: "O esporte febre tradicional de Americana. Trocas rápidas e pura adrenalina.",
    longDescription: "Mais leve, com raquetes mais curtas e bolas de menor pressão, a raquetinha é uma modalidade ágil e tradicional na região. Uma boa opção para jogos rápidos e treinos em grupo.",
    icon: "Target",
    color: "from-court-emerald to-sand-warm",
    courtCount: 3
  },
  {
    id: "quadra-areia",
    name: "Quadras de Areia",
    description: "Multiesportes na areia especial para vôlei de praia, futevôlei e treinos funcionais.",
    longDescription: "Para além do beach tennis, nossa estrutura de areia apoia treinos esportivos focados em mobilidade e força, vôlei de praia e futevôlei com grupos amadores e alta energia de finais de semana.",
    icon: "Flame",
    color: "from-sand-warm to-court-neon",
    courtCount: 2
  },
  {
    id: "aulas-treinos",
    name: "Aulas & Treinos",
    description: "Aprenda com metodologia própria de professores formados e experientes.",
    longDescription: "Acelere sua técnica! Oferecemos aulas individuais ou em turmas reduzidas para todos os níveis, desde quem nunca segurou uma raquete até atletas que querem refinar detalhes táticos para torneios.",
    icon: "Award",
    color: "from-squash-cyan to-sand-warm",
    courtCount: 0
  }
];

export const COACHING_PLANS: CoachingPlan[] = [
  {
    id: "iniciacao",
    level: "Aulas de Iniciação",
    description: "Perfeita para quem quer aprender as regras do jogo, empunhadura correta, posicionamento de quadra e os primeiros golpes essenciais de forma descontraída e didática.",
    benefits: [
      "Fundamentos mecânicos de golpes",
      "Terminologia e regras essenciais",
      "Uso de raquetes de teste incluído",
      "Grupos de até 4 pessoas para facilitar a socialização"
    ],
    duration: "1h por aula - Planos de 1 ou 2x por semana",
    priceEstimate: "A partir de R$ 160/mês"
  },
  {
    id: "intermediario",
    level: "Aprimoramento Técnico",
    description: "Para jogadores que já trocam bola e buscam mais consistência, direção, saque e leitura de jogo.",
    benefits: [
      "Estratégia de jogo (Simples e Duplas)",
      "Transição de defesa para ataque",
      "Filmagem técnica e análise de postura",
      "Convites automáticos para ligas do clube"
    ],
    duration: "1h por aula - Planos de 1, 2 ou 3x por semana",
    priceEstimate: "A partir de R$ 220/mês"
  },
  {
    id: "alta-performance",
    level: "Alta Performance & Competição",
    description: "Treinos focados em preparação para torneios, rankings internos, tática de jogo e consistência em quadra.",
    benefits: [
      "Situações de jogo e match play",
      "Ajustes táticos personalizados",
      "Suporte físico focado em deslocamento e flexibilidade",
      "Acompanhamento em chaves de torneios"
    ],
    duration: "1h15 por aula - Individuais ou Duplas de Performance",
    priceEstimate: "Sob consulta acadêmica"
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
