import dotenv from 'dotenv';
import logger from './utils/logger';
import { fetchNextPage, init } from './services/main/oldMovies';
import express from 'express';
import ServerlessHttp from 'serverless-http';

// Load environment variables
dotenv.config();

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  throw error;
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: unknown) => {
  throw reason;
});

const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/scrape', async (req, res) => {
  try {
    await fetchNextPage();
    res.json({ status: 'success' });
  } catch (error) {
    logger.error('Scraping failed', { error });
    res.status(500).json({ status: 'error', message: 'Scraping failed' });
  }
});

app.get('/init', async (req, res) => {
  try {
    await init();
    res.json({ status: 'success' });
  } catch (error) {
    logger.error('Scraping failed', { error });
    res.status(500).json({ status: 'error', message: 'Scraping failed' });
  }
});

export const handler = ServerlessHttp(app);
