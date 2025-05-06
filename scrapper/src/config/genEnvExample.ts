import z from 'zod';
import { envSchema } from './env.config';
import { writeFileSync } from 'fs';
import logger from '../utils/logger';

type PropertySchema = z.core.JSONSchema.BaseSchema;

/**
 * Creates a comment block for an environment variable
 * @param key Variable name
 * @param schema Variable schema
 * @returns Formatted comment block as string
 */
function createCommentBlock(key: string, schema: PropertySchema): string {
  const lines: string[] = [];

  lines.push(`# ${schema.title || key}`);

  if (schema.description) {
    lines.push(`# ${schema.description}`);
  }

  if (schema.enum?.length) {
    lines.push(`# Possible values: ${schema.enum.join(', ')}`);
  }

  if (schema.default !== undefined) {
    lines.push(`# Default: ${schema.default}`);
  }

  if (schema.examples?.length) {
    lines.push(`# Example: ${schema.examples[0]}`);
  }

  lines.push(`${key}=`);

  return lines.join('\n');
}

function generateEnvExample(): void {
  const schemaJson = z.toJSONSchema(envSchema, { unrepresentable: 'any' });

  if (schemaJson.type !== 'object' || !schemaJson.properties) {
    logger.error('Invalid schema structure.');

    return;
  }

  const envsSchema = schemaJson.properties as Record<string, PropertySchema>;
  const finalContent: string[] = [];

  // Detailed auto-generated header
  finalContent.push(
    `# =============================================================
# ✅ .env.example
# This file was auto-generated from your Zod env schema.
# It serves as a reference for all required environment variables.\n
# ⚠️ Do NOT put any real secrets or credentials in this file.
#    It's meant for documentation, CI setup, onboarding, etc.
# 🔄 Regenerate using: \`npm run prepare\` or appropriate script.
# 📦 Used by CI, local dev environments, docker-compose, etc.
# 🛠️ Schema defined in: src/config/env.config.ts
# =============================================================`,
  );

  for (const [key, value] of Object.entries(envsSchema)) {
    const block = createCommentBlock(key, value);

    finalContent.push(block);
  }

  const content = finalContent.join('\n\n');

  writeFileSync('.env.example', content, 'utf-8');
  logger.info('.env.example generated successfully.');
}

generateEnvExample();
