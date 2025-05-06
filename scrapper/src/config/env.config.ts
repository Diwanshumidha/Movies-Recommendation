import { z } from 'zod';
import { Env } from '../utils/env/env';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Schema for all environment variables required by the application
 */
export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development')
    .meta({
      title: 'Node Environment',
      description: 'Defines the runtime environment for the application.',
      examples: ['development', 'production', 'test'],
    }),

  TMDB_API_KEYS: z
    .string()
    .min(1)
    .transform((s) => s.split(','))
    .meta({
      title: 'TMDB API Keys comma separated',
      description: 'Required API key for accessing The Movie Database API.',
      examples: [['2312sadasdadasdasd']],
    }),

  PORT: z
    .string()
    .transform(Number)
    .default(3000)
    .meta({
      title: 'Server Port',
      description: 'The port number for the server to listen on.',
      examples: [3000, 8080],
    }),

  DATABASE_URL: z
    .string()
    .min(1)
    .meta({
      title: 'Mongo db database url',
      description: 'Database url for the mongo db',
      examples: [
        'mongodb+srv://something:**************@cluster0.7mvynjo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      ],
    }),
});

export const env = Env.init(envSchema);
