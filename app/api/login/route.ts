//import { NextRequest, NextResponse } from 'next/server';
import { NextRequest, NextResponse } from 'next/server';
import { User } from '../../../migrations/1715157338-createUsers';
import { z } from 'zod';
import {
  createUser,
  getUserByUsername,
  getUserWithPasswordHashByUsername,
  getUsers,
} from '../../database/users';
import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
import { createUserSession } from '../../database/sessions';
import { cookies } from 'next/headers';
import { secureCookieOptions } from '../../utils/cookies';

type RegisterResponseBodyPost = { user: User } | { error: string };

const userSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {
  const body = await request.json();

  const result = userSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        error: 'Username or password is missing, please try again.',
      },
      { status: 400 },
    );
  }

  const userWithPasswordHash = await getUserWithPasswordHashByUsername(
    result.data.username,
  );
  console.log(userWithPasswordHash);

  if (!userWithPasswordHash) {
    return NextResponse.json(
      { error: 'Username or password is not valid, please try again.' },
      { status: 401 },
    );
  }

  //is password valid?
  const validatePassword = await bcrypt.compare(
    result.data.password,
    userWithPasswordHash.passwordHash,
  );
  console.log('is password valid?:', validatePassword);

  if (!validatePassword) {
    return NextResponse.json(
      { error: 'Username or password is not valid, please try again.' },
      { status: 401 },
    );
  }

  //now user is authentificated for sure

  const token = crypto.randomBytes(100).toString('base64');

  const session = await createUserSession(token, userWithPasswordHash.id);

  if (!session) {
    return NextResponse.json(
      {
        error: 'There was an error creating the new session, please try again.',
      },
      { status: 500 },
    );
  }

  cookies().set({
    name: 'sessionToken',
    value: session.token,
    ...secureCookieOptions,
  });

  // Return a successful response with the created user
  return NextResponse.json(
    {
      user: {
        username: userWithPasswordHash.username,
        id: userWithPasswordHash.id,
      },
    },
    {
      status: 200,
    },
  );
}
//test

/* const plaintextPassword = result.data.password;
const storedHash = userWithPasswordHash!.passwordHash;

// Manually hash the plaintext password for comparison
const saltRounds = 10; // Ensure this matches your original hashing rounds
const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);

console.log('Manually hashed password:', hashedPassword);
console.log('Stored hash:', storedHash);

const isPasswordValid = await bcrypt.compare(plaintextPassword, storedHash);
console.log('Password comparison result:', isPasswordValid); */

//test
