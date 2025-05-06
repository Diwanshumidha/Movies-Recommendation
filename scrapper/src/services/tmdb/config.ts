import { env } from '../../config/env.config';

export interface TMDBConfig {
  apiKeys: string[];
  baseUrl: string;
}

export const defaultConfig: TMDBConfig = {
  apiKeys: env.get('TMDB_API_KEYS'),
  baseUrl: 'https://api.themoviedb.org/3',
};
