'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// For Google Analytics
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // Google Analytics section.
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Google Analytics
    const initializeGA = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID, {
        page_path: pathname,
      });
    };

    // Include the Google Analytics script once
    if (!window.gtagInitialized) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        initializeGA();
      };
      window.gtagInitialized = true;
    } else {
      // Track pageview on route change
      initializeGA();
    }
  }, [pathname]);
  // End of Google Analytics section.

  return (
    <ClerkProvider>
      <html lang="en">
          <body className={inter.className}>
            {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
