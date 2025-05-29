// src/query/types.ts

import type { HeroItem } from '../types/heroe.tsx';

// Define la estructura de un error de API genérico
export interface ApiError {
  message: string;
  statusCode?: number;
  code?: string;
  // Puedes añadir más campos según la estructura de error de tu backend
}

// Tipo para datos de creación/actualización de usuario (sin ID)
export type CreateHeroPayload = Omit<HeroItem, 'id'>;
export type UpdateHeroPayload = Partial<Omit<HeroItem, 'id'>>; // Partial para que todos los campos sean opcionales en la actualización

export interface HeroPage {
  content: HeroItem[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
