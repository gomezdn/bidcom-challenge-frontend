import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bidcom challenge landing',
  description: 'A landing page made with Next.js for a Bidcom challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
}
