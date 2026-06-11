import { Modality, RankingCategory, CoachingPlan, GalleryItem, CourtTimeSlot } from "./types";

export const MODALITIES: Modality[] = [
  {
    id: "tenis",
    name: "Tênis",
    description: "Tradição, tática e precisão em quadras de saibro premium totalmente preparadas.",
    longDescription: "Nossas quadras de saibro oferecem a drenagem ideal e são impecavelmente mantidas para garantir o salto perfeito da bola. Venha disputar partidas casuais, aprimorar seu forehand ou competir em nossos rankings integrados.",
    icon: "Activity",
    color: "from-squash-cyan to-court-emerald",
    courtCount: 4
  },
  {
    id: "beach-tennis",
    name: "Beach Tennis",
    description: "A energia vibrante da praia, esporte super dinâmico e o melhor clima de comunidade.",
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
    longDescription: "Mais leve, com raquetes mais curtas e bolas de menor pressão, a raquetinha é uma modalidade extremamente ágil e viciante criada e desenvolvida com paixão na nossa região. Venha experimentar os ralis mais dinâmicos do clube.",
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

export const RANKINGS: RankingCategory[] = [
  {
    id: "tenis-ranking",
    modality: "Tênis (Categoria A)",
    players: [
      { position: 1, name: "Guilherme S. Prado", points: 2450, winRate: "84%", streak: 7, avatarUrl: "GP" },
      { position: 2, name: "Thiago Vasconcellos", points: 2210, winRate: "78%", streak: 4, avatarUrl: "TV" },
      { position: 3, name: "Rodrigo M. Dias", points: 2150, winRate: "75%", streak: -1, avatarUrl: "RD" },
      { position: 4, name: "Lucas F. Zanaga", points: 1980, winRate: "69%", streak: 2, avatarUrl: "LZ" },
      { position: 5, name: "Mateus Ribeiro", points: 1840, winRate: "64%", streak: 1, avatarUrl: "MR" }
    ]
  },
  {
    id: "beach-tennis-ranking",
    modality: "Beach Tennis (Duplas Mistas A)",
    players: [
      { position: 1, name: "Bianca R. / Caio M.", points: 2900, winRate: "89%", streak: 12, avatarUrl: "BC" },
      { position: 2, name: "Gabriela F. / André T.", points: 2640, winRate: "81%", streak: 5, avatarUrl: "GA" },
      { position: 3, name: "Mariana L. / Diego K.", points: 2320, winRate: "74%", streak: -2, avatarUrl: "MD" },
      { position: 4, name: "Camila N. / Vinicius Z.", points: 2180, winRate: "70%", streak: 3, avatarUrl: "CV" },
      { position: 5, name: "Patrícia V. / Renato B.", points: 1950, winRate: "65%", streak: 1, avatarUrl: "PR" }
    ]
  },
  {
    id: "squash-ranking",
    modality: "Squash (Divisão Elite)",
    players: [
      { position: 1, name: "Felipe Nogueira", points: 1850, winRate: "90%", streak: 9, avatarUrl: "FN" },
      { position: 2, name: "Bruno Castilho", points: 1620, winRate: "76%", streak: 2, avatarUrl: "BC" },
      { position: 3, name: "Arthur Schmidt", points: 1540, winRate: "72%", streak: -1, avatarUrl: "AS" },
      { position: 4, name: "Gabriel Siqueira", points: 1410, winRate: "65%", streak: 1, avatarUrl: "GS" },
      { position: 5, name: "Daniel de Souza", points: 1320, winRate: "58%", streak: -2, avatarUrl: "DS" }
    ]
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
    description: "Desenhada para jogadores que já trocam bola e buscam maior consistência tática, profundidade nos golpes, estratégia de saque, voleios eficientes e regularidade física.",
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
    description: "Treinamentos intensivos focados em preparação para torneios estaduais e rankings internos de ponta. Ritmo forte, tática avançada, preparação física de quadra e resiliência mental.",
    benefits: [
      "Simulações de match play real sob estresse",
      "Ajustes táticos personalizados",
      "Suporte físico focado em deslocamento e flexibilidade",
      "Acompanhamento em chaves de torneios"
    ],
    duration: "1h15 por aula - Individuais ou Duplas de Performance",
    priceEstimate: "Sob consulta acadêmica"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Torneio de Tênis de Outono",
    category: "Torneios",
    imageUrl: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g2",
    title: "Arena Beach Tennis Lotada",
    category: "Comunidade",
    imageUrl: "https://images.unsplash.com/photo-1547483238-f400e65ccd56?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g3",
    title: "Clinica Técnica de Squash",
    category: "Aulas",
    imageUrl: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g4",
    title: "Final de Semana de Raquetinha",
    category: "Partidas",
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g5",
    title: "Treinamento Funcional na Areia",
    category: "Aulas",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g6",
    title: "Happy Hour do Raquetes Clube",
    category: "Comunidade",
    imageUrl: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600&auto=format&fit=crop"
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
