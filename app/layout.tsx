import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import AOSinit from '../components/aos';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontSans, starWhite, youngSerif } from '@/config/fonts';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
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
            <main className='w-full'>{children}</main>
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
