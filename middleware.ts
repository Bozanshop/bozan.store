import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

const locales = ['en', 'fr', 'de', 'es'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const acceptLanguage = request.headers.get('accept-language');
    const preferredLang = acceptLanguage?.split(',')[0].split('-')[0] || defaultLocale;

    const matchedLocale = locales.includes(preferredLang)
      ? preferredLang
      : defaultLocale;

    return NextResponse.redirect(new URL(`/${matchedLocale}${pathname}`, request.url));
  }
}
