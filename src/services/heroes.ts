import axios from 'axios';

import type { HeroItem } from '../types/heroe';

import type { HeroPage } from '@/query/types';

const API_BASE_URL = 'https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api'; // Ejemplo de API

export const getAllForPage = async (page: number, size: number = 10): Promise<HeroPage> => {
  const res = await axios.get<HeroPage>(`${API_BASE_URL}/heroes`, {
    params: {
      size,
      page,
    },
  });
  return res.data;
};

export const getOne = async (id: number): Promise<HeroItem> => {
  const { data } = await axios.get<HeroItem>(`${API_BASE_URL}/hero?id=${id}`);
  return data;
};

//!Futuras implementaciones
// export const post = async (hero: HeroItem): Promise<HeroItem> => {
//   const { data } = await axios.post<HeroItem>(`${API_BASE_URL}/heroes`, hero);
//   return data;
// };

// export const put = async (id: number, hero: HeroItem): Promise<HeroItem> => {
//   const { data } = await axios.put<HeroItem>(`${API_BASE_URL}/heroes/${id}`, hero);
//   return data;
// };

// export const deleteOne = async (id: number): Promise<void> => {
//   await axios.delete(`${API_BASE_URL}/heroes/${id}`);
// };
