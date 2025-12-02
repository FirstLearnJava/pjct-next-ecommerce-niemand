import 'server-only';
import { headers } from 'next/headers';
import postgres, { Sql } from 'postgres';

declare module globalThis {
  let postgresSqlClient: Sql;
}

function connectOneTimeToDatabase() {
  const connectionString = process.env.POSTGRES_URL;

  if (!connectionString) {
    throw new Error('POSTGRES_URL environment variable is not set');
  }

  if (!('postgresSqlClient' in globalThis)) {
    globalThis.postgresSqlClient = postgres(connectionString, {
      ssl: { rejectUnauthorized: false },
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
