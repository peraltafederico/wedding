'use server';

import { cookies, headers } from 'next/headers';

import { Locale } from '@/i18n/config';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
  const headersList = headers();
  const defaultLocale = headersList.get('accept-language');
  const initials = defaultLocale?.split('-')[0];

  return cookies().get(COOKIE_NAME)?.value || initials || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
