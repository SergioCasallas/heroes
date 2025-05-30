// src/query/types

import type { HeroItem } from '../types/heroe';

// Define la estructura de un error de API genérico
export interface ApiError {
  message: string;
  statusCode?: number;
  code?: string;
}

export type CreateHeroPayload = Omit<HeroItem, 'id'>;
export type UpdateHeroPayload = Partial<Omit<HeroItem, 'id'>>; // Partial para que todos los campos sean opcionales en la actualización

export interface HeroPage {
  content: HeroItem[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  items: HeroItem[];
  lastPage: number;
}
