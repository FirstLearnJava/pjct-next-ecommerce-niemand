import { cache } from 'react';
import { sql } from './connect';
import {
  User,
  UserWithPasswordHash,
} from '../../migrations/1715157338-createUsers';

export const getUsers = cache(async () => {
  const users = await sql<UserWithPasswordHash[]>`
    SELECT
      *
    FROM
      users
  `;
  return users;
});

export const getUserByUsername = cache(async (username: string) => {
  const [user] = await sql<User[]>`
    SELECT
      id,
      username
    FROM
      users
    WHERE
      users.username = ${username.toLowerCase()};
  `;
  return user;
});

export const getUserWithPasswordHashByUsername = cache(
  async (username: string) => {
    const [user] = await sql<UserWithPasswordHash[]>`
      SELECT
        *
      FROM
        users
      WHERE
        users.username = ${username.toLowerCase()}
    `;
    return user;
  },
);

export const createUser = cache(
  async (username: string, passwordHash: string) => {
    const [user] = await sql<User[]>`
      INSERT INTO
        users (username, password_hash)
      VALUES
        (
          ${username.toLowerCase()},
          ${passwordHash}
        )
      RETURNING
        id,
        username
    `;
    return user;
  },
);

export const getUserBySessionToken = cache(async (token: string) => {
  const [user] = await sql<User[]>`
    SELECT
      users.id,
      users.username
    FROM
      users
      INNER JOIN sessions ON (
        sessions.token = ${token}
        AND sessions.expiry_timestamp > now()
        AND sessions.user_id = users.id
      )
  `;
  return user;
});
