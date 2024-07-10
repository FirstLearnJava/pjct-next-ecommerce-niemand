import { readFileSync } from 'node:fs';
import dotenv from 'dotenv';

export function setEnvironmentVariables() {
  if (process.env.NODE_ENV === 'production' || process.env.CI) {
    // Set standard environment variables for Postgres.js from Vercel environment variables
    if (process.env.POSTGRES_URL) {
      process.env.PGHOST = process.env.POSTGRES_HOST;
      process.env.PGDATABASE = process.env.POSTGRES_DATABASE;
      process.env.PGUSERNAME = process.env.POSTGRES_USER;
      process.env.PGPASSWORD = process.env.POSTGRES_PASSWORD;
    }
    return;
  }

  // Load environment variables from .env file
  dotenv.config();

  // Replacement for unmaintained dotenv-safe package
  // https://github.com/rolodato/dotenv-safe/issues/128#issuecomment-1383176751
  //
  // TODO: Remove this and switch to dotenv/safe if this proposal gets implemented:
  // https://github.com/motdotla/dotenv/issues/709
  const exampleEnv = dotenv.parse(readFileSync('./.env.example'));
  const unconfiguredEnvVars = Object.keys(exampleEnv).filter(
    (key) => !process.env[key],
  );

  if (unconfiguredEnvVars.length > 0) {
    throw new Error(
      `.env.example environment variable${
        unconfiguredEnvVars.length > 1 ? 's' : ''
      } ${unconfiguredEnvVars.join(', ')} not configured in .env file`,
    );
  }
}
