import ky from 'ky';

export class Http {
  async get<T>(
    url: string,
    options: {
      headers?: Record<string, string>;
      searchParams?: Record<string, string>;
    }
  ) {
    return await ky.get(url, options).json<T>();
  }
}
