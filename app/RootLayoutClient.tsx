'use client';

import { ReactNode, useState } from 'react';
import Footer from './sections/Footer';
import ClientHeader from './sections/ClientHeader';

type RootLayoutClientProps = { children: ReactNode };

export default function RootLayoutClient({ children }: RootLayoutClientProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen flex flex-col">
      <ClientHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {!menuOpen && <div className="flex-1">{children}</div>}
      {!menuOpen && <Footer />}
    </div>
  );
}
