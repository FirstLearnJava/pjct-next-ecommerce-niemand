import 'server-only';
import { config } from 'dotenv-safe';
import postgres, { Sql } from 'postgres';

config();
//export const sql = postgres();

declare module globalThis {
  let postgresSqlClient: Sql;
}

function connectOneTimeToDatabase() {
  if (!('postgresSqlClient' in globalThis)) {
    globalThis.postgresSqlClient = postgres({
      ssl: Boolean(process.env.POSTGRES_URL),
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }
  return globalThis.postgresSqlClient;
}

// Workaround to force Next.js Dynamic Rendering:
//
// Wrap sql`` tagged template function to call `headers()` from
// next/headers before each database query. `headers()` is a
// Next.js Dynamic Function, which causes the page to use
// Dynamic Rendering.
//
// https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering
//
// Ideally there would something built into Next.js for this,
// which has been requested here:
//
// https://github.com/vercel/next.js/discussions/50695

// Connect to PostgreSQL
export const sql = connectOneTimeToDatabase();
