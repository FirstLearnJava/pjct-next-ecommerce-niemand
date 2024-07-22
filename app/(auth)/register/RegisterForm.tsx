'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function RegisterForm() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function register() {
    setError('');

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if ('error' in data) {
      setError(data.error);
      return;
    } else {
      setError('successful');
    }
  }

  return (
    <div className="mt-16 mb-12 md:mt-16 font-inknut md:w-[500px] mx-[10%] md:mx-0">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col"
      >
        <h1 className="text-[28px] text-center">Create Account</h1>
        <div className="flex justify-center md:gap-5 gap-3 md:mt-4 mt-5 relative md:text-[16px] text-sm text-center">
          <p>Already have an account?</p>
          <p>
            <Link
              href="/login"
              className=" md:hover:text-secondary inline-block"
            >
              Login here.
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
              await register();
            }}
            className="bg-secondary w-[130px] h-9 rounded-md text-white font-inknut font-semibold text-[15px] uppercase"
          >
            SIGN IN
          </button>
        </div>
      </form>
      <div className=" font-fraunces text-lg flex justify-center">
        {error === 'successful' ? (
          <div className="mt-10">The registration was successful!</div>
        ) : (
          error !== '' && <div className="mt-10">{error}</div>
        )}
      </div>
    </div>
  );
}
