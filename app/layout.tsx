/*
import './globals.css';
import { ReactNode, useState } from 'react';

import Footer from './sections/Footer';
import ClientHeader from './sections/ClientHeader';

export const metadata = {
  title: 'Niemand',
  description: 'Your place for selfmade fashion and clothes',
};

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body className="relative h-screen flex flex-col">
        <ClientHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {menuOpen}
        <div className=" flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
 */
// app/layout.tsx
import './globals.css';
import Footer from './sections/Footer';
import ClientHeader from './sections/ClientHeader';
import RootLayoutClient from './RootLayoutClient';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Niemand',
  description: 'Your place for selfmade fashion and clothes',
};

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
