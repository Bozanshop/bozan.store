import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default async function Layout({ children, params }: LayoutProps) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}