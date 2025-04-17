import { ReactNode } from "react";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  return (
    <html lang={resolvedParams.locale}>
      <body>{children}</body>
    </html>
  );
}

