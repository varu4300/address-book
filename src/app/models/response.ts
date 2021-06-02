export interface Response<T> {
  results: T;
  info:Info;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}
