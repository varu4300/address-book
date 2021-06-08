export interface IResponse<T> {
  results: T | null;
  info: Info | null;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}
