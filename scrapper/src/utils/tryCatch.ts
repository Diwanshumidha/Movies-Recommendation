import { errorHandler } from './errors/errorHandler';

type Result<T, E = Error> = [T | null, E | null];

export const tryCatch = async <T>(
  fn: () => Promise<T> | T,
  shouldThrow: boolean = false,
): Promise<Result<T>> => {
  try {
    const data = await fn();

    return [data, null];
  } catch (error) {
    // Handle the error but also return it
    errorHandler.handleError(error as Error);

    if (shouldThrow) {
      throw error;
    }

    return [null, error as Error];
  }
};

// Example usage:
// const [data, error] = await tryCatch(() => someAsyncFunction());
// if (error) {
//   // use error.message or other error properties
// } else {
//   // use data
// }
//
// // Or using safe when you don't need error handling:
// const data = await safe(() => someAsyncFunction());
// if (data) {
//   // use data
// }
