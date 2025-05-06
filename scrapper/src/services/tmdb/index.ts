export * from './types';
export * from './http-client';
export * from './movie.service';
export * from './image.service';
export * from './tmdb-api';

import { TMDBHttpClient } from './http-client';
import { MovieService } from './movie.service';
import { ImageService } from './image.service';
import { TMDBAPI } from './tmdb-api';
import { defaultConfig } from './config';

// Create and export a default instance with default configuration
const httpClient = new TMDBHttpClient(defaultConfig.apiKeys, defaultConfig.baseUrl);

export const movieService = new MovieService(httpClient);
export const imageService = new ImageService();

// Final
export const tmdbApi = new TMDBAPI(defaultConfig);
