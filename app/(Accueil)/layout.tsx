import "@/src/styles/globals.scss";

import Footer from "@/components/feature/layout/footer/footer";
import Header from "@/components/feature/layout/header/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/feature/layout/navbar/navbar";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import clsx from "clsx";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accueil | Nomade Finance",
  description: "Accédez aux cryptos en toute simplicité",
  category: 'technology',
  icons: {
    icon: '/favicons/favicon-16x16.svg',
    shortcut: '/favicons/favicon.ico',
    
    apple: '/favicons/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicons/apple-touch-icon-precomposed.png',
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

export default function RootLayout({
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
          <Header />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
