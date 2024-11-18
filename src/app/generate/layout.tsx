
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <title>Generate A Unique QR Code</title>
      <body>{children}</body>
    </>
  );
}
