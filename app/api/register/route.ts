//import { NextRequest, NextResponse } from 'next/server';
import { NextRequest, NextResponse } from 'next/server';
import { User } from '../../../migrations/1715157338-createUsers';
import { z } from 'zod';
import { createUser, getUserByUsername, getUsers } from '../../database/users';
import bcrypt from 'bcrypt';
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

  console.log(await getUsers());

  if (!result.success) {
    return NextResponse.json(
      {
        error: 'username or password missing',
      },
      { status: 400 },
    );
  }
  if (await getUserByUsername(result.data.username)) {
    return NextResponse.json(
      { error: 'The username is already taken' },
      { status: 406 },
    );
  }

  const passwordHash = await bcrypt.hash(result.data.password, 10);

  const newUser = await createUser(result.data.username, passwordHash);

  if (!newUser) {
    // zod sends details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error: 'Error creating the new user',
      },
      { status: 500 },
    );
  }

  const token = crypto.randomBytes(100).toString('base64');

  const session = await createUserSession(token, newUser.id);

  if (!session) {
    return NextResponse.json(
      { error: 'Error creating the new session' },
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
      user: newUser,
    },
    { status: 200 },
  );
}
