import dotenv from 'dotenv';
import path from 'path';
import z from 'zod';

const envFile = `.env.${process.env.NODE_ENV}`;
const pathEnv =
  process.env.NODE_ENV === 'local'
    ? path.resolve(envFile)
    : path.resolve(__dirname, '../../', envFile);

dotenv.config({
  path: pathEnv,
});

const envSchema = z.object({
  NODE_ENV: z
    .enum(['local', 'test', 'homolog', 'staging', 'production'])
    .default('local'),
  PORT: z.coerce.number(),
  REDIS_URL: z.string().min(10).default(''),
  REDIS_PASSWORD: z.string().optional(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  const error = new Error('❌ Invalid environment variables.', {
    cause: _env.error.format(),
  });

  throw error;
}

export const env = _env.data;
