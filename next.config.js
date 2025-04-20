/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: [
      'en', 'de', 'fr', 'cs', 'it', 'bg', 'el', 'da', 'ar', 'es',
      'fi', 'he', 'hi', 'hu', 'id', 'ja', 'ko', 'ms', 'nl', 'no',
      'pl', 'pt', 'ro', 'ru', 'sv', 'th', 'tr', 'uk', 'vi', 'zh'
    ],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

