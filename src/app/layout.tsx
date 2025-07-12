import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Source_Code_Pro,
  Source_Sans_3,
} from "next/font/google";

import "./globals.css";
import Header from "@src/components/layout/header";
import Footer from "@src/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSansPro = Source_Sans_3({
  variable: "--font-primary",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-secondary",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "NurByte",
  description: "Robert Michalski - NurByte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceSansPro.variable} ${sourceCodePro.variable} antialiased`}
      >
        <Header />
        <main className="pt-[25px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
