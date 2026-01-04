import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Black Stone Granite & Marble | Premium Indian Marble & Granite Supplier",
  description:
    "Buy premium Indian marble & granite directly from source. Honest pricing, handpicked stone quality & PAN-India delivery support.",
  keywords: [
    "Indian marble supplier",
    "Makrana marble",
    "White marble slabs",
    "Granite supplier India",
    "Marble dealer Ujjain",
    "Black Stone Granite & Marble"
  ],
  metadataBase: new URL("https://blackstonemarble.online"),
  openGraph: {
    title: "Black Stone Granite & Marble | Premium Indian Marble & Granite Supplier",
    description:
      "Premium Indian Marble & Granite — Direct from Source | Honest Pricing | PAN-India Delivery",
    url: "https://blackstonemarble.online",
    siteName: "Black Stone Granite & Marble",
    images: [
      {
        url: "/og-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Black Stone Granite & Marble — Premium Marble & Granite",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://blackstonemarble.online",
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
