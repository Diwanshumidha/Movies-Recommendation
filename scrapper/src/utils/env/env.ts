import { z } from 'zod';
import logger from '../logger';

export class EnvError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EnvError';
  }
}

export class Env<T extends z.ZodType> {
  private static instance: Env<z.ZodType>;
  private env!: z.infer<T>;

  private constructor(private schema: T) {
    this.load();
  }

  static init<T extends z.ZodType>(schema: T): Env<T> {
    if (!Env.instance) {
      Env.instance = new Env(schema);
    }

    return Env.instance as Env<T>;
  }

  private load(): void {
    try {
      this.env = this.schema.parse(process.env);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const issues = z.prettifyError(error);

        logger.error(issues.replace('\n', ''));
        process.exit(1);
      }

      throw error;
    }
  }

  get<K extends keyof z.infer<T>>(key: K): z.infer<T>[K] {
    return this.env[key];
  }
}
