export interface ApiResponse<T> {
  data: T;
  meta?: Meta;
}

export interface Meta {
  total: number;
  page: number;
  limit: number;
}
