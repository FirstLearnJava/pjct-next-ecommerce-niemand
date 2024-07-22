import './globals.css';

import RootLayoutClient from './RootLayoutClient';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Niemand',
  description: 'Your place for selfmade pottery',
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
