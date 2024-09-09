import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        offWhite: '#FAF9F6',
        mossGreen: '#939369',
      },
      fontFamily: {
        whiteStar: ['var(--font-white-star)'],
        sans: ['var(--font-young-serif)', 'var(--font-sans)'],
        mono: ['var(--font-mono)'],
        youngSerif: ['var(--font-young-serif)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#FAF9F6',
          },
        },
      },
    }),
  ],
};
