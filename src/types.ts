export interface Modality {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string; // Tailwind hex or class reference
  courtCount: number;
}

export interface CourtTimeSlot {
  id: string;
  time: string;
  isAvailable: boolean;
  courtName: string;
}

export interface PlayerRank {
  position: number;
  name: string;
  points: number;
  winRate: string;
  streak: number;
  avatarUrl: string;
}

export interface RankingCategory {
  id: string;
  modality: string;
  players: PlayerRank[];
}

export interface CoachingPlan {
  id: string;
  level: string;
  description: string;
  benefits: string[];
  duration: string;
  priceEstimate?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}
