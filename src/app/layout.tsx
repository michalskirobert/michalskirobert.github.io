import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Source_Code_Pro,
  Source_Sans_3,
} from "next/font/google";

import { ToastProvider } from "./providers/toast-context";

import Header from "@components/layout/header";
import Footer from "@components/layout/footer";

import "./globals.css";
import { ToastSetter } from "./lib/toast";

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
  metadataBase: new URL("https://nurbyte.vercel.app"), // <--- add this line
  title: "NurByte - Robert Michalski | Software Engineer & Photographer",
  description:
    "Official website of Robert Michalski, also known as NurByte. Explore software development projects, photography portfolio, and professional services.",
  openGraph: {
    title: "NurByte - Robert Michalski",
    description:
      "Explore software engineering and photography portfolios by Robert Michalski.",
    url: "https://nurbyte.vercel.app",
    siteName: "NurByte",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NurByte Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NurByte - Robert Michalski",
    description:
      "Software engineering and photography portfolios by Robert Michalski.",
    images: ["/og-image.jpg"],
  },
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
        <ToastProvider>
          <ToastSetter />
          <main className="pt-[25px]">{children}</main>
        </ToastProvider>
        <Footer />
      </body>
    </html>
  );
}
