type LayoutProps = {
  children: React.ReactNode;
  params: { locale: string }; // ✅ SPRÁVNĚ
};

export default function Layout({ children, params }: LayoutProps) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}