import './globals.css';
import { ReactNode } from 'react';

// import styles from './layout.module.scss';
import Link from 'next/link';
import { cookies } from 'next/headers';
import LogoutButton from './(auth)/logout/LogoutButton';
import { getUserBySessionToken } from './database/users';
import Image from 'next/image';
import Header from './sections/Header';
import Footer from './sections/Footer';
import ClientHeader from './sections/ClientHeader';

export const metadata = {
  title: 'Niemand',
  description: 'Your place for selfmade fashion and clothes',
};

type RootLayoutProps = { children: ReactNode };
//type User = { user: { id: number; username: string } } | undefined;

export default async function RootLayout({ children }: RootLayoutProps) {
  /*   const sessionTokenCookie = cookies().get('sessionToken');
  const user = sessionTokenCookie?.value
    ? await getUserBySessionToken(sessionTokenCookie?.value)
    : undefined; */

  return (
    <html lang="en">
      <body className="relative h-screen flex flex-col">
        <ClientHeader />
        <div className=" flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
