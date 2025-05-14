import dotenv from 'dotenv';
import logger from './utils/logger';
import { fetchNextPage, init } from './services/main/oldMovies';
import express from 'express';
import { env } from './config/env.config';

// Load environment variables
dotenv.config();

const PORT = env.get('PORT');

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

app.use(`/api`, router);

app.listen(PORT, () => {
  logger.info(`Server Running on ${PORT}`);
});

// Hii added by rajeev
// Hii added by karn
