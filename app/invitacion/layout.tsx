import { Metadata, Viewport } from 'next';

import Snap from '../../components/snap';

const DESCRIPTION = 'Te invitamos a formar parte de nuestra historia!';
const TITLE = '¡Nos Casamos! Cami & Fede';

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

export default async function Layout({ children }: { children: React.ReactNode }) {
  return <Snap>{children}</Snap>;
}
