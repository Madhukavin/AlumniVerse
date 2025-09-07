
'use client';

import './globals.css';
import { AppLayout } from '@/components/layout/app-layout';
import { Toaster } from '@/components/ui/toaster';
import { usePathname } from 'next/navigation';
import { AuthProvider } from '@/components/auth-provider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  const metadata = {
    title: 'AlumniVerse',
    description: 'Connecting alumni for lifelong success.',
  };

  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏫</text></svg>"
        />
      </head>
      <body className="font-sans antialiased">
        <AuthProvider>
          {isLoginPage ? children : <AppLayout>{children}</AppLayout>}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
