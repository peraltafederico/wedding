import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import AOSinit from '../components/aos';
import Snap from '../components/snap';

import { Providers } from './providers';

import { fontSans, starWhite, youngSerif } from '@/config/fonts';
export const metadata: Metadata = {
  title: {
    default: '¡Nos Casamos! Federico & Camila',
    template: `%s | ¡Nos Casamos! Federico & Camila`,
  },
  description:
    'Acompañanos en nuestro día más especial mientras celebramos nuestra boda. Detalles sobre la ceremonia, el lugar y mucho más.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    siteName: '¡Nos Casamos! Federico & Camila',
    title: '¡Nos Casamos! Federico & Camila',
    description:
      'Unite a la celebración de nuestro casamiento. Encontrá toda la información sobre la ceremonia, recepción, y otros detalles importantes.',
    url: 'https://noscasamos.camiyfede.com',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Imagen del Casamiento de Federico y Camila',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@_pfederico',
    description:
      'Acompañanos en nuestro día más especial mientras celebramos nuestra boda. Detalles sobre la ceremonia, el lugar y mucho más.',
    title: '¡Nos Casamos! Federico & Camila',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Imagen del Casamiento de Federico y Camila',
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
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body
        className={clsx(
          ' bg-background font-sans antialiased ',
          fontSans.variable,
          starWhite.variable,
          youngSerif.variable
        )}>
        <Analytics />
        <SpeedInsights />
        <AOSinit />
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <Snap>
            <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
          </Snap>
        </Providers>
      </body>
    </html>
  );
}
