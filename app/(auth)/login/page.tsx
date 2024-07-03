import React from 'react';
import LoginForm from './LoginForm';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getValidSessionByToken } from '../../database/sessions';

type Props = { searchParams: { returnTo?: string | string[] } };

export default function page({ searchParams }: Props) {
  const sessionCookie = cookies().get('sessionToken');
  const session = sessionCookie && getValidSessionByToken(sessionCookie.value);

  if (session) redirect('/logout');
  // Use the redirect option, if redirection to other page is necessary, when user is already logged in
  return <LoginForm returnTo={searchParams.returnTo} />;
}
