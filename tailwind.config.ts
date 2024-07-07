import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFCF6',
        secondary: '#d3791e',
        tertiary: '#fffefb',
        /* #CA7520 */
      },
      fontFamily: {
        oleo: ['Oleo Script', 'cursive'],
        oleoSwash: ['Oleo Script Swash Caps', 'cursive'],
        inknut: ['Inknut Antiqua', 'serif'],
        fraunces: ['Fraunces', 'serif'],
        alegreya: ['Alegreya Sans', 'sans-serif'],
      },
      height: {
        'screen-30px': 'calc(100vh + 30px)',
      },
      backgroundImage: {
        hero: "url('/heroSectionBackground.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
