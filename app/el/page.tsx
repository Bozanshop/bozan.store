'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';

const locales = ['en', 'fr', 'de', 'es', 'it', 'zh', 'ja', 'pl', 'ru', 'vi'];

export default function HomePage() {
  const params = useParams();
  const locale = typeof params?.locale === 'string' ? params.locale : '';

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <main>
      <h1>Welcome to the e-shop – {locale.toUpperCase()}</h1>
    </main>
  );
}
