import './globals.css';
import { ReactNode } from 'react';

// import styles from './layout.module.scss';
import Link from 'next/link';
import { cookies } from 'next/headers';
import LogoutButton from './(auth)/logout/LogoutButton';
import { getUserBySessionToken } from './database/users';
import Image from 'next/image';

export const metadata = {
  title: 'Niemand',
  description: 'Your place for selfmade fashion and clothes',
};

type RootLayoutProps = { children: ReactNode };
type User = { user: { id: number; username: string } } | undefined;
export default async function RootLayout({ children }: RootLayoutProps) {
  const sessionTokenCookie = cookies().get('sessionToken');
  const user = sessionTokenCookie?.value
    ? await getUserBySessionToken(sessionTokenCookie?.value)
    : undefined;

  return (
    <html lang="en">
      <body>
        <header className="w-full bg-[#FFFCF6] ">
          <div className=" border-black border-4">
            <nav className="flex justify-between items-center w-[86%] mx-auto">
              <Link href="/">Home</Link>
              <Link href="/">About Us</Link>
              <Link href="/">Catalogue</Link>
              {user ? (
                <LogoutButton />
              ) : (
                <>
                  <Link href="/login">login</Link>
                </>
              )}
              <div className="flex">
                <Link href="/login">
                  <Image
                    src="/header/userSymbol.svg"
                    alt="user symbol"
                    width={20}
                    height={25}
                  />
                </Link>
                <Link href="/cart">
                  <Image
                    src="/header/cartSymbol.svg"
                    alt="user symbol"
                    width={25}
                    height={24}
                  />
                </Link>
              </div>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
