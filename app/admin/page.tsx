import { cookies } from 'next/headers';
import React from 'react';
import { getValidSessionByToken } from '../database/sessions';
import { redirect } from 'next/navigation';

export default async function Adminpage() {
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the sessionToken has a valid session

  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (!session) redirect('/login?returnTo=/admin');
  return (
    <div className="bg-tertiary">
      <div className="sm:mt-[200px] mt-[140px] mb-10 font-fraunces text-xl flex justify-center">
        This page is just accessible for logged in users.
      </div>
    </div>
  );
}
