import { cache } from 'react';
import { Session } from '../../migrations/1716448965-createSessions';
import { sql } from './connect';

export const deleteExpiredUserSession = cache(async () => {
  await sql`
    DELETE FROM sessions
    WHERE
      expiry_timestamp < now()
  `;
});

export const createUserSession = cache(
  async (token: string, userId: number) => {
    const [session] = await sql<Session[]>`
      INSERT INTO
        sessions (token, user_id)
      VALUES
        (
          ${token},
          ${userId}
        )
      RETURNING
        id,
        token,
        user_id
    `;
    await deleteExpiredUserSession();
    return session;
  },
);

export const deleteSessionByToken = cache(async (token: string) => {
  const [session] = await sql<{ id: number; token: string }[]>`
    DELETE FROM sessions
    WHERE
      sessions.token = ${token}
    RETURNING
      id,
      token
  `;
  return session;
});

export const getValidSessionByToken = cache(async (token: string) => {
  const [session] = await sql<{ id: number; token: string }[]>`
    SELECT
      id,
      token
    FROM
      sessions
    WHERE
      sessions.token = ${token}
      AND sessions.expiry_timestamp > now()
  `;
  return session;
});
