import "@/src/styles/globals.scss";

import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/feature/layout/footer/footer";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/feature/layout/navbar/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import { Viewport } from 'next'
import clsx from "clsx";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 7,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fffcf7' },
    { media: '(prefers-color-scheme: dark)', color: '#123463' },
  ],
}
const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicons/favicon-16x16.svg",
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicons/apple-touch-icon-precomposed.png",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function InfosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={clsx(
          montserrat.className,
          "bg-background transition-color duration-300"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="m-3">
            {children}
            <Analytics />
            <SpeedInsights/>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
