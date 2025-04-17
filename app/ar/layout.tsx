export default async function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { children, params } = props;

  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}

