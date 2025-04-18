import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

const locales = [
  'en', 'de', 'fr', 'cs', 'it', 'bg', 'el', 'da', 'ar', 'es', 'fi',
  'he', 'hi', 'hu', 'id', 'ja', 'ko', 'ms', 'nl', 'no', 'pl', 'pt',
  'ro', 'ru', 'sv', 'th', 'tr', 'uk', 'vi', 'zh'
];

const defaultLocale = 'en';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const acceptLang = req.headers.get('accept-language');
  const browserLocale = acceptLang?.split(',')[0].split('-')[0] || defaultLocale;

  const locale = locales.includes(browserLocale) ? browserLocale : defaultLocale;

  const redirectUrl = new URL(`/${locale}${pathname}`, req.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};

