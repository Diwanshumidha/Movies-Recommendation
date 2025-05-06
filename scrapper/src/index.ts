import dotenv from 'dotenv';
import logger from './utils/logger';
import { fetchNextPage, init } from './services/main/oldMovies';
import express from 'express';
import ServerlessHttp from 'serverless-http';

// Load environment variables
dotenv.config();

const app = express();
const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

router.get('/scrape', async (req, res) => {
  try {
    await fetchNextPage();
    res.json({ status: 'success' });
  } catch (error) {
    logger.error('Scraping failed', { error });
    res.status(500).json({ status: 'error', message: 'Scraping failed' });
  }
});

router.get('/init', async (req, res) => {
  try {
    await init();
    res.json({ status: 'success' });
  } catch (error) {
    logger.error('Scraping failed', { error });
    res.status(500).json({ status: 'error', message: 'Scraping failed' });
  }
});

app.use(`/.netlify/functions/api`, router);

export const handler = ServerlessHttp(app);
