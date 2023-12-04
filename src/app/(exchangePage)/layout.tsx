import "@/styles/index.scss";
import "@/styles/scss/layouts/_postLayout.scss";

import Footer from "@/components/Footer/Footer";
import Loading from "./loading";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Suspense } from "react";
import { UserProvider } from "@/contexts/UserProvider";

export default function PostLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="16x16"
          href="/favicons/favicon-16x16.svg"
        />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#123463"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-chrome-192x192.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Nomade Finance" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#123463" />
        <link
          rel="apple-touch-startup-image"
          href="/favicons/favicon-16x16.svg"
        />
        <meta name="application-name" content="Nomade Finance" />
        <meta name="msapplication-TileColor" content="#123463" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#123463" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <UserProvider>
        <body>
          <Sidebar />
          <Suspense fallback={<Loading />}>
            <main className="post-child">{children}</main>
          </Suspense>
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
