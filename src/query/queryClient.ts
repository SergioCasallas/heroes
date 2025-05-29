// src/query/queryClient
import { QueryClient } from '@tanstack/react-query';

import type { ApiError } from './types.js';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      // cacheTime: 1000 * 60 * 60,
      refetchOnWindowFocus: true,
      retry: 2,
    },
    mutations: {
      onError: (error: ApiError) => {
        // eslint-disable-next-line no-console
        console.error('Error en la mutación:', error.message);
      },
    },
  },
  // Configuración opcional de caches para manejo global de errores/éxitos
  // queryCache: new QueryCache({
  //   onError: (error: ApiError, query) => {
  //     console.error(`Error global en consulta ${query.queryKey}:`, error.message);
  //   },
  //   onSuccess: (data, query) => {
  //     // console.log(`Éxito global en consulta ${query.queryKey}`, data);
  //   },
  // }),
  // mutationCache: new MutationCache({
  //   onError: (error: ApiError, variables, context, mutation) => {
  //     console.error(`Error global en mutación ${mutation.mutationKey || 'desconocida'}:`, error.message);
  //   },
  //   onSuccess: (data, variables, context, mutation) => {
  //     // console.log(`Éxito global en mutación ${mutation.mutationKey || 'desconocida'}`, data);
  //   },
  // }),
});

export default queryClient;
