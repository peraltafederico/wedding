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

const DESCRIPTION = 'Te invitamos a formar parte de nuestra historia!';
const TITLE = '¡Nos Casamos! Cami & Fede';

import { fontSans, starWhite, youngSerif } from '@/config/fonts';
export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${TITLE}`,
  },
  description: DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://noscasamos.camiyfede.com',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Cami & Fede',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@_pfederico',
    description: DESCRIPTION,
    title: TITLE,
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Cami & Fede',
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
