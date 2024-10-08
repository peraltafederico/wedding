import { Fira_Code as FontMono, Inter as FontSans, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const starWhite = localFont({ src: './white-star.ttf', variable: '--font-white-star', display: 'swap' });

export const youngSerif = Montserrat({
  variable: '--font-young-serif',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});
