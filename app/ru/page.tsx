import { notFound } from 'next/navigation';

const locales = ['en', 'fr', 'de', 'es', 'it', 'zh', 'ja', 'pl', 'ru', 'vi'];

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <main>
      <h1>Welcome to the e-shop – {locale.toUpperCase()}</h1>
    </main>
  );
}
