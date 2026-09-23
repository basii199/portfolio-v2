// app/layout.tsx
import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Cursor } from "@/components/cursor";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ubokabasi-udoh.vercel.app/"),
  title: "Ubok-Abasi Udoh | Frontend Developer",
  description:
    "Portfolio of Ubok-Abasi Udoh, a frontend developer specializing in React, Next.js, and TypeScript.",
  keywords: [
    "frontend developer",
    "react",
    "next.js",
    "typescript",
    "portfolio",
    "Ubokabasi",
    "Odudu",
    "Udoh",
    "Ubokabasi Odudu",
    "Ubokabasi Udoh",
    "Ubokabasi Odudu Udoh",
    "Portfolio",
    "Projects",
    "Contact",
    "Website",
    "Portfolio Website",
    "Ubokabasi Udoh Portfolio",
    "Ubokabasi Odudu Portfolio",
    "Ubokabasi Udoh Portfolio Website",
    "Ubokabasi Odudu Udoh Portfolio Website",
    "web developer",
    "website developer",
    "software engineer",
    "frontend engineer",
    "frontend developer",
    "React developer",
    "React.js developer",
    "JavaScript",
    "TypeScript",
    "portfolio",
  ],
  authors: [
    { name: "Ubok-Abasi Udoh", url: "https://ubokabasi-udoh.vercel.app" },
  ],
  creator: "Ubok-Abasi Udoh",
  publisher: "Ubok-Abasi Udoh",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ubok-Abasi Udoh | Frontend Developer",
    description:
      "Portfolio of Ubok-Abasi Udoh, a frontend developer specializing in React, Next.js, and TypeScript.",
    url: "https://ubokabasi-udoh.vercel.app",
    siteName: "Ubok-Abasi Udoh",
    images: [
      {
        url: "/opengraph-image.webp",
        width: 1200,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubok-Abasi Udoh | Frontend Developer",
    description:
      "Portfolio of Ubok-Abasi Udoh, a frontend developer specializing in React, Next.js, and TypeScript.",
    images: ["/opengraph-image.webp"],
    creator: "@_basiudoh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true, // prolly set this to false later
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  applicationName: "Ubokabasi Udoh's Portfolio Website",
  category: "Developer Portfolio",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-black transition-colors duration-300`}
      >
        <Providers>
          <SmoothScroll>
            {/* <Cursor /> */}
            <Navigation />
            {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
