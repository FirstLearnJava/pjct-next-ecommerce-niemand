'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

type body = { price: string; quantity: number };
interface CreateSessionsProps {
  body: body[] | undefined;
}

export default function CreateSessions(props: CreateSessionsProps) {
  const router = useRouter();

  const inserts = props.body;

  async function CreateSessionsAndRedirect() {
    const response = await fetch('/api/sessions', {
      method: 'POST',
      body: JSON.stringify({ products: props.body }),
    });

    const data = await response.json();

    router.push(data.sessions.url);
  }
  return (
    <button onClick={() => CreateSessionsAndRedirect()}>Buy products</button>
  );
}
