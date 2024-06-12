'use server';

import { cookies } from 'next/headers';
import { deleteSessionByToken } from '../../database/sessions';

export async function logout() {
  const cookieStore = cookies();
  const token = cookieStore.get('sessionToken');

  if (token) {
    deleteSessionByToken(token.value);
    cookieStore.set('sessionToken', '', { maxAge: 0 });
  }
}
