export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      Root
      <main className="flex-1 wrapper">{children}</main>
    </div>
  );
}
