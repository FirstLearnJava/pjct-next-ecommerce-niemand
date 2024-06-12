'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getSafeReturnToPath } from '../../utils/validation';
import { Route } from 'next';

type Props = { returnTo?: string | string[] };

export default function LoginForm(props: Props) {
  const router = useRouter();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Initial returnTo:', props.returnTo);
  }, [props.returnTo]);

  async function login() {
    setError('');

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if ('error' in data) {
      setError(data.error);
      return;
    } else {
      setError('successful');
      console.log(props);

      router.push(getSafeReturnToPath(props.returnTo) || (`/` as Route));
      //router.refresh();
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          username:
          <input
            onChange={(e) => {
              setUserName(e.currentTarget.value);
            }}
          ></input>
        </label>

        <label>
          password:
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          ></input>
        </label>

        <button
          onClick={async () => {
            await login();
            router.refresh();
          }}
        >
          login
        </button>
      </form>
      {error === 'successful' ? (
        <div>The login was successful!</div>
      ) : (
        error !== '' && <div>{error}</div>
      )}
    </>
  );
}
