'use server';

import { cookies, headers } from 'next/headers';

import { Locale, locales, defaultLocale } from '@/i18n/config';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language');
  const baseBrowserLng = acceptLanguage?.split('-')[0] as 'en' | 'es';

  if (!locales.includes(baseBrowserLng || '')) {
    return defaultLocale;
  }

  return cookies().get(COOKIE_NAME)?.value || baseBrowserLng;
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
