// src/query/hooks.ts
import {
  type QueryKey,
  useMutation,
  type UseMutationOptions,
  useQuery,
  type UseQueryOptions,
} from '@tanstack/react-query';

// eslint-disable-next-line import/extensions
import queryClient from './queryClient';
import type { ApiError } from './types'; // Importa tu tipo de error

/**
 * Custom hook para consultas (GET) con tipado.
 * @template TQueryFnData El tipo de los datos retornados por la queryFn.
 * @template TError El tipo del error que puede ocurrir.
 * @template TData El tipo de los datos después de la transformación (si `select` es usado).
 * @template TQueryKey El tipo de la clave de la consulta.
 *
 * @param {TQueryKey} queryKey - La clave de la consulta.
 * @param {() => Promise<TQueryFnData>} queryFn - La función que realiza la llamada a la API y retorna una promesa.
 * @param {UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>} options - Opciones adicionales para useQuery.
 */
export const useCustomQuery = <
  TQueryFnData = unknown,
  TError = ApiError, // Error por defecto es ApiError
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  queryFn: () => Promise<TQueryFnData>,
  options?: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
) => {
  return useQuery<TQueryFnData, TError, TData, TQueryKey>({
    queryKey,
    queryFn,
    ...options,
  });
};

/**
 * Custom hook para mutaciones (POST, PUT, DELETE) con tipado.
 * @template TData El tipo de los datos retornados por la mutación.
 * @template TError El tipo del error que puede ocurrir.
 * @template TVariables El tipo de las variables de entrada de la mutación.
 * @template TContext El tipo del contexto opcional para callbacks de mutación.
 *
 * @param {(variables: TVariables) => Promise<TData>} mutationFn - La función que realiza la llamada a la API.
 * @param {UseMutationOptions<TData, TError, TVariables, TContext>} options - Opciones adicionales para useMutation.
 */
export const useCustomMutation = <
  TData = unknown,
  TError = ApiError, // Error por defecto es ApiError
  TVariables = void, // Variables por defecto es void si no se necesitan
  TContext = unknown,
>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: UseMutationOptions<TData, TError, TVariables, TContext> & {
    invalidateQueryKeys?: QueryKey[]; // Propiedad adicional para invalidar queries
  },
) => {
  return useMutation<TData, TError, TVariables, TContext>({
    mutationFn,
    ...options,
    onSuccess: (data, variables, context) => {
      // Invalida y refetchea las consultas relevantes después de una mutación exitosa
      if (options?.invalidateQueryKeys && Array.isArray(options.invalidateQueryKeys)) {
        options.invalidateQueryKeys.forEach((key) => {
          queryClient.invalidateQueries({ queryKey: key });
        });
      }
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error: TError, variables, context) => {
      // eslint-disable-next-line no-console
      console.error('Error en useCustomMutation:', error);
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
  });
};
