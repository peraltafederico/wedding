'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { Toaster } from 'react-hot-toast';
import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
      mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN);
      mixpanel.track_pageview();
    }
  }, []);

  return (
    <>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>
          {children}
          <Toaster />
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}
