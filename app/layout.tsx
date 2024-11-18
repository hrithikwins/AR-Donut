import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phoenix Foods",
  description: "Experience the taste from your eyes",
  openGraph: {
    title: "Phoenix Foods",
    description: "Experience the taste from your eyes",
    url: "https://ar-donut.vercel.app/",
    siteName: "Phoenix Foods",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Phoenix Foods",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Foods",
    description: "Experience the taste from your eyes",
    images: ["/og_image_donuts_new.jpg"],
  },
  icons: {
    icon: "/donut_favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
