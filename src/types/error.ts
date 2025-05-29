export interface ApiError {
  message: string;
  code?: string | number;
  status?: number;
  details?: Record<string, unknown>;
}
