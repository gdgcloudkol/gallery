import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import GoTop from "@/components/GoTop";
import Header from "@/components/Header";
import Script from "next/script";

const googleSans = localFont({
  src: [
    {
      path: "../public/assets/fonts/GoogleSans-Regular_0.ttf",
      weight: "400",
    },
    {
      path: "../public/assets/fonts/GoogleSans-Bold-v1.27.ttf",
      weight: "700",
    },
  ],
  variable: "--font-google",
});

export const metadata: Metadata = {
  title: {
    default: "Gallery | GDG Cloud Kolkata",
    template: "%s | Gallery | GDG Cloud Kolkata",
  },
  description: "Dynamic gallery made by GDG Cloud Kolkata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${googleSans.className}`}>
        {children}
        <GoTop />
      </body>
    </html>
  );
}
