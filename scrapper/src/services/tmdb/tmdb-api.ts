import { TMDBHttpClient } from './http-client';
import { MovieService } from './movie.service';
import { ImageService } from './image.service';
import type { TMDBConfig } from './config';

export class TMDBAPI {
  public readonly movies: MovieService;
  public readonly image: ImageService;

  constructor(config: TMDBConfig) {
    const httpClient = new TMDBHttpClient(config.apiKey, config.baseUrl);

    this.movies = new MovieService(httpClient);
    this.image = new ImageService();
  }
}
