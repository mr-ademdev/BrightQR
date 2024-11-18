import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrightQR | Home Page",
  description: "QR Code Creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/BrightQR.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="QR Code Creator & Generator" />
        <meta property="og:title" content="BrightQR Documentation" />
        <meta property="og:description" content="QR Code Creator & Generator" />
        <meta property="og:image" content="/qrcodo.png" />
        <meta property="og:url" content="https://brightqr.onrender.com" />
        <meta name="keywords" content="QR Code, Generator, Creator, Scanner" />
        <meta name="author" content="BrightQR" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="max-snippet:-1" />
        <meta name="google" content="max-image-preview:large" />
        <meta name="google" content="max-video-preview:-1" />
        <title>BrightQR | Home Page</title>
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
