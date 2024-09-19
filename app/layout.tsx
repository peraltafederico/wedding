import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import AOSinit from '../components/aos';
import Snap from '../components/snap';

import { Providers } from './providers';

import { fontSans, starWhite, youngSerif } from '@/config/fonts';
export const metadata: Metadata = {
  title: {
    default: '¡Nos Casamos! Cami & Fede',
    template: `%s | ¡Nos Casamos! Cami & Fede`,
  },
  description: 'Te invitamos a formar parte de nuestro casamiento, nuestro día mas soñado!',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    siteName: '¡Nos Casamos! Cami & Fede',
    title: '¡Nos Casamos! Cami & Fede',
    description: 'Te invitamos a formar parte de nuestro casamiento, nuestro día mas soñado!',
    url: 'https://noscasamos.camiyfede.com',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Cami y Fede',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@_pfederico',
    description: 'Te invitamos a formar parte de nuestro casamiento, nuestro día mas soñado!',
    title: '¡Nos Casamos! Cami & Fede',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Cami y Fede',
      },
    ],
  },
  keywords: [
    'casamiento',
    'boda',
    'federico',
    'camila',
    'celebración',
    'ceremonia',
    'recepción',
    'novios',
    'casados',
    'fiesta',
    'celebrar',
    'amor',
    'compromiso',
    'pareja',
    'familia',
    'amigos',
    'invitados',
    'evento',
    'federico y camila',
    'casamiento de federico y camila',
    'fede y cami',
    'federico',
    'camila',
    '17 de noviembre 2024',
    'quinta de benavidez',
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      className='scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full'
      lang={locale}>
      <head />
      <body
        className={clsx(
          'bg-background font-sans antialiased',
          fontSans.variable,
          starWhite.variable,
          youngSerif.variable
        )}>
        <AOSinit />
        <Providers locale={locale} themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <Snap>
            <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
          </Snap>
        </Providers>
      </body>
    </html>
  );
}
