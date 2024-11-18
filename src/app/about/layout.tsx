
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <title>About BrightQR</title>
        <body>{children}</body>
      </>
    );
  }
  
