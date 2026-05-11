import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CompactHeader from "@/components/compact-header";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "KAMZINO LAB — Advanced Development & Monitoring",
  description: "High-performance development in Go, JavaScript, and real-time data monitoring systems",
  icons: {
    icon: "/K.svg",
  },
};

import { LanguageProvider } from "@/lib/i18n";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
    >
      <body className={`${inter.className} bg-white text-[#1E1B4B]`}>
        <LanguageProvider>
          <CompactHeader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
