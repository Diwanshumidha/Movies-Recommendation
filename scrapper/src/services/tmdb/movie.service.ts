import { fetchAllPaginated } from '../../utils/utils';
import type { TMDBHttpClient } from './http-client';
import type { MovieSearchResponse, MovieDetails } from './types';

type Options = {
  page?: number;
  include_adult?: boolean;
  include_video?: boolean;
  language?: 'en-US';
  sort_by?: 'popularity.asc' | 'popularity.desc';
};

export class MovieService {
  constructor(private readonly httpClient: TMDBHttpClient) {}

  async searchMovies(query: string, options: Options = {}): Promise<MovieSearchResponse> {
    const {
      page = 1,
      include_adult = false,
      include_video = false,
      language = 'en-US',
      sort_by = 'popularity.desc',
    } = options;

    return this.httpClient.request<MovieSearchResponse>('/discover/movie', {
      query,
      page: page.toString(),
      include_adult: String(include_adult),
      include_video: String(include_video),
      language,
      sort_by,
    });
  }

  async getMovies(page: string) {
    // /discover/movie?include_adult=false&include_video=false&language=en-US&page=1&=&sort_by=
    return this.httpClient.request<MovieSearchResponse>('/discover/movie', {
      page,
      'primary_release_date.gte': '1950-01-01',
      language: 'en-US',
      sort_by: 'primary_release_date.asc',
    });
  }

  async getMovieDetails(movieId: number): Promise<MovieDetails> {
    return this.httpClient.request<MovieDetails>(`/movie/${movieId}`);
  }

  async getPopularMovies(page: number = 1): Promise<MovieSearchResponse> {
    return this.httpClient.request<MovieSearchResponse>('/movie/popular', {
      page: page.toString(),
    });
  }

  async getTopRatedMovies(page: number = 1): Promise<MovieSearchResponse> {
    return this.httpClient.request<MovieSearchResponse>('/movie/top_rated', {
      page: page.toString(),
    });
  }

  async getUpcomingMovies(page: number = 1): Promise<MovieSearchResponse> {
    return this.httpClient.request<MovieSearchResponse>('/movie/top_rated', {
      page: page.toString(),
    });
  }

  async getReleasingMovies(
    onReceive?: (data: MovieSearchResponse) => void,
  ): Promise<{ success: true }> {
    const today = new Date().toISOString().split('T')[0];

    const fetchMovies = async (page: number) => {
      const data = await this.httpClient.request<MovieSearchResponse>('/discover/movie', {
        include_adult: 'false',
        include_video: 'false',
        language: 'en-US',
        'primary_release_date.gte': today,
        'primary_release_date.lte': today,
        sort_by: 'primary_release_date.asc',
        page: page.toString(),
      });

      return { totalPages: data.total_pages, response: data };
    };

    await fetchAllPaginated<MovieSearchResponse>(fetchMovies, { onReceive });

    return { success: true };
  }

  async getGenres(): Promise<Array<{ id: number; name: string }>> {
    const response = await this.httpClient.request<{ genres: Array<{ id: number; name: string }> }>(
      '/genre/movie/list',
    );

    return response.genres;
  }
}
