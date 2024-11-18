
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <title>Upload QR Code, And Get Data Content</title>
        <body>{children}</body>
      </>
    );
  }
  
