// app/layout.tsx
import './globals.css';
import { Providers } from './providers';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Cursor } from '@/components/cursor';
import { SmoothScroll } from '@/components/smooth-scroll';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-black transition-colors duration-300`}>
        <Providers>
          <SmoothScroll>
            <Cursor />
            <Navigation />
              {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}