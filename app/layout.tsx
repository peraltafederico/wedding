import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import AOSinit from '../components/aos';

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
    title: '¡Nos Casamos! Federico & Camila',
    description:
      'Unite a la celebración de nuestro casamiento. Encontrá toda la información sobre la ceremonia, recepción, y otros detalles importantes.',
    url: '/',
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
  themeColor: '#f5a623',
};
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased overflow-x-hidden',
          fontSans.variable,
          starWhite.variable,
          youngSerif.variable
        )}>
        <AOSinit />
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <div>
            {/* <Navbar /> */}
            <main className='w-full scroll-snap'>{children}</main>
            {/* <footer className='w-full flex items-center justify-center py-3'>
              <Link
                isExternal
                className='flex items-center gap-1 text-current'
                href='https://nextui-docs-v2.vercel.app?utm_source=next-app-template'
                title='nextui.org homepage'>
                <span className='text-default-600'>Powered by</span>
                <p className='text-primary'>NextUI</p>
              </Link>
            </footer> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
