import 'server-only';
import { headers } from 'next/headers';
import postgres, { Sql } from 'postgres';
// import { setEnvironmentVariables } from '../../util/config.mjs';

// setEnvironmentVariables();

declare module globalThis {
  let postgresSqlClient: Sql;
}

function connectOneTimeToDatabase() {
  const host = process.env.PGHOST;
  const user = process.env.PGUSERNAME;
  const password = process.env.PGPASSWORD;
  const database = process.env.PGDATABASE;
  const ssl = { rejectUnauthorized: false };

  if (!host || !user || !password || !database) {
    throw new Error('One or more environment variables are not set.');
  }

  if (!('postgresSqlClient' in globalThis)) {
    globalThis.postgresSqlClient = postgres({
      host,
      user,
      password,
      database,
      ssl,
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }

  return ((
    ...sqlParameters: Parameters<typeof globalThis.postgresSqlClient>
  ) => {
    headers();
    return globalThis.postgresSqlClient(...sqlParameters);
  }) as typeof globalThis.postgresSqlClient;
}

export const sql = connectOneTimeToDatabase();

/* import 'server-only';
import { headers } from 'next/headers';
import postgres, { Sql } from 'postgres';
import { setEnvironmentVariables } from '../../util/config.mjs';

setEnvironmentVariables();

declare module globalThis {
  let postgresSqlClient: Sql;
}

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
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
  return ((
    ...sqlParameters: Parameters<typeof globalThis.postgresSqlClient>
  ) => {
    headers();
    return globalThis.postgresSqlClient(...sqlParameters);
  }) as typeof globalThis.postgresSqlClient;
}

// Connect to PostgreSQL
export const sql = connectOneTimeToDatabase();
 */
