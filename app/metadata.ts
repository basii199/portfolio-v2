// app/metadata.ts
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ubok-Abasi Udoh | Frontend Developer',
  description: 'Portfolio of Ubok-Abasi Udoh, a frontend developer specializing in React, Next.js, and TypeScript.',
  keywords: ['frontend developer', 'react', 'next.js', 'typescript', 'portfolio'],
  authors: [{ name: 'Ubok-Abasi Udoh', url: 'https://ubokabasi-udoh.vercel.app' }],
  creator: 'Ubok-Abasi Udoh',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  openGraph: {
    title: 'Ubok-Abasi Udoh | Frontend Developer',
    description: 'Portfolio of Ubok-Abasi Udoh, a frontend developer specializing in React, Next.js, and TypeScript.',
    url: 'https://ubokabasi-udoh.vercel.app',
    siteName: 'Ubok-Abasi Udoh',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ubok-Abasi Udoh | Frontend Developer',
    description: 'Portfolio of Ubok-Abasi Udoh, a frontend developer specializing in React, Next.js, and TypeScript.',
    images: ['/og-image.jpg'],
  },
};