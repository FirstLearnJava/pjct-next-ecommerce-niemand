import { Roboto, Oleo_Script, Fraunces, Alegreya_Sans } from 'next/font/google';
import './fonts.css';
import './globals.css';
import RootLayoutClient from './RootLayoutClient';
import { ReactNode } from 'react';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

const oleoScript = Oleo_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-oleo-script',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-fraunces',
  display: 'swap',
});

const alegreyaSans = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '800', '900'],
  variable: '--font-alegreya-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Niemand',
  description: 'Your place for selfmade pottery',
};

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`
      ${roboto.variable}
      ${oleoScript.variable}
      ${fraunces.variable}
      ${alegreyaSans.variable}
    `}
    >
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
