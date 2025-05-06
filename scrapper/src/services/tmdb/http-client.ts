import type { AxiosError as AxiosHttpError } from 'axios';
import axios from 'axios';
import { tryCatch } from '../../utils/tryCatch';
import logger from '../../utils/logger';
import { AxiosError } from '../../utils/errors/commonErrors';
import { env } from '../../config/env.config';

interface TMDBErrorResponse {
  status_message: string;
  status_code: number;
}

export class TMDBHttpClient {
  constructor(
    private readonly apiKeys: string[],
    private readonly baseUrl: string,
  ) {
    if (!apiKeys) {
      this.apiKeys = env.get('TMDB_API_KEYS');
    }
  }

  getRandomApiKey = () => {
    const apiKeys = this.apiKeys;
    const randomIndex = Math.floor(Math.random() * apiKeys.length);

    return apiKeys[randomIndex].trim();
  };

  async request<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    logger.info(this.apiKeys);
    const queryParams = new URLSearchParams({
      api_key: this.getRandomApiKey(),
      ...params,
    });

    logger.debug(`[TMDB_REQUEST] ${url}?${queryParams}`);

    const [data, error] = await tryCatch(async () => {
      try {
        const response = await axios.get<T>(`${url}?${queryParams}`);

        logger.debug(`[TMDB_REQUEST] Got Response ${response.status}`);

        return response.data;
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const axiosError = err as AxiosHttpError<TMDBErrorResponse>;
          const errorMessage = axiosError.response?.data?.status_message || axiosError.message;
          const statusCode = axiosError.response?.status || 500;

          logger.error('TMDB API request failed', {
            endpoint,
            params,
            statusCode,
            errorMessage,
          });

          throw new AxiosError(
            `[TMDB_API_ERROR] [${statusCode}] ${errorMessage}`,
            statusCode,
            endpoint,
            params,
          );
        }
        throw err;
      }
    });

    if (error) {
      throw error;
    }

    return data as T;
  }
}
