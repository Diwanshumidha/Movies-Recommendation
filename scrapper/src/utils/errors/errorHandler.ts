import { AppError } from './AppError';
import logger from '../logger';

export const errorHandler = {
  handleError: (error: Error): void => {
    if (error instanceof AppError) {
      logger.error('Operational Error:', {
        name: error.name,
        message: error.message,
        statusCode: error.statusCode,
        stack: error.stack,
      });

      if (!error.isOperational) {
        logger.error('Application is shutting down due to unhandled error');
        process.exit(1);
      }
    } else {
      // Log programming or unknown errors
      logger.error('Programming or Unknown Error:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
      });
    }
  },

  isTrustedError: (error: Error): boolean => {
    return error instanceof AppError && error.isOperational;
  },
};
