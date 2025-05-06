import { prisma } from '../../utils/prisma';
import logger from '../../utils/logger';
import { tmdbApi } from '../tmdb';

export async function init() {
  logger.info('Starting initialization process...');

  try {
    logger.info('Clearing existing scrape statistics...');
    await prisma.scrapeStat.deleteMany();
    logger.info('Successfully cleared scrape statistics');

    logger.info('Fetching popular movies from TMDB API...');
    const movies = await tmdbApi.movies.getMovies('1');

    if (!movies?.total_pages) {
      logger.error('TMDB API response missing total_pages property');
      throw new Error('Invalid TMDB API response');
    }

    logger.info(`Successfully fetched movies data. Total pages: ${movies.total_pages}`);

    logger.info('Creating new scrape statistics record...');
    await prisma.scrapeStat.create({
      data: {
        totalPages: movies.total_pages,
      },
    });
    logger.info('Successfully created scrape statistics record');

    logger.info('Initialization completed successfully');

    return { success: true };
  } catch (error) {
    logger.error('Initialization failed', { error });
    throw error;
  }
}

export async function fetchNextPage() {
  try {
    const stat = await prisma.scrapeStat.findFirst({
      select: {
        id: true,
        lastFetched: true,
        totalPages: true,
        updatedAt: true,
      },
    });

    if (!stat) {
      logger.error('Scrapper is not initialized yet');

      return;
    }

    if (stat.lastFetched >= stat.totalPages) {
      logger.info('Scrapper is completed');

      return;
    }

    const nextPage = stat.lastFetched + 1;

    logger.info(`Fetching page ${nextPage} of ${stat.totalPages}`);

    const movies = await tmdbApi.movies.getMovies(nextPage.toString());

    if (!movies?.results?.length) {
      logger.error('No movies found in the response');

      return;
    }

    const genres = await tmdbApi.movies.getGenres();

    // Use a transaction to ensure atomicity
    await prisma.$transaction(async (tx) => {
      // First, try to update the stat with optimistic locking
      const updatedStat = await tx.scrapeStat.update({
        where: {
          id: stat.id,
          updatedAt: stat.updatedAt, // Optimistic locking
        },
        data: {
          lastFetched: {
            increment: 1,
          },
          updatedAt: new Date(),
        },
      });

      if (!updatedStat) {
        throw new Error('Race condition detected - another process updated the stat');
      }

      const existing = await tx.movie.findMany({
        where: {
          tmdbId: { in: movies.results.map((d) => d.id.toString()) },
        },
        select: { tmdbId: true },
      });

      const existingSet = new Set(existing.map((e) => e.tmdbId));
      const newData = movies.results.filter((d) => !existingSet.has(d.id.toString()));

      if (newData) {
        await tx.movie.createMany({
          data: newData.map((movie) => ({
            tmdbId: movie.id.toString(),
            title: movie.title,
            overview: movie.overview,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
            adult: false,
            backdrop_path: movie.backdrop_path || '',
            original_language: movie.original_language,
            original_title: movie.original_title,
            popularity: movie.popularity,
            poster_path: movie.poster_path || '',
            release_date: movie.release_date,
            video: movie.video || false,
            genre_ids: movie.genre_ids.map(
              (genre_id) => genres.find((g) => g.id === genre_id)?.name || '',
            ),
          })),
        });
      }

      logger.info(`Successfully processed page ${nextPage}`);
    });

    return { success: true, fetchedPage: stat.lastFetched + 1 };
  } catch (error) {
    if (error instanceof Error && error.message.includes('Race condition')) {
      logger.warn('Race condition detected, retrying...');

      return fetchNextPage(); // Retry the operation
    }
    logger.error('Failed to fetch next page', { error });
    throw error;
  }
}
