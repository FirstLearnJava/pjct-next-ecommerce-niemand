'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getSafeReturnToPath } from '../../utils/validation';
import { Route } from 'next';
import Link from 'next/link';

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
    <div className="mt-[103px] flex justify-center bg-tertiary font-inknut">
      <div className="md:w-[500px] mt-16 mx-[10%] md:mx-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col"
        >
          <h1 className="text-[28px] text-center">Login</h1>
          <div className="flex justify-center md:gap-5 gap-3 md:mt-4 mt-5 relative md:text-[16px] text-sm">
            <p>Don't have an account?</p>
            <p>
              <Link
                href="/register"
                className=" hover:text-secondary inline-block"
              >
                Sign in here.
              </Link>
            </p>
          </div>
          <div className="mt-7">
            <label className="block text-[15px]">
              Username
              <input
                onChange={(e) => {
                  setUserName(e.currentTarget.value);
                }}
                className="border-2 border-secondary w-full h-10"
              ></input>
            </label>
          </div>
          <div className="mt-4">
            <label className="block text-[15px]">
              Password
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
                className="border-2 border-secondary w-full h-10"
              ></input>
            </label>
          </div>
          <div className="flex justify-center mt-6 mb-12 md:mb-0">
            <button
              onClick={async () => {
                await login();
                router.refresh();
              }}
              className="bg-secondary w-[130px] h-9 rounded-md text-white font-inknut font-semibold text-[15px] uppercase"
            >
              LOGIN
            </button>
          </div>
        </form>
        <div className=" font-fraunces text-lg flex justify-center w-full">
          {error === 'successful' ? (
            <div className="mt-10">The login was successful!</div>
          ) : (
            error !== '' && <div className="mt-10">{error}</div>
          )}
        </div>
      </div>
    </div>
  );
}
