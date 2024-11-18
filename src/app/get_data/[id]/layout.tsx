
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <title>Get Some Data From QR Code</title>
        <body>{children}</body>
      </>
    );
  }
  
